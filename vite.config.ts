import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path depends on where the build is served:
//   - GitHub Pages is a project page (https://pierrobrooke.github.io/Pierro_Productions/),
//     so assets must resolve under that subpath. The Pages workflow sets
//     GITHUB_PAGES=true for its build.
//   - Vercel (and any root-domain host, plus local dev/preview) serves from '/'.
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/Pierro_Productions/' : '/',
  plugins: [react()],
})
