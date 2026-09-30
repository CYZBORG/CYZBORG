import React, { useState, useEffect, useRef } from 'react';
import { SectionIds } from '../../types';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenChat?: () => void;
}

const MOBILE_HEADER_HEIGHT = 76;

const Header: React.FC<HeaderProps> = ({ onOpenChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [pastHeroHalf, setPastHeroHalf] = useState(false);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shopHovered, setShopHovered] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [originHovered, setOriginHovered] = useState(false);
  const [originOpen, setOriginOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollAndViewport = () => {
      const y = window.scrollY;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobileVert = w < 768 && h >= w;

      setIsMobilePortrait(mobileVert);
      setScrollY(y);
      setScrolled(y > 24);

      const heroEl = document.getElementById(SectionIds.HERO);
      const heroHeight = heroEl ? heroEl.offsetHeight : h;
      setPastHeroHalf(y >= heroHeight * 0.5);
    };

    window.addEventListener('scroll', updateScrollAndViewport, { passive: true });
    window.addEventListener('resize', updateScrollAndViewport, { passive: true });
    updateScrollAndViewport();
    return () => {
      window.removeEventListener('scroll', updateScrollAndViewport);
      window.removeEventListener('resize', updateScrollAndViewport);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setShopOpen(false);
        setOriginOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
      if (originRef.current && !originRef.current.contains(e.target as Node)) {
        setOriginOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    setShopOpen(false);
    setOriginOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSocials = () => {
    setIsMobileMenuOpen(false);
    setShopOpen(false);
    setOriginOpen(false);
    const socialsTarget = document.getElementById('socials') || document.querySelector('footer');
    if (socialsTarget) {
      socialsTarget.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1stPhorm-inspired vertical mobile header behavior:
  // 1. Visible at the top when landing on the page (scrollY === 0) and scrolls up naturally with the top of the Hero.
  // 2. Stays hidden while scrolling through the upper 50% of the Hero section.
  // 3. Smoothly drops down and stays sticky once the Hero section passes 50% of the screen (and reverses when scrolling back up).
  let mobileHeaderStyle: React.CSSProperties | undefined = undefined;
  if (isMobilePortrait && !isMobileMenuOpen) {
    if (pastHeroHalf) {
      mobileHeaderStyle = {
        transform: 'translateY(0px)',
        transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
      };
    } else if (scrollY <= MOBILE_HEADER_HEIGHT) {
      mobileHeaderStyle = {
        transform: `translateY(-${Math.max(0, scrollY)}px)`,
        transition: 'none',
      };
    } else {
      mobileHeaderStyle = {
        transform: 'translateY(-100%)',
        transition: 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1)',
      };
    }
  }

  return (
    <>
      <header
        style={mobileHeaderStyle}
        className={`fixed top-0 left-0 w-full z-[60] overflow-visible flex items-center max-md:h-[76px] max-md:bg-[rgba(0,0,0,0.96)] max-md:backdrop-blur-md max-md:border-0 ${
          scrolled || isMobileMenuOpen
            ? 'md:bg-[rgba(0,0,0,0.96)] md:backdrop-blur-md md:shadow-lg md:h-[110px] lg:h-[124px] md:transition-all md:duration-200'
            : 'md:bg-transparent md:h-[128px] lg:h-[144px] md:transition-all md:duration-200'
        }`}
      >
        <div className="w-full max-w-[1480px] mx-auto px-4 md:px-8 flex justify-between items-center relative h-full">
          {/* Left Desktop Navigation (Shop, Origin, System, Launch) — Desktop (> 1180px) ONLY */}
          <nav className="hidden min-[1181px]:flex items-center gap-6 lg:gap-8 xl:gap-10 z-10 h-full">
            {/* Shop */}
            <div
              ref={shopRef}
              className="relative flex items-center h-full"
              onMouseEnter={() => setShopHovered(true)}
              onMouseLeave={() => setShopHovered(false)}
            >
              <button
                type="button"
                onClick={() => setShopOpen(!shopOpen)}
                className={`font-sans font-medium text-[15px] md:text-base lg:text-[18px] uppercase tracking-[0.16em] lg:tracking-[0.2em] transition-colors cursor-pointer py-2 flex items-center gap-1.5 ${
                  shopHovered || shopOpen ? 'text-cyzborg-orange' : 'text-white hover:text-cyzborg-orange'
                }`}
                aria-expanded={shopHovered || shopOpen}
              >
                <span>Shop</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    shopHovered || shopOpen ? 'rotate-180 text-cyzborg-orange' : 'text-white/70'
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-max rounded-none transition-all duration-150 origin-top z-50 ${
                  scrolled
                    ? 'bg-[rgba(0,0,0,0.95)] backdrop-blur-md shadow-2xl border-0'
                    : 'bg-transparent border-t-0 border-x border-b border-black'
                } ${
                  shopHovered || shopOpen
                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                    : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
              >
                <div className="py-3.5 px-4 text-center">
                  <span className="font-sans font-medium text-[14px] lg:text-[15px] text-white hover:text-cyzborg-orange tracking-[0.14em] uppercase transition-colors block cursor-default whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Origin */}
            <div
              ref={originRef}
              className="relative flex items-center h-full"
              onMouseEnter={() => setOriginHovered(true)}
              onMouseLeave={() => setOriginHovered(false)}
            >
              <button
                type="button"
                onClick={() => setOriginOpen(!originOpen)}
                className={`font-sans font-medium text-[15px] md:text-base lg:text-[18px] uppercase tracking-[0.16em] lg:tracking-[0.2em] transition-colors cursor-pointer py-2 flex items-center gap-1.5 ${
                  originHovered || originOpen ? 'text-cyzborg-orange' : 'text-white hover:text-cyzborg-orange'
                }`}
                aria-expanded={originHovered || originOpen}
              >
                <span>Origin</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    originHovered || originOpen ? 'rotate-180 text-cyzborg-orange' : 'text-white/70'
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-max rounded-none transition-all duration-150 origin-top z-50 ${
                  scrolled
                    ? 'bg-[rgba(0,0,0,0.95)] backdrop-blur-md shadow-2xl border-0'
                    : 'bg-transparent border-t-0 border-x border-b border-black'
                } ${
                  originHovered || originOpen
                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                    : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
              >
                <div className="py-3.5 px-4 text-center">
                  <span className="font-sans font-medium text-[14px] lg:text-[15px] text-white hover:text-cyzborg-orange tracking-[0.14em] uppercase transition-colors block cursor-default whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* System */}
            <button
              onClick={() => scrollTo(SectionIds.PHILOSOPHY)}
              className="font-sans font-medium text-[15px] md:text-base lg:text-[18px] uppercase tracking-[0.16em] lg:tracking-[0.2em] transition-all text-white hover:text-cyzborg-orange cursor-pointer py-2"
            >
              System
            </button>

            {/* Launch */}
            <button
              onClick={() => scrollTo(SectionIds.WHATS_COMING)}
              className="font-sans font-medium text-[15px] md:text-base lg:text-[18px] uppercase tracking-[0.16em] lg:tracking-[0.2em] transition-all text-white hover:text-cyzborg-orange cursor-pointer py-2"
            >
              Launch
            </button>
          </nav>

          {/* Dead Center Official CYZBORG Helmet Logo Mark (Visible on Mobile, Tablet & Desktop) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 flex items-center justify-center group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="CYZBORG"
          >
            <img
              src="https://helmet-with-logo.netlify.app/simple%20logo%20transparent.svg"
              alt="CYZBORG Official Logo Mark"
              className="h-[54px] sm:h-[60px] md:h-20 lg:h-24 xl:h-[102px] w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 active:scale-95 select-none pointer-events-auto"
            />
          </div>

          {/* Right Desktop: Audio & Socials — Desktop (> 1180px) ONLY */}
          <div className="hidden min-[1181px]:flex items-center justify-end gap-6 lg:gap-8 xl:gap-10 z-10 h-full">
            <button
              onClick={() => scrollTo(SectionIds.SOUNDTRACK)}
              className="font-sans font-medium text-[15px] md:text-base lg:text-[18px] uppercase tracking-[0.16em] lg:tracking-[0.2em] transition-all text-white hover:text-cyzborg-orange cursor-pointer py-2"
            >
              Audio
            </button>

            <button
              onClick={scrollToSocials}
              className="font-sans font-medium text-[15px] md:text-base lg:text-[18px] uppercase tracking-[0.16em] lg:tracking-[0.2em] transition-all text-white hover:text-cyzborg-orange cursor-pointer py-2"
            >
              Socials
            </button>
          </div>

          {/* Mobile & Tablet Spacer (for Left balance) */}
          <div className="min-[1181px]:hidden w-9 h-9" />

          {/* Mobile & Tablet 3-Lines Menu Button (Top Right) */}
          <div className="min-[1181px]:hidden flex items-center z-[60]">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-white hover:text-cyzborg-orange transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange rounded-md cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu — Connected directly to bottom of header & right edge of screen */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`absolute top-full right-0 z-[60] min-[1181px]:hidden transition-all duration-200 w-[270px] max-w-[calc(100vw-16px)] bg-[rgba(0,0,0,0.96)] border-l border-b border-t-0 border-r-0 border-[rgba(255,255,255,0.14)] rounded-none overflow-hidden origin-top-right ${
            isMobileMenuOpen
              ? 'opacity-100 scale-100 pointer-events-auto shadow-2xl'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col w-full py-3.5 px-2">
            {/* Shop */}
            <div className="flex flex-col">
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="font-sans font-medium text-[16px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-[0.16em] min-h-[46px] px-4 flex items-center justify-between text-left"
              >
                <span>Shop</span>
                <span className="text-[11px] font-mono tracking-wider text-cyzborg-orange bg-cyzborg-orange/10 px-2 py-0.5 rounded">
                  Coming Soon
                </span>
              </button>
            </div>
            <div className="h-[2px]" />

            {/* Origin (Brand) */}
            <div className="flex flex-col">
              <button
                onClick={() => setOriginOpen(!originOpen)}
                className="font-sans font-medium text-[16px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-[0.16em] min-h-[46px] px-4 flex items-center justify-between text-left"
              >
                <span>Origin</span>
                <span className="text-[11px] font-mono tracking-wider text-cyzborg-orange bg-cyzborg-orange/10 px-2 py-0.5 rounded">
                  Coming Soon
                </span>
              </button>
            </div>
            <div className="h-[2px]" />

            {/* System */}
            <button
              onClick={() => scrollTo(SectionIds.PHILOSOPHY)}
              className="font-sans font-medium text-[16px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-[0.16em] min-h-[46px] px-4 flex items-center text-left"
            >
              System
            </button>
            <div className="h-[2px]" />

            {/* Launch */}
            <button
              onClick={() => scrollTo(SectionIds.WHATS_COMING)}
              className="font-sans font-medium text-[16px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-[0.16em] min-h-[46px] px-4 flex items-center text-left"
            >
              Launch
            </button>
            <div className="h-[2px]" />

            {/* Audio */}
            <button
              onClick={() => scrollTo(SectionIds.SOUNDTRACK)}
              className="font-sans font-medium text-[16px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-[0.16em] min-h-[46px] px-4 flex items-center text-left"
            >
              Audio
            </button>
            <div className="h-[2px]" />

            {/* Socials */}
            <button
              onClick={scrollToSocials}
              className="font-sans font-medium text-[16px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-[0.16em] min-h-[46px] px-4 flex items-center text-left"
            >
              Socials
            </button>

            {/* Divider + Share Your Input Chatbot Trigger (Mobile & Tablet Menu) */}
            <div className="my-2 border-t border-neutral-800" />
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenChat) onOpenChat();
              }}
              className="font-sans font-semibold text-[15px] text-white hover:text-cyzborg-orange transition-colors uppercase tracking-[0.14em] min-h-[46px] px-4 flex items-center justify-between text-left bg-cyzborg-orange/15 border border-cyzborg-orange/40 rounded"
            >
              <span>Share Your Input</span>
              <MessageSquare className="w-4 h-4 text-cyzborg-orange shrink-0" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile & Tablet Menu Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[55] min-[1181px]:hidden bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
