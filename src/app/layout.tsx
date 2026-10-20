import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloatClient from '@/components/WhatsAppFloatClient';
import { CookieConsentProvider } from '@/components/CookieConsentManager';
import {
  CONSULTATION_LOCATION,
  DOCTORALIA_PROFILE_URL,
  SITE_URL,
  WHATSAPP_PHONE,
} from '@/contants/index.js';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Dr. Leonardo Barreto | Saúde mental em Foz do Iguaçu',
  description:
    'Dr. Leonardo Barreto, médico em Foz do Iguaçu (PR). Atendimento em saúde mental presencial e por teleconsulta; consulte horários na Doctoralia.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Dr. Leonardo Barreto',
    title: 'Dr. Leonardo Barreto | Saúde mental em Foz do Iguaçu',
    description:
      'Conheça o atendimento em saúde mental do Dr. Leonardo Barreto em Foz do Iguaçu e consulte horários para atendimento presencial ou por teleconsulta na Doctoralia.',
  },

  icons: {
    icon: 'assets/logobranco.svg',
    shortcut: 'assets/logobranco.svg',
    apple: 'assets/logobranco.svg',
  },
  
};

const physicianJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Leonardo Barreto',
  url: SITE_URL,
  telephone: WHATSAPP_PHONE,
  sameAs: [DOCTORALIA_PROFILE_URL],
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${CONSULTATION_LOCATION.streetAddress} - ${CONSULTATION_LOCATION.neighborhood}`,
    addressLocality: CONSULTATION_LOCATION.addressLocality,
    addressRegion: CONSULTATION_LOCATION.addressRegion,
    postalCode: CONSULTATION_LOCATION.postalCode,
    addressCountry: CONSULTATION_LOCATION.addressCountry,
  },
};

const physicianJsonLdString = JSON.stringify(physicianJsonLd).replace(/</g, '\\u003c');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <CookieConsentProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: physicianJsonLdString }}
          />
          {children}
          <WhatsAppFloatClient />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
