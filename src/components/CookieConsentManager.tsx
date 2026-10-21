'use client';

import Link from 'next/link';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

const CONSENT_STORAGE_KEY = 'leonardo-barreto-cookie-preferences-v1';
const CONSENT_CHANGE_EVENT = 'leonardo-barreto-consent-change';

type CookiePreferences = {
  version: 1;
  externalDoctoralia: boolean;
  updatedAt: string;
};

type CookieConsentContextValue = {
  isReady: boolean;
  preferences: CookiePreferences | null;
  openPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function subscribeToConsent(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  };
}

function getConsentSnapshot() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? '';
  } catch {
    return 'unavailable';
  }
}

function getServerConsentSnapshot() {
  return 'loading';
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error('useCookieConsent deve ser usado dentro de CookieConsentProvider.');
  }

  return context;
}

function isCookiePreferences(value: unknown): value is CookiePreferences {
  if (!value || typeof value !== 'object') return false;

  const preferences = value as Partial<CookiePreferences>;
  return preferences.version === 1 && typeof preferences.externalDoctoralia === 'boolean';
}

function CookieConsentNotice({
  isOpen,
  isCustomizing,
  externalDraft,
  onAllow,
  onReject,
  onCustomize,
  onCloseCustomize,
  onExternalChange,
  onSave,
}: {
  isOpen: boolean;
  isCustomizing: boolean;
  externalDraft: boolean;
  onAllow: () => void;
  onReject: () => void;
  onCustomize: () => void;
  onCloseCustomize: () => void;
  onExternalChange: (value: boolean) => void;
  onSave: () => void;
}) {
  if (!isOpen) return null;

  const buttonClass = 'inline-flex min-h-11 items-center justify-center rounded-xl border border-site-border bg-surface px-3 py-2 text-center text-sm font-semibold text-ink-strong transition hover:bg-surface-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light';

  return (
    <section
      aria-labelledby="cookie-consent-heading"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-h-[calc(100dvh-1.5rem)] max-w-5xl overflow-y-auto rounded-2xl border border-site-border bg-surface p-4 text-ink-strong shadow-[0_24px_80px_-28px_rgba(15,61,59,0.55)] sm:inset-x-6 sm:bottom-6 sm:p-5"
      role="region"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Privacidade e cookies</p>
          <h2 id="cookie-consent-heading" className="mt-1 text-base font-semibold tracking-tight sm:text-lg">
            Agenda integrada da Doctoralia
          </h2>
          <p className="mt-1.5 text-xs leading-5 text-ink-muted sm:text-sm sm:leading-6">
            A agenda só é carregada com sua autorização. A Doctoralia poderá receber dados técnicos do acesso e usar tecnologias próprias.
          </p>
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0 text-xs">
            <Link className="inline-flex min-h-8 items-center font-medium text-accent underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light" href="/politica-de-privacidade">
              Política de Privacidade
            </Link>
            <Link className="inline-flex min-h-8 items-center font-medium text-accent underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light" href="/politica-de-cookies">
              Política de Cookies
            </Link>
          </div>
        </div>

        <div className="grid w-full shrink-0 grid-cols-2 gap-2 sm:w-56 sm:grid-cols-1">
          {!isCustomizing ? (
            <>
              <button className={buttonClass} onClick={onReject} type="button">
                Recusar opcionais
              </button>
              <button
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-site-cta px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-site-cta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light focus-visible:ring-offset-2"
                onClick={onAllow}
                type="button"
              >
                Permitir agenda
              </button>
              <button
                aria-expanded={isCustomizing}
                aria-controls="cookie-preferences-panel"
                className="col-span-2 inline-flex min-h-9 items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold text-accent underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light sm:col-span-1 sm:min-h-11 sm:text-sm"
                onClick={onCustomize}
                type="button"
              >
                Personalizar
              </button>
            </>
          ) : (
            <button
              aria-controls="cookie-preferences-panel"
              aria-expanded={isCustomizing}
              className={buttonClass}
              onClick={onCloseCustomize}
              type="button"
            >
              Fechar personalização
            </button>
          )}
        </div>
      </div>

      {isCustomizing ? (
        <div className="mt-5 border-t border-site-border pt-5" id="cookie-preferences-panel">
          <p className="text-sm leading-6 text-ink-muted">
            O registro da sua escolha fica armazenado apenas neste navegador. A agenda externa permanece desativada até você habilitá-la.
          </p>
          <p className="mt-4 rounded-xl bg-surface-soft px-4 py-3 text-sm leading-6 text-ink-muted">
            <strong className="text-ink-strong">Armazenamento da preferência — sempre ativo.</strong>{' '}
            Usamos o armazenamento local do navegador para lembrar sua escolha. Isso não carrega conteúdo de terceiros.
          </p>
          <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-site-border p-4">
            <input
              checked={externalDraft}
              className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-on-light"
              onChange={(event) => onExternalChange(event.target.checked)}
              type="checkbox"
            />
            <span>
              <span className="block text-sm font-semibold text-ink-strong">Agenda integrada da Doctoralia</span>
              <span className="mt-1 block text-sm leading-6 text-ink-muted">
                Carrega o widget hospedado pela Doctoralia, que pode usar cookies ou tecnologias semelhantes conforme a política do serviço.
              </span>
            </span>
          </label>
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button className={buttonClass} onClick={onReject} type="button">
              Recusar opcionais
            </button>
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-site-cta px-5 py-2 text-sm font-semibold text-white transition hover:bg-site-cta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light focus-visible:ring-offset-2"
              onClick={onSave}
              type="button"
            >
              Salvar preferências
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const storedSnapshot = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const isReady = storedSnapshot !== 'loading';
  const storedPreferences = useMemo(() => {
    if (!storedSnapshot || storedSnapshot === 'loading' || storedSnapshot === 'unavailable') return null;

    try {
      const parsedValue: unknown = JSON.parse(storedSnapshot);
      return isCookiePreferences(parsedValue) ? parsedValue : null;
    } catch {
      return null;
    }
  }, [storedSnapshot]);
  const [sessionPreferences, setSessionPreferences] = useState<CookiePreferences | null>(null);
  const preferences = storedPreferences ?? sessionPreferences;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [externalDraft, setExternalDraft] = useState(false);

  const savePreferences = useCallback((externalDoctoralia: boolean) => {
    const nextPreferences: CookiePreferences = {
      version: 1,
      externalDoctoralia,
      updatedAt: new Date().toISOString(),
    };
    const revokeLoadedWidget = Boolean(preferences?.externalDoctoralia && !externalDoctoralia);

    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(nextPreferences));
    } catch {
      // A escolha continua valendo durante esta sessão se o navegador bloquear o armazenamento local.
    }

    setSessionPreferences(nextPreferences);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setExternalDraft(externalDoctoralia);
    setIsSettingsOpen(false);
    setIsCustomizing(false);

    if (revokeLoadedWidget) {
      window.location.reload();
    }
  }, [preferences]);

  const openPreferences = useCallback(() => {
    setExternalDraft(Boolean(preferences?.externalDoctoralia));
    setIsCustomizing(true);
    setIsSettingsOpen(true);
  }, [preferences]);

  const startCustomizing = useCallback(() => {
    setExternalDraft(Boolean(preferences?.externalDoctoralia));
    setIsCustomizing(true);
  }, [preferences]);

  const closeCustomizing = useCallback(() => {
    setExternalDraft(Boolean(preferences?.externalDoctoralia));
    setIsCustomizing(false);
  }, [preferences]);

  const contextValue = useMemo(() => ({
    isReady,
    preferences,
    openPreferences,
  }), [isReady, openPreferences, preferences]);

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
      <CookieConsentNotice
        externalDraft={externalDraft}
        isCustomizing={isCustomizing}
        isOpen={isReady && (!preferences || isSettingsOpen)}
        onAllow={() => savePreferences(true)}
        onCloseCustomize={closeCustomizing}
        onCustomize={startCustomizing}
        onExternalChange={setExternalDraft}
        onReject={() => savePreferences(false)}
        onSave={() => savePreferences(externalDraft)}
      />
    </CookieConsentContext.Provider>
  );
}
