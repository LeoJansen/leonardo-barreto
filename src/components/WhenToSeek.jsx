// src/components/WhenToSeek.jsx
'use client';


import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WhenToSeek() {
  // Register plugin on client
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const titleGroupRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Scope timeline to this section for easy cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          once: true,
        },
      });

      if (imageWrapRef.current) {
        tl.from(
          imageWrapRef.current,
          { opacity: 0, x: -40, duration: 0.9 },
          0
        );
      }

      if (titleGroupRef.current) {
        const titles = titleGroupRef.current.querySelectorAll("h2");
        if (titles.length) {
          tl.from(titles, { opacity: 0, y: 22, duration: 0.9, stagger: 0.12 }, 0.1);
        }
      }

      if (paragraphRef.current) {
        tl.from(paragraphRef.current, { opacity: 0, y: 16, duration: 0.9 }, 0.35);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="when-to-seek" ref={sectionRef}>
      <div className="p-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 py-15 ">
        <div className="flex justify-center md:w-1/2 ">
          <div
            ref={imageWrapRef}
            className="relative w-full h-full flex justify-center items-center "
          >
            <Image
              src="/assets/whenToSeek.png"
              alt="Quando procurar um psiquiatra"
              width={500}
              height={500}
              className="object-cover w-[300px] md:w-[350px] lg:w-[400px] h-auto rounded-[14px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 px-4 md:px-10 xl:px-20">
          <div
            ref={titleGroupRef}
            className='flex flex-col items-start leading-[1.2] w-full'
          >
            {/* Título */}
            <h2 className="text-[35px]  font-extralight tracking-[-0.08em] leading-5 text-[#6B7777]">
              Quando procurar um
            </h2>
            <h2 className="text-[40px] md:text-[48px] lg:text-[64px] font-medium text-[#176565] tracking-[-0.045em]">
              PSIQUIATRA?
            </h2>
          </div>
          <div className='px-2 w-full flex justify-center'>
            {/* Parágrafo de texto */}
            <p
              ref={paragraphRef}
              className="mt-8 text-sm md:text-base text-[#5e5e5e] leading-relaxed text-justify "
            >
              Ter a mente saudável é essencial para o bem-estar e reflete
              positivamente em diversos outros aspectos da vida, como família,
              trabalho e relações sociais. Algumas situações difíceis podem
              acabar gerando ansiedades e alterações mentais suficientes para
              retirar de algumas pessoas a serenidade mental ou a capacidade de
              decisão necessária. Quando os sintomas psiquiátricos se tornam
              um problema, prejudicando o desempenho das atividades no trabalho,
              vida pessoal e vida afetiva, um tratamento pode ajudá-lo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhenToSeek;