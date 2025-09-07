// src/components/HeroSection.jsx

import Image from 'next/image';
import React from 'react';

function HeroSection() {
  return (
    <div className="relative h-[80vh] flex">
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
            <Image src="/assets/Terapia.svg" alt="Terapia" width={40} height={40} className='w-16 h-16'/>
            <Image src="/assets/Medicacao.svg" alt="Medicação" width={40} height={40} className='w-16 h-16'/>
            <Image src="/assets/Atendimento.svg" alt="Atendimento" width={40} height={40} className='w-16 h-16'/>
        </div>
       
     
      </div>
    </div>
  );
}

export default HeroSection;