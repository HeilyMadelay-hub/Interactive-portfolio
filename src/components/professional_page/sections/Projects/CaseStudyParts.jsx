// Piezas de presentación de un caso de estudio de proyecto.
// ProjectCaseStudy.jsx compone estos bloques según el layout del proyecto.
import React, { useState } from 'react';
import {
    categoryStyle,
    titleStyle,
    summaryStyle,
    specBlockStyle,
    specLabelStyle,
    specTextStyle,
    metricsRowStyle,
    metricValueStyle,
    metricLabelStyle,
    stackTextStyle,
    ctaRowStyle,
    ctaPrimaryStyle,
    ctaSecondaryStyle,
    ctaArrowStyle,
    imageFrameStyle,
    imageCaptionStyle,
} from './style/ProjectsStyles.js';
import { colors } from '../../theme';

export function ImageSlot({ caption, aspectRatio }) {
    return (
        <div
            style={imageFrameStyle(aspectRatio)}
            onMouseEnter={e => (e.currentTarget.style.borderColor = colors.teal)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = colors.line)}
        >
            <p style={imageCaptionStyle}>[{caption}]</p>
        </div>
    );
}

export function CtaRow({ links, cta }) {
    return (
        <div style={ctaRowStyle}>
            {/* Temporarily hidden — project not yet deployed publicly
            <a
                href={links.demo}
                target="_blank"
                rel="noreferrer"
                style={ctaPrimaryStyle}
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
                {cta.view}
                <svg style={ctaArrowStyle} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            */}
            <a
                href={links.code}
                target="_blank"
                rel="noreferrer"
                style={ctaPrimaryStyle}
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
                {cta.code}
                <svg style={ctaArrowStyle} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>
    );
}

export function Category({ category }) {
    return <p style={categoryStyle}>{category.join(' · ')}</p>;
}

export function Title({ title, w }) {
    return <h3 style={titleStyle(w)}>{title}</h3>;
}

export function Summary({ summary }) {
    return <p style={summaryStyle}>{summary}</p>;
}

export function Specs({ problema, solucion, arquitectura, labels }) {
    return (
        <>
            <div style={specBlockStyle}>
                <p style={specLabelStyle}>{labels.challenge}</p>
                <p style={specTextStyle}>{problema}</p>
            </div>
            <div style={specBlockStyle}>
                <p style={specLabelStyle}>{labels.approach}</p>
                <p style={specTextStyle}>{solucion}</p>
            </div>
            <div style={specBlockStyle}>
                <p style={specLabelStyle}>{labels.architecture}</p>
                <p style={specTextStyle}>{arquitectura}</p>
            </div>
        </>
    );
}

export function MetricsRow({ resultados, w }) {
    return (
        <div style={metricsRowStyle(w)}>
            {resultados.map(r => (
                <div key={r.label}>
                    <span style={metricValueStyle(w)}>{r.value}</span>
                    <span style={metricLabelStyle}>{r.label}</span>
                </div>
            ))}
        </div>
    );
}

export function MetricsStack({ resultados, w }) {
    return (
        <div style={{ marginBottom: '32px' }}>
            {resultados.map(r => (
                <div
                    key={r.label}
                    style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '16px',
                        padding: '14px 0',
                        borderTop: `1px solid ${colors.line}`,
                    }}
                >
                    <span style={{ ...metricValueStyle(w), margin: 0, flexShrink: 0 }}>{r.value}</span>
                    <span style={{ ...metricLabelStyle, maxWidth: 'none' }}>{r.label}</span>
                </div>
            ))}
        </div>
    );
}

export function Stack({ stack, label }) {
    return (
        <div style={{ marginBottom: 0 }}>
            <p style={specLabelStyle}>{label}</p>
            <p style={stackTextStyle}>{stack.join(' · ')}</p>
        </div>
    );
}

const carouselBtnStyle = (side) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [side]: '10px',
    background: 'rgba(0,0,0,0.38)',
    border: 'none',
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#fff',
    transition: 'background 0.15s ease',
    padding: 0,
    zIndex: 1,
    flexShrink: 0,
});

export function ImageCarousel({ images, aspectRatio }) {
    const [current, setCurrent] = useState(0);
    const [fading, setFading] = useState(false);

    const goTo = (idx) => {
        if (fading || idx === current) return;
        setFading(true);
        setTimeout(() => {
            setCurrent(idx);
            setFading(false);
        }, 180);
    };

    const prev = () => goTo(current === 0 ? images.length - 1 : current - 1);
    const next = () => goTo(current === images.length - 1 ? 0 : current + 1);

    return (
        <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', border: `1.5px solid ${colors.line}`, backgroundColor: colors.surface }}>
            <div style={{ width: '100%', aspectRatio, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src={images[current]}
                    alt={`Screenshot ${current + 1} of ${images.length}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        opacity: fading ? 0 : 1,
                        transition: 'opacity 0.18s ease',
                    }}
                />
            </div>

            <button
                onClick={prev}
                aria-label="Imagen anterior"
                style={carouselBtnStyle('left')}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.38)')}
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button
                onClick={next}
                aria-label="Imagen siguiente"
                style={carouselBtnStyle('right')}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.38)')}
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', alignItems: 'center' }}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Ir a imagen ${i + 1}`}
                        style={{
                            width: i === current ? '20px' : '7px',
                            height: '7px',
                            borderRadius: '4px',
                            background: i === current ? colors.teal : 'rgba(255,255,255,0.55)',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            transition: 'all 0.25s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
