import type { CSSProperties } from 'react';
import { BRANDS, type BrandName } from '../brands';
import { useBrand } from './BrandProvider';

export interface LockupProps {
  /**
   * Which brand's lockup to render. Defaults to the brand set by the nearest
   * `BrandProvider`.
   */
  brand?: BrandName;
  /** Lockup scale. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Lay the two words on one baseline instead of stacked. @default false */
  row?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * The logo lockup formula, rendered live: the brand's key word set in its own
 * headline font over the remaining word(s) in tracked-uppercase Switzer —
 * e.g. PIERRO / PRODUCTIONS, COTTON CANDY / REVOLT. Use in headers, footers,
 * and anywhere the wordmark appears; vector artwork is pending, so this IS
 * the current logo.
 */
export function Lockup({ brand, size = 'md', row = false, className, style }: LockupProps) {
  const contextBrand = useBrand();
  const info = BRANDS[brand ?? contextBrand];
  const cls = ['pp-lockup', `pp-lockup--${size}`, row && 'pp-lockup--row', className].filter(Boolean).join(' ');
  return (
    <span className={cls} style={style} data-brand={brand} aria-label={info.name}>
      <span className="pp-lockup__display">{info.displayWord}</span>
      <span className="pp-lockup__tracked">{info.trackedWord}</span>
    </span>
  );
}
