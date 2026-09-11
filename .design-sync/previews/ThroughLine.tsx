import { BrandProvider, ThroughLine } from '@pierro-productions/butterfly-system';

export const Statement = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <ThroughLine
      title="i feel your frequency."
      usp={'"I help people recognize they’ve always been exactly who they were meant to become."'}
    >
      Not mindset. Not motivation. Frequency — the energetic signature you're broadcasting
      that's either calling in your best life or quietly blocking it. Every brand below is a
      different door into that same truth.
    </ThroughLine>
  </BrandProvider>
);

export const NoMark = () => (
  <BrandProvider style={{ padding: '2rem' }}>
    <ThroughLine title="Curated transformation." mark={false}>
      Soft and powerful. Organic and editorial. Feminine and controlled.
    </ThroughLine>
  </BrandProvider>
);
