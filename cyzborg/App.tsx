import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Soundtrack from './components/sections/Soundtrack';
import WhatsComing from './components/sections/WhatsComing';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/layout/Footer';
import CyzborgChat from './components/chat/CyzborgChat';


const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Console signature
    console.log(
      "%c CYZBORG SYSTEMS %c REFRESHED ",
      "background: #000; color: #fff; border: 1px solid #fff; padding: 4px; font-family: monospace;",
      "background: #00A3FF; color: #000; padding: 4px; font-family: monospace; font-weight: bold;"
    );

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="w-full bg-white dark:bg-cyzborg-black text-black dark:text-white selection:bg-cyzborg-blue selection:text-black">
      <Header onOpenChat={() => setIsChatOpen(true)} />
      <Hero />
      <Soundtrack />
      <Philosophy />
      <WhatsComing />
      <Newsletter />
      <Footer />
      <CyzborgChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

      {/* Scroll to Top button — Desktop/Tablet ONLY (hidden on mobile) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{ right: '1.5rem', bottom: '1.5rem', left: 'auto' }}
        className={`hidden md:flex fixed bottom-6 right-6 z-40 items-center justify-center w-11 h-11 bg-[#0c0c0d]/90 backdrop-blur-sm border border-neutral-700 text-neutral-300 hover:border-cyzborg-orange hover:text-cyzborg-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange transition-all duration-300 cursor-pointer ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </main>
  );
};

export default App;
