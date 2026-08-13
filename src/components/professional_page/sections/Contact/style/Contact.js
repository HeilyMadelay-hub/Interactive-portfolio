import { colors, fonts, MOBILE_BREAKPOINT } from '../../../theme';

export const sectionStyle = {
    backgroundColor: colors.bg,
    borderTop: `1px solid ${colors.line}`,
};

export const paddingWrapStyle = (w) => ({
    padding: w <= MOBILE_BREAKPOINT ? '32px 0 56px' : '48px 0 64px',
});

export const ledeStyle = {
    fontFamily: fonts.sans,
    fontSize: '18px',
    lineHeight: 1.6,
    color: colors.ink,
    maxWidth: '480px',
    margin: '0 0 8px',
};

export const gridStyle = (w) => ({
    display: 'grid',
    gridTemplateColumns: w <= MOBILE_BREAKPOINT ? '1fr' : '7fr 5fr',
    gap: w <= MOBILE_BREAKPOINT ? '40px' : '72px',
    alignItems: 'start',
});

// ---------- Columna izquierda (título + formulario) — COMPONENTE ContactForm ----------

// 👇 KNOB PROPIO de la columna izquierda. Súbelo/bájalo para mover SOLO el título + formulario.
export const formColumnStyle = (w) => ({
    marginTop: w <= MOBILE_BREAKPOINT ? 0 : '0px',
});

// Separación entre la intro (título/lede) y los campos del formulario.
export const formFieldsStyle = {
    marginTop: '28px',
};

// ---------- Formulario ----------

export const fieldStyle = {
    marginBottom: '18px',
};

export const labelStyle = {
    display: 'block',
    fontFamily: fonts.mono,
    fontSize: '11px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: colors.body,
    fontWeight: 600,
    marginBottom: '7px',
};

export const inputStyle = {
    width: '100%',
    background: 'none',
    border: 'none',
    borderBottom: `1px solid ${colors.line}`,
    borderRadius: 0,
    padding: '8px 0',
    fontFamily: fonts.sans,
    fontSize: '16px',
    color: colors.ink,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
};

export const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '80px',
    lineHeight: 1.6,
    fontFamily: fonts.sans,
};

// ---------- Consentimiento (casilla de política de privacidad) ----------

export const consentRowStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    margin: '4px 0 18px',
};

export const consentCheckboxStyle = {
    // Tamaño y color del check nativo: sin esto sale el azul del sistema
    // operativo, que es el único acento ajeno a la paleta en toda la sección.
    width: '15px',
    height: '15px',
    accentColor: colors.blue,
    cursor: 'pointer',
    flexShrink: 0,
    // Alinea la casilla con la primera línea del texto, no con su caja.
    marginTop: '2px',
};

export const consentLabelStyle = {
    fontFamily: fonts.sans,
    fontSize: '13.5px',
    lineHeight: 1.55,
    color: colors.body,
    cursor: 'pointer',
};

export const consentLinkStyle = {
    color: colors.teal,
    textDecoration: 'none',
    borderBottom: `1px solid ${colors.line}`,
    transition: 'border-color 0.2s ease',
};

export const submitButtonStyle = {
    color: colors.ink,
    textDecoration: 'none',
    fontFamily: fonts.sans,
    fontSize: '15px',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '9px',
    borderBottom: `1.5px solid ${colors.ink}`,
    paddingBottom: '3px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
};

export const submitArrowStyle = {
    transition: 'transform 0.15s ease',
};

// ---------- Panel de contacto directo ----------

// Posición e interior propios de este panel (la carcasa oscura la pone ConsolePanel).
// 👇 KNOB PROPIO del panel oscuro. Cambia el marginTop para mover SOLO el cuadro azul,
//    sin tocar el título ni el formulario. (24px compensa que el título subió; el panel se queda igual)
export const panelStyle = (w) => ({
    padding: w <= MOBILE_BREAKPOINT ? '28px 24px' : '36px 34px',
    marginTop: w <= MOBILE_BREAKPOINT ? 0 : '24px',
});

// Solo el hueco del eyebrow; el resto de su tipografía la aporta ConsolePanel.
export const panelLabelStyle = {
    marginBottom: '20px',
};

export const panelLinkRowStyle = (isLast) => ({
    display: 'block',
    padding: '14px 0',
    borderBottom: isLast ? 'none' : `1px solid ${colors.monoLine}`,
});

export const panelLinkLabelStyle = {
    display: 'block',
    fontSize: '10px',
    color: colors.muted,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginBottom: '6px',
};

export const panelLinkValueStyle = {
    color: colors.accent,
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.15s ease',
};

export const panelFooterStyle = {
    marginTop: '24px',
    paddingTop: '20px',
    borderTop: `1px solid ${colors.monoLine}`,
};

export const panelLocationStyle = {
    fontSize: '12.5px',
    color: colors.muted,
    marginBottom: '14px',
};

export const availabilityRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
};

export const availabilityDotStyle = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: colors.coral,
    flexShrink: 0,
};

export const availabilityTextStyle = {
    fontSize: '12px',
    color: '#FFFFFF',
};
