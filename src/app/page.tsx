// src/app/page.jsx

import Topbar from '../components/Topbar';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">
      <Topbar />
      <HeroSection />
    </main>
  );
}