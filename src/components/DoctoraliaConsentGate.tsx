'use client';

import Script from 'next/script';
import { useCookieConsent } from './CookieConsentManager';

export default function DoctoraliaConsentGate() {
  const { isReady, preferences, openPreferences } = useCookieConsent();

  if (!isReady) return null;

  if (!preferences?.externalDoctoralia) {
    return (
      <div className="mt-4 rounded-xl bg-surface-soft p-4">
        <p className="text-sm leading-6 text-ink-muted">
          A agenda incorporada só é carregada com sua autorização. Você também pode abrir o perfil da Doctoralia diretamente.
        </p>
        <button
          className="mt-2 inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light"
          onClick={openPreferences}
          type="button"
        >
          Gerenciar autorização da agenda
        </button>
      </div>
    );
  }

  return (
    <Script
      id="zl-widget-s"
      src="https://platform.docplanner.com/js/widget.js"
      strategy="afterInteractive"
    />
  );
}
