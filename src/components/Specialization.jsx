// src/components/SpecializationSection.jsx


import Image from 'next/image';

function Specialization() {
    return (
        <section className=" p-6 text-center">
            <div className='flex flex-col w-full items-start justify-center mt-8'>
                {/* Título da seção */}
                <h2 className="text-[30px] tracking-[-0.008em] leading-5 text-[#0F3D3B] font-light">
                    Especialização em
                </h2>
                <h2 className="text-[60px] tracking-[-0.08em] font-normal leading-18 text-[#145251]">
                    PSIQUIATRIA
                </h2>
            </div>


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
          <div className='flex flex-col w-full items-end justify-center mt-8'>
                {/* Título da seção */}
                <h2 className="text-[30px] tracking-[-0.008em] leading-5 text-[#0F3D3B] font-extralight">
                    pelo Hospital
                </h2>
                <h2 className="text-[55px] tracking-[-0.08em] font-normal leading-18 text-[#079795]">
                    Albert Einstein
                </h2>
            </div>
        </section>
    );
}

export default Specialization;