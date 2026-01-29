// Corrección del archivo de estilos Hero.js
// Añade el export que faltaba

export const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    position: 'relative',
    overflow: 'hidden',
    padding: '0 20px',
    cursor: 'crosshair',
};

export const contentWrapper = {
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '1000px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0', // Padding vertical para móviles
};

export const gridBackground = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
        linear-gradient(rgba(31, 59, 90, 0.03) 1.5px, transparent 1.5px),
        linear-gradient(90deg, rgba(31, 59, 90, 0.03) 1.5px, transparent 1.5px)
    `,
    backgroundSize: '40px 40px',
    maskImage: 'radial-gradient(circle, black, transparent 90%)',
    animation: 'moveGrid 60s linear infinite',
};

export const radialGlow = (pos) => ({
    position: 'absolute',
    width: '900px',
    height: '900px',
    top: pos.y - 800,
    left: pos.x - 800,
    background: `
        radial-gradient(circle at 50% 50%, rgba(59,130,246,0.32) 0%, transparent 65%),
        radial-gradient(circle at 40% 60%, rgba(99,102,241,0.20) 10%, transparent 55%)
    `,
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 1,
    transition: 'top 0.10s ease-out, left 0.10s ease-out',
    filter: 'blur(70px)',
    opacity: 0.95,
    animation: 'pulseGlow 10s ease-in-out infinite',
});

export const titleStyle = {
    fontSize: 'clamp(2.2rem, 6vw, 5rem)', // REDUCIDO significativamente
    color: '#0F172A',
    fontWeight: '900',
    margin: '0',
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
    fontFamily: 'Inter, system-ui, sans-serif',
    transition: 'all 0.3s ease',
    textShadow: '0 0 8px rgba(37, 99, 235, 0.3), 0 0 16px rgba(37, 99, 235, 0.15)',
    wordBreak: 'break-word',
    maxWidth: '95%', // CRÍTICO: Evita que se desborde
};

export const roleStyle = {
    fontSize: 'clamp(0.7rem, 1.6vw, 1rem)', // MÁS PEQUEÑO
    color: '#64ffda',
    fontWeight: '600',
    letterSpacing: '0.12em',
    margin: 'clamp(14px, 2.5vh, 20px) 0 clamp(8px, 1.5vh, 10px)',
    textTransform: 'uppercase',
};

export const descriptionStyle = {
    fontSize: 'clamp(0.8rem, 1.4vw, 0.95rem)', // MÁS PEQUEÑO
    fontWeight: '500',
    color: '#f1f5f9',
    margin: '0 0 clamp(14px, 2.5vh, 18px)',
    maxWidth: '700px', // Reducido
    padding: '0 15px',
};

export const achievementWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(12px, 3vw, 20px)', // Gap responsive
    margin: 'clamp(16px, 3vh, 24px) 0',
    maxWidth: '900px',
    width: '100%',
    padding: '0 10px', // Padding en móvil
    flexWrap: 'wrap', // Permite que las líneas se envuelvan en móvil
};

export const achievementLine = {
    width: 'clamp(30px, 8vw, 50px)', // Líneas más cortas en móvil
    height: '2px',
    background: 'linear-gradient(to right, transparent, #2563EB, transparent)',
    flexShrink: 0, // No se encogen
};

export const achievementStyle = {
    fontSize: 'clamp(0.75rem, 1.3vw, 0.9rem)', // MÁS PEQUEÑO
    color: '#64ffda',
    fontWeight: '600',
    margin: 0,
    lineHeight: '1.5',
    padding: 'clamp(10px, 1.8vh, 12px) clamp(14px, 3.5vw, 20px)',
    background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(100,255,218,0.1))',
    borderRadius: '12px',
    border: '1px solid rgba(100,255,218,0.3)',
    boxShadow: '0 8px 32px rgba(100,255,218,0.2)',
    backdropFilter: 'blur(8px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    maxWidth: '100%',
    textAlign: 'center',
};

export const taglineWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    margin: '24px 0 32px',
};

export const lineStyle = {
    width: '70px',
    height: '1px',
    background: 'linear-gradient(to right, transparent, #CBD5E1, transparent)',
};

export const specialtyStyle = {
    fontSize: '1.1rem',
    color: '#64748B',
    fontFamily: 'monospace',
    fontWeight: '600',
    margin: 0,
    letterSpacing: '0.05em',
};

export const badgeContainer = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: 'clamp(4px, 0.8vh, 5px) clamp(10px, 2.5vw, 14px)',
    borderRadius: '9999px',
    background: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    marginTop: 'clamp(10px, 1.5vh, 14px)',
    marginBottom: 'clamp(50px, 8vh, 70px)',
    transition: 'all 0.25s ease',
};

export const statusDot = {
    width: '4px',
    height: '4px',
    backgroundColor: '#10B981',
    borderRadius: '50%',
    boxShadow: '0 0 0.2px #10B981',
    flexShrink: 0,
};

export const badgeText = {
    fontSize: 'clamp(0.58rem, 1.1vw, 0.65rem)',
    letterSpacing: '0.7px',
    color: '#22c55e',
    fontWeight: '700',
    whiteSpace: 'nowrap',
};