import es from './es.js';
import en from './en.js';
import fr from './fr.js';

// Los tres documentos legales viven aquí y no en i18n/es.js|en.js|fr.js por
// tamaño: son textos largos que solo lee el modal legal, y meterlos en el
// diccionario general obligaría a descargarlos con el portfolio entero.
// El idioma sigue siendo el mismo que elige el visitante en el header: estas
// tablas se indexan con el `lang` de LanguageContext, no con uno propio.
const LEGAL_CONTENT = { ES: es, EN: en, FR: fr };

// Orden en que se presentan (footer y saltos entre documentos).
export const DOC_ORDER = ['notice', 'privacy', 'cookies'];

// Documento → ruta. Cada documento tiene URL propia aunque se pinte en modal:
// así sigue siendo enlazable desde fuera y el botón atrás lo cierra.
export const LEGAL_ROUTES = {
    notice: '/legal',
    privacy: '/privacy',
    cookies: '/cookies',
};

// Ruta → documento. Lo usan ProfessionalPage (para saber qué abrir según la
// URL) y las referencias cruzadas dentro del propio texto legal.
export const DOC_BY_PATH = Object.fromEntries(
    Object.entries(LEGAL_ROUTES).map(([docKey, path]) => [path, docKey])
);

// Devuelve { ui, doc } para un idioma y un documento. Si el idioma no está
// traducido cae a español, que es la fuente de verdad del contenido legal.
export function getLegalContent(lang, docKey) {
    const dictionary = LEGAL_CONTENT[lang] || es;
    return {
        ui: dictionary.ui,
        doc: dictionary.docs[docKey] || es.docs[docKey],
    };
}
