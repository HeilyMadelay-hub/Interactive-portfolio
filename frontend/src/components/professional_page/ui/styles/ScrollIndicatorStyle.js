// src/components/ui/styles/ScrollIndicatorStyle.js

export const scrollContainer = {
    position: 'absolute',
    bottom: 'clamp(10px, 2vh, 15px)',
    left: 'calc(50% - 30px)', // Desplazado 30px a la izquierda del centro
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'clamp(4px, 1vh, 6px)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
};

export const scrollLabel = {
    fontSize: 'clamp(0.55rem, 1.2vw, 0.65rem)', // Más pequeño en móvil
    color: '#2563EB',
    fontWeight: '700',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    margin: 0,
};

export const arrowIcon = {
    width: 'clamp(20px, 4vw, 24px)', // Responsive size
    height: 'clamp(20px, 4vw, 24px)',
    color: '#2563EB',
    animation: 'bounce 2s infinite',
};