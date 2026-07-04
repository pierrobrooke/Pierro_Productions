/** The six brands of the Pierro Productions umbrella. */
export type BrandName =
  | 'pierro'
  | 'cotton-candy-revolt'
  | 'frequency-blueprint'
  | 'zensual-mastery'
  | 'pole-class-pro'
  | 'web-design';

export interface BrandInfo {
  /** Full display name, e.g. "Cotton Candy Revolt". */
  name: string;
  /** Lockup line 1 — set in the brand's own headline font. */
  displayWord: string;
  /** Lockup line 2 — tracked uppercase Switzer. */
  trackedWord: string;
  /** One-line brand voice. */
  voiceLine: string;
  /** True for brands whose theme is dark (porcelain text on gunpowder). */
  dark: boolean;
}

/** Brand metadata for all six brands, keyed by `BrandName`. */
export const BRANDS: Record<BrandName, BrandInfo> = {
  pierro: {
    name: 'Pierro Productions',
    displayWord: 'Pierro',
    trackedWord: 'Productions',
    voiceLine: 'Curated transformation.',
    dark: false,
  },
  'cotton-candy-revolt': {
    name: 'Cotton Candy Revolt',
    displayWord: 'Cotton Candy',
    trackedWord: 'Revolt',
    voiceLine: 'Sweet on the surface, talking back underneath.',
    dark: false,
  },
  'frequency-blueprint': {
    name: 'The Frequency Blueprint',
    displayWord: 'The Frequency',
    trackedWord: 'Blueprint',
    voiceLine: 'A practice for people who already feel the pull to evolve.',
    dark: false,
  },
  'zensual-mastery': {
    name: 'Zensual Mastery',
    displayWord: 'Zensual',
    trackedWord: 'Mastery',
    voiceLine: 'Intimacy, held with sophistication rather than softness alone.',
    dark: false,
  },
  'pole-class-pro': {
    name: 'Pole Class Pro',
    displayWord: 'Pole Class',
    trackedWord: 'Pro',
    voiceLine: 'Strength and visible movement, no apology for either.',
    dark: true,
  },
  'web-design': {
    name: 'Web Development & Design',
    displayWord: 'Web Development',
    trackedWord: '& Design',
    voiceLine: 'The most B2B-credible room in the house, still unmistakably the same house.',
    dark: true,
  },
};
