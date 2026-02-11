import Image from 'next/image';

function HeroSection() {

  return (
    <header id="inicio" className="relative h-[calc(93vh-58px)] md:h-[90vh] w-full flex flex-col justify-between pt-[40vh] ">
      {/* Imagem de fundo */}
       <Image
        fill
        quality={75}
        src="/assets/hero-desktop.png"
        alt="Leonardo Barreto"
        loading="eager"
        style={{ objectFit: 'cover' }}
        className='hidden md:block'
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
      <Image
        fill
        quality={100}
        src="/assets/hero-mobile.jpeg"
        alt="Leonardo Barreto"
        priority
        fetchPriority="high"
        style={{ objectFit: 'cover' }}
        className='md:hidden'
       
      />



      <div
        className="hero-anim-left hero-delay-1 relative z-20 rounded-r-[5px] md:rounded-r-[7px] bg-[#145251] flex justify-center items-center w-fit p-4 shadow-[2px_2px_6px_2px_rgba(30,45,40,0.51924)]"
      >
        
        <div className='flex flex-col items-center justify-center '>
          <div className='flex gap-1 items-end'>
            <span className='text-[#757474]'>Dr.</span>
            <h3 className='text-[#d8d8d8] text-[34px] md:text-[36px]  font-light tracking-[-0.054em]  leading-8'>Leonardo Barreto</h3>
          </div>
          
          <h1 className='text-[#949b9b] text-[24px] md:text-[26px] font-extralight leading-tight md:leading-tight'>Saúde Mental </h1>


        </div>


      </div>

      {/* Botões sobre a imagem */}
      <div
        className="hero-anim-right hero-delay-2 -max-w-[400px] -w-[90%] bg-[#145251] -rounded-xl shadow-lg p-3 md:p-4 flex border-2 border-[#005E61]/40 z-20"
      >
        <div className="flex gap-7 w-full items-start justify-center text-center font-medium text-[#afc9c9] text-[13px]">

          {/* Ícone de Terapia */}
          <div className='hero-anim-up hero-delay-3 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-5 w-1/3 self-end shadow-[0px_4px_6px_0px_rgba(0,0,0,0.12)] rounded-sm p-4 '>
            <Image src="/assets/terapiaIcon.svg" alt="Terapia" width={40} height={40} className='w-6 h-6 ' />
            <p className='leading-4 text-[#bebdbd] md:text-[14px]'>Consultas<br/>Online</p>
          </div>
          <div className='hero-anim-up hero-delay-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-5  w-1/3 self-end shadow-[0px_4px_6px_0px_rgba(0,0,0,0.12)] rounded-sm p-4 '>
            <Image src="/assets/medicacaoIcon.svg" alt="Medicação" width={40} height={40} className='w-6 h-6 ' />
            <p className='leading-4 text-[#bebdbd] md:text-[14px]'>Tratamento<br/>Individualizado</p>
          </div>
          <div className='hero-anim-up hero-delay-5 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-5 w-1/3 self-end shadow-[0px_4px_6px_0px_rgba(0,0,0,0.12)] rounded-sm p-4 '>
            <Image src="/assets/atendimentoIcon.svg" alt="Atendimento" width={40} height={40} className='w-6 h-6 ' />
            <p className='leading-4 text-[#bebdbd] md:text-[14px]'>Atendimento<br/>Humanizado</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;