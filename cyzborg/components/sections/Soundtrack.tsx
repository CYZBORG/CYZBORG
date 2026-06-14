import React from 'react';
import { SectionIds } from '../../types';

const Soundtrack: React.FC = () => {
  return (
    <section id={SectionIds.SOUNDTRACK} className="py-8 md:py-12 bg-cyzborg-black relative border-t border-neutral-900 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Audio Info / Text */}
          <div className="order-2 lg:order-1 flex flex-col space-y-6 md:space-y-8">
            <div>
              <span className="font-mono text-xs text-cyzborg-orange tracking-[0.3em] uppercase block mb-6 animate-pulse">
                /// AUDIO_TRANSMISSION ///
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase leading-[0.9]">
                My Body<br/>
                <span className="text-neutral-500">Fucking</span><br/>
                Hates Me.
              </h2>
            </div>
            
            <p className="font-sans text-neutral-400 text-lg md:text-xl uppercase tracking-wide max-w-lg">
              The first remastered sonic weapon from the CYZBORG system. Brutal, relentless, and engineered for the hardest training sessions.
            </p>

            <div className="flex flex-col space-y-4">
              <div className="inline-block bg-white text-black font-bold uppercase tracking-widest text-sm px-6 py-3 text-center self-start shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Coming Soon
              </div>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest leading-relaxed">
                Coming soon to major platforms:<br/>
                <span className="text-white">Spotify /// Apple Music /// YouTube Music /// TikTok /// Instagram</span>
              </p>
            </div>
          </div>

          {/* Album Art Graphic representation */}
          <div className="order-1 lg:order-2 relative aspect-square w-full max-w-md mx-auto lg:mx-0">
             
             {/* Glowing border / backdrop */}
             <div className="absolute inset-0 bg-gradient-to-tr from-cyzborg-blue to-transparent opacity-20 blur-2xl"></div>
             
             {/* Album Art Container */}
             <div className="relative w-full h-full bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
                
                <img 
                  src="https://helmet-with-logo.netlify.app/mbfhm-cover.png" 
                  alt="My Body Fucking Hates Me"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40 transition-opacity duration-300 group-hover:opacity-20 pointer-events-none"></div>
             </div>
             
             {/* Ornaments */}
             <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyzborg-blue"></div>
             <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-neutral-700"></div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Soundtrack;
