import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Scale } from 'lucide-react';
import {
    skillsContainer,
    skillsWrapper,
    skillsTitle,
    titleUnderline,
    getGridStyle,
    cardStyle,
    iconContainerStyle,
    cardTitleStyle,
    cardDescriptionStyle
} from './style/WhatDoIdo.js';

const skills = [
    {
        icon: Code,
        number: "01",
        color: "#3b82f6",
        title: "ARQUITECTURA BACKEND",
        description:
            "Diseño sistemas backend escalables que manejan conexiones concurrentes con respuesta óptima. FastAPI, ASP.NET Core, Node.js con gestión de transacciones, prevención de race conditions y WebSockets en tiempo real.",
    },
    {
        icon: Brain,
        number: "02",
        color: "#a855f7",
        title: "INTEGRACIÓN DE IA",
        description:
            "Integro IA conversacional en flujos reales usando RAG, streaming y Computer Vision. De análisis legal a traducción de lenguaje de señas, transformo modelos complejos en soluciones prácticas.",
    },
    {
        icon: Zap,
        number: "03",
        color: "#f97316",
        title: "SISTEMAS EN TIEMPO REAL",
        description:
            "Desarrollo arquitecturas de alto rendimiento con WebSockets, SignalR y eventos. Chat con streaming, reservas con bloqueo optimista y trabajos en background para experiencias fluidas sin inconsistencias.",
    },
    {
        icon: Scale,
        number: "04",
        color: "#22c55e",
        title: "AUTOMATIZACIÓN LEGAL TECH",
        description:
            "Automatizo flujos legales eliminando tareas repetitivas. Scraping de BOE/BOA, procesamiento masivo de PDFs y chatbots RAG que convierten documentos en inteligencia accionable.",
    }
];

function WhatDoIdo() {
    // Estado para trackear el ancho de la ventana
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    // Efecto para actualizar el ancho cuando se redimensiona
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Obtener el estilo del grid basado en el ancho actual
    const gridStyle = getGridStyle(windowWidth);

    return (
        <section id="whatdoido" style={skillsContainer}>
            <div style={skillsWrapper}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={skillsTitle}>¿Qué hago?</h2>
                    <div style={titleUnderline} />
                </motion.div>

                <div style={gridStyle}>
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        const cardDynamicStyle = {
                            ...cardStyle,
                            border: `1px solid ${skill.color}26`
                        };

                        const iconDynamicStyle = {
                            ...iconContainerStyle,
                            background: `linear-gradient(
                                135deg,
                                ${skill.color}26,
                                ${skill.color}0D
                            )`,
                            border: `2px solid ${skill.color}4D`,
                            boxShadow: `0 0 25px ${skill.color}1A`
                        };

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                whileHover={{ y: -6 }}
                            >
                                <div style={cardDynamicStyle}>
                                    <motion.div
                                        style={iconDynamicStyle}
                                        whileHover={{
                                            scale: 1.08,
                                            rotate: 3,
                                            boxShadow: `0 0 35px ${skill.color}4D`
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon
                                            size={32}
                                            color={skill.color}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>

                                    <h3 style={cardTitleStyle}>{skill.title}</h3>
                                    <p style={cardDescriptionStyle}>{skill.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhatDoIdo;