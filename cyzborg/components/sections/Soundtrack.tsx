import React, { useState } from 'react';
import { SectionIds } from '../../types';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

const Soundtrack: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  const albumArt = (
    <div className="relative aspect-square w-full max-w-md mx-auto group">
       {/* Glowing border / backdrop */}
       <div className="absolute inset-0 bg-gradient-to-tr from-cyzborg-blue to-transparent opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"></div>
       
       {/* Album Art Container */}
       <div className={`relative w-full h-full bg-neutral-950 border ${showPlayer ? 'border-neutral-600' : 'border-neutral-800'} shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-colors duration-500`}>
          {showPlayer ? (
            <iframe 
              style={{ borderRadius: 0 }} 
              src="https://open.spotify.com/embed/album/2fRmqckKwmi9PT6njHrhb7?utm_source=generator&theme=0" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={false} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            <div className="absolute inset-0 w-full h-full cursor-pointer group" onClick={() => setShowPlayer(true)}>
              <img 
                src="https://helmet-with-logo.netlify.app/mbfhm-cover.png" 
                alt="My Body Fucking Hates Me"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40 transition-opacity duration-300 group-hover:opacity-60 pointer-events-none"></div>

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 bg-cyzborg-orange/90 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,75,0,0.4)] backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
       </div>
       
       {/* Ornaments */}
       <div className={`absolute -top-3 -right-3 border-t-2 border-r-2 border-cyzborg-blue transition-all duration-300 ${showPlayer ? 'w-8 h-8' : 'w-6 h-6 group-hover:w-8 group-hover:h-8'}`}></div>
       <div className={`absolute -bottom-3 -left-3 border-b-2 border-l-2 transition-all duration-300 ${showPlayer ? 'border-cyzborg-orange w-8 h-8' : 'border-neutral-700 group-hover:border-cyzborg-orange group-hover:w-8 group-hover:h-8'}`}></div>
    </div>
  );

  return (
    <section id={SectionIds.SOUNDTRACK} className="py-8 md:py-12 bg-cyzborg-black relative border-t border-neutral-900 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Audio Info / Text */}
          <div className="flex flex-col space-y-6 md:space-y-8 lg:pr-4">
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

            <div className="block lg:hidden w-full py-4">
              {albumArt}
            </div>

            <div className="mt-8 border-l-2 border-neutral-800 pl-5 md:pl-6 relative">
              <div className="absolute -left-[2px] top-0 w-[2px] h-8 bg-cyzborg-orange"></div>
              <p className="font-mono text-neutral-400 text-xs tracking-[0.3em] uppercase mb-4">
                Now streaming on major platforms:
              </p>
              <div className="font-display text-xl sm:text-2xl md:text-lg lg:text-[14px] xl:text-[17px] 2xl:text-[19px] font-black text-white uppercase tracking-wider flex flex-col md:flex-row md:flex-nowrap items-center gap-y-5 md:gap-y-0 gap-x-0 md:gap-x-2 xl:gap-x-3 2xl:gap-x-4 pb-1">
                <a 
                  href="https://open.spotify.com/album/2fRmqckKwmi9PT6njHrhb7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center whitespace-nowrap hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
                >
                  <FaSpotify className="mr-2 md:mr-2 text-3xl md:text-2xl lg:text-lg xl:text-2xl shrink-0" /> Spotify
                </a> 
                <span className="hidden md:block text-cyzborg-blue opacity-70 text-xs lg:text-[10px] xl:text-[11px] shrink-0">///</span> 
                <a 
                  href="https://music.youtube.com/watch?v=f3BG_CWdcIs&list=OLAK5uy_k3GSHs1_Sr2D1daHRzz9CD5xgefQWxu64" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center whitespace-nowrap hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
                >
                  <FaYoutube className="mr-2 md:mr-2 text-3xl md:text-2xl lg:text-lg xl:text-2xl shrink-0" /> YouTube Music
                </a>
                <span className="hidden md:block text-cyzborg-blue opacity-70 text-xs lg:text-[10px] xl:text-[11px] shrink-0">///</span> 
                <a 
                  href="https://music.apple.com/us/album/my-body-f-g-hates-me-single/6780128308" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center whitespace-nowrap hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
                >
                  <FaApple className="mr-2 md:mr-2 text-3xl md:text-2xl lg:text-lg xl:text-2xl mb-1 md:mb-0.5 shrink-0" /> Apple Music
                </a> 
              </div>
            </div>
          </div>

          {/* Album Art Graphic representation */}
          <div className="hidden lg:block relative aspect-square w-full max-w-md mx-auto group">
             {albumArt}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Soundtrack;
