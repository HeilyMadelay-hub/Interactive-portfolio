// Compone los layouts de un caso de estudio (compact / image-top / image-left / image-right)
// a partir de las piezas de presentación de CaseStudyParts.jsx.
import React from 'react';
import { caseStudyStyle } from './style/ProjectsStyles.js';
import { MOBILE_BREAKPOINT } from '../../theme';
import { useT } from '../../i18n/LanguageContext.jsx';
import {
    ImageSlot,
    ImageCarousel,
    CtaRow,
    Category,
    Title,
    Summary,
    Specs,
    MetricsRow,
    MetricsStack,
    Stack,
} from './CaseStudyParts.jsx';

import imgAnalysis from '../../../../assets/profesional_view/images/Subtextai/img/analysis.png';
import imgAudit from '../../../../assets/profesional_view/images/Subtextai/img/audit.png';
import imgReplay from '../../../../assets/profesional_view/images/Subtextai/img/replay.png';
import imgTelemetry from '../../../../assets/profesional_view/images/Subtextai/img/telemetry.png';
import imgNarekDashboard from '../../../../assets/profesional_view/images/Narek/img/Dashboard.png';
import imgNarekAgentConfig from '../../../../assets/profesional_view/images/Narek/img/AgentDetail_Configuration.png';
import imgNarekExecTrace from '../../../../assets/profesional_view/images/Narek/img/RunDetails_ExecutionTrace.png';

const PROJECT_IMAGES = {
    subtextai: [imgAnalysis, imgAudit, imgReplay, imgTelemetry],
    narek: [imgNarekDashboard, imgNarekAgentConfig, imgNarekExecTrace],
};

export default function ProjectCaseStudy({ project, windowWidth, isFirst }) {
    const { labels, cta } = useT().projects;
    const w = windowWidth;
    const isMobile = w <= MOBILE_BREAKPOINT;
    const images = PROJECT_IMAGES[project.id] || null;

    if (project.layout === 'compact') {
        return (
            <div style={caseStudyStyle(w, isFirst)}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '28px' : '48px',
                        alignItems: isMobile ? 'stretch' : 'flex-start',
                    }}
                >
                    <div style={{ width: isMobile ? '100%' : '260px', flexShrink: 0 }}>
                        {images
                            ? <ImageCarousel images={images} aspectRatio="3 / 2" labels={labels} />
                            : <ImageSlot caption={project.imageCaption} aspectRatio="1 / 1" />
                        }
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <Category category={project.category} />
                        <Title title={project.title} w={w} />
                        <Summary summary={project.summary} />
                        <div style={{ marginBottom: '4px' }}>
                            <Stack stack={project.stack} label={labels.stack} />
                        </div>
                        <CtaRow links={project.links} cta={cta} />
                    </div>
                </div>
            </div>
        );
    }

    if (project.layout === 'image-top') {
        return (
            <div style={caseStudyStyle(w, isFirst)}>
                <div style={{ marginBottom: isMobile ? '40px' : '56px' }}>
                    {images
                        ? <ImageCarousel images={images} aspectRatio="3 / 2" labels={labels} />
                        : <ImageSlot caption={project.imageCaption} aspectRatio={isMobile ? '4 / 3' : '21 / 9'} />
                    }
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '7fr 5fr',
                        gap: isMobile ? '32px' : '56px',
                        alignItems: 'start',
                    }}
                >
                    <div>
                        <Category category={project.category} />
                        <Title title={project.title} w={w} />
                        <Summary summary={project.summary} />
                        <Specs problema={project.problema} solucion={project.solucion} arquitectura={project.arquitectura} labels={labels} />
                    </div>
                    <div>
                        <MetricsStack resultados={project.resultados} w={w} />
                        <Stack stack={project.stack} label={labels.stack} />
                        <CtaRow links={project.links} cta={cta} />
                    </div>
                </div>
            </div>
        );
    }

    const imageFirst = project.layout === 'image-left';

    const textColumn = (
        <div style={{ marginTop: !imageFirst || isMobile ? 0 : '8px' }}>
            <Category category={project.category} />
            <Title title={project.title} w={w} />
            <Summary summary={project.summary} />
            <Specs problema={project.problema} solucion={project.solucion} arquitectura={project.arquitectura} labels={labels} />
            <MetricsRow resultados={project.resultados} w={w} />
            <Stack stack={project.stack} label={labels.stack} />
            <CtaRow links={project.links} cta={cta} />
        </div>
    );

    const imageColumn = (
        <div style={{ marginTop: isMobile ? 0 : '56px' }}>
            {images
                ? <ImageCarousel images={images} aspectRatio="3 / 2" labels={labels} />
                : <ImageSlot caption={project.imageCaption} aspectRatio="3 / 4" />
            }
        </div>
    );

    return (
        <div style={caseStudyStyle(w, isFirst)}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : imageFirst ? '5.5fr 6.5fr' : '6.5fr 5.5fr',
                    gap: isMobile ? '32px' : '64px',
                    alignItems: 'start',
                }}
            >
                {imageFirst ? (
                    <>
                        {imageColumn}
                        {textColumn}
                    </>
                ) : (
                    <>
                        {textColumn}
                        {imageColumn}
                    </>
                )}
            </div>
        </div>
    );
}
