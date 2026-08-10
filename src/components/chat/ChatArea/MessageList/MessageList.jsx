import React, { useEffect, useRef } from 'react';
import { useT, useLanguage } from '../../../professional_page/i18n/LanguageContext.jsx';
import { useTextToSpeech } from '../../../../services/chat/textToSpeech';
import MessageContent from './MessageContent.jsx';
import './MessageList.css';

const LOCALES = { ES: 'es-ES', EN: 'en-US', FR: 'fr-FR' };

// "14:32" style label for a message timestamp
function formatTime(ts, locale) {
    return new Date(ts).toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
}

function isSameDay(a, b) {
    const da = new Date(a);
    const db = new Date(b);
    return da.getFullYear() === db.getFullYear()
        && da.getMonth() === db.getMonth()
        && da.getDate() === db.getDate();
}

// Day-divider label: "Today" / "Yesterday" / a localized full date
function formatDateLabel(ts, locale, t) {
    const now = Date.now();
    if (isSameDay(ts, now)) return t.dateToday;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (isSameDay(ts, yesterday.getTime())) return t.dateYesterday;
    return new Date(ts).toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' });
}

// Luna para el aviso de modo demo. Antes era una nube tachada, que es el glifo
// universal de "esto se ha roto"; el backend no está caído, está durmiendo a
// propósito, y el icono tiene que contar eso mismo.
function DemoModeIcon() {
    return (
        <svg className="system-notice-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
    );
}

// Speaker glyphs for the read-aloud control: waves when idle, muted while playing.
function SpeakerIcon({ speaking }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            {speaking ? (
                <>
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                </>
            ) : (
                <>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </>
            )}
        </svg>
    );
}

// Translate glyph for the "replies in X languages" note in the welcome bubble.
function TranslateIcon() {
    return (
        <svg className="welcome-langs-icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
        </svg>
    );
}

const MessageList = React.memo(function MessageList({ messages = [], topContent = null }) {
    const t = useT().chat;
    const { lang } = useLanguage();
    const locale = LOCALES[lang] || 'en-US';
    const { speakingId, toggle: toggleSpeech, supported: speechSupported } = useTextToSpeech(lang);

    // Ref for automatic scroll
    const messagesEndRef = useRef(null);

    // Scroll to the newest message when one arrives — but not on initial load
    // with zero messages, which would jump past long topContent (case study).
    useEffect(() => {
        if (messages.length === 0) return;
        const timer = setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [messages]);

    return (
        <div className="messages-container">
            <div className="messages-inner">
                {/* Project mode: the project's README stands in for the welcome bubble. */}
                {topContent}

                {/* Contextual welcome message, styled as a regular bot chat bubble */}
                {!topContent && messages.length === 0 && (
                    <div className="message-wrapper bot">
                        <div className="message bot">
                            <div className="message-content">
                                {t.welcome.map(line => (
                                    <p key={line}>{line}</p>
                                ))}
                                <p className="welcome-langs">
                                    <TranslateIcon />
                                    {t.welcomeLangs}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Message rendering with animations. Each message carries a stable id
                    generated on creation, so keys survive list growth and re-renders.
                    A subtle day-divider is inserted at the start and whenever the day
                    changes; each bubble shows a light "HH:MM" timestamp underneath. */}
                {messages.map((msg, index) => {
                    const prev = messages[index - 1];
                    const showDivider = msg.createdAt
                        && (!prev?.createdAt || !isSameDay(msg.createdAt, prev.createdAt));

                    const divider = showDivider && (
                        <div className="date-divider">
                            <span>{formatDateLabel(msg.createdAt, locale, t)}</span>
                        </div>
                    );

                    // System line (demo-mode notice): centered, once per conversation, not a chat bubble
                    if (msg.type === 'system') {
                        return (
                            <React.Fragment key={msg.id ?? index}>
                                {divider}
                                <div className="system-notice">
                                    <DemoModeIcon />
                                    <span>{t.offlineNotice}</span>
                                </div>
                            </React.Fragment>
                        );
                    }

                    // Solo las respuestas del bot se leen en voz alta: el visitante
                    // no necesita que le relean lo que él mismo acaba de escribir.
                    const canSpeak = speechSupported && msg.type === 'bot' && typeof msg.content === 'string';
                    const isSpeaking = speakingId === msg.id;

                    return (
                        <React.Fragment key={msg.id ?? index}>
                            {divider}
                            <div className={`message-wrapper ${msg.type}`}>
                                <div className={`message ${msg.type}`}>
                                    <div className="message-content">
                                        <MessageContent type={msg.type} content={msg.content} />
                                    </div>
                                </div>
                                <div className="message-meta">
                                    {msg.createdAt && (
                                        <span className="message-time">{formatTime(msg.createdAt, locale)}</span>
                                    )}
                                    {canSpeak && (
                                        <button
                                            type="button"
                                            className={`message-speak ${isSpeaking ? 'speaking' : ''}`}
                                            onClick={() => toggleSpeech(msg.id, msg.content)}
                                            title={isSpeaking ? t.stopReading : t.readAloud}
                                            aria-label={isSpeaking ? t.stopReading : t.readAloud}
                                        >
                                            <SpeakerIcon speaking={isSpeaking} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}

                {/* Invisible element for automatic scroll */}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
});

export default MessageList;
