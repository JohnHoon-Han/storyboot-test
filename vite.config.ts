import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [dts()]
  plugins: [
    react(),
    tailwindcss(),
    dts(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/index.css',
          dest: '',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'hoons-design-system',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
      },
    },

    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
  },
})
