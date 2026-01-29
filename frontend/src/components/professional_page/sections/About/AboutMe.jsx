import React from 'react';
import {
    aboutContainer,
    gridBackground,
    contentWrapper,
    flexContainer,
    textContent,
    sectionTitle,
    sectionSubtitle,
    animatedLine,
    aboutText,
    imageContainer,
    imageWrapper,
    profileImage as profileImageStyle,
} from './style/AboutMe.js';
import { motion } from "framer-motion";
import profileImage from "../../../../assets/profesional_view/images/profile/logo.jpg";
import WhatDoIdo from './WhatDoIdo.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';

function AboutMe() {
    return (
        <>
            <section id="about" style={aboutContainer}>
                {/* Grid de fondo estático */}
                <div style={gridBackground}></div>

                {/* Contenido principal */}
                <div style={contentWrapper}>
                    <div style={flexContainer}>
                        {/* Contenido de texto */}
                        <motion.div
                            style={textContent}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={sectionTitle}>Hola, soy Heily</h2>

                            <p style={sectionSubtitle}>
                                Desarrolladora Full Stack especializada en backend, cloud e integración de IA aplicada a productos reales.
                            </p>

                            <motion.div
                                style={animatedLine}
                                initial={{ width: 0 }}
                                animate={{ width: '220px' }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />

                            <p style={aboutText}>
                                Desarrolladora Full Stack en Madrid, titulada en{" "}
                                <strong style={{ color: "#64ffda" }}>Grado Superior en Desarrollo de Aplicaciones Multiplataforma</strong>, con experiencia en desarrollo de{" "}
                                <strong style={{ color: "#64ffda" }}>MVPs</strong>, sistemas{" "}
                                <strong style={{ color: "#64ffda" }}>backend</strong> y soluciones de{" "}
                                <strong style={{ color: "#64ffda" }}>IA</strong> para automatización y entornos{" "}
                                <strong style={{ color: "#64ffda" }}>legales</strong>.
                                <br /><br />
                                He trabajado en producción como{" "}
                                <strong style={{ color: "#64ffda" }}>freelance</strong>,{" "}
                                <strong style={{ color: "#64ffda" }}>becaria</strong> y{" "}
                                <strong style={{ color: "#64ffda" }}>voluntaria</strong>, participando en
                                arquitectura backend (<strong style={{ color: "#64ffda" }}>C#/.NET</strong>,{" "}
                                <strong style={{ color: "#64ffda" }}>Python</strong>),{" "}
                                <strong style={{ color: "#64ffda" }}>APIs REST</strong>, migraciones de bases
                                de datos y despliegues en{" "}
                                <strong style={{ color: "#64ffda" }}>AWS</strong> y{" "}
                                <strong style={{ color: "#64ffda" }}>Azure</strong>. He optimizado procesos backend (<strong style={{ color: "#64ffda" }}>reducción del 30%</strong>{" "}
                                en pruebas de IA) y desarrollado sistemas con{" "}
                                <strong style={{ color: "#64ffda" }}>IA</strong> y{" "}
                                <strong style={{ color: "#64ffda" }}>RAG</strong> para{" "}
                                <strong style={{ color: "#64ffda" }}>chatbots</strong> y automatización legal.
                                <br /><br />
                                Actualmente finalizo un{" "}
                                <strong style={{ color: "#64ffda" }}>Máster en Full Stack y Cloud</strong>, orientado a la preparación de certificaciones como{" "}
                                <strong style={{ color: "#64ffda" }}>AWS Solutions Architect – Associate</strong>,{" "}
                                <strong style={{ color: "#64ffda" }}>AWS Developer – Associate</strong>,{" "}
                                <strong style={{ color: "#64ffda" }}>Azure Developer Associate</strong> y{" "}
                                <strong style={{ color: "#64ffda" }}>Power Platform Developer Associate</strong>, y
                                busco una{" "}
                                <strong style={{ color: "#64ffda" }}>posición junior</strong> con{" "}
                                <strong style={{ color: "#64ffda" }}>responsabilidad técnica real</strong>,
                                donde seguir creciendo.
                            </p>





                        </motion.div>

                        {/* Imagen */}
                        <motion.div
                            style={imageContainer}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div style={imageWrapper}>
                                <img
                                    src={profileImage}
                                    alt="Heily - Full Stack Developer"
                                    style={profileImageStyle}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <WhatDoIdo />


            <Skills />

            <Experience/>
        </>
    );
}

export default AboutMe;



//{ <Experience />  }
//{ <Recommendations />  }


//## 🎯 Objetivo para RRHH

//Un recruiter suele:

//* Escanear en ** 10–20 segundos **
//* Buscar ** qué haces **, ** qué sabes **, ** en qué has trabajado ** y ** qué buscas **
//* No leer bloques largos de texto

//---

//## ✅ Orden recomendado de secciones(muy efectivo para RRHH)

//    ```txt
//1. AboutMe (Quién eres + foco profesional)
//2. WhatDoIDo (Qué aportas / cómo generas valor)
//3. Skills (Stack técnico claro)
//4. Experience (Experiencia real y resultados)
//5. Education (Formación)
//6. Articles / Projects (Opcional, refuerza perfil)
//7. Recommendations (Opcional, social proof)
//```

//👉 ** No pongas todo junto **: cada sección debe responder a ** una pregunta concreta **.

//---

//## 🧠 Cómo adaptar TU `AboutMe` para RRHH(muy importante)

//Tu texto es bueno, pero demasiado denso.
//RRHH prefiere:

//* 1 frase de posicionamiento
//    * 3–4 bullets de impacto

//### ✨ Versión optimizada de tu texto

//    ```jsx
//<p style={aboutText}>
//    Desarrolladora Full Stack en Madrid, enfocada en backend, cloud e IA aplicada a productos reales.
//    <br /><br />
//    • Experiencia en desarrollo de MVPs y sistemas backend en producción<br />
//    • Trabajo con C#/.NET, Python, APIs REST y arquitecturas cloud (AWS, Azure)<br />
//    • Desarrollo de soluciones de IA, RAG y automatización legal<br />
//    • Optimización de procesos backend (hasta un 30% de mejora en pruebas de IA)<br />
//    <br />
//    Actualmente finalizo un Máster en Full Stack & Cloud y busco una posición junior con responsabilidad técnica real.
//</p>
//```

//📌 Esto ** se escanea en 5 segundos **.

//---

//## 🧩 Qué debería ir en cada componente

//### 🟣 `WhatDoIDo`

//👉 ** No skills **, solo valor

//    ```txt
//• Diseño arquitecturas backend escalables
//• Desarrollo APIs robustas y mantenibles
//• Integro IA en flujos reales de negocio
//• Automatizo procesos en entornos legales y empresariales
//```

//---

//### 🔵 `Skills`

//👉 Stack claro, sin texto largo

//    ```txt
//Backend: Python, C#, .NET, Node
//Frontend: React, HTML, CSS
//Cloud: AWS, Azure
//IA: OpenAI, RAG, embeddings
//DB: PostgreSQL, SQL Server
//```

//---

//### 🟢 `Experience`

//👉 Siempre con impacto:

//```txt
//Freelance Backend Developer
//• Desarrollo de sistemas en producción
//• Integración de IA en procesos legales
//• Optimización de rendimiento (-30%)
//```

//---

//## ⚠️ Errores comunes que YA estás evitando(bien hecho)

//✔ No texto genérico
//✔ No “me apasiona la tecnología”
//✔ No buzzwords sin contexto
//✔ No párrafos infinitos

//---

//## 🔥 Si quieres el siguiente nivel

//Puedo ayudarte a:

//* Reescribir ** todo el portfolio con enfoque RRHH **
//* Ajustarlo a ** Junior / Mid **
//* Adaptarlo a ** LinkedIn + CV + Web **
//* Diseñar una ** narrativa coherente(storytelling profesional) **

//    Dime 👉 **¿frontend recruiter, tech lead o startup ?**
//        Y lo optimizamos exactamente para ese público.



