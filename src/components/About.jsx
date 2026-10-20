"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useOnScreen } from '@/hooks/useOnScreen';

const highlights = [
    {
        title: 'Escuta individual',
        description: 'A conversa considera a história, o momento de vida e as necessidades de cada pessoa.'
    },
    {
        title: 'Cuidado em conjunto',
        description: 'As possibilidades de cuidado são discutidas com o paciente, de acordo com cada caso.'
    }
];

function About() {
    const root = useRef(null);

    const isVisible = useOnScreen(root, { rootMargin: '300px', threshold: 0.01, once: true });

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

                if (cancelled) return;
                if (!root.current) return;

                if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    return;
                }

                const isPortrait = window.matchMedia && window.matchMedia('(orientation: portrait)').matches;
                const q = gsap.utils.selector(root);

                ctx = gsap.context(() => {
                    gsap.timeline({
                        defaults: { ease: 'power2.out' },
                        scrollTrigger: {
                            trigger: root.current,
                            start: isPortrait ? 'top 80%' : 'top 65%',
                            end: 'bottom 40%',
                            toggleActions: 'play none none reverse',
                            once: true,
                        },
                    })
                        .from(q('[data-animate="heading"] > *'), {
                            y: 24,
                            autoAlpha: 0,
                            duration: 0.6,
                            stagger: 0.12,
                        })
                        .from(
                            q('[data-animate="copy"] p'),
                            {
                                y: 16,
                                autoAlpha: 0,
                                duration: 0.5,
                                stagger: 0.15,
                            },
                            '-=0.25'
                        )
                        .from(
                            q('[data-animate="highlights"] > div'),
                            {
                                y: 18,
                                autoAlpha: 0,
                                duration: 0.45,
                                stagger: 0.1,
                            },
                            '-=0.3'
                        )
                        .from(
                            q('[data-animate="image"]'),
                            {
                                y: 32,
                                autoAlpha: 0,
                                duration: 0.7,
                            },
                            '-=0.7'
                        );
                }, root);
            } catch {
                // animação é opcional
            }
        };

        init();

        return () => {
            cancelled = true;
            ctx?.revert?.();
        };
    }, [isVisible]);

    return (
        <section id="sobre" ref={root} aria-labelledby="about-heading" tabIndex={-1} className="scroll-mt-24 bg-surface py-16 focus:outline-none sm:py-20 lg:py-24">
            <div className="mx-auto flex max-w-6xl flex-col-reverse gap-16 px-6 md:px-10 lg:grid lg:grid-cols-[1.15fr_minmax(320px,0.9fr)] lg:items-center">
                <article className="flex flex-col gap-10 text-ink">
                    <header data-animate="heading" className="flex flex-col gap-4">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-site-border bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                            Conheça o profissional
                        </span>
                        <h2 id="about-heading" className="text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl lg:text-[44px]">
                            Cuidado em saúde mental começa com escuta
                        </h2>
                        <p className="max-w-xl text-base leading-relaxed text-ink">
                            Dr. Leonardo Barreto é médico (CRM-PR 58107) e atua na área de saúde mental, com atenção à história e às necessidades de cada pessoa.
                        </p>
                    </header>

                    <div data-animate="copy" className="max-w-2xl space-y-4 text-left text-sm leading-7 text-ink md:text-base">
                        <p>
                            O atendimento parte de uma conversa sobre o que a pessoa está vivendo, seu contexto e o que espera do cuidado. Esse olhar ajuda a compreender cada caso antes de discutir os próximos passos.
                        </p>
                        <p>
                            A proposta é construir caminhos de cuidado de forma clara e individualizada, respeitando as necessidades e os objetivos apresentados em consulta.
                        </p>
                    </div>

                    <div data-animate="highlights" className="grid gap-4 sm:grid-cols-2">
                        {highlights.map(({ title, description }) => (
                            <div key={title} className="rounded-2xl border border-site-border bg-white/70 p-5 shadow-sm backdrop-blur">
                                <h3 className="text-sm font-semibold text-accent">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink">{description}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <div data-animate="image" className="relative flex items-center justify-center">
                    <div className="relative w-full max-w-sm">
                        <div className="relative overflow-hidden rounded-[6px] border border-site-border bg-white/80">
                            <Image
                                src="/assets/estudo2.png"
                                alt="Dr. Leonardo Barreto estudando"
                                width={420}
                                height={520}
                                className="h-full w-full object-cover"
                                quality={75}
                                sizes="(max-width: 640px) 220px, (max-width: 1023px) 320px, 360px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
