// src/components/HeroSection.jsx

import React from 'react';

function HeroSection() {
  return (
    <div className="relative">
      {/* Imagem de fundo */}
      <img 
        src="/assets/leonardo-barreto-hero.jpeg" 
        alt="Leonardo Barreto" 
        className="w-full h-auto object-cover" 
      />

      {/* Botões sobre a imagem */}
      <div className=" bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg p-4 flex justify-around">
        <div className="flex flex-col items-center text-center">
          <div className="border border-teal-500 rounded-full p-2">
            {/* Ícone de Terapia */}
            <img src="/terapia-icon.png" alt="Terapia" className="w-10 h-10" />
          </div>
          <span className="text-sm mt-2">Terapia</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="border border-teal-500 rounded-full p-2">
            {/* Ícone de Medicação */}
            <img src="/medicacao-icon.png" alt="Medicação" className="w-10 h-10" />
          </div>
          <span className="text-sm mt-2">Medicação</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="border border-teal-500 rounded-full p-2">
            {/* Ícone de Atendimento */}
            <img src="/atendimento-icon.png" alt="Atendimento exclusivo" className="w-10 h-10" />
          </div>
          <span className="text-sm mt-2">Atendimento exclusivo</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;