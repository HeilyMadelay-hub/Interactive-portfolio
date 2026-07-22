import React, { useState, useEffect } from 'react';
import {
    headerStyle,
    headerWrapStyle,
    navStyle,
    logoStyle,
    logoDotStyle,
    navLinksStyle,
    navLinkStyle,
    navRightStyle,
    langSwitcherStyle,
    langButtonStyle,
    cvLinkStyle,
} from './styles/HeaderStyles';
import { colors } from '../theme';
import { useLanguage, useT } from '../i18n/LanguageContext.jsx';
import ThemeToggle from '../../../theme/ThemeToggle.jsx';

const CV_FILES = {
    ES: '/CV_Heily_Tandazo_ES.pdf',
    EN: '/CV_Heily_Tandazo_EN.pdf',
    FR: '/CV_Heily_Tandazo_FR.pdf',
};

function Header() {
    const { lang: activeLang, setLang: setActiveLang } = useLanguage();
    const t = useT();
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header style={headerStyle}>
            <div style={headerWrapStyle(windowWidth)}>
                <nav style={navStyle}>
                    <a href="#hero" style={logoStyle}>
                        hT<span style={logoDotStyle}>.</span>
                    </a>

                    <div style={navLinksStyle(windowWidth)}>
                        {t.nav.items.map(item => (
                            <a
                                key={item.href}
                                href={item.href}
                                style={navLinkStyle}
                                onMouseEnter={e => (e.currentTarget.style.color = colors.teal)}
                                onMouseLeave={e => (e.currentTarget.style.color = colors.body)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div style={navRightStyle}>
                        {/* Tema a la izquierda del idioma: 🌙 · ES EN FR · CV */}
                        <ThemeToggle />

                        <div style={langSwitcherStyle}>
                            {['ES', 'EN', 'FR'].map(lang => (
                                <button
                                    key={lang}
                                    style={langButtonStyle(activeLang === lang)}
                                    onClick={() => setActiveLang(lang)}
                                    onMouseEnter={e => (e.currentTarget.style.color = colors.teal)}
                                    onMouseLeave={e =>
                                        (e.currentTarget.style.color = activeLang === lang ? colors.ink : colors.muted)
                                    }
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>

                        <button
                            style={cvLinkStyle}
                            onClick={() => window.open(CV_FILES[activeLang], '_blank')}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = colors.teal;
                                e.currentTarget.style.borderColor = colors.teal;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = colors.body;
                                e.currentTarget.style.borderColor = colors.line;
                            }}
                        >
                            {t.nav.cv}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
