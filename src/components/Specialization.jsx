// src/components/SpecializationSection.jsx


import Image from 'next/image';

function Specialization() {
    return (
        <div className="specialization py-8 px-4">
            <section className=" text-center  ">
                <div className='   flex flex-col w-full items-start justify-center'>
                    {/* Título da seção */}
                    <h2 className="text-[30px] tracking-[-0.008em] leading-5 text-[#99d1cf] font-light">
                        Especialização em
                    </h2>
                    <h2 className="text-[60px] tracking-[-0.08em] font-normal leading-18 text-[#edf2f5]">
                        PSIQUIATRIA
                    </h2>
                </div>


                {/* Área da foto e da forma circular */}
                <div className="relative  inline-block">
                    {/* Foto do Dr. Leonardo Barreto */}

                    {/* Forma circular abstrata sobre a imagem */}
                    <div className="flex">
                        <Image
                            quality={100}
                            src="/assets/especializacao.png"
                            alt="Forma abstrata"
                            width={300} // Ajuste conforme o SVG
                            height={300} // Ajuste conforme o SVG
                            className="w-[400px] h-[400px]  "
                            
                        />
                    </div>
                </div>

                {/* Texto da instituição */}
              <div className='flex flex-col w-full items-end justify-center mt-2 p-4'>
                    {/* Título da seção */}
                    <h2 className="text-[30px] tracking-[-0.008em] leading-5 text-[#0F3D3B] font-extralight">
                        pelo Hospital
                    </h2>
                    <h2 className="text-[55px] tracking-[-0.098em] font-normal leading-18 text-[#078197]">
                        Albert Einstein
                    </h2>
                </div>
                <div className='flex w-full h-40 p-5'>
                    <Image
                        src="/assets/badges.svg"
                        alt="Logo do Hospital Albert Einstein"
                        width={150}
                        height={150}
                        quality={100}
                        className="object-contain w-full"
                    />

                </div>

            </section>
        </div>
    );
}

export default Specialization;