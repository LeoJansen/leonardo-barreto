import Image from "next/image";

const InterSectionDivider = () => {
  return (
    
      <div className='flex justify-center items-center bg-[#2E3333] '>
        <div className='py-18'>
          <Image
            src="/assets/sofrer.png"
            alt="Insônia"
            width={1000}  // Coloque a largura original da imagem
            height={600} // Coloque a altura original da imagem
            className="w-[85vw] md:w-[70vw] h-auto"
          />

        </div>

      </div>
  )
}

export default InterSectionDivider