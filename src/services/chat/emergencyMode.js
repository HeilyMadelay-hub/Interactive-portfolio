// 🌙 EmergencyMode.js - Respuestas locales cuando el backend de IA está dormido
// Permite que el chat siga funcionando en modo demo con respuestas predefinidas.
// El tono nunca debe sonar a avería: el backend duerme para no gastar cloud.

const DEV = import.meta.env.DEV;

class EmergencyMode {
    constructor() {
        this.isActive = false;
        this.activationReason = '';

        // 📚 Predefined responses by category
        this.responses = {
            // ⚠️ VOZ: primera persona, hablando COMO Heily.
            // La burbuja de bienvenida dice "Hi, I'm Heily", el placeholder dice
            // "Ask me about..." y el disclaimer "my portfolio". Estas respuestas
            // estaban en tercera persona ("Heily is a...", "I'm MadGPT, Heily's
            // assistant"), así que el asistente cambiaba de identidad a mitad de
            // conversación. Si algún día prefieres que hable como asistente en vez
            // de como tú, hay que cambiar TAMBIÉN la bienvenida y el disclaimer.

            // Greetings
            greeting: [
                "Hi! I'm running in **AI Demo Mode** right now, answering from my portfolio while the cloud backend is sleeping.",
                "Welcome! I'm in **AI Demo Mode** at the moment — ask me about my experience, projects, skills or technical stack.",
            ],

            // About
            about: [
                "I'm a **Full Stack Developer** working across Java, Angular, cloud and AI. I build complete digital solutions, from the interface down to the infrastructure.",
                "I specialise in enterprise web development, cloud architectures and AI integration — combining the three to build tools that solve real problems.",
            ],

            // Skills
            skills: [
                "**My main technologies:**\n\n• **Backend:** Java (Spring Boot), C#/.NET, Python\n• **Frontend:** Angular, React\n• **Cloud & DevOps:** AWS, Docker, CI/CD\n• **AI:** OpenAI, ChromaDB, automation\n• **Architecture:** REST APIs, Clean Architecture",
                "I work across the full stack: enterprise backends in Java and .NET, interfaces in Angular and React, plus cloud infrastructure and AI integration.",
            ],

            // Projects
            projects: [
                "**Featured projects:**\n\n**MadGPT** — the AI assistant you're talking to right now\n**Legal document automation** — automated analysis across 70+ provinces\n**Database migration** — SQLite to PostgreSQL/MySQL with full data integrity",
                "I've worked on AI assistants, legal document automation, database migrations and enterprise cloud architectures — mostly as MVPs and technology demonstrators.",
            ],

            // Contact
            contact: [
                "**How to reach me:**\n\nThe links at the top of this page take you to my email, LinkedIn and GitHub.\n\nFeel free to get in touch!",
                "You'll find my email, LinkedIn and GitHub in the links at the top of this page. I'm always open to new opportunities!",
            ],

            // Experience
            experience: [
                "I've worked as a freelance developer building MVPs and technology demonstrators, taking part in requirements analysis, design, implementation and integration.",
                "My experience spans enterprise applications, REST APIs and cloud solutions — from the Angular front end through to Java and .NET backends and their deployment.",
            ],

            // Education/Certifications
            education: [
                "I hold cloud computing certifications and I'm constantly picking up new technologies. There's more detail on my LinkedIn profile.",
            ],

            // Default response
            default: [
                "Thanks for your question!\n\nI'm currently running in **AI Demo Mode**, so advanced AI responses are temporarily unavailable while the cloud backend is sleeping.\n\nI can still answer questions about my experience, projects, skills and technical stack using information from my portfolio.",
                "Good question!\n\nI'm running in **AI Demo Mode** right now — the cloud backend is sleeping, so advanced AI responses are temporarily unavailable.\n\nI can still answer questions about my experience, projects, skills and technical stack using information from my portfolio.",
            ],

            // System error
            systemError: [
                "**AI Demo Mode**\n\nThe cloud backend is sleeping, so advanced AI responses are temporarily unavailable. I can still answer questions about my experience, projects, skills and technical stack using information from my portfolio.\n\nWhat would you like to know?",
            ],
        };

        // 🔍 Keywords to detect intent
        this.keywords = {
            greeting: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'what\'s up', 'howdy'],
            about: ['who is', 'about heily', 'about', 'tell me', 'introduction', 'description', 'who are you'],
            skills: ['skills', 'technologies', 'technology', 'know how', 'knowledge', 'languages', 'frameworks', 'tools', 'stack'],
            projects: ['projects', 'portfolio', 'work', 'created', 'developed', 'applications', 'built'],
            contact: ['contact', 'email', 'linkedin', 'github', 'social', 'reach', 'write', 'talk'],
            experience: ['experience', 'work', 'jobs', 'career', 'trajectory', 'background'],
            education: ['studies', 'education', 'certifications', 'courses', 'training', 'university', 'degree'],
        };
    }

    /**
     * 🌙 Activa el modo demo (el backend de IA no responde)
     */
    activate(reason = 'Backend not available') {
        this.isActive = true;
        this.activationReason = reason;
        // Solo en desarrollo: un recruiter que abra la consola no debe encontrarse
        // una alarma roja cuando lo que ve en pantalla dice "modo demo".
        if (DEV) console.warn('Demo mode ACTIVATED:', reason);
    }

    /**
     * ✅ Desactiva el modo demo (el backend ha vuelto)
     */
    deactivate() {
        this.isActive = false;
        this.activationReason = '';
        if (DEV) console.log('Demo mode DEACTIVATED');
    }

    /**
     * 🎯 Detect message intent
     */
    detectIntent(message) {
        const lowerMessage = message.toLowerCase().trim();

        for (const [intent, keywords] of Object.entries(this.keywords)) {
            for (const keyword of keywords) {
                if (lowerMessage.includes(keyword)) {
                    return intent;
                }
            }
        }

        return 'default';
    }

    /**
     * 🎲 Get random response from category
     */
    getRandomResponse(category) {
        const responses = this.responses[category] || this.responses.default;
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }

    /**
     * 📤 Generate emergency response
     */
    generateResponse(message) {
        const intent = this.detectIntent(message);
        const response = this.getRandomResponse(intent);

        return {
            response: response,
            metadata: {
                source: 'emergency_mode',
                intent: intent,
                isOffline: true,
                reason: this.activationReason,
                timestamp: Date.now(),
            },
            error: null,
            isEmergency: true,
        };
    }

    /**
     * 🏥 Mensaje inicial del modo demo
     */
    getOfflineGreeting() {
        return this.getRandomResponse('systemError');
    }
}

// Export unique instance (singleton)
const emergencyMode = new EmergencyMode();
export default emergencyMode;