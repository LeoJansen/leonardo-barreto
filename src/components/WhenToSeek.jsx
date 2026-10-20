'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import {
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiOutlineUserGroup,
} from 'react-icons/hi2';
import { useOnScreen } from '@/hooks/useOnScreen';

const supportAreas = [
  {
    title: 'No trabalho ou nos estudos',
    description:
      'Dificuldade de concentração, mudanças no rendimento ou sensação de que a rotina ficou difícil de sustentar.',
    Icon: HiOutlineBriefcase,
  },
  {
    title: 'Na vida pessoal e social',
    description:
      'Afastamento de pessoas próximas, perda de interesse em atividades ou dificuldade para cuidar das tarefas do dia a dia.',
    Icon: HiOutlineUserGroup,
  },
  {
    title: 'Nas relações',
    description:
      'Conflitos frequentes, dificuldade de comunicação ou sofrimento que afeta a convivência.',
    Icon: HiOutlineHeart,
  },
];

function WhenToSeek() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const titleGroupRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const listRef = useRef(null);

  const isVisible = useOnScreen(sectionRef, {
    rootMargin: '300px',
    threshold: 0.01,
    once: true,
  });

  useEffect(() => {
    if (!isVisible) return;

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
          const timeline = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 10%',
              once: true,
            },
          });

          if (imageWrapRef.current) {
            timeline.from(imageWrapRef.current, { opacity: 0, x: -28, duration: 0.75 }, 0);
          }

          if (titleGroupRef.current) {
            timeline.from(titleGroupRef.current, { opacity: 0, y: 18, duration: 0.65 }, 0.12);
          }

          if (paragraph1Ref.current) {
            timeline.from(paragraph1Ref.current, { opacity: 0, y: 14, duration: 0.65 }, 0.24);
          }

          if (listRef.current?.children.length) {
            timeline.from(
              listRef.current.children,
              { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 },
              0.36,
            );
          }

        }, sectionRef);
      } catch {
        // A animação é complementar; o conteúdo permanece disponível sem ela.
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
      id="quando-procurar"
      ref={sectionRef}
      aria-labelledby="when-to-seek-heading"
      tabIndex={-1}
      className="scroll-mt-24 border-y border-site-border/60 bg-surface-soft focus:outline-none"
    >
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-5 py-14 sm:px-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10 md:py-20 lg:gap-16 lg:px-10 lg:py-24 xl:gap-20">
        <div className="flex justify-center lg:justify-start">
          <div
            ref={imageWrapRef}
            className="relative aspect-square w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] bg-surface shadow-[0_24px_60px_-28px_rgba(15,61,59,0.45)] ring-1 ring-brand-deep/10 md:rounded-[2rem]"
          >
            <Image
              src="/assets/whenToSeek.png"
              alt="Paciente em consulta com profissional de saúde mental"
              fill
              quality={75}
              sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 34rem, (max-width: 1279px) 42vw, 34rem"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 md:mx-0 lg:gap-7">
          <div ref={titleGroupRef}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
              Perceber também é um passo
            </p>
            <h2
              id="when-to-seek-heading"
              className="flex flex-col text-[clamp(2rem,4vw,3rem)] font-light leading-[1.05] tracking-[-0.045em] text-ink-muted"
            >
              <span>Quando buscar</span>
              <span className="mt-1 text-[clamp(2.75rem,5.4vw,4.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.05em] text-brand-support">
                ajuda?
              </span>
            </h2>
          </div>

          <div ref={paragraph1Ref} className="space-y-3 text-[15px] leading-7 text-ink md:text-base">
            <p>
              Nem sempre é fácil perceber quando uma fase difícil precisa de atenção profissional. Mudanças que persistem, se intensificam ou começam a limitar a rotina podem ser um motivo para conversar com um profissional de saúde.
            </p>
            <p>
              Você não precisa esperar chegar ao limite para pedir apoio. Uma conversa pode ajudar a compreender o que está acontecendo e a avaliar possibilidades de cuidado.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-ink-strong md:text-base">
              Vale observar se o sofrimento começa a afetar diferentes áreas do cotidiano:
            </p>
            <ul ref={listRef} className="grid gap-3" aria-label="Sinais de que pode ser hora de buscar ajuda">
              {supportAreas.map(({ title, description, Icon }) => (
                <li
                  key={title}
                  className="flex items-start gap-3 rounded-2xl border border-site-border/70 bg-surface px-4 py-3.5 shadow-[0_8px_24px_-20px_rgba(15,61,59,0.45)] sm:gap-4 sm:px-5"
                >
                  <span
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft text-brand-support"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 text-sm leading-6 text-ink md:text-[15px]">
                    <strong className="block font-semibold leading-5 text-ink-strong">{title}</strong>
                    <span className="mt-1 block">{description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhenToSeek;
