// src/components/WhenToSeek.jsx

import React from 'react';

function WhenToSeek() {
  return (
    <section className="p-10 px-10 text-center mt-10">
        <div className='flex flex-col items-start leading-[1.2]'>

        
      {/* Título */}
      <h2 className="text-[35px]  font-extralight tracking-[-0.08em] leading-5 text-[#6B7777]">
        Quando procurar um
      </h2>
      <h2 className="text-[53px] md:text-4xl font-medium text-[#176565] tracking-[-0.045em]">
        PSIQUIATRA?
      </h2>
</div>
<div className='px-4'>
      {/* Parágrafo de texto */}
      <p className="mt-8 text-sm md:text-base text-[#5e5e5e] leading-relaxed text-justify">
        Ter a mente saudável é essencial para o bem-estar e reflete
        positivamente em diversos outros aspectos da vida, como família,
        trabalho e relações sociais. Algumas situações difíceis podem
        acabar gerando ansiedades e alterações mentais suficientes para
        retirar de algumas pessoas a serenidade mental ou a capacidade de
        decisão necessária. Quando os sintomas psiquiátricos se tornam
        um problema, prejudicando o desempenho das atividades no trabalho,
        vida pessoal e vida afetiva, um tratamento pode ajudá-lo.
      </p>
      </div>
    </section>
  );
}

export default WhenToSeek;