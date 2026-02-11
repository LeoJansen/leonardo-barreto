import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloatClient from '@/components/WhatsAppFloatClient';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Leonardo Barreto - Saúde Mental',
  description: 'Site oficial do Dr. Leonardo Barreto.',

  icons: {
    icon: 'assets/logobranco.svg',
    shortcut: 'assets/logobranco.svg',
    apple: 'assets/logobranco.svg',
  },
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>
        {children}
        <WhatsAppFloatClient />
      </body>
    </html>
  );
}