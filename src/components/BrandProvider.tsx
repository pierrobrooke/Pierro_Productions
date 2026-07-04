import { createContext, useContext, type CSSProperties, type ReactNode } from 'react';
import type { BrandName } from '../brands';

const BrandContext = createContext<BrandName>('pierro');

/** Returns the active brand set by the nearest `BrandProvider` (default `'pierro'`). */
export function useBrand(): BrandName {
  return useContext(BrandContext);
}

export interface BrandProviderProps {
  /** Which brand's theme to apply. Defaults to the master brand, `'pierro'`. */
  brand?: BrandName;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Root wrapper that applies a brand's theme — colors, headline font, and body
 * background — to everything inside it. Wrap every page (or brand-scoped
 * section) in one; components read their colors and fonts from it. Themes can
 * nest: a `pole-class-pro` section can sit inside a `pierro` page.
 */
export function BrandProvider({ brand = 'pierro', children, className, style }: BrandProviderProps) {
  return (
    <BrandContext.Provider value={brand}>
      <div className={`pp-root${className ? ` ${className}` : ''}`} data-brand={brand} style={style}>
        {children}
      </div>
    </BrandContext.Provider>
  );
}
