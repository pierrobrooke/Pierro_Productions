---
category: Type
---

# Display

The editorial display headline. Renders in the active brand's headline font — Fraunces on the master brand, Bricolage Grotesque under Cotton Candy Revolt, Big Shoulders Display under Pole Class Pro, and so on — at a fluid clamp size. Use `xl` for hero titles, `lg` for page titles, `md` for major section titles.

```tsx
<Display size="xl">
  Clarissa <em>Pierro</em>
</Display>
```

Wrap a word in `<em>` for the italic accent used in brand layouts. For anything below section-title scale use `Heading`; for body copy use `Text`.
