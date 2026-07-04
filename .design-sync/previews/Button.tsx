import { BrandProvider, Button } from '@pierro-productions/butterfly-system';

export const Variants = () => (
  <BrandProvider style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button>Begin the work</Button>
    <Button variant="secondary">See the method</Button>
    <Button variant="ghost">Skip for now</Button>
  </BrandProvider>
);

export const Sizes = () => (
  <BrandProvider style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Join the waitlist</Button>
  </BrandProvider>
);

export const Disabled = () => (
  <BrandProvider style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Button disabled>Begin the work</Button>
    <Button variant="secondary" disabled>See the method</Button>
  </BrandProvider>
);

export const OnDarkBrand = () => (
  <BrandProvider brand="pole-class-pro" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Button>Book a class</Button>
    <Button variant="secondary">Instructor login</Button>
  </BrandProvider>
);
