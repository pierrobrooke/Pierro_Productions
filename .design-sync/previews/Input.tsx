import { BrandProvider, Input } from '@pierro-productions/butterfly-system';

export const States = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 420 }}>
    <Input placeholder="you@example.com" />
    <Input defaultValue="Clarissa Pierro" />
    <Input error defaultValue="Velvet Room" />
    <Input disabled placeholder="Disabled" />
  </BrandProvider>
);

export const OnDarkBrand = () => (
  <BrandProvider brand="pole-class-pro" style={{ padding: '2rem', maxWidth: 420 }}>
    <Input placeholder="Search classes" />
  </BrandProvider>
);
