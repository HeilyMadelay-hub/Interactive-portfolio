import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    formColumnStyle,
    formFieldsStyle,
    ledeStyle,
    fieldStyle,
    labelStyle,
    inputStyle,
    textareaStyle,
    consentRowStyle,
    consentCheckboxStyle,
    consentLabelStyle,
    consentLinkStyle,
    submitButtonStyle,
    submitArrowStyle,
} from './style/Contact.js';
import { sectionEyebrowStyle, sectionHeadingStyle, sectionUnderlineStyle, colors } from '../../theme';
import { useT } from '../../i18n/LanguageContext.jsx';
import { CONTACT_EMAIL } from './contactInfo.js';

const focusStyle = (el, focused) => {
    el.style.borderColor = focused ? colors.teal : colors.line;
};

// Columna izquierda: eyebrow "HABLEMOS" + título + intro + formulario.
// Se mueve de forma independiente con `formColumnStyle` (en style/Contact.js).
function ContactForm({ w }) {
    const t = useT().contact;
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`${t.mail.subject} — ${form.name || t.mail.fallbackName}`);
        const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <div style={formColumnStyle(w)}>
            <p style={sectionEyebrowStyle}>{t.eyebrow}</p>
            <h2 style={sectionHeadingStyle(w)}>{t.heading}</h2>
            <div style={sectionUnderlineStyle} />
            <p style={ledeStyle}>{t.lede}</p>

            <form onSubmit={handleSubmit} style={formFieldsStyle}>
                <div style={fieldStyle}>
                    <label style={labelStyle} htmlFor="contact-name">{t.form.name}</label>
                    <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange('name')}
                        style={inputStyle}
                        onFocus={(e) => focusStyle(e.currentTarget, true)}
                        onBlur={(e) => focusStyle(e.currentTarget, false)}
                    />
                </div>

                <div style={fieldStyle}>
                    <label style={labelStyle} htmlFor="contact-email">{t.form.email}</label>
                    <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange('email')}
                        style={inputStyle}
                        onFocus={(e) => focusStyle(e.currentTarget, true)}
                        onBlur={(e) => focusStyle(e.currentTarget, false)}
                    />
                </div>

                <div style={fieldStyle}>
                    <label style={labelStyle} htmlFor="contact-message">{t.form.message}</label>
                    <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange('message')}
                        style={textareaStyle}
                        onFocus={(e) => focusStyle(e.currentTarget, true)}
                        onBlur={(e) => focusStyle(e.currentTarget, false)}
                    />
                </div>

                {/* Consentimiento del tratamiento de los datos del formulario.
                    `required` deja que el navegador bloquee el envío y muestre
                    su propio aviso: sin estado extra ni mensaje que traducir. */}
                <div style={consentRowStyle}>
                    <input
                        id="contact-privacy"
                        type="checkbox"
                        required
                        style={consentCheckboxStyle}
                    />
                    <label style={consentLabelStyle} htmlFor="contact-privacy">
                        {t.form.privacy.before}
                        <Link
                            to="/privacy"
                            style={consentLinkStyle}
                            onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = colors.teal)}
                            onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = colors.line)}
                        >
                            {t.form.privacy.link}
                        </Link>
                        {t.form.privacy.after}
                    </label>
                </div>

                <button
                    type="submit"
                    style={submitButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = colors.teal;
                        e.currentTarget.style.borderColor = colors.teal;
                        const arrow = e.currentTarget.querySelector('svg');
                        if (arrow) arrow.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = colors.ink;
                        e.currentTarget.style.borderColor = colors.ink;
                        const arrow = e.currentTarget.querySelector('svg');
                        if (arrow) arrow.style.transform = 'translateX(0)';
                    }}
                >
                    {t.form.submit}
                    <svg style={submitArrowStyle} width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
