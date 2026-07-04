import { BrandProvider, Display } from '@pierro-productions/butterfly-system';

export const Hero = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <Display size="xl">
      Clarissa <em>Pierro</em>
    </Display>
  </BrandProvider>
);

export const SizeScale = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <Display size="xl">Curated transformation</Display>
    <Display size="lg">Curated transformation</Display>
    <Display size="md">Curated transformation</Display>
  </BrandProvider>
);

export const PerBrandHeadlines = () => (
  <div style={{ display: 'grid', gap: 2 }}>
    <BrandProvider brand="cotton-candy-revolt" style={{ padding: '1.25rem 2rem' }}>
      <Display size="md">Looks sweet, bites back</Display>
    </BrandProvider>
    <BrandProvider brand="zensual-mastery" style={{ padding: '1.25rem 2rem' }}>
      <Display size="md">Intimacy, held with sophistication</Display>
    </BrandProvider>
    <BrandProvider brand="pole-class-pro" style={{ padding: '1.25rem 2rem' }}>
      <Display size="md">Strength, no apology</Display>
    </BrandProvider>
  </div>
);
