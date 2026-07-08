import type { CSSProperties, ReactNode } from 'react';
import { Tag } from './Tag';

export interface BrandCardProps {
  /** Index label, e.g. "01". */
  number?: string;
  /** Card title (headline font). */
  name: ReactNode;
  /** Small status pill next to the name, e.g. "In development". */
  pill?: ReactNode;
  /** One- or two-line description. */
  description?: ReactNode;
  /** Metadata chips under the description. */
  tags?: ReactNode[];
  /** Link target; renders the card as an anchor. */
  href?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * The numbered portfolio card from the Brand Universe page: index number,
 * name with status pill, description, metadata tags, and a hover arrow.
 * Use for listing sub-brands, projects, or offerings.
 */
export function BrandCard({ number, name, pill, description, tags, href, className, style }: BrandCardProps) {
  const cls = ['pp-brand-card', className].filter(Boolean).join(' ');
  const body = (
    <>
      <div className="pp-brand-card__number">{number}</div>
      <div>
        <div className="pp-brand-card__name">
          {name}
          {pill ? <Tag variant="accent">{pill}</Tag> : null}
        </div>
        {description ? <p className="pp-brand-card__desc">{description}</p> : null}
        {tags && tags.length > 0 ? (
          <div className="pp-brand-card__tags">
            {tags.map((t, i) => (
              <Tag key={i}>{t}</Tag>
            ))}
          </div>
        ) : null}
      </div>
      <div className="pp-brand-card__arrow" aria-hidden>
        →
      </div>
    </>
  );
  if (href) {
    return (
      <a className={cls} style={style} href={href}>
        {body}
      </a>
    );
  }
  return (
    <div className={cls} style={style}>
      {body}
    </div>
  );
}
