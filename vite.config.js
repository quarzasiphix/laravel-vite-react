import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/App.css', 'resources/js/App.ts'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/',
        assetsDir: '.',
        rollupOptions: {
          input: 'resources/js/App.ts',
        },
      },

});
