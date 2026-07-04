import { BrandProvider, ScatterToSolid } from '@pierro-productions/butterfly-system';

export const Mark = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
    <ScatterToSolid size={96} />
  </BrandProvider>
);

export const RevoltContext = () => (
  <BrandProvider brand="cotton-candy-revolt" style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
    <ScatterToSolid size={72} />
  </BrandProvider>
);
