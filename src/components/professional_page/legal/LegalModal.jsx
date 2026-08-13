import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    overlayStyle,
    panelStyle,
    panelBarStyle,
    panelBodyStyle,
    closeButtonStyle,
    eyebrowStyle,
    ruleStyle,
    relatedStyle,
    relatedLabelStyle,
    relatedButtonStyle,
} from './styles/LegalStyles';
import { colors } from '../theme';
import { useLanguage, useT } from '../i18n/LanguageContext.jsx';
import LegalDocument from './LegalDocument.jsx';
import { getLegalContent, DOC_BY_PATH, LEGAL_ROUTES, DOC_ORDER } from './content/index.js';
import { LAST_UPDATED } from './legalInfo.js';

/**
 * Los tres documentos legales, encima del portfolio.
 *
 * Modal y no página: el visitante está leyendo el portfolio y solo quiere
 * comprobar un punto de la política. Sacarlo a otra pantalla le obliga a volver
 * después y a perder el sitio donde estaba; aquí cierra y sigue donde lo dejó.
 *
 * `docKey` lo manda la ruta (/legal, /privacy, /cookies), así que los tres
 * documentos siguen teniendo URL propia y enlazable aunque se pinten en modal:
 * abrir uno desde el footer solo cambia la URL, no la pantalla.
 */
function LegalModal({ docKey, onClose, onSelectDoc }) {
    const { lang } = useLanguage();
    const footerLinks = useT().footer.links;

    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    const panelRef = useRef(null);
    const bodyRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Escape cierra, como cualquier modal del sitio.
    useEffect(() => {
        if (!docKey) return undefined;
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [docKey, onClose]);

    // Al abrir, el foco entra en el panel: sin esto el teclado seguiría
    // recorriendo el portfolio que hay detrás. Al cerrar vuelve donde estaba.
    useEffect(() => {
        if (!docKey) return undefined;
        const previous = document.activeElement;
        panelRef.current?.focus();
        return () => {
            if (previous instanceof HTMLElement) previous.focus();
        };
    }, [docKey]);

    // Cambiar de documento sin cerrar debe empezar por arriba, no heredar el
    // scroll del anterior.
    useEffect(() => {
        if (bodyRef.current) bodyRef.current.scrollTop = 0;
    }, [docKey]);

    // Los { to: '/privacy' } del contenido llegan como ruta; el modal trabaja
    // con claves de documento.
    const handleNavigate = useCallback(
        (path) => {
            const next = DOC_BY_PATH[path];
            if (next) onSelectDoc(next);
        },
        [onSelectDoc]
    );

    if (!docKey) return null;

    const { ui, doc } = getLegalContent(lang, docKey);
    const w = windowWidth;

    // Los otros dos documentos, para saltar sin cerrar y volver a buscar el
    // enlace en el footer. Se leen del diccionario para no repetir los nombres.
    const related = DOC_ORDER.filter((key) => key !== docKey).map((key) => ({
        key,
        label: footerLinks.find((link) => link.to === LEGAL_ROUTES[key])?.label,
    }));

    return (
        <div
            style={overlayStyle}
            onClick={(e) => {
                // Solo el velo cierra: un clic dentro del panel (seleccionar
                // texto, pulsar un enlace) no debe tirar el documento.
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="legal-modal-title"
                tabIndex={-1}
                style={{ ...panelStyle(w), outline: 'none' }}
            >
                <div style={panelBarStyle(w)}>
                    <p style={eyebrowStyle}>{ui.eyebrow}</p>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label={ui.close}
                        title={ui.close}
                        style={closeButtonStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = colors.ink;
                            e.currentTarget.style.backgroundColor = colors.line;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = colors.muted;
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div ref={bodyRef} style={panelBodyStyle(w)}>
                    <LegalDocument
                        doc={doc}
                        updatedLabel={ui.updatedLabel}
                        updated={LAST_UPDATED[lang] || LAST_UPDATED.ES}
                        w={w}
                        titleId="legal-modal-title"
                        onNavigate={handleNavigate}
                    />

                    <hr style={ruleStyle(w)} />

                    <div style={relatedStyle(w)}>
                        <span style={relatedLabelStyle}>{ui.related}</span>
                        {related.map((item) => (
                            <button
                                key={item.key}
                                type="button"
                                onClick={() => onSelectDoc(item.key)}
                                style={relatedButtonStyle}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = colors.teal;
                                    e.currentTarget.style.borderBottomColor = colors.teal;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = colors.body;
                                    e.currentTarget.style.borderBottomColor = colors.line;
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LegalModal;
