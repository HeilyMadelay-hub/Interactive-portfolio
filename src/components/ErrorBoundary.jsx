import React from 'react';
import { getStandaloneDictionary } from './professional_page/i18n/LanguageContext.jsx';
import './ErrorBoundary.css';

const DEV = import.meta.env.DEV;

/**
 * 🛟 Red de seguridad para errores de render.
 *
 * Sin esto, cualquier excepción durante el render desmonta el árbol entero y React
 * deja el <div id="root"> vacío: el visitante no ve un error, ve una página en
 * blanco. En un portfolio que abre un recruiter, eso es el peor fallo posible —
 * parece que el sitio no existe.
 *
 * Tiene que ser una clase: React no expone los hooks de captura de errores
 * (getDerivedStateFromError / componentDidCatch) a los componentes de función.
 */
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    // Se ejecuta durante el render del fallo: solo marca el estado, sin efectos.
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // En producción no se enseña la traza al visitante ni se ensucia su consola;
        // aquí es donde engancharías Sentry el día que lo montes.
        if (DEV) {
            console.error('Error capturado por ErrorBoundary:', error, errorInfo);
        }
    }

    // Recarga completa en vez de limpiar el estado: si el árbol se cayó, no sabemos
    // qué quedó a medias, y arrancar de cero es más fiable que remendar.
    handleReload = () => window.location.reload();

    render() {
        if (!this.state.hasError) return this.props.children;

        const t = getStandaloneDictionary().errorBoundary;

        return (
            <div className="error-boundary" role="alert">
                <div className="error-boundary-card">
                    <svg
                        className="error-boundary-icon"
                        width="26" height="26" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>

                    <h1 className="error-boundary-title">{t.title}</h1>
                    <p className="error-boundary-message">{t.message}</p>

                    <button
                        type="button"
                        className="error-boundary-button"
                        onClick={this.handleReload}
                    >
                        {t.retry}
                    </button>
                </div>
            </div>
        );
    }
}

export default ErrorBoundary;
