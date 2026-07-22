import { colors, fonts, MOBILE_BREAKPOINT } from '../../../theme';

export const sectionStyle = {
    backgroundColor: colors.bg,
    borderTop: `1px solid ${colors.line}`,
};

export const paddingWrapStyle = (w) => ({
    padding: w <= MOBILE_BREAKPOINT ? '32px 0 70px' : '48px 0 110px',
});

export const introLedeStyle = {
    fontFamily: fonts.sans,
    fontSize: '18px',
    lineHeight: 1.6,
    color: colors.ink,
    maxWidth: '560px',
    margin: '0 0 8px',
};

export const listStyle = {
    marginTop: '20px',
};

// ---------- Item wrapper ----------

export const itemWrapStyle = (w, isFirst) => ({
    borderTop: isFirst ? 'none' : `1px solid ${colors.line}`,
    padding: w <= MOBILE_BREAKPOINT ? '40px 0' : '60px 0',
});

export const itemGridStyle = (w, metaOnRight) => ({
    display: 'grid',
    gridTemplateColumns: w <= MOBILE_BREAKPOINT ? '1fr' : metaOnRight ? '1fr 190px' : '190px 1fr',
    gap: w <= MOBILE_BREAKPOINT ? '20px' : '48px',
    alignItems: 'start',
});

// ---------- Meta aside ----------

export const metaBlockStyle = {
    marginBottom: '18px',
};

export const metaLabelStyle = {
    fontFamily: fonts.mono,
    fontSize: '10px',
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    color: colors.muted,
    margin: '0 0 5px',
};

export const metaValueStyle = {
    fontFamily: fonts.mono,
    fontSize: '13px',
    lineHeight: 1.5,
    color: colors.body,
    margin: 0,
};

// ---------- Main column ----------

export const companyRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '18px',
};

export const logoPlaceholderStyle = {
    width: '40px',
    height: '40px',
    flexShrink: 0,
    borderRadius: '6px',
    border: `1.5px dashed ${colors.line}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.mono,
    fontSize: '8.5px',
    color: colors.muted,
    letterSpacing: '0.03em',
    textAlign: 'center',
    lineHeight: 1.2,
};

export const logoImageStyle = {
    width: '40px',
    height: '40px',
    flexShrink: 0,
    borderRadius: '6px',
    objectFit: 'contain',
    // Blanco literal a propósito, también en modo oscuro: son logos corporativos
    // ajenos (fondo transparente o pensado para papel) y sobre gris oscuro se
    // vuelven ilegibles. Mismo recurso que las tiras de "trusted by".
    background: '#FFFFFF',
    padding: '3px',
    boxSizing: 'border-box',
    border: `1px solid ${colors.line}`,
};

export const companyNameStyle = {
    fontFamily: fonts.mono,
    fontSize: '12px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: colors.teal,
    fontWeight: 600,
};

export const companyTypeStyle = {
    fontFamily: fonts.sans,
    fontSize: '13px',
    color: colors.muted,
};

export const roleTitleStyle = (w) => ({
    fontFamily: fonts.serif,
    fontWeight: 500,
    fontSize: w <= MOBILE_BREAKPOINT ? '23px' : '27px',
    lineHeight: 1.25,
    color: colors.ink,
    margin: '0 0 8px',
    maxWidth: '560px',
});

export const roleSubtitleStyle = {
    fontFamily: fonts.mono,
    fontSize: '13px',
    letterSpacing: '0.02em',
    color: colors.teal,
    margin: '0 0 20px',
};

export const summaryStyle = {
    fontFamily: fonts.sans,
    fontSize: '15.5px',
    lineHeight: 1.7,
    color: colors.body,
    maxWidth: '540px',
    margin: '0 0 24px',
};

// ---------- Highlights (sin bullets tradicionales) ----------

export const highlightsListStyle = {
    marginBottom: '24px',
};

export const highlightRowStyle = {
    display: 'flex',
    gap: '12px',
    marginBottom: '13px',
    maxWidth: '560px',
};

export const highlightMarkStyle = {
    fontFamily: fonts.mono,
    color: colors.teal,
    flexShrink: 0,
    fontSize: '14px',
    lineHeight: 1.7,
};

export const highlightTextStyle = {
    fontFamily: fonts.sans,
    fontSize: '14.5px',
    lineHeight: 1.7,
    color: colors.body,
    margin: 0,
};

// ---------- Tech badges (minimalistas) ----------

export const badgeRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px',
};

export const badgeStyle = {
    fontFamily: fonts.mono,
    fontSize: '11.5px',
    color: colors.body,
    border: `1px solid ${colors.line}`,
    borderRadius: '5px',
    padding: '4px 10px',
};

// ---------- Toggle ----------

export const toggleButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: 0,
    fontFamily: fonts.sans,
    fontSize: '14px',
    fontWeight: 600,
    color: colors.ink,
    transition: 'color 0.15s ease',
};

export const toggleChevronStyle = (isOpen) => ({
    transition: 'transform 0.25s ease',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
});

// ---------- Detalle expandido ----------

export const detailsWrapStyle = (w) => ({
    marginTop: w <= MOBILE_BREAKPOINT ? '28px' : '36px',
    paddingLeft: w <= MOBILE_BREAKPOINT ? 0 : '0',
    overflow: 'hidden',
});

export const detailBlockStyle = {
    borderLeft: `2px solid ${colors.line}`,
    paddingLeft: '20px',
    marginBottom: '28px',
};

export const detailLabelStyle = {
    fontFamily: fonts.mono,
    fontSize: '10.5px',
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    color: colors.teal,
    fontWeight: 600,
    margin: '0 0 12px',
};

export const detailTextStyle = {
    fontFamily: fonts.sans,
    fontSize: '14.5px',
    lineHeight: 1.75,
    color: colors.body,
    maxWidth: '600px',
    margin: 0,
};
