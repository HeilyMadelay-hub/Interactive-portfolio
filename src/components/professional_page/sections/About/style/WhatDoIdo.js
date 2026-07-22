import { colors, fonts, MOBILE_BREAKPOINT } from '../../../theme';

export const sectionStyle = {
    backgroundColor: colors.bg,
    borderTop: `1px solid ${colors.line}`,
};

export const paddingWrapStyle = (w) => ({
    padding: w <= MOBILE_BREAKPOINT ? '56px 0' : '90px 0',
});

export const gridStyle = (w) => ({
    display: 'grid',
    gridTemplateColumns: w <= MOBILE_BREAKPOINT ? '1fr' : 'repeat(2, 1fr)',
    columnGap: '64px',
    rowGap: '40px',
    marginTop: '48px',
});

export const itemStyle = {
    paddingTop: '24px',
    borderTop: `1px solid ${colors.line}`,
};

export const itemHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
};

export const itemIndexStyle = {
    fontFamily: fonts.mono,
    fontSize: '12px',
    color: colors.muted,
    fontWeight: 600,
};

export const itemTitleStyle = {
    fontFamily: fonts.mono,
    fontSize: '12.5px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: colors.teal,
    fontWeight: 600,
    margin: 0,
};

export const itemDescriptionStyle = {
    fontFamily: fonts.sans,
    fontSize: '15px',
    lineHeight: 1.75,
    color: colors.body,
    maxWidth: '440px',
    margin: 0,
};
