import React from 'react';
import { SectionIds } from '../../types';
import { Instagram, ExternalLink, MessageCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section id={SectionIds.NEWSLETTER} className="py-8 px-4 bg-cyzborg-black relative overflow-hidden border-t border-neutral-900">
      
      {/* Premium Top Scanline - Dual Brand Colors */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyzborg-blue via-transparent to-cyzborg-orange opacity-50"></div>
      
      {/* Background Decor - Helmet SVG */}
      <img 
        src="https://helmet-with-logo.netlify.app/cyzborg-logo-flat-outline.svg" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] pointer-events-none select-none z-0"
        alt=""
      />

      {/* Subtle Blue Glow from Bottom */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-cyzborg-blue/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 relative">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase mb-4 drop-shadow-lg">
            Establish Connection
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            Sync with the network for real-time intelligence.
          </p>
        </div>

        {/* Social Grid - Slightly Reduced Size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* INSTAGRAM - Active (Orange) */}
          <a 
            href="https://instagram.com/cyzborg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-6 bg-neutral-900/50 border border-neutral-800 hover:border-cyzborg-orange hover:bg-neutral-900 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyzborg-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-5 h-5 text-cyzborg-orange" />
            </div>
            
            <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyzborg-orange group-hover:text-black text-white shadow-lg">
              <Instagram className="w-7 h-7" />
            </div>

            <h3 className="font-display text-xl text-white uppercase mb-2 relative z-10">Visual Database</h3>
            <p className="font-sans text-xs text-neutral-500 uppercase tracking-widest mb-6 relative z-10">@CYZBORG</p>
            
            <span className="relative z-10 text-cyzborg-orange text-xs font-bold uppercase tracking-[0.2em] border border-cyzborg-orange/30 py-2 px-6 rounded-sm group-hover:bg-cyzborg-orange group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(196,90,26,0)] group-hover:shadow-[0_0_15px_rgba(196,90,26,0.4)]">
              Initialize
            </span>
          </a>

          {/* TIKTOK - Active (Blue) */}
          <a 
            href="https://tiktok.com/@cyzborg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-6 bg-neutral-900/50 border border-neutral-800 hover:border-cyzborg-blue hover:bg-neutral-900 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
             {/* Hover Glow */}
             <div className="absolute inset-0 bg-gradient-to-b from-cyzborg-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

             <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-5 h-5 text-cyzborg-blue" />
            </div>

            <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyzborg-blue group-hover:text-black text-white shadow-lg">
               {/* TikTok Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.08-.18.96-.08 1.95-.08 2.93 0 2.21.05 4.43-.18 6.64-.44 3.98-3.76 7.15-7.91 7.29-3.48.16-6.8-1.66-8.23-4.81-1.63-3.69-.15-8.22 3.6-9.9.52-.23 1.07-.4 1.63-.52V13.8c-.85.16-1.68.58-2.22 1.25-.91 1.09-.86 2.77.12 3.82.97 1.07 2.7 1.23 3.95.43 1.35-.85 1.79-2.58 1.79-4.04V.02z"/>
              </svg>
            </div>

            <h3 className="font-display text-xl text-white uppercase mb-2 relative z-10">Gear Showcase</h3>
            <p className="font-sans text-xs text-neutral-500 uppercase tracking-widest mb-6 relative z-10">@cyzborg</p>
            
            <span className="relative z-10 text-cyzborg-blue text-xs font-bold uppercase tracking-[0.2em] border border-cyzborg-blue/30 py-2 px-6 rounded-sm group-hover:bg-cyzborg-blue group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,174,239,0)] group-hover:shadow-[0_0_15px_rgba(0,174,239,0.4)]">
              Watch Intel
            </span>
          </a>

          {/* X / TWITTER - Now Active (White) */}
          <a
            href="https://x.com/cyzborg_"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 bg-neutral-900/50 border border-neutral-800 hover:border-white hover:bg-neutral-900 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>

            <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white group-hover:text-black text-white shadow-lg">
               {/* X Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>

            <h3 className="font-display text-xl text-white uppercase mb-2 relative z-10">Direct Comms</h3>
            <p className="font-sans text-xs text-neutral-500 uppercase tracking-widest mb-6 relative z-10">@cyzborg_</p>
            
            <span className="relative z-10 text-white text-xs font-bold uppercase tracking-[0.2em] border border-white/30 py-2 px-6 rounded-sm group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              Message Us
            </span>
          </a>

        </div>
        
        <p className="mt-8 text-center text-xs text-neutral-600 uppercase tracking-widest">
          Join the regiment. Prepare for deployment.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;