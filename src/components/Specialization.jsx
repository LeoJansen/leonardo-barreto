// src/components/SpecializationSection.jsx


import Image from 'next/image';

function Specialization() {
  return (
    <section className="bg-[#EAF5F5] p-6 text-center">
      {/* Título da seção */}
      <h2 className="text-xl text-[#2B5454]">
        Especialização em
      </h2>
      <h2 className="text-4xl font-bold text-[#2B5454]">
        PSIQUIATRIA
      </h2>

      {/* Área da foto e da forma circular */}
      <div className="relative my-8 inline-block">
        {/* Foto do Dr. Leonardo Barreto */}
    
        {/* Forma circular abstrata sobre a imagem */}
        <div className="relative  ">
          <Image
          quality={100}
            src="/assets/especializacao.png"
            alt="Forma abstrata"
            width={300} // Ajuste conforme o SVG
            height={300} // Ajuste conforme o SVG
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Texto da instituição */}
      <p className="text-xl text-[#6B7777]">
        pelo Hospital
      </p>
      <p className="text-4xl font-bold text-[#2B5454]">
        Albert Einstein
      </p>
    </section>
  );
}

export default Specialization;