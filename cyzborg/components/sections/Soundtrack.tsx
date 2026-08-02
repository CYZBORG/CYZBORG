import React, { useState } from 'react';
import { SectionIds } from '../../types';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

const TRACKS = [
  {
    id: 'mthbtm',
    titleText: 'MORE THAN HUMAN, BETTER THAN MACHINE',
    title: (
      <>
        MORE THAN HUMAN,<br />
        <span className="text-neutral-500">BETTER THAN</span><br />
        MACHINE
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/more%20than%20human,%20better%20than%20machine%20album%20cover.png',
    spotifyUrl: 'https://open.spotify.com/track/6v4PY5aoN1bmkW9AgQhyJx?si=ef47cb0647094c28',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_kBVQjEO4mynCh4d0vZAokOvsMsyxNyQIc&si=u26lfnShUD1SefiN',
    appleUrl: 'https://music.apple.com/sa/song/more-than-human-better-than-machine/6793851284',
    description: (
      <div className="text-xs sm:text-[13px] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        <p>The official anthem of CYZBORG. Built by pressure, forged by pain, and strengthened by every scar, it represents the relentless pursuit of becoming more without losing the heart, soul, and will that no machine can replicate.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/6v4PY5aoN1bmkW9AgQhyJx?utm_source=generator&theme=0'
  },
  {
    id: 'utb',
    titleText: 'UNDER THE BAR',
    title: (
      <>
        UNDER<br />
        <span className="text-neutral-500">THE</span><br />
        BAR
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/utb-cover.png',
    spotifyUrl: 'https://open.spotify.com/track/66C6QcaaqHhwmsLs6ijoWs?si=90a4f6643e364ff8',
    youtubeUrl: 'https://www.youtube.com/watch?v=HbAxN9m4jzk',
    appleUrl: 'https://music.apple.com/sa/album/under-the-bar-single/6791034280',
    description: (
      <div className="text-xs sm:text-[13px] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        <p>A raw, uncompromising anthem for the heavy iron. When the weight threatens to crush you, there is no room for hesitation, excuses, or fear. Lock in, get under the bar, and prove what you're made of.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/66C6QcaaqHhwmsLs6ijoWs?utm_source=generator&theme=0'
  },
  {
    id: 'rtg',
    titleText: 'RUN THE GAUNTLET',
    title: (
      <>
        RUN<br />
        <span className="text-neutral-500">THE</span><br />
        GAUNTLET
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/rtg-cover.png',
    spotifyUrl: 'https://open.spotify.com/track/1GCbDeNYLEfIECES5CUDWs?si=caf820a9cd954472',
    youtubeUrl: 'https://music.youtube.com/watch?v=G5lwEvPGq4w&si=-WI3MRp5hIU6VrJD',
    appleUrl: 'https://music.apple.com/us/album/run-the-gauntlet-single/6789544340',
    description: (
      <div className="text-xs sm:text-[13px] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        <p>A brutal war march for those who refuse to break. When the world collapses into chaos, you don't look for a way out&mdash;you force your way through the wreckage.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/1GCbDeNYLEfIECES5CUDWs?utm_source=generator&theme=0'
  },
  {
    id: 'dysmorphia',
    titleText: 'DYSMORPHIA',
    title: (
      <>
        DYS<span className="text-neutral-500">MORP</span>HIA
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/dysmorphia-cover.png',
    spotifyUrl: 'https://open.spotify.com/track/05CHpPg5ZX54OUheazmtxV?si=d38f862cb16b4f66',
    youtubeUrl: 'https://music.youtube.com/watch?v=RQIz5vsp7dc&si=tpAkC8E_2tH-YMxW',
    appleUrl: 'https://music.apple.com/us/song/dysmorphia/6789440215',
    description: (
      <>
        <p>The ultimate visual and physical confrontation. A heavy, unforgiving strike against the mirror, the doubt, and the perceived weakness within. Stop hiding, endure the pressure, and outwork your own mind.</p>
      </>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/05CHpPg5ZX54OUheazmtxV?utm_source=generator&theme=0'
  },
  {
    id: 'fyf',
    titleText: 'FUCK YOUR FEELINGS',
    title: (
      <>
        FUCK<br />
        <span className="text-neutral-500">YOUR</span><br />
        FEELINGS.
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/fyf-cover.png',
    spotifyUrl: 'https://open.spotify.com/album/4MIKxWNZam7Dr9T5yOFcMo',
    youtubeUrl: 'https://music.youtube.com/watch?v=PYTFLEAOpnA&list=OLAK5uy_lFD6iAKpLXocqvUcYF4ShOxgO0FND99JI',
    appleUrl: 'https://music.apple.com/us/album/f-k-your-feelings-single/6782700672',
    description: (
      <>
        <p>
          A middle finger to weakness, victimhood, and self-imposed limits. Turn off the noise, embrace the struggle, and earn your results.
        </p>
      </>
    ),
    embedUrl: 'https://open.spotify.com/embed/album/4MIKxWNZam7Dr9T5yOFcMo?utm_source=generator&theme=0'
  }
];

const Soundtrack: React.FC = () => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const activeTrack = TRACKS[activeTrackIndex];

  return (
  <>
    <section id={SectionIds.SOUNDTRACK} className="pt-8 pb-4 md:pb-6 lg:pb-8 bg-neutral-50 dark:bg-cyzborg-black relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden flex items-center scroll-mt-24 md:scroll-mt-32">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] dark:opacity-0 pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Mobile Header */}
        <span className="font-mono text-xs text-cyzborg-orange font-bold tracking-[0.3em] uppercase block mb-6 text-center lg:text-left lg:hidden">
          AUDIO TRANSMISSION
        </span>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-16 items-start">
          
          {/* Audio Info / Text */}
          <div className="flex flex-col lg:pr-4 order-3 lg:order-1 relative min-w-0 lg:h-[460px] xl:h-[500px] 2xl:h-[600px]">
            <div className="mb-0 lg:mb-0 xl:mb-2 shrink-0">
              <span className="font-mono text-xs text-cyzborg-orange font-bold tracking-[0.3em] uppercase hidden lg:block mb-6">
                AUDIO TRANSMISSION
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black dark:text-white uppercase leading-[0.9] mb-1 md:mb-0 whitespace-normal tracking-tighter text-center lg:text-left overflow-hidden text-ellipsis">
                {activeTrack.title}
              </h2>
            </div>
            
            {/* Dynamic content container */}
            <div className="flex flex-col justify-start mt-2 lg:mt-2 lg:pb-4 relative z-10">
              <div className={`font-sans text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl lg:leading-relaxed tracking-wide max-w-lg lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col w-full mb-0 lg:mb-2`}>
                {activeTrack.description}
              </div>

              {(activeTrack.spotifyUrl !== '#' || activeTrack.youtubeUrl !== '#' || activeTrack.appleUrl !== '#') && (
                <div className={`border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5 md:pl-6 relative flex flex-col items-center lg:items-start shrink-0 mt-2 lg:mt-2 mb-2 md:mb-4 ${activeTrack.id === 'rtg' ? 'lg:mb-[110px]' : 'lg:mb-40'} xl:mb-36 2xl:mb-36`}>
                  <div className="hidden lg:block absolute -left-[2px] top-0 w-[2px] h-8 lg:h-10 xl:h-12 bg-cyzborg-orange"></div>
                  <p className="font-mono text-neutral-600 dark:text-neutral-400 text-xs lg:text-sm xl:text-base 2xl:text-lg tracking-[0.3em] lg:tracking-[0.25em] uppercase mb-3 lg:mb-1 xl:mb-1 2xl:mb-2 text-center lg:text-left">
                    Now streaming on major platforms:
                  </p>
                  <div className="font-display text-[13px] sm:text-[15px] md:text-base lg:text-[14px] xl:text-[17px] 2xl:text-[19px] font-black text-black dark:text-white uppercase tracking-wider flex flex-col md:flex-row md:flex-nowrap items-center lg:items-center gap-y-3 md:gap-y-0 gap-x-0 md:gap-x-2 xl:gap-x-3 2xl:gap-x-4 pb-1">
                    {activeTrack.spotifyUrl !== '#' ? (
                      <a 
                        href={activeTrack.spotifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
                      >
                        <FaSpotify className="mr-2 text-xl md:text-xl lg:text-lg xl:text-2xl shrink-0" /> Spotify
                      </a> 
                    ) : (
                      <span className="flex items-center whitespace-nowrap text-neutral-500 border-b-2 border-transparent pb-0.5 shrink-0 cursor-not-allowed" title="Coming Soon">
                        <FaSpotify className="mr-2 text-xl md:text-xl lg:text-lg xl:text-2xl shrink-0" /> Spotify (Soon)
                      </span>
                    )}
                    
                    {(activeTrack.youtubeUrl !== '#' || activeTrack.appleUrl !== '#') && (
                      <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs lg:text-[10px] xl:text-[11px] shrink-0 transform translate-y-[2px]">•</span> 
                    )}
                    
                    {activeTrack.youtubeUrl !== '#' && (
                      <a 
                        href={activeTrack.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
                      >
                        <FaYoutube className="mr-2 text-xl md:text-xl lg:text-lg xl:text-2xl shrink-0" /> YouTube Music
                      </a> 
                    )}
                    {activeTrack.youtubeUrl !== '#' && activeTrack.appleUrl !== '#' && (
                      <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs lg:text-[10px] xl:text-[11px] shrink-0 transform translate-y-[2px]">•</span> 
                    )}
                    {activeTrack.appleUrl !== '#' && (
                      <a 
                        href={activeTrack.appleUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
                      >
                        <FaApple className="mr-2 text-xl md:text-xl lg:text-lg xl:text-2xl mb-1 md:mb-0.5 shrink-0" /> Apple Music
                      </a> 
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Track Selector Controls (Desktop) */}
            <div className="hidden lg:flex gap-4 absolute bottom-0 left-0 shrink-0 z-20">
              <button 
                onClick={() => setActiveTrackIndex(Math.max(0, activeTrackIndex - 1))}
                disabled={activeTrackIndex === 0}
                className="w-12 h-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-cyzborg-orange text-neutral-600 dark:text-neutral-400 hover:text-black dark:text-white transition-all disabled:opacity-30 disabled:hover:border-neutral-200 dark:border-neutral-800 disabled:hover:text-neutral-600 dark:text-neutral-400 group"
              >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => setActiveTrackIndex(Math.min(TRACKS.length - 1, activeTrackIndex + 1))}
                disabled={activeTrackIndex === TRACKS.length - 1}
                className="w-12 h-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-cyzborg-orange text-neutral-600 dark:text-neutral-400 hover:text-black dark:text-white transition-all disabled:opacity-30 disabled:hover:border-neutral-200 dark:border-neutral-800 disabled:hover:text-neutral-600 dark:text-neutral-400 group"
              >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Mobile Track Selectors */}
          <div className="flex lg:hidden gap-4 justify-center order-2 relative z-20 min-w-0">
            <button 
              onClick={() => setActiveTrackIndex(Math.max(0, activeTrackIndex - 1))}
              disabled={activeTrackIndex === 0}
              className="w-12 h-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-cyzborg-orange text-neutral-600 dark:text-neutral-400 hover:text-black dark:text-white transition-all disabled:opacity-30 disabled:hover:border-neutral-200 dark:border-neutral-800 disabled:hover:text-neutral-600 dark:text-neutral-400 group shrink-0"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => setActiveTrackIndex(Math.min(TRACKS.length - 1, activeTrackIndex + 1))}
              disabled={activeTrackIndex === TRACKS.length - 1}
              className="w-12 h-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-cyzborg-orange text-neutral-600 dark:text-neutral-400 hover:text-black dark:text-white transition-all disabled:opacity-30 disabled:hover:border-neutral-200 dark:border-neutral-800 disabled:hover:text-neutral-600 dark:text-neutral-400 group shrink-0"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Album Art Graphic representation */}
          <div 
            className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {TRACKS.map((track, idx) => {
              const isActive = activeTrackIndex === idx;
              const isPlaying = playingTrackId === track.id;
              
              let posOffset = 0;
              let zIndexValue = isActive ? 10 : 5;
              
              if (!isActive) {
                const inactiveIndices = TRACKS.map((_, i) => i).filter(i => i !== activeTrackIndex);
                const pos = inactiveIndices.indexOf(idx);
                if (pos === 0) { posOffset = -1; zIndexValue = 5; }
                else if (pos === 1) { posOffset = 1; zIndexValue = 4; }
                else if (pos === 2) { posOffset = 2; zIndexValue = 3; }
                else if (pos === 3) { posOffset = -2; zIndexValue = 2; }
              }
              
              const baseTranslateX = posOffset * 80;
              const hoverTranslateX = posOffset * 170;
              const translateX = isHovered ? hoverTranslateX : baseTranslateX;
              
              const translateY = isActive ? 0 : 0;
              const hoverTranslateY = isActive ? 0 : 20;
              const finalTranslateY = isHovered ? hoverTranslateY : translateY;
              
              const scale = isActive ? 1 : 0.85;
              const rotate = isHovered ? posOffset * 15 : posOffset * 6;
              
              return (
                <div 
                  key={track.id}
                  onClick={() => {
                    if (!isActive) {
                      setActiveTrackIndex(idx);
                      setPlayingTrackId(null);
                    }
                  }}
                  className={`absolute top-0 left-[10%] sm:left-[5%] w-[80%] sm:w-[90%] aspect-square cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-bottom ${!isActive ? 'group' : ''}`}
                  style={{
                    zIndex: zIndexValue,
                    transform: `translateX(${translateX}px) translateY(${finalTranslateY}px) scale(${scale}) rotate(${rotate}deg)`,
                    opacity: isActive || isHovered ? 1 : 0.6,
                  }}
                >
                  {/* The Sleeve */}
                  <div className={`relative w-full h-full border ${isActive ? 'border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)]' : 'border-neutral-200 dark:border-neutral-800 shadow-xl hover:border-neutral-400'} bg-white dark:bg-black overflow-hidden z-10 transition-all duration-500`}>
                    
                    {isPlaying && isActive ? (
                      <iframe 
                        style={{ borderRadius: 0 }} 
                        src={track.embedUrl} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allowFullScreen={false} 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    ) : (
                      <>
                        <img loading="lazy" decoding="async" src={track.coverUrl} alt={track.titleText} className="w-full h-full object-cover pointer-events-none" />
                        {!isActive && (
                          <div className="absolute inset-0 bg-white/50 dark:bg-black/50 group-hover:bg-white/30 dark:bg-black/30 transition-colors duration-300"></div>
                        )}
                        {isActive && track.embedUrl !== '' && (
                          <div 
                            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 bg-white/40 dark:bg-black/40"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingTrackId(track.id);
                            }}
                          >
                            <div className="w-16 h-16 bg-cyzborg-orange/90 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,75,0,0.4)] backdrop-blur-sm transform transition-transform duration-300 hover:scale-110">
                              <svg className="w-8 h-8 text-black dark:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>

    {/* CULT CLASSIC SECTION */}
    <section className="pt-8 pb-8 lg:pt-12 lg:pb-12 bg-neutral-100 dark:bg-[#0a0a0a] relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none z-0"></div>
      
      {/* Background Collage */}
      <img src="https://helmet-with-logo.netlify.app/cyzborg-collage.png" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-20 grayscale-[0.8] mix-blend-luminosity pointer-events-none z-0" alt="CYZBORG Collage Background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-16 items-start">
        
        {/* Title & Info */}
        <div className="flex flex-col lg:pr-4 order-2 lg:order-1 relative min-w-0">
          <h3 style={{ fontFamily: '"Rubik Glitch", system-ui' }} className="text-4xl sm:text-5xl md:text-6xl text-cyzborg-orange mb-2 drop-shadow-lg tracking-wider">
            CULT CLASSIC
          </h3>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white uppercase leading-[0.9] mb-4 tracking-tighter drop-shadow-md">
            MY BODY<br />
            <span className="text-neutral-500">FUCKING</span><br />
            HATES ME.
          </h2>
          
          <div className="font-sans text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-lg xl:text-xl lg:leading-relaxed tracking-wide max-w-lg mx-auto lg:mx-0 mb-6 lg:mb-8 drop-shadow-sm">
            <p>
              The first remastered sonic weapon from the CYZBORG system. Brutal, relentless, and engineered for the hardest training sessions.
            </p>
          </div>
          
          <div className="relative flex flex-col items-center lg:items-start border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5">
            <div className="hidden lg:block absolute -left-[2px] top-0 w-[2px] h-8 bg-cyzborg-orange"></div>
            
            <div className="font-display text-[16px] sm:text-[18px] md:text-xl lg:text-2xl font-black text-black dark:text-white uppercase tracking-wider flex flex-col md:flex-row items-center lg:items-center gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-5 pb-1 mt-2">
              <a 
                href="https://open.spotify.com/album/2fRmqckKwmi9PT6njHrhb7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaSpotify className="mr-2 text-2xl md:text-3xl shrink-0" /> Spotify
              </a>
              <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0 transform translate-y-[4px]">•</span>
              <a 
                href="https://music.youtube.com/watch?v=f3BG_CWdcIs&list=OLAK5uy_k3GSHs1_Sr2D1daHRzz9CD5xgefQWxu64" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaYoutube className="mr-2 text-2xl md:text-3xl shrink-0" /> YouTube Music
              </a>
              <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0 transform translate-y-[4px]">•</span>
              <a 
                href="https://music.apple.com/us/album/my-body-f-g-hates-me-single/6780128308" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaApple className="mr-2 text-2xl md:text-3xl shrink-0" /> Apple Music
              </a>
            </div>
          </div>
        </div>
        
        {/* Album Cover wrapper */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto order-1 lg:order-2 lg:mt-0 min-w-0 flex justify-center items-center lg:items-start">
          
          <div className="relative w-full max-w-[400px] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-500 hover:scale-[1.02] lg:-mt-0 lg:mb-0 mb-8">
            
            {playingTrackId === 'mbfhm' ? (
              <iframe 
                style={{ borderRadius: 0 }} 
                src="https://open.spotify.com/embed/album/2fRmqckKwmi9PT6njHrhb7?utm_source=generator&theme=0" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen={false} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="absolute inset-0 w-full h-full z-10"
              ></iframe>
            ) : (
              <>
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src="https://helmet-with-logo.netlify.app/mbfhm-cover.png" 
                  alt="My Body Fucking Hates Me" 
                  className="w-full h-full object-cover absolute inset-0 z-10 pointer-events-none" 
                />
                
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 bg-white/40 dark:bg-black/40 cursor-pointer"
                  onClick={() => setPlayingTrackId('mbfhm')}
                >
                  <div className="w-16 h-16 bg-cyzborg-orange/90 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,75,0,0.4)] backdrop-blur-sm transform transition-transform duration-300 hover:scale-110">
                    <svg className="w-8 h-8 text-black dark:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
</section>
  </>);
};

export default Soundtrack;
