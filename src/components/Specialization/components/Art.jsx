"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Specialization() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const start = isMobile ? 'top 20%' : 'top top';
        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: "-=300px top",
                end: '600px bottom',
                scrub: 1.5,

             
            }
        });

        maskTimeline
            .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: isMobile ? '100%' : '500%', duration: 2, ease: 'power1.inOut' }, '<');

        // Limpeza ao desmontar
        return () => {
            if (maskTimeline.scrollTrigger) maskTimeline.scrollTrigger.kill();
            maskTimeline.kill();
        };
    }, [isMobile]);

    return (
        <div id="art" className="relative h-80 xl:h-[600px] flex w-full xl:my-20  overflow-hidden">
            <div className=" w-full h-full xl:rounded-2xl">
                <div className="content">
                    <div className="relative cocktail-img  max-w-full h-80  xl:h-[600px] flex w-full">
                        <div className="flex w-2/3">
                            <img src="/assets/under-img.png" alt="cocktail" className="absolute  lg:left-[-25%] masked-img mask-size-[50%] xl:mask-size-[40%] size-full object-cover max-w-[100vw] rounded-[40px]" />
                        </div>
                        <div className="hidden xl:flex w-1/3 h-full bg-[#025C5C] rounded-l-xl text-[#d4d4d4] align z-20 items-center justify-center text-justify leading-relaxed py-10 px-10 text-md">
                            <p>A busca pela excelência é um pilar na trajetória do Dr. Leonardo Barreto. Sua formação em Psiquiatria foi aprimorada com a especialização realizada no Hospital Israelita Albert Einstein, uma das instituições de saúde mais prestigiadas do Brasil.
                                Este percurso acadêmico lhe proporcionou uma sólida base teórica e prática, com acesso a uma metodologia de ensino de ponta e o contato com os mais renomados especialistas da área. Essa experiência garante que o Dr. Leonardo aplique em sua prática clínica os mais altos padrões de conhecimento, sempre atualizado com as inovações da psiquiatria.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specialization;