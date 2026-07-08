import { BrandProvider, Field, Input } from '@pierro-productions/butterfly-system';

export const WithHint = () => (
  <BrandProvider style={{ padding: '1.5rem', maxWidth: 420 }}>
    <Field label="Email" htmlFor="pv-email" hint="For the waitlist only — no noise.">
      <Input id="pv-email" type="email" placeholder="you@example.com" />
    </Field>
  </BrandProvider>
);

export const ErrorState = () => (
  <BrandProvider style={{ padding: '1.5rem', maxWidth: 420 }}>
    <Field label="Studio name" htmlFor="pv-studio" error="This name is already taken.">
      <Input id="pv-studio" error defaultValue="Velvet Room" />
    </Field>
  </BrandProvider>
);

export const FormGroup = () => (
  <BrandProvider style={{ padding: '1.5rem', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
    <Field label="Full name" htmlFor="pv-name">
      <Input id="pv-name" placeholder="Clarissa Pierro" />
    </Field>
    <Field label="What are you building?" htmlFor="pv-goal" hint="One line is plenty.">
      <Input id="pv-goal" placeholder="A feminine fitness brand" />
    </Field>
  </BrandProvider>
);
