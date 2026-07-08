import { BrandProvider, BrandCard, SectionLabel } from '@pierro-productions/butterfly-system';

export const Label = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <SectionLabel>Five Projects</SectionLabel>
  </BrandProvider>
);

export const AboveList = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <SectionLabel>Five Projects</SectionLabel>
    <BrandCard
      number="01"
      name="PoleClass Pro"
      description="Pole fitness education platform for instructors and studios."
      href="#"
    />
  </BrandProvider>
);
