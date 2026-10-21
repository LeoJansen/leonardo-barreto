import { getImageProps } from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { WHATSAPP_MESSAGE, WHATSAPP_PHONE } from '../contants/index.js';

const { props: desktopImageProps } = getImageProps({
  src: '/assets/hero-desktop-v5.png',
  alt: 'Dr. Leonardo Barreto em seu consultório',
  width: 1672,
  height: 941,
  quality: 75,
  loading: 'eager',
  sizes: '(max-width: 767px) 178vh, 100vw',
});

function HeroSection() {
  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE.replace(/\D+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      tabIndex={-1}
      className="hero-viewport-height relative flex w-full flex-col overflow-hidden focus:outline-none"
    >
      <picture className="absolute inset-0">
        <img
          {...desktopImageProps}
          alt="Dr. Leonardo Barreto em seu consultório"
          fetchPriority="high"
          className="hero-image absolute inset-0 h-full w-full object-cover"
          style={{ objectFit: 'cover' }}
        />
      </picture>

      <div className="hero-content relative z-20 mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-y-6 px-4 pb-5 pt-6 sm:px-6 sm:pb-8 sm:pt-9 lg:px-[5.5vw] lg:pt-[clamp(2.75rem,5vh,4rem)]">
        <header className="hero-anim-left hero-delay-1 max-w-[16rem] sm:max-w-[20rem] lg:max-w-[62rem]">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary sm:mb-3 sm:text-xs lg:text-[13px]">
            Saúde mental em Foz do Iguaçu
          </p>
          <h1 id="hero-heading" className="max-w-[13rem] text-[clamp(1.65rem,3.9vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-on-brand sm:max-w-[24ch]">
            Cuidado com a sua história.
          </h1>
          <p className="mt-3 max-w-[11rem] text-[13px] leading-5 text-on-brand sm:mt-2 sm:max-w-xl sm:text-base sm:leading-6">
            Atendimento presencial <span className="block sm:inline">e por teleconsulta.</span>
          </p>
        </header>

        <div className="hero-actions hero-anim-left hero-delay-2 flex w-full max-w-[17rem] flex-col gap-1.5 lg:max-w-none lg:flex-row lg:gap-3">
          <Link
            href="#agendar"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-site-cta px-4 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(22,122,117,0.38)] transition-colors hover:bg-site-cta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary sm:px-5 sm:text-sm lg:min-h-14 lg:w-auto lg:min-w-[15rem]"
          >
            <HiOutlineCalendarDays aria-hidden="true" className="h-5 w-5 shrink-0" />
            Agendar na Doctoralia
          </Link>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="dark-surface inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/55 bg-brand-deep/55 px-4 text-[13px] font-semibold text-on-brand backdrop-blur-sm transition hover:bg-white/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary sm:px-5 sm:text-sm lg:min-h-14 lg:w-auto lg:min-w-[17rem]"
          >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5 shrink-0" />
            Tirar dúvidas pelo WhatsApp
            <span className="sr-only"> (abre em nova aba pelo WhatsApp)</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
