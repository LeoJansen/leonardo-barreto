import DoctoraliaConsentGate from './DoctoraliaConsentGate';
import {
    CONSULTATION_LOCATION,
    DOCTORALIA_PROFILE_URL,
} from '../contants/index.js';

const mapQuery = [
    CONSULTATION_LOCATION.streetAddress,
    CONSULTATION_LOCATION.neighborhood,
    `${CONSULTATION_LOCATION.addressLocality} - ${CONSULTATION_LOCATION.addressRegion}`,
    CONSULTATION_LOCATION.postalCode,
].join(', ');

const DoctoraliaBooking = () => (
    <section
        id="agendar"
        aria-labelledby="booking-heading"
        className="scroll-mt-24 bg-surface-soft px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:items-center lg:gap-14">
            <div className="flex flex-col items-start gap-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
                    Agende pela Doctoralia
                </p>
                <h2
                    id="booking-heading"
                    className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink-strong sm:text-4xl lg:text-5xl"
                >
                    Consultas em Foz do Iguaçu
                </h2>
                <p className="max-w-xl text-base leading-7 text-ink-muted">
                    Consulte a agenda para atendimento presencial ou por teleconsulta. Os horários são exibidos no perfil do Dr. Leonardo Barreto na Doctoralia; para tirar dúvidas, envie uma mensagem pelo WhatsApp.
                </p>

                <div className="mt-2 w-full max-w-xl rounded-2xl border border-site-border bg-surface p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary text-on-brand" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                        </span>
                        <div>
                            <h3 className="text-base font-semibold text-ink-strong">Local de atendimento</h3>
                            <address className="mt-2 not-italic text-sm leading-6 text-ink-muted">
                                {CONSULTATION_LOCATION.streetAddress} – {CONSULTATION_LOCATION.neighborhood}<br />
                                {CONSULTATION_LOCATION.addressLocality} – {CONSULTATION_LOCATION.addressRegion}, {CONSULTATION_LOCATION.postalCode}
                            </address>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex min-h-11 items-center rounded-lg font-semibold text-accent underline underline-offset-4 hover:text-brand-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light"
                            >
                                Ver endereço no Google Maps
                                <span className="sr-only"> (abre em nova aba)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-site-border bg-surface p-5 shadow-[0_22px_60px_-38px_rgba(15,61,59,0.55)] sm:p-7">
                <div className="mb-5">
                    <p className="text-sm font-semibold text-ink-strong">Agenda online da Doctoralia</p>
                    <p className="mt-1 text-sm leading-6 text-ink-muted">
                        Se o calendário não carregar, abra o perfil diretamente.
                    </p>
                </div>

                <div className="min-w-0 max-w-full">
                    <a
                        id="zl-url"
                        className="zl-url inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-secondary px-6 py-3 text-center text-sm font-semibold text-secondary-foreground transition hover:bg-secondary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light focus-visible:ring-offset-2"
                        href={DOCTORALIA_PROFILE_URL}
                        rel="nofollow"
                        data-zlw-doctor="leonardo-barreto-3"
                        data-zlw-type="big_with_calendar"
                        data-zlw-opinion="false"
                        data-zlw-hide-branding="true"
                        data-zlw-saas-only="true"
                        data-zlw-a11y-title="Widget de marcação de consultas médicas"
                    >
                        Ver horários na Doctoralia
                    </a>
                </div>

                <DoctoraliaConsentGate />

                <a
                    href={DOCTORALIA_PROFILE_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-accent underline underline-offset-4 hover:text-brand-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light"
                >
                    Abrir perfil na Doctoralia
                    <span className="sr-only"> (abre em nova aba)</span>
                </a>
            </div>
        </div>

    </section>
);

export default DoctoraliaBooking;
