import React from 'react';
import { motion } from 'framer-motion';

import {
    skillsContainer,
    skillsWrapper,
    skillsTitle,
    titleUnderline,
    skillsGrid,
    skillCard,
    categoryTitle,
    skillsList,
    skillBadge,
    skillsData,
    getGridStyle,
    cardStyle,
    iconContainerStyle,
    cardTitleStyle,
    cardDescriptionStyle
} from './style/Skills.js';

function Skills() {
    return (
        <section id="skills" style={skillsContainer}>
            <div style={skillsWrapper}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={skillsTitle}>Stack Tecnol&oacute;gico</h2>
                    <div style={titleUnderline} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'clamp(1.5rem, 3vw, 2rem)',
                    marginTop: '3rem'
                }}>
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <motion.div
                                style={{
                                    ...skillCard,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.6) 0%, rgba(17, 34, 64, 0.4) 100%)',
                                }}
                                whileHover={{
                                    y: -8,
                                    borderColor: 'rgba(100, 255, 218, 0.6)',
                                    boxShadow: '0 25px 50px rgba(100, 255, 218, 0.2), 0 0 20px rgba(100, 255, 218, 0.1)',
                                    background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.8) 0%, rgba(30, 58, 95, 0.6) 100%)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1.5rem',
                                    paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(100, 255, 218, 0.1)'
                                }}>
                                   
                                    <h3 style={categoryTitle}>{category.category}</h3>
                                </div>

                                <div style={{
                                    ...skillsList,
                                    gap: '0.75rem'
                                }}>
                                    {category.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            style={{
                                                ...skillBadge,
                                                background: 'rgba(59, 130, 246, 0.1)',
                                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                                backdropFilter: 'blur(10px)',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.05 * i }}
                                            whileHover={{
                                                scale: 1.08,
                                                background: 'rgba(59, 130, 246, 0.25)',
                                                borderColor: 'rgba(100, 255, 218, 0.5)',
                                                color: '#64ffda',
                                                boxShadow: '0 4px 15px rgba(100, 255, 218, 0.2)'
                                            }}
                                        >
                                            <i
                                                className={`${skill.icon} colored`}
                                                style={{ fontSize: '1.2rem' }}
                                            />
                                            {skill.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;