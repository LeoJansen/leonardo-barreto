"use client";

import Image from 'next/image';
import { HiOutlineUser, HiOutlineUserGroup } from 'react-icons/hi2';
import { useEffect, useRef } from 'react';
import { useOnScreen } from '@/hooks/useOnScreen';

const highlights = [
    {
        Icon: HiOutlineUser,
        title: 'Escuta individual',
        description: 'A conversa considera a história, o momento de vida e as necessidades de cada pessoa.'
    },
    {
        Icon: HiOutlineUserGroup,
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
        <section id="sobre" ref={root} aria-labelledby="about-heading" tabIndex={-1} className="scroll-mt-24 bg-surface pt-2 pb-3 focus:outline-none sm:py-8 lg:py-12">
            <div className="mx-auto flex max-w-6xl flex-col-reverse gap-3 px-5 sm:gap-7 sm:px-8 lg:grid lg:grid-cols-[1.2fr_minmax(300px,0.8fr)] lg:items-start lg:gap-12">
                <article className="relative z-10 flex flex-col gap-2 text-ink min-[375px]:gap-2.5 min-[430px]:gap-3 sm:gap-5 lg:gap-6">
                    <header data-animate="heading" className="flex flex-col gap-2 sm:gap-4">
                        <span className="w-fit text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-accent sm:text-xs">
                            Conheça o profissional
                        </span>
                        <h2 id="about-heading" className="max-w-[42rem] text-[1.375rem] font-semibold leading-[1.12] tracking-tight text-brand-deep sm:text-3xl lg:text-[2.25rem]">
                            Cuidado em saúde mental começa com escuta
                        </h2>
                        <p className="max-w-xl text-xs leading-[1.4] text-ink sm:text-sm sm:leading-6">
                            Dr. Leonardo Barreto é médico (CRM-PR 58107) e atua na área de saúde mental, com atenção à história e às necessidades de cada pessoa.
                        </p>
                    </header>

                    <div data-animate="copy" className="max-w-2xl space-y-2 text-left text-xs leading-[1.4] text-ink sm:text-sm sm:leading-6">
                        <p>
                            O atendimento é um espaço de conversa sobre o que a pessoa está vivendo, com escuta cuidadosa e respeito ao seu contexto.
                        </p>
                    </div>

                    <div data-animate="highlights" className="grid gap-3 sm:grid-cols-2 lg:relative lg:z-20 lg:w-[calc(100%+6rem)]">
                        {highlights.map(({ Icon, title, description }) => (
                            <div key={title} className="flex items-start gap-3 rounded-xl border border-site-border bg-white p-3 shadow-[0_8px_24px_-20px_rgba(15,61,59,0.5)] sm:p-4">
                                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                                    <Icon aria-hidden="true" className="size-5" />
                                </span>
                                <div>
                                    <h3 className="text-xs font-semibold text-brand-deep sm:text-sm">{title}</h3>
                                    <p className="mt-1 text-[0.7rem] leading-[1.35] text-ink sm:text-sm sm:leading-snug">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

                <div data-animate="image" className="relative flex items-start justify-center lg:justify-end">
                    <div className="relative aspect-[2.24/1] w-full max-w-[34rem] overflow-hidden rounded-xl border border-site-border bg-white shadow-[0_18px_36px_-28px_rgba(15,61,59,0.35)] lg:aspect-[1.08/1] lg:max-w-full">
                        <Image
                            src="/assets/estudo2.png"
                            alt="Dr. Leonardo Barreto estudando"
                            fill
                            quality={75}
                            sizes="(max-width: 1023px) calc(100vw - 2.5rem), 34rem"
                            className="object-cover object-[center_46%] lg:object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
