import { colors, fonts, MOBILE_BREAKPOINT } from '../../theme';

// Los tres documentos legales comparten componente y, por tanto, estos estilos:
// misma tipografía, mismo ancho, mismos números, mismo espaciado. Lo único que
// cambia entre Aviso Legal, Privacidad y Cookies es el contenido.

// ---------------------------------------------------------------------------
// MODAL — el documento se abre encima del portfolio, sin sacar al visitante de
// la página. La carcasa es la que cambia respecto a una página normal; todo lo
// de abajo (secciones, párrafos, listas) es idéntico se pinte donde se pinte.
// ---------------------------------------------------------------------------

export const overlayStyle = {
    position: 'fixed',
    inset: 0,
    // Velo oscuro en ambos temas: es lo que separa el documento del portfolio
    // que sigue detrás. El azul del velo es el mismo carbón del ConsolePanel.
    backgroundColor: 'rgba(10, 11, 15, 0.55)',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    zIndex: 1000,
    animation: 'legalOverlayIn 0.18s ease',
};

export const panelStyle = (w) => ({
    backgroundColor: colors.surface,
    borderRadius: w <= MOBILE_BREAKPOINT ? '12px' : '16px',
    border: `1px solid ${colors.line}`,
    boxShadow: '0 24px 64px rgba(10, 11, 15, 0.28)',
    width: '100%',
    maxWidth: '860px',
    // Alto acotado: el documento scrollea DENTRO del panel, no la página.
    maxHeight: w <= MOBILE_BREAKPOINT ? '92vh' : '86vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    animation: 'legalPanelIn 0.22s ease',
});

// Barra fija: dice qué se está leyendo aunque el documento esté scrolleado
// hasta el apartado 09, y sostiene el botón de cerrar.
export const panelBarStyle = (w) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    padding: w <= MOBILE_BREAKPOINT ? '16px 20px' : '18px 28px',
    borderBottom: `1px solid ${colors.line}`,
    flexShrink: 0,
});

export const closeButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    border: 'none',
    background: 'none',
    color: colors.muted,
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'color 0.15s ease, background-color 0.15s ease',
};

export const panelBodyStyle = (w) => ({
    overflowY: 'auto',
    padding: w <= MOBILE_BREAKPOINT ? '28px 20px 32px' : '40px 44px 48px',
});

// ---------------------------------------------------------------------------
// DOCUMENTO
// ---------------------------------------------------------------------------

export const eyebrowStyle = {
    fontFamily: fonts.mono,
    fontSize: '11px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.teal,
    fontWeight: 600,
    margin: 0,
};

export const titleStyle = (w) => ({
    fontFamily: fonts.serif,
    fontWeight: 500,
    fontSize: w <= MOBILE_BREAKPOINT ? '30px' : '42px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: colors.ink,
    margin: '0 0 18px',
});

export const updatedStyle = {
    fontFamily: fonts.mono,
    fontSize: '12px',
    letterSpacing: '0.04em',
    color: colors.muted,
    margin: 0,
};

export const ruleStyle = (w) => ({
    border: 'none',
    borderTop: `1px solid ${colors.line}`,
    margin: w <= MOBILE_BREAKPOINT ? '28px 0 32px' : '36px 0 44px',
});

// ---------- Secciones numeradas ----------

export const sectionStyle = (w) => ({
    display: 'grid',
    // Escritorio: número en su propia columna, a la izquierda del texto.
    // Móvil: número encima del título, en una sola columna.
    gridTemplateColumns: w <= MOBILE_BREAKPOINT ? '1fr' : '48px minmax(0, 1fr)',
    gap: w <= MOBILE_BREAKPOINT ? '8px' : '28px',
    marginBottom: w <= MOBILE_BREAKPOINT ? '36px' : '44px',
});

export const sectionNumberStyle = {
    fontFamily: fonts.mono,
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '0.04em',
    color: colors.teal,
    // Alinea el número con la primera línea del título, no con su caja.
    paddingTop: '2px',
};

export const sectionTitleStyle = {
    fontFamily: fonts.mono,
    fontSize: '12.5px',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: colors.ink,
    margin: '0 0 14px',
};

export const paragraphStyle = {
    fontFamily: fonts.sans,
    fontSize: '15px',
    lineHeight: 1.75,
    color: colors.body,
    margin: '0 0 14px',
};

export const strongStyle = {
    color: colors.ink,
    fontWeight: 600,
};

export const linkStyle = {
    color: colors.teal,
    textDecoration: 'none',
    borderBottom: `1px solid ${colors.line}`,
    transition: 'border-color 0.2s ease',
};

export const listStyle = {
    margin: '0 0 14px',
    paddingLeft: '18px',
    listStyle: 'none',
};

export const listItemStyle = {
    fontFamily: fonts.sans,
    fontSize: '15px',
    lineHeight: 1.75,
    color: colors.body,
    marginBottom: '12px',
    position: 'relative',
};

// Viñeta propia (guion índigo) en vez del bullet del navegador: mismo lenguaje
// visual que los eyebrows y los números de sección.
export const listBulletStyle = {
    position: 'absolute',
    left: '-18px',
    color: colors.teal,
};

// ---------- Filas etiqueta / valor (identificación, claves de storage) ----------

export const kvListStyle = {
    margin: '0 0 14px',
    padding: 0,
};

export const kvRowStyle = (w) => ({
    display: 'grid',
    gridTemplateColumns: w <= MOBILE_BREAKPOINT ? '1fr' : '160px minmax(0, 1fr)',
    gap: w <= MOBILE_BREAKPOINT ? '2px' : '20px',
    padding: '11px 0',
    borderBottom: `1px solid ${colors.line}`,
});

export const kvKeyStyle = {
    fontFamily: fonts.mono,
    fontSize: '11px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: colors.muted,
    fontWeight: 600,
    // Sin esto la etiqueta se estira hasta el borde inferior de la fila.
    alignSelf: 'start',
    paddingTop: '3px',
};

export const kvValueStyle = {
    fontFamily: fonts.sans,
    fontSize: '15px',
    lineHeight: 1.7,
    color: colors.body,
};

// ---------- Pie del documento: saltar a los otros dos ----------
// Evita cerrar el modal y volver a buscar el enlace en el footer para leer
// el siguiente documento.

export const relatedStyle = (w) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: w <= MOBILE_BREAKPOINT ? '10px' : '14px',
});

export const relatedLabelStyle = {
    fontFamily: fonts.mono,
    fontSize: '11px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: colors.muted,
    fontWeight: 600,
};

export const relatedButtonStyle = {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontFamily: fonts.sans,
    fontSize: '14px',
    fontWeight: 500,
    color: colors.body,
    borderBottom: `1px solid ${colors.line}`,
    paddingBottom: '2px',
    transition: 'color 0.2s ease, border-color 0.2s ease',
};
