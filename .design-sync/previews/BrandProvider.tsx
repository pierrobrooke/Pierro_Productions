import { BrandProvider, Eyebrow, Heading, Text } from '@pierro-productions/butterfly-system';

const Swatch = ({ label }: { label: string }) => (
  <div style={{ padding: '1.25rem 1.5rem' }}>
    <Eyebrow accent>{label}</Eyebrow>
    <Heading size="md" style={{ margin: '0.4rem 0' }}>
      Curated transformation
    </Heading>
    <Text size="sm" muted>
      Body copy stays Switzer in every brand; the headline font and palette shift.
    </Text>
  </div>
);

export const MasterBrand = () => (
  <BrandProvider brand="pierro">
    <Swatch label="Pierro Productions" />
  </BrandProvider>
);

export const AllSixBrands = () => (
  <div style={{ display: 'grid', gap: 2 }}>
    <BrandProvider brand="pierro">
      <Swatch label="Pierro Productions" />
    </BrandProvider>
    <BrandProvider brand="cotton-candy-revolt">
      <Swatch label="Cotton Candy Revolt" />
    </BrandProvider>
    <BrandProvider brand="frequency-blueprint">
      <Swatch label="The Frequency Blueprint" />
    </BrandProvider>
    <BrandProvider brand="zensual-mastery">
      <Swatch label="Zensual Mastery" />
    </BrandProvider>
    <BrandProvider brand="pole-class-pro">
      <Swatch label="Pole Class Pro" />
    </BrandProvider>
    <BrandProvider brand="web-design">
      <Swatch label="Web Development & Design" />
    </BrandProvider>
  </div>
);

export const NestedBrands = () => (
  <BrandProvider brand="pierro" style={{ padding: '1.5rem' }}>
    <Eyebrow rule>The umbrella</Eyebrow>
    <Text size="sm" muted style={{ margin: '0.5rem 0 1rem' }}>
      A dark sub-brand section nested inside the master page:
    </Text>
    <BrandProvider brand="pole-class-pro" style={{ padding: '1.25rem 1.5rem', borderRadius: 16 }}>
      <Swatch label="Pole Class Pro" />
    </BrandProvider>
  </BrandProvider>
);
