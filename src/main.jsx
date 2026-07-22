import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'
import './styles/animations.css';


// El boundary envuelve a App entera, por encima del router y de los proveedores
// de idioma: así cubre las dos rutas y también un fallo dentro del propio
// LanguageProvider. Por eso lee el idioma sin usar contexto de React.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
