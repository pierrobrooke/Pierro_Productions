# Design-sync notes — Pierro Productions / The Butterfly System

- This repo started as brand assets only (see `brand/`); the React design system in `src/` was built from them on 2026-07-04 by the first design-sync run. `brand/brand-guidelines.md` + `brand/brand-system.json` are the brand source of truth.
- `brand/brand-universe.html` (the "Clarissa Pierro — Brand Universe" page) predates the Butterfly System v1.0: its per-brand colors (purple/teal/gold) and fonts (Cormorant Garamond, DM Sans) are superseded by the guidelines. It was used for layout patterns only (BrandCard, ThroughLine, PageHeader, SectionLabel).
- Fonts are self-hosted from npm: `@fontsource-variable/*` for the five headline fonts, `@carrot-kpi/switzer-font` for Switzer (Fontshare is blocked by this environment's network proxy; npm registry is direct). Prime Serif and Söhne remain unlicensed — Fraunces and Switzer are the working substitutes per the guidelines' own open items.
- The user's live site is built in Lovable: https://lovable.dev/projects/0f9ce52d-6f9a-418c-bf02-d5ee0a034a3d (edit invite link shared 2026-07-04, magic_link=mc_2b58be5a-b0f1-4ef5-81b4-e8361593dc30) — "clarissapierro.com / Pierro Productions". Kept for a possible later job: restyling the Lovable site with this design system.
- `cssEntry` must stay a flattened stylesheet (`dist/index.css`, built by `scripts/copy-assets.mjs`) — an `@import`-only entry trips `[CSS_PLACEHOLDER]`. `@font-face` rules ship separately via `extraFonts: ["dist/styles/fonts.css"]` so the woff2 paths resolve.
- Playwright for the render check: the environment caches chromium build 1194 → playwright 1.56.1 (installed in `.ds-sync/`).
- Vein marks (`VeinKnot`, `VeinLoader`) animate from an invisible start frame; their previews inject a small `<style>` freezing the loop at the drawn frame (`animation-delay: -1.9s`, paused) — presentation-only, live usage animates. The component CSS also pins the reduced-motion state to the DRAWN frame (stroke-dashoffset 0, bloom visible), per the brand rule "drop to static", so don't remove that block from `components.css`.
- `cardMode: column` overrides for `Lockup`, `PageHeader`, `Display` (wide stories) live in config `overrides` — presentation-only.
- Hover-only motion (Iridescent Edge, Breath Bloom, ScatterToSolid-as-hover-state, Flutter Cursor from the motion spec) can't render statically; not previewed. Flutter Cursor and the Vein Draw page transition (§7 of the guidelines) are NOT implemented as components yet — candidates for a future version.

## Known render warns
- (none — 20/20 clean at last full validate)

## Re-sync risks
- The brand voice copy inside authored previews quotes `brand/brand-guidelines.md` and the Brand Universe page; if the brand copy changes, previews still compile but their content may lag — skim them on a guidelines bump.
- Fonts come from npm packages pinned in `package.json` devDependencies; `scripts/copy-assets.mjs` hardcodes the fontsource file names (`*-latin-wght-normal.woff2`). A fontsource major bump could rename files — the build will throw ENOENT in copy-assets if so.
- The whole component library (`src/`) is repo-owned — there is no upstream package to drift against. Rebuilds are deterministic (final capture printed 20 carried forward / 0 cleared).
- Upload to claude.ai/design was BLOCKED at first-sync time (no design authorization in the claude.ai/code environment — user was asked to use Claude Design's "Send to Claude Code Web"). If config lacks `projectId`, the first upload still needs §1 target selection: user chose the name "Pierro Productions — Butterfly System" for a fresh project.
