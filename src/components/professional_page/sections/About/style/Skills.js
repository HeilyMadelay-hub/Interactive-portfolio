import { colors, fonts, MOBILE_BREAKPOINT } from '../../../theme';

export const sectionStyle = {
    backgroundColor: colors.bg,
    borderTop: `1px solid ${colors.line}`,
};

export const paddingWrapStyle = (w) => ({
    padding: w <= MOBILE_BREAKPOINT ? '56px 0' : '90px 0',
});

export const listStyle = {
    marginTop: '40px',
};

export const rowStyle = (w, isFirst) => ({
    display: 'flex',
    flexDirection: w <= MOBILE_BREAKPOINT ? 'column' : 'row',
    gap: w <= MOBILE_BREAKPOINT ? '8px' : '28px',
    padding: w <= MOBILE_BREAKPOINT ? '18px 0' : '20px 0',
    borderTop: isFirst ? 'none' : `1px solid ${colors.line}`,
});

export const rowLabelStyle = {
    fontFamily: fonts.mono,
    fontSize: '12px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: colors.teal,
    fontWeight: 600,
    width: '175px',
    flexShrink: 0,
};

export const rowTextStyle = {
    fontFamily: fonts.mono,
    fontSize: '14px',
    lineHeight: 1.9,
    color: colors.body,
    margin: 0,
};

// Nota: el contenido de las categorías vive en i18n (es/en/fr.js → skills.categories).
