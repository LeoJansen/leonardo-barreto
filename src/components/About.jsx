"use client";
// src/components/AboutSection.jsx

import Image from 'next/image';
import React, { use, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

function About() {
    const root = useRef(null);
 const isPortrait = useMediaQuery({ orientation: 'portrait' });
    // Register ScrollTrigger once in module scope (safe to call multiple times)
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const q = gsap.utils.selector(root);
       

        const tl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: {
                trigger: root.current,
                start: isPortrait ? '10% 20%' : '50% 20%',
                end: 'bottom 40%',
                toggleActions: 'play none none reverse',
                once: true,
   
            }
        });

        tl.from(q('.about-title'), { y: 24, autoAlpha: 0, duration: 0.6 })
          .from(q('.about-image'), { y: 24, autoAlpha: 0, duration: 0.6 }, '-=0.2')
          .from(q('.about-text p'), { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.15 }, '-=0.2');
    }, { scope: root });

    return (
        <section ref={root} className="p-6 px-10 bg-[#fbfeff]">
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 py-16 gap-16 md:gap-10 items-center justify-items-center'>


                <div className="about-title flex flex-col w-fit min-w-[300px] md:min-w-[330px] xl:min-w-[360px] col-start-1 row-start-1 md:col-start-2">
                    {/* Título */}
                    <h2 className="text-[30px] md:text-[33px] lg:text-[36px] tracking-[-0.0645em] leading-1 font-extralight text-[#7e7e7e]">
                        Uma paixão pela
                    </h2>
                    <h2 className="text-[50px] md:text-[55px] lg:text-[60px] tracking-[-0.07645em]      text-[#1C7A79]">
                        Saúde Mental
                    </h2>
                    <div className='flex items-start w-0-full justify-end'>
                        <h2 className="text-[40px] md:text-[44px] lg:text-[48px] leading-0 font-medium text-[#06aaa2] tracking-[-0.045em] ">
                            e
                        </h2>
                        <h2 className="text-[50px] md:text-[55px] lg:text-[60px] leading-3 font-medium text-[#30CCC9] tracking-[-0.045em] ml-2">
                            Bem-Estar
                        </h2>
                    </div>
                    <h2 className="text-[35px] md:text-[38.5px] lg:text-[42px] leading-15 text-[#008582] text-right">
                        Integral
                    </h2>
                </div>

                <div className="about-image col-start-1 row-start-2 md:row-span-2 md:row-start-1 flex w-full h-full justify-center items-center">
                    <Image src="/assets/estudo2.png" alt="Leonardo Barreto" width={300} height={300} className="rounded-lg shadow-md md:w-[400px]  md:h-auto" />
                </div>


                {/* Parágrafos de texto */}
                <div className="about-text col-start-1 row-start-3 md:row-start-2 md:col-start-2 flex flex-col h-full items-start justify-start text-sm text-[#5e5e5e] leading-relaxed text-justify space-y-4 px-2 xl:px-10">
                    <p>
                        Desde o início de sua jornada na medicina, o <strong className='text-[#26A2A0]'>Dr. Leonardo Barreto</strong> nutriu um
                        interesse profundo pela complexidade da mente humana e sua relação com o
                        corpo e o bem-estar. Essa paixão o levou a se especializar em Psiquiatria,
                        uma área onde ele encontrou o propósito de ajudar as pessoas a navegarem
                        pelos desafios emocionais e psicológicos da vida.
                    </p>
                    <p>
                        Sua abordagem vai muito além do tratamento de sintomas. Ele acredita em uma
                        <strong className='text-[#26A2A0]'> psiquiatria humanizada</strong>, que enxerga o paciente como um ser único,
                        considerando seu histórico de vida, suas experiências e o contexto em que
                        está inserido. O foco não é apenas em aliviar o sofrimento, mas em fortalecer
                        o indivíduo para que ele possa reconquistar a sua autonomia e qualidade
                        de vida.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;