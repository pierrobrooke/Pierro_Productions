import { BrandProvider, Heading } from '@pierro-productions/butterfly-system';

export const Sizes = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Heading size="lg">The embodiment arm</Heading>
    <Heading size="md">The embodiment arm</Heading>
    <Heading size="sm" as="h3">
      The embodiment arm
    </Heading>
  </BrandProvider>
);

export const InContext = () => (
  <BrandProvider brand="frequency-blueprint" style={{ padding: '2rem' }}>
    <Heading size="lg">Daily frequency calibration</Heading>
  </BrandProvider>
);
