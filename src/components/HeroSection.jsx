// src/components/HeroSection.jsx

import Image from 'next/image';


function HeroSection() {
  return (
    <header className="relative h-[90vh] flex flex-col justify-around">
      {/* Imagem de fundo */}
      <Image
        fill
        quality={100}
        src="/assets/leonardo-barreto-hero.png"
        alt="Leonardo Barreto"
        style={{ objectFit: 'cover' }}
      />
      <Image
        width={387}
        height={129}
        quality={100}
        src="/assets/plaqueta.png"
        alt="Leonardo Barreto"
        className='w-[309.6px] h-[103.2px] xl:w-[387px] xl:h-[129px] z-20'
      />

      {/* Botões sobre a imagem */}
      <div className="max-w-[400px] w-[90%] bg-[#145251] rounded-xl shadow-lg p-4 flex border-2 border-[#005E61]/40 z-20">
        <div className="flex gap-7 w-full items-start justify-center text-center font-medium text-[#afc9c9] text-[13px]">

          {/* Ícone de Terapia */}
          <div className='flex flex-col items-center justify-center gap-1 w-1/3 '>
            <Image src="/assets/Terapia2.svg" alt="Terapia" width={40} height={40} className='w-12 h-12' />
            <p className='leading-4'>Terapia<br />Online</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-1 w-1/3'>
            <Image src="/assets/Medicacao2.svg" alt="Medicação" width={40} height={40} className='w-12 h-12' />
            <p className='leading-4'>Medicação<br />Precisa</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-1 w-1/3'>
            <Image src="/assets/atendimento.svg" alt="Atendimento" width={40} height={40} className='w-12 h-12 ' />
            <p className='leading-4'>Atendimento Humanizado</p>
          </div>



        </div>


      </div>
    </header>
  );
}

export default HeroSection;