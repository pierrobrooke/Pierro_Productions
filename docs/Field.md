---
category: Forms
---

# Field

Form field wrapper: tracked-uppercase label, the control (usually `Input`), and a hint or error line. `error` replaces the hint and colors it Electric Orchid — set `error` on the `Input` too so the border matches.

```tsx
<Field label="Studio name" htmlFor="studio" error="This name is already taken.">
  <Input id="studio" error defaultValue="Velvet Room" />
</Field>
```
