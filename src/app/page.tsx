// src/app/page.jsx

import Topbar from '../components/Topbar';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen">
      <Topbar />
      <HeroSection />
    </main>
  );
}