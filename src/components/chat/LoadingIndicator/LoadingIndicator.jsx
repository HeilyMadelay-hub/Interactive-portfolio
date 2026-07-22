import React from 'react';
import './LoadingIndicator.css';

export const LoadingSpinner = () => (
    <span className="loading-spinner" aria-hidden="true" />
);

export const TypingIndicator = ({ label, variant = 'thinking' }) => (
    <div className={`heily-typing-indicator${variant === 'recording' ? ' recording-indicator' : ''}`}>
        <span>{label}</span>
        <span className="typing-dots">
            <span>.</span><span>.</span><span>.</span>
        </span>
    </div>
);
