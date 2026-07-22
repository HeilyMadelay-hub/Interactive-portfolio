import { colors, fonts, MOBILE_BREAKPOINT } from '../../../theme';

export const sectionStyle = {
    backgroundColor: colors.bg,
    borderTop: `1px solid ${colors.line}`,
};

export const paddingWrapStyle = (w) => ({
    padding: w <= MOBILE_BREAKPOINT ? '32px 0 54px' : '48px 0 76px',
});

export const gridStyle = (w) => ({
    display: 'grid',
    gridTemplateColumns: w <= MOBILE_BREAKPOINT ? '1fr' : '7fr 5fr',
    gap: w <= MOBILE_BREAKPOINT ? '40px' : '80px',
    alignItems: 'center',
});

export const subtitleStyle = {
    fontFamily: fonts.sans,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: colors.ink,
    maxWidth: '480px',
    margin: '0 0 28px',
};

export const bodyTextStyle = {
    fontFamily: fonts.sans,
    fontSize: '15.5px',
    lineHeight: 1.8,
    color: colors.body,
    maxWidth: '520px',
    margin: '0 0 20px',
};

export const strongStyle = {
    color: colors.ink,
    fontWeight: 600,
};

export const imageOuterStyle = (w) => ({
    width: w <= MOBILE_BREAKPOINT ? '240px' : '100%',
    maxWidth: '380px',
    margin: w <= MOBILE_BREAKPOINT ? '0 auto' : '0',
});

export const imageFrameStyle = {
    width: '100%',
    aspectRatio: '3 / 4',
    borderRadius: '8px',
    overflow: 'hidden',
    border: `1px solid ${colors.line}`,
    backgroundColor: colors.surface,
};

export const profileImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    display: 'block',
};
