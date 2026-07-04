---
category: Brand
---

# Lockup

The live logo lockup — the brand's key word in its own headline font stacked over the remaining word(s) in tracked-uppercase Switzer. Vector logo artwork is still pending, so this component IS the current wordmark. Use it in navigation headers, footers, and covers.

```tsx
<Lockup />                       {/* PIERRO / PRODUCTIONS, from context */}
<Lockup brand="cotton-candy-revolt" size="lg" />
<Lockup brand="pole-class-pro" row />   {/* one-line variant */}
```

Defaults to the brand set by the nearest `BrandProvider`. Passing `brand` explicitly also switches the lockup's headline font to that brand's — correct when naming a sibling brand inside another brand's page.
