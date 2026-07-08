import { BrandProvider, Eyebrow } from '@pierro-productions/butterfly-system';

export const Default = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <Eyebrow>Brand Universe</Eyebrow>
  </BrandProvider>
);

export const WithRule = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <Eyebrow rule>Five Projects</Eyebrow>
  </BrandProvider>
);

export const Accent = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <Eyebrow accent>In development</Eyebrow>
  </BrandProvider>
);
