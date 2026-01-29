// Estilos inline para mantener coherencia
export const skillsContainer = {
    minHeight: '100vh',
    padding: 'clamp(40px, 6vh, 60px) clamp(1.5rem, 5vw, 3rem)',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: '#e6f1ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
};

export const skillsWrapper = {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
};

export const skillsTitle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    color: '#ccd6f6',
    marginBottom: '0.8rem',
    lineHeight: 1.2,
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    letterSpacing: '-0.02em',
};

export const titleUnderline = {
    width: '70px',
    height: '4px',
    background: 'linear-gradient(90deg, #64ffda 0%, rgba(100, 255, 218, 0.4) 100%)',
    borderRadius: '2px',
    marginBottom: '2.5rem',
    boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
};

export const skillsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(1rem, 2vw, 1.5rem)',
    marginTop: '2.5rem',
};

export const skillCard = {
    background: 'rgba(17, 34, 64, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: 'clamp(1.2rem, 2.5vw, 1.5rem)',
    border: '1px solid rgba(100, 255, 218, 0.2)',
    transition: 'all 0.3s ease',
};

export const categoryTitle = {
    color: '#64ffda',
    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
    fontWeight: '600',
    marginBottom: '1rem',
    fontFamily: '"Inter", sans-serif',
};

export const skillsList = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
};

export const skillBadge = {
    padding: '0.4rem 0.8rem',
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '6px',
    color: '#94a3b8',
    fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
    fontWeight: '500',
    transition: 'all 0.2s ease',
};

export const cardDescriptionStyle = {
    color: '#94a3b8',
    fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
    lineHeight: 1.6,
};

// Exports adicionales que necesitas en Skills.jsx
export const cardStyle = {
    background: 'rgba(17, 34, 64, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: 'clamp(1.2rem, 2.5vw, 1.5rem)',
    border: '1px solid rgba(100, 255, 218, 0.2)',
    transition: 'all 0.3s ease',
};

export const iconContainerStyle = {
    marginBottom: '1rem',
    color: '#64ffda',
    fontSize: '2rem',
};

export const cardTitleStyle = {
    color: '#64ffda',
    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
    fontWeight: '600',
    marginBottom: '0.5rem',
    fontFamily: '"Inter", sans-serif',
};

export const getGridStyle = () => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(1rem, 2vw, 1.5rem)',
    marginTop: '2.5rem',
});

// Datos de skills por categoría
export const skillsData = [
    {
        category: 'Backend',
        skills: [
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "FastAPI", icon: "devicon-fastapi-plain" },
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "APIs REST", icon: "devicon-swagger-plain" }
        ]
    },
    {
        category: 'Frontend',
        skills: [
            { name: "Angular", icon: "devicon-angularjs-plain" },
            { name: "React", icon: "devicon-react-original" },
            { name: "TypeScript", icon: "devicon-typescript-plain" },
            { name: "HTML/CSS", icon: "devicon-html5-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" }
        ]
    },
    {
        category: 'AI & ML',
        skills: [
            { name: "RAG Pipelines", icon: "devicon-python-plain colored" },
            { name: "LangChain", icon: "devicon-python-plain colored" },
            { name: "OpenAI API", icon: "devicon-openai-plain" },
            { name: "Gemini API", icon: "devicon-google-plain colored" },
            { name: "ChromaDB"},
            { name: "MediaPipe", icon: "devicon-python-plain colored" },
            { name: "TensorFlow.js", icon: "devicon-tensorflow-original colored" }
        ]
    },
    {
        category: 'Real-Time',
        skills: [
            { name: "WebSockets", icon: "devicon-socketio-original colored" },
            { name: "SignalR", icon: "devicon-dotnetcore-plain colored" },
            { name: "Socket.io", icon: "devicon-socketio-original colored" }
        ]
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { name: "Azure", icon: "devicon-azure-plain" },
            { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
            { name: "Docker", icon: "devicon-docker-plain" }
        ]
    },
    {
        category: 'Databases',
        skills: [
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "Supabase", icon: "devicon-supabase-plain" }
        ]
    }
];