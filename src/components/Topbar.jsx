// src/components/Topbar.jsx

import Image from 'next/image';
import React from 'react';
import { FaBars } from 'react-icons/fa';

function Topbar() {
  return (
    <header className="bg-[#145251] text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Ícone do menu de hambúrguer */}
        <FaBars className="h-6 w-6 cursor-pointer text-[#b1cece]" />

        {/* Logotipo e nome */}
        <div className="flex flex-col items-center gap-1">
          <Image
          width={48}
          height={48}
            src="/assets/logobranco.svg"
            alt="Leonardo Barreto"
            className="h-16 w-16"
          />
          <div className='flex flex-col items-center justify-center'>
            <span className="text-sm font-[600]  text-[#DBE8E8] tracking-wide">LEONARDO BARRETO</span>
            <span className="text-xs text-[#29B8B4] font-extralight ">PSIQUIATRA</span>
          </div>

        </div>

        {/* Placeholder para alinhar o layout */}
        <div className="h-6 w-6"></div>
      </div>
    </header>
  );
}

export default Topbar;