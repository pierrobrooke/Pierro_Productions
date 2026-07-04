import type { CSSProperties, ReactNode } from 'react';

export interface CardProps {
  /** Enable the Breath Bloom hover (scale to 1.02 with the Iridescent Edge). @default false */
  bloom?: boolean;
  /** Remove the default padding (for image-led or custom layouts). @default false */
  flush?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * The base surface card — soft-tinted background, hairline border, 14px
 * radius. Set `bloom` on interactive cards to get the brand hover motion
 * (Breath Bloom + Iridescent Edge). Respects `prefers-reduced-motion`.
 */
export function Card({ bloom = false, flush = false, children, className, style }: CardProps) {
  const cls = ['pp-card', bloom && 'pp-card--bloom', flush && 'pp-card--flush', className].filter(Boolean).join(' ');
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
}
