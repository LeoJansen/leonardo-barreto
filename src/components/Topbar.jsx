// src/components/Topbar.jsx

import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

function Topbar() {
  return (
    <nav className="bg-[#145251] text-white p-3 ">
      <div className="flex justify-between items-center">
        {/* Ícone do menu de hambúrguer */}
        <FaBars className="h-6 w-6 cursor-pointer text-[#b1cece]" />

        {/* Logotipo e nome */}
        <div className="flex  items-center gap-1 xl:gap-2">
          <Image
          width={467}
          height={514}
            src="/assets/logocinza.svg"
            alt="Leonardo Barreto"
            className="w-[28.02px] h-[30.84px]  xl:w-[46.7px] xl:h-[51.4px]   "
          />
          <div className='flex flex-col h-full justify-self-center self-center items-center justify-center xl:gap-1'>
            <div className='w-1 h-2'/>
            <span className="text-[12px] xl:text-[18px]   text-[#c9cccc] font-light tracking-[-0.02em] leading-4">Leonardo Barreto</span>
            <span className="text-[9px] xl:text-[13px] text-[#878f8f] leading-2 font-light">PSIQUIATRA</span>
          </div>

        </div>

        {/* Placeholder para alinhar o layout */}
        <div className="h-6 w-6"></div>
      </div>
    </nav>
  );
}

export default Topbar;