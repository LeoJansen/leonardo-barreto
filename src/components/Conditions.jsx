// src/components/Conditions.jsx

// Enable client-side behavior for GSAP animations
'use client';


import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { conditionsDetails } from '../contants/index.js';

function Conditions() {
  // Register plugins once on the client
  gsap.registerPlugin(ScrollTrigger);

  const conditions = [
    // Use existing PNG assets for base images
    { key: 'depressao', name: 'DEPRESSÃO', icon: '/assets/depressao-icon.svg', pic: '/assets/depressao2.png', picBefore: '/assets/depressao1.png' },
    { key: 'ansiedade', name: 'ANSIEDADE', icon: '/assets/ansiedade-icon.svg', pic: '/assets/ansiedade2.png', picBefore: '/assets/ansiedade1.png' },
    { key: 'insonia', name: 'INSÔNIA', icon: '/assets/insonia-icon.svg', pic: '/assets/insonia2.png', picBefore: '/assets/insonia1.png' },
    { key: 'tdah', name: 'TDAH', icon: '/assets/tdah-icon.svg', pic: '/assets/tdah2.png', picBefore: '/assets/tdah1.png' },
  ];

  // Refs to overlay wrappers to animate opacity/scale on hover
  const overlayRefs = useRef([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
 

  const handleEnter = (index) => {
    const el = overlayRefs.current[index];
    if (!el) return;
    gsap.to(el, { opacity: 1, duration: 1, ease: 'slow' });
  };

  const handleLeave = (index) => {
    const el = overlayRefs.current[index];
    if (!el) return;
    gsap.to(el, { opacity: 0, duration: 1, ease: 'slow' });
  };

  // Entrance animations on scroll
  useEffect(() => {
    // Scope animations to this component for easy cleanup
    const ctx = gsap.context(() => {
      // Title bar fade-up
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 24,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
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
            start: 'top 45%',
            once: true,
          },
        });
      }

      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className='md:h-max-screen w-full bg-[rgb(250,255,255)] '>
      <div ref={titleRef} className='bg-[#3c3f3f] w-full h-25 flex justify-center items-center gap-2 md:gap-4 '>
        <h2 className='text-[32px] md:text-[56px] text-center py-8 gradient2 font-semibold tracking-tight'>Fique</h2>
        <span className='text-[36px] md:text-[64px] text-center py-8 text-[#29B8B4] font-bold tracking-tighter'>ATENTO</span>
        <h2 className='text-[32px] md:text-[56px] text-center py-8 gradient2 font-semibold tracking-tight'>aos sinais</h2>

      </div>
      <div className="grid md:grid-cols-2 items-center my-8 md:my-8 gap-2  p-4 md:p-14">
        {conditions.map((condition, index) => (
          <div
            className='flex flex-col md:flex-row justify-center items-center  m-4'
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className='flex flex-col items-center '>
              <span className="mt-2 text-md font-bold text-[#5f5f5f]">
                {condition.name}
              </span>

              <div
                key={condition.name}
                className="flex flex-col items-center select-none p-4  rounded-l-[8px] "
              >

                <div
                  className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer"
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave(index)}
                  onFocus={() => handleEnter(index)}
                  onBlur={() => handleLeave(index)}
                  role="img"
                  aria-label={condition.name}
                >
                  {/* Base image (initially visible) */}
                  <Image
                    quality={100}
                    src={condition.picBefore}
                    alt={condition.name}
                    width={1024}
                    height={1024}
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-md"
                    priority={false}
                  />

                  {/* Overlay image (animates in on hover) */}
                  <div
                    ref={(el) => (overlayRefs.current[index] = el)}
                    className="absolute inset-0 opacity-0 scale-100"
                    style={{ pointerEvents: 'none' }}
                  >
                    <Image
                      quality={100}
                      src={condition.pic}
                      alt={condition.name}
                      width={1024}
                      height={1024}
                      className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-md"
                    />
                  </div>
                </div>


              </div>
            </div>
   {conditionsDetails[condition.key]?.bullets?.length ? (
              <div className='flex flex-col items-center select-none h-full justify-center '>
                <ul className='list-inside '>
                  {conditionsDetails[condition.key].bullets.map((bullet, idx) => (
                    <li key={idx} className="max-w-md text-sm p-4 text-[#929292] text-justify bullet-icon">
                      <h3 className="font-semibold  text-[#686868] ">{bullet.title}</h3>
                      <p className="">{bullet.description}</p>
                    </li>
                  ))}
                </ul>
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