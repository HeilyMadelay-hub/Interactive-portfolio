import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/profesional_view/images/profile/logo.jpeg';
import { useT, useLanguage } from '../../../professional_page/i18n/LanguageContext.jsx';
import ThemeToggle from '../../../../theme/ThemeToggle.jsx';
import './ChatHeroHeader.css';

const LANGS = ['ES', 'EN', 'FR'];

// Monochrome line/brand icons for the header links. All inherit `currentColor`,
// so they follow the link's muted colour and turn primary on hover.
const iconProps = { className: 'hero-link-icon', width: 14, height: 14, 'aria-hidden': true };

function PortfolioIcon() {
    return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

const ChatHeroHeader = React.memo(function ChatHeroHeader({ isOffline = false }) {
    const navigate = useNavigate();
    const t = useT().chat.hero;
    const { lang, setLang } = useLanguage();

    const handleViewProjects = () => navigate('/portfolio');

    return (
        <div className="chat-header">
            <div className="chat-header-inner">
                <div className="hero-photo">
                    <img
                        src={logo}
                        alt="Heily Madelay Tandazo"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <span className="hero-photo-fallback" style={{ display: 'none' }}>H</span>
                </div>

                <div className="hero-info">
                    <h1 className="hero-name">Heily Madelay Tandazo</h1>

                    <p className="hero-role">
                        <span className="hero-title">{t.role}</span>
                        <span className="hero-stack">Java • Angular • Cloud • AI</span>
                    </p>

                    <div className={`hero-status ${isOffline ? 'offline' : ''}`}>
                        <span className="status-dot"></span>
                        {isOffline ? t.offline : t.available}
                    </div>

                    <div className="hero-links">
                        {/* La etiqueta va en su propio span para que el subrayado del
                            hover caiga solo bajo el texto y no bajo el icono. */}
                        <button className="hero-link" onClick={handleViewProjects} type="button">
                            <PortfolioIcon />
                            <span className="hero-link-label">{t.portfolioLink}</span>
                        </button>
                        <a
                            className="hero-link"
                            href="https://github.com/HeilyMadelay-hub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                            <span className="hero-link-label">GitHub</span>
                        </a>
                        <a
                            className="hero-link"
                            href="https://www.linkedin.com/in/heilymajtan/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                            <span className="hero-link-label">LinkedIn</span>
                        </a>
                        <a
                            className="hero-link"
                            href="mailto:heilymadelayajtan@icloud.com"
                        >
                            <EmailIcon />
                            <span className="hero-link-label">Email</span>
                        </a>
                    </div>
                </div>

                {/* Controles de la esquina superior derecha: tema + idioma.
                    El botón de tema va fuera de la píldora de idiomas porque
                    semánticamente no es un idioma más, pero comparte fila. */}
                <div className="hero-controls">
                    <ThemeToggle />

                    {/* El chat ya no está fijado a inglés: el visitante puede cambiar
                        idioma aquí y la elección se guarda para el portfolio también. */}
                    <div className="hero-lang" role="group" aria-label={t.languageLabel}>
                        {LANGS.map(code => (
                            <button
                                key={code}
                                type="button"
                                className={`hero-lang-btn ${lang === code ? 'active' : ''}`}
                                onClick={() => setLang(code)}
                                aria-pressed={lang === code}
                            >
                                {code}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ChatHeroHeader;
