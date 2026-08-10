import React, { useState } from 'react';
import './CaseStudyContent.css';
import { useLanguage } from '../../../professional_page/i18n/LanguageContext.jsx';
import en from './i18n/en.json';
import es from './i18n/es.json';
import fr from './i18n/fr.json';

const DICTS = { EN: en, ES: es, FR: fr };

function ArrowUpRight() {
    return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const CaseStudyContent = React.memo(function CaseStudyContent({ project, caseStudy: cs }) {
    const [archExpanded, setArchExpanded] = useState(false);
    const { lang } = useLanguage();
    const dict = DICTS[lang] || DICTS.EN;
    const ui = dict.ui;
    const t = dict.projects[project.id] || {};

    return (
        <div className="cs-content">

            {/* ——— 1. HERO ——— */}
            <section className="cs-hero">
                <div className="cs-narrow">
                    <h1 className="cs-hero-title">{project.title}</h1>
                    <p className="cs-hero-tagline">{t.tagline || cs.tagline}</p>
                    <p className="cs-hero-desc">{t.description || cs.description}</p>
                    <div className="cs-hero-tags">
                        {cs.tags.map(tag => (
                            <span key={tag} className="cs-tag">{tag}</span>
                        ))}
                    </div>
                </div>
                {project.screenshots?.[cs.heroScreenshotIndex ?? 0] && (
                    <div className="cs-hero-image cs-img-wrap">
                        <img
                            src={project.screenshots[cs.heroScreenshotIndex ?? 0]}
                            alt={project.screenshotLabels?.[cs.heroScreenshotIndex ?? 0] || project.title}
                        />
                    </div>
                )}
            </section>

            {/* ——— 2. THE PROBLEM ——— */}
            {cs.problem && (
                <section className="cs-section">
                    <div className="cs-narrow">
                        <span className="cs-eyebrow">{ui.theProblem}</span>
                        <h2 className="cs-headline">{t.problem?.headline || cs.problem.headline}</h2>
                        <p className="cs-body">{t.problem?.description || cs.problem.description}</p>

                        {cs.problem.flow?.length > 0 && (
                            <div className="cs-flow-vertical">
                                {(t.problem?.flow || cs.problem.flow).map((step, i) => (
                                    <React.Fragment key={step}>
                                        {i > 0 && <div className="cs-flow-arrow" aria-hidden="true">{'↓'}</div>}
                                        <div className="cs-flow-step">{step}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ——— 3. THE PRODUCT / WHAT IT DOES ——— */}
            {cs.capabilities?.length > 0 && (
                <section className="cs-section">
                    <div className="cs-narrow">
                        <span className="cs-eyebrow">{ui.theProduct}</span>
                        <h2 className="cs-headline">{ui.whatItDoes}</h2>
                    </div>
                    <div className="cs-capabilities">
                        {cs.capabilities.map((cap, idx) => {
                            const capT = t.capabilities?.[idx] || {};
                            return (
                                <div key={capT.title || cap.title} className="cs-capability">
                                    <div className="cs-narrow">
                                        <h3 className="cs-capability-title">{capT.title || cap.title}</h3>
                                        <p className="cs-body">{capT.description || cap.description}</p>
                                    </div>
                                    {cap.screenshotIndex != null && project.screenshots?.[cap.screenshotIndex] && (
                                        <div className="cs-capability-img cs-img-wrap">
                                            <img
                                                src={project.screenshots[cap.screenshotIndex]}
                                                alt={capT.title || cap.title}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* ——— 4. FROM MESSAGE TO INSIGHT ——— */}
            {cs.insight && (
                <section className="cs-section">
                    <div className="cs-narrow">
                        <span className="cs-eyebrow">{ui.fromMessageToInsight}</span>

                        <div className="cs-insight-panel">
                            <div className="cs-insight-block">
                                <span className="cs-insight-label">{ui.message}</span>
                                <blockquote className="cs-insight-message">
                                    {t.insight?.message || cs.insight.message}
                                </blockquote>
                            </div>

                            <div className="cs-insight-arrow" aria-hidden="true">{'↓'}</div>

                            <div className="cs-insight-block">
                                <span className="cs-insight-label">{ui.analysis}</span>
                                <div className="cs-insight-grid">
                                    {Object.entries(t.insight?.analysis || cs.insight.analysis).map(([key, value]) => (
                                        <div key={key} className="cs-insight-metric">
                                            <span className="cs-insight-metric-label">{key}</span>
                                            <span className="cs-insight-metric-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cs-insight-arrow" aria-hidden="true">{'↓'}</div>

                            <div className="cs-insight-block">
                                <span className="cs-insight-label">{ui.evidence}</span>
                                <p className="cs-insight-evidence">{t.insight?.evidence || cs.insight.evidence}</p>
                            </div>

                            {cs.insight.isIllustrative && (
                                <p className="cs-insight-note">
                                    {ui.illustrativeNote}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ——— 5. WHY I BUILT IT THIS WAY ——— */}
            {cs.philosophy && (
                <section className="cs-section">
                    <div className="cs-narrow">
                        <span className="cs-eyebrow">{ui.whyIBuiltItThisWay}</span>
                        <h2 className="cs-headline">{t.philosophy?.headline || cs.philosophy.headline}</h2>
                        <p className="cs-body">{t.philosophy?.description || cs.philosophy.description}</p>

                        <div className="cs-pillars">
                            {(t.philosophy?.pillars || cs.philosophy.pillars).map((pillar, i) => (
                                <React.Fragment key={pillar.label}>
                                    {i > 0 && (
                                        <span className="cs-pillar-connector" aria-hidden="true">{'→'}</span>
                                    )}
                                    <div className="cs-pillar">
                                        <h3 className="cs-pillar-label">{pillar.label}</h3>
                                        <p className="cs-pillar-desc">{pillar.description}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ——— 6. ENGINEERING DECISIONS ——— */}
            {cs.decisions?.length > 0 && (
                <section className="cs-section">
                    <div className="cs-narrow">
                        <span className="cs-eyebrow">{ui.engineeringDecisions}</span>

                        <div className="cs-decisions">
                            {cs.decisions.map((d, idx) => {
                                const dT = t.decisions?.[idx] || {};
                                return (
                                    <div key={d.number} className="cs-decision">
                                        <span className="cs-decision-num">{d.number}</span>
                                        <div className="cs-decision-body">
                                            <h3 className="cs-decision-title">{dT.title || d.title}</h3>
                                            <p className="cs-body">{dT.description || d.description}</p>
                                            <p className="cs-decision-why">
                                                <span className="cs-decision-why-tag">{ui.why}</span> — {dT.why || d.why}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {cs.decisionsScreenshotIndex != null && project.screenshots?.[cs.decisionsScreenshotIndex] && (
                            <div className="cs-decisions-screenshot cs-img-wrap">
                                <img
                                    src={project.screenshots[cs.decisionsScreenshotIndex]}
                                    alt="Trace audit"
                                    loading="lazy"
                                />
                                {(t.decisionsScreenshotCaption || cs.decisionsScreenshotCaption) && (
                                    <p className="cs-img-caption">{t.decisionsScreenshotCaption || cs.decisionsScreenshotCaption}</p>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ——— 7. UNDER THE HOOD ——— */}
            {cs.architecture && (
                <section className="cs-section">
                    <div className="cs-narrow">
                        <span className="cs-eyebrow">{ui.underTheHood}</span>

                        <div className="cs-pipeline">
                            {(t.architecture?.pipeline || cs.architecture.pipeline).map((step, i) => (
                                <React.Fragment key={step}>
                                    {i > 0 && <div className="cs-pipeline-line" aria-hidden="true" />}
                                    <div className="cs-pipeline-node"><span>{step}</span></div>
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="cs-stack-row">
                            {cs.architecture.stack.map(s => (
                                <span key={s.name} className="cs-stack-chip">{s.name}</span>
                            ))}
                        </div>

                        {cs.architecture.detail && (
                            <>
                                <button
                                    type="button"
                                    className="cs-arch-toggle"
                                    onClick={() => setArchExpanded(v => !v)}
                                >
                                    {archExpanded ? ui.hideArchitecture : ui.viewArchitecture}
                                </button>
                                {archExpanded && (
                                    <p className="cs-body cs-arch-detail">{t.architecture?.detail || cs.architecture.detail}</p>
                                )}
                            </>
                        )}
                    </div>
                </section>
            )}

            {/* ——— 8. CURRENT STATUS ——— */}
            {cs.status && (
                <section className="cs-section">
                    <div className="cs-narrow">
                        <span className="cs-eyebrow">{ui.currentStatus}</span>
                        <p className="cs-status-badge">{ui.inActiveDevelopment}</p>
                        <p className="cs-body">{t.status || cs.status}</p>
                    </div>
                </section>
            )}

            {/* ——— 10. FINAL CTA ——— */}
            <section className="cs-section cs-cta">
                <div className="cs-narrow">
                    <h2 className="cs-cta-title">{ui.wantToGoDeeper}</h2>
                    <p className="cs-body">{ui.ctaBody}</p>
                    {cs.github && (
                        <a
                            href={cs.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cs-cta-link"
                        >
                            {ui.viewSource} <ArrowUpRight />
                        </a>
                    )}
                </div>
            </section>
        </div>
    );
});

export default CaseStudyContent;
