import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';

// Evita problemas de SSR com ícones/DOM (só por segurança)
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'));

export const metadata: Metadata = {
  title: 'Leonardo Barreto - Psiquiatra',
  description: 'Site oficial do Dr. Leonardo Barreto, psiquiatra.',

  icons: {
    icon: 'assets/logobranco.svg',
    shortcut: 'assets/logobranco.svg',
    apple: 'assets/logobranco.svg',
  },
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}