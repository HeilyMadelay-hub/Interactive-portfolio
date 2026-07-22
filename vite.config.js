import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        host: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                secure: false,
            }
        }
    },
    build: {
        outDir: 'build',
        sourcemap: false,
        minify: 'esbuild',
        // React y el router cambian mucho menos que el código propio: en su propio
        // archivo, el navegador los reutiliza de caché entre despliegues en vez de
        // volver a bajarlos cada vez que se toca una sección.
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                },
            },
        },
        // Sin override: el aviso por defecto de Vite (500 kB) vuelve a estar activo,
        // que es justo lo que avisa si un chunk se descontrola en el futuro.
    }
})