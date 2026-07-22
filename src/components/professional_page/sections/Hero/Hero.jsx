import React, { useState, useEffect } from 'react';
import {
    heroSectionStyle,
    heroWrapStyle,
    heroGridStyle,
    titleStyle,
    roleWrapStyle,
    roleLine1Style,
    roleLine2Style,
    ledeStyle,
    ledeSubStyle,
    ctaLinkStyle,
    ctaArrowStyle,
    consolePanelStyle,
    consoleTitleStyle,
    dirLineStyle,
    dirPathStyle,
    dirDescStyle,
    consoleMetricsStyle,
    metricValueStyle,
    metricLabelStyle,
} from './styles/Hero.js';
import { colors } from '../../theme';
import ConsolePanel from '../../ui/ConsolePanel.jsx';
import { useT } from '../../i18n/LanguageContext.jsx';

function Hero() {
    const t = useT().hero;
    const STACK = t.stack;
    const METRICS = t.metrics;
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section style={heroSectionStyle}>
            <div style={heroWrapStyle(windowWidth)}>
                <div style={heroGridStyle(windowWidth)}>
                    <div>
                        <h1 style={titleStyle(windowWidth)}>Heily Madelay<br />Tandazo</h1>

                        <div style={roleWrapStyle}>
                            <span style={roleLine1Style}>{t.roleLine1}</span>
                            {t.roleLine2 && <span style={roleLine2Style}>{t.roleLine2}</span>}
                        </div>

                        <p style={ledeStyle}>{t.lede}</p>
                        {t.ledeSub.map((para) => (
                            <p key={para} style={ledeSubStyle}>{para}</p>
                        ))}

                        <a
                            href="#projects"
                            style={ctaLinkStyle}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = colors.teal;
                                e.currentTarget.style.borderColor = colors.teal;
                                const arrow = e.currentTarget.querySelector('svg');
                                if (arrow) arrow.style.transform = 'translateX(3px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = colors.ink;
                                e.currentTarget.style.borderColor = colors.ink;
                                const arrow = e.currentTarget.querySelector('svg');
                                if (arrow) arrow.style.transform = 'translateX(0)';
                            }}
                        >
                            {t.cta}
                            <svg style={ctaArrowStyle} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    <ConsolePanel
                        title={t.consoleTitle}
                        style={consolePanelStyle(windowWidth)}
                        titleStyle={consoleTitleStyle}
                    >
                        {STACK.map((item, i) => (
                            <div key={item.path} style={dirLineStyle(i === STACK.length - 1)}>
                                <span style={dirPathStyle}>{item.path}</span>
                                <span style={dirDescStyle}>{item.desc}</span>
                            </div>
                        ))}

                        <div style={consoleMetricsStyle}>
                            {METRICS.map(m => (
                                <div key={m.label}>
                                    <span style={metricValueStyle}>{m.value}</span>
                                    <span style={metricLabelStyle}>{m.label}</span>
                                </div>
                            ))}
                        </div>
                    </ConsolePanel>
                </div>
            </div>
        </section>
    );
}

export default Hero;
