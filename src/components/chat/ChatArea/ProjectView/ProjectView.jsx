import React from 'react';
import MessageList from '../MessageList/MessageList.jsx';
import CaseStudyContent from './CaseStudyContent.jsx';
import { useT } from '../../../professional_page/i18n/LanguageContext.jsx';
import './ProjectView.css';

const ProjectView = React.memo(function ProjectView({ project, messages = [], onBack }) {
    const { chat: t } = useT();

    if (!project) return null;

    const topContent = <CaseStudyContent project={project} caseStudy={project.caseStudy} />;

    return (
        <div className="chat-area project-view">
            <div className="project-view-header cs-minimal">
                <button
                    type="button"
                    className="project-back-btn"
                    onClick={onBack}
                    title={t.projects.back}
                    aria-label={t.projects.back}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            </div>

            <MessageList messages={messages} topContent={topContent} />
        </div>
    );
});

export default ProjectView;
