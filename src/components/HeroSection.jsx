// src/components/HeroSection.jsx

import React from 'react';

function HeroSection() {
  return (
    <div className="relative h-[80vh]">
      {/* Imagem de fundo */}
      <img 
        src="/assets/leonardo-barreto-hero.jpeg" 
        alt="Leonardo Barreto" 
        className="w-full h-auto object-cover" 
      />

      {/* Botões sobre a imagem */}
      <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg p-4 flex justify-around">
        <div className="flex gap-4 items-start text-center">
       
            {/* Ícone de Terapia */}
            <img src="/assets/terapia.svg" alt="Terapia" className="w-20 h-20" />
             <img src="/assets/medicacao.svg" alt="Terapia" className="w-20 h-20" />
             <img src="/assets/atendimento.svg" alt="Terapia" className="w-24 h-24" />
             
       
     
        </div>
       
     
      </div>
    </div>
  );
}

export default HeroSection;