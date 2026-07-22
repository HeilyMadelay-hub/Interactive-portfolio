// 💾 conversationStorage.js — Guarda el historial del chat entre recargas
//
// Todo vive en localStorage del visitante: no hay cuentas ni backend de sesión,
// así que la conversación es suya y solo suya. Cada lectura valida la forma de
// los datos porque localStorage es texto editable por cualquiera: un JSON roto
// o manipulado no debe tumbar la app, simplemente se descarta.

const STORAGE_KEY = 'ht-chat-conversations';

// 🔢 Versión del historial guardado.
//
// SUBE ESTE NÚMERO cada vez que cambies el texto de las respuestas predefinidas
// de emergencyMode.js o la forma de los datos. El historial guarda el texto ya
// resuelto de cada respuesta, así que sin esto quien haya chateado antes de un
// despliegue seguiría viendo para siempre la copia antigua — exactamente lo que
// pasó al reescribir los mensajes de "offline mode" a "AI Demo Mode".
//
// Al no coincidir, el historial viejo se descarta y se empieza limpio: se pierde
// una conversación de demo, que vale mucho menos que enseñar un texto retirado.
// v3: las respuestas pasaron a primera persona y se actualizó el stack técnico.
const STORAGE_VERSION = 3;

// Techo doble para no llenar la cuota del navegador (~5 MB) en una sesión larga.
// Se descartan las conversaciones más antiguas, nunca las fijadas.
const MAX_CONVERSATIONS = 40;
const MAX_MESSAGES_PER_CONVERSATION = 200;

const isNonEmptyString = (v) => typeof v === 'string' && v.length > 0;

// Acepta solo lo que MessageList sabe pintar; cualquier otra cosa se cae.
function sanitizeMessage(raw) {
    if (!raw || typeof raw !== 'object') return null;
    if (!['user', 'bot', 'system'].includes(raw.type)) return null;
    if (typeof raw.content !== 'string') return null;

    return {
        id: isNonEmptyString(raw.id) ? raw.id : `restored-${Math.random().toString(36).slice(2)}`,
        type: raw.type,
        content: raw.content,
        // createdAt es opcional en el render (el separador de día lo comprueba),
        // pero si viene corrupto mejor omitirlo que pintar "Invalid Date".
        ...(Number.isFinite(raw.createdAt) ? { createdAt: raw.createdAt } : {}),
        ...(raw.metadata && typeof raw.metadata === 'object' ? { metadata: raw.metadata } : {}),
    };
}

function sanitizeConversation(raw) {
    if (!raw || typeof raw !== 'object') return null;
    if (!isNonEmptyString(raw.id) || !isNonEmptyString(raw.nombre)) return null;

    const messages = Array.isArray(raw.messages)
        ? raw.messages.map(sanitizeMessage).filter(Boolean).slice(-MAX_MESSAGES_PER_CONVERSATION)
        : [];

    return {
        id: raw.id,
        nombre: raw.nombre,
        nombreCompleto: isNonEmptyString(raw.nombreCompleto) ? raw.nombreCompleto : raw.nombre,
        pinned: !!raw.pinned,
        messages,
    };
}

/**
 * 📥 Lee el historial guardado.
 * @returns {{conversations: Array, activeConversationId: string|null}}
 *          Siempre una forma válida, aunque no haya nada guardado o esté roto.
 */
export function loadConversations() {
    const empty = { conversations: [], activeConversationId: null };

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return empty;

        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.conversations)) return empty;

        // Historial de una versión anterior: se descarta entero. Los guardados sin
        // `version` son los de antes de introducir este campo, y también caen aquí.
        if (parsed.version !== STORAGE_VERSION) return empty;

        const conversations = parsed.conversations.map(sanitizeConversation).filter(Boolean);

        // Un id activo que ya no existe dejaría la app apuntando a la nada:
        // se degrada a "conversación nueva" en vez de arrastrar el id fantasma.
        const activeConversationId =
            isNonEmptyString(parsed.activeConversationId) &&
            conversations.some(c => c.id === parsed.activeConversationId)
                ? parsed.activeConversationId
                : null;

        return { conversations, activeConversationId };
    } catch {
        // JSON corrupto o storage bloqueado: arrancamos limpios en vez de romper.
        return empty;
    }
}

/**
 * 📤 Guarda el historial. Silencioso a propósito: perder la persistencia es
 * molesto, pero no justifica romperle el chat al visitante.
 */
export function saveConversations(conversations, activeConversationId) {
    try {
        // Las fijadas sobreviven al recorte; el resto se poda por antigüedad
        // (el array ya llega con las más recientes delante).
        const pinned = conversations.filter(c => c.pinned);
        const rest = conversations.filter(c => !c.pinned);
        const kept = [...pinned, ...rest].slice(0, MAX_CONVERSATIONS);

        const payload = {
            version: STORAGE_VERSION,
            conversations: kept.map(c => ({
                ...c,
                messages: c.messages.slice(-MAX_MESSAGES_PER_CONVERSATION),
            })),
            activeConversationId: kept.some(c => c.id === activeConversationId)
                ? activeConversationId
                : null,
        };

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
        // Cuota llena o modo privado: el chat sigue funcionando en memoria.
    }
}
