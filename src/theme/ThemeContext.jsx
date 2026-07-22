import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';

// Mismo patrón que LanguageContext: una sola clave compartida por el chat y el
// portfolio, para que el visitante elija tema una vez y toda la app lo recuerde.
const STORAGE_KEY = 'ht-portfolio-theme';
const THEMES = ['light', 'dark'];

function systemTheme() {
    if (typeof window === 'undefined' || !window.matchMedia) return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Orden de resolución: lo que el visitante eligió la última vez > lo que pide
// su sistema operativo (prefers-color-scheme) > claro.
function resolveInitialTheme() {
    if (typeof window === 'undefined') return 'light';
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (THEMES.includes(stored)) return stored;
    } catch {
        // Modo privado o storage bloqueado: seguimos con la preferencia del sistema.
    }
    return systemTheme();
}

function hasStoredTheme() {
    try {
        return THEMES.includes(window.localStorage.getItem(STORAGE_KEY));
    } catch {
        return false;
    }
}

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
    // Inicializador lazy: la detección corre una vez al montar, no en cada render.
    const [theme, setTheme] = useState(resolveInitialTheme);
    const switchTimer = useRef(null);

    // El atributo en <html> es lo único que consume el CSS: todos los tokens
    // de src/index.css se resuelven contra [data-theme]. El script inline de
    // index.html ya lo dejó puesto antes del primer pintado; aquí solo se
    // mantiene en sincronía cuando el tema cambia en caliente.
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Si el visitante nunca ha elegido, seguimos al sistema operativo en vivo:
    // cambiar Windows/macOS a oscuro cambia la app sin recargar. En cuanto
    // pulsa el botón, su elección manda y este listener deja de aplicar.
    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return undefined;
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const followSystem = (e) => {
            if (!hasStoredTheme()) setTheme(e.matches ? 'dark' : 'light');
        };
        media.addEventListener('change', followSystem);
        return () => media.removeEventListener('change', followSystem);
    }, []);

    const toggleTheme = useCallback(() => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

        // La clase habilita la transición de 250 ms definida en index.css.
        // El atributo se cambia en este mismo tick, no esperando al useEffect:
        // si la clase y las variables cayeran en frames distintos, el fundido
        // arrancaría tarde y podría quedar cortado al retirar la clase.
        root.classList.add('theme-switching');
        root.setAttribute('data-theme', next);

        // 400 ms = los 250 de la transición más holgura. Retirar la clase antes
        // de que termine cancelaría el fundido a medias en equipos lentos.
        window.clearTimeout(switchTimer.current);
        switchTimer.current = window.setTimeout(
            () => root.classList.remove('theme-switching'),
            400
        );

        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Como mucho la preferencia no sobrevive a la recarga; no rompemos la UI.
        }
        setTheme(next);
    }, []);

    // Al desmontar, el temporizador pendiente dejaría la clase pegada y con ella
    // una transición de color permanente en toda la app.
    useEffect(() => () => window.clearTimeout(switchTimer.current), []);

    // Sin memo, el objeto sería nuevo en cada render y re-renderizaría a todos
    // los consumidores del contexto aunque el tema no haya cambiado.
    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// Devuelve { theme, toggleTheme } — para el botón del header.
export function useTheme() {
    return useContext(ThemeContext);
}
