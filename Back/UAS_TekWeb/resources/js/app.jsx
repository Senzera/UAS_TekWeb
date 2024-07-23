import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')), // Import all pages in the Pages directory and subdirectories with the .jsx extension as a glob pattern.
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    }, // Create a root element and render the App component with the props.
});

InertiaProgress.init();
