// 🔊 textToSpeech.js — La otra mitad del modo voz
//
// MessageInput ya convierte voz → texto (SpeechRecognition). Esto hace el camino
// contrario: lee las respuestas del bot en voz alta con SpeechSynthesis, en el
// idioma activo de la interfaz.

import { useState, useEffect, useCallback, useRef } from 'react';

const SPEECH_LANGS = { ES: 'es-ES', EN: 'en-US', FR: 'fr-FR' };

export const isSpeechSupported =
    typeof window !== 'undefined' && 'speechSynthesis' in window;

/**
 * 🧹 Convierte el markdown del bot en algo que suene natural leído.
 * Sin esto la voz pronuncia los asteriscos, las almohadillas y las URLs enteras.
 */
export function stripMarkdown(text) {
    if (typeof text !== 'string') return '';

    return text
        // Bloques de código: se anuncian, no se deletrean.
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`([^`]+)`/g, '$1')
        // Enlaces e imágenes: se lee la etiqueta, nunca la URL.
        .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
        // Énfasis y encabezados.
        .replace(/(\*\*|__)(.*?)\1/g, '$2')
        .replace(/(\*|_)(.*?)\1/g, '$2')
        .replace(/^#{1,6}\s+/gm, '')
        .replace(/^\s*>\s?/gm, '')
        // Viñetas: el guion o el punto medio se leerían como símbolo suelto.
        .replace(/^\s*[-*+•]\s+/gm, '')
        // Reglas horizontales y tuberías de tabla.
        .replace(/^\s*([-*_]\s*){3,}$/gm, ' ')
        .replace(/\|/g, ' ')
        // Los saltos de párrafo se vuelven pausa hablada.
        .replace(/\n{2,}/g, '. ')
        // Si el párrafo ya acababa en signo de puntuación, la línea anterior deja
        // un ".." que el sintetizador lee como una pausa doble y suena entrecortado.
        .replace(/([.!?:])\s*\.(\s|$)/g, '$1$2')
        // Espacios sobrantes que dejan las sustituciones anteriores.
        .replace(/\s{2,}/g, ' ')
        .trim();
}

/**
 * 🗣️ Elige la mejor voz instalada para un locale.
 * getVoices() está vacío hasta que el motor carga, de ahí el hook de abajo.
 */
function pickVoice(locale) {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;

    const prefix = locale.slice(0, 2).toLowerCase();
    // Coincidencia exacta ("es-ES") antes que el idioma suelto ("es-419").
    return voices.find(v => v.lang.toLowerCase() === locale.toLowerCase())
        || voices.find(v => v.lang.toLowerCase().startsWith(prefix))
        || null;
}

/**
 * Hook de lectura en voz alta.
 *
 * @param {string} lang Código de idioma activo (ES / EN / FR)
 * @returns {{speakingId: string|null, toggle: Function, supported: boolean}}
 *          `speakingId` permite que solo un mensaje se muestre "sonando".
 */
export function useTextToSpeech(lang) {
    const [speakingId, setSpeakingId] = useState(null);
    // Ref además del estado: el callback de speak() necesita saber qué se está
    // leyendo *ahora* para decidir si un `onend` tardío le pertenece o es de una
    // lectura anterior que acabamos de cancelar.
    const currentIdRef = useRef(null);

    // Chrome puebla getVoices() de forma asíncrona: sin este listener la primera
    // lectura de la sesión saldría con la voz por defecto del sistema.
    const [, setVoicesReady] = useState(false);
    useEffect(() => {
        if (!isSpeechSupported) return;

        const onVoicesChanged = () => setVoicesReady(true);
        window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
        return () => window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
    }, []);

    const stop = useCallback(() => {
        if (!isSpeechSupported) return;
        currentIdRef.current = null;
        window.speechSynthesis.cancel();
        setSpeakingId(null);
    }, []);

    // Salir de la página o desmontar con la voz sonando la dejaría hablando sola:
    // speechSynthesis vive en window, no en el componente.
    useEffect(() => stop, [stop]);

    // Cambiar de idioma a media lectura dejaría una voz en el idioma anterior.
    useEffect(() => { stop(); }, [lang, stop]);

    const toggle = useCallback((id, text) => {
        if (!isSpeechSupported) return;

        // Segundo clic en el mismo mensaje = parar.
        if (currentIdRef.current === id) {
            stop();
            return;
        }

        const clean = stripMarkdown(text);
        if (!clean) return;

        // cancel() antes de cada speak(): la cola de SpeechSynthesis es global y
        // sin esto los mensajes se encadenarían en vez de reemplazarse.
        window.speechSynthesis.cancel();

        const locale = SPEECH_LANGS[lang] || 'en-US';
        const utterance = new SpeechSynthesisUtterance(clean);
        utterance.lang = locale;

        const voice = pickVoice(locale);
        if (voice) utterance.voice = voice;

        const finish = () => {
            // Solo limpiamos si el evento corresponde a la lectura vigente: un
            // `onend` de la lectura que acabamos de cancelar no debe apagar la nueva.
            if (currentIdRef.current !== id) return;
            currentIdRef.current = null;
            setSpeakingId(null);
        };

        utterance.onend = finish;
        utterance.onerror = finish;

        currentIdRef.current = id;
        setSpeakingId(id);
        window.speechSynthesis.speak(utterance);
    }, [lang, stop]);

    return { speakingId, toggle, supported: isSpeechSupported };
}
