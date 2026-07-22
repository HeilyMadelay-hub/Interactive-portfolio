import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MEDIUM_PROFILE_URL } from './style/ArticlesData.js';
import { articleImages } from './style/articleImages.js';
import {
    sectionStyle,
    paddingWrapStyle,
    gridStyle,
    introTextStyle,
    articleWrapStyle,
    regularLayoutStyle,
    imageFrameStyle,
    regularImageWrapStyle,
    imageCaptionStyle,
    dateStyle,
    articleTitleStyle,
    descriptionStyle,
    techStyle,
    readLinkStyle,
    readArrowStyle,
    moreWrapStyle,
    moreLinkStyle,
} from './style/Articles.js';
import { sectionWrapStyle, sectionEyebrowStyle, sectionHeadingStyle, sectionUnderlineStyle, colors, MOBILE_BREAKPOINT } from '../../theme';
import { useT } from '../../i18n/LanguageContext.jsx';

function ReadLink({ href, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            style={readLinkStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.teal;
                e.currentTarget.style.borderColor = colors.teal;
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) arrow.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.ink;
                e.currentTarget.style.borderColor = colors.ink;
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) arrow.style.transform = 'translateX(0)';
            }}
        >
            {label}
            <svg style={readArrowStyle} width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    );
}

function ImagePlaceholder({ aspectRatio, caption }) {
    return (
        <div
            style={imageFrameStyle(aspectRatio)}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = colors.teal)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = colors.line)}
        >
            <p style={imageCaptionStyle}>[{caption}]</p>
        </div>
    );
}

function Article({ article, image, w, isFirst, t }) {
    return (
        <div style={regularLayoutStyle(w)}>
            <div style={regularImageWrapStyle(w)}>
                {image
                    ? <img src={image} alt={article.title} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: '6px', display: 'block' }} />
                    : <ImagePlaceholder aspectRatio="4 / 3" caption={t.imageCaption} />
                }
            </div>
            <div>
                <p style={dateStyle}>{article.date}</p>
                <h3 style={articleTitleStyle(w, isFirst)}>{article.title}</h3>
                <p style={descriptionStyle}>{article.description}</p>
                <p style={techStyle}>{article.tech.join(' · ')}</p>
                <ReadLink href={article.link} label={t.readLink} />
            </div>
        </div>
    );
}

function Articles() {
    const t = useT().articles;
    const ARTICLES = t.items;
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
        <section id="articles" style={sectionStyle}>
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
                            <p style={introTextStyle}>{t.intro}</p>
                        </motion.div>

                        <div>
                            {ARTICLES.map((article, index) => (
                                <motion.div
                                    key={article.id}
                                    style={articleWrapStyle(w, index === 0)}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                >
                                    <Article article={article} image={articleImages[article.id] ?? null} w={w} isFirst={index === 0} t={t} />
                                </motion.div>
                            ))}

                            <div style={moreWrapStyle(w)}>
                                <a
                                    href={MEDIUM_PROFILE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={moreLinkStyle}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = colors.teal;
                                        e.currentTarget.style.borderColor = colors.teal;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = colors.ink;
                                        e.currentTarget.style.borderColor = colors.ink;
                                    }}
                                >
                                    {t.more}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Articles;
