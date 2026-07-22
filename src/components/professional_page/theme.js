// Todos los valores apuntan a las variables CSS definidas en src/index.css,
// que es la paleta "Architect & Builder" compartida por el chatbot y la vista
// profesional. No se definen colores nuevos aquí: solo se referencian los ya
// existentes. Al ser var(--token), el tema oscuro llega solo: [data-theme="dark"]
// redefine los tokens y estos estilos inline se actualizan sin tocar nada más.
export const colors = {
    ink: 'var(--text)',                // #1A1B23 claro / #F8FAFC oscuro (texto principal)
    body: 'var(--text-muted)',         // #5A5B66 / #CBD5E1
    muted: 'var(--text-muted-light)',  // #6B6B76 / #94A3B8
    teal: 'var(--accent-text)',        // índigo como texto: #4F46E5 / #818CF8 (contraste AA en ambos)
    accent: 'var(--primary-lighter)',  // #818CF8 (índigo tenue — acentos sobre panel oscuro)
    coral: 'var(--coral)',             // #FF6B6B (coral — acento puntual: Available)
    blue: 'var(--primary)',            // #4F46E5 (índigo primario, idéntico en ambos temas)
    secondary: 'var(--secondary)',     // #4338CA
    bg: 'var(--background)',           // #FAFAF9 / #111827 (fondo principal)
    surface: 'var(--surface)',         // #FFFFFF / #1F2937
    line: 'var(--line)',               // línea editorial: texto al 8% / blanco al 10%
    monoBg: 'var(--panel)',            // carcasa del ConsolePanel: carbón en claro, superficie elevada en oscuro
    monoBorder: 'var(--panel-border)', // solo dibuja en oscuro; en claro es transparent
    monoLine: 'rgba(255, 255, 255, 0.08)', // separador sobre panel oscuro: vale en ambos temas
};

export const fonts = {
    serif: "'Space Grotesk', sans-serif",   // titulares (mismo tipo que el chat)
    sans: "'Inter', sans-serif",
    mono: "'JetBrains Mono', 'IBM Plex Mono', monospace",
};

export const MOBILE_BREAKPOINT = 880;

// Tokens compartidos por las secciones editoriales (Projects, About, WhatDoIdo, Skills...)
// para que la intro de cada sección (eyebrow + título + línea) se vea idéntica en todo el sitio.
export const sectionWrapStyle = (w) => ({
    maxWidth: '1180px',
    margin: '0 auto',
    padding: w <= MOBILE_BREAKPOINT ? '0 22px' : '0 40px',
});

export const sectionEyebrowStyle = {
    fontFamily: fonts.mono,
    fontSize: '11px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.teal,
    fontWeight: 600,
    margin: '0 0 18px',
};

export const sectionHeadingStyle = (w) => ({
    fontFamily: fonts.serif,
    fontWeight: 500,
    fontSize: w <= MOBILE_BREAKPOINT ? '32px' : '44px',
    lineHeight: 1.15,
    color: colors.ink,
    margin: '0 0 20px',
    letterSpacing: '-0.01em',
});

export const sectionUnderlineStyle = {
    width: '46px',
    height: '3px',
    background: colors.teal,
    borderRadius: '2px',
    margin: '0 0 24px',
};
