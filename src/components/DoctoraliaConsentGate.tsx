'use client';

import Script from 'next/script';
import { useState } from 'react';
import { DOCTORALIA_PROFILE_URL } from '../contants/index.js';
import { useCookieConsent } from './CookieConsentManager';

export default function DoctoraliaConsentGate() {
  const { isReady, preferences, openPreferences } = useCookieConsent();
  const [agendaRequested, setAgendaRequested] = useState(false);

  if (!isReady) return null;

  if (agendaRequested && preferences?.externalDoctoralia) {
    return (
      <div className="mt-4 min-w-0">
        <Script
          id="zl-widget-s"
          src="https://platform.docplanner.com/js/widget.js"
          strategy="afterInteractive"
        />
        <a
          id="zl-url"
          className="zl-url inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-site-cta px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-site-cta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light focus-visible:ring-offset-2"
          href={DOCTORALIA_PROFILE_URL}
          rel="nofollow"
          data-zlw-doctor="leonardo-barreto-3"
          data-zlw-type="big_with_calendar"
          data-zlw-opinion="false"
          data-zlw-hide-branding="true"
          data-zlw-saas-only="true"
          data-zlw-a11y-title="Widget de marcação de consultas médicas"
        >
          Abrir horários na Doctoralia
        </a>
      </div>
    );
  }

  const requestAgenda = () => {
    setAgendaRequested(true);
    if (!preferences?.externalDoctoralia) openPreferences();
  };

  if (!preferences?.externalDoctoralia || !agendaRequested) {
    return (
      <div className="mt-4 rounded-2xl bg-surface-soft p-4 sm:p-5">
        <p className="text-sm leading-6 text-ink-muted">
          Ao carregar a agenda, a Doctoralia poderá receber dados técnicos do acesso e usar tecnologias próprias. Você pode consultar o perfil sem carregar a agenda nesta página.
        </p>
        <button
          className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-site-cta px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-site-cta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light focus-visible:ring-offset-2 sm:w-auto"
          onClick={requestAgenda}
          type="button"
        >
          Carregar agenda da Doctoralia
        </button>
        {agendaRequested && !preferences?.externalDoctoralia ? (
          <p className="mt-2 text-xs leading-5 text-ink-muted">
            Autorize o carregamento nas preferências de privacidade para continuar.
          </p>
        ) : null}
      </div>
    );
  }

  return null;
}
