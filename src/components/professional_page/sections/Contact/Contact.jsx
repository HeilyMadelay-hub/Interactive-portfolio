import React, { useState, useEffect } from 'react';
import { sectionStyle, paddingWrapStyle, gridStyle } from './style/Contact.js';
import { sectionWrapStyle } from '../../theme';
import ContactForm from './ContactForm.jsx';
import ContactPanel from './ContactPanel.jsx';

// Solo maquetación: coloca los dos componentes independientes en la rejilla.
//   - ContactForm  (izquierda): título + formulario   → se mueve con formColumnStyle
//   - ContactPanel (derecha):   cuadro oscuro           → se mueve con panelStyle.marginTop
function Contact() {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1400
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const w = windowWidth;

    return (
        <section id="contact" style={sectionStyle}>
            <div style={sectionWrapStyle(w)}>
                <div style={paddingWrapStyle(w)}>
                    <div style={gridStyle(w)}>
                        <ContactForm w={w} />
                        <ContactPanel w={w} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
