import type { CSSProperties } from 'react';
import { VeinKnot } from './marks';

export interface VeinLoaderProps {
  /** Mark size in px. @default 56 */
  size?: number;
  /** Tracked-uppercase status line under the mark, e.g. "Calibrating". */
  label?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Loading indicator built on the Vein Knot mark — wing-vein lines draw
 * toward the center and bloom Electric Orchid, on loop. Use for loading
 * and "thinking" states. Respects `prefers-reduced-motion`.
 */
export function VeinLoader({ size = 56, label, className, style }: VeinLoaderProps) {
  const cls = ['pp-vein-loader', className].filter(Boolean).join(' ');
  return (
    <div className={cls} style={style} role="status" aria-live="polite">
      <VeinKnot size={size} />
      {label ? <span className="pp-vein-loader__label">{label}</span> : null}
    </div>
  );
}
