import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://pierrobrooke.github.io/Pierro_Productions/ (a project
// page, not a user page), so assets must resolve under that subpath.
export default defineConfig({
  base: '/Pierro_Productions/',
  plugins: [react()],
})
