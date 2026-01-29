// ===============================
// Contenedor principal Skills
// ===============================
export const skillsContainer = {
    minHeight: '100vh',
    padding: 'clamp(40px, 6vh, 60px) clamp(1.5rem, 5vw, 3rem)',
    background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
    color: '#e6f1ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
};

// ===============================
// Contenedor interno
// ===============================
export const skillsWrapper = {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
};

// ===============================
// Título principal
// ===============================
export const skillsTitle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    color: '#ccd6f6',
    marginBottom: '0.8rem',
    lineHeight: 1.2,
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    letterSpacing: '-0.02em',
};

// ===============================
// Línea debajo del título (marca)
// ===============================
export const titleUnderline = {
    width: '70px',
    height: '4px',
    background: 'linear-gradient(90deg, #64ffda 0%, rgba(100, 255, 218, 0.4) 100%)',
    borderRadius: '2px',
    marginBottom: '2.5rem',
    boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
};

// ===============================
// Grid de tarjetas - FUNCIÓN para responsive
// ===============================
export const getGridStyle = (windowWidth) => {
    let columns;
    let gap;

    if (windowWidth <= 768) {
        columns = '1fr';
        gap = '1.2rem';
    } else if (windowWidth <= 1200) {
        columns = 'repeat(2, 1fr)';
        gap = '1.5rem';
    } else {
        columns = 'repeat(4, 1fr)';
        gap = 'clamp(1rem, 1.5vw, 1.2rem)';
    }

    return {
        display: 'grid',
        gridTemplateColumns: columns,
        gap: gap,
        marginTop: '2.5rem',
    };
};

// ===============================
// Tarjeta base (NEUTRA)
// ===============================
export const cardStyle = {
    background: 'rgba(17, 34, 64, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
};

// ===============================
// Contenedor del icono (NEUTRO)
// ===============================
export const iconContainerStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    transition: 'all 0.3s ease',
};

// ===============================
// Título de tarjeta
// ===============================
export const cardTitleStyle = {
    color: '#f1f5f9',
    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
    fontWeight: '600',
    marginBottom: '0.8rem',
    letterSpacing: '0.3px',
    fontFamily: '"Inter", sans-serif',
    lineHeight: 1.3,
};

// ===============================
// Descripción
// ===============================
export const cardDescriptionStyle = {
    color: '#94a3b8',
    fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
    lineHeight: '1.6',
    flex: 1,
    fontFamily: '"Inter", system-ui, sans-serif',
};