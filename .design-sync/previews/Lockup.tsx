import { BrandProvider, Lockup } from '@pierro-productions/butterfly-system';

export const Master = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <Lockup size="lg" />
  </BrandProvider>
);

export const AllSixLockups = () => (
  <BrandProvider style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
    <Lockup brand="pierro" />
    <Lockup brand="cotton-candy-revolt" />
    <Lockup brand="frequency-blueprint" />
    <Lockup brand="zensual-mastery" />
    <Lockup brand="pole-class-pro" />
    <Lockup brand="web-design" />
  </BrandProvider>
);

export const RowAndSizes = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
    <Lockup size="sm" />
    <Lockup size="md" />
    <Lockup row size="md" />
  </BrandProvider>
);
