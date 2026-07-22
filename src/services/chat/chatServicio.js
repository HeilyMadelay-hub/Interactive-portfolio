// 📡 ChatServicio.js - Puente entre Frontend y Backend
// Conecta tu React con tu backend FastAPI
// 🚨 Incluye modo de emergencia para cuando el backend no esté disponible

import emergencyMode from './emergencyMode.js';

// 🏷️ Códigos estables de error. La UI los traduce (chat.input.errors[code]);
// el `message` de abajo queda para logs de desarrollo, nunca se pinta al visitante.
const HTTP_ERROR_CODES = {
  400: 'invalid',
  429: 'rateLimit',
  500: 'server',
  503: 'unavailable',
};

function chatError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// 🔇 Logging solo en desarrollo — en producción no se exponen payloads en consola
const DEV = import.meta.env.DEV;
const devLog = (...args) => { if (DEV) console.log(...args); };
const devWarn = (...args) => { if (DEV) console.warn(...args); };

class ChatService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.timeout = 30000; // 30 segundos máximo
    this.backendAvailable = null; // null = no verificado, true/false = estado conocido
    // Nota: aquí había `lastHealthCheck` y `healthCheckInterval`, restos de un
    // sondeo periódico que nunca llegó a escribirse aquí. El sondeo real vive
    // ahora en ChatPage (getSystemStatus cada 30s), que es quien pinta el estado.
  }

  /**
   * 📤 FUNCIÓN PRINCIPAL: Envía mensaje al backend
   * @param {string} message - Lo que escribió el usuario
   * @param {string} section - Sección actual (sobreheily, proyectos, etc)
   * @param {string} lang - Idioma elegido en la interfaz (ES / EN / FR)
   * @param {AbortSignal} signal - Para cancelar request si es necesario
   * @returns {Promise<Object>} - Respuesta del backend o modo emergencia
   */
  async sendMessage(message, section = 'sobreheily', lang = 'EN', signal = null) {
    try {
      // 🎯 PASO 1: Validar que tenemos los datos básicos
      if (!message || !message.trim()) {
        throw chatError('invalid', 'El mensaje no puede estar vacío');
      }

      // ⏰ PASO 2: Setup de timeout automático
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      // 🔄 PASO 3: Usar signal externo si existe, sino el interno
      const finalSignal = signal || controller.signal;

      // 📦 PASO 4: Preparar datos para enviar (compatible con tu backend actual)
      const requestData = {
        message: message.trim(),
        section: section,
        // 🌍 Idioma en el que hay que RESPONDER, no en el que está escrito el
        // mensaje. El navegador ya sabe cuál eligió el visitante, así que se lo
        // damos hecho al backend en vez de que lo adivine leyendo el texto:
        // adivinarlo falla justo en los casos cortos ("React?", siglas, nombres
        // de tecnologías), y falla del todo si alguien con la interfaz en
        // francés escribe en inglés por cortesía.
        // Formato en minúscula (es / en / fr), que es el convenio habitual.
        lang: String(lang || 'EN').toLowerCase(),
        context: null, // Tu backend acepta context opcional
        timestamp: Date.now()
      };

      devLog('🚀 Enviando al backend:', requestData);

      // 📡 PASO 5: Hacer la llamada a tu backend actual
      const response = await fetch(`${this.baseURL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
        signal: finalSignal
      });

      // 🧹 PASO 6: Limpiar timeout
      clearTimeout(timeoutId);

      // ❌ PASO 7: Manejar errores HTTP específicos
      if (!response.ok) {
        throw chatError(
          HTTP_ERROR_CODES[response.status] || 'unknown',
          `Error ${response.status}: ${response.statusText}`
        );
      }

      // 📋 PASO 8: Convertir respuesta a JSON
      const data = await response.json();
      
      devLog('✅ Respuesta del backend:', data);

      // ✅ Backend funcionando - desactivar modo emergencia si estaba activo
      if (emergencyMode.isActive) {
        emergencyMode.deactivate();
      }
      this.backendAvailable = true;

      // 🔍 PASO 9: Validar que la respuesta tiene lo que esperamos
      if (!data.response) {
        throw chatError('server', 'Respuesta inválida del servidor');
      }

      // 🎉 PASO 10: Retornar respuesta limpia para el frontend
      return {
        response: data.response,
        metadata: data.metadata || {},
        error: data.error || null,
        timestamp: Date.now()
      };

    } catch (error) {
      // 🛑 MANEJO DE ERRORES ESPECIALES

      // Cancelado desde fuera (el usuario abortó el request)
      if (error.name === 'AbortError' && signal?.aborted) {
        devLog('⏹️ Request cancelado por el usuario');
        throw error;
      }

      if (DEV) console.error('❌ Error en ChatService:', error);

      // ⏰ AbortError sin señal externa = timeout interno → modo emergencia
      if (error.name === 'AbortError') {
        devWarn('🚨 Timeout del backend, activando modo de emergencia...');
        this.backendAvailable = false;
        emergencyMode.activate('El servidor está tardando demasiado');

        return emergencyMode.generateResponse(message);
      }

      // 🌐 Error de red (sin internet, backend caído, CORS):
      // fetch rechaza siempre con TypeError en estos casos
      if (error instanceof TypeError) {
        devWarn('🚨 Backend no disponible, activando modo de emergencia...');
        this.backendAvailable = false;
        emergencyMode.activate('No se puede conectar con el servidor');

        // 🆘 Retornar respuesta de emergencia en lugar de error
        return emergencyMode.generateResponse(message);
      }

      // 🎯 Llegados aquí el servidor SÍ contestó, solo que con un error (400, 429,
      // 500…). El modo de emergencia existe para cuando no hay backend al otro
      // lado; usarlo aquí disfrazaría un "espera un momento" de respuesta normal
      // y el visitante repetiría la pregunta sin saber que le están limitando.
      // Se propaga para que la UI lo explique con su propio texto traducido.
      throw error;
    }
  }

  /**
   * 🏥 FUNCIÓN AUXILIAR: Verificar estado del sistema 
   * Esta función es útil para saber si el backend está funcionando correctamente
   * y si la API está accesible antes de enviar mensajes.
   * Puedes usarla para mostrar un mensaje de estado en la UI o para hacer un health check inicial.
   * 💡 Úsala al inicio de la app o cuando el usuario lo solicite.
   */
  async getSystemStatus() {
    try {
      const response = await fetch(`${this.baseURL}/chat/status`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Status check failed: ${response.status}`);
      }

      return await response.json();

    } catch (error) {
      if (DEV) console.error('❌ Status check error:', error);
      return { error: error.message, healthy: false };
    }
  }

  /**
   * 💓 FUNCIÓN AUXILIAR: Health check rápido
   */
  async healthCheck() {
    try {
      const response = await fetch(`${this.baseURL}/health`, {
        method: 'GET'
      });

      return response.ok;

    } catch (error) {
      if (DEV) console.error('❌ Health check failed:', error);
      return false;
    }
  }
}

// 🏭 EXPORTAR INSTANCIA ÚNICA (Singleton)
// Toda la app usa la misma instancia del servicio
export default new ChatService();

      /*
      
      Usuario escribe mensaje
       ↓
MessageInput.jsx llama a chatService.sendMessage()
       ↓
ChatServicio.js hace POST a http://localhost:5000/api/chat
       ↓
¿Backend responde?
   ✅ SÍ → Devuelve respuesta del bot
   ❌ NO → Activa modo emergencia → Devuelve respuesta predefinida
       ↓
Respuesta llega a MessageInput
       ↓
Se muestra en ChatArea

Solo maneja lógica técnica: Hace peticiones HTTP, maneja errores, timeouts, etc.
Los mensajes de consola (como console.log, console.error) son para debugging de desarrollador, no para el usuario final. Pueden estar en español sin problema.
Los comentarios también son para ti como desarrollador, no afectan la interfaz del usuario.
Las respuestas del bot vienen del backend, no de este archivo.
      
      */