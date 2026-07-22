import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    sectionStyle,
    paddingWrapStyle,
    gridStyle,
    subtitleStyle,
    bodyTextStyle,
    strongStyle,
    imageOuterStyle,
    imageFrameStyle,
    profileImageStyle,
} from './style/AboutMe.js';
import { sectionWrapStyle, sectionEyebrowStyle, sectionHeadingStyle, sectionUnderlineStyle } from '../../theme';
import { useT } from '../../i18n/LanguageContext.jsx';
import profileImage from '../../../../assets/profesional_view/images/profile/logo.jpeg';
import WhatDoIdo from './WhatDoIdo.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';

// Renderiza texto con varias frases en negrita.
// Un valor puede ser un string (todo plano) o un array de segmentos,
// donde cada segmento es un string (plano) o { b: 'texto en negrita' }.
const segText = (seg) => (typeof seg === 'string' ? seg : seg.b);

function renderRich(value) {
    if (typeof value === 'string') return value;
    return value.map((seg, i) =>
        typeof seg === 'string'
            ? <React.Fragment key={`${i}-${seg}`}>{seg}</React.Fragment>
            : <strong key={`${i}-${seg.b}`} style={strongStyle}>{seg.b}</strong>
    );
}

// Clave estable para un párrafo: el texto plano concatenado de sus segmentos
const richKey = (value) =>
    typeof value === 'string' ? value : value.map(segText).join('');

function AboutMe() {
    const t = useT().about;
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
        <>
            <section id="about" style={sectionStyle}>
                <div style={sectionWrapStyle(w)}>
                    <div style={paddingWrapStyle(w)}>
                        <div style={gridStyle(w)}>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <p style={sectionEyebrowStyle}>{t.eyebrow}</p>
                                <h2 style={sectionHeadingStyle(w)}>{t.heading}</h2>
                                <div style={sectionUnderlineStyle} />

                                <p style={subtitleStyle}>{renderRich(t.subtitle)}</p>

                                {t.paragraphs.map((para) => (
                                    <p key={richKey(para)} style={bodyTextStyle}>{renderRich(para)}</p>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                style={imageOuterStyle(w)}
                            >
                                <div style={imageFrameStyle}>
                                    <img
                                        src={profileImage}
                                        alt={t.imageAlt}
                                        style={profileImageStyle}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <WhatDoIdo />
            <Skills />
            <Experience />
        </>
    );
}

export default AboutMe;
