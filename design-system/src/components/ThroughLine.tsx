import type { CSSProperties, ReactNode } from 'react';
import { EyeMark } from './marks';

export interface ThroughLineProps {
  /** The statement headline, set in the brand headline font. */
  title: ReactNode;
  /** Supporting paragraph. */
  children?: ReactNode;
  /** Italic signature line under a hairline rule, e.g. a quote or USP. */
  usp?: ReactNode;
  /** Show the Eye Mark faintly in the corner. @default true */
  mark?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * The dark editorial statement panel ("i feel your frequency.")
 * — Gunpowder ground, Warm Porcelain text, optional italic USP line and a
 * faint Eye Mark in the corner. Use once per page for the anchoring
 * statement, not as a general container.
 */
export function ThroughLine({ title, children, usp, mark = true, className, style }: ThroughLineProps) {
  const cls = ['pp-through-line', className].filter(Boolean).join(' ');
  return (
    <section className={cls} style={style}>
      {mark ? (
        <span className="pp-through-line__mark">
          <EyeMark size={64} />
        </span>
      ) : null}
      <h2 className="pp-through-line__title">{title}</h2>
      {children ? <p className="pp-through-line__body">{children}</p> : null}
      {usp ? <p className="pp-through-line__usp">{usp}</p> : null}
    </section>
  );
}
