// Español — idioma por defecto. Fuente de verdad del contenido.
const es = {
    // Pantalla de rescate cuando un error de render tumba la app. Va en la raíz,
    // no dentro de `chat`, porque cubre las dos rutas.
    errorBoundary: {
        title: 'Algo se ha roto por aquí',
        message: 'Ha ocurrido un error inesperado. Recargar la página suele bastar.',
        retry: 'Recargar la página',
    },
    // Pantalla para cualquier URL que no exista (ruta no registrada en App.jsx).
    notFound: {
        title: 'Esta página no existe',
        message: 'La URL a la que has llegado no corresponde a ninguna sección de este sitio.',
        back: 'Volver al inicio',
    },
    // Botón de tema del header (chat y portfolio). Solo icono en pantalla:
    // estas frases son el aria-label/title para lectores de pantalla y tooltip.
    themeToggle: {
        toDark: 'Activar modo oscuro',
        toLight: 'Activar modo claro',
    },
    nav: {
        items: [
            { label: 'Sobre mí', href: '#about' },
            { label: 'Proyectos', href: '#projects' },
            { label: 'Artículos', href: '#articles' },
            { label: 'Contacto', href: '#contact' },
        ],
        cv: 'Descargar CV',
    },

    hero: {
        roleLine1: 'Full Stack Developer | Cloud & AI',
        roleLine2: '',
        lede: 'Desarrollo aplicaciones web modernas combinando software, datos e inteligencia artificial.',
        ledeSub: [
            'Construyo soluciones digitales completas integrando desarrollo Full Stack, cloud e IA para crear herramientas funcionales y orientadas a resolver problemas reales.',
        ],
        cta: 'Ver proyectos',
        consoleTitle: 'Enfoque actual',
        stack: [
            { path: 'full-stack/', desc: '.NET · Angular · React' },
            { path: 'backend/', desc: 'REST APIs · Clean Architecture' },
            { path: 'cloud/', desc: 'AWS · Docker · CI/CD' },
            { path: 'ai/', desc: 'OpenAI · ChromaDB · Automation' },
        ],
        metrics: [
            { value: '-30%', label: 'tiempo de testing de modelos IA' },
            { value: '100%', label: 'integridad de datos en migración SQLite → PostgreSQL/MySQL' },
            { value: '70+', label: 'provincias con análisis legal automatizado' },
            { value: '-70%', label: 'tiempo de setup de entorno en 3 repos documentados' },
        ],
    },

    about: {
        eyebrow: 'Sobre mí',
        heading: 'Hola, soy Heily',
        subtitle: [
            'Soy ',
            { b: 'desarrolladora Backend y Full Stack' },
            ' con experiencia en el desarrollo de ',
            { b: 'aplicaciones empresariales, APIs y soluciones cloud' },
            '.',
        ],
        paragraphs: [
            [
                'He trabajado como ',
                { b: 'desarrolladora freelance' },
                ' creando ',
                { b: 'MVPs y demostradores tecnológicos' },
                ', participando en el análisis de requisitos, diseño, implementación e integración de soluciones adaptadas a las necesidades de cada proyecto.',
            ],
            [
                'Mi stack principal incluye ',
                { b: 'Java (Spring Boot), C#/.NET y Python para backend' },
                ', ',
                { b: 'Angular en frontend' },
                ' y servicios cloud en ',
                { b: 'AWS y Azure' },
                '. También he desarrollado soluciones con ',
                { b: 'inteligencia artificial generativa' },
                ' orientadas a la ',
                { b: 'automatización de procesos' },
                ' y la optimización de flujos de trabajo.',
            ],
            [
                'Cuento con formación en ',
                { b: 'Desarrollo de Aplicaciones Multiplataforma (FP)' },
                ', un ',
                { b: 'Máster en Full Stack & Cloud' },
                ' y ',
                { b: 'certificaciones oficiales de AWS y Microsoft' },
                '. Actualmente busco oportunidades como ',
                { b: 'Backend Developer, Full Stack Developer o AI Integration Developer' },
                ' para participar en el desarrollo de ',
                { b: 'aplicaciones, APIs y soluciones basadas en cloud e inteligencia artificial' },
                '.',
            ],
        ],
        imageAlt: 'Heily — Full Stack Developer',
    },

    whatDoIdo: {
        eyebrow: 'Cómo trabajo',
        heading: '¿Qué hago?',
        capabilities: [
            {
                title: 'Arquitectura backend',
                description: 'Diseño sistemas backend escalables que manejan conexiones concurrentes con respuesta óptima. FastAPI, ASP.NET Core y Node.js con gestión de transacciones, prevención de race conditions y WebSockets en tiempo real.',
            },
            {
                title: 'Integración de IA',
                description: 'Integro IA conversacional en flujos reales usando RAG, streaming y Computer Vision. De análisis legal a traducción de lenguaje de señas, transformo modelos complejos en soluciones prácticas.',
            },
            {
                title: 'Sistemas en tiempo real',
                description: 'Desarrollo arquitecturas de alto rendimiento con WebSockets, SignalR y eventos. Chat con streaming, reservas con bloqueo optimista y trabajos en background para experiencias fluidas sin inconsistencias.',
            },
            {
                title: 'Automatización legal tech',
                description: 'Automatizo flujos legales eliminando tareas repetitivas. Scraping de BOE/BOA, procesamiento masivo de PDFs y chatbots RAG que convierten documentos en inteligencia accionable.',
            },
        ],
    },

    skills: {
        eyebrow: 'Herramientas',
        heading: 'Stack tecnológico',
        categories: [
            { category: 'Backend', skills: ['C#', 'ASP.NET Core', 'Python', 'FastAPI', 'Java', 'Spring Boot', 'Node.js', 'APIs REST'] },
            { category: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'HTML/CSS', 'JavaScript'] },
            { category: 'IA y Automatización', skills: ['RAG Pipelines', 'LangGraph', 'LangChain', 'OpenAI API', 'Gemini API', 'Hugging Face', 'ChromaDB', 'pgvector', 'Ollama', 'OCR', 'MediaPipe', 'TensorFlow.js', 'Streamlit', 'Selenium', 'BeautifulSoup', 'pandas', 'PyPDF2', 'pdfplumber', 'n8n'] },
            { category: 'Tiempo Real', skills: ['WebSockets', 'SignalR', 'Socket.io'] },
            { category: 'Cloud y DevOps', skills: ['Azure', 'AWS', 'Docker', 'Git/GitHub'] },
            { category: 'Bases de Datos', skills: ['PostgreSQL', 'pgvector', 'MySQL', 'MariaDB', 'SQL Server', 'MongoDB', 'Supabase'] },
        ],
    },

    experience: {
        eyebrow: 'Trayectoria',
        heading: 'Experiencia',
        intro: 'De prácticas en empresa a proyectos freelance en producción, siempre con foco en backend, IA y arquitectura.',
        meta: { dates: 'Fechas', location: 'Ubicación', team: 'Equipo', methodology: 'Metodología' },
        toggle: { show: 'Ver detalles', hide: 'Ocultar detalles' },
        items: [

            {
                id: 'netcheck',
                role: 'Desarrolladora Full Stack',
                roleDetail: 'Angular & Java',
                company: 'NetCheck',
                type: '',
                dates: 'Jun. 2026 – Jul. 2026',
                location: 'Madrid, España',
                environment: 'Remoto',
                team: '20 personas en total',
                methodology: 'Agile',
                summary: 'Desarrollé y mantuve funcionalidades full-stack dentro de una aplicación monolítica empresarial usando Angular, TypeScript, Java, Spring Boot, JPA/Hibernate y SQL, integrando componentes frontend con APIs REST de Spring Boot.',
                highlights: [
                    'Diagnostiqué y resolví incidencias full-stack rastreando peticiones a través de Angular, Spring Boot, APIs REST y bases de datos SQL.',
                    'Investigué y resolví incidencias backend relacionadas con mapeos JPA/Hibernate, queries SQL y bases de datos PostgreSQL, restaurando la funcionalidad de la aplicación.',
                    'Resolví fallos de arranque en aplicaciones Spring Boot multi-módulo analizando logs de Hibernate, HikariCP y de la aplicación.',
                    'Validé y solucioné flujos de autenticación entre Angular y APIs REST protegidas con Spring Security usando JWT, e investigué flujos de autenticación SAML.',
                    'Mejoré el onboarding de desarrolladores estandarizando documentación técnica y apoyando a un nuevo becario en la configuración del entorno de Angular y Spring Boot, reduciendo el tiempo de configuración en más de un 70%.',
                ],
                tech: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Docker Compose', 'WSL2', 'Hibernate', 'JPA', 'JWT', 'SAML', 'Maven', 'Apache Tomcat', 'Git', 'Azure DevOps'],
                details: [
                    { label: 'Overview', text: 'Desarrollé y mantuve funcionalidades full-stack dentro de una aplicación monolítica empresarial usando Angular, TypeScript, Java, Spring Boot, JPA/Hibernate y SQL, integrando componentes frontend con APIs REST de Spring Boot.' },
                    {
                        label: 'Backend & Resolución de Incidencias',
                        items: [
                            'Diagnostiqué y resolví incidencias full-stack rastreando peticiones a través de Angular, Spring Boot, APIs REST y bases de datos SQL.',
                            'Analicé logs de Hibernate, HikariCP y de la aplicación para investigar problemas de arranque, configuración y runtime en aplicaciones Spring Boot multi-módulo.',
                            'Investigué y resolví incidencias backend relacionadas con mapeos JPA/Hibernate, queries SQL y bases de datos PostgreSQL, analizando el comportamiento de la aplicación y restaurando su funcionalidad.',
                        ],
                    },
                    {
                        label: 'Seguridad & Autenticación',
                        items: [
                            'Validé y solucioné flujos de autenticación entre aplicaciones Angular y APIs REST protegidas con Spring Security usando autenticación JWT, e investigué flujos de autenticación SAML.',
                            'Investigué incidencias de seguridad y autenticación relacionadas con la validación de tokens JWT, cifrado de credenciales y comunicación frontend-backend.',
                        ],
                    },
                    {
                        label: 'APIs & Testing',
                        items: [
                            'Validé funcionalidades completadas mediante testing funcional, end-to-end y de APIs usando Swagger/OpenAPI y Postman, reproduciendo defectos, verificando correcciones y asegurando el comportamiento correcto antes de la integración y el despliegue.',
                        ],
                    },
                    {
                        label: 'Infraestructura & Developer Experience',
                        items: [
                            'Configuré entornos de desarrollo empresariales locales usando Docker, Docker Compose, WSL2, Maven, PostgreSQL, Apache Tomcat y otros servicios de aplicación para dar soporte a los flujos de trabajo de desarrollo.',
                            'Mejoré el onboarding de desarrolladores estandarizando documentación técnica y apoyando a un nuevo becario de ingeniería de software en la configuración del entorno de Angular y Spring Boot, reduciendo en más de un 70% el tiempo de configuración para nuevos miembros del equipo.',
                        ],
                    },
                    {
                        label: 'Metodología & Colaboración',
                        items: [
                            'Colaboré con desarrolladores senior en un equipo Agile Scrum, participando en sprint planning, code reviews, corrección de bugs y pull requests usando Git y Azure DevOps.',
                        ],
                    },
                    { label: 'Equipo', text: 'Trabajé en un equipo Agile multidisciplinar junto a desarrolladores backend, frontend, tech leads y arquitectos de nube, colaborando en el desarrollo de soluciones tecnológicas.' }
                ],
            },
         
            {
                id: 'freelance',
                role: 'Desarrolladora Full Stack',
                roleDetail: '.NET, Python y Angular',
                company: 'Freelance',
                type: '',
                dates: 'Jul. 2025 – Jun. 2026',
                location: 'Madrid, España',
                environment: 'Remoto',
                team: 'Trabajo independiente con clientes directos',
                methodology: 'Agile',
                summary: 'Diseñé y entregué soluciones de software a medida para pequeños negocios y profesionales, liderando proyectos desde el levantamiento de requisitos hasta la implementación, el despliegue y la entrega al cliente.',
                highlights: [
                    'Diseñé y desarrollé APIs REST con C#/.NET, FastAPI y Python para aplicaciones de negocio y soluciones con IA.',
                    'Construí prototipos de aplicaciones de IA para análisis de documentos legales, clasificación y modelos de lenguaje.',
                    'Desarrollé aplicaciones Angular responsive conectadas a APIs backend propias.',
                    'Migré aplicaciones de SQLite local a bases de datos cloud gestionadas, validando la integridad de los datos.',
                    'Trabajé directamente con clientes traduciendo necesidades de negocio en soluciones técnicas, entregando MVPs de forma iterativa.',
                ],
                tech: ['C#', '.NET', 'Python', 'FastAPI', 'Angular', 'PostgreSQL', 'MySQL', 'SQLite', 'Git'],
                details: [
                    { label: 'Overview', text: 'Diseñé y entregué soluciones de software a medida para pequeños negocios y profesionales, liderando proyectos desde el levantamiento de requisitos y diseño técnico hasta la implementación, el despliegue y la entrega al cliente.' },
                    {
                        label: 'Desarrollo Backend',
                        items: [
                            'Diseñé y desarrollé APIs REST usando C#/.NET, FastAPI y Python para aplicaciones de negocio y soluciones potenciadas por IA.',
                            'Diseñé arquitecturas backend modulares enfocadas en mantenibilidad, escalabilidad y buenas prácticas de código limpio.',
                            'Implementé lógica de negocio, mecanismos de autenticación y capas de persistencia de datos para aplicaciones en producción.',
                        ],
                    },
                    {
                        label: 'Aplicaciones de IA',
                        items: [
                            'Construí aplicaciones de IA de prueba de concepto para análisis de documentos legales, clasificación de documentos y modelos de lenguaje de gran escala.',
                            'Desarrollé prototipos RAG (Retrieval-Augmented Generation) para búsqueda de documentos y extracción de información.',
                            'Integré servicios de IA en arquitecturas backend siguiendo principios de diseño RESTful.',
                        ],
                    },
                    {
                        label: 'Desarrollo Full Stack',
                        items: [
                            'Desarrollé aplicaciones Angular responsive conectadas a APIs backend.',
                            'Diseñé flujos completos de aplicación, desde interfaces frontend hasta servicios backend e integración con bases de datos.',
                            'Implementé autenticación, validación de formularios y comunicación API entre frontend y backend.',
                        ],
                    },
                    {
                        label: 'Cloud & Datos',
                        items: [
                            'Migré aplicaciones de bases de datos SQLite locales a bases de datos cloud gestionadas, adaptando esquemas y validando la integridad de los datos migrados.',
                            'Refactoricé servicios backend para soportar persistencia en la nube usando PostgreSQL y MySQL.',
                            'Mejoré la fiabilidad de las aplicaciones eliminando dependencias de infraestructura local.',
                        ],
                    },
                    {
                        label: 'Colaboración con Clientes',
                        items: [
                            'Trabajé directamente con clientes para entender requisitos de negocio, definir el alcance del proyecto y traducir necesidades funcionales en soluciones técnicas.',
                            'Entregué MVPs, prototipos y soluciones listas para producción a través de feedback iterativo y prácticas Agile.',
                            'Propuse soluciones digitales que optimizaron procesos de negocio y mejoraron la experiencia del cliente.',
                        ],
                    },
                ],
            },
            {
                id: 'atisa',
                role: 'Desarrolladora Backend',
                roleDetail: 'IA y Automatización',
                company: 'Atisa',
                type: '',
                dates: 'Mar. 2025 – Jun. 2025',
                location: 'Madrid, España',
                environment: 'Presencial',
                team: '12 personas en total',
                methodology: 'Agile',
                summary: 'Trabajé desarrollando aplicaciones de IA, servicios backend y soluciones de automatización para el procesamiento de convenios colectivos oficiales y la optimización de flujos internos.',
                highlights: [
                    'Reduje el tiempo de procesamiento de convenios colectivos de ~2 horas a 10 minutos en más de 70 regiones, generando automáticamente resúmenes y tablas salariales estructuradas.',
                    'Construí chatbots de IA con FastAPI + Flutter (Gemini) y Flask + Streamlit (OpenAI), ambos Dockerizados.',
                    'Reduje un 30% el tiempo de testing de modelos de IA mejorando el flujo de pruebas.',
                    'Diseñé arquitecturas RAG con OpenAI API y ChromaDB para procesamiento documental.',
                    'Desarrollé pipelines de scraping con Selenium y BeautifulSoup e ingesta de BOE/BOA con PyPDF2, pdfplumber y pandas.',
                    'Analicé el portal legacy en PHP (CodeIgniter, MVC) y documenté la estructura de la base de datos con HeidiSQL y Workbench.',
                ],
                tech: ['Python', 'FastAPI', 'Flask', 'Streamlit', 'Docker', 'OpenAI API', 'Gemini API', 'Ollama', 'Hugging Face', 'ChromaDB', 'Selenium', 'BeautifulSoup', 'pandas', 'PyPDF2', 'pdfplumber', 'MariaDB', 'PHP (CodeIgniter)', 'n8n', 'Flutter', 'Git/GitHub'],
                details: [
                    { label: 'Overview', text: 'Desarrollé sistemas backend, aplicaciones de IA y pipelines de automatización para el procesamiento de convenios colectivos oficiales, extracción de datos estructurados y optimización de flujos de trabajo internos.' },
                    {
                        label: 'Sistemas de IA (RAG y Chatbots)',
                        items: [
                            'Diseñé arquitecturas backend y modelos de datos para sistemas de IA basados en RAG usando OpenAI APIs y ChromaDB.',
                            'Construí chatbots de IA con APIs REST en FastAPI y Flask: FastAPI + Flutter (integración Gemini, despliegue HTTPS seguro) y Flask + Streamlit (integración OpenAI, Dockerizado para reproducibilidad y estabilidad).',
                            'Reduje un 30% el tiempo de testing de modelos de IA mejorando el flujo de pruebas.',
                            'Evalué pipelines de OCR y LLMs locales (Hugging Face, Ollama) para extracción de documentos y pruebas de viabilidad.',
                            'Configuré entornos Docker y Ollama para experimentación y testing local con LLMs.',
                        ],
                    },
                    {
                        label: 'Automatización de Convenios Colectivos',
                        items: [
                            'Reduje el tiempo de procesamiento de ~2 horas a 10 minutos en más de 70 regiones automatizando la extracción de los convenios colectivos publicados en boletines oficiales.',
                            'Generé automáticamente resúmenes y tablas salariales estructuradas, sustituyendo una revisión manual documento a documento.',
                            'Construí pipelines de automatización en Python para el procesamiento masivo de boletines oficiales.',
                            'Integré APIs del BOE/BOA para la ingesta estructurada de datos.',
                            'Procesé y analicé datasets de PDFs a gran escala usando PyPDF2, pdfplumber y pandas.',
                            'Desarrollé sistemas de web scraping con Selenium y BeautifulSoup.',
                        ],
                    },
                    {
                        label: 'Automatización de Procesos',
                        items: [
                            'Diseñé automatizaciones de flujos de trabajo con n8n y APIs REST.',
                            'Reduje la carga operativa repetitiva mediante automatización de procesos de negocio.',
                        ],
                    },
                    {
                        label: 'Sistemas y Arquitectura',
                        items: [
                            'Analicé la arquitectura del portal de empleados legacy en PHP (CodeIgniter, MVC) y sus flujos de datos.',
                            'Documenté la estructura de la base de datos (MariaDB) usando HeidiSQL y Workbench.',
                            'Identifiqué oportunidades de mejora arquitectónica y de rendimiento en los sistemas existentes.',
                        ],
                    },
                    { label: 'Equipo', text: 'Colaboré en un equipo de 12 personas, trabajando junto a desarrolladores senior, mid-level y junior, así como con tech leads, utilizando metodologías Agile.' } ],
            },
        ],
    },

    projects: {
        eyebrow: 'Trabajo seleccionado',
        heading: 'Proyectos',
        lede: 'Una selección de sistemas backend, soluciones de IA y arquitecturas cloud que he diseñado y llevado a producción.',
        labels: { challenge: 'El reto', approach: 'El enfoque', architecture: 'Arquitectura', stack: 'Stack' },
        cta: { view: 'Ver proyecto', code: 'Ver código' },
        items: [

            {
                id: 'subtextai',
                layout: 'image-top',
                category: ['Backend', 'IA', 'En desarrollo'],
                title: 'SubtextAI',
                summary: 'Un motor de análisis de conversaciones que interpreta intención y subtexto, y que solo responde cuando encuentra evidencia documental que lo respalde.',
                problema: 'Un LLM al que le preguntas "qué quiso decir esta persona" responde siempre, con la misma seguridad, tenga base o no. En un dominio donde la respuesta influye en decisiones personales reales, esa confianza injustificada es el problema, no la falta de capacidad del modelo.',
                solucion: 'Diseñé un pipeline de gobernanza en cascada que envuelve al modelo: valida políticas antes de invocarlo, exige evidencia recuperada para poder generar, y bloquea la respuesta si la evidencia no supera un umbral calibrado. Cada respuesta queda reconstruible por trace_id.',
                arquitectura: 'FastAPI orquesta con LangGraph: validación de políticas → clasificador de crisis en paralelo con búsqueda híbrida (pgvector HNSW + tsvector/GIN fusionados con RRF) → reranking cross-encoder que actúa como puerta de confianza → análisis → trazabilidad. Inferencia y embeddings vía OpenRouter (GPT-4.1 + text-embedding-3-large), desplegado en AWS (EC2 t3.micro · Docker Compose: FastAPI + PostgreSQL/pgvector + Redis + Nginx · Amplify Hosting · S3 · Secrets Manager · IAM instance profile · Cognito).',
                resultados: [
                    { value: '~1.6-2.3s', label: 'generación vía OpenRouter (GPT-4.1)' },
                    { value: '1', label: 'credencial externa — OpenRouter, en Secrets Manager; el resto vía IAM' },
                    { value: '3072', label: 'dimensiones de embedding (text-embedding-3-large)' },
                ],
                stack: ['Python', 'FastAPI', 'LangGraph', 'AWS', 'OpenRouter', 'PostgreSQL', 'pgvector', 'React 19', 'Docker'],
                imageCaption: 'Mockup de la vista de análisis — proyecto en desarrollo activo',
                links: { demo: '#', code: 'https://github.com/HeilyMadelay-hub/SubtextAI' },
            }

        ],
    },

    articles: {
        eyebrow: 'Escritura',
        heading: 'Artículos',
        intro: 'Comparto lo que aprendo construyendo software: arquitectura, cloud, integración de IA y decisiones técnicas del día a día.',
        readLink: 'Leer artículo',
        more: 'Ver más artículos →',
        imageCaption: 'Portada del artículo',
        items: [
            {
                id: 'madgpt-frontend',
                date: '16 jul 2026',
                title: 'Dentro de MadGPT: la arquitectura front-end de mi portafolio conversacional (React + Vite)',
                description: 'Cuando decidí crear mi portafolio, no quería otra página estática. Descubre cómo construí MadGPT: un asistente conversacional con React 18, Vite y la Context API.',
                tech: ['React', 'Vite', 'JavaScript'],
                link: 'https://medium.com/@madcodlife/los-secretos-de-la-arquitectura-front-end-y-la-experiencia-de-de-chat-con-ia-react-vite-8ad15e1ded89',
            },
            {
                id: 'tensorflowjs-react',
                date: '5 feb 2026',
                title: 'TensorFlow.js + React: From Zero to AI Web Apps in Your Browser (No Servers Needed)',
                description: 'Cómo ejecutar modelos de Machine Learning directamente en el navegador con TensorFlow.js y React — inferencia en tiempo real, privacidad y cero costes de servidor.',
                tech: ['React', 'TensorFlow.js', 'Machine Learning'],
                link: 'https://medium.com/@madcodlife/tensorflow-js-react-from-zero-to-ai-web-apps-in-your-browser-no-servers-needed-8166477fdbd9',
            },
            {
                id: 'cloud-evolution',
                date: '19 jul 2025',
                title: 'From the mainframes to AWS: How cloud computing evolved',
                description: 'Cómo ha evolucionado la arquitectura IT desde los mainframes hasta el cloud computing — explicado con analogías simples y ejemplos reales.',
                tech: ['AWS', 'Cloud', 'IaaS / PaaS / SaaS'],
                link: 'https://medium.com/@madcodlife/from-the-mainframes-to-aws-how-cloud-computing-evolved-03f02ec4aad9',
            },
        ],
    },

    contact: {
        eyebrow: 'Hablemos',
        heading: 'Contacto',
        lede: '¿Tienes un proyecto en mente o una posición abierta? Cuéntame de qué se trata y te respondo lo antes posible.',
        form: { name: 'Nombre', email: 'Email', message: 'Mensaje', submit: 'Enviar mensaje' },
        panel: {
            label: 'Contacto directo',
            location: 'Remoto · Híbrido · Presencial',
            availability: 'Disponible para nuevas oportunidades',
            relocation: 'Recolocación disponible',
        },
        mail: { subject: 'Contacto desde el portfolio', fallbackName: 'Nuevo mensaje' },
    },

    chat: {
        sidebar: {
            title: 'Recientes',
            hideMenu: 'Ocultar menú',
            openMenu: 'Abrir menú',
            newConversation: 'Nueva conversación',
            rename: 'Renombrar conversación',
            pin: 'Fijar conversación',
            unpin: 'Soltar conversación',
            pinnedGroup: 'Anclado',
            pinnedCollapse: 'Plegar ancladas',
            pinnedExpand: 'Desplegar ancladas',
            projectsGroup: 'Proyectos',
            projectsCollapse: 'Plegar proyectos',
            projectsExpand: 'Desplegar proyectos',
            delete: 'Eliminar conversación',
            emptyTitle: 'Aún no hay conversaciones',
            emptyHint: 'Escribe algo abajo para empezar una.',
        },
        projects: {
            back: 'Volver al chat',
            comingSoon: 'La documentación de este proyecto llegará pronto.',
            inputPlaceholder: 'Pregúntame sobre este proyecto…',
            suggestions: {
                subtextai: [
                    '¿Por qué RAG?',
                    '¿Cómo funciona la puerta de confianza?',
                    '¿Qué hace interesante la arquitectura?',
                    '¿Cuál es el estado actual?',
                ],
                narek: [],
            },
        },
        modals: {
            renameTitle: 'Renombrar conversación',
            renameConfirm: 'Renombrar',
            renamePlaceholder: 'Escribe el nuevo nombre...',
            deleteTitle: 'Eliminar conversación',
            deleteConfirm: 'Eliminar',
            cancel: 'Cancelar',
            deleteQuestion: '¿Seguro que quieres eliminar',
            deleteWarning: 'Esta acción no se puede deshacer.',
        },
        welcome: [
            'Hola, soy Heily.',
            'Pregúntame sobre mis proyectos, experiencia o stack técnico.',
        ],
        welcomeLangs: 'Español · English · Français',
        dateToday: 'Hoy',
        dateYesterday: 'Ayer',
        // Modo demo, no avería: el backend duerme para no gastar cloud a lo tonto.
        // Se explica el porqué para que se lea como una decisión, no como un fallo.
        offlineNotice: 'Modo demo — el backend de IA está en reposo para reducir costes cloud. Puedes seguir explorando conversaciones basadas en mi portfolio real.',
        readAloud: 'Leer en voz alta',
        stopReading: 'Detener lectura',
        input: {
            placeholder: 'Pregúntame sobre Java, Angular, Cloud o IA…',
            send: 'Enviar mensaje',
            voiceStart: 'Entrada de voz',
            voiceStop: 'Detener grabación',
            voiceDenied: 'No puedo acceder al micrófono. Revisa los permisos del navegador.',
            thinking: 'Heily está pensando',
            listening: 'Escuchando',
            disclaimer: 'El CV tiene límite de caracteres. Aquí no tanto.',
            projectDisclaimer: 'Aquí puedes hacer las preguntas que no caben en un CV.',
            dismissError: 'Cerrar aviso',
            // Se indexan por el `code` que lanza chatServicio, no por el texto
            // del error: así el mensaje técnico nunca llega al visitante.
            errors: {
                invalid: 'No he entendido ese mensaje. Prueba a reformularlo.',
                rateLimit: 'Demasiadas preguntas seguidas. Espera unos segundos y vuelve a intentarlo.',
                server: 'Algo ha fallado en el servidor. Inténtalo de nuevo en un momento.',
                unavailable: 'El asistente no está disponible ahora mismo. Inténtalo más tarde.',
                unknown: 'No he podido enviar el mensaje. Inténtalo de nuevo.',
            },
            suggestions: [
                'Háblame de tu último proyecto',
                '¿Qué plataformas cloud usas?',
                'Describe tu stack técnico',
            ],
        },
        hero: {
            role: 'Desarrolladora Full Stack',
            available: 'Listo para chatear',
            offline: 'AI Demo',
            portfolioLink: 'Portfolio',
            languageLabel: 'Idioma',
        },
    },
};

export default es;
