---
category: Brand
---

# BrandProvider

The root wrapper for every page built with the Butterfly System. It applies the active brand's theme — the five-color palette remixed to that brand's ratios, the brand's headline font, and the page background/ink — via CSS custom properties. Components inside read everything from it.

Always wrap your page in one:

```tsx
<BrandProvider brand="pierro">
  <PageHeader title="Curated transformation" />
</BrandProvider>
```

Brands: `pierro` (master, warm porcelain), `cotton-candy-revolt` (rose + orchid, Bricolage Grotesque), `frequency-blueprint` (sage + porcelain, Fraunces), `zensual-mastery` (rose-led, Cormorant), `pole-class-pro` (dark, Big Shoulders Display), `web-design` (dark, Space Grotesk).

Providers nest — a dark `pole-class-pro` section can sit inside a `pierro` page:

```tsx
<BrandProvider brand="pierro">
  <PageHeader title="The umbrella" />
  <BrandProvider brand="pole-class-pro" style={{ padding: '2rem', borderRadius: 16 }}>
    <Heading>Pole Class Pro</Heading>
  </BrandProvider>
</BrandProvider>
```

`useBrand()` returns the active brand name inside a provider.
