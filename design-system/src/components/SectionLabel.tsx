import type { CSSProperties, ReactNode } from 'react';

export interface SectionLabelProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Tracked-uppercase section divider with a full-width hairline underneath —
 * the "Five Projects" pattern from the Brand Universe page. Place above a
 * list or grid to name the section.
 */
export function SectionLabel({ children, className, style }: SectionLabelProps) {
  const cls = ['pp-section-label', className].filter(Boolean).join(' ');
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
}
