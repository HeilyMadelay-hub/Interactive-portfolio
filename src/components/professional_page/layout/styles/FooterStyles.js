import { colors, fonts, MOBILE_BREAKPOINT } from '../../theme';

// Footer de cierre: fondo de página (no un bloque oscuro) porque la sección
// Contacto que va justo encima ya tiene su panel negro. Aquí solo van copyright
// y las tres páginas legales; email, LinkedIn y GitHub NO se repiten.
export const footerStyle = {
    backgroundColor: colors.bg,
    borderTop: `1px solid ${colors.line}`,
};

export const footerInnerStyle = (w) => ({
    display: 'flex',
    flexDirection: w <= MOBILE_BREAKPOINT ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Aire generoso arriba y abajo, pero sin convertirlo en una franja alta.
    padding: w <= MOBILE_BREAKPOINT ? '40px 0 44px' : '34px 0 38px',
    gap: w <= MOBILE_BREAKPOINT ? '24px' : '32px',
    textAlign: w <= MOBILE_BREAKPOINT ? 'center' : 'left',
});

export const copyrightStyle = {
    fontFamily: fonts.sans,
    fontSize: '13px',
    lineHeight: 1.5,
    color: colors.muted,
    margin: 0,
};

export const linksStyle = (w) => ({
    display: 'flex',
    flexDirection: w <= MOBILE_BREAKPOINT ? 'column' : 'row',
    alignItems: 'center',
    gap: w <= MOBILE_BREAKPOINT ? '14px' : 0,
});

export const linkStyle = {
    fontFamily: fonts.sans,
    fontSize: '13px',
    color: colors.muted,
    textDecoration: 'none',
    transition: 'color 0.2s ease',
};

// Separador "·" solo en escritorio; en móvil los enlaces se apilan centrados.
export const separatorStyle = {
    color: colors.muted,
    opacity: 0.4,
    padding: '0 12px',
    fontSize: '13px',
    userSelect: 'none',
};
