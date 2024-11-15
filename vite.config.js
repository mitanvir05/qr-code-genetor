import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // Use named import

export default defineConfig({
  plugins: [
    nodePolyfills({
      global: true,     // Enables polyfilling for `global`
      process: true,    // Enables polyfilling for `process`
      buffer: true,     // Enables polyfilling for `Buffer`
    }),
  ],
});
