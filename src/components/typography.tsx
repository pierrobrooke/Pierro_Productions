import type { CSSProperties, ElementType, ReactNode } from 'react';

interface TypoProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface DisplayProps extends TypoProps {
  /** Visual scale. @default 'lg' */
  size?: 'xl' | 'lg' | 'md';
  /** Rendered HTML element. @default 'h1' */
  as?: ElementType;
}

/**
 * Editorial display headline set in the active brand's headline font
 * (Fraunces for the master brand; each sub-brand swaps its own in via
 * `BrandProvider`). Use for page titles and hero statements. Wrap a word in
 * `<em>` for the italic accent seen in brand layouts.
 */
export function Display({ size = 'lg', as: Tag = 'h1', children, className, style }: DisplayProps) {
  return (
    <Tag className={`pp-display pp-display--${size}${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </Tag>
  );
}

export interface HeadingProps extends TypoProps {
  /** Visual scale. @default 'md' */
  size?: 'lg' | 'md' | 'sm';
  /** Rendered HTML element. @default 'h2' */
  as?: ElementType;
}

/**
 * Section heading in the brand headline font — smaller than `Display`.
 * Use for card titles and section titles.
 */
export function Heading({ size = 'md', as: Tag = 'h2', children, className, style }: HeadingProps) {
  return (
    <Tag className={`pp-heading pp-heading--${size}${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </Tag>
  );
}

export interface EyebrowProps extends TypoProps {
  /** Draw a short leading rule before the text. @default false */
  rule?: boolean;
  /** Use the brand accent color instead of muted ink. @default false */
  accent?: boolean;
  /** Rendered HTML element. @default 'p' */
  as?: ElementType;
}

/**
 * Tracked-uppercase kicker label (the brand's signature "tracked Switzer"
 * treatment). Sits above a `Display` or marks a metadata line.
 */
export function Eyebrow({ rule = false, accent = false, as: Tag = 'p', children, className, style }: EyebrowProps) {
  const cls = ['pp-eyebrow', rule && 'pp-eyebrow--rule', accent && 'pp-eyebrow--accent', className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag className={cls} style={style}>
      {children}
    </Tag>
  );
}

export interface TextProps extends TypoProps {
  /** Body scale; `lede` is the larger intro-paragraph style. @default 'md' */
  size?: 'lede' | 'md' | 'sm';
  /** Muted ink color for secondary copy. @default false */
  muted?: boolean;
  /** Rendered HTML element. @default 'p' */
  as?: ElementType;
}

/**
 * Body copy in Switzer — the system-wide body font shared by every brand.
 * `size="lede"` renders the larger editorial intro paragraph.
 */
export function Text({ size = 'md', muted = false, as: Tag = 'p', children, className, style }: TextProps) {
  const cls = ['pp-text', `pp-text--${size}`, muted && 'pp-text--muted', className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} style={style}>
      {children}
    </Tag>
  );
}
