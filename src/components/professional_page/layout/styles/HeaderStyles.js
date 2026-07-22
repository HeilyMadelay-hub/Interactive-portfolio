import { colors, fonts, MOBILE_BREAKPOINT } from '../../theme';

export const headerStyle = {
    backgroundColor: colors.bg,
    borderBottom: `1px solid ${colors.line}`,
};

export const headerWrapStyle = (windowWidth) => ({
    maxWidth: '1180px',
    margin: '0 auto',
    padding: windowWidth <= MOBILE_BREAKPOINT ? '0 22px' : '0 40px',
});

export const navStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '22px 0',
};

export const logoStyle = {
    fontFamily: fonts.serif,
    fontSize: '21px',
    fontWeight: 600,
    color: colors.ink,
    textDecoration: 'none',
    flexShrink: 0,
};

export const logoDotStyle = {
    color: colors.teal,
};

export const navLinksStyle = (windowWidth) => ({
    display: windowWidth <= MOBILE_BREAKPOINT ? 'none' : 'flex',
    gap: '30px',
    alignItems: 'center',
    marginLeft: '52px',
});

export const navLinkStyle = {
    color: colors.body,
    textDecoration: 'none',
    fontFamily: fonts.sans,
    fontSize: '14px',
    fontWeight: 500,
    transition: 'color 0.2s ease',
};

export const navRightStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '26px',
    marginLeft: 'auto',
};

export const langSwitcherStyle = {
    display: 'flex',
    gap: '9px',
    alignItems: 'center',
    fontFamily: fonts.mono,
    fontSize: '12px',
};

export const langButtonStyle = (isActive) => ({
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontFamily: fonts.mono,
    fontSize: '12px',
    color: isActive ? colors.ink : colors.muted,
    fontWeight: isActive ? 600 : 500,
    transition: 'color 0.2s ease',
});

export const cvLinkStyle = {
    background: 'none',
    cursor: 'pointer',
    color: colors.body,
    fontFamily: fonts.sans,
    fontSize: '13.5px',
    fontWeight: 500,
    border: 'none',
    borderBottom: `1px solid ${colors.line}`,
    paddingBottom: '2px',
    transition: 'color 0.2s ease, border-color 0.2s ease',
};
