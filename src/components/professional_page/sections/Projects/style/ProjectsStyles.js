import { colors, fonts, MOBILE_BREAKPOINT } from '../../../theme';

export const sectionStyle = {
    backgroundColor: colors.bg,
    borderTop: `1px solid ${colors.line}`,
};

export const wrapStyle = (w) => ({
    maxWidth: '1180px',
    margin: '0 auto',
    padding: w <= MOBILE_BREAKPOINT ? '0 22px' : '0 40px',
});

// ---------- Intro ----------

export const introWrapStyle = (w) => ({
    paddingTop: w <= MOBILE_BREAKPOINT ? '32px' : '48px',
    paddingBottom: w <= MOBILE_BREAKPOINT ? '32px' : '40px',
    paddingLeft: w <= MOBILE_BREAKPOINT ? '30px' : '50px',
    paddingRight: w <= MOBILE_BREAKPOINT ? '30px' : '50px',
});

export const eyebrowStyle = {
    fontFamily: fonts.mono,
    fontSize: '11px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.teal,
    fontWeight: 600,
    margin: '0 0 18px',
};

export const introHeadingStyle = (w) => ({
    fontFamily: fonts.serif,
    fontWeight: 500,
    fontSize: w <= MOBILE_BREAKPOINT ? '34px' : '48px',
    lineHeight: 1.15,
    color: colors.ink,
    margin: '0 0 20px',
    letterSpacing: '-0.01em',
    maxWidth: '620px',
});

export const introLedeStyle = {
    fontFamily: fonts.sans,
    fontSize: '18px',
    lineHeight: 1.65,
    color: colors.body,
    maxWidth: '540px',
    margin: 0,
};

// ---------- Case study wrapper ----------

export const caseStudyStyle = (w, isFirst) => ({
    borderTop: isFirst ? 'none' : `1px solid ${colors.line}`,
    paddingTop: isFirst ? 0 : (w <= MOBILE_BREAKPOINT ? '52px' : '96px'),
    paddingBottom: w <= MOBILE_BREAKPOINT ? (isFirst ? '36px' : '52px') : (isFirst ? '60px' : '96px'),
    paddingLeft: 0,
    paddingRight: 0,
});

export const categoryStyle = {
    fontFamily: fonts.mono,
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: colors.teal,
    fontWeight: 600,
    margin: '0 0 16px',
};

export const titleStyle = (w) => ({
    fontFamily: fonts.serif,
    fontWeight: 500,
    fontSize: w <= MOBILE_BREAKPOINT ? '27px' : '33px',
    lineHeight: 1.22,
    color: colors.ink,
    margin: '0 0 16px',
    maxWidth: '460px',
});

export const summaryStyle = {
    fontFamily: fonts.sans,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: colors.ink,
    maxWidth: '440px',
    margin: '0 0 32px',
};

// ---------- Spec (Problema / Solución / Arquitectura) ----------

export const specBlockStyle = {
    marginBottom: '24px',
    maxWidth: '440px',
};

export const architectureBlockStyle = {
    marginBottom: '24px',
    maxWidth: '620px',
};

export const specLabelStyle = {
    fontFamily: fonts.mono,
    fontSize: '10.5px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: colors.body,
    fontWeight: 600,
    margin: '0 0 8px',
};

export const architectureListStyle = {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
};

export const architectureItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontFamily: fonts.sans,
    fontSize: '15px',
    lineHeight: 1.6,
    color: colors.body,
};

export const architectureDotStyle = {
    flexShrink: 0,
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: colors.teal,
    marginTop: '9px',
};

export const specTextStyle = {
    fontFamily: fonts.sans,
    fontSize: '15px',
    lineHeight: 1.75,
    color: colors.body,
    margin: 0,
};

// ---------- Resultados ----------

export const metricsRowStyle = (w) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: w <= MOBILE_BREAKPOINT ? '28px' : '40px',
    margin: '8px 0 32px',
    paddingTop: '28px',
    borderTop: `1px solid ${colors.line}`,
});

export const metricValueStyle = (w) => ({
    display: 'block',
    fontFamily: fonts.serif,
    fontWeight: 500,
    fontSize: w <= MOBILE_BREAKPOINT ? '25px' : '28px',
    color: colors.ink,
    margin: '0 0 4px',
});

export const metricLabelStyle = {
    display: 'block',
    fontFamily: fonts.sans,
    fontSize: '12.5px',
    lineHeight: 1.4,
    color: colors.muted,
    maxWidth: '140px',
};

// ---------- Stack ----------

export const stackTextStyle = {
    fontFamily: fonts.mono,
    fontSize: '13px',
    lineHeight: 1.9,
    color: colors.body,
    margin: 0,
};

// ---------- CTAs ----------

export const ctaRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '28px',
    marginTop: '32px',
};

export const ctaPrimaryStyle = {
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

export const ctaSecondaryStyle = {
    color: colors.muted,
    textDecoration: 'none',
    fontFamily: fonts.sans,
    fontSize: '14px',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'color 0.15s ease',
};

export const ctaArrowStyle = {
    transition: 'transform 0.15s ease',
};

// ---------- Image placeholder ----------

export const imageFrameStyle = (aspectRatio) => ({
    width: '100%',
    aspectRatio,
    borderRadius: '6px',
    border: `1.5px dashed ${colors.line}`,
    backgroundColor: colors.surface,
    backgroundImage: `repeating-linear-gradient(135deg, ${colors.line} 0px, ${colors.line} 1px, transparent 1px, transparent 13px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    boxSizing: 'border-box',
    transition: 'border-color 0.25s ease',
});

export const imageCaptionStyle = {
    fontFamily: fonts.serif,
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.5,
    color: colors.muted,
    textAlign: 'center',
    maxWidth: '260px',
};
