'use client';

import dynamic from 'next/dynamic';

const WhatsAppFloat = dynamic(() => import('./WhatsAppFloat'), {
  ssr: false,
  loading: () => null,
});

export default function WhatsAppFloatClient() {
  return <WhatsAppFloat />;
}
