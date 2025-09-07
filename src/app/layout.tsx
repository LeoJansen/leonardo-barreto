import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leonardo Barreto - Psiquiatra',
  description: 'Site oficial do Dr. Leonardo Barreto, psiquiatra.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}