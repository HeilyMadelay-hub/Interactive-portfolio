// Français — traduction naturelle, rédigée comme par un humain (B2).
const fr = {
    // Écran de secours quand une erreur de rendu fait tomber l'application. Il est
    // à la racine, pas dans `chat`, parce qu'il couvre les deux routes.
    errorBoundary: {
        title: "Quelque chose s'est cassé",
        message: "Une erreur inattendue s'est produite. Recharger la page suffit en général.",
        retry: 'Recharger la page',
    },
    // Écran pour toute URL qui n'existe pas (route non enregistrée dans App.jsx).
    notFound: {
        title: "Cette page n'existe pas",
        message: "L'URL sur laquelle vous êtes arrivé ne correspond à aucune section de ce site.",
        back: "Retour à l'accueil",
    },
    // Bouton de thème du header (chat et portfolio). Icône seule à l'écran :
    // ces libellés servent d'aria-label/title pour les lecteurs d'écran.
    themeToggle: {
        toDark: 'Activer le mode sombre',
        toLight: 'Activer le mode clair',
    },
    nav: {
        items: [
            { label: 'À propos', href: '#about' },
            { label: 'Projets', href: '#projects' },
            { label: 'Articles', href: '#articles' },
            { label: 'Contact', href: '#contact' },
        ],
        cv: 'Télécharger le CV',
    },

    hero: {
        roleLine1: 'Full Stack Developer | Cloud & AI',
        roleLine2: '',
        lede: "Je développe des applications web modernes en combinant logiciel, données et intelligence artificielle.",
        ledeSub: [
            "Je construis des solutions numériques complètes en intégrant le développement Full Stack, le cloud et l'IA pour créer des outils fonctionnels orientés vers la résolution de problèmes réels.",
        ],
        cta: 'Voir les projets',
        consoleTitle: 'Focus actuel',
        stack: [
            { path: 'full-stack/', desc: '.NET · Angular · React' },
            { path: 'backend/', desc: 'REST APIs · Clean Architecture' },
            { path: 'cloud/', desc: 'AWS · Docker · CI/CD' },
            { path: 'ai/', desc: 'OpenAI · ChromaDB · Automation' },
        ],
        metrics: [
            { value: '-30%', label: "temps de test des modèles d'IA" },
            { value: '100%', label: 'intégrité des données lors de la migration SQLite → PostgreSQL/MySQL' },
            { value: '70+', label: 'provinces avec analyse juridique automatisée' },
            { value: '-70%', label: "temps de configuration de l'environnement sur 3 dépôts" },
        ],
    },

    about: {
        eyebrow: 'À propos',
        heading: 'Bonjour, je suis Heily',
        subtitle: [
            'Je suis ',
            { b: 'développeuse Backend et Full Stack' },
            " avec de l'expérience dans le développement d'",
            { b: "applications d'entreprise, d'API et de solutions cloud" },
            '.',
        ],
        paragraphs: [
            [
                "J'ai travaillé comme ",
                { b: 'développeuse freelance' },
                ' en créant des ',
                { b: 'MVP et des démonstrateurs technologiques' },
                ", en participant à l'analyse des besoins, à la conception, à l'implémentation et à l'intégration de solutions adaptées aux besoins de chaque projet.",
            ],
            [
                'Mon stack principal comprend ',
                { b: 'Java (Spring Boot), C#/.NET et Python pour le backend' },
                ', ',
                { b: 'Angular pour le frontend' },
                ' et les services cloud sur ',
                { b: 'AWS et Azure' },
                ". J'ai également développé des solutions avec de l'",
                { b: 'intelligence artificielle générative' },
                " orientées vers l'",
                { b: 'automatisation des processus' },
                " et l'optimisation des flux de travail.",
            ],
            [
                "Je suis titulaire d'une formation en ",
                { b: "Développement d'Applications Multiplateformes (FP)" },
                ", d'un ",
                { b: 'Master en Full Stack & Cloud' },
                ' et de ',
                { b: 'certifications officielles AWS et Microsoft' },
                '. Je recherche actuellement des opportunités en tant que ',
                { b: 'Backend Developer, Full Stack Developer ou AI Integration Developer' },
                ' pour participer au développement de produits technologiques et contribuer à des ',
                { b: "applications, des API et des solutions basées sur le cloud et l'intelligence artificielle" },
                '.',
            ],
        ],
        imageAlt: 'Heily — Full Stack Developer',
    },

    whatDoIdo: {
        eyebrow: 'Ma façon de travailler',
        heading: 'Ce que je fais',
        capabilities: [
            {
                title: 'Architecture backend',
                description: "Je conçois des systèmes backend évolutifs qui gèrent des connexions simultanées avec des temps de réponse optimaux. FastAPI, ASP.NET Core et Node.js, avec gestion des transactions, prévention des race conditions et WebSockets en temps réel.",
            },
            {
                title: "Intégration de l'IA",
                description: "J'intègre l'IA conversationnelle dans des flux réels grâce au RAG, au streaming et à la vision par ordinateur. De l'analyse juridique à la traduction de la langue des signes, je transforme des modèles complexes en solutions concrètes.",
            },
            {
                title: 'Systèmes en temps réel',
                description: "Je développe des architectures performantes avec WebSockets, SignalR et une logique événementielle. Chat en streaming, réservations avec verrouillage optimiste et tâches en arrière-plan pour des expériences fluides et cohérentes.",
            },
            {
                title: 'Automatisation legal-tech',
                description: "J'automatise les processus juridiques en supprimant les tâches répétitives. Scraping du BOE/BOA, traitement massif de PDF et chatbots RAG qui transforment les documents en informations exploitables.",
            },
        ],
    },

    skills: {
        eyebrow: 'Outils',
        heading: 'Stack technique',
        categories: [
            { category: 'Backend', skills: ['C#', 'ASP.NET Core', 'Python', 'FastAPI', 'Java', 'Spring Boot', 'Node.js', 'API REST'] },
            { category: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'HTML/CSS', 'JavaScript'] },
            { category: 'IA et Automatisation', skills: ['RAG Pipelines', 'LangGraph', 'LangChain', 'OpenAI API', 'Gemini API', 'Hugging Face', 'ChromaDB', 'pgvector', 'Ollama', 'OCR', 'MediaPipe', 'TensorFlow.js', 'Streamlit', 'Selenium', 'BeautifulSoup', 'pandas', 'PyPDF2', 'pdfplumber', 'n8n'] },
            { category: 'Temps Réel', skills: ['WebSockets', 'SignalR', 'Socket.io'] },
            { category: 'Cloud et DevOps', skills: ['Azure', 'AWS', 'Docker', 'Git/GitHub'] },
            { category: 'Bases de Données', skills: ['PostgreSQL', 'pgvector', 'MySQL', 'MariaDB', 'SQL Server', 'MongoDB', 'Supabase'] },
        ],
    },

    experience: {
        eyebrow: 'Parcours',
        heading: 'Expérience',
        intro: "D'un stage en entreprise à des projets freelance en production, toujours avec un focus sur le backend, l'IA et l'architecture.",
        meta: { dates: 'Dates', location: 'Lieu', team: 'Équipe', methodology: 'Méthodologie' },
        toggle: { show: 'Voir les détails', hide: 'Masquer les détails' },
        items: [
            {
                id: 'netcheck',
                role: 'Développeuse Full Stack',
                roleDetail: 'Angular & Java',
                company: 'NetCheck',
                type: '',
                dates: 'juin 2026 – juil. 2026',
                location: 'Madrid, Espagne',
                environment: 'Télétravail',
                team: '20 personnes au total',
                methodology: 'Agile',
                summary: "J'ai développé et maintenu des fonctionnalités full-stack au sein d'une application monolithique d'entreprise en utilisant Angular, TypeScript, Java, Spring Boot, JPA/Hibernate et SQL, en intégrant des composants frontend avec des API REST Spring Boot.",
                highlights: [
                    "Diagnostiqué et résolu des incidents full-stack en traçant les requêtes à travers Angular, Spring Boot, les API REST et les bases de données SQL.",
                    "Enquêté et résolu des incidents backend liés aux mappings JPA/Hibernate, aux requêtes SQL et aux bases de données PostgreSQL, en restaurant le bon fonctionnement de l'application.",
                    "Résolu des échecs de démarrage dans des applications Spring Boot multi-modules en analysant les logs d'Hibernate, de HikariCP et de l'application.",
                    "Validé et résolu des flux d'authentification entre Angular et des API REST sécurisées par Spring Security via JWT, et investigué des flux d'authentification SAML.",
                    "Amélioré l'onboarding des développeurs en standardisant la documentation technique et en accompagnant un nouveau stagiaire dans la configuration de l'environnement Angular et Spring Boot, réduisant le temps de configuration de plus de 70 % pour les nouveaux membres de l'équipe.",
                ],
                tech: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Docker Compose', 'WSL2', 'Hibernate', 'JPA', 'JWT', 'SAML', 'Maven', 'Apache Tomcat', 'Git', 'Azure DevOps'],
                details: [
                    { label: "Vue d'ensemble", text: "J'ai développé et maintenu des fonctionnalités full-stack au sein d'une application monolithique d'entreprise en utilisant Angular, TypeScript, Java, Spring Boot, JPA/Hibernate et SQL, en intégrant des composants frontend avec des API REST Spring Boot." },
                    {
                        label: "Backend et résolution d'incidents",
                        items: [
                            "Diagnostiqué et résolu des incidents full-stack en traçant les requêtes à travers Angular, Spring Boot, les API REST et les bases de données SQL.",
                            "Analysé les logs d'Hibernate, de HikariCP et de l'application pour enquêter sur des problèmes de démarrage, de configuration et d'exécution dans des applications Spring Boot multi-modules.",
                            "Enquêté et résolu des incidents backend liés aux mappings JPA/Hibernate, aux requêtes SQL et aux bases de données PostgreSQL, en analysant le comportement de l'application et en restaurant son bon fonctionnement.",
                        ],
                    },
                    {
                        label: 'Sécurité et authentification',
                        items: [
                            "Validé et résolu des flux d'authentification entre des applications Angular et des API REST sécurisées par Spring Security via l'authentification JWT, et investigué des flux d'authentification SAML.",
                            "Enquêté sur des incidents de sécurité et d'authentification liés à la validation des tokens JWT, au chiffrement des identifiants et à la communication frontend-backend.",
                        ],
                    },
                    {
                        label: 'API et tests',
                        items: [
                            "Validé des fonctionnalités terminées via des tests fonctionnels, end-to-end et d'API à l'aide de Swagger/OpenAPI et Postman, en reproduisant des défauts, en vérifiant les correctifs et en garantissant le bon comportement avant l'intégration et le déploiement.",
                        ],
                    },
                    {
                        label: 'Infrastructure et expérience développeur',
                        items: [
                            "Configuré des environnements de développement d'entreprise locaux avec Docker, Docker Compose, WSL2, Maven, PostgreSQL, Apache Tomcat et d'autres services applicatifs pour soutenir les flux de travail de développement.",
                            "Amélioré l'onboarding des développeurs en standardisant la documentation technique et en accompagnant un nouveau stagiaire en ingénierie logicielle dans la configuration de l'environnement Angular et Spring Boot, réduisant de plus de 70 % le temps de configuration pour les nouveaux membres de l'équipe.",
                        ],
                    },
                    {
                        label: 'Méthodologie et collaboration',
                        items: [
                            "Collaboré avec des développeurs senior au sein d'une équipe Agile Scrum, en participant au sprint planning, aux code reviews, à la correction de bugs et aux pull requests via Git et Azure DevOps.",
                        ],
                    },
                    {
                        label: 'Équipe', text: 'J’ai travaillé au sein d’une équipe Agile pluridisciplinaire avec des développeurs backend, frontend, des tech leads et des architectes cloud, en contribuant au développement de solutions technologiques.'
                    }]
                },
            {
                id: 'freelance',
                role: 'Développeuse Full Stack',
                roleDetail: '.NET, Python et Angular',
                company: 'Freelance',
                type: '',
                dates: 'juil. 2025 – juin 2026',
                location: 'Madrid, Espagne',
                environment: 'À distance',
                team: 'Travail indépendant avec des clients directs',
                methodology: 'Agile',
                summary: "J'ai conçu et livré des solutions logicielles sur mesure pour des petites entreprises et des professionnels, en pilotant les projets du recueil des besoins jusqu'à l'implémentation, au déploiement et à la livraison au client.",
                highlights: [
                    "Conçu et développé des API REST avec C#/.NET, FastAPI et Python pour des applications métier et des solutions basées sur l'IA.",
                    "Créé des prototypes d'applications d'IA pour l'analyse de documents juridiques, la classification et les modèles de langage.",
                    'Développé des applications Angular responsives connectées à mes propres API backend.',
                    "Migré des applications de SQLite local vers des bases de données cloud gérées, en validant l'intégrité des données.",
                    'Travaillé directement avec les clients en traduisant les besoins métier en solutions techniques, avec des livraisons de MVP itératives.',
                ],
                tech: ['C#', '.NET', 'Python', 'FastAPI', 'Angular', 'PostgreSQL', 'MySQL', 'SQLite', 'Git'],
                details: [
                    { label: "Vue d'ensemble", text: "J'ai conçu et livré des solutions logicielles sur mesure pour des petites entreprises et des professionnels, en pilotant les projets du recueil des besoins et de la conception technique jusqu'à l'implémentation, au déploiement et à la livraison au client." },
                    {
                        label: 'Développement backend',
                        items: [
                            "Conçu et développé des API REST avec C#/.NET, FastAPI et Python pour des applications métier et des solutions basées sur l'IA.",
                            "Conçu des architectures backend modulaires axées sur la maintenabilité, l'évolutivité et les bonnes pratiques de code propre.",
                            "Implémenté la logique métier, les mécanismes d'authentification et les couches de persistance des données pour des applications en production.",
                        ],
                    },
                    {
                        label: "Applications d'IA",
                        items: [
                            "Développé des applications d'IA en preuve de concept pour l'analyse de documents juridiques, la classification de documents et les grands modèles de langage.",
                            "Créé des prototypes RAG (Retrieval-Augmented Generation) pour la recherche de documents et l'extraction d'informations.",
                            "Intégré des services d'IA dans des architectures backend en suivant les principes de conception RESTful.",
                        ],
                    },
                    {
                        label: 'Développement full stack',
                        items: [
                            'Développé des applications Angular responsives connectées à des API backend.',
                            "Conçu des flux applicatifs complets, des interfaces frontend aux services backend et à l'intégration avec les bases de données.",
                            "Implémenté l'authentification, la validation des formulaires et la communication API entre le frontend et le backend.",
                        ],
                    },
                    {
                        label: 'Cloud et données',
                        items: [
                            "Migré des applications de bases de données SQLite locales vers des bases de données cloud gérées, en adaptant les schémas et en validant l'intégrité des données migrées.",
                            'Refactorisé des services backend pour prendre en charge la persistance dans le cloud avec PostgreSQL et MySQL.',
                            "Amélioré la fiabilité des applications en supprimant les dépendances à l'infrastructure locale.",
                        ],
                    },
                    {
                        label: 'Collaboration client',
                        items: [
                            'Travaillé directement avec les clients pour comprendre les besoins métier, définir le périmètre des projets et traduire les besoins fonctionnels en solutions techniques.',
                            'Livré des MVP, des prototypes et des solutions prêtes pour la production grâce à des retours itératifs et aux pratiques Agile.',
                            "Proposé des solutions numériques qui ont optimisé les processus métier et amélioré l'expérience client.",
                        ],
                    },
                ],
            },
            {
                id: 'atisa',
                role: 'Développeuse Backend',
                roleDetail: 'IA et Automatisation',
                company: 'Atisa',
                type: '',
                dates: 'mars 2025 – juin 2025',
                location: 'Madrid, Espagne',
                environment: 'Sur site',
                team: '12 personnes au total',
                methodology: 'Agile',
                summary: "J'ai travaillé à développer des applications d'IA, des services backend et des solutions d'automatisation pour le traitement des conventions collectives officielles et l'optimisation des flux internes.",
                highlights: [
                    "Réduit le temps de traitement des conventions collectives d'environ 2 heures à 10 minutes dans plus de 70 régions, en générant automatiquement des résumés et des tables salariales structurés.",
                    "Développé des chatbots d'IA avec FastAPI + Flutter (Gemini) et Flask + Streamlit (OpenAI), les deux Dockerisés.",
                    "Réduit de 30% le temps de test des modèles d'IA en améliorant le flux de tests.",
                    "Conçu des architectures RAG avec l'API OpenAI et ChromaDB pour le traitement documentaire.",
                    'Développé des pipelines de scraping avec Selenium et BeautifulSoup ; ingestion des données BOE/BOA avec PyPDF2, pdfplumber et pandas.',
                    "Analysé le portail legacy PHP (CodeIgniter, MVC) et documenté la structure de la base de données avec HeidiSQL et Workbench.",
                ],
                tech: ['Python', 'FastAPI', 'Flask', 'Streamlit', 'Docker', 'OpenAI API', 'Gemini API', 'Ollama', 'Hugging Face', 'ChromaDB', 'Selenium', 'BeautifulSoup', 'pandas', 'PyPDF2', 'pdfplumber', 'MariaDB', 'PHP (CodeIgniter)', 'n8n', 'Flutter', 'Git/GitHub'],
                details: [
                    { label: "Vue d'ensemble", text: "J'ai développé des systèmes backend, des applications d'IA et des pipelines d'automatisation pour le traitement des conventions collectives officielles, l'extraction de données structurées et l'optimisation des flux de travail internes." },
                    {
                        label: "Systèmes d'IA (RAG et Chatbots)",
                        items: [
                            "Conçu des architectures backend et des modèles de données pour des systèmes d'IA basés sur RAG avec les API OpenAI et ChromaDB.",
                            "Développé des chatbots d'IA avec des API REST FastAPI et Flask : FastAPI + Flutter (intégration Gemini, déploiement HTTPS sécurisé) et Flask + Streamlit (intégration OpenAI, Dockerisé pour la reproductibilité et la stabilité).",
                            "Réduit de 30% le temps de test des modèles d'IA en améliorant le flux de tests.",
                            "Évalué des pipelines d'OCR et des LLM locaux (Hugging Face, Ollama) pour l'extraction de documents et les tests de faisabilité.",
                            "Configuré des environnements Docker et Ollama pour l'expérimentation et les tests locaux avec des LLM.",
                        ],
                    },
                    {
                        label: 'Automatisation des conventions collectives',
                        items: [
                            "Réduit le temps de traitement d'environ 2 heures à 10 minutes dans plus de 70 régions en automatisant l'extraction des conventions collectives publiées dans les bulletins officiels.",
                            "Généré automatiquement des résumés et des tables salariales structurés, remplaçant une relecture manuelle document par document.",
                            "Développé des pipelines d'automatisation en Python pour le traitement massif de bulletins officiels.",
                            "Intégré les API BOE/BOA pour l'ingestion structurée des données.",
                            'Traité et analysé de grands jeux de données PDF avec PyPDF2, pdfplumber et pandas.',
                            'Développé des systèmes de web scraping avec Selenium et BeautifulSoup.',
                        ],
                    },
                    {
                        label: 'Automatisation des processus',
                        items: [
                            'Conçu des automatisations de flux de travail avec n8n et des API REST.',
                            "Réduit la charge de travail opérationnelle répétitive grâce à l'automatisation des processus métier.",
                        ],
                    },
                    {
                        label: 'Systèmes et architecture',
                        items: [
                            "Analysé l'architecture du portail employé legacy en PHP (CodeIgniter, MVC) et ses flux de données.",
                            'Documenté la structure de la base de données (MariaDB) avec HeidiSQL et Workbench.',
                            "Identifié des opportunités d'amélioration architecturale et de performance dans les systèmes existants.",
                        ],
                    },
                    { label: 'Équipe', text: 'J’ai collaboré au sein d’une équipe de 12 personnes, en travaillant avec des développeurs seniors et des tech leads métier selon les méthodologies Agile.' }
                ],
            },
        ],
    },

    projects: {
        eyebrow: 'Travaux sélectionnés',
        heading: 'Projets',
        lede: "Une sélection de systèmes backend, de solutions d'IA et d'architectures cloud que j'ai conçus et mis en production.",
        labels: { challenge: 'Le défi', approach: "L'approche", architecture: 'Architecture', stack: 'Stack' },
        cta: { view: 'Voir le projet', code: 'Voir le code' },
        items: [

            {
                id: 'subtextai',
                layout: 'image-right',
                category: ['Backend', 'IA', 'En développement'],
                title: 'SubtextAI',
                summary: "Un moteur d'analyse de conversations qui interprète l'intention et le sous-texte, et ne répond que lorsqu'il trouve des preuves documentaires pour étayer son interprétation.",
                problema: "Demandez à un LLM « qu'a vraiment voulu dire cette personne » et il répond toujours, avec la même assurance, qu'il ait des fondements ou non. Dans un domaine où la réponse influence de vraies décisions personnelles, cette confiance injustifiée est le problème — pas la capacité du modèle.",
                solucion: "J'ai conçu un pipeline de gouvernance en cascade qui encadre le modèle : il valide les politiques avant de l'invoquer, exige des preuves récupérées pour pouvoir générer, et bloque la réponse lorsque ces preuves n'atteignent pas un seuil calibré. Chaque réponse est reconstructible par trace_id.",
                arquitectura: "FastAPI orchestre avec LangGraph : validation des politiques → classificateur de crise en parallèle avec la recherche hybride (pgvector HNSW + tsvector/GIN fusionnés par RRF) → reranking cross-encoder servant de porte de confiance → analyse → traçabilité. Inférence et embeddings via OpenRouter (GPT-4.1 + text-embedding-3-large), déployé sur AWS (EC2 t3.micro · Docker Compose : FastAPI + PostgreSQL/pgvector + Redis + Nginx · Amplify Hosting · S3 · Secrets Manager · profil d'instance IAM · Cognito).",
                resultados: [
                    { value: '~1,6-2,3s', label: 'génération via OpenRouter (GPT-4.1)' },
                    { value: '1', label: "identifiant externe — OpenRouter, dans Secrets Manager ; le reste via IAM" },
                    { value: '3072', label: "dimensions d'embedding (text-embedding-3-large)" },
                ],
                stack: ['Python', 'FastAPI', 'LangGraph', 'AWS', 'OpenRouter', 'PostgreSQL', 'pgvector', 'React 19', 'Docker'],
                imageCaption: "Mockup de la vue d'analyse — projet en développement actif",
                links: { demo: '#', code: 'https://github.com/HeilyMadelay-hub/SubtextAI' },
            }

        ],
    },

    articles: {
        eyebrow: 'Écriture',
        heading: 'Articles',
        intro: "Je partage ce que j'apprends en construisant des logiciels : architecture, cloud, intégration de l'IA et décisions techniques du quotidien.",
        readLink: "Lire l'article",
        more: "Voir plus d'articles →",
        imageCaption: "Couverture de l'article",
        items: [
            {
                id: 'madgpt-frontend',
                date: '16 juil. 2026',
                title: "Dans les coulisses de MadGPT : l'architecture front-end de mon portfolio conversationnel (React + Vite)",
                description: "Quand j'ai décidé de créer mon portfolio, je ne voulais pas une page statique de plus. Découvrez comment j'ai construit MadGPT avec React 18, Vite et la Context API.",
                tech: ['React', 'Vite', 'JavaScript'],
                link: 'https://medium.com/@madcodlife/los-secretos-de-la-arquitectura-front-end-y-la-experiencia-de-de-chat-con-ia-react-vite-8ad15e1ded89',
            },
            {
                id: 'tensorflowjs-react',
                date: '5 févr. 2026',
                title: 'TensorFlow.js + React : de zéro aux applications IA dans le navigateur (sans serveur)',
                description: "Faire tourner des modèles de Machine Learning directement dans le navigateur avec TensorFlow.js et React — inférence en temps réel, confidentialité et coûts zéro.",
                tech: ['React', 'TensorFlow.js', 'Machine Learning'],
                link: 'https://medium.com/@madcodlife/tensorflow-js-react-from-zero-to-ai-web-apps-in-your-browser-no-servers-needed-8166477fdbd9',
            },
            {
                id: 'cloud-evolution',
                date: '19 juil. 2025',
                title: 'Des mainframes à AWS : comment le cloud computing a évolué',
                description: "Comment l'architecture IT a évolué des ordinateurs centraux au cloud — expliqué avec des analogies simples et des exemples concrets.",
                tech: ['AWS', 'Cloud', 'IaaS / PaaS / SaaS'],
                link: 'https://medium.com/@madcodlife/from-the-mainframes-to-aws-how-cloud-computing-evolved-03f02ec4aad9',
            },
        ],
    },

    contact: {
        eyebrow: 'Discutons',
        heading: 'Contact',
        lede: "Vous avez un projet en tête ou un poste à pourvoir ? Dites-moi de quoi il s'agit et je vous réponds au plus vite.",
        form: { name: 'Nom', email: 'E-mail', message: 'Message', submit: 'Envoyer le message' },
        panel: {
            label: 'Contact direct',
            location: 'Télétravail · Hybride · Présentiel',
            availability: 'Disponible pour de nouvelles opportunités',
            relocation: 'Disponible pour une relocalisation',
        },
        mail: { subject: 'Contact depuis le portfolio', fallbackName: 'Nouveau message' },
    },

    chat: {
        sidebar: {
            title: 'Récents',
            hideMenu: 'Masquer le menu',
            openMenu: 'Ouvrir le menu',
            newConversation: 'Nouvelle conversation',
            rename: 'Renommer la conversation',
            pin: 'Épingler la conversation',
            unpin: 'Désépingler la conversation',
            pinnedGroup: 'Épinglé',
            pinnedCollapse: 'Replier les épinglées',
            pinnedExpand: 'Déplier les épinglées',
            delete: 'Supprimer la conversation',
            emptyTitle: 'Pas encore de conversations',
            emptyHint: 'Écrivez un message ci-dessous pour en démarrer une.',
        },
        modals: {
            renameTitle: 'Renommer la conversation',
            renameConfirm: 'Renommer',
            renamePlaceholder: 'Saisissez le nouveau nom...',
            deleteTitle: 'Supprimer la conversation',
            deleteConfirm: 'Supprimer',
            cancel: 'Annuler',
            deleteQuestion: 'Voulez-vous vraiment supprimer',
            deleteWarning: 'Cette action est irréversible.',
        },
        welcome: [
            'Bonjour, je suis Heily.',
            'Posez-moi une question sur mes projets ou ma stack technique.',
        ],
        welcomeLangs: 'Español · English · Français',
        dateToday: "Aujourd'hui",
        dateYesterday: 'Hier',
        // Mode démo, pas une panne : le backend dort pour ne pas faire tourner la
        // facture cloud. Expliquer pourquoi, c'est le lire comme un choix.
        offlineNotice: "Mode démo — le backend IA est en veille pour réduire les coûts cloud. Vous pouvez explorer des conversations basées sur mon portfolio réel.",
        readAloud: 'Lire à voix haute',
        stopReading: 'Arrêter la lecture',
        input: {
            placeholder: "Posez-moi une question sur Java, Angular, Cloud ou l'IA…",
            send: 'Envoyer le message',
            voiceStart: 'Saisie vocale',
            voiceStop: "Arrêter l'enregistrement",
            voiceDenied: "Impossible d'accéder au microphone. Vérifiez les autorisations du navigateur.",
            thinking: 'Heily réfléchit',
            listening: 'Écoute en cours',
            disclaimer: 'Simulation avec des données réelles de mon portfolio',
            dismissError: "Fermer l'avis",
            // Indexé par le `code` levé par chatServicio, pas par le texte de
            // l'erreur : le message technique n'atteint jamais le visiteur.
            errors: {
                invalid: "Je n'ai pas compris ce message. Essayez de le reformuler.",
                rateLimit: 'Trop de questions à la fois. Attendez quelques secondes et réessayez.',
                server: 'Une erreur est survenue sur le serveur. Réessayez dans un instant.',
                unavailable: "L'assistant n'est pas disponible pour le moment. Réessayez plus tard.",
                unknown: "Je n'ai pas pu envoyer ce message. Veuillez réessayer.",
            },
            suggestions: [
                'Parle-moi de ton dernier projet',
                'Quelles plateformes cloud utilises-tu ?',
                'Décris ta stack technique',
            ],
        },
        hero: {
            role: 'Développeuse Full Stack',
            available: 'Prêt à discuter',
            offline: 'Démo IA',
            portfolioLink: 'Portfolio',
            languageLabel: 'Langue',
        },
    },
};

export default fr;
