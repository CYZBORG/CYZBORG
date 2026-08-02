import React, { useState, useEffect } from 'react';
import { SectionIds } from '../../types';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial state from HTML class
    setIsDark(document.documentElement.classList.contains('dark'));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

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
          ? 'bg-white/90 dark:bg-cyzborg-black/90 backdrop-blur-md shadow-sm dark:shadow-none border-neutral-200 dark:border-neutral-800 pt-3 pb-1' 
          : 'bg-transparent border-transparent pt-6 pb-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Brand Mark (Top Left) */}
        <div 
          className="cursor-pointer flex items-center z-10" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Name Logo */}
          <img 
            src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" 
            alt="CYZBORG" 
            className={`h-[60px] md:h-20 w-auto opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-300 origin-center ${scrolled ? 'dark:invert-0 invert' : 'invert-0'}`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-10 z-10">
          <button 
            onClick={() => scrollTo(SectionIds.SOUNDTRACK)} 
            className={`font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all ${scrolled ? 'text-black dark:text-white hover:text-black dark:hover:text-cyzborg-blue' : 'text-white hover:text-cyzborg-white hover:text-shadow-glow'}`}
          >
            Audio
          </button>
          <button 
            onClick={() => scrollTo(SectionIds.PHILOSOPHY)} 
            className={`font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all ${scrolled ? 'text-black dark:text-white hover:text-black dark:hover:text-cyzborg-blue' : 'text-white hover:text-cyzborg-white hover:text-shadow-glow'}`}
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollTo(SectionIds.WHATS_COMING)} 
            className={`font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all ${scrolled ? 'text-black dark:text-white hover:text-black dark:hover:text-cyzborg-blue' : 'text-white hover:text-cyzborg-white hover:text-shadow-glow'}`}
          >
            Gear
          </button>
          
          <button onClick={toggleTheme} className={`p-2 border rounded-sm transition-colors ${scrolled ? "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800" : "border-white/20 hover:bg-white/10"}`}>
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={scrolled ? "text-black" : "text-white"}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <Button 
            variant="outline" 
            onClick={() => scrollTo(SectionIds.NEWSLETTER)} 
            className={`!py-2 !px-6 !text-xs hover:border-cyzborg-blue transition-colors ${scrolled ? 'border-black/20 dark:border-white/20 text-black dark:text-white' : 'border-white/20 text-white hover:text-white hover:border-white/50'}`}
          >
            Initialize
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className={`p-2 border rounded-sm transition-colors ${scrolled ? "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800" : "border-white/20 hover:bg-white/10"}`}>
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={scrolled ? "text-black" : "text-white"}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          
          <Button 
            variant="ghost" 
            onClick={() => scrollTo(SectionIds.NEWSLETTER)} 
            className={`!text-[10px] !px-4 !py-2 border ${scrolled ? 'border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 text-black dark:text-white' : 'border-white/20 bg-white/10 text-white hover:bg-white/20'}`}
          >
            Join
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;