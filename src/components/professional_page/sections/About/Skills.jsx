import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    sectionStyle,
    paddingWrapStyle,
    listStyle,
    rowStyle,
    rowLabelStyle,
    rowTextStyle,
} from './style/Skills.js';
import { sectionWrapStyle, sectionEyebrowStyle, sectionHeadingStyle, sectionUnderlineStyle } from '../../theme';
import { useT } from '../../i18n/LanguageContext.jsx';

function Skills() {
    const t = useT().skills;
    const skillsData = t.categories;
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
        <section id="skills" style={sectionStyle}>
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

                    <div style={listStyle}>
                        {skillsData.map((category, index) => (
                            <motion.div
                                key={category.category}
                                style={rowStyle(w, index === 0)}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <span style={rowLabelStyle}>{category.category}</span>
                                <p style={rowTextStyle}>{category.skills.join(' · ')}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
