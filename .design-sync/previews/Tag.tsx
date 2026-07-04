import { BrandProvider, Tag } from '@pierro-productions/butterfly-system';

export const Variants = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Tag>Goddess Quiz</Tag>
    <Tag variant="accent">In development</Tag>
    <Tag variant="outline">Workshops</Tag>
  </BrandProvider>
);

export const TagRow = () => (
  <BrandProvider style={{ padding: '2rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap', maxWidth: 420 }}>
    <Tag>Wealth Currency Game</Tag>
    <Tag>Notion Life Planner RPG</Tag>
    <Tag>Course System</Tag>
    <Tag>Said To Her: Vol. I</Tag>
  </BrandProvider>
);
