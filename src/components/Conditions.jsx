// src/components/Conditions.jsx

// Enable client-side behavior for GSAP animations
'use client';


import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { conditionsDetails } from '../contants/index.js';
import { useOnScreen } from '@/hooks/useOnScreen';

function Conditions() {
  const [activeCards, setActiveCards] = useState({});

  const conditions = [
    // Use existing PNG assets for base images
    { key: 'depressao', name: 'DEPRESSÃO', icon: '/assets/depressao-icon.svg', pic: '/assets/depressao2.png', picBefore: '/assets/depressao4.png' },
    { key: 'ansiedade', name: 'ANSIEDADE', icon: '/assets/ansiedade-icon.svg', pic: '/assets/ansiedade2.png', picBefore: '/assets/ansiedade4.png' },
    { key: 'insonia', name: 'INSÔNIA', icon: '/assets/insonia-icon.svg', pic: '/assets/insonia2.png', picBefore: '/assets/insonia4.png' },
    { key: 'tdah', name: 'TDAH', icon: '/assets/tdah-icon.svg', pic: '/assets/tdah2.png', picBefore: '/assets/tdah4.png' },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const isVisible = useOnScreen(sectionRef, { rootMargin: '300px', threshold: 0.01, once: true });

  // Entrance animations on scroll
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
        if (!sectionRef.current) return;

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return;
        }

        // Scope animations to this component for easy cleanup
        ctx = gsap.context(() => {
          // Title bar fade-up
          if (titleRef.current) {
            gsap.from(titleRef.current, {
              opacity: 0,
              y: 24,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 65%',
                once: true,
              },
            });
          }

          // Card items staggered fade-up
          const items = cardRefs.current.filter(Boolean);
          if (items.length) {
            gsap.from(items, {
              opacity: 0,
              y: 28,
              duration: 1.2,
              ease: 'power3.out',
              stagger: 0.5,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 55%',
                once: true,
              },
            });
          }
        }, sectionRef);
      } catch (_) {
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
    <section id="condicoes" ref={sectionRef} className='md:h-max-screen md:h-screen w-full bg-[rgb(250,255,255)] '>
      <div className='bg-[#3c3f3f] w-full h-25 flex  '>
        <div ref={titleRef} className='w-full flex justify-center items-center gap-2 md:gap-4 text-[#cacaca] text-shadow-2xs'>
          <h2 className='text-[32px] md:text-[56px] text-center py-8 font-semibold tracking-tight'>Fique</h2>
        <span className='atento-pulse text-[36px] md:text-[64px] text-center py-8 text-[#29B8B4] font-bold tracking-tighter'>ATENTO</span>
        <h2 className='text-[32px] md:text-[56px] text-center py-8 font-semibold tracking-tight'>aos sinais</h2>

        </div>
        

      </div>
      <div className="grid md:grid-cols-2 items-center gap-6  px-12 p-6  md:px-14">
        {conditions.map((condition, index) => (
          <div
            className='flex flex-col md:flex-row justify-center items-center  '
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className='flex flex-col items-center  rounded-[2px] bg-[#262626] rounded-t-md'>
              <div className='w-57 md:w-64 h-full flex justify-center items-end p-2 text-[21px] font-medium text-[hsl(0,0%,51%)] text-shadow-[0_3px_15px_rgb(182_200_220_/_0.35)] leading-none align-bottom pt-4'>
                <p>{condition.name}</p>
             
             
           
                 </div>
              

              <div
                key={condition.name}
                className="flex flex-col items-center select-none    "
              >

                <div
                  className="group relative w-56 h-56 md:w-64 md:h-64 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#29B8B4]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#262626]"
                  tabIndex={0}
                  role="img"
                  aria-label={condition.name}
                  onMouseEnter={() => setActiveCards((prev) => (prev[condition.key] ? prev : { ...prev, [condition.key]: true }))}
                  onFocus={() => setActiveCards((prev) => (prev[condition.key] ? prev : { ...prev, [condition.key]: true }))}
                >
                  {/* Base image (initially visible) */}
                  <Image
                    quality={75}
                    src={condition.picBefore}
                    alt={condition.name}
                    width={256}
                    height={256}
                    sizes="(max-width: 768px) 224px, 256px"
                    className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-b-md"
                  />

                  {/* Overlay image (animates in on hover) */}
                  {activeCards[condition.key] ? (
                    <div
                      className="absolute inset-0 opacity-0 scale-100 transition-opacity duration-700 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
                      style={{ pointerEvents: 'none' }}
                    >
                      <Image
                        quality={75}
                        src={condition.pic}
                        alt={condition.name}
                        width={256}
                        height={256}
                        sizes="(max-width: 768px) 224px, 256px"
                        className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-b-md"
                      />
                    </div>
                  ) : null}
                </div>


              </div>
            </div>
   {conditionsDetails[condition.key]?.bullets?.length ? (
              <div className='flex flex-col items-center select-none h-full justify-center '>
                <div className='list-inside '>
                  {conditionsDetails[condition.key].bullets.map((bullet, idx) => (
                    <div key={idx} className="max-w-md text-[14px] leading-relaxed p-4 text-[#929292] text-justify ">
                      <div className='flex items-start'> 
                        <Image 
                          src="/assets/listIcon.svg"
                          alt="list icon"
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        <h3 className="font-semibold  text-[#686868] ">{bullet.title}</h3>

                      </div>
                      <div className='pl-6'>
                        <p className="">{bullet.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
         
          </div>
        ))}
      </div>
    
    </section>
  );
}

export default Conditions;

<style jsx>{`
  .bullet-icon {
    position: relative;
    padding-left: 2.25rem; /* ajuste conforme o tamanho do ícone */
  }
  .bullet-icon::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: var(--bullet-size, 1.25rem);  /* 20px default */
    height: var(--bullet-size, 1.25rem);
    background: url('/assets/listIcon.svg') no-repeat center/contain;
  }
`}</style>