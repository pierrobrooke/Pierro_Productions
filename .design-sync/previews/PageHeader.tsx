import { BrandProvider, Button, PageHeader } from '@pierro-productions/butterfly-system';

export const BrandUniverse = () => (
  <BrandProvider style={{ padding: '0 2rem 2rem' }}>
    <PageHeader
      eyebrow="Brand Universe"
      title={
        <>
          Clarissa <em>Pierro</em>
        </>
      }
      tagline="The through line of all of it. Five distinct worlds, one source — a consciousness guide, founder, and creator who spent 24 years building and finally set the blueprint on fire."
    />
  </BrandProvider>
);

export const WithActions = () => (
  <BrandProvider brand="frequency-blueprint" style={{ padding: '0 2rem 2rem' }}>
    <PageHeader
      eyebrow="The Frequency Blueprint"
      title="A practice, not a theory"
      tagline="Daily frequency calibration for people who already feel the pull to evolve."
    >
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button>Start calibrating</Button>
        <Button variant="ghost">Read the method</Button>
      </div>
    </PageHeader>
  </BrandProvider>
);

export const DarkBrand = () => (
  <BrandProvider brand="web-design" style={{ padding: '0 2rem 2rem' }}>
    <PageHeader
      eyebrow="Web Development & Design"
      title="Identity into experience"
      tagline="The most B2B-credible room in the house, still unmistakably the same house."
    />
  </BrandProvider>
);
