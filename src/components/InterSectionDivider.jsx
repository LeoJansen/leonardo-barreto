"use client";

import { useEffect, useRef } from "react";
import { useOnScreen } from "@/hooks/useOnScreen";

const InterSectionDivider = () => {
  const wrapperRef = useRef(null);
  const svgHostRef = useRef(null);
  const tlRef = useRef(null);
  const floatRef = useRef(null);

  const isVisible = useOnScreen(wrapperRef, { rootMargin: '300px', threshold: 0.01, once: true });

  useEffect(() => {
    if (!isVisible) return;

    let isCancelled = false;
    let ctx;
    let tl;
    let floatTl;

    const loadAndAnimate = async () => {
      try {
        const gsapMod = await import('gsap');
        const gsap = gsapMod.gsap ?? gsapMod.default ?? gsapMod;
        const stMod = await import('gsap/ScrollTrigger');
        const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
        gsap.registerPlugin(ScrollTrigger);

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return;
        }

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
        // Obs: `getTotalLength()` pode forçar reflow (medição síncrona). Para evitar isso,
        // normalizamos o comprimento do path para 1 via `pathLength` e animamos dashoffset em [0..1].
        paths.forEach((p) => {
          const rawFill = p.getAttribute("fill");
          const fill = !rawFill || rawFill === "none" ? "#ffffff" : rawFill;

          // Normaliza a métrica do path; assim dasharray/dashoffset = 1 cobre o traço inteiro.
          p.setAttribute("pathLength", "1");

          gsap.set(p, {
            stroke: fill,
            strokeWidth: 1.6,
            strokeOpacity: 1,
            fillOpacity: 0,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            vectorEffect: "non-scaling-stroke",
            willChange: "stroke-dashoffset, fill-opacity, stroke-opacity",
          });
        });

        // Timeline: desenhar no scroll + preencher e esconder o traço
        tl = gsap
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

        tlRef.current = tl;

        // Animação sutil contínua para dar vida à seção
        floatTl = gsap.timeline({
          repeat: -1,
          repeatDelay: 5, // pausa de 0.6s só após concluir a ida+volta
          defaults: { ease: "sine.inOut" },
        })
          .to(svgEl, { opacity: 0.185, y: 10, rotate: 0.1, duration: 0.51 })
          .to(svgEl, { opacity: 1, y: 0, rotate: 0, duration: 0.81 });

        floatRef.current = floatTl;
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
      ctx?.revert?.();
      // Limpa o SVG injetado para evitar vazamento no hot reload
      if (svgHostRef.current) svgHostRef.current.innerHTML = "";
    };
  }, [isVisible]);

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