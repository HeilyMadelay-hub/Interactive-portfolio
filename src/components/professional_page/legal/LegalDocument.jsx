import React from 'react';
import {
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
} from './styles/LegalStyles';
import { colors } from '../theme';

// ---------------------------------------------------------------------------
// Texto enriquecido: string suelto, o array mezclando texto plano con
// { b } negrita, { a, href } enlace externo y { to, label } salto a otro
// documento legal. El formato lo definen los archivos de legal/content/.
// ---------------------------------------------------------------------------
function RichText({ value, onNavigate }) {
    if (value == null) return null;
    if (typeof value === 'string') return value;

    // Un valor suelto ({ a: 'email', href: '...' } en las filas kv, sin texto
    // alrededor) se trata como un array de un elemento en vez de descartarse.
    const parts = Array.isArray(value) ? value : [value];

    return parts.map((part, i) => {
        if (typeof part === 'string') return <React.Fragment key={i}>{part}</React.Fragment>;

        if (part.b) return <strong key={i} style={strongStyle}>{part.b}</strong>;

        // Referencia a otro documento legal: NO navega ni cierra nada, cambia el
        // contenido del modal en el sitio. Es un <button> y no un <a> porque no
        // lleva a ninguna URL: no debe abrirse en pestaña nueva ni copiarse.
        if (part.to) {
            return (
                <button
                    key={i}
                    type="button"
                    onClick={() => onNavigate(part.to)}
                    style={{ ...linkStyle, background: 'none', border: 'none', borderBottom: `1px solid ${colors.line}`, padding: 0, font: 'inherit', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = colors.teal)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = colors.line)}
                >
                    {part.label}
                </button>
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
function Block({ block, w, onNavigate }) {
    if (block.p) {
        return <p style={paragraphStyle}><RichText value={block.p} onNavigate={onNavigate} /></p>;
    }

    if (block.list) {
        return (
            <ul style={listStyle}>
                {block.list.map((item, i) => (
                    <li key={i} style={listItemStyle}>
                        <span style={listBulletStyle} aria-hidden="true">—</span>
                        <RichText value={item} onNavigate={onNavigate} />
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
                        <dd style={kvValueStyle}><RichText value={row.v} onNavigate={onNavigate} /></dd>
                    </div>
                ))}
            </dl>
        );
    }

    return null;
}

/**
 * Cuerpo de un documento legal: título, fecha y secciones numeradas.
 *
 * Sin caja ni carcasa propia a propósito — de eso se encarga quien lo monte
 * (hoy LegalModal). Así los tres documentos se ven idénticos y, si algún día
 * hicieran falta como página suelta, este mismo componente sirve.
 */
function LegalDocument({ doc, updatedLabel, updated, w, titleId, onNavigate }) {
    return (
        <>
            <h2 id={titleId} style={titleStyle(w)}>
                {doc.title.map((line, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && <br />}
                        {line}
                    </React.Fragment>
                ))}
            </h2>

            <p style={updatedStyle}>{updatedLabel} · {updated}</p>

            <hr style={ruleStyle(w)} />

            {doc.sections.map((section, i) => (
                <section key={section.title} style={sectionStyle(w)}>
                    {/* 01, 02, 03… calculado desde el índice: reordenar
                        secciones no deja huecos ni números repetidos. */}
                    <div style={sectionNumberStyle}>{String(i + 1).padStart(2, '0')}</div>
                    <div>
                        <h3 style={sectionTitleStyle}>{section.title}</h3>
                        {section.blocks.map((block, j) => (
                            <Block key={j} block={block} w={w} onNavigate={onNavigate} />
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
}

export default LegalDocument;
