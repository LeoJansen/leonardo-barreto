import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { WHATSAPP_MESSAGE, WHATSAPP_PHONE } from '../contants/index.js';

const { props: desktopImageProps } = getImageProps({
  src: '/assets/hero-desktop.png',
  alt: 'Dr. Leonardo Barreto em seu consultório',
  width: 2041,
  height: 1176,
  quality: 75,
  loading: 'eager',
  sizes: '100vw',
});

const {
  props: { srcSet: mobileImageSrcSet },
} = getImageProps({
  src: '/assets/hero-mobile.jpeg',
  alt: 'Dr. Leonardo Barreto em seu consultório',
  width: 832,
  height: 912,
  quality: 85,
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#061d1d]/55"
      />

      <div className="relative z-20 mt-auto w-full px-3 pb-[clamp(3rem,18vh,5rem)] pt-[clamp(5rem,20vh,12rem)] sm:px-6 lg:px-10 lg:pb-10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-3 sm:gap-4 xl:flex-row xl:items-end xl:justify-between xl:gap-8 xl:pr-20">
          <div className="hero-anim-left hero-delay-1 flex max-w-full flex-col items-start gap-2.5 rounded-xl border border-white/15 bg-brand-primary/95 px-4 py-3 shadow-[0_12px_32px_rgba(6,29,29,0.28)] backdrop-blur-sm sm:gap-3 sm:px-5 sm:py-4">
            <h1 id="hero-heading" className="flex flex-wrap items-baseline gap-x-1.5 text-[clamp(1.15rem,5vw,2rem)] font-light leading-tight tracking-[-0.045em] text-on-brand xl:text-5xl">
              <span className="text-sm font-normal tracking-normal text-on-brand-muted sm:text-base xl:text-xl">
                Dr.
              </span>
              Leonardo Barreto
            </h1>
            <p className="mt-0.5 text-sm font-light tracking-[0.08em] text-on-brand-muted sm:text-base xl:text-lg">
              Médico • CRM-PR 58107
            </p>
            <p className="max-w-xl text-sm leading-6 text-on-brand sm:text-base">
              Atendimento em saúde mental em Foz do Iguaçu, presencial ou por teleconsulta.
            </p>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="dark-surface inline-flex min-h-11 items-center justify-center rounded-full bg-accent-on-dark px-5 py-2.5 text-sm font-semibold text-brand-deep transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            >
              Tirar dúvidas pelo WhatsApp
              <span className="sr-only"> (abre em nova aba pelo WhatsApp)</span>
            </Link>
            <Link
              href="#agendar"
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-secondary transition-colors hover:text-on-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            >
              Ver horários na Doctoralia
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hero-anim-right hero-delay-2 w-full max-w-[720px] rounded-2xl border border-white/15 bg-brand-primary/95 p-1.5 shadow-[0_14px_34px_rgba(6,29,29,0.32)] backdrop-blur-sm sm:p-2 xl:w-auto xl:max-w-none xl:min-w-[560px]">
            <ul className="grid grid-cols-3 gap-1.5 sm:gap-2 xl:gap-2.5">
              {benefits.map(({ icon, label, animationDelay }) => (
                <li
                  key={label}
                  className={`hero-anim-up ${animationDelay} flex min-h-[76px] flex-col items-center justify-center gap-1 rounded-xl bg-white/[0.06] px-1 py-2 text-center text-[11px] font-medium leading-tight text-on-brand-muted sm:min-h-[88px] sm:gap-1.5 sm:px-2.5 sm:py-3 sm:text-xs`}
                >
                  <Image src={icon} alt="" width={40} height={40} className="h-5 w-5 shrink-0 brightness-0 invert sm:h-6 sm:w-6" />
                  <span className="max-w-full">{label}</span>
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
