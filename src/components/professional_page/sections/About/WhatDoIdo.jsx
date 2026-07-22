import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Scale } from 'lucide-react';
import {
    sectionStyle,
    paddingWrapStyle,
    gridStyle,
    itemStyle,
    itemHeaderStyle,
    itemIndexStyle,
    itemTitleStyle,
    itemDescriptionStyle,
} from './style/WhatDoIdo.js';
import { sectionWrapStyle, sectionEyebrowStyle, sectionHeadingStyle, sectionUnderlineStyle, colors } from '../../theme';
import { useT } from '../../i18n/LanguageContext.jsx';

// Los iconos e índices no dependen del idioma; el texto viene de las traducciones.
const ICONS = [Code, Brain, Zap, Scale];

function WhatDoIdo() {
    const t = useT().whatDoIdo;
    const CAPABILITIES = t.capabilities.map((cap, i) => ({
        ...cap,
        icon: ICONS[i],
        index: String(i + 1).padStart(2, '0'),
    }));
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const w = windowWidth;

    return (
        <section id="whatdoido" style={sectionStyle}>
            <div style={sectionWrapStyle(w)}>
                <div style={paddingWrapStyle(w)}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p style={sectionEyebrowStyle}>{t.eyebrow}</p>
                        <h2 style={sectionHeadingStyle(w)}>{t.heading}</h2>
                        <div style={sectionUnderlineStyle} />
                    </motion.div>

                    <div style={gridStyle(w)}>
                        {CAPABILITIES.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.index}
                                    style={itemStyle}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                >
                                    <div style={itemHeaderStyle}>
                                        <Icon size={18} color={colors.teal} strokeWidth={1.5} />
                                        <span style={itemIndexStyle}>{item.index}</span>
                                        <h3 style={itemTitleStyle}>{item.title}</h3>
                                    </div>
                                    <p style={itemDescriptionStyle}>{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatDoIdo;
