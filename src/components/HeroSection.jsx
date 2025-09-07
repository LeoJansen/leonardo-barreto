// src/components/HeroSection.jsx

import Image from 'next/image';


function HeroSection() {
  return (
    <div className="relative h-[80vh] flex">
      {/* Imagem de fundo */}
      <Image
        width={1920}
        height={1080}
        quality={100}
        src="/assets/leonardo-barreto-hero.jpeg"
        alt="Leonardo Barreto"
        className="w-full h-auto object-cover"
      />

      {/* Botões sobre a imagem */}
      <div className=" absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-[#145251] rounded-xl shadow-lg p-3 flex justify-between border-2 border-[#005E61]/40">
        <div className="flex gap-7 items-start justify-center text-center font-medium text-[#afc9c9] text-[13px]">

          {/* Ícone de Terapia */}
          <div className='flex flex-col items-center justify-center gap-2 w-1/3 '>
            <Image src="/assets/Terapia2.svg" alt="Terapia" width={40} height={40} className='w-12 h-12' />
            <p className='leading-4'>Terapia<br />Online</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2 w-1/3'>
            <Image src="/assets/Medicacao2.svg" alt="Medicação" width={40} height={40} className='w-12 h-12' />
            <p className='leading-4'>Medicação<br />Precisa</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2 w-1/3'>
            <Image src="/assets/atendimento.svg" alt="Atendimento" width={40} height={40} className='w-12 h-12 ' />
            <p className='leading-4'>Atendimento Humanizado</p>
          </div>



        </div>


      </div>
    </div>
  );
}

export default HeroSection;