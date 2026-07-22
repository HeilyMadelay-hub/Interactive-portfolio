// English — natural, human-sounding translation (B2).
const en = {
    // Rescue screen for when a render error takes the app down. It lives at the
    // root, not inside `chat`, because it covers both routes.
    errorBoundary: {
        title: 'Something broke here',
        message: 'An unexpected error occurred. Reloading the page usually fixes it.',
        retry: 'Reload the page',
    },
    // Header theme button (chat and portfolio). Icon-only on screen: these
    // strings are the aria-label/title for screen readers and the tooltip.
    themeToggle: {
        toDark: 'Switch to dark mode',
        toLight: 'Switch to light mode',
    },
    nav: {
        items: [
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Articles', href: '#articles' },
            { label: 'Contact', href: '#contact' },
        ],
        cv: 'Download CV',
    },

    hero: {
        roleLine1: 'Full Stack Developer | Cloud & AI',
        roleLine2: '',
        lede: 'I build modern web applications that combine software, data and artificial intelligence.',
        ledeSub: [
            'I build complete digital solutions by integrating Full Stack development, cloud and AI to create functional tools focused on solving real problems.',
        ],
        cta: 'View projects',
        consoleTitle: 'Current focus',
        stack: [
            { path: 'full-stack/', desc: '.NET · Angular · React' },
            { path: 'backend/', desc: 'REST APIs · Clean Architecture' },
            { path: 'cloud/', desc: 'AWS · Docker · CI/CD' },
            { path: 'ai/', desc: 'OpenAI · ChromaDB · Automation' },
        ],
        metrics: [
            { value: '-30%', label: 'testing time for AI models' },
            { value: '100%', label: 'data integrity in SQLite → PostgreSQL/MySQL migration' },
            { value: '70+', label: 'provinces with automated legal analysis' },
            { value: '-70%', label: 'environment setup time across 3 documented repos' },
        ],
    },

    about: {
        eyebrow: 'About me',
        heading: "Hi, I'm Heily",
        subtitle: [
            "I'm a ",
            { b: 'Backend and Full Stack developer' },
            ' with experience building ',
            { b: 'enterprise applications, APIs and cloud solutions' },
            '.',
        ],
        paragraphs: [
            [
                "I've worked as a ",
                { b: 'freelance developer' },
                ' building ',
                { b: 'MVPs and technology demos' },
                ", taking part in requirements analysis, design, implementation and integration of solutions tailored to each project's needs.",
            ],
            [
                'My core stack includes ',
                { b: 'Java (Spring Boot), C#/.NET and Python for the backend' },
                ', ',
                { b: 'Angular on the frontend' },
                ' and cloud services on ',
                { b: 'AWS and Azure' },
                ". I've also built solutions with ",
                { b: 'generative AI' },
                ' aimed at ',
                { b: 'automating processes' },
                ' and optimising workflows.',
            ],
            [
                'I hold training in ',
                { b: 'Cross-Platform Application Development (FP)' },
                ', a ',
                { b: "Master's in Full Stack & Cloud" },
                ' and ',
                { b: 'official AWS and Microsoft certifications' },
                ". I'm currently looking for opportunities as a ",
                { b: 'Backend Developer, Full Stack Developer or AI Integration Developer' },
                ' to help build technology products and contribute to ',
                { b: 'applications, APIs and solutions based on cloud and artificial intelligence' },
                '.',
            ],
        ],
        imageAlt: 'Heily — Full Stack Developer',
    },

    whatDoIdo: {
        eyebrow: 'How I work',
        heading: 'What I do',
        capabilities: [
            {
                title: 'Backend architecture',
                description: 'I design scalable backend systems that handle concurrent connections with optimal response times. FastAPI, ASP.NET Core and Node.js, with transaction management, race-condition prevention and real-time WebSockets.',
            },
            {
                title: 'AI integration',
                description: 'I bring conversational AI into real workflows using RAG, streaming and Computer Vision. From legal analysis to sign-language translation, I turn complex models into practical solutions.',
            },
            {
                title: 'Real-time systems',
                description: 'I build high-performance architectures with WebSockets, SignalR and event-driven logic. Streaming chat, bookings with optimistic locking and background jobs for smooth, consistent experiences.',
            },
            {
                title: 'Legal-tech automation',
                description: 'I automate legal workflows and remove repetitive tasks. BOE/BOA scraping, bulk PDF processing and RAG chatbots that turn documents into actionable intelligence.',
            },
        ],
    },

    skills: {
        eyebrow: 'Tools',
        heading: 'Tech stack',
        categories: [
            { category: 'Backend', skills: ['C#', 'ASP.NET Core', 'Python', 'FastAPI', 'Java', 'Spring Boot', 'Node.js', 'REST APIs'] },
            { category: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'HTML/CSS', 'JavaScript'] },
            { category: 'AI & Automation', skills: ['RAG Pipelines', 'LangChain', 'OpenAI API', 'Gemini API', 'ChromaDB', 'Ollama', 'OCR', 'MediaPipe', 'TensorFlow.js', 'Streamlit', 'Selenium', 'BeautifulSoup', 'pandas', 'PyPDF2', 'pdfplumber', 'n8n'] },
            { category: 'Real-Time', skills: ['WebSockets', 'SignalR', 'Socket.io'] },
            { category: 'Cloud & DevOps', skills: ['Azure', 'AWS', 'Docker'] },
            { category: 'Databases', skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Supabase'] },
        ],
    },

    experience: {
        eyebrow: 'Career',
        heading: 'Experience',
        intro: 'From an in-company internship to freelance projects in production, always focused on backend, AI and architecture.',
        meta: { dates: 'Dates', location: 'Location', team: 'Team', methodology: 'Methodology' },
        toggle: { show: 'View details', hide: 'Hide details' },
        items: [
            {
                id: 'netcheck',
                role: 'Full Stack Developer',
                roleDetail: 'Angular & Java',
                company: 'NetCheck',
                type: '',
                dates: 'Jun 2026 – Jul 2026',
                location: 'Madrid, Spain',
                environment: 'Remote',
                team: '20 people in total',
                methodology: 'Agile',
                summary: 'Developed and maintained full-stack features within a monolithic enterprise application using Angular, TypeScript, Java, Spring Boot, JPA/Hibernate, and SQL, integrating frontend components with Spring Boot REST APIs.',
                highlights: [
                    'Diagnosed and resolved full-stack issues by tracing requests across Angular, Spring Boot, REST APIs, and SQL databases.',
                    'Investigated and resolved backend issues involving JPA/Hibernate mappings, SQL queries, and PostgreSQL databases, restoring application functionality.',
                    'Resolved startup failures in multi-module Spring Boot applications by analysing Hibernate, HikariCP, and application logs.',
                    'Validated and troubleshot authentication flows between Angular and Spring Security-secured REST APIs using JWT, and investigated SAML authentication flows.',
                    'Improved developer onboarding by standardising technical documentation and supporting a new intern with Angular and Spring Boot environment setup, cutting setup time for new team members by over 70%.',
                ],
                tech: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Docker Compose', 'WSL2', 'Hibernate', 'JPA', 'JWT', 'SAML', 'Maven', 'Apache Tomcat', 'Git', 'Azure DevOps'],
                details: [
                    { label: 'Overview', text: 'Developed and maintained full-stack features within a monolithic enterprise application using Angular, TypeScript, Java, Spring Boot, JPA/Hibernate, and SQL, integrating frontend components with Spring Boot REST APIs.' },
                    {
                        label: 'Backend & Troubleshooting',
                        items: [
                            'Diagnosed and resolved full-stack issues by tracing requests across Angular, Spring Boot, REST APIs, and SQL databases.',
                            'Analysed Hibernate, HikariCP, and application logs to investigate startup, configuration, and runtime issues in multi-module Spring Boot applications.',
                            'Investigated and resolved backend issues involving JPA/Hibernate mappings, SQL queries, and PostgreSQL databases by analysing application behaviour and restoring application functionality.',
                        ],
                    },
                    {
                        label: 'Security & Authentication',
                        items: [
                            'Validated and troubleshot authentication flows between Angular applications and Spring Security-secured REST APIs using JWT authentication, and investigated SAML authentication flows.',
                            'Investigated security and authentication issues involving JWT token validation, credential encryption, and frontend-backend communication.',
                        ],
                    },
                    {
                        label: 'APIs & Testing',
                        items: [
                            'Validated completed features through functional, end-to-end, and API testing using Swagger/OpenAPI and Postman, reproducing defects, verifying fixes, and ensuring correct behaviour before integration and deployment.',
                        ],
                    },
                    {
                        label: 'Infrastructure & Developer Experience',
                        items: [
                            'Configured local enterprise development environments using Docker, Docker Compose, WSL2, Maven, PostgreSQL, Apache Tomcat, and other application services to support development workflows.',
                            'Improved developer onboarding by standardising technical documentation and supporting a new software engineering intern with Angular and Spring Boot environment setup, reducing setup time for new team members by over 70%.',
                        ],
                    },
                    {
                        label: 'Methodology & Collaboration',
                        items: [
                            'Collaborated with senior developers in an Agile Scrum team, contributing to sprint planning, code reviews, bug fixing, and pull requests using Git and Azure DevOps.',
                        ],
                    },
                    { label: 'Team', text: 'Worked in a multidisciplinary Agile team alongside backend developers, frontend developers, tech leads, and cloud architects, collaborating on the development of technological solutions.' }
                ],
            },
            {
                id: 'freelance',
                role: 'Full Stack Developer',
                roleDetail: '.NET, Python & Angular',
                company: 'Freelance',
                type: '',
                dates: 'Jul 2025 – Jun 2026',
                location: 'Madrid, Spain',
                environment: 'Remote',
                team: 'Independent work with direct clients',
                methodology: 'Agile',
                summary: 'I designed and delivered custom software solutions for small businesses and professionals, leading projects from requirements gathering through implementation, deployment and client handover.',
                highlights: [
                    'Designed and built REST APIs with C#/.NET, FastAPI and Python for business applications and AI-powered solutions.',
                    'Built prototype AI applications for legal-document analysis, classification and language models.',
                    'Developed responsive Angular applications connected to my own backend APIs.',
                    'Migrated applications from local SQLite to managed cloud databases, validating data integrity.',
                    'Worked directly with clients, translating business needs into technical solutions and delivering MVPs iteratively.',
                ],
                tech: ['C#', '.NET', 'Python', 'FastAPI', 'Angular', 'PostgreSQL', 'MySQL', 'SQLite', 'Git'],
                details: [
                    { label: 'Overview', text: 'I designed and delivered custom software solutions for small businesses and professionals, leading projects from requirements gathering and technical design through implementation, deployment and client handover.' },
                    {
                        label: 'Backend Development',
                        items: [
                            'Designed and built REST APIs using C#/.NET, FastAPI and Python for business applications and AI-powered solutions.',
                            'Designed modular backend architectures focused on maintainability, scalability and clean-code best practices.',
                            'Implemented business logic, authentication mechanisms and data-persistence layers for production applications.',
                        ],
                    },
                    {
                        label: 'AI Applications',
                        items: [
                            'Built proof-of-concept AI applications for legal-document analysis, document classification and large language models.',
                            'Developed RAG (Retrieval-Augmented Generation) prototypes for document search and information extraction.',
                            'Integrated AI services into backend architectures following RESTful design principles.',
                        ],
                    },
                    {
                        label: 'Full Stack Development',
                        items: [
                            'Developed responsive Angular applications connected to backend APIs.',
                            'Designed complete application flows, from frontend interfaces to backend services and database integration.',
                            'Implemented authentication, form validation and API communication between frontend and backend.',
                        ],
                    },
                    {
                        label: 'Cloud & Data',
                        items: [
                            'Migrated applications from local SQLite databases to managed cloud databases, adapting schemas and validating the integrity of the migrated data.',
                            'Refactored backend services to support cloud persistence using PostgreSQL and MySQL.',
                            'Improved application reliability by removing local infrastructure dependencies.',
                        ],
                    },
                    {
                        label: 'Client Collaboration',
                        items: [
                            'Worked directly with clients to understand business requirements, define project scope and translate functional needs into technical solutions.',
                            'Delivered MVPs, prototypes and production-ready solutions through iterative feedback and Agile practices.',
                            'Proposed digital solutions that streamlined business processes and improved the customer experience.',
                        ],
                    },
                ],
            },
            {
                id: 'atisa',
                role: 'Backend Developer',
                roleDetail: 'AI & Automation',
                company: 'Atisa',
                type: '',
                dates: 'Mar 2025 – Jun 2025',
                location: 'Madrid, Spain',
                environment: 'On-site',
                team: '12 members',
                methodology: 'Agile',
                summary: 'I worked in a team of three interns building AI applications, backend services and automation solutions for legal-document processing and internal workflow optimisation.',
                highlights: [
                    'Cut legal processing time from ~2 hours to 10 minutes across 70+ regions through automation at scale.',
                    'Built AI chatbots with FastAPI + Flutter (Gemini) and Flask + Streamlit (OpenAI), both Dockerised.',
                    'Designed RAG architectures with OpenAI API and ChromaDB for legal document processing.',
                    'Developed scraping pipelines with Selenium and BeautifulSoup; ingested BOE/BOA data using PyPDF2, pdfplumber and pandas.',
                    'Analysed the legacy PHP (CodeIgniter) portal and documented the architecture using MySQL tools (HeidiSQL, Workbench).',
                ],
                tech: ['Python', 'FastAPI', 'Flask', 'Streamlit', 'Docker', 'OpenAI API', 'Ollama', 'ChromaDB', 'Selenium', 'BeautifulSoup', 'pandas', 'PyPDF2', 'pdfplumber', 'MySQL', 'PHP (CodeIgniter)', 'n8n', 'Flutter'],
                details: [
                    { label: 'Overview', text: 'Developed backend systems, AI applications and automation pipelines for legal document processing, structured data extraction and internal workflow optimisation.' },
                    {
                        label: 'AI Systems (RAG & Chatbots)',
                        items: [
                            'Designed backend architecture and data models for RAG-based AI systems using OpenAI APIs and ChromaDB.',
                            'Built AI chatbot systems with FastAPI and Flask REST APIs: FastAPI + Flutter (Gemini integration, secure HTTPS deployment, improved model testing workflows) and Flask + Streamlit (OpenAI integration, Dockerised for reproducibility and stability).',
                            'Evaluated OCR pipelines and local LLMs (Hugging Face, Ollama) for document extraction and feasibility testing.',
                            'Configured Docker and Ollama environments for local LLM experimentation and testing.',
                        ],
                    },
                    {
                        label: 'Legal Data Automation',
                        items: [
                            'Reduced legal processing time from ~2 hours to 10 minutes across 70+ regions through large-scale automation.',
                            'Built Python automation pipelines for large-scale legal bulletin processing.',
                            'Integrated BOE/BOA APIs for structured legal data ingestion.',
                            'Processed and analysed large-scale PDF datasets using PyPDF2, pdfplumber and pandas.',
                            'Developed web scraping systems using Selenium and BeautifulSoup.',
                        ],
                    },
                    {
                        label: 'Process Automation',
                        items: [
                            'Designed automation workflows using n8n and REST APIs.',
                            'Reduced repetitive operational workload through business-process automation.',
                        ],
                    },
                    {
                        label: 'Systems & Architecture',
                        items: [
                            'Analysed legacy PHP (CodeIgniter) employee portal architecture and data flows.',
                            'Documented system structure using MySQL tools (HeidiSQL, Workbench).',
                            'Identified architectural and performance improvement opportunities in existing systems.',
                        ],
                    },
                    { label: 'Team', text: 'I collaborated as part of a 12-person team, working alongside senior, mid-level, and junior developers using Agile methodologies.' }],
            },
        ],
    },

    projects: {
        eyebrow: 'Selected work',
        heading: 'Projects',
        lede: "A selection of backend systems, AI solutions and cloud architectures I've designed and taken to production.",
        labels: { challenge: 'The challenge', approach: 'The approach', architecture: 'Architecture', stack: 'Stack' },
        cta: { view: 'View project', code: 'View code →' },
        items: [

            {
                id: 'rag-legal',
                layout: 'image-right',
                category: ['Backend', 'AI', 'Cloud'],
                title: 'RAG legal assistant',
                summary: 'A chatbot that reads thousands of pages of case law and answers by citing the exact clause, not a guess.',
                problema: 'Legal teams spent hours locating specific clauses within lengthy contracts, with a real risk of missing critical information during manual review.',
                solucion: 'I designed a retrieval-augmented generation (RAG) pipeline that indexes documents clause by clause, answers in streaming and cites the exact page for every statement, removing repetitive review.',
                arquitectura: 'FastAPI exposes the pipeline over a ChromaDB vector store. LangChain orchestrates retrieval and the model generates the answer with verifiable citations back to the original document.',
                resultados: [
                    { value: '-30%', label: 'document review time' },
                    { value: '70+', label: 'provinces with indexed case law' },
                    { value: '<2s', label: 'average response latency' },
                ],
                stack: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'ChromaDB', 'Docker'],
                imageCaption: 'A recording of a real-time query to the assistant will go here',
                links: { demo: '#', code: '#' },
            }
           
        ],
    },

    articles: {
        eyebrow: 'Writing',
        heading: 'Articles',
        intro: 'I share what I learn building software: architecture, cloud, AI integration and the everyday technical decisions.',
        readLink: 'Read article',
        more: 'See more articles →',
        imageCaption: 'Article cover',
        items: [
            {
                id: 'madgpt-frontend',
                date: '16 Jul 2026',
                title: 'Inside MadGPT: the front-end architecture of my conversational portfolio (React + Vite)',
                description: "When I decided to build my portfolio, I didn't want another static page. Here's how I built MadGPT: a conversational assistant with React 18, Vite and the Context API.",
                tech: ['React', 'Vite', 'JavaScript'],
                link: 'https://medium.com/@madcodlife/los-secretos-de-la-arquitectura-front-end-y-la-experiencia-de-de-chat-con-ia-react-vite-8ad15e1ded89',
            },
            {
                id: 'tensorflowjs-react',
                date: '5 Feb 2026',
                title: 'TensorFlow.js + React: From Zero to AI Web Apps in Your Browser (No Servers Needed)',
                description: 'Running Machine Learning models directly in the browser with TensorFlow.js and React — real-time inference, privacy by design and zero server costs.',
                tech: ['React', 'TensorFlow.js', 'Machine Learning'],
                link: 'https://medium.com/@madcodlife/tensorflow-js-react-from-zero-to-ai-web-apps-in-your-browser-no-servers-needed-8166477fdbd9',
            },
            {
                id: 'cloud-evolution',
                date: '19 Jul 2025',
                title: 'From the mainframes to AWS: How cloud computing evolved',
                description: 'How IT architecture evolved from mainframe computers to cloud computing — explained with simple analogies and real-world examples.',
                tech: ['AWS', 'Cloud', 'IaaS / PaaS / SaaS'],
                link: 'https://medium.com/@madcodlife/from-the-mainframes-to-aws-how-cloud-computing-evolved-03f02ec4aad9',
            },
        ],
    },

    contact: {
        eyebrow: "Let's talk",
        heading: 'Contact',
        lede: "Have a project in mind or an open position? Tell me what it's about and I'll get back to you as soon as possible.",
        form: { name: 'Name', email: 'Email', message: 'Message', submit: 'Send message' },
        panel: {
            label: 'Direct contact',
            location: 'Remote · Hybrid · On-site',
            availability: 'Available for new opportunities',
            relocation: 'Relocation available',
        },
        mail: { subject: 'Contact from the portfolio', fallbackName: 'New message' },
    },

    chat: {
        sidebar: {
            title: 'Recents',
            hideMenu: 'Hide menu',
            openMenu: 'Open menu',
            newConversation: 'New conversation',
            rename: 'Rename conversation',
            pin: 'Pin conversation',
            unpin: 'Unpin conversation',
            delete: 'Delete conversation',
            emptyTitle: 'No conversations yet',
            emptyHint: 'Ask something below to start one.',
        },
        modals: {
            renameTitle: 'Rename conversation',
            renameConfirm: 'Rename',
            renamePlaceholder: 'Enter new name...',
            deleteTitle: 'Delete conversation',
            deleteConfirm: 'Delete',
            cancel: 'Cancel',
            deleteQuestion: 'Are you sure you want to delete',
            deleteWarning: 'This action cannot be undone.',
        },
        welcome: [
            "Hi, I'm Heily.",
            'Ask me about my projects or my tech stack.',
        ],
        welcomeLangs: 'Español · English · Français',
        dateToday: 'Today',
        dateYesterday: 'Yesterday',
        // Demo mode, not a breakage: the backend sleeps so the cloud bill doesn't
        // run for nothing. Saying why makes it read as a decision, not a failure.
        offlineNotice: 'Demo mode — the AI backend is sleeping to reduce cloud costs. You can still explore conversations based on my real portfolio.',
        readAloud: 'Read aloud',
        stopReading: 'Stop reading',
        input: {
            placeholder: 'Ask me about Java, Angular, Cloud or AI…',
            send: 'Send message',
            voiceStart: 'Voice input',
            voiceStop: 'Stop recording',
            voiceDenied: "I can't reach the microphone. Check your browser permissions.",
            thinking: 'Heily is thinking',
            listening: 'Listening',
            disclaimer: 'Simulation with real data from my portfolio',
            dismissError: 'Dismiss',
            // Keyed by the `code` chatServicio throws, not by the error text, so
            // the technical message never reaches the visitor.
            errors: {
                invalid: "I didn't understand that message. Try rephrasing it.",
                rateLimit: 'Too many questions at once. Wait a few seconds and try again.',
                server: 'Something broke on the server. Try again in a moment.',
                unavailable: "The assistant isn't available right now. Please try later.",
                unknown: "I couldn't send that message. Please try again.",
            },
            suggestions: [
                'Tell me about your latest project',
                'Which cloud platforms do you use?',
                'Describe your tech stack',
            ],
        },
        hero: {
            role: 'Full Stack Developer',
            available: 'Ready to chat',
            offline: 'AI Demo',
            portfolioLink: 'Portfolio',
            languageLabel: 'Language',
        },
    },
};

export default en;
