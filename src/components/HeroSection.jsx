import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { WHATSAPP_MESSAGE, WHATSAPP_PHONE } from '../contants/index.js';

const { props: desktopImageProps } = getImageProps({
  src: '/assets/hero-desktop-v4.png',
  alt: 'Dr. Leonardo Barreto em seu consultório',
  width: 1672,
  height: 941,
  quality: 75,
  loading: 'eager',
  sizes: '100vw',
});

const {
  props: { srcSet: mobileImageSrcSet },
} = getImageProps({
  src: '/assets/hero-mobile-v4.png',
  alt: 'Dr. Leonardo Barreto em seu consultório',
  width: 941,
  height: 1672,
  quality: 75,
  sizes: '100vw',
});

const benefits = [
  {
    icon: '/assets/terapiaIcon.svg',
    label: 'Teleconsulta',
    animationDelay: 'hero-delay-3',
  },
  {
    icon: '/assets/medicacaoIcon.svg',
    label: 'Tratamento Individualizado',
    animationDelay: 'hero-delay-4',
  },
  {
    icon: '/assets/atendimentoIcon.svg',
    label: 'Atendimento Humanizado',
    animationDelay: 'hero-delay-5',
  },
];

function HeroSection() {
  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE.replace(/\D+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      tabIndex={-1}
      className="relative flex min-h-[calc(100dvh-var(--site-topbar-height,4rem))] w-full flex-col overflow-hidden focus:outline-none"
    >
      <picture className="absolute inset-0">
        <source media="(max-width: 767px)" srcSet={mobileImageSrcSet} sizes="100vw" />
        <img
          {...desktopImageProps}
          alt="Dr. Leonardo Barreto em seu consultório"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ objectFit: 'cover' }}
        />
      </picture>

      <div className="relative z-20 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-3 pb-[clamp(1rem,4vh,2.5rem)] pt-[clamp(1.5rem,5vh,4rem)] sm:px-6 lg:px-10">
        <header className="hero-anim-left hero-delay-1 max-w-[62rem]">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary sm:mb-3 sm:text-sm">
            Saúde mental em Foz do Iguaçu
          </p>
          <h1 id="hero-heading" className="max-w-[24ch] text-[clamp(1.8rem,4.5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-on-brand [text-wrap:balance]">
            Cuidado com a sua história.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-5 text-on-brand sm:mt-4 sm:text-base sm:leading-6">
            Atendimento presencial e por teleconsulta.
          </p>
        </header>

        <div className="mt-auto grid w-full grid-cols-1 items-end gap-3 pt-6 sm:gap-4 sm:pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-5 lg:pt-10">
          <div className="hero-anim-left hero-delay-2 w-full rounded-2xl border border-white/15 bg-brand-primary/90 p-4 shadow-[0_16px_40px_rgba(6,29,29,0.32)] backdrop-blur-md sm:p-5">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <p className="text-lg font-semibold tracking-[-0.02em] text-on-brand sm:text-xl">
                Dr. Leonardo Barreto
              </p>
              <p className="text-xs font-medium tracking-[0.04em] text-on-brand-muted sm:text-sm">
                Médico · CRM-PR 58107
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-surface inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-accent-on-dark px-4 py-2 text-sm font-semibold text-brand-deep transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary sm:px-5"
              >
                Tirar dúvidas pelo WhatsApp
                <span className="sr-only"> (abre em nova aba pelo WhatsApp)</span>
              </Link>
              <Link
                href="#agendar"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/30 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-on-brand transition-colors hover:bg-white/[0.12] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary sm:px-5"
              >
                Agendar na Doctoralia
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-anim-right hero-delay-3 w-full rounded-2xl border border-white/15 bg-brand-primary/90 p-1.5 shadow-[0_14px_34px_rgba(6,29,29,0.32)] backdrop-blur-md sm:p-2">
            <ul aria-label="Características do atendimento" className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {benefits.map(({ icon, label, animationDelay }) => (
                <li
                  key={label}
                  className={`hero-anim-up ${animationDelay} flex min-h-[76px] flex-col items-center justify-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.07] px-1 py-2 text-center text-xs font-medium leading-tight text-on-brand sm:min-h-[84px] sm:px-2 sm:py-2.5 lg:min-h-[96px] lg:px-3 lg:py-3 lg:text-[13px]`}
                >
                  <Image src={icon} alt="" width={40} height={40} className="h-5 w-5 shrink-0 brightness-0 invert sm:h-6 sm:w-6" />
                  <span className="max-w-full text-balance">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
