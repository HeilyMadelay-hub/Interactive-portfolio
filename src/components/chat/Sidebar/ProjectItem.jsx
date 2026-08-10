import React from 'react';

// A single row in the sidebar "Proyectos" group. Simpler than ConversationItem:
// projects have no rename/pin/delete, just a name and a click to open it.
const ProjectItem = React.memo(function ProjectItem({ project, isActive, onSelect }) {
    return (
        <div
            className={`sidebar-section project-item ${isActive ? 'active' : ''}`}
            onClick={() => onSelect(project.id)}
            title={project.subtitle ? `${project.title} — ${project.subtitle}` : project.title}
        >
            <svg className="project-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
            </svg>
            <span className="section-name">{project.title}</span>
        </div>
    );
});

export default ProjectItem;
