import type { CSSProperties, ReactNode } from 'react';

export interface FieldProps {
  /** Tracked-uppercase field label. */
  label: ReactNode;
  /** The control — usually an `Input`. */
  children?: ReactNode;
  /** Quiet helper text below the control. */
  hint?: ReactNode;
  /** Error message; when set it replaces the hint and colors it Electric Orchid. */
  error?: ReactNode;
  /** `id` of the control, wired to the label's `htmlFor`. */
  htmlFor?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Form field wrapper: tracked-uppercase label, the control, and a hint or
 * error line. Pass `error` (and `error` on the `Input`) for the invalid
 * state.
 */
export function Field({ label, children, hint, error, htmlFor, className, style }: FieldProps) {
  const cls = ['pp-field', className].filter(Boolean).join(' ');
  return (
    <div className={cls} style={style}>
      <label className="pp-field__label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error ? (
        <p className="pp-field__error">{error}</p>
      ) : hint ? (
        <p className="pp-field__hint">{hint}</p>
      ) : null}
    </div>
  );
}
