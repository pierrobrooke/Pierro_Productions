import { BrandProvider, ConvergenceDot } from '@pierro-productions/butterfly-system';

export const Mark = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
    <ConvergenceDot size={96} />
  </BrandProvider>
);

export const AmbientCorner = () => (
  <BrandProvider brand="zensual-mastery" style={{ padding: '2rem', position: 'relative', minHeight: 140 }}>
    <ConvergenceDot size={40} style={{ position: 'absolute', top: '1rem', right: '1rem' }} />
  </BrandProvider>
);
