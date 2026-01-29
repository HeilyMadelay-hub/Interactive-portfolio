import React, { useState, useEffect, useRef } from 'react';
import { projects } from './style/Project.js';

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [direction, setDirection] = useState('next');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoPlayIntervalRef = useRef(null);
    const progressIntervalRef = useRef(null);

    const AUTOPLAY_DELAY = 7000; // 7 segundos
    const TRANSITION_DURATION = 500; // 500ms

    const currentProject = projects[currentIndex];

    //  Navegación con teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    // Autoplay inteligente con pausa en hover
    useEffect(() => {
        if (!isAutoPlaying) return;

        // Progress bar animation
        progressIntervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + (100 / (AUTOPLAY_DELAY / 50));
            });
        }, 50);

        // Autoplay
        autoPlayIntervalRef.current = setInterval(() => {
            nextSlide();
        }, AUTOPLAY_DELAY);

        return () => {
            clearInterval(autoPlayIntervalRef.current);
            clearInterval(progressIntervalRef.current);
        };
    }, [isAutoPlaying, currentIndex]);

    const nextSlide = () => {
        if (isTransitioning) return;
        setDirection('next');
        setIsTransitioning(true);
        setProgress(0);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
            setIsTransitioning(false);
        }, TRANSITION_DURATION / 2);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setDirection('prev');
        setIsTransitioning(true);
        setProgress(0);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
            setIsTransitioning(false);
        }, TRANSITION_DURATION / 2);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        setDirection(index > currentIndex ? 'next' : 'prev');
        setIsTransitioning(true);
        setProgress(0);

        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, TRANSITION_DURATION / 2);
    };

    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
        clearInterval(autoPlayIntervalRef.current);
        clearInterval(progressIntervalRef.current);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
        setProgress(0);
    };

    return (
        <section
            id="projects"
            style={{
                minHeight: '100vh',
                padding: '80px 6%',
                backgroundColor: '#0F172A',
                color: '#E5E7EB',
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* Fondo con degradado */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '400px',
                background: 'radial-gradient(ellipse at top, rgba(96, 165, 250, 0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%',
                position: 'relative'
            }}>

                {/* Header */}
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        color: '#FFFFFF',
                        letterSpacing: '-0.02em'
                    }}>
                        Proyectos
                    </h2>

                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #06B6D4 0%, #0891B2 100%)',
                        margin: '0 auto 1rem',
                        borderRadius: '2px'
                    }} />

                    <p style={{
                        fontSize: '1.1rem',
                        color: '#94A3B8',
                        maxWidth: '700px',
                        lineHeight: '1.6',
                        margin: '0 auto'
                    }}>
                        Soluciones técnicas en backend, IA y sistemas escalables para productos reales.
                    </p>
                </div>

                {/* Progress bar temporal */}
                <div style={{
                    width: '100%',
                    maxWidth: '900px',
                    height: '4px',
                    backgroundColor: 'rgba(148, 163, 184, 0.2)',
                    borderRadius: '2px',
                    margin: '0 auto 2rem',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '100%',
                        width: `${progress}%`,
                        backgroundColor: currentProject.color,
                        borderRadius: '2px',
                        transition: 'width 0.05s linear',
                        boxShadow: `0 0 8px ${currentProject.color}80`
                    }} />
                </div>

                {/* Carrusel Container */}
                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >

                    {/* Botón Anterior con aria-label */}
                    <button
                        onClick={prevSlide}
                        aria-label="Proyecto anterior"
                        disabled={isTransitioning}
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(30, 41, 59, 0.8)',
                            border: '1px solid rgba(148, 163, 184, 0.3)',
                            color: '#60A5FA',
                            fontSize: '1.5rem',
                            cursor: isTransitioning ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)',
                            zIndex: 10,
                            opacity: isTransitioning ? 0.5 : 1,
                            outline: 'none'
                        }}
                        onMouseEnter={(e) => {
                            if (!isTransitioning) {
                                e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        }}
                        onFocus={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.5)';
                        }}
                        onBlur={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        ←
                    </button>

                    {/*Card con animación de transición */}
                    <div
                        onMouseEnter={() => setHoveredProject(currentProject.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() => window.open(currentProject.link, '_blank')}
                        style={{
                            backgroundColor: 'rgba(30, 41, 59, 0.8)',
                            border: `2px solid ${currentProject.color}`,
                            borderRadius: '20px',
                            padding: '3rem',
                            width: '100%',
                            maxWidth: '900px',
                            margin: '0 auto',
                            cursor: 'pointer',
                            boxShadow: `0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px ${currentProject.color}40`,
                            backdropFilter: 'blur(10px)',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            transform: hoveredProject === currentProject.id ? 'scale(1.02)' : 'scale(1)',
                            opacity: isTransitioning ? 0 : 1,
                            animation: isTransitioning ? 'none' : `slideIn${direction === 'next' ? 'Right' : 'Left'} ${TRANSITION_DURATION}ms ease-out`
                        }}
                    >
                        {/* Efecto de brillo superior */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: `linear-gradient(90deg, transparent, ${currentProject.color}, transparent)`
                        }} />

                        {/* Contenido */}
                        <div style={{
                            display: 'flex',
                            gap: '3rem',
                            alignItems: 'flex-start'
                        }}>

                            {/* Icono */}
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '20px',
                                background: `linear-gradient(135deg, ${currentProject.color}30, ${currentProject.color}15)`,
                                border: `3px solid ${currentProject.color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3.5rem',
                                flexShrink: 0,
                                boxShadow: `0 12px 32px ${currentProject.color}40`,
                                transition: 'transform 0.4s ease',
                                transform: hoveredProject === currentProject.id ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                            }}>
                                {currentProject.icon}
                            </div>

                            {/* Contenido del proyecto */}
                            <div style={{ flex: 1 }}>

                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    marginBottom: '1rem',
                                    color: '#FFFFFF'
                                }}>
                                    {currentProject.title}
                                </h3>

                                <p style={{
                                    color: '#94A3B8',
                                    fontSize: '1.05rem',
                                    lineHeight: '1.8',
                                    marginBottom: '1.5rem'
                                }}>
                                    {currentProject.description}
                                </p>

                                {/* Highlights */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {currentProject.highlights.map((highlight, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                backgroundColor: `${currentProject.color}20`,
                                                color: currentProject.color,
                                                borderRadius: '8px',
                                                fontSize: '0.85rem',
                                                fontWeight: '700',
                                                border: `2px solid ${currentProject.color}50`
                                            }}
                                        >
                                            ✓ {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                    paddingTop: '1.5rem',
                                    borderTop: '2px solid rgba(148, 163, 184, 0.15)',
                                    marginBottom: '1.5rem'
                                }}>
                                    {currentProject.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                                                color: '#60A5FA',
                                                borderRadius: '8px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                border: '1px solid rgba(96, 165, 250, 0.3)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Botón */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    color: currentProject.color,
                                    fontWeight: '700',
                                    fontSize: '1.1rem'
                                }}>
                                    <span>Ver proyecto completo</span>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        transition: 'transform 0.3s ease',
                                        transform: hoveredProject === currentProject.id ? 'translateX(8px)' : 'translateX(0)'
                                    }}>→</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        aria-label="Proyecto siguiente"
                        disabled={isTransitioning}
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(30, 41, 59, 0.8)',
                            border: '1px solid rgba(148, 163, 184, 0.3)',
                            color: '#60A5FA',
                            fontSize: '1.5rem',
                            cursor: isTransitioning ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)',
                            zIndex: 10,
                            opacity: isTransitioning ? 0.5 : 1,
                            outline: 'none'
                        }}
                        onMouseEnter={(e) => {
                            if (!isTransitioning) {
                                e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        }}
                        onFocus={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.5)';
                        }}
                        onBlur={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        →
                    </button>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '3rem'
                }}>
                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir al proyecto ${index + 1}: ${project.title}`}
                            aria-current={index === currentIndex}
                            disabled={isTransitioning}
                            style={{
                                width: index === currentIndex ? '48px' : '12px',
                                height: '12px',
                                borderRadius: '6px',
                                backgroundColor: index === currentIndex ? project.color : 'rgba(148, 163, 184, 0.3)',
                                border: 'none',
                                cursor: isTransitioning ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: index === currentIndex ? `0 0 12px ${project.color}80` : 'none',
                                outline: 'none',
                                opacity: isTransitioning ? 0.5 : 1
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 0 3px ${project.color}50`;
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.boxShadow = index === currentIndex ? `0 0 12px ${project.color}80` : 'none';
                            }}
                        />
                    ))}
                </div>

                {/* Contador */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '1.5rem',
                    color: '#94A3B8',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                }}>
                    {currentIndex + 1} / {projects.length}
                    {isAutoPlaying && (
                        <span style={{ marginLeft: '1rem', fontSize: '0.85rem', color: '#60A5FA' }}>
                            ▶ Auto-reproducción activa
                        </span>
                    )}
                </div>

            </div>

            <style>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
}

export default Projects;