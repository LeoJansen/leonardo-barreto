"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HiOutlineBars3, HiOutlineCalendarDays, HiOutlineXMark } from 'react-icons/hi2';
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre o Dr.', href: '#sobre' },
  { label: 'Quando buscar ajuda', href: '#quando-procurar' },
  { label: 'Sinais', href: '#condicoes' },
  { label: 'Formação', href: '#especializacao' },
  { label: 'Contato', href: '#contato' },
];

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const topbarRef = useRef(null);
  const menuBackgroundRef = useRef(null);
  const menuToggleRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const topbar = topbarRef.current;
    if (!topbar) return undefined;

    const rootStyles = document.documentElement.style;
    const previousHeight = rootStyles.getPropertyValue('--site-topbar-height');
    const updateHeight = () => {
      rootStyles.setProperty('--site-topbar-height', `${topbar.getBoundingClientRect().height}px`);
    };

    updateHeight();

    let observer;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(updateHeight);
      observer.observe(topbar);
    } else {
      window.addEventListener('resize', updateHeight);
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateHeight);

      if (previousHeight) {
        rootStyles.setProperty('--site-topbar-height', previousHeight);
      } else {
        rootStyles.removeProperty('--site-topbar-height');
      }
    };
  }, []);

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

  useEffect(() => {
    if (!menuOpen) return undefined;

    const backgroundRegions = [
      document.querySelector('.skip-link'),
      menuBackgroundRef.current,
      document.getElementById('conteudo-principal'),
      document.querySelector('footer'),
      document.querySelector('[data-whatsapp-float]'),
    ].filter(Boolean);
    const previousInertStates = backgroundRegions.map((region) => region.inert);

    backgroundRegions.forEach((region) => {
      region.inert = true;
    });

    return () => {
      backgroundRegions.forEach((region, index) => {
        region.inert = previousInertStates[index];
      });
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeMenuOnDesktop = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnDesktop);
    return () => window.removeEventListener('resize', closeMenuOnDesktop);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const menu = mobileMenuRef.current;
    const getFocusableElements = () =>
      Array.from(menu?.querySelectorAll('a[href], button:not([disabled])') ?? []);

    getFocusableElements()[0]?.focus();

    const handleMenuKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuToggleRef.current?.focus({ preventScroll: true }));
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleMenuKeyDown);
    return () => window.removeEventListener('keydown', handleMenuKeyDown);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = (restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuToggleRef.current?.focus({ preventScroll: true }));
    }
  };

  const navigateToSection = (href) => {
    closeMenu();
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(href.slice(1))?.focus({ preventScroll: true });
      });
    });
  };

  return (
    <header
      ref={topbarRef}
      className={`dark-surface sticky top-0 z-50 w-full border-b border-white/10 transition-all duration-300 ${
        hasScrolled
          ? 'bg-brand-primary shadow-[0_12px_26px_-12px_rgba(5,27,32,0.85)]'
          : 'bg-brand-primary'
      }`}
    >
      <div ref={menuBackgroundRef}>
        <div className="flex w-full items-center justify-between gap-2 px-3 py-3 md:gap-6 md:px-8 md:py-4">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            ref={menuToggleRef}
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? 'mobile-navigation' : undefined}
            aria-haspopup="dialog"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white/50 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark lg:hidden"
          >
            {menuOpen ? <HiOutlineXMark className="h-5 w-5" /> : <HiOutlineBars3 className="h-5 w-5" />}
          </button>

          <Link
            href="#inicio"
            onClick={() => navigateToSection('#inicio')}
            className="group flex min-h-11 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark md:gap-3"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full transition group-hover:bg-white/20 md:h-10 md:w-10">
              <Image
                width={52}
                height={52}
                src="/assets/logocinza.svg"
                alt=""
                className="h-7 w-7 object-contain md:h-10 md:w-10"
                priority
              />
            </span>
            <span className="flex flex-col items-center leading-tight">
              <span className='flex items-center gap-1'>
                <span className="hidden text-xs text-on-brand-muted md:inline">Dr.</span>
                <span className="whitespace-nowrap text-xs font-medium text-on-brand md:text-base">Leonardo Barreto</span>

              </span>
              
              <span className="whitespace-nowrap text-xs font-light leading-2 text-on-brand-muted md:text-sm">Saúde Mental</span>
            </span>
          </Link>
        </div>

        <nav
          className="hidden flex-1 items-center justify-center lg:flex"
          aria-label="Navegação principal"
        >
          <ul className="flex items-center gap-1 text-xs font-medium text-on-brand xl:gap-2 xl:text-sm">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => navigateToSection(href)}
                  className="inline-flex min-h-11 items-center rounded-full px-2 py-2 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark xl:px-3"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#agendar"
            onClick={() => navigateToSection('#agendar')}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-site-cta px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-site-cta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary lg:inline-flex"
          >
            <HiOutlineCalendarDays className="h-4 w-4" />
            Agendar na Doctoralia
          </Link>

          <Link
            href="#agendar"
            onClick={() => navigateToSection('#agendar')}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-site-cta text-white shadow-sm transition hover:bg-site-cta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary lg:hidden"
            aria-label="Agendar consulta online pelo Doctoralia"
          >
            <HiOutlineCalendarDays className="h-5 w-5" />
          </Link>
        </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden ">
          <div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => closeMenu(true)}
          />
          <div
            ref={mobileMenuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navegação móvel"
            className="fixed top-0 left-0 z-50 flex h-full w-[82vw] max-w-xs flex-col gap-8 bg-brand-deep px-6 py-10 shadow-[12px_0_36px_-16px_rgba(3,23,26,0.9)]"
          >
            <button
              type="button"
              onClick={() => closeMenu(true)}
              aria-label="Fechar menu"
              className="dark-surface inline-flex h-11 w-11 items-center justify-center self-end rounded-full border border-white/30 p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark"
            >
              <IconTimes className="h-4 w-4" />
            </button>

            <nav className="flex flex-col gap-5 " aria-label="Navegação móvel">
        <ul className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => navigateToSection(href)}
                      className="dark-surface flex min-h-11 items-center justify-between rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-[15px] font-medium uppercase tracking-[0.18em] text-on-brand shadow-[0_12px_24px_-16px_rgba(3,23,26,0.9)] transition hover:bg-white/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark"
                    >
                      <span>{label}</span>
                      <span className="h-2 w-2 rounded-full bg-accent-on-dark" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-4 text-on-brand">
              <p className="text-xs leading-relaxed text-on-brand-muted">
                Escolha uma das seções para explorar os cuidados em saúde mental com o Dr. Leonardo.
              </p>
              <Link
                href="#agendar"
                onClick={() => navigateToSection('#agendar')}
                className="dark-surface inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-accent-on-dark/60 px-4 py-3 text-sm font-medium text-on-brand transition hover:border-accent-on-dark hover:bg-accent-on-dark/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark"
              >
                <HiOutlineCalendarDays className="h-4 w-4" />
                Agendar na Doctoralia
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Topbar;
