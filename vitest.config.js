import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Make all vitest imports global
  test: {
    // Add jsdom to vite
    environment: 'jsdom',
    // Include Wildcards
    include: ['**/*.test.js*'],
    // Make them global
    globals: true,
    setupFiles: './src/tests/setup.js',
  }
});

