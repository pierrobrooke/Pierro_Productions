import type { CSSProperties, ReactNode } from 'react';
import { Display, Eyebrow, Text } from './typography';

export interface PageHeaderProps {
  /** Tracked-uppercase kicker above the title, e.g. "Brand Universe". */
  eyebrow?: ReactNode;
  /** The page title; wrap a word in `<em>` for the italic accent. */
  title: ReactNode;
  /** Lede paragraph under the title. */
  tagline?: ReactNode;
  /** Extra content (buttons, lockup) below the tagline. */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Editorial page opener: eyebrow with leading rule, display title in the
 * brand headline font, muted lede, hairline bottom border. The header
 * pattern from the Brand Universe page.
 */
export function PageHeader({ eyebrow, title, tagline, children, className, style }: PageHeaderProps) {
  const cls = ['pp-page-header', className].filter(Boolean).join(' ');
  return (
    <header className={cls} style={style}>
      {eyebrow ? <Eyebrow rule>{eyebrow}</Eyebrow> : null}
      <Display size="xl">{title}</Display>
      {tagline ? (
        <Text size="lede" muted>
          {tagline}
        </Text>
      ) : null}
      {children}
    </header>
  );
}
