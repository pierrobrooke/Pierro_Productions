import type { CSSProperties } from 'react';

interface MarkProps {
  /** Rendered width/height in px. @default 48 */
  size?: number;
  className?: string;
  style?: CSSProperties;
}

function markStyle(size: number, style?: CSSProperties): CSSProperties {
  return { width: size, height: size, ...style };
}

/**
 * The primary Pierro Productions mark — the butterfly eyespot distilled to
 * concentric rings: a faint outer boundary, a slowly rotating dotted Forest
 * Shade ring, a Veiled Rose ring, and a pulsing Electric Orchid core. Used
 * everywhere: favicon, app icon, social avatar, header mark, all brands.
 * Respects `prefers-reduced-motion` (drops to static).
 */
export function EyeMark({ size = 48, className, style }: MarkProps) {
  return (
    <span className={`pp-mark pp-mark-eye${className ? ` ${className}` : ''}`} style={markStyle(size, style)}>
      <svg viewBox="0 0 100 100" role="img" aria-label="Pierro Productions mark">
        <circle cx="50" cy="50" r="44" fill="none" stroke="var(--pp-porcelain)" strokeWidth="1" opacity="0.25" />
        <g className="pp-eye-rotate">
          <circle cx="50" cy="50" r="34" fill="none" stroke="var(--pp-forest)" strokeWidth="7" strokeDasharray="1 7" strokeLinecap="round" />
        </g>
        <circle cx="50" cy="50" r="20" fill="var(--pp-rose)" />
        <circle cx="50" cy="50" r="9" fill="var(--pp-orchid)" className="pp-eye-core" />
      </svg>
    </span>
  );
}

/**
 * Accent mark for Web Development & Design — wing-vein lines converge, then
 * an Electric Orchid bloom at the meeting point. Use for loading states,
 * section dividers, and technical contexts. Respects `prefers-reduced-motion`.
 */
export function VeinKnot({ size = 48, className, style }: MarkProps) {
  return (
    <span className={`pp-mark pp-mark-vein${className ? ` ${className}` : ''}`} style={markStyle(size, style)}>
      <svg viewBox="0 0 100 100" role="img" aria-label="Vein Knot mark">
        <path className="pp-vein-line" d="M10,15 Q40,28 50,50" pathLength={1} />
        <path className="pp-vein-line" d="M90,18 Q62,32 50,50" pathLength={1} />
        <path className="pp-vein-line" d="M50,95 Q50,72 50,50" pathLength={1} />
        <circle cx="44" cy="45" r="1.6" fill="var(--pp-forest)" opacity=".8" />
        <circle cx="57" cy="43" r="1.3" fill="var(--pp-forest)" opacity=".6" />
        <circle cx="50" cy="50" r="0" fill="var(--pp-orchid)" className="pp-vein-bloom" />
      </svg>
    </span>
  );
}

/**
 * Accent mark for Zensual Mastery — the seam where the wing's two textures
 * meet, always slowly turning. Use as an ambient corner mark or during page
 * transitions. Respects `prefers-reduced-motion`.
 */
export function ConvergenceDot({ size = 48, className, style }: MarkProps) {
  const clipId = 'ppConvLeft';
  return (
    <span className={`pp-mark pp-mark-conv${className ? ` ${className}` : ''}`} style={markStyle(size, style)}>
      <svg viewBox="0 0 100 100" role="img" aria-label="Convergence Dot mark">
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width="50" height="100" />
          </clipPath>
        </defs>
        <g className="pp-conv-spin">
          <circle cx="50" cy="50" r="36" fill="var(--pp-orchid)" />
          <g clipPath={`url(#${clipId})`}>
            <circle cx="50" cy="50" r="36" fill="var(--pp-gunpowder)" />
            <circle cx="30" cy="36" r="2" fill="var(--pp-forest)" />
            <circle cx="22" cy="48" r="1.6" fill="var(--pp-forest)" />
            <circle cx="34" cy="58" r="1.8" fill="var(--pp-forest)" />
            <circle cx="26" cy="66" r="1.4" fill="var(--pp-forest)" />
            <circle cx="36" cy="42" r="1.3" fill="var(--pp-forest)" />
          </g>
          <line x1="50" y1="14" x2="50" y2="86" stroke="var(--pp-porcelain)" strokeWidth="1" opacity=".35" />
        </g>
      </svg>
    </span>
  );
}

/**
 * Accent mark for Cotton Candy Revolt — scattered dots breathe toward a solid
 * Electric Orchid core. Designed as a hover/active state on cards and CTAs
 * rather than a static logo. Respects `prefers-reduced-motion`.
 */
export function ScatterToSolid({ size = 48, className, style }: MarkProps) {
  return (
    <span className={`pp-mark pp-mark-scatter${className ? ` ${className}` : ''}`} style={markStyle(size, style)}>
      <svg viewBox="0 0 100 100" role="img" aria-label="Scatter to Solid mark">
        <circle cx="50" cy="50" r="11" fill="var(--pp-orchid)" className="pp-scatter-core" />
        <circle cx="50" cy="22" r="2.2" fill="var(--pp-gunpowder)" className="pp-scatter-dot" style={{ animationDelay: '0s' }} />
        <circle cx="74" cy="34" r="1.8" fill="var(--pp-forest)" className="pp-scatter-dot" style={{ animationDelay: '.3s' }} />
        <circle cx="78" cy="62" r="2" fill="var(--pp-gunpowder)" className="pp-scatter-dot" style={{ animationDelay: '.6s' }} />
        <circle cx="58" cy="80" r="1.6" fill="var(--pp-forest)" className="pp-scatter-dot" style={{ animationDelay: '.9s' }} />
        <circle cx="30" cy="76" r="2" fill="var(--pp-gunpowder)" className="pp-scatter-dot" style={{ animationDelay: '1.2s' }} />
        <circle cx="20" cy="50" r="1.8" fill="var(--pp-forest)" className="pp-scatter-dot" style={{ animationDelay: '1.5s' }} />
        <circle cx="28" cy="26" r="1.6" fill="var(--pp-gunpowder)" className="pp-scatter-dot" style={{ animationDelay: '1.8s' }} />
      </svg>
    </span>
  );
}
