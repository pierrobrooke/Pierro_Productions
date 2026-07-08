import { BrandProvider, EyeMark, Eyebrow } from '@pierro-productions/butterfly-system';

export const Primary = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
    <EyeMark size={96} />
  </BrandProvider>
);

export const Sizes = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
    <EyeMark size={24} />
    <EyeMark size={48} />
    <EyeMark size={96} />
  </BrandProvider>
);

export const OnDark = () => (
  <BrandProvider brand="pole-class-pro" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <EyeMark size={48} />
    <Eyebrow>Pole Class Pro</Eyebrow>
  </BrandProvider>
);
