import React from 'react';
import { Link } from 'react-router-dom';
import { getStandaloneDictionary } from './professional_page/i18n/LanguageContext.jsx';
import './ErrorBoundary.css';

/**
 * 🧭 Pantalla para cualquier ruta que no exista (/foo, /portfolio/algo, /p...).
 *
 * Sin esto, <Routes> sin una Route que haga match no renderiza nada: el
 * visitante ve una página en blanco, que en un portfolio parece que el sitio
 * no existe — el mismo problema de fondo que ErrorBoundary resuelve para
 * errores de render, pero para URLs.
 *
 * Vive fuera del LanguageProvider (se monta como Route "*", como cualquier
 * otra página), así que usa el mismo diccionario "standalone" que
 * ErrorBoundary en vez de useT().
 */
function NotFound() {
    const t = getStandaloneDictionary().notFound;

    return (
        <div className="error-boundary" role="alert">
            <div className="error-boundary-card">
                <svg
                    className="error-boundary-icon"
                    width="26" height="26" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <h1 className="error-boundary-title">{t.title}</h1>
                <p className="error-boundary-message">{t.message}</p>

                <Link to="/" className="error-boundary-button">
                    {t.back}
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
