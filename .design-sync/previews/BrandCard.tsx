import { BrandProvider, BrandCard } from '@pierro-productions/butterfly-system';

export const PortfolioRow = () => (
  <BrandProvider style={{ padding: '1.5rem' }}>
    <BrandCard
      number="02"
      name="Zensual Mastery"
      pill="Separate project"
      description="The embodiment arm — where frequency becomes a daily, physical, undeniable practice. Proprietary methodology, digital lessons, and movement resources."
      tags={['Proprietary methodology', 'Goddess Quiz']}
      href="#"
    />
  </BrandProvider>
);

export const StackedList = () => (
  <BrandProvider style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
    <BrandCard
      number="01"
      name="PoleClass Pro"
      description="Pole fitness education platform — professional-grade instruction and curriculum for instructors and studios."
      href="#"
    />
    <BrandCard
      number="04"
      name="Cotton Candy Revolt"
      pill="In development"
      description="Sarcastic clapbacks at misogyny — digital art for women handed a script they never agreed to."
      tags={['Looks Sweet, Bites Back', 'Said To Her: Vol. I']}
      href="#"
    />
  </BrandProvider>
);

export const Minimal = () => (
  <BrandProvider style={{ padding: '1.5rem' }}>
    <BrandCard name="The Frequency Blueprint" description="Daily frequency calibration, not theory." />
  </BrandProvider>
);
