import React, { useState, useEffect } from 'react';
import { SectionIds } from '../../types';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-cyzborg-black/90 backdrop-blur-md border-neutral-800 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Mark (Top Left) */}
        <div 
          className="cursor-pointer flex items-center gap-1.5" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Name Logo */}
          <img 
            src="https://helmet-with-logo.netlify.app/cyzborg-leds-logo.svg" 
            alt="CYZBORG" 
            className="peer h-[30px] md:h-9 w-auto opacity-90 hover:opacity-100 hover:scale-x-[1.08] hover:scale-y-[1.02] transition-all duration-700 ease-out origin-left"
          />
          {/* Helmet Logo - Slightly larger */}
          <img 
            src="https://helmet-with-logo.netlify.app/new%20flat%20logo.png" 
            alt="" 
            className="h-[42px] md:h-[54px] w-auto opacity-90 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_2px_rgba(0,102,204,1)] peer-hover:translate-x-3 transition-all duration-700"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollTo(SectionIds.PHILOSOPHY)} 
            className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white hover:text-shadow-glow transition-all"
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollTo(SectionIds.WHATS_COMING)} 
            className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white hover:text-shadow-glow transition-all"
          >
            Gear
          </button>
          <Button 
            variant="outline" 
            onClick={() => scrollTo(SectionIds.NEWSLETTER)} 
            className="!py-2 !px-6 !text-xs border-white/20 hover:border-cyzborg-blue"
          >
            Initialize
          </Button>
        </nav>

        {/* Mobile Navigation (Simple CTA) */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            onClick={() => scrollTo(SectionIds.NEWSLETTER)} 
            className="!text-[10px] !px-4 !py-2 border border-neutral-800 bg-neutral-900/50"
          >
            Join
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;