---
category: Actions
---

# Button

The system button. `primary` is the Electric Orchid CTA (orchid is rationed to ~10% of any layout — CTAs, micro-interactions, highlights — so one or two per view); `secondary` is the outlined editorial button; `ghost` is quiet/inline. Hovering primary or secondary reveals the **Iridescent Edge** — the moving pink-to-green reflective border from the motion language — plus the Breath Bloom scale-and-settle.

```tsx
<Button>Begin the work</Button>
<Button variant="secondary">See the method</Button>
<Button variant="ghost" size="sm">Skip</Button>
<Button href="/join" size="lg">Join the waitlist</Button>
```

`href` renders an anchor styled identically. All motion drops out under `prefers-reduced-motion`.
