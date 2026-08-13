import React, { Suspense, lazy } from 'react'; // Importa React para poder usar JSX y componentes funcionales
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa componentes de React Router para manejar la navegación entre páginas
import './App.css';// Importa los estilos globales de la aplicación
import { LanguageProvider } from './components/professional_page/i18n/LanguageContext.jsx'; // Idioma activo (ES/EN/FR) compartido por toda la app
import { ThemeProvider } from './theme/ThemeContext.jsx'; // Tema claro/oscuro compartido por chat y portfolio
import NotFound from './components/NotFound.jsx'; // Cualquier URL sin match — sin esto, <Routes> renderiza en blanco
import './styles/animations.css';

// Cada ruta viaja en su propio archivo en vez de en un único paquete: quien entra
// al chat ya no se descarga framer-motion ni los datos del portfolio, y quien entra
// al portfolio no se descarga el renderizador de markdown del chat.
const ChatPage = lazy(() => import('./pages/chat/ChatPage.jsx'));// Página principal del chat
const ProfessionalPage = lazy(() => import('./pages/professionalpage/ProfessionalPage.jsx'));// Modo profesional
// Un único componente para /legal, /privacy y /cookies: mismo diseño, cambia
// solo el documento que se le pasa. Al ser el mismo módulo, las tres rutas
// comparten chunk y quien no entra en ninguna no se lo descarga.
const LegalPage = lazy(() => import('./components/professional_page/legal/LegalPage.jsx'));

// Espera mientras llega el archivo de la ruta. Sin texto a propósito: se renderiza
// fuera del proveedor de idioma, así que cualquier frase quedaría clavada en un
// idioma que quizá no sea el del visitante.
function RouteFallback() {
    return (
        <div className="route-fallback" role="status" aria-label="Loading">
            <span className="route-fallback-spinner" />
        </div>
    );
}

function App() {// Componente principal de la aplicación que solo hace routing
    return (
        // ThemeProvider por encima del router: el tema es global (chat +
        // portfolio) y, a diferencia del idioma, no depende de la ruta.
        <ThemeProvider>
        {/* BrowserRouter envuelve la app para habilitar rutas y navegación */}
        <BrowserRouter>
            {/* Suspense es obligatorio con lazy(): sostiene el render mientras
                se descarga el archivo de la ruta que toca. */}
            <Suspense fallback={<RouteFallback />}>
                {/* Routes define los caminos y qué componente renderizar en cada uno */}
                <Routes>
                    {/* `defaultLang` ya no fija el idioma: es solo el último recurso.
                        LanguageProvider resuelve preferencia guardada > idioma del navegador >
                        este default, así que solo se usa si el visitante nunca eligió y su
                        navegador habla algo que no traducimos.
                        key distinta en cada provider: fuerza un remontaje al cambiar de ruta para
                        que la detección vuelva a correr con el default correcto de cada vista. */}
                    <Route
                        path="/"
                        element={
                            <LanguageProvider key="chat-lang" defaultLang="EN">
                                <ChatPage />
                            </LanguageProvider>
                        }
                    />

                    {/* Ruta "/portfolio": selector ES/EN/FR en el header, español como último recurso */}
                    <Route
                        path="/portfolio"
                        element={
                            <LanguageProvider key="portfolio-lang">
                                <ProfessionalPage />
                            </LanguageProvider>
                        }
                    />

                    {/* Páginas legales enlazadas desde el footer. Mismo provider
                        que el portfolio (default ES) para que el idioma elegido
                        arriba siga vigente al abrir un documento legal. */}
                    {[
                        { path: '/legal', docKey: 'notice' },
                        { path: '/privacy', docKey: 'privacy' },
                        { path: '/cookies', docKey: 'cookies' },
                    ].map(({ path, docKey }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <LanguageProvider key={`${docKey}-lang`}>
                                    <LegalPage docKey={docKey} />
                                </LanguageProvider>
                            }
                        />
                    ))}

                    {/* Comodín: cualquier ruta que no coincida con las de arriba (typos,
                        enlaces rotos, /portfolio/algo). Sin esto, Routes no renderiza
                        nada y el visitante ve una página en blanco. */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;// Exporta el componente App para poder usarlo en index.js
