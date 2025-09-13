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
  const atentoRef = useRef(null);
 

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
            start: 'top 65%',
            once: true,
          },
        });
      }

      // Continuous pulse/glow + color animation for "ATENTO"
      // Ends at initial state each loop without using yoyo
      if (atentoRef.current) {
        const el = atentoRef.current;
        const baseColor = '#29B8B4'; // initial text color from class
        const glowColor = '#53E2DE'; // accent color during pulse

        gsap.set(el, {
          display: 'inline-block',
          transformOrigin: '50% 50%',
          willChange: 'transform, text-shadow, opacity, color',
        });

        gsap.to(el, {
          keyframes: [
            {
              scale: 1.07891,
              color: glowColor,
              textShadow: '0px 0px 18px rgba(41, 184, 180, 0.75)',
              opacity: 0.96,
              duration: 0.86,
              ease: 'sine.inOut',
            },
            {
              scale: 1,
              opacity: 1, 
              color: baseColor,
              textShadow: '0px 0px 0px rgba(0,0,0,0)',
              duration: 0.86,
              ease: 'sine.inOut',
            },
          ],
          repeat: -1,
          repeatDelay: 3.4,
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

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className='md:h-max-screen w-full bg-[rgb(250,255,255)] '>
      <div className='bg-[#3c3f3f] w-full h-25 flex  '>
        <div ref={titleRef} className='w-full flex justify-center items-center gap-2 md:gap-4 text-[#cacaca] text-shadow-2xs'>
          <h2 className='text-[32px] md:text-[56px] text-center py-8 font-semibold tracking-tight'>Fique</h2>
        <span ref={atentoRef} className='text-[36px] md:text-[64px] text-center py-8 text-[#29B8B4] font-bold tracking-tighter'>ATENTO</span>
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
            <div className='flex flex-col items-center  rounded-[2px]'>
              <div className='w-56 md:w-64 h-full flex justify-center items-center bg-[hsl(0,0%,15%)] p-2 rounded-t-md'>
                <span className="mt-2 text-[19px]  font-medium text-[#9e9e9e]">
                {condition.name}
              </span>
                 </div>
              

              <div
                key={condition.name}
                className="flex flex-col items-center select-none    "
              >

                <div
                  className="relative w-56 h-56 md:w-64 md:h-64 cursor-pointer"
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
                    className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-b-md"
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
                      className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-b-md"
                    />
                  </div>
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