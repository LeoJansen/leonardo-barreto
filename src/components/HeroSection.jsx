"use client"


import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



function HeroSection() {
  const headerRef = useRef(null);
  const plaqueRef = useRef(null);
  const buttonsRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const button3Ref = useRef(null);

  useGSAP(() => {
    const targets = [
      headerRef.current,
      plaqueRef.current,
      buttonsRef.current,
      button1Ref.current,
      button2Ref.current,
      button3Ref.current,
    ];

    // Respect reduced motion preferences
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(targets, { clearProps: 'all', opacity: 1, x: 0, y: 0, visibility: 'visible' });
      return;
    }

    // Ensure all targets are hidden by GSAP first to avoid flash, then drop the CSS class
    gsap.set(targets, { autoAlpha: 0 });
    targets.forEach(el => el?.classList?.remove('gsap-prehidden'));

    const tl = gsap.timeline();
    tl
      .to(headerRef.current, { autoAlpha: 1, duration: 1, ease: 'power2.out', clearProps: 'opacity,visibility' })
      .fromTo(plaqueRef.current, { autoAlpha: 0, x: -80 }, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power2.out', clearProps: 'opacity,visibility,transform' }, '+=0.2')
      .fromTo(buttonsRef.current, { autoAlpha: 0, x: 500 }, { autoAlpha: 1, x: 0, duration: 0.7, ease: 'power2.out', clearProps: 'opacity,visibility,transform' }, '-=0.3')
      .fromTo(button1Ref.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', clearProps: 'opacity,visibility,transform' }, '=0.2')
      .fromTo(button2Ref.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', clearProps: 'opacity,visibility,transform' }, '=0.3')
      .fromTo(button3Ref.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', clearProps: 'opacity,visibility,transform' }, '=0.3');
  }, { scope: headerRef });

  return (
    <header id="inicio" ref={headerRef} className="gsap-prehidden relative h-[calc(93vh-58px)] md:h-[90vh] w-full flex flex-col justify-between pt-[40vh] ">
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
        className="gsap-prehidden relative  z-20 rounded-r-[5px] md:rounded-r-[7px] bg-[#145251] flex justify-center items-center w-fit p-4  shadow-[2px_2px_6px_2px_rgba(30,45,40,0.51924)] "
      >
        
        <div className='flex flex-col items-center justify-center '>
          <div className='flex gap-1 items-end'>
            <span className='text-[#757474]'>Dr.</span>
            <h3 className='text-[#d8d8d8] text-[34px] md:text-[36px]  font-light tracking-[-0.054em]  leading-8'>Leonardo Barreto</h3>
          </div>
          
          <h1 className='text-[#949b9b] text-[24px] md:text-[26px] font-extralight leading-tight md:leading-tight'>Saúde Mental </h1>


        </div>


      </div>

      {/* Botões sobre a imagem */}
      <div
        ref={buttonsRef}
        className="gsap-prehidden -max-w-[400px] -w-[90%] bg-[#145251] -rounded-xl shadow-lg p-3 md:p-4 flex border-2 border-[#005E61]/40 z-20"
      >
        <div className="flex gap-7 w-full items-start justify-center text-center font-medium text-[#afc9c9] text-[13px]">

          {/* Ícone de Terapia */}
          <div ref={button1Ref} className='gsap-prehidden flex flex-col md:flex-row items-center justify-center gap-1 md:gap-5 w-1/3 self-end shadow-[0px_4px_6px_0px_rgba(0,0,0,0.12)] rounded-sm p-4 '>
            <Image src="/assets/terapiaIcon.svg" alt="Terapia" width={40} height={40} className='w-6 h-6 ' />
            <p className='leading-4 text-[#bebdbd] md:text-[14px]'>Consultas<br/>Online</p>
          </div>
          <div ref={button2Ref} className='gsap-prehidden flex flex-col md:flex-row items-center justify-center gap-1 md:gap-5  w-1/3 self-end shadow-[0px_4px_6px_0px_rgba(0,0,0,0.12)] rounded-sm p-4 '>
            <Image src="/assets/medicacaoIcon.svg" alt="Medicação" width={40} height={40} className='w-6 h-6 ' />
            <p className='leading-4 text-[#bebdbd] md:text-[14px]'>Tratamento<br/>Individualizado</p>
          </div>
          <div ref={button3Ref} className='gsap-prehidden flex flex-col md:flex-row items-center justify-center gap-1 md:gap-5 w-1/3 self-end shadow-[0px_4px_6px_0px_rgba(0,0,0,0.12)] rounded-sm p-4 '>
            <Image src="/assets/atendimentoIcon.svg" alt="Atendimento" width={40} height={40} className='w-6 h-6 ' />
            <p className='leading-4 text-[#bebdbd] md:text-[14px]'>Atendimento<br/>Humanizado</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;