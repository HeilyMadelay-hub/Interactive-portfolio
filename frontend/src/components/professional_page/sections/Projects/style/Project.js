// Colores para los iconos/bordes de cada proyecto
export const projectColors = {
    project1: '#8B5CF6', // Morado
    project2: '#F59E0B', // Naranja
    project3: '#10B981', // Verde
    project4: '#3B82F6'  // Azul
};

// PROYECTOS DE EJEMPLO PARA VER COMO ME QUEDABA PERO NO VA AQUI EVIDENTEMENTE POR EL CONTEXT
export const projects = [
    {
        id: 1,
        title: 'Sistema RAG con FastAPI',
        description: 'Chatbot conversacional con IA usando RAG, streaming en tiempo real y Computer Vision para análisis de documentos legales.',
        tags: ['Python', 'FastAPI', 'RAG', 'LangChain', 'OpenAI'],
        icon: '🤖',
        color: projectColors.project1,
        link: 'https://github.com/tuusuario/proyecto-rag',
        highlights: ['Streaming real-time', 'Computer Vision', 'Análisis legal']
    },
    {
        id: 2,
        title: 'API REST Escalable',
        description: 'Backend con arquitectura limpia, gestión de transacciones concurrentes y WebSockets para eventos en tiempo real.',
        tags: ['C#', 'ASP.NET Core', 'SignalR', 'PostgreSQL'],
        icon: '⚡',
        color: projectColors.project2,
        link: 'https://github.com/tuusuario/proyecto2',
        highlights: ['Arquitectura limpia', 'WebSockets', 'Alta concurrencia']
    },
    {
        id: 3,
        title: 'Automatización Legal Tech',
        description: 'Scraping de BOE/BOA y procesamiento masivo de PDFs con chatbot RAG para consultas legales inteligentes.',
        tags: ['Python', 'Selenium', 'ChromaDB', 'MediaPipe'],
        icon: '⚖️',
        color: projectColors.project3,
        link: 'https://github.com/tuusuario/proyecto3',
        highlights: ['Web scraping', 'Procesamiento PDFs', 'Chatbot RAG']
    },
    {
        id: 4,
        title: 'Dashboard Real-Time',
        description: 'Sistema de reservas con bloqueo optimista, chat streaming y arquitectura backend de alto rendimiento.',
        tags: ['Node.js', 'WebSockets', 'React', 'MongoDB'],
        icon: '📊',
        color: projectColors.project4,
        link: 'https://github.com/tuusuario/proyecto4',
        highlights: ['Tiempo real', 'Bloqueo optimista', 'Alto rendimiento']
    }
];