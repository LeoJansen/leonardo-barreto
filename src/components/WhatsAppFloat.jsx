import React from 'react';
import whatsapp from '../../public/assets/whatsappIcon.svg';
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '@/contants';
import Image from 'next/image';

// Botão flutuante do WhatsApp fixo no canto inferior direito
// Acessível (aria-label), abre em nova aba, sem bloquear navegação
export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-8 bottom-8 z-50"
    >
      <span
        className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg bg-[#ffffff] text-white transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
      >
        <Image src={whatsapp} alt="WhatsApp" width={42} height={42} className='flex outline-8 outline-offset-[-4px] outline-[#025C5C] rounded-full' />
      </span>
    </a>
  );
}
