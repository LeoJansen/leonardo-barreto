"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { WHATSAPP_MESSAGE, WHATSAPP_PHONE } from '../contants/index.js';

function IconBars(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconTimes(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsapp(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.1 17.5c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4-.1-.6.1-.2.2-.6.6-.7.7-.1.2-.3.2-.5.1-1.2-.6-2.1-1.4-2.9-2.6-.2-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.5-.8-2.1-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.1.8 2.2.9 2.4.1.1 1.6 2.6 4 3.6.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.1-.5 1.2-.9.1-.4.1-.8.1-.9 0-.1-.2-.2-.4-.3z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.8L4 29l8.4-1.6c1.6.9 3.5 1.4 5.6 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22.2c-1.8 0-3.5-.5-5-1.4l-.6-.3-5 .9.9-4.9-.4-.6c-1-1.5-1.6-3.3-1.6-5.2 0-5.2 4.2-9.4 9.4-9.4 5.2 0 9.4 4.2 9.4 9.4 0 5.2-4.2 9.4-9.4 9.4z" />
    </svg>
  );
}

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quando procurar', href: '#quando-procurar' },
  { label: 'Condições', href: '#condicoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialização', href: '#especializacao' },
];

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? 'hidden' : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  const sanitizedPhone = WHATSAPP_PHONE.replace(/\D+/g, '');
  const whatsappHref = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-white/10 transition-all duration-300 ${
        hasScrolled
          ? 'bg-[#145251] shadow-[0_12px_26px_-12px_rgba(5,27,32,0.85)]'
          : 'bg-[#145251]'
      }`}
    >
      <div className="flex w-full  items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-8 md:py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:hidden"
          >
            {menuOpen ? <IconTimes className="h-4 w-4" /> : <IconBars className="h-4 w-4" />}
          </button>

          <Link
            href="#inicio"
            onClick={closeMenu}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full transition group-hover:bg-white/20">
              <Image
                width={52}
                height={52}
                src="/assets/logocinza.svg"
                alt="Leonardo Barreto"
                className="h-8 w-8 md:h-12 md:w-12 object-contain"
                priority
              />
            </span>
            <span className="flex flex-col items-center leading-tight">
              <div className='flex items-center gap-1'>
                <span className="text-[10px]   text-[#aaaaaa]">Dr.</span>
              <span className="text-sm font-medium text-white md:text-base">Leonardo Barreto</span>

              </div>
              
              <span className="text-xs font-light leading-2 text-[#aaaaaa] md:text-sm">Saúde Mental</span>
            </span>
          </Link>
        </div>

        <nav
          className="hidden flex-1 items-center justify-center md:flex"
          aria-label="Navegação principal"
        >
          <ul className="flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-[#e3f7f6]">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[#35d1c9]/60 px-4 py-2 text-sm font-medium text-[#e5fbfa] transition hover:border-[#35d1c9] hover:bg-[#35d1c9]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5bf0e8]/80 md:inline-flex"
          >
            <IconWhatsapp className="h-4 w-4" />
            Agendar consulta
          </Link>

          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#35d1c9]/60 text-[#e5fbfa] transition hover:border-[#35d1c9] hover:bg-[#35d1c9]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5bf0e8]/80 md:hidden"
            aria-label="Agendar consulta pelo WhatsApp"
          >
            <IconWhatsapp className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden ">
          <button
            type="button"
            aria-label="Fechar menu"
            className="fixed inset-0 z-40 bg-black/60"
            onClick={closeMenu}
          />
          <div className="fixed top-0 left-0 z-50 flex h-full w-[82vw] max-w-xs flex-col gap-8 bg-[#0f3d3b] px-6 py-10 shadow-[12px_0_36px_-16px_rgba(3,23,26,0.9)]">
            
            <nav className="flex flex-col gap-5 " aria-label="Navegação móvel">
        <ul className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3 text-[15px] font-medium uppercase tracking-[0.18em] text-[#edfdfa] shadow-[0_12px_24px_-16px_rgba(3,23,26,0.9)] transition hover:bg-white/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <span>{label}</span>
                      <span className="h-2 w-2 rounded-full bg-[#35d1c9]" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-4 text-[#cceceb]">
              <p className="text-xs leading-relaxed text-[#8fb4b2]">
                Escolha uma das seções para explorar os cuidados em saúde mental com o Dr. Leonardo.
              </p>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#35d1c9]/60 px-4 py-3 text-sm font-medium text-[#e5fbfa] transition hover:border-[#35d1c9] hover:bg-[#35d1c9]/15"
              >
                <IconWhatsapp className="h-4 w-4" />
                Agendar consulta
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Topbar;