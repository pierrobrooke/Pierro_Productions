import { BrandProvider, VeinLoader } from '@pierro-productions/butterfly-system';

/* Freeze the draw loop at its fully-drawn frame so the static card shows the
   mark; live usage animates (450ms draw → orchid bloom, 4.4s loop). */
const FreezeAtDrawn = () => (
  <style>{`.pp-mark-vein * { animation-play-state: paused !important; animation-delay: -1.9s !important; }`}</style>
);

export const WithLabel = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
    <FreezeAtDrawn />
    <VeinLoader label="Calibrating" />
  </BrandProvider>
);

export const Bare = () => (
  <BrandProvider brand="web-design" style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
    <FreezeAtDrawn />
    <VeinLoader size={48} />
  </BrandProvider>
);
