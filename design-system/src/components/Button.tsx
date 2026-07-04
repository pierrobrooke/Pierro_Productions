import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual weight. `primary` is the Electric Orchid CTA; `secondary` is the
   * outlined editorial button; `ghost` is quiet/inline. @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Render as a link. When set, an `<a>` is rendered instead of `<button>`. */
  href?: string;
  children?: ReactNode;
}

/**
 * The system button. Hovering a primary or secondary button reveals the
 * Iridescent Edge — the brand's moving pink-to-green reflective border — and
 * the Breath Bloom scale-and-settle. CTAs are Electric Orchid by rule
 * (10% usage: CTAs, micro-interactions, highlights). Respects
 * `prefers-reduced-motion`.
 */
export function Button({ variant = 'primary', size = 'md', href, children, className, ...rest }: ButtonProps) {
  const cls = ['pp-btn', `pp-btn--${variant}`, `pp-btn--${size}`, className].filter(Boolean).join(' ');
  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
