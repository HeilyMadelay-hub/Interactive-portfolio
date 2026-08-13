import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    pageStyle,
    headerStyle,
    headerNavStyle,
    headerRightStyle,
    mainStyle,
    contentWrapStyle,
    backLinkStyle,
    backArrowStyle,
    eyebrowStyle,
    titleStyle,
    updatedStyle,
    ruleStyle,
    sectionStyle,
    sectionNumberStyle,
    sectionTitleStyle,
    paragraphStyle,
    strongStyle,
    linkStyle,
    listStyle,
    listItemStyle,
    listBulletStyle,
    kvListStyle,
    kvRowStyle,
    kvKeyStyle,
    kvValueStyle,
    bottomBackStyle,
} from './styles/LegalStyles';
import {
    logoStyle,
    logoDotStyle,
    headerWrapStyle,
    langSwitcherStyle,
    langButtonStyle,
} from '../layout/styles/HeaderStyles';
import { colors, MOBILE_BREAKPOINT } from '../theme';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ThemeToggle from '../../../theme/ThemeToggle.jsx';
import Footer from '../layout/Footer.jsx';
import { getLegalContent } from './content/index.js';
import { LAST_UPDATED } from './legalInfo.js';

// ---------------------------------------------------------------------------
// Texto enriquecido: string suelto, o array mezclando texto plano con
// { b } negrita, { a, href } enlace externo y { to, label } enlace interno.
// El formato lo definen los archivos de legal/content/.
// ---------------------------------------------------------------------------
function RichText({ value }) {
    if (value == null) return null;
    if (typeof value === 'string') return value;

    // Un valor suelto ({ a: 'email', href: '...' } en las filas kv, sin texto
    // alrededor) se trata como un array de un elemento en vez de descartarse.
    const parts = Array.isArray(value) ? value : [value];

    return parts.map((part, i) => {
        if (typeof part === 'string') return <React.Fragment key={i}>{part}</React.Fragment>;

        if (part.b) return <strong key={i} style={strongStyle}>{part.b}</strong>;

        if (part.to) {
            return (
                <Link
                    key={i}
                    to={part.to}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = colors.teal)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = colors.line)}
                >
                    {part.label}
                </Link>
            );
        }

        if (part.a) {
            // mailto: se abre en el cliente de correo; el resto, en pestaña nueva
            // para no sacar al visitante del documento que está leyendo.
            const isExternal = !part.href.startsWith('mailto:');
            return (
                <a
                    key={i}
                    href={part.href}
                    style={linkStyle}
                    {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                    onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = colors.teal)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = colors.line)}
                >
                    {part.a}
                </a>
            );
        }

        return null;
    });
}

// Un bloque de contenido: párrafo, lista con viñetas o filas etiqueta/valor.
function Block({ block, w }) {
    if (block.p) {
        return <p style={paragraphStyle}><RichText value={block.p} /></p>;
    }

    if (block.list) {
        return (
            <ul style={listStyle}>
                {block.list.map((item, i) => (
                    <li key={i} style={listItemStyle}>
                        <span style={listBulletStyle} aria-hidden="true">—</span>
                        <RichText value={item} />
                    </li>
                ))}
            </ul>
        );
    }

    if (block.kv) {
        // Filas sin valor (NIF y domicilio, vacíos mientras el portfolio no
        // tenga actividad económica) desaparecen en vez de pintarse en blanco.
        const rows = block.kv.filter((row) => row.v);
        if (rows.length === 0) return null;

        return (
            <dl style={kvListStyle}>
                {rows.map((row) => (
                    <div key={row.k} style={kvRowStyle(w)}>
                        <dt style={kvKeyStyle}>{row.k}</dt>
                        <dd style={kvValueStyle}><RichText value={row.v} /></dd>
                    </div>
                ))}
            </dl>
        );
    }

    return null;
}

/**
 * Página legal compartida por /legal, /privacy y /cookies.
 *
 * Las tres son EL MISMO componente: idéntica cabecera, tipografía, ancho,
 * espaciado, numeración, botón de volver y footer. Lo único que cambia es el
 * documento que se le pasa por `docKey`, que se resuelve contra el idioma
 * activo del portfolio (ES/EN/FR) — el mismo que elige el visitante arriba.
 *
 * Sin caja alrededor a propósito: esto se lee como una página editorial del
 * sitio, no como un formulario ni un PDF incrustado.
 */
function LegalPage({ docKey }) {
    const { lang, setLang } = useLanguage();
    const { ui, doc } = getLegalContent(lang, docKey);

    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Se llega aquí desde el footer, que está al final del scroll: sin esto la
    // página legal abriría por la mitad.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [docKey]);

    // Título de pestaña propio de cada documento (y se restaura al salir).
    useEffect(() => {
        const previous = document.title;
        document.title = `${doc.docTitle} · Heily Madelay`;
        return () => { document.title = previous; };
    }, [doc.docTitle]);

    const w = windowWidth;
    const isMobile = w <= MOBILE_BREAKPOINT;

    const backLink = (
        <Link
            to="/portfolio"
            style={backLinkStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.teal;
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) arrow.style.transform = 'translateX(-3px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.muted;
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) arrow.style.transform = 'translateX(0)';
            }}
        >
            <svg style={backArrowStyle} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 12L3 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {ui.back}
        </Link>
    );

    return (
        <div style={pageStyle}>
            {/* Cabecera mínima: logo + tema + idioma. Sin anclas de sección
                (aquí no hay #about ni #projects) y sin CV: esta página es un
                documento, no otra pantalla de venta. */}
            <header style={headerStyle}>
                <div style={headerWrapStyle(w)}>
                    <nav style={headerNavStyle}>
                        <Link to="/portfolio" style={logoStyle}>
                            hT<span style={logoDotStyle}>.</span>
                        </Link>

                        <div style={headerRightStyle}>
                            <ThemeToggle />
                            <div style={langSwitcherStyle}>
                                {['ES', 'EN', 'FR'].map((code) => (
                                    <button
                                        key={code}
                                        style={langButtonStyle(lang === code)}
                                        onClick={() => setLang(code)}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = colors.teal)}
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.color = lang === code ? colors.ink : colors.muted)
                                        }
                                    >
                                        {code}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <main style={mainStyle(w)}>
                <div style={contentWrapStyle(w)}>
                    {backLink}

                    <p style={eyebrowStyle}>{ui.eyebrow}</p>

                    <h1 style={titleStyle(w)}>
                        {doc.title.map((line, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <br />}
                                {line}
                            </React.Fragment>
                        ))}
                    </h1>

                    <p style={updatedStyle}>
                        {ui.updatedLabel} · {LAST_UPDATED[lang] || LAST_UPDATED.ES}
                    </p>

                    <hr style={ruleStyle(w)} />

                    {doc.sections.map((section, i) => (
                        <section key={section.title} style={sectionStyle(w)}>
                            {/* 01, 02, 03… calculado desde el índice: reordenar
                                secciones no deja huecos ni números repetidos. */}
                            <div style={sectionNumberStyle}>{String(i + 1).padStart(2, '0')}</div>
                            <div>
                                <h2 style={sectionTitleStyle}>{section.title}</h2>
                                {section.blocks.map((block, j) => (
                                    <Block key={j} block={block} w={w} />
                                ))}
                            </div>
                        </section>
                    ))}

                    <hr style={ruleStyle(w)} />

                    <div style={{ ...bottomBackStyle(w), textAlign: isMobile ? 'center' : 'left' }}>
                        {backLink}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default LegalPage;
