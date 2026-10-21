'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import { useOnScreen } from '@/hooks/useOnScreen';

function Conditions() {
  const conditions = [
    {
      key: 'depressao',
      name: 'Depressão',
      pic: '/assets/conditions-depressao-salvia.webp',
      summary: 'Tristeza ou desânimo persistentes, perda de interesse, mudanças no sono ou no apetite e dificuldade de concentração podem ocorrer.',
    },
    {
      key: 'ansiedade',
      name: 'Ansiedade',
      pic: '/assets/conditions-ansiedade-salvia.webp',
      summary: 'Preocupação intensa ou difícil de controlar pode vir com inquietação, aceleração dos batimentos, suor, tremores ou tensão muscular.',
    },
    {
      key: 'insonia',
      name: 'Insônia',
      pic: '/assets/conditions-insonia-salvia.webp',
      summary: 'Dificuldade para adormecer ou manter o sono pode causar cansaço, sonolência, irritabilidade ou dificuldade de concentração durante o dia.',
    },
    {
      key: 'tdah',
      name: 'TDAH',
      pic: '/assets/conditions-tdah-salvia.webp',
      summary: 'Dificuldades frequentes de atenção, organização ou conclusão de tarefas, às vezes junto à impulsividade ou inquietação, podem merecer avaliação.',
    },
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
          <HiOutlineInformationCircle aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-brand-support sm:mt-0" />
          <span>
            Esta lista é informativa: sintomas isolados não confirmam uma condição nem substituem avaliação profissional.
          </span>
        </p>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {conditions.map((condition, index) => {
            return (
              <article
                key={condition.key}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                aria-labelledby={`condition-${condition.key}`}
                className="group grid min-w-0 grid-cols-[6.25rem_minmax(0,1fr)] overflow-hidden rounded-2xl border border-site-border/80 bg-white shadow-[0_18px_45px_-36px_rgba(15,61,59,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-32px_rgba(15,61,59,0.55)] sm:grid-cols-1 sm:rounded-3xl"
              >
                <div className="relative isolate min-h-[8.75rem] min-w-0 overflow-hidden bg-brand-deep sm:aspect-[16/10] sm:min-h-0">
                  <Image
                    src={condition.pic}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 6.25rem, (max-width: 1279px) 50vw, 25vw"
                    className="object-cover object-[center_30%] transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex min-w-0 flex-col justify-center p-3 sm:p-5">
                  <h3
                    id={`condition-${condition.key}`}
                    className="text-base font-semibold tracking-[-0.02em] text-brand-deep sm:text-lg"
                  >
                    {condition.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-ink sm:text-sm sm:leading-6">
                    {condition.summary}
                  </p>
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
