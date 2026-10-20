'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { conditionsDetails } from '../contants/index.js';
import { useOnScreen } from '@/hooks/useOnScreen';

function Conditions() {
  const conditions = [
    { key: 'depressao', name: 'Depressão', pic: '/assets/conditions-depressao-salvia.webp' },
    { key: 'ansiedade', name: 'Ansiedade', pic: '/assets/conditions-ansiedade-salvia.webp' },
    { key: 'insonia', name: 'Insônia', pic: '/assets/conditions-insonia-salvia.webp' },
    { key: 'tdah', name: 'TDAH', pic: '/assets/conditions-tdah-salvia.webp' },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const isVisible = useOnScreen(sectionRef, { rootMargin: '300px', threshold: 0.01, once: true });

  useEffect(() => {
    if (!isVisible) return undefined;

    let ctx;
    let cancelled = false;

    const init = async () => {
      try {
        const gsapMod = await import('gsap');
        const gsap = gsapMod.gsap ?? gsapMod.default ?? gsapMod;
        const stMod = await import('gsap/ScrollTrigger');
        const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
        gsap.registerPlugin(ScrollTrigger);

        if (cancelled || !sectionRef.current) return;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

        ctx = gsap.context(() => {
          if (titleRef.current) {
            gsap.from(titleRef.current, {
              y: 20,
              duration: 0.55,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 65%',
                once: true,
              },
            });
          }

          const cards = cardRefs.current.filter(Boolean);
          if (cards.length) {
            gsap.from(cards, {
              y: 16,
              duration: 0.6,
              ease: 'power3.out',
              stagger: 0.1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 55%',
                once: true,
              },
            });
          }
        }, sectionRef);
      } catch {
        // A animação é opcional; o conteúdo permanece visível sem o GSAP.
      }
    };

    init();

    return () => {
      cancelled = true;
      ctx?.revert?.();
    };
  }, [isVisible]);

  return (
    <section
      id="condicoes"
      ref={sectionRef}
      aria-labelledby="conditions-heading"
      tabIndex={-1}
      className="w-full bg-surface focus:outline-none"
    >
      <div className="dark-surface w-full bg-brand-deep px-5 py-12 text-on-brand sm:px-8 sm:py-14 lg:py-16">
        <div ref={titleRef} className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-on-dark sm:text-sm">
            Informação para orientar a conversa
          </p>
          <h2 id="conditions-heading" className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight tracking-[-0.04em]">
            Sinais que merecem atenção
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-10 lg:pb-24">
        <p
          role="note"
          className="mx-auto flex max-w-4xl items-start gap-3 rounded-2xl border border-site-border bg-surface-soft px-4 py-4 text-sm leading-6 text-ink sm:items-center sm:px-5"
        >
          <span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-on-brand sm:mt-0">
            i
          </span>
          <span>
            Esta lista é informativa: sintomas isolados não confirmam uma condição nem substituem avaliação profissional.
          </span>
        </p>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:mt-8 md:grid-cols-2 md:gap-6 lg:gap-7">
          {conditions.map((condition, index) => {
            const bullets = conditionsDetails[condition.key]?.bullets ?? [];

            return (
              <article
                key={condition.key}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                aria-labelledby={`condition-${condition.key}`}
                className="group grid min-w-0 overflow-hidden rounded-3xl border border-site-border/80 bg-white shadow-[0_18px_45px_-36px_rgba(15,61,59,0.7)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-32px_rgba(15,61,59,0.55)] lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]"
              >
                <div className="relative isolate aspect-[16/10] min-w-0 overflow-hidden bg-brand-deep lg:aspect-auto lg:min-h-[20rem]">
                  <Image
                    src={condition.pic}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw"
                    style={{ objectPosition: 'center 15%' }}
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/15 to-transparent" />
                  <h3
                    id={`condition-${condition.key}`}
                    className="absolute inset-x-5 bottom-5 text-2xl font-semibold tracking-[-0.03em] text-white drop-shadow-sm sm:inset-x-6 sm:bottom-6"
                  >
                    {condition.name}
                  </h3>
                </div>

                <div className="flex min-w-0 items-center p-5 sm:p-6 lg:p-5 xl:p-6">
                  <ul aria-labelledby={`condition-${condition.key}`} className="w-full space-y-5 xl:space-y-6">
                    {bullets.map((bullet) => (
                      <li key={bullet.title} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent ring-4 ring-brand-primary/10" />
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold leading-5 text-ink-strong sm:text-base">
                            {bullet.title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-6 text-ink sm:text-[15px]">
                            {bullet.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Conditions;
