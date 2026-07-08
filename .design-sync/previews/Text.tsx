import { BrandProvider, Text } from '@pierro-productions/butterfly-system';

export const Lede = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <Text size="lede" muted>
      The through line of all of it. Five distinct worlds, one source — a consciousness guide,
      founder, and creator who spent 24 years building and finally set the blueprint on fire.
    </Text>
  </BrandProvider>
);

export const Scale = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 560 }}>
    <Text size="lede">Not mindset. Not motivation. Frequency.</Text>
    <Text>
      Every brand below is a different door into that same truth — the energetic signature
      you're broadcasting that's either calling in your best life or quietly blocking it.
    </Text>
    <Text size="sm" muted>
      Body copy is Switzer in every brand, no exceptions.
    </Text>
  </BrandProvider>
);
