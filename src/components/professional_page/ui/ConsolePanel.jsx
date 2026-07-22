import React from 'react';
import { colors, fonts } from '../theme';

/**
 * ConsolePanel — carcasa oscura reutilizable ("console card").
 *
 * Comparte SOLO lo invariante entre paneles: el fondo carbón, las esquinas
 * redondeadas, la fuente mono y el eyebrow superior. El contenido va como
 * `children`, y lo que cambia según el uso (padding, posición vertical, hueco
 * del eyebrow) se pasa por props — no se hardcodea aquí.
 *
 * Props:
 *   - title      → texto del eyebrow (opcional)
 *   - style      → estilos extra para la tarjeta (padding + marginTop de cada instancia)
 *   - titleStyle → estilos extra para el eyebrow (p. ej. su marginBottom)
 *   - children   → el cuerpo específico de cada panel
 */
const baseStyle = {
    backgroundColor: colors.monoBg,
    // El borde solo se ve en modo oscuro (en claro el token es transparent):
    // ahí el panel deja de recortarse por contraste con el papel y necesita
    // una línea que lo defina. Declararlo siempre evita descuadrar el tamaño.
    border: `1px solid ${colors.monoBorder}`,
    borderRadius: '12px',
    fontFamily: fonts.mono,
};

const baseTitleStyle = {
    fontSize: '10.5px',
    color: colors.muted,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    margin: 0,
};

function ConsolePanel({ title, style, titleStyle, children }) {
    return (
        <div style={{ ...baseStyle, ...style }}>
            {title && <p style={{ ...baseTitleStyle, ...titleStyle }}>{title}</p>}
            {children}
        </div>
    );
}

export default ConsolePanel;
