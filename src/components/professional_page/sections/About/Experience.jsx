import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ExperienceCaseStudy from './ExperienceCaseStudy.jsx';
import { sectionStyle, paddingWrapStyle, introLedeStyle, listStyle } from './style/Experience.js';
import { sectionWrapStyle, sectionEyebrowStyle, sectionHeadingStyle, sectionUnderlineStyle } from '../../theme';
import { useT } from '../../i18n/LanguageContext.jsx';

function Experience() {
    const t = useT().experience;
    const EXPERIENCES = t.items;
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
        <section id="experience" style={sectionStyle}>
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
                        <p style={introLedeStyle}>{t.intro}</p>
                    </motion.div>

                    <div style={listStyle}>
                        {EXPERIENCES.map((experience, index) => (
                            <ExperienceCaseStudy
                                key={experience.id}
                                experience={experience}
                                index={index}
                                windowWidth={w}
                                isFirst={index === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
