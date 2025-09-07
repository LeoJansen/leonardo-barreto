// src/components/Topbar.jsx

import React from 'react';
import { FaBars } from 'react-icons/fa';

function Topbar() {
  return (
    <header className="bg-[#005E61] text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Ícone do menu de hambúrguer */}
        <FaBars className="h-6 w-6 cursor-pointer text-[#DAE7E7]" />

        {/* Logotipo e nome */}
        <div className="flex flex-col items-center gap-1">
          <img
            src="/assets/logobranco.svg"
            alt="Leonardo Barreto"
            className="h-12"
          />
          <div className='flex flex-col items-center justify-center'>
            <span className="text-sm font-semibold  text-[#DAE7E7]">LEONARDO BARRETO</span>
            <span className="text-xs text-[#DAE7E7] font-extralight ">PSIQUIATRA</span>
          </div>

        </div>

        {/* Placeholder para alinhar o layout */}
        <div className="h-6 w-6"></div>
      </div>
    </header>
  );
}

export default Topbar;