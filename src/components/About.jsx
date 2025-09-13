// src/components/AboutSection.jsx

import Image from 'next/image';
import React from 'react';

function About() {
    return (
        <section className="p-6 px-10 bg-[#fbfeff]">
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 py-16 gap-16 md:gap-10 items-center justify-items-center'>


                <div className='flex flex-col w-fit min-w-[300px] col-start-1 row-start-1 md:col-start-2'>
                    {/* Título */}
                    <h2 className="text-[30px] md:text-[33px] md:text-2xl tracking-[-0.0645em] leading-1 font-extralight text-[#7e7e7e]">
                        Uma paixão pela
                    </h2>
                    <h2 className="text-[50px] md:text-[55px] tracking-[-0.07645em]      text-[#1C7A79]">
                        Saúde Mental
                    </h2>
                    <div className='flex items-start w-0-full justify-end'>
                        <h2 className="text-[40px] md:text-[44px] md:text-4xl leading-0 font-medium text-[#06aaa2] tracking-[-0.045em] ">
                            e
                        </h2>
                        <h2 className="text-[50px] md:text-[55px] leading-3 font-medium text-[#30CCC9] tracking-[-0.045em] ml-2">
                            Bem-Estar
                        </h2>
                    </div>
                    <h2 className="text-[35px] md:text-[38.5px] leading-14 text-[#008582] text-right">
                        Integral
                    </h2>
                </div>

                <div className='col-start-1 row-start-2 md:row-span-2 md:row-start-1 flex w-full h-full justify-center items-center'>
                    <Image src="/assets/estudo2.png" alt="Leonardo Barreto" width={300} height={300} className="rounded-lg shadow-md md:w-[400px] md:h-auto" />
                </div>


                {/* Parágrafos de texto */}
                <div className="col-start-1 row-start-3 md:row-start-2 md:col-start-2 flex flex-col h-full items-start justify-start text-sm text-[#5e5e5e] leading-relaxed text-justify space-y-4 px-2 xl:px-10">
                    <p>
                        Desde o início de sua jornada na medicina, o <strong className='text-[#1C7A79]'>Dr. Leonardo Barreto</strong> nutriu um
                        interesse profundo pela complexidade da mente humana e sua relação com o
                        corpo e o bem-estar. Essa paixão o levou a se especializar em Psiquiatria,
                        uma área onde ele encontrou o propósito de ajudar as pessoas a navegarem
                        pelos desafios emocionais e psicológicos da vida.
                    </p>
                    <p>
                        Sua abordagem vai muito além do tratamento de sintomas. Ele acredita em uma
                        <strong className='text-[#1C7A79]'> psiquiatria humanizada</strong>, que enxerga o paciente como um ser único,
                        considerando seu histórico de vida, suas experiências e o contexto em que
                        está inserido. O foco não é apenas em aliviar o sofrimento, mas em fortalecer
                        o indivíduo para que ele possa reconquistar a sua autonomia e qualidade
                        de vida.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;