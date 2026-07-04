---
category: Forms
---

# Input

Single-line text input on the brand surface — hairline border, 10px radius, Electric Orchid focus ring. Wrap in `Field` for label + hint/error; set `error` on both for the invalid state.

```tsx
<Field label="Email" htmlFor="email" hint="For the waitlist only — no noise.">
  <Input id="email" type="email" placeholder="you@example.com" />
</Field>
```
