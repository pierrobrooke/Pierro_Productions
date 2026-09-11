# Pierro Productions — Brand Universe

The **Clarissa Pierro — Brand Universe** page, built as a Vite + React + TypeScript
site composed from **The Butterfly System** design system (`design-system/`).

## Live site

- **GitHub Pages:** https://pierrobrooke.github.io/Pierro_Productions/

## Deploy to Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)

Click the button (or go to <https://vercel.com/new>), sign in with GitHub, and
**import the `pierrobrooke/Pierro_Productions` repository** — authorize Vercel's
GitHub app for it if prompted. Leave the build settings at their defaults; Vercel
reads [`vercel.json`](./vercel.json) (framework `vite`, build `npm run build`,
output `dist`). After the first import, every push to `main` auto-deploys.

> Importing the existing repo keeps it connected so future changes deploy
> automatically. Avoid the "clone" flow, which would create a disconnected copy.

## Local development

```bash
npm install     # also installs design-system deps via postinstall
npm run dev      # Vite dev server
npm run build    # design-system build + tsc + vite build → dist/
npm run preview  # serve the production build locally
```

## Hosting note — base path

The site serves from two kinds of URL, so the Vite `base` is set per build:

- **GitHub Pages** is a project page under `/Pierro_Productions/`, so its workflow
  builds with `GITHUB_PAGES=true` and assets resolve under that subpath.
- **Vercel** (and local dev/preview) serves from the root `/`.

See [`vite.config.ts`](./vite.config.ts) and
[`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml).

## Structure

- `src/` — the Brand Universe page (`App.tsx`).
- `design-system/` — The Butterfly System package (`@pierro-productions/butterfly-system`):
  tokens, fonts, brand themes, animated marks, and 20 components with per-component docs.
- `brand/` — original brand source (guidelines, brand system JSON, source HTML pages).
- `.design-sync/` — inputs for syncing the design system to claude.ai/design.
