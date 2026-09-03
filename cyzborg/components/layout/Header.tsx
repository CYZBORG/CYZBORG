import React, { useState, useEffect, useRef } from 'react';
import { SectionIds } from '../../types';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-200 ${
          scrolled 
            ? 'bg-[rgba(0,0,0,0.92)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] shadow-sm h-[62px] md:h-[84px] lg:h-[104px]' 
            : 'bg-transparent border-b border-transparent py-4 md:py-6'
        } min-h-[62px] flex items-center md:items-stretch`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 flex justify-between items-center relative">
          {/* Brand Mark (Top Left) */}
          <div 
            className="cursor-pointer flex items-center z-10" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Name Logo */}
            <img 
              src="https://helmet-with-logo.netlify.app/cyzborg-wordmark.svg" 
              alt="CYZBORG" 
              className={`w-[135px] sm:w-[150px] md:w-auto h-auto md:h-[60px] lg:h-20 opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-300 origin-left md:origin-center invert-0`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-10 z-10">
            <button 
              onClick={() => scrollTo(SectionIds.SOUNDTRACK)} 
              className="font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all text-white hover:text-cyzborg-orange"
            >
              Audio
            </button>
            <button 
              onClick={() => scrollTo(SectionIds.PHILOSOPHY)} 
              className="font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all text-white hover:text-cyzborg-orange"
            >
              System
            </button>
            <button 
              onClick={() => scrollTo(SectionIds.WHATS_COMING)} 
              className="font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all text-white hover:text-cyzborg-orange"
            >
              Gear
            </button>
            
            <Button 
              variant="outline" 
              onClick={() => scrollTo(SectionIds.NEWSLETTER)} 
              className="!py-2 !px-6 !text-xs transition-colors border-white/20 text-white hover:text-cyzborg-orange hover:border-cyzborg-orange"
            >
              Initialize
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-[60]">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-white hover:text-cyzborg-orange transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange rounded-md"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[45] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div 
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-[62px] right-3 sm:right-4 z-[50] md:hidden transition-all duration-200 w-[220px] max-w-[calc(100vw-32px)] bg-[rgba(0,0,0,0.96)] border border-[rgba(255,255,255,0.12)] rounded-lg overflow-hidden origin-top-right ${
          isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto shadow-2xl' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col w-full py-3 px-2">
          <button 
            onClick={() => scrollTo(SectionIds.SOUNDTRACK)} 
            className="font-sans font-bold text-[14px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-widest min-h-[44px] px-4 flex items-center text-left"
          >
            Audio
          </button>
          <div className="h-[8px]" />
          <button 
            onClick={() => scrollTo(SectionIds.PHILOSOPHY)} 
            className="font-sans font-bold text-[14px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-widest min-h-[44px] px-4 flex items-center text-left"
          >
            System
          </button>
          <div className="h-[8px]" />
          <button 
            onClick={() => scrollTo(SectionIds.WHATS_COMING)} 
            className="font-sans font-bold text-[14px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-widest min-h-[44px] px-4 flex items-center text-left"
          >
            Gear
          </button>
          <div className="h-[8px]" />
          <button 
            onClick={() => scrollTo(SectionIds.NEWSLETTER)} 
            className="font-sans font-bold text-[14px] text-cyzborg-orange hover:text-white transition-colors uppercase tracking-widest min-h-[44px] px-4 flex items-center text-left"
          >
            Initialize
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;