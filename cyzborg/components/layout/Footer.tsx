import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyzborg-black py-12 border-t border-neutral-900 relative overflow-hidden">
      
      {/* Scattered LED Logo */}
      <img 
        src="https://helmet-with-logo.netlify.app/cyzborg-leds-logo.svg?v=2" 
        className="absolute bottom-[-40%] right-[-20%] md:right-[-5%] w-[600px] md:w-[800px] opacity-[0.02] pointer-events-none -rotate-6 select-none"
        alt=""
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
        
        {/* Brand Mark - Real Logo - SLIGHTLY LARGER */}
        {/* Order 1 on Mobile and Desktop */}
        <div 
          className="flex items-center justify-center md:justify-start order-1 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
           <img 
            src="https://helmet-with-logo.netlify.app/cyzborg-leds-logo.svg?v=2" 
            alt="CYZBORG" 
            className="w-auto h-[30px] md:h-9 opacity-80 hover:opacity-100 hover:animate-crackle-build transition-opacity duration-300 origin-center"
           />
        </div>

        {/* Copyright - Perfectly Centered on Desktop */}
        {/* Order 3 on Mobile (bottom), Order 2 on Desktop (center) */}
        <div className="text-neutral-600 text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-center order-3 md:order-2 flex flex-col gap-1.5">
          <span>&copy; 2027 CYZBORG™. All Rights Reserved.</span>
          <span className="text-[16px] md:text-[18px] text-neutral-700">TRADEMARK PENDING - BRAND LAUNCHING UPON REGISTRATION</span>
        </div>

        {/* Socials - Right Aligned on Desktop */}
        {/* Order 2 on Mobile (middle), Order 3 on Desktop (right) */}
        <div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 order-2 md:order-3">
          
          {/* Helmet Logo Link to Merch */}
          <img 
            src="https://helmet-with-logo.netlify.app/cyzborg%20logo.svg" 
            alt="CYZBORG Merch" 
            onClick={() => document.getElementById('merch')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-auto h-12 md:h-[72px] opacity-90 hover:opacity-100 hover:scale-110 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] cursor-pointer transition-all duration-300 mr-2 md:mr-4"
          />

          {/* X (Twitter) - Active */}
          <a href="https://x.com/cyzborg_" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-cyzborg-orange transition-colors" aria-label="X">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/cyzborg" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-cyzborg-orange transition-colors">
             <span className="sr-only">Instagram</span>
            <Instagram className="w-5 h-5" />
          </a>

          {/* TikTok */}
          <a href="https://tiktok.com/@cyzborg" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-cyzborg-orange transition-colors">
            <span className="sr-only">TikTok</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.08-.18.96-.08 1.95-.08 2.93 0 2.21.05 4.43-.18 6.64-.44 3.98-3.76 7.15-7.91 7.29-3.48.16-6.8-1.66-8.23-4.81-1.63-3.69-.15-8.22 3.6-9.9.52-.23 1.07-.4 1.63-.52V13.8c-.85.16-1.68.58-2.22 1.25-.91 1.09-.86 2.77.12 3.82.97 1.07 2.7 1.23 3.95.43 1.35-.85 1.79-2.58 1.79-4.04V.02z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;