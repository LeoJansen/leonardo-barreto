// src/components/AboutSection.jsx

import React from 'react';

function About() {
    return (
        <section className="bg-[#EBFCFF] p-6 px-12">
            <div className='flex flex-col'>
            {/* Título */}
            <h2 className="text-[30px] md:text-2xl tracking-[-0.0645em] leading-1 font-extralight text-[#7e7e7e]">
                Uma paixão pela
            </h2>
            <h2 className="text-[50px] tracking-[-0.07645em]      text-[#1C7A79]">
                Saúde Mental
            </h2>
            <div className='flex items-start w-0-full justify-end'>
                <h2 className="text-[40px] md:text-4xl leading-0 font-medium text-[#06aaa2] tracking-[-0.045em] ">
                    e
                </h2>
                <h2 className="text-[50px] md:text-4xl leading-3 font-medium text-[#30CCC9] tracking-[-0.045em] ml-2">
                    Bem-Estar
                </h2>
            </div>
            <h2 className="text-[35px] md:text-3xl leading-14 text-[#008582] text-right">
                Integral
            </h2>
            </div>

            {/* Parágrafos de texto */}
            <div className="mt-6 text-gray-700 leading-relaxed text-justify space-y-4">
                <p>
                    Desde o início de sua jornada na medicina, o Dr. Leonardo Barreto nutriu um
                    interesse profundo pela complexidade da mente humana e sua relação com o
                    corpo e o bem-estar. Essa paixão o levou a se especializar em Psiquiatria,
                    uma área onde ele encontrou o propósito de ajudar as pessoas a navegarem
                    pelos desafios emocionais e psicológicos da vida.
                </p>
                <p>
                    Sua abordagem vai muito além do tratamento de sintomas. Ele acredita em uma
                    psiquiatria humanizada, que enxerga o paciente como um ser único,
                    considerando seu histórico de vida, suas experiências e o contexto em que
                    está inserido. O foco não é apenas em aliviar o sofrimento, mas em fortalecer
                    o indivíduo para que ele possa reconquistar a sua autonomia e qualidade
                    de vida.
                </p>
            </div>
        </section>
    );
}

export default About;