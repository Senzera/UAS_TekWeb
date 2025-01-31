import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.jsx']),
    ],
    reslove: {
        alias: {
            '@': '/resources/js',
        },
    },
});
