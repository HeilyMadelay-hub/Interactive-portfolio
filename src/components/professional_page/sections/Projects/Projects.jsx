import React, { useState, useEffect } from 'react';
import ProjectCaseStudy from './ProjectCaseStudy.jsx';
import {
    sectionStyle,
    wrapStyle,
    introWrapStyle,
    eyebrowStyle,
    introHeadingStyle,
    introLedeStyle,
} from './style/ProjectsStyles.js';
import { sectionUnderlineStyle } from '../../theme';
import { useT } from '../../i18n/LanguageContext.jsx';

function Projects() {
    const t = useT().projects;
    const PROJECTS = t.items;
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="projects" style={sectionStyle}>
            <div style={wrapStyle(windowWidth)}>
                <div style={introWrapStyle(windowWidth)}>
                    <p style={eyebrowStyle}>{t.eyebrow}</p>
                    <h2 style={introHeadingStyle(windowWidth)}>{t.heading}</h2>
                    <div style={sectionUnderlineStyle} />
                    <p style={introLedeStyle}>{t.lede}</p>
                </div>

                {PROJECTS.map((project, index) => (
                    <ProjectCaseStudy
                        key={project.id}
                        project={project}
                        windowWidth={windowWidth}
                        isFirst={index === 0}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
