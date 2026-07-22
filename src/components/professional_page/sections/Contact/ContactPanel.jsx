import React from 'react';
import {
    panelStyle,
    panelLabelStyle,
    panelLinkRowStyle,
    panelLinkLabelStyle,
    panelLinkValueStyle,
    panelFooterStyle,
    panelLocationStyle,
    availabilityRowStyle,
    availabilityDotStyle,
    availabilityTextStyle,
} from './style/Contact.js';
import { colors } from '../../theme';
import ConsolePanel from '../../ui/ConsolePanel.jsx';
import { useT } from '../../i18n/LanguageContext.jsx';
import { CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL } from './contactInfo.js';

// Cuadro oscuro "Contacto directo".
// La carcasa la aporta ConsolePanel; aquí va solo el contenido específico.
// Se mueve de forma independiente con `panelStyle` (marginTop, en style/Contact.js).
function ContactPanel({ w }) {
    const t = useT().contact;

    return (
        <ConsolePanel title={t.panel.label} style={panelStyle(w)} titleStyle={panelLabelStyle}>
            <a href={`mailto:${CONTACT_EMAIL}`} style={panelLinkRowStyle(false)}>
                <span style={panelLinkLabelStyle}>{t.form.email}</span>
                <span
                    style={panelLinkValueStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.accent)}
                >
                    {CONTACT_EMAIL}
                </span>
            </a>

            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" style={panelLinkRowStyle(false)}>
                <span style={panelLinkLabelStyle}>LinkedIn</span>
                <span
                    style={panelLinkValueStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.accent)}
                >
                    /in/heilymajtan
                </span>
            </a>

            <a href={GITHUB_URL} target="_blank" rel="noreferrer" style={panelLinkRowStyle(true)}>
                <span style={panelLinkLabelStyle}>GitHub</span>
                <span
                    style={panelLinkValueStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.accent)}
                >
                    HeilyMadelay-hub
                </span>
            </a>

            <div style={panelFooterStyle}>
                <p style={panelLocationStyle}>{t.panel.location}</p>
                <div style={availabilityRowStyle}>
                    <span style={availabilityDotStyle} />
                    <span style={availabilityTextStyle}>{t.panel.availability}</span>
                </div>
                <div style={availabilityRowStyle}>
                    <span style={availabilityDotStyle} />
                    <span style={availabilityTextStyle}>{t.panel.relocation}</span>
                </div>
            </div>
        </ConsolePanel>
    );
}

export default ContactPanel;
