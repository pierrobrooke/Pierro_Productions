import { BrandProvider, Button, Card, Eyebrow, Heading, Tag, Text } from '@pierro-productions/butterfly-system';

export const Composed = () => (
  <BrandProvider style={{ padding: '2rem', maxWidth: 420 }}>
    <Card>
      <Eyebrow accent>Offering</Eyebrow>
      <Heading size="md" style={{ margin: '0.5rem 0' }}>
        Frequency calibration
      </Heading>
      <Text size="sm" muted style={{ marginBottom: '1rem' }}>
        Daily practice, not theory — built for people who already feel the pull to evolve.
      </Text>
      <Button size="sm">Start today</Button>
    </Card>
  </BrandProvider>
);

export const BloomHover = () => (
  <BrandProvider style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
    <Card bloom>
      <Heading size="sm">Zensual Mastery</Heading>
      <Text size="sm" muted>
        Hover: Breath Bloom + Iridescent Edge.
      </Text>
    </Card>
    <Card bloom>
      <Heading size="sm">Pole Class Pro</Heading>
      <Text size="sm" muted>
        Hover: Breath Bloom + Iridescent Edge.
      </Text>
    </Card>
  </BrandProvider>
);

export const OnDarkBrand = () => (
  <BrandProvider brand="web-design" style={{ padding: '2rem', maxWidth: 420 }}>
    <Card>
      <Eyebrow accent>Case study</Eyebrow>
      <Heading size="md" style={{ margin: '0.5rem 0' }}>
        Identity into experience
      </Heading>
      <Text size="sm" muted>
        Dark-forward, B2B-credible — still unmistakably the same house.
      </Text>
    </Card>
  </BrandProvider>
);

export const WithTags = () => (
  <BrandProvider style={{ padding: '2rem', maxWidth: 420 }}>
    <Card>
      <Heading size="sm">Cotton Candy Revolt</Heading>
      <Text size="sm" muted style={{ margin: '0.4rem 0 0.8rem' }}>
        Sweet on the surface, talking back underneath.
      </Text>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        <Tag>Looks Sweet, Bites Back</Tag>
        <Tag variant="outline">Digital art</Tag>
      </div>
    </Card>
  </BrandProvider>
);
