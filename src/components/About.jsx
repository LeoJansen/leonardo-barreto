"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
    {
        title: 'Visão Integrada',
        description: 'Cada plano terapêutico considera história, contexto e objetivos individuais.'
    },
    {
        title: 'Autonomia do Paciente',
        description: 'Acompanhamento focado em fortalecer o protagonismo e a qualidade de vida.'
    }
];

function About() {
    const root = useRef(null);
    const isPortrait = useMediaQuery({ orientation: 'portrait' });

    useGSAP(
        (context) => {
            const q = context.selector;

            const timeline = gsap.timeline({
                defaults: { ease: 'power2.out' },
                scrollTrigger: {
                    trigger: context.scope,
                    start: isPortrait ? 'top 80%' : 'top 65%',
                    end: 'bottom 40%',
                    toggleActions: 'play none none reverse',
                    once: true
                }
            });

            timeline
                .from(q('[data-animate="heading"] > *'), {
                    y: 24,
                    autoAlpha: 0,
                    duration: 0.6,
                    stagger: 0.12
                })
                .from(q('[data-animate="copy"] p'), {
                    y: 16,
                    autoAlpha: 0,
                    duration: 0.5,
                    stagger: 0.15
                }, '-=0.25')
                .from(q('[data-animate="highlights"] > div'), {
                    y: 18,
                    autoAlpha: 0,
                    duration: 0.45,
                    stagger: 0.1
                }, '-=0.3')
                .from(q('[data-animate="image"]'), {
                    y: 32,
                    autoAlpha: 0,
                    duration: 0.7
                }, '-=0.7');
        },
        { scope: root, dependencies: [isPortrait] }
    );

    return (
        <section ref={root} className="bg-[#fbfeff] py-20">
            <div className="mx-auto flex max-w-6xl flex-col-reverse gap-16 px-6 md:px-10 lg:grid lg:grid-cols-[1.15fr_minmax(320px,0.9fr)] lg:items-center">
                <article className="flex flex-col gap-10 text-[#4b4b4b]">
                    <header data-animate="heading" className="flex flex-col gap-4">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#bce2e1] bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#008582]">
                            Sobre
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-[#124d4c] md:text-4xl lg:text-[44px]">
                            Uma paixão pela saúde mental e bem-estar integral
                        </h2>
                        <p className="max-w-xl text-base leading-relaxed text-[#5e5e5e]">
                            A trajetória do Dr. Leonardo Barreto combina ciência, empatia e compromisso em apoiar pessoas a viverem com equilíbrio emocional e propósito.
                        </p>
                    </header>

                    <div data-animate="copy" className="space-y-4 text-justify text-sm leading-relaxed text-[#5e5e5e] md:text-base">
                        <p>
                            Desde o início de sua jornada na medicina, o <strong className="text-[#26A2A0]">Dr. Leonardo Barreto</strong> nutriu um interesse profundo pela complexidade da mente humana e sua relação com o corpo e o bem-estar. Essa paixão o levou a se especializar em Saúde Mental, área onde encontrou propósito ao ajudar pessoas a navegarem pelos desafios emocionais e psicológicos da vida.
                        </p>
                        <p>
                            Sua abordagem vai muito além do tratamento de sintomas. Ele acredita em uma <strong className="text-[#26A2A0]">abordagem humanizada</strong>, que enxerga o paciente como um ser único, considerando histórico de vida, experiências e contexto. O foco não é apenas aliviar o sofrimento, mas fortalecer o indivíduo para que reconquiste autonomia e qualidade de vida.
                        </p>
                    </div>

                    <div data-animate="highlights" className="grid gap-4 sm:grid-cols-2">
                        {highlights.map(({ title, description }) => (
                            <div key={title} className="rounded-2xl border border-[#dfeeed] bg-white/70 p-5 shadow-sm backdrop-blur">
                                <h3 className="text-sm font-semibold text-[#008582]">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#5e5e5e]">{description}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <div data-animate="image" className="relative flex items-center justify-center">
                    <div className="relative w-full max-w-sm">
                        <div className="relative overflow-hidden rounded-[6px] border border-[#dfeeed] bg-white/80">
                            <Image
                                src="/assets/estudo2.png"
                                alt="Dr. Leonardo Barreto estudando"
                                width={420}
                                height={520}
                                className="h-full w-full object-cover"
                                sizes="(max-width: 1023px) 80vw, 360px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;