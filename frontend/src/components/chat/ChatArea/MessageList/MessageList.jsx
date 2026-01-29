import React, { useEffect, useRef } from 'react';
import logo from "../../../../assets/profesional_view/images/profile/logo.jpg";
import './MessageList.css';

const MessageList = ({ messages = [], language }) => {
    // Ref for automatic scroll
    const messagesEndRef = useRef(null);

    // Automatic scroll when messages change
    useEffect(() => {
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
            {/* Contextual welcome message */}
            {messages.length === 0 && (
                <div className="welcome-chat-message">
                    <div className="message-avatar bot-avatar">
                        <img
                            src={logo}
                            alt="Heily"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <span className="avatar-fallback" style={{ display: 'none' }}>H</span>
                    </div>
                    <div className="welcome-bubble">
                        <p>Hi 👋 I am Heily.</p>
                        <p>
                            Ask me anything about my experience, tech stack, or projects.
                            This is an English-only chatbot to demonstrate my technical
                            communication skills.
                        </p>
                        <p className="welcome-cta">
                            What would you like to know?
                        </p>
                    </div>
                </div>
            )}

            {/* Message rendering with animations */}
            {messages.map((msg, index) => (
                <div key={index} className={`message-wrapper ${msg.type}`}>
                    {msg.type === 'bot' && (
                        <div className="message-avatar bot-avatar">
                            <img
                                src="/logo.png"
                                alt="Heily"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <span className="avatar-fallback" style={{ display: 'none' }}>H</span>
                        </div>
                    )}

                    <div className={`message ${msg.type}`}>
                        <div className="message-content">
                            {msg.content}
                        </div>
                        {msg.metadata && (
                            <div className="message-metadata">
                                <small>{msg.metadata.source || ''}</small>
                            </div>
                        )}
                    </div>

                    {msg.type === 'user' && (
                        <div className="message-avatar user-avatar">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="8" r="4" fill="currentColor" />
                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    )}
                </div>
            ))}

            {/* Invisible element for automatic scroll */}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;