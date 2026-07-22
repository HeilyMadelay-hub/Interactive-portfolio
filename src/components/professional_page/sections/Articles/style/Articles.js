import { colors, fonts, MOBILE_BREAKPOINT } from '../../../theme';

export const sectionStyle = {
    backgroundColor: colors.bg,
    borderTop: `1px solid ${colors.line}`,
};

export const paddingWrapStyle = (w) => ({
    padding: w <= MOBILE_BREAKPOINT ? '32px 0 40px' : '48px 0 56px',
});

export const gridStyle = (w) => ({
    display: 'grid',
    gridTemplateColumns: w <= MOBILE_BREAKPOINT ? '1fr' : '0.85fr 2fr',
    gap: w <= MOBILE_BREAKPOINT ? '40px' : '72px',
    alignItems: 'start',
});

// ---------- Columna izquierda ----------

export const introTextStyle = {
    fontFamily: fonts.sans,
    fontSize: '15.5px',
    lineHeight: 1.7,
    color: colors.body,
    maxWidth: '320px',
    margin: '0 0 32px',
};

// ---------- Lista de artículos ----------

export const articleWrapStyle = (w, isFirst) => ({
    borderTop: isFirst ? 'none' : `1px solid ${colors.line}`,
    padding: isFirst ? '0 0 28px' : (w <= MOBILE_BREAKPOINT ? '24px 0' : '28px 0'),
});

export const regularLayoutStyle = (w) => ({
    display: 'flex',
    flexDirection: w <= MOBILE_BREAKPOINT ? 'column' : 'row',
    gap: w <= MOBILE_BREAKPOINT ? '16px' : '24px',
    alignItems: 'flex-start',
});

export const imageFrameStyle = (aspectRatio) => ({
    aspectRatio,
    borderRadius: '6px',
    border: `1.5px dashed ${colors.line}`,
    backgroundColor: colors.surface,
    backgroundImage: `repeating-linear-gradient(135deg, ${colors.line} 0px, ${colors.line} 1px, transparent 1px, transparent 13px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.25s ease',
});

export const regularImageWrapStyle = (w) => ({
    width: w <= MOBILE_BREAKPOINT ? '100%' : '160px',
    flexShrink: 0,
});

export const imageCaptionStyle = {
    fontFamily: fonts.serif,
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: 1.5,
    color: colors.muted,
    textAlign: 'center',
};

export const dateStyle = {
    fontFamily: fonts.mono,
    fontSize: '11.5px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: colors.muted,
    margin: '0 0 10px',
};

export const articleTitleStyle = (w, isFirst) => ({
    fontFamily: fonts.serif,
    fontWeight: 500,
    fontSize: w <= MOBILE_BREAKPOINT ? (isFirst ? '20px' : '17px') : (isFirst ? '21px' : '18px'),
    lineHeight: 1.3,
    color: colors.ink,
    margin: '0 0 8px',
    maxWidth: '480px',
});

export const descriptionStyle = {
    fontFamily: fonts.sans,
    fontSize: '14.5px',
    lineHeight: 1.7,
    color: colors.body,
    maxWidth: '520px',
    margin: '0 0 14px',
};

export const techStyle = {
    fontFamily: fonts.mono,
    fontSize: '12px',
    color: colors.teal,
    margin: '0 0 14px',
};

export const readLinkStyle = {
    color: colors.ink,
    textDecoration: 'none',
    fontFamily: fonts.sans,
    fontSize: '14px',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: `1.5px solid ${colors.ink}`,
    paddingBottom: '2px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
};

export const readArrowStyle = {
    transition: 'transform 0.15s ease',
};

// ---------- CTA final ----------

export const moreWrapStyle = (w) => ({
    marginTop: w <= MOBILE_BREAKPOINT ? '8px' : '12px',
});

export const moreLinkStyle = {
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
    transition: 'color 0.15s ease, border-color 0.15s ease',
};
