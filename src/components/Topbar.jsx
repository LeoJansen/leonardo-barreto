// src/components/Topbar.jsx

import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

function Topbar() {
  return (
    <nav className="flex items-center p-4 bg-[#145251] text-white min-h-[7vh] ">
<div className='p-2'>
      {/* Ícone de menu */}
        <FaBars className="h-5 w-5 cursor-pointer text-[#b1cece]" />


</div>
  
        {/* Logotipo e nome */}
        <div className="flex w-full  items-center justify-center gap-1 xl:gap-2 ">
          <Image
          width={467}
          height={514}
            src="/assets/logocinza.svg"
            alt="Leonardo Barreto"
            className="w-[28.02px] h-[30.84px]  md:w-[46.7px] md:h-[51.4px]   "
            
          />
          <div className='flex flex-col h-full justify-self-center self-center items-center justify-center md:gap-1'>
            <div className='w-1 h-2'/>
            <span className="text-[12px] md:text-[18px]   text-[#c9cccc] font-light tracking-[-0.02em] leading-4">Leonardo Barreto</span>
            <span className="text-[9px] md:text-[13px] text-[#878f8f] leading-2 font-light">PSIQUIATRIA</span>
          </div>

        </div>

        {/* Placeholder para alinhar o layout */}
        <div className="h-6 w-6"></div>
  
    </nav>
  );
}

export default Topbar;