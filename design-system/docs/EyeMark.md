---
category: Brand
---

# EyeMark

The primary Pierro Productions mark, shared by every brand: the butterfly eyespot distilled to concentric rings — faint porcelain boundary, slowly rotating dotted Forest Shade ring, Veiled Rose ring, pulsing Electric Orchid core. Use it wherever a logo mark is needed: header corner, favicon-scale, avatar, empty states.

```tsx
<EyeMark />              {/* 48px default */}
<EyeMark size={24} />    {/* works down to favicon size */}
<EyeMark size={96} />
```

Animation (36s ring rotation, 3.2s core pulse) drops to static under `prefers-reduced-motion`. Never use a literal butterfly icon anywhere — abstraction only, per the brand brief.
