"use client";
import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';
import { useOnScreen } from '@/hooks/useOnScreen';

function Specialization() {
    const artRef = useRef(null);
    const isMobileQuery = useMemo(() => '(max-width: 767px)', []);

    const isVisible = useOnScreen(artRef, { rootMargin: '300px', threshold: 0.01, once: true });

    useEffect(() => {
        if (!isVisible) return;

        let cancelled = false;
        let cleanup = () => {};

        const init = async () => {
            try {
                const gsapMod = await import('gsap');
                const gsap = gsapMod.gsap ?? gsapMod.default ?? gsapMod;
                const stMod = await import('gsap/ScrollTrigger');
                const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
                gsap.registerPlugin(ScrollTrigger);

                if (cancelled) return;

                if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    return;
                }

                const isMobile = window.matchMedia && window.matchMedia(isMobileQuery).matches;

                const maskTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#art',
                        start: '-=300px top',
                        end: '600px bottom',
                        scrub: 1.5,
                    },
                });

                maskTimeline.to(
                    '.masked-img',
                    {
                        scale: 1.3,
                        maskPosition: 'center',
                        maskSize: isMobile ? '100%' : '500%',
                        duration: 2,
                        ease: 'power1.inOut',
                    },
                    '<'
                );

                cleanup = () => {
                    if (maskTimeline.scrollTrigger) maskTimeline.scrollTrigger.kill();
                    maskTimeline.kill();
                };
            } catch (_) {
                // animação é opcional
            }
        };

        init();

        return () => {
            cancelled = true;
            cleanup();
        };
    }, [isMobileQuery, isVisible]);

    return (
        <div ref={artRef} id="art" className="relative h-80 xl:h-[600px] flex w-full xl:my-20  overflow-hidden">
            <div className=" w-full h-full xl:rounded-2xl">
                <div className="content">
                    <div className="relative cocktail-img  max-w-full h-80  xl:h-[600px] flex w-full">
                        <div className="flex w-2/3">
                            <div className="relative h-full w-full lg:-translate-x-1/4">
                                <Image
                                    src="/assets/under-img.png"
                                    alt="cocktail"
                                    fill
                                    quality={50}
                                    sizes="(max-width: 1280px) 67vw, 60vw"
                                    className="masked-img mask-size-[50%] xl:mask-size-[40%] object-cover max-w-[100vw] rounded-[40px]"
                                />
                            </div>
                        </div>
                        <div className="hidden xl:flex w-2/5 h-full bg-[#145251] rounded-l-xl text-[#f8f8f8] align z-20 items-center justify-center text-justify leading-relaxed py-10 px-10   text-md">
                            <p>A busca pela excelência é um pilar na trajetória do Dr. Leonardo Barreto. Pós-graduando em Saúde Mental pelo Hospital Israelita Albert Einstein, uma das instituições de saúde mais prestigiadas do Brasil.
                                Este percurso acadêmico lhe proporcionou uma sólida base teórica e prática, com acesso a uma metodologia de ensino de ponta e o contato com os mais renomados especialistas da área. Essa experiência garante que o Dr. Leonardo aplique em sua prática clínica os mais altos padrões de conhecimento, sempre atualizado com as inovações da saúde mental.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specialization;