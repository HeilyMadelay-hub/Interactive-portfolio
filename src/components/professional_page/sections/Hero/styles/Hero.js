import { colors, fonts, MOBILE_BREAKPOINT } from '../../../theme';

export const heroSectionStyle = {
    backgroundColor: colors.bg,
};

export const heroWrapStyle = (windowWidth) => ({
    maxWidth: '1180px',
    margin: '0 auto',
    padding: windowWidth <= MOBILE_BREAKPOINT ? '0 22px' : '0 40px',
});

export const heroGridStyle = (windowWidth) => ({
    display: 'grid',
    gridTemplateColumns: windowWidth <= MOBILE_BREAKPOINT ? '1fr' : '1.15fr 0.85fr',
    gap: windowWidth <= MOBILE_BREAKPOINT ? '48px' : '72px',
    padding: windowWidth <= MOBILE_BREAKPOINT ? '60px 0' : '56px 0 90px',
    alignItems: 'start',
});

export const titleStyle = (windowWidth) => ({
    fontFamily: fonts.serif,
    fontWeight: 500,
    fontSize: windowWidth <= MOBILE_BREAKPOINT ? '31px' : '45px',
    lineHeight: 1.14,
    color: colors.ink,
    margin: '0 0 14px',
    letterSpacing: '-0.01em',
});

export const roleWrapStyle = {
    margin: '0 0 28px',
    fontFamily: fonts.mono,
    letterSpacing: '0.01em',
};

export const roleLine1Style = {
    display: 'block',
    fontSize: '14px',
    color: colors.ink,
    fontWeight: 600,
    marginBottom: '4px',
};

export const roleLine2Style = {
    display: 'block',
    fontSize: '13px',
    color: colors.body,
    fontWeight: 500,
};

export const ledeStyle = {
    fontFamily: fonts.sans,
    fontSize: '21px',
    lineHeight: 1.55,
    color: colors.ink,
    maxWidth: '470px',
    margin: '0 0 20px',
    fontWeight: 400,
};

export const ledeSubStyle = {
    fontFamily: fonts.sans,
    fontSize: '15.5px',
    lineHeight: 1.65,
    color: colors.body,
    maxWidth: '440px',
    margin: '0 0 32px',
};

export const ctaLinkStyle = {
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
    cursor: 'pointer',
    transition: 'color 0.15s ease, border-color 0.15s ease',
};

export const ctaArrowStyle = {
    transition: 'transform 0.15s ease',
};

// Posición e interior propios de este panel (la carcasa oscura la pone ConsolePanel).
export const consolePanelStyle = (windowWidth) => ({
    padding: windowWidth <= MOBILE_BREAKPOINT ? '24px 24px 20px' : '28px 30px 24px',
    marginTop: '6px',
});

// Solo el hueco del eyebrow; el resto de su tipografía la aporta ConsolePanel.
export const consoleTitleStyle = {
    marginBottom: '14px',
};

export const dirLineStyle = (isLast) => ({
    display: 'flex',
    alignItems: 'baseline',
    gap: '14px',
    fontSize: '12.5px',
    padding: '6px 0',
    borderBottom: isLast ? 'none' : `1px solid ${colors.monoLine}`,
    flexWrap: 'wrap',
});

export const dirPathStyle = {
    color: colors.accent,
    width: '96px',
    flexShrink: 0,
};

export const dirDescStyle = {
    color: colors.muted,
};

export const consoleMetricsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginTop: '6px',
    paddingTop: '10px',
    borderTop: `1px solid ${colors.monoLine}`,
};

export const metricValueStyle = {
    display: 'block',
    fontFamily: fonts.serif,
    fontSize: '24px',
    color: '#FFFFFF',
    fontWeight: 500,
    marginBottom: '4px',
};

export const metricLabelStyle = {
    display: 'block',
    fontSize: '11px',
    color: colors.muted,
    letterSpacing: '0.01em',
    lineHeight: 1.4,
};
