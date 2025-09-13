"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InterSectionDivider = () => {
  const wrapperRef = useRef(null);
  const svgHostRef = useRef(null);
  const tlRef = useRef(null);
  const floatRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let isCancelled = false;

    const loadAndAnimate = async () => {
      try {
        const res = await fetch("/assets/sofrer3.svg");
        const svgText = await res.text();
        if (isCancelled || !svgHostRef.current) return;
        svgHostRef.current.innerHTML = svgText;

        const svgEl = svgHostRef.current.querySelector("svg");
        if (!svgEl) return;

        // Responsividade e nitidez
        svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgEl.style.width = "100%";
        svgEl.style.height = "auto";

        const paths = Array.from(svgEl.querySelectorAll("path"));

        // Estado inicial: efeito "desenhar" no traço e preencher depois
        paths.forEach((p) => {
          try {
            const length = p.getTotalLength();
            const fill = p.getAttribute("fill") || "#ffffff";
            gsap.set(p, {
              stroke: fill,
              strokeWidth: 1.6,
              strokeOpacity: 1,
              fillOpacity: 0,
              strokeDasharray: length,
              strokeDashoffset: length,
              vectorEffect: "non-scaling-stroke",
            });
          } catch (_) {
            // Alguns elementos podem não suportar getTotalLength (ex: se não forem paths válidos)
          }
        });

        // Timeline: desenhar no scroll + preencher e esconder o traço
        tlRef.current = gsap
          .timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 80%",
              once: true,
            },
          })
          .to(paths, {
            strokeDashoffset: 0,
            duration: 2.2,
            stagger: { each: 0.05, from: "random" },
          })
          .to(
            paths,
            {
              fillOpacity: 1,
              duration: 1.1,
              stagger: { each: 0.01 },
            },
            "-=1.1"
          )
          .to(
            paths,
            {
              strokeOpacity: 0,
              duration: 0.8,
            },
            "-=0.3"
          );

        // Animação sutil contínua para dar vida à seção
        floatRef.current = gsap.timeline({
          repeat: -1,
          repeatDelay: 5, // pausa de 0.6s só após concluir a ida+volta
          defaults: { ease: "sine.inOut" },
        })
          .to(svgEl, { opacity: 0.185, y: 10, rotate: 0.1, duration: 0.51 })
          .to(svgEl, { opacity: 1, y: 0, rotate: 0, duration: 0.81 });
      } catch (e) {
        // Em caso de falha no fetch, não quebra a página
        // Pode-se manter um fallback simples (imagem estática) se desejado
        // console.error(e);
      }
    };

    loadAndAnimate();

    return () => {
      isCancelled = true;
      if (tlRef.current) {
        tlRef.current.scrollTrigger && tlRef.current.scrollTrigger.kill();
        tlRef.current.kill();
      }
      if (floatRef.current) floatRef.current.kill();
      // Limpa o SVG injetado para evitar vazamento no hot reload
      if (svgHostRef.current) svgHostRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div ref={wrapperRef} className="flex justify-center items-center bg-[#2E3333]">
      <div className="py-18 w-[85vw] md:w-[70vw]">
        {/* O SVG será injetado aqui para permitir animações finas com GSAP */}
        <div ref={svgHostRef} aria-label="Ilustração animada" />
      </div>
    </div>
  );
};

export default InterSectionDivider;