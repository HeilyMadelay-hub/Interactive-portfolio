import React from 'react';
import { useNavigate } from 'react-router-dom';

// Importar componentes
import Header from "../../components/professional_page/layout/Header";
import Footer from "../../components/professional_page/layout/Footer";
import Hero from "../../components/professional_page/sections/Hero/Hero";
import AboutMe from '../../components/professional_page/sections/About/AboutMe';
import Projects from '../../components/professional_page/sections/Projects/Projects';
import Contact from '../../components/professional_page/sections/Contact/Contact';
import Articles from '../../components/professional_page/sections/Articles/Articles';


function ProfessionalPage() {
    const navigate = useNavigate(); // Hook que permite volver atrás

    return (
        // El idioma activo (ES/EN/FR) lo provee LanguageProvider desde App.jsx
        <div style={{
                width: '100%',
                overflowX: 'hidden' // Evita scroll horizontal
            }}>
                {/* Navbar fijo que se ve en todas las secciones */}
                <Header />

                {/* Secciones del portfolio - cada una con su propio fondo */}
                <section id="hero">
                    <Hero />
                </section>

                <section id="about">
                    <AboutMe />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="articles">
                    <Articles />
                </section>

                <section id="contact">
                    <Contact />
                </section>

                {/* Cierre del sitio: copyright + las tres páginas legales.
                    Va fuera de <section> porque no es una sección navegable
                    del portfolio, sino el pie de la página. */}
                <Footer />

            </div>
    );
}

export default ProfessionalPage;