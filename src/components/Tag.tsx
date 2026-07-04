import type { CSSProperties, ReactNode } from 'react';

export interface TagProps {
  /**
   * `neutral` is the quiet metadata chip; `accent` is the small uppercase
   * brand pill (Electric Orchid); `outline` is hairline-bordered.
   * @default 'neutral'
   */
  variant?: 'neutral' | 'accent' | 'outline';
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Small label chip for metadata, offerings, and statuses — the "brand-tags"
 * pattern from the umbrella page (e.g. "Goddess Quiz", "Said To Her: Vol. I").
 * Use `variant="accent"` for the tiny uppercase brand pill.
 */
export function Tag({ variant = 'neutral', children, className, style }: TagProps) {
  const cls = ['pp-tag', variant !== 'neutral' && `pp-tag--${variant}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} style={style}>
      {children}
    </span>
  );
}
