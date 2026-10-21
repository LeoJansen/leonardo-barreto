import DoctoraliaConsentGate from './DoctoraliaConsentGate';
import { HiOutlineCalendarDays, HiOutlineMapPin } from 'react-icons/hi2';
import { DOCTORALIA_PROFILE_URL } from '../contants/index.js';

const DoctoraliaBooking = () => (
    <section
        id="agendar"
        aria-labelledby="booking-heading"
        className="scroll-mt-24 bg-surface-soft px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
    >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:items-center lg:gap-14">
            <div className="flex flex-col items-start gap-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
                    Atendimento em Foz do Iguaçu
                </p>
                <h2
                    id="booking-heading"
                    className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink-strong sm:text-4xl lg:text-5xl"
                >
                    Consultas em Foz do Iguaçu
                </h2>
                <p className="max-w-xl text-base leading-7 text-ink-muted">
                    Atendimento presencial e por teleconsulta. Consulte a disponibilidade diretamente na agenda do Dr. Leonardo Barreto.
                </p>

                <div className="mt-1 w-full max-w-xl rounded-2xl border border-site-border bg-surface p-5 shadow-[0_12px_32px_-24px_rgba(15,61,59,0.45)] sm:p-6">
                    <div className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-soft text-brand-support" aria-hidden="true">
                            <HiOutlineMapPin className="h-5 w-5" />
                        </span>
                        <div>
                            <h3 className="text-base font-semibold text-ink-strong">Local de atendimento</h3>
                            <p className="mt-2 text-sm leading-6 text-ink-muted">Foz do Iguaçu, PR</p>
                            <p className="mt-1 text-sm leading-6 text-ink-muted">Atendimento presencial e por teleconsulta</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="doctoralia-agenda" className="min-w-0 rounded-3xl border border-site-border bg-surface p-5 shadow-[0_22px_60px_-38px_rgba(15,61,59,0.55)] sm:p-7">
                <div className="mb-5 flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-soft text-brand-support" aria-hidden="true">
                        <HiOutlineCalendarDays className="h-5 w-5" />
                    </span>
                    <div>
                        <p className="text-base font-semibold text-ink-strong">Agenda da Doctoralia</p>
                        <p className="mt-1 text-sm leading-6 text-ink-muted">
                            A agenda só é carregada quando você solicitar e autorizar o serviço externo.
                        </p>
                    </div>
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
