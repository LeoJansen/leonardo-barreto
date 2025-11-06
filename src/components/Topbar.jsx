"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_MESSAGE, WHATSAPP_PHONE } from '../contants/index.js';

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
            {menuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
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
                className="h-8 w-8 object-contain"
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
            <FaWhatsapp className="h-4 w-4" />
            Agendar consulta
          </Link>

          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#35d1c9]/60 text-[#e5fbfa] transition hover:border-[#35d1c9] hover:bg-[#35d1c9]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5bf0e8]/80 md:hidden"
            aria-label="Agendar consulta pelo WhatsApp"
          >
            <FaWhatsapp className="h-4 w-4" />
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
                <FaWhatsapp className="h-4 w-4" />
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