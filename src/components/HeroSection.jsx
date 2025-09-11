"use client"


import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';



function HeroSection() {
  const headerRef = useRef(null);
  const plaqueRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl
      .from(headerRef.current, { opacity: 0, duration: 1, ease: "power2.out" })
      .from(plaqueRef.current, { opacity: 0, x: -80, duration: 0.8, ease: "power2.out" }, '+=0.2')
      .from(buttonsRef.current, { opacity: 0, x: 500, duration: 0.7, ease: "power2.out" }, '-=0.3');

    // Efeito de iluminação intermitente na plaqueta

  }, []);

  return (
    <header ref={headerRef} className="relative h-[93vh] flex flex-col justify-between pt-[40vh] ">
      {/* Imagem de fundo */}
      <Image
        fill
        quality={100}
        src="/assets/leonardo-barreto-hero.png"
        alt="Leonardo Barreto"
        style={{ objectFit: 'cover' }}
        className='hidden md:block'
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
         <Image
        fill
        quality={100}
        src="/assets/leonardo-barreto-hero.jpeg"
        alt="Leonardo Barreto"
        style={{ objectFit: 'cover' }}
        className='md:hidden'
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />

      <div
        ref={plaqueRef}
        className="relative w-[309.6px] h-[103.2px] md:w-[387px] md:h-[129px] z-20 rounded-r-[4px] bg-[#f0feff]"
      >
        <Image
          fill
          quality={100}
          src="/assets/plaqueta.png"
          alt="Leonardo Barreto"
          className="rounded-r-[4px]"
          style={{ zIndex: 1 }}
        />
       
      </div>

      {/* Botões sobre a imagem */}
      <div
        ref={buttonsRef}
        className="-max-w-[400px] -w-[90%] bg-[#145251] -rounded-xl shadow-lg p-3 md:p-4 flex border-2 border-[#005E61]/40 z-20"
      >
        <div className="flex gap-7 w-full items-start justify-center text-center font-medium text-[#afc9c9] text-[13px]">

          {/* Ícone de Terapia */}
          <div className='flex flex-col items-center justify-center gap-1 w-1/3 self-end'>
            <Image src="/assets/Terapia2.svg" alt="Terapia" width={40} height={40} className='w-10 h-10 md:w-12 md:h-12' />
            <p className='leading-4'>Terapia<br />Online</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-1 w-1/3'>
            <Image src="/assets/Medicacao2.svg" alt="Medicação" width={40} height={40} className='w-10 h-10 md:w-12 md:h-12' />
            <p className='leading-4'>Medicação<br />Precisa</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-1 w-1/3'>
            <Image src="/assets/atendimento.svg" alt="Atendimento" width={40} height={40} className='w-10 h-10 md:w-12 md:h-12' />
            <p className='leading-4'>Atendimento Humanizado</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;