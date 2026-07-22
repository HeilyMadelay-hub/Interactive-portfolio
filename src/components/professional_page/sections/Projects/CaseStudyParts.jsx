// Piezas de presentación de un caso de estudio de proyecto.
// ProjectCaseStudy.jsx compone estos bloques según el layout del proyecto.
import React from 'react';
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
            <a
                href={links.code}
                target="_blank"
                rel="noreferrer"
                style={ctaSecondaryStyle}
                onMouseEnter={e => (e.currentTarget.style.color = colors.teal)}
                onMouseLeave={e => (e.currentTarget.style.color = colors.muted)}
            >
                {cta.code}
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
