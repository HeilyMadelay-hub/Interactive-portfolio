import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import MessageList from '../MessageList/MessageList.jsx';
import CaseStudyContent from './CaseStudyContent.jsx';
import { ImageCarousel } from '../../../professional_page/sections/Projects/CaseStudyParts.jsx';
import { useT } from '../../../professional_page/i18n/LanguageContext.jsx';
import './ProjectView.css';

const markdownComponents = {
    a: ({ node, ...props }) => <span className="readme-link-text">{props.children}</span>,
};

const SCREENSHOTS_MARKER = '## Screenshots';

function Markdown({ children }) {
    return (
        <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} components={markdownComponents}>
                {children}
            </ReactMarkdown>
        </div>
    );
}

const ProjectView = React.memo(function ProjectView({ project, messages = [], onBack }) {
    const t = useT().chat;

    if (!project) return null;

    const hasCaseStudy = !!project.caseStudy;

    let topContent;

    if (hasCaseStudy) {
        topContent = (
            <CaseStudyContent project={project} caseStudy={project.caseStudy} />
        );
    } else {
        const hasGallery = project.readme && project.screenshots?.length > 0
            && project.readme.includes(SCREENSHOTS_MARKER);

        let readmeContent;
        if (!project.readme) {
            readmeContent = <p className="project-readme-empty">{t.projects.comingSoon}</p>;
        } else if (hasGallery) {
            const [before, after] = project.readme.split(SCREENSHOTS_MARKER);
            readmeContent = (
                <>
                    <Markdown>{`${before}${SCREENSHOTS_MARKER}`}</Markdown>
                    <div className="project-gallery">
                        <ImageCarousel images={project.screenshots} aspectRatio="16 / 10" />
                        {project.screenshotLabels?.length > 0 && (
                            <p className="project-gallery-caption">{project.screenshotLabels.join(' · ')}</p>
                        )}
                    </div>
                    <Markdown>{after}</Markdown>
                </>
            );
        } else {
            readmeContent = <Markdown>{project.readme}</Markdown>;
        }

        topContent = (
            <div className="project-readme">
                {readmeContent}
            </div>
        );
    }

    return (
        <div className="chat-area project-view">
            <div className={`project-view-header ${hasCaseStudy ? 'cs-minimal' : ''}`}>
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
                {!hasCaseStudy && (
                    <div className="project-view-titles">
                        <h1 className="project-view-title">{project.title}</h1>
                        {project.subtitle && <p className="project-view-subtitle">{project.subtitle}</p>}
                    </div>
                )}
            </div>

            <MessageList messages={messages} topContent={topContent} />
        </div>
    );
});

export default ProjectView;
