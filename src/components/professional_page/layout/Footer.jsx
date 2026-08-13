import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    footerStyle,
    footerInnerStyle,
    copyrightStyle,
    linksStyle,
    linkStyle,
    separatorStyle,
} from './styles/FooterStyles';
import { colors, MOBILE_BREAKPOINT, sectionWrapStyle } from '../theme';
import { useT } from '../i18n/LanguageContext.jsx';
import { OWNER_NAME } from '../legal/legalInfo.js';

// Cierre del sitio: copyright a la izquierda, páginas legales a la derecha.
// Nada más. Los datos de contacto viven en el panel oscuro de la sección
// Contacto, que va justo encima, y repetirlos aquí sería duplicar.
//
// Lo usan tanto el portfolio como las tres páginas legales, de ahí que viva en
// layout/ junto al Header y no dentro de una sección concreta.
function Footer() {
    const t = useT().footer;
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const w = windowWidth;
    const isMobile = w <= MOBILE_BREAKPOINT;

    // El año se calcula, no se escribe: en enero el footer no se queda viejo.
    const year = new Date().getFullYear();

    return (
        <footer style={footerStyle}>
            <div style={sectionWrapStyle(w)}>
                <div style={footerInnerStyle(w)}>
                    <p style={copyrightStyle}>© {year} {OWNER_NAME}</p>

                    <nav style={linksStyle(w)} aria-label={t.ariaLabel}>
                        {t.links.map((item, i) => (
                            <React.Fragment key={item.to}>
                                {/* El "·" solo separa en escritorio; apilados en
                                    móvil sobraría y ensuciaría la columna. */}
                                {i > 0 && !isMobile && <span style={separatorStyle}>·</span>}
                                <Link
                                    to={item.to}
                                    style={linkStyle}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = colors.teal)}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.muted)}
                                >
                                    {item.label}
                                </Link>
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
