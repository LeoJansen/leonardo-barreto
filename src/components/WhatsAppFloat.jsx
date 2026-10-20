import React from 'react';
import whatsapp from '../../public/assets/whatsappIcon.svg';
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '@/contants';
import Image from 'next/image';

// Botão flutuante do WhatsApp fixo no canto inferior direito
// Acessível (aria-label), abre em nova aba, sem bloquear navegação
export default function WhatsAppFloat() {
  const sanitizedPhone = WHATSAPP_PHONE.replace(/\D+/g, '');
  const href = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp (abre em nova aba)"
      data-whatsapp-float
      className="dark-surface fixed bottom-8 right-8 z-50 rounded-full focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-on-light"
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:scale-105"
      >
        <Image src={whatsapp} alt="" width={42} height={42} className="flex rounded-full outline-8 outline-offset-[-4px] outline-brand-deep" />
      </span>
    </a>
  );
}
