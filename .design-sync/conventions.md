# The Butterfly System — build conventions

**Always wrap every page (or brand-scoped section) in `BrandProvider`.** It sets the palette, headline font, page background, and body font via CSS custom properties — components render unthemed without it. Brands: `pierro` (master, default), `cotton-candy-revolt`, `frequency-blueprint`, `zensual-mastery`, `pole-class-pro` (dark), `web-design` (dark). Providers nest: a dark sub-brand section can sit inside a `pierro` page.

```tsx
<BrandProvider brand="pierro">
  <PageHeader eyebrow="Brand Universe" title={<>Clarissa <em>Pierro</em></>}
    tagline="Five distinct worlds, one source." />
  <SectionLabel>Five Projects</SectionLabel>
  <BrandCard number="01" name="Zensual Mastery" pill="Separate project"
    description="The embodiment arm." tags={['Goddess Quiz']} href="#" />
  <Button>Begin the work</Button>
</BrandProvider>
```

**Styling idiom: components style themselves; your layout glue uses the CSS custom properties.** There is no utility-class vocabulary — don't invent classes. For spacing/containers use inline styles or your own classes built on the tokens:

- Palette (fixed, all brands): `--pp-forest` #8FAC7E, `--pp-gunpowder` #18181A, `--pp-porcelain` #F6E5D3, `--pp-orchid` #E73788, `--pp-rose` #F8CCC9.
- Semantic (swap per brand — prefer these): `--pp-bg`, `--pp-surface`, `--pp-surface-2`, `--pp-ink`, `--pp-ink-muted`, `--pp-ink-faint`, `--pp-accent`, `--pp-on-accent`, `--pp-secondary`, `--pp-soft`, `--pp-highlight`, `--pp-line`, `--pp-inverse-bg`, `--pp-inverse-ink`.
- Fonts: `--pp-font-display` (brand headline font), `--pp-font-body` (Switzer). Never hardcode font families — six brands, six headline fonts, one body font.
- Space `--pp-space-1..8` (4→64px), radii `--pp-radius-sm/md/lg/pill`, motion `--pp-ease`, `--pp-dur-fast/dur/dur-draw`.

**Brand rules that shape layouts:** Electric Orchid (`--pp-accent`) is rationed — CTAs, highlights, micro-interactions only, roughly one or two per view; never flood a section with it. Dark statement moments use `ThroughLine`, not hand-built dark divs. The Eye Mark is the only logo mark used everywhere; never draw a literal butterfly. All motion (Iridescent Edge, Breath Bloom, vein draws) is built into `Button`, `Card bloom`, and the marks — don't re-implement it.

**Typography:** `Display`/`Heading` render the active brand's headline font automatically; `Text` is Switzer body; `Eyebrow` is the tracked-uppercase kicker. Headlines belong to components, not raw `<h1>`s.

**Where the truth lives:** read `styles.css` (tokens.css + themes.css + components.css concatenated — every token and `pp-*` class is defined there) and each component's `components/<group>/<Name>/<Name>.prompt.md` for its API and composed examples. `guidelines/brand/brand-guidelines.md` is the full brand system (palette ratios per brand, voice pillars, motion language) — consult it for content tone and color-balance judgment.
