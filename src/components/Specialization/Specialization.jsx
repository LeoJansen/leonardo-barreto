"use client";
import React, { useRef } from 'react';
import Art from './components/Art';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

function Specialization() {
  const placa1 = useRef(null);
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const placa2 = useRef(null);
 const isPortrait = useMediaQuery({ orientation: 'portrait' })
 console.log("isPortrait: ", isPortrait)
    // Register ScrollTrigger once in module scope (safe to call multiple times)
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the header
    useGSAP(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
            trigger: placa1.current,
            start: '50% 20%' ,
            end: '100% 40%',
            toggleActions: 'play none none reverse',
            once: true,
           
        },
      });
      tl.from(placa1.current, { opacity: 0, y: 24, duration: 0.6 })
      tl.from(placa2.current, { opacity: 0, y: 24, duration: 0.6 }, '+=.3')




});

  return (
    <section ref={sectionRef}>
      <div ref={divRef} className=' flex w-full items-center justify-start my-10  '>
        <div ref={placa1} className='spec-head flex flex-col bg-[#025C5C]  p-5 px-10 rounded-r-xl z-20 border-2 border-[#024f520c] shadow-[2px_2px_6px_2px_rgba(10,51,40,0.6781924)] '>
          {/* Título da seção */}
          <h2 className="text-[23px] xl:text-[32px] tracking-[-0.008em] leading-3 xl:leading-8 text-[#29B8B4] font-extralight">
            Especialização em
          </h2>
          <h2 className="text-[40px] xl:text-[55px] tracking-[-0.08em] font-semilight leading-14 text-[#f2fffd]">
            SAÚDE MENTAL
          </h2>
        </div>
   
      </div>

      <Art />

      <div ref={placa2} className='spec-foot flex flex-col w-full items-end justify-center  p-5 pr-0 xl:pr-0   py-8 xl:p-8  xl:pb-10 z-20 '>
        <div className='shadow-[1px_1px_6px_2px_rgba(10,51,40,0.1924)] border-2 border-[#cadbdbb7] p-5 px-10 rounded-l-2xl bg-[#f5f5f5]'>
          {/* Título da seção */}
          <h2 className="text-[25px] xl:text-[30px] tracking-[-0.0678em] leading-3 xl:leading-6 text-[#0F3D3B] font-light">
            pelo Hospital                </h2>
          <h2 className="text-[45px] xl:text-[60px] tracking-[-0.08em] font-medium leading-14 gradient1">
            Albert Einstein
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Specialization;