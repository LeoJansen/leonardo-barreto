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
        <section id="sobre" ref={root} aria-labelledby="about-heading" tabIndex={-1} className="scroll-mt-24 bg-surface py-12 focus:outline-none sm:py-16 lg:py-20">
            <div className="mx-auto flex max-w-6xl flex-col-reverse gap-10 px-5 sm:px-8 lg:grid lg:grid-cols-[1.15fr_minmax(320px,0.9fr)] lg:items-center lg:gap-14">
                <article className="flex flex-col gap-6 text-ink sm:gap-8">
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
                            O atendimento parte de uma conversa sobre o que a pessoa está vivendo, com escuta cuidadosa e respeito ao seu contexto. Os próximos passos são discutidos em conjunto, de acordo com cada caso.
                        </p>
                    </div>

                    <div data-animate="highlights" className="grid gap-4 sm:grid-cols-2">
                        {highlights.map(({ title, description }) => (
                            <div key={title} className="rounded-2xl border border-site-border bg-white p-4 shadow-[0_12px_30px_-24px_rgba(15,61,59,0.5)] sm:p-5">
                                <h3 className="text-sm font-semibold text-accent">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink">{description}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <div data-animate="image" className="relative flex items-center justify-center">
                    <div className="relative aspect-[4/3] w-full max-w-[34rem] overflow-hidden rounded-3xl border border-site-border bg-white shadow-[0_22px_56px_-34px_rgba(15,61,59,0.4)]">
                        <Image
                            src="/assets/estudo2.png"
                            alt="Dr. Leonardo Barreto estudando"
                            fill
                            quality={75}
                            sizes="(max-width: 1023px) calc(100vw - 2.5rem), 34rem"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
