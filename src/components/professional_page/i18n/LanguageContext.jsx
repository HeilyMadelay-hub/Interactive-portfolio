import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import es from './es.js';
import en from './en.js';
import fr from './fr.js';

// Diccionario de traducciones por idioma. La clave coincide con el código
// que muestra el switcher del header (ES / EN / FR).
const DICTIONARIES = { ES: es, EN: en, FR: fr };
const SUPPORTED = Object.keys(DICTIONARIES);

// Una sola clave compartida: el visitante elige idioma una vez y tanto el chat
// como el portfolio lo recuerdan, aunque cada ruta tenga su propio default.
const STORAGE_KEY = 'ht-portfolio-lang';

// Etiqueta BCP-47 ("fr-CA", "es-419", "en") → nuestro código interno.
// Devuelve null si el navegador habla algo que no traducimos, para que quien
// llama pueda caer en su propio default.
function normalize(tag) {
    if (typeof tag !== 'string') return null;
    const code = tag.trim().slice(0, 2).toUpperCase();
    return SUPPORTED.includes(code) ? code : null;
}

// Orden de resolución: lo que el visitante eligió la última vez > lo que pide
// su navegador > el default de la ruta (EN en el chat, ES en el portfolio).
function resolveInitialLang(defaultLang) {
    if (typeof window === 'undefined') return defaultLang;

    try {
        const stored = normalize(window.localStorage.getItem(STORAGE_KEY));
        if (stored) return stored;
    } catch {
        // Modo privado o storage bloqueado: seguimos con la detección del navegador.
    }

    // `languages` está ordenado por preferencia; nos quedamos con el primero
    // que sepamos traducir en vez de mirar solo `language`.
    const fromBrowser = (navigator.languages?.length ? navigator.languages : [navigator.language])
        .map(normalize)
        .find(Boolean);

    return fromBrowser || defaultLang;
}

const LanguageContext = createContext({
    lang: 'ES',
    setLang: () => {},
    t: es,
});

export function LanguageProvider({ children, defaultLang = 'ES' }) {
    // Inicializador lazy: la detección corre una vez al montar, no en cada render.
    const [lang, setLangState] = useState(() => resolveInitialLang(defaultLang));

    const setLang = useCallback((next) => {
        if (!SUPPORTED.includes(next)) return;
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Como mucho la preferencia no sobrevive a la recarga; no rompemos la UI por esto.
        }
    }, []);

    // Mantiene <html lang> en sincronía: lectores de pantalla, el corrector del
    // navegador y los buscadores leen ese atributo, no nuestro estado de React.
    useEffect(() => {
        document.documentElement.lang = lang.toLowerCase();
    }, [lang]);

    // Sin memo, el objeto sería nuevo en cada render y re-renderizaría a todos
    // los consumidores del contexto aunque el idioma no haya cambiado.
    const value = useMemo(
        () => ({ lang, setLang, t: DICTIONARIES[lang] || es }),
        [lang, setLang]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

// Diccionario del idioma que resolvería el proveedor, pero SIN pasar por React.
// Lo necesita el ErrorBoundary: se monta por encima del LanguageProvider (si no,
// no podría capturar un fallo dentro del propio proveedor), así que no tiene
// contexto del que leer. Misma preferencia guardada, misma detección.
export function getStandaloneDictionary(defaultLang = 'ES') {
    try {
        return DICTIONARIES[resolveInitialLang(defaultLang)] || es;
    } catch {
        // Si hasta la detección falla, inglés: es la pantalla de último recurso.
        return en;
    }
}

// Devuelve { lang, setLang } — para el switcher del header.
export function useLanguage() {
    return useContext(LanguageContext);
}

// Devuelve el diccionario completo del idioma activo — para las secciones.
export function useT() {
    return useContext(LanguageContext).t;
}
