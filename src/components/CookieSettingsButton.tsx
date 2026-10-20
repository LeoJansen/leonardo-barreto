'use client';

import { useCookieConsent } from './CookieConsentManager';

export default function CookieSettingsButton({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const { openPreferences } = useCookieConsent();
  const colorClass = variant === 'dark'
    ? 'text-on-brand-muted hover:text-on-brand focus-visible:ring-accent-on-dark'
    : 'text-accent hover:text-brand-deep focus-visible:ring-focus-on-light';

  return (
    <button
      className={`inline-flex min-h-11 items-center text-sm underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 ${colorClass}`}
      onClick={openPreferences}
      type="button"
    >
      Gerenciar cookies
    </button>
  );
}
