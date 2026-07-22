import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MessageInput.css';
import chatService from '../../../services/chat/chatServicio';
import { LoadingSpinner, TypingIndicator } from '../LoadingIndicator/LoadingIndicator';
import { useT, useLanguage } from '../../professional_page/i18n/LanguageContext.jsx';

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

// Voice input locale follows the active UI language
const SPEECH_LANGS = { ES: 'es-ES', EN: 'en-US', FR: 'fr-FR' };

// Debug logging only in development builds
const DEV = import.meta.env.DEV;

// `isEmpty` (no messages yet) drives the quick-prompt chips: they only show
// on a fresh conversation, like most chat UIs.
const MessageInput = React.memo(function MessageInput({ onSendMessage, isEmpty = false }) {
    const t = useT().chat.input;
    const { lang } = useLanguage();

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    // Guardamos el *código* del error, no el texto ya traducido: así el aviso
    // sigue al idioma activo si el visitante lo cambia con el error en pantalla.
    const [errorCode, setErrorCode] = useState(null);
    const recognitionRef = useRef(null);
    // Cerrojo de envío: ver el comentario en sendText.
    const sendingRef = useRef(false);

    const errorText = !errorCode
        ? null
        : errorCode === 'voiceDenied'
            ? t.voiceDenied
            : (t.errors[errorCode] || t.errors.unknown);

    // Set up voice input, re-created whenever the active language changes
    useEffect(() => {
        if (!SpeechRecognitionAPI) return;

        const recognition = new SpeechRecognitionAPI();
        recognition.lang = SPEECH_LANGS[lang] || 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setMessage(prev => (prev.trim() ? `${prev.trim()} ${transcript}` : transcript));
        };

        recognition.onend = () => setIsRecording(false);

        recognition.onerror = (event) => {
            setIsRecording(false);
            // Denegar el micrófono era el único fallo totalmente mudo: el botón
            // se apagaba y el visitante no sabía por qué no le escuchaba nadie.
            // 'no-speech' o 'aborted' son normales y no merecen aviso.
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                setErrorCode('voiceDenied');
            }
        };

        recognitionRef.current = recognition;

        return () => {
            recognition.onresult = null;
            recognition.onend = null;
            recognition.onerror = null;
            recognition.stop();
        };
    }, [lang]);

    const toggleRecording = () => {
        const recognition = recognitionRef.current;
        if (!recognition || isLoading) return;

        if (isRecording) {
            recognition.stop();
            setIsRecording(false);
        } else {
            setErrorCode(null);
            recognition.start();
            setIsRecording(true);
        }
    };

    // Shared send flow, reused by the form submit and by the quick-prompt chips.
    const sendText = useCallback(async (rawText) => {
        const text = rawText.trim();

        // El cerrojo vive en una ref, no en `isLoading`. El estado de React no se
        // actualiza hasta el siguiente render, así que dos disparos dentro del
        // mismo tick (doble Enter, un envío programático, un chip pulsado a la vez
        // que el botón) leerían ambos `false` y colarían dos peticiones — y con
        // ellas dos mensajes duplicados en el historial. La ref cambia en el acto.
        // `isLoading` se mantiene porque es lo que pinta el spinner y deshabilita
        // los controles; son dos cosas distintas: una es UI, esta es exclusión.
        if (!text || sendingRef.current) return;

        sendingRef.current = true;
        setIsLoading(true);
        setErrorCode(null);
        try {
            const response = await chatService.sendMessage(
                text,
                'sobreheily', // Change according to the section you need
                lang // El backend responde en el idioma elegido, sin tener que deducirlo
            );

            if (DEV) {
                console.log('✅ Bot responded:', response.response);
                console.log('📊 Metadata:', response.metadata);
                if (response.isEmergency) {
                    console.warn('⚠️ Response from emergency mode');
                }
            }

            if (onSendMessage) {
                onSendMessage(text, response);
            }

            setMessage('');
        } catch (error) {
            // Cancelado a propósito: no es un fallo que reportar.
            if (error.name === 'AbortError') return;

            // El modo de emergencia cubre los errores de red (devuelve respuesta en
            // vez de lanzar), así que aquí solo llegan fallos reales del backend:
            // 400, 429, 500… Antes se tragaban en silencio y el mensaje simplemente
            // desaparecía sin que el visitante supiera que no se había enviado.
            setErrorCode(error.code || 'unknown');
            // Devolvemos el texto al input para que se pueda reintentar sin
            // reescribirlo (importante cuando vino de un chip de sugerencia).
            setMessage(text);

            if (DEV) {
                console.error('❌ Error:', error.message);
            }
        } finally {
            sendingRef.current = false;
            setIsLoading(false);
        }
        // `lang` va en las dependencias a propósito: sin él, el closure se quedaría
        // con el idioma que hubiera al montar y seguiría pidiéndole al backend que
        // responda en ese, aunque el visitante haya cambiado de idioma después.
        // `isLoading` ya NO hace falta aquí: el cerrojo es la ref, así que sendText
        // deja de reconstruirse en cada envío y MessageInput memoiza mejor.
    }, [onSendMessage, lang]);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendText(message);
    };

    const suggestions = t.suggestions || [];

    return (
        <div className="message-input-container">
            {/* Quick-prompt chips: replace the old truncated placeholder with real,
                clickable starter questions. Only on an empty conversation. */}
            {isEmpty && suggestions.length > 0 && (
                <div className="quick-prompts" role="group" aria-label={t.placeholder}>
                    {suggestions.map((prompt) => (
                        <button
                            key={prompt}
                            type="button"
                            className="quick-prompt-chip"
                            onClick={() => sendText(prompt)}
                            disabled={isLoading}
                        >
                            <span>{prompt}</span>
                            <svg className="quick-prompt-arrow" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    ))}
                </div>
            )}

            <form onSubmit={handleSubmit} className="message-form">
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            setErrorCode(null); // Empezar a reescribir descarta el aviso anterior
                        }}
                        placeholder={t.placeholder}
                        className="message-input"
                        disabled={isLoading}
                    />
                    <div className="action-buttons">
                        {SpeechRecognitionAPI && (
                            <button
                                type="button"
                                className={`action-button voice-button ${isRecording ? 'recording' : ''}`}
                                onClick={toggleRecording}
                                disabled={isLoading}
                                title={isRecording ? t.voiceStop : t.voiceStart}
                                aria-label={isRecording ? t.voiceStop : t.voiceStart}
                            >
                                {isRecording ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <line x1="4" y1="10" x2="4" y2="14" />
                                        <line x1="9" y1="6" x2="9" y2="18" />
                                        <line x1="14" y1="3" x2="14" y2="21" />
                                        <line x1="19" y1="8" x2="19" y2="16" />
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                        <line x1="12" y1="19" x2="12" y2="23" />
                                        <line x1="8" y1="23" x2="16" y2="23" />
                                    </svg>
                                )}
                            </button>
                        )}
                        <button
                            type="submit"
                            className="action-button send-button"
                            disabled={!message.trim() || isLoading}
                            title={t.send}
                        >
                            {isLoading ? (
                                <LoadingSpinner />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 19V5M5 12l7-7 7 7"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </form>

            {errorText && (
                <div className="input-error" role="alert">
                    <svg className="input-error-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{errorText}</span>
                    <button
                        type="button"
                        className="input-error-dismiss"
                        onClick={() => setErrorCode(null)}
                        aria-label={t.dismissError}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            )}

            {isLoading && <TypingIndicator label={t.thinking} />}
            {isRecording && <TypingIndicator label={t.listening} variant="recording" />}

            <div className="input-footer">
                <p className="disclaimer">
                    {t.disclaimer}
                </p>
            </div>
        </div>
    );
});

export default MessageInput;
