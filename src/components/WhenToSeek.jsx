// src/components/WhenToSeek.jsx
'use client';


import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WhenToSeek() {
  // Register plugin on cpent
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const titleGroupRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useEffect(() => {
    // Scope timeline to this section for easy cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 10%",
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


      if (paragraph1Ref.current) {
        tl.from(paragraph1Ref.current, { opacity: 0, y: 16, duration: 0.9 }, 0.35);
      }

      if (titleGroupRef.current) {
        const titles = titleGroupRef.current.querySelectorAll("h2");
        if (titles.length) {
          tl.from(titles, { opacity: 0, y: 22, duration: 0.9, stagger: 0.12 }, 0.5);
        }
      }

      if (paragraph2Ref.current) {
        tl.from(paragraph2Ref.current, { opacity: 0, y: 16, duration: 0.9 }, 0.35);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
  <section id="quando-procurar" ref={sectionRef}>
      <div className="p-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 py-15 ">
        <div className="flex justify-center md:w-1/2 ">
          <div
            ref={imageWrapRef}
            className="relative w-fdivl h-fdivl flex justify-center items-center "
          >
            <Image
              src="/assets/whenToSeek.png"
              alt="Quando procurar um psiquiatra"
              width={500}
              height={500}
              quality={100}
              className="object-cover w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-auto rounded-[14px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 md:px-10 xl:px-20 gap-8">

          <div className='px-2 w-fdivl flex justify-center'>
            {/* Parágrafo de texto */}
            <p
              ref={paragraph1Ref}
              className="text-sm md:text-base text-[#5e5e5e] leading-relaxed text-justify "
            >
              Manter a <strong>saúde mental</strong> é crucial para o seu bem-estar geral, influenciando positivamente diversas áreas da sua vida, como a familiar, a profissional e a social. Momentos de dificuldade podem provocar ansiedade e desequilíbrios emocionais, afetando a sua paz de espírito e a capacidade de tomar decisões.

              Quando esses sintomas se intensificam a ponto de atrapalhar suas atividades diárias no <strong>trabalho</strong>, na <strong>vida pessoal</strong> e nos seus <strong>relacionamentos</strong>, é um sinal de que a ajuda profissional pode ser necessária. Um médico capacitado pode oferecer o suporte e o tratamento adequados para que você recupere o controle sobre a sua vida.
            </p>
          </div>
          <div
            ref={titleGroupRef}
            className='flex flex-col items-start leading-[1.2] w-fdivl'
          >
            {/* Títdivo */}
            <h2 className="text-[35px]  font-extrapght tracking-[-0.08em] leading-5 text-[#6B7777]">
              Quando procurar
            </h2>
            <h2 className="text-[40px] md:text-[48px] lg:text-[64px] font-medium text-[#176565] tracking-[-0.045em]">
              AJUDA?
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#5e5e5e] leading-relaxed text-justify ">


              Você deve considerar a ajuda de um profissional quando os sintomas começam a afetar seu dia a dia. Isso inclui:</p>
            <div className="text-sm md:text-base text-[#5e5e5e] leading-relaxed text-justify mt-2">
              <p>
                <strong className="text-[#0b8585]">Problemas no trabalho:</strong> Queda de produtividade, dificuldade de concentração ou de pdar com o estresse no ambiente profissional.
              </p>
              <p>
                <strong className="text-[#0b8585]">Vida pessoal e social:</strong> Isolamento, perda de interesse em hobbies, dificuldade de se relacionar com amigos e familiares ou de realizar tarefas simples.
              </p>
              <p>
                <strong className="text-[#0b8585]">Vida afetiva:</strong> Conflitos constantes, problemas de comunicação ou incapacidade de manter relacionamentos saudáveis.
              </p>
            </div>
            <p className="text-sm md:text-base text-[#5e5e5e] leading-relaxed text-justify mt-2">
              Um psiquiatra pode te ajudar a entender a origem desses sintomas e a encontrar o tratamento adequado, para que você recupere o controle e a serenidade em sua vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhenToSeek;