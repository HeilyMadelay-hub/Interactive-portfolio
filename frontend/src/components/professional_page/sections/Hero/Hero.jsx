import React, { useState, useEffect } from 'react';
import {
    containerStyle,
    contentWrapper,
    gridBackground,
    radialGlow,
    titleStyle,
    roleStyle,
    descriptionStyle,
    achievementWrapper,
    achievementLine,
    achievementStyle,
    // containerStyle duplicado removido
    badgeContainer,
    statusDot,
    badgeText,
} from './styles/Hero.js';

import ScrollIndicator from "../../ui/ScrollIndicator.jsx";

function Hero() {

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const highlights = [
        "Construí sistemas con 1000+ usuarios concurrentes",
        "Integré IA en flujos legales reales",
        "Automaticé procesos que ahorran 70% del tiempo",
    ];

    const [currentHighlight, setCurrentHighlight] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHighlight((prev) => (prev + 1) % highlights.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section style={containerStyle}>
            {/* GRID ANIMADO */}
            <div style={gridBackground}></div>

            {/* GLOW DINÁMICO */}
            <div style={radialGlow(mousePos)}></div>

            {/* CONTENIDO PRINCIPAL */}
            <div style={contentWrapper}>
                <h1
                    style={titleStyle}
                    onMouseEnter={(e) =>
                    (e.currentTarget.style.textShadow =
                        '0 0 12px rgba(37, 99, 235, 0.4), 0 0 24px rgba(37, 99, 235, 0.2)')
                    }
                    onMouseLeave={(e) =>
                    (e.currentTarget.style.textShadow =
                        '0 0 8px rgba(37, 99, 235, 0.3), 0 0 16px rgba(37, 99, 235, 0.15)')
                    }
                >
                    Heily Madelay Tandazo<span style={{ color: '#3b82f6' }}>.</span>
                </h1>

                <p style={roleStyle}>Full Stack & Multicloud Developer</p>

                <p style={descriptionStyle}>
                    Construyo aplicaciones escalables con .NET, React y Docker
                </p>

                {/* LOGRO DESTACADO */}
                <div style={achievementWrapper}>
                    <div style={achievementLine}></div>
                    <p
                        style={achievementStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(100,255,218,0.35)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(100,255,218,0.2)';
                        }}
                    >
                        {highlights[currentHighlight]}
                    </p>
                    <div style={achievementLine}></div>
                </div>

                {/* BADGE */}
                <div
                    style={badgeContainer}
                    onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                        '0 0 15px rgba(37,99,235,0.3)')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)')
                    }
                >
                    <div style={statusDot}></div>
                    <span style={badgeText}>DISPONIBLE PARA PROYECTOS</span>
                </div>

                {/* Flecha */}
                <ScrollIndicator
                    label="DESCUBRE MÁS"
                    target="#about"
                />
            </div>
        </section>
    );
}

export default Hero;