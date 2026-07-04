import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Render the error border state. @default false */
  error?: boolean;
}

/**
 * Single-line text input on the brand surface — hairline border, 10px
 * radius, Electric Orchid focus ring. Pair with `Field` for a label and
 * hint/error text.
 */
export function Input({ error = false, className, ...rest }: InputProps) {
  const cls = ['pp-input', error && 'pp-input--error', className].filter(Boolean).join(' ');
  return <input className={cls} {...rest} />;
}
