'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import {
  TbBrain,
  TbMessages,
  TbUsers,
} from 'react-icons/tb';
import { useOnScreen } from '@/hooks/useOnScreen';

const supportAreas = [
  {
    title: 'Na relação com suas emoções',
    description:
      'Tristeza, desânimo, irritabilidade e outras mudanças emocionais que geram sofrimento.',
    Icon: TbBrain,
  },
  {
    title: 'Na vida pessoal e social',
    description:
      'Dificuldades de convivência, isolamento, perda de interesse em atividades ou mudanças na rotina.',
    Icon: TbUsers,
  },
  {
    title: 'Nas relações',
    description:
      'Conflitos frequentes, dificuldade de comunicação ou sofrimento que afeta a convivência.',
    Icon: TbMessages,
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
      <div className="mx-auto grid w-full max-w-7xl gap-3 px-5 py-2.5 sm:px-8 sm:py-6 md:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] md:items-start md:gap-x-8 md:gap-y-0 md:py-8 lg:gap-x-10 lg:px-12 lg:py-10">
        <div className="mb-2 flex justify-center md:mb-0 lg:justify-start">
          <div
            ref={imageWrapRef}
            className="relative aspect-[1.92/1] w-full max-w-[34rem] overflow-hidden rounded-xl bg-surface shadow-[0_16px_40px_-24px_rgba(15,61,59,0.32)] ring-1 ring-brand-deep/10 md:aspect-[1.25/1]"
          >
            <Image
              src="/assets/whenToSeek.png"
              alt="Paciente em consulta com profissional de saúde mental"
              fill
              quality={75}
              sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) 36vw, 34rem"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 md:mx-0 md:gap-4 md:pt-10">
          <div ref={titleGroupRef} className="flex flex-col gap-2">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
              Perceber também é um passo
            </p>
            <h2
              id="when-to-seek-heading"
              className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-semibold leading-[1.12] tracking-tight text-brand-deep md:text-[clamp(1.75rem,3.5vw,2.75rem)]"
            >
              Quando buscar ajuda?
            </h2>
          </div>

          <div ref={paragraph1Ref} className="text-sm leading-[1.45] text-ink md:text-[clamp(1rem,1.55vw,1.2rem)] md:leading-[1.5]">
            <p>
              Nem sempre é fácil perceber quando uma fase difícil precisa de atenção profissional. Mudanças que persistem, se intensificam ou começam a limitar a rotina podem ser um motivo para conversar com um profissional de saúde.
            </p>
          </div>
        </div>

        <ul
          ref={listRef}
          className="grid gap-2.5 sm:grid-cols-2 md:col-span-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3"
          aria-label="Sinais de que pode ser hora de buscar ajuda"
        >
          {supportAreas.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="flex min-h-[6.5rem] items-center gap-3 rounded-xl border border-site-border/70 bg-surface px-4 py-3 shadow-[0_8px_24px_-20px_rgba(15,61,59,0.3)] md:min-h-[10rem] md:items-start md:gap-4 md:px-5 md:py-4 lg:min-h-[clamp(12rem,19.375vw,15.5rem)] lg:py-6"
            >
              <span
                className="mt-0.5 flex size-14 shrink-0 items-center justify-center rounded-full bg-surface-soft text-brand-deep shadow-[inset_0_0_0_1px_rgba(15,61,59,0.08)] md:size-16"
                aria-hidden="true"
              >
                <Icon className="size-7 md:size-[1.875rem]" strokeWidth={1.8} />
              </span>
              <span className="min-w-0 text-sm leading-[1.4] text-ink md:text-[clamp(1rem,1.58vw,1.125rem)] md:leading-[1.45]">
                <strong className="block text-sm font-semibold leading-[1.2] text-ink-strong md:text-[clamp(1rem,1.55vw,1.15rem)]">{title}</strong>
                <span className="mt-1 block">{description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhenToSeek;
