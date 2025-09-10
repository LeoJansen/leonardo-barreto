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
            
                markers: true
            }
        });

        maskTimeline
            .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '500%', duration: 2, ease: 'power1.inOut' }, '<');

        // Limpeza ao desmontar
        return () => {
            if (maskTimeline.scrollTrigger) maskTimeline.scrollTrigger.kill();
            maskTimeline.kill();
        };
    }, [isMobile]);

    return (
        <div id="art" className="relative h-80 overflow-hidden flex w-full">
            <div className="container w-full h-full">
                <div className="content">
                    <div className="cocktail-img  max-w-full h-100 ">
                        <img src="/assets/under-img.png" alt="cocktail" className="absolute   masked-img size-full object-contain max-w-[100vw]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specialization;