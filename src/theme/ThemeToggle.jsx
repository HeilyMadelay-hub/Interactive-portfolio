import React from 'react';
import { useTheme } from './ThemeContext.jsx';
import { useT } from '../components/professional_page/i18n/LanguageContext.jsx';
import './ThemeToggle.css';

// Iconos de línea monocromos, como los del header del chat: heredan
// `currentColor`, así que siguen el gris apagado del botón y se tiñen de
// índigo en hover sin reglas extra.
function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
        </svg>
    );
}

// Convención ChatGPT/Linear: en modo claro se muestra la luna (pulsar lleva a
// oscuro) y en oscuro el sol. Solo icono, sin texto.
function ThemeToggle({ className = '' }) {
    const { theme, toggleTheme } = useTheme();
    const t = useT();
    const isDark = theme === 'dark';
    const label = isDark
        ? (t.themeToggle?.toLight ?? 'Switch to light mode')
        : (t.themeToggle?.toDark ?? 'Switch to dark mode');

    return (
        <button
            type="button"
            className={`theme-toggle ${className}`.trim()}
            onClick={toggleTheme}
            aria-label={label}
            title={label}
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}

export default ThemeToggle;
