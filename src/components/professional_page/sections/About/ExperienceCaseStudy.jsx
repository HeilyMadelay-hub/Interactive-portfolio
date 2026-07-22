import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
    itemWrapStyle,
    itemGridStyle,
    metaBlockStyle,
    metaLabelStyle,
    metaValueStyle,
    companyRowStyle,
    logoPlaceholderStyle,
    logoImageStyle,
    companyNameStyle,
    companyTypeStyle,
    roleTitleStyle,
    roleSubtitleStyle,
    summaryStyle,
    highlightsListStyle,
    highlightRowStyle,
    highlightMarkStyle,
    highlightTextStyle,
    badgeRowStyle,
    badgeStyle,
    toggleButtonStyle,
    toggleChevronStyle,
    detailsWrapStyle,
    detailBlockStyle,
    detailLabelStyle,
    detailTextStyle,
} from './style/Experience.js';
import { colors, MOBILE_BREAKPOINT } from '../../theme';
import { experienceLogos } from './style/experienceLogos.js';
import { useT } from '../../i18n/LanguageContext.jsx';

function Meta({ experience, labels }) {
    return (
        <div>
            <div style={metaBlockStyle}>
                <p style={metaLabelStyle}>{labels.dates}</p>
                <p style={metaValueStyle}>{experience.dates}</p>
            </div>
            <div style={metaBlockStyle}>
                <p style={metaLabelStyle}>{labels.location}</p>
                <p style={metaValueStyle}>{experience.location}</p>
                <p style={metaValueStyle}>{experience.environment}</p>
            </div>
            <div style={metaBlockStyle}>
                <p style={metaLabelStyle}>{labels.team}</p>
                <p style={metaValueStyle}>{experience.team}</p>
            </div>
            <div>
                <p style={metaLabelStyle}>{labels.methodology}</p>
                <p style={metaValueStyle}>{experience.methodology}</p>
            </div>
        </div>
    );
}

function Main({ experience, isOpen, onToggle, w, toggle }) {
    const logo = experienceLogos[experience.id];
    return (
        <div>
            <div style={companyRowStyle}>
                {logo
                    ? <img src={logo} alt={experience.company} style={logoImageStyle} />
                    : <div style={logoPlaceholderStyle}>[Logo]</div>
                }
                <div>
                    <div style={companyNameStyle}>{experience.company}</div>
                    {experience.type && <div style={companyTypeStyle}>{experience.type}</div>}
                </div>
            </div>

            <h3 style={roleTitleStyle(w)}>{experience.role}</h3>
            {experience.roleDetail && <p style={roleSubtitleStyle}>{experience.roleDetail}</p>}
            <p style={summaryStyle}>{experience.summary}</p>

            <div style={highlightsListStyle}>
                {experience.highlights.map((h) => (
                    <div key={h} style={highlightRowStyle}>
                        <span style={highlightMarkStyle}>—</span>
                        <p style={highlightTextStyle}>{h}</p>
                    </div>
                ))}
            </div>

            <div style={badgeRowStyle}>
                {experience.tech.map((t) => (
                    <span key={t} style={badgeStyle}>{t}</span>
                ))}
            </div>

            <button
                style={toggleButtonStyle}
                onClick={onToggle}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.teal)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.ink)}
            >
                {isOpen ? toggle.hide : toggle.show}
                <ChevronDown size={15} strokeWidth={2} style={toggleChevronStyle(isOpen)} />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        style={detailsWrapStyle(w)}
                    >
                        {experience.details.map((block) => (
                            <div key={block.label} style={detailBlockStyle}>
                                <p style={detailLabelStyle}>{block.label}</p>
                                {block.text && <p style={detailTextStyle}>{block.text}</p>}
                                {block.items && block.items.map((item) => (
                                    <div key={item} style={highlightRowStyle}>
                                        <span style={highlightMarkStyle}>—</span>
                                        <p style={detailTextStyle}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ExperienceCaseStudy({ experience, index, windowWidth, isFirst }) {
    const { meta: labels, toggle } = useT().experience;
    const [isOpen, setIsOpen] = useState(false);
    const w = windowWidth;
    const metaOnRight = index % 2 === 1;
    const isMobile = w <= MOBILE_BREAKPOINT;

    return (
        <motion.div
            style={itemWrapStyle(w, isFirst)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
        >
            <div style={itemGridStyle(w, metaOnRight)}>
                {isMobile ? (
                    <>
                        <Meta experience={experience} labels={labels} />
                        <Main experience={experience} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} w={w} toggle={toggle} />
                    </>
                ) : metaOnRight ? (
                    <>
                        <Main experience={experience} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} w={w} toggle={toggle} />
                        <Meta experience={experience} labels={labels} />
                    </>
                ) : (
                    <>
                        <Meta experience={experience} labels={labels} />
                        <Main experience={experience} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} w={w} toggle={toggle} />
                    </>
                )}
            </div>
        </motion.div>
    );
}
