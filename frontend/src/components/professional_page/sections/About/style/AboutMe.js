// ===============================
// Contenedor principal
// ===============================
export const aboutContainer = {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 'clamp(96px, 14vh, 160px)',
    paddingBottom: 'clamp(64px, 10vh, 120px)',
    paddingInline: 'clamp(1rem, 5vw, 5vw)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
    color: '#cbd5e1',
};

// ===============================
// Contenedor interno
// ===============================
export const contentWrapper = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '1400px',
    padding: '0 clamp(1rem, 3vw, 1.5rem)',
    boxSizing: 'border-box',
};

// ===============================
// Layout flex
// ===============================
export const flexContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(2rem, 5vw, 4rem)',
    flexWrap: 'wrap',
};

// ===============================
// Texto
// ===============================
export const textContent = {
    flex: '1 1 520px',
    maxWidth: '680px',
    width: '100%',
};

// ===============================
// Grid de fondo (sutil)
// ===============================
export const gridBackground = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
        linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '120px 120px',
    pointerEvents: 'none',
    zIndex: 0,
};

// ===============================
// Título
// ===============================
export const sectionTitle = {
    fontSize: 'clamp(2rem, 5vw, 3.8rem)',
    fontWeight: 800,
    color: '#f1f5f9',
    marginBottom: '0.3em',
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
    maxWidth: '20ch',
    fontFamily: '"Inter", system-ui, sans-serif',
};

// ===============================
// Subtítulo
// ===============================
export const sectionSubtitle = {
    fontSize: 'clamp(0.9rem, 1.9vw, 1.05rem)',
    color: '#cbd5e1',
    fontWeight: 400,
    marginBottom: '2rem',
    lineHeight: 1.6,
    maxWidth: '55ch',
};


// ===============================
// Línea decorativa
// ===============================
export const animatedLine = {
    height: '4px',
    width: 'clamp(120px, 20vw, 220px)',
    background: 'linear-gradient(90deg, #64ffda 0%, rgba(100,255,218,0.3) 100%)',
    marginTop: '1.2rem',
    marginBottom: '2.5rem',
    borderRadius: '4px',
    boxShadow: '0 0 20px rgba(100,255,218,0.25)',
};

// ===============================
// Texto principal
export const aboutText = {
    fontSize: 'clamp(0.85rem, 1.25vw, 0.95rem)',
    lineHeight: 1.8,
    color: '#cbd5e1',
    marginBottom: '1.4rem',
    maxWidth: '65ch',
};


// ===============================
// Imagen
// ===============================
export const imageContainer = {
    flex: '1 1 280px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'clamp(2rem, 5vw, 0)',
};

export const imageWrapper = {
    width: 'clamp(220px, 45vw, 400px)', 
    height: 'clamp(220px, 45vw, 400px)',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid rgba(100,255,218,0.3)',
    boxShadow: '0 0 40px rgba(100,255,218,0.2)',
    background: '#0a192f',
};

// ===============================
// Imagen interna
// ===============================
export const profileImage = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
};
