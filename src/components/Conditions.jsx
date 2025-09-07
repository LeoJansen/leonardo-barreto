// src/components/Conditions.jsx


import Image from 'next/image';

function Conditions() {
  const conditions = [
    { name: 'DEPRESSÃO', icon: '/assets/depressao.svg' },
    { name: 'ANSIEDADE', icon: '/assets/ansiedade.svg' },
    { name: 'INSÔNIA', icon: '/assets/insonia.svg' },
    { name: 'TDAH', icon: '/assets/tdah.svg' },
  ];

  return (
    <section >
      <div className="flex flex-col items-center mt-8 mb-8 gap-12">
        {conditions.map((condition) => (
          <div key={condition.name} className="flex flex-col items-center">
          
              <Image
              quality={100}
                src={condition.icon}
                alt={condition.name}
                width={64}
                height={64}
                className="w-32 h-32"
              />
                <span className="mt-2 text-md font-bold text-gray-800">
              {condition.name}
            </span>
          
           
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center bg-[#2E3333] '>
        <div className='py-8'>
            <Image
              src="/assets/sofrer.png"
              alt="Insônia"
              width={1000}  // Coloque a largura original da imagem
    height={600} // Coloque a altura original da imagem
    className="w-[85vw] h-auto"
            />

        </div>

      </div>
    </section>
  );
}

export default Conditions;