import React from 'react';
import { SectionIds } from '../../types';
import { ChevronRight } from 'lucide-react';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

// Direct platform URLs for the "My Brain Thinks I'm a Monster" release.
const RELEASE_LINKS = {
  spotify: 'https://open.spotify.com/track/2PzkJcUb8dvhyqCetBSl1M?si=9d8d21dc549b4c5b',
  youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lRQzeVXLtS2JAWR8NnbvO4g3gEUmY5vOI&si=X8-vtFatE4CLl45r',
  apple: 'https://music.apple.com/us/song/my-brain-thinks-im-a-monster/6798165774',
};

const Hero: React.FC = () => {
  const scrollToSoundtrack = () => {
    const section = document.getElementById(SectionIds.SOUNDTRACK);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        /* BASE / DESKTOP (Width > 1180px or default) */
        .hero-section {
          height: 100dvh;
          min-height: 700px;
          background-color: #000;
        }
        .hero-bg-layer {
          background-image: url('https://helmet-with-logo.netlify.app/cyzborg-hero-august.png');
          background-size: cover;
          background-position: 80% top;
          inset: 0;
        }
        .hero-contrast-layer {
          background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, transparent 100%);
          inset: 0;
        }
        .hero-bottom-fade {
          height: 8rem;
          bottom: 0;
          background: linear-gradient(to top, #000, transparent);
        }
        .hero-content-container {
          padding-top: 14rem;
          padding-left: 3rem;
          padding-right: 3rem;
          justify-content: center;
          height: 100%;
        }
        .hero-primary-text {
          max-width: 100%;
        }
        .hero-the-label {
          position: relative;
          font-size: 1.25rem;
          margin-left: 0.5rem;
          margin-bottom: -1rem;
        }
        .hero-headline {
          font-size: clamp(60px, 8.5vw, 150px);
          line-height: 0.9;
        }
        .hero-subtitle-group {
          margin-top: 2.5rem;
          gap: 0.5rem;
        }
        .hero-subtitle-1 {
          font-size: 1.875rem;
        }
        .hero-subtitle-2 {
          font-size: 1.25rem;
        }
        .hero-coming-date {
          font-size: 1.5rem;
          margin-top: 0.75rem;
          margin-left: 2.5rem;
        }
        
        .release-dock-container {
          margin-top: 3rem;
          padding: 0.5rem 1.5rem 0.5rem 1.5rem;
          border-left: 2px solid #FF5500;
          flex-direction: column;
        }
        .release-dock-bg {
          top: -0.5rem; bottom: -0.5rem; left: 0; right: 0;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.84) 68%, rgba(0, 0, 0, 0) 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 84%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 84%, transparent 100%);
        }
        .release-dock-content {
          flex-direction: column;
        }
        .release-dock-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .release-dock-controls {
          flex-direction: row;
          gap: 1.5rem;
          align-items: center;
        }
        .release-btn {
          height: 56px;
          padding: 0 2rem;
          font-size: 1.125rem;
        }
        .platform-grid {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }
        .platform-link {
          flex-direction: row;
          gap: 0.625rem;
        }
        .platform-icon {
          width: 24px; height: 24px;
        }
        .platform-label {
          font-size: 0.875rem;
        }
        .yt-break, .apple-break {
          display: none;
        }

        /* 1. TABLET LANDSCAPE (768px - 1180px, landscape) */
        @media (min-width: 768px) and (max-width: 1180px) and (orientation: landscape) {
          .hero-bg-layer {
            background-position: 85% top;
          }
          .hero-content-container {
            padding-top: 17rem; /* Align AUGMENTED with Z logo */
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .hero-the-label {
            font-size: 1rem;
            margin-bottom: -0.5rem;
          }
          .hero-headline {
            font-size: 5rem;
          }
          .hero-subtitle-group { margin-top: 2rem; }
          .hero-subtitle-1 { font-size: 1.5rem; }
          .hero-subtitle-2 { font-size: 1rem; }
          .hero-coming-date { font-size: 1.25rem; margin-top: 0.5rem; }
          
          .release-dock-container {
            margin-top: auto;
            margin-bottom: 2rem;
            padding: 0.5rem 3rem 0.5rem 0.75rem;
            align-self: flex-start;
          }
          .release-dock-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .release-dock-left { margin-right: 0; }
          .release-dock-title {
            font-size: 1.25rem;
            margin-bottom: 0;
            max-width: 100%;
          }
          .release-dock-controls {
            flex-direction: row;
            margin-top: 0.25rem;
            gap: 0.75rem;
          }
          .release-btn { height: 36px; padding: 0 0.875rem; font-size: 0.75rem; }
          .platform-grid { gap: 0.75rem; }
          .platform-icon { width: 16px; height: 16px; }
          .platform-label { font-size: 0.65rem; }
        }

        /* 2. TABLET PORTRAIT (600px - 900px, portrait) */
        @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
          .hero-section {
            min-height: 100dvh;
            height: 100dvh;
          }
          .hero-bg-layer {
            background-position: 75% top;
          }
          .hero-content-container {
            padding-top: 38rem; /* Target Z logo tip + 24-32px */
            padding-bottom: 2rem;
            padding-left: 2.5rem;
            padding-right: 2.5rem;
            justify-content: flex-start;
          }
          .hero-the-label {
            font-size: 1.125rem;
            margin-bottom: -0.25rem;
            margin-left: 0.25rem;
          }
          .hero-headline {
            font-size: 5rem;
          }
          .hero-subtitle-group {
             margin-top: 1.25rem; /* ~20px below ATHLETE */
             display: flex;
             flex-direction: column;
             gap: 0.5rem;
          }
          .hero-subtitle-1 { font-size: 1.25rem; }
          .hero-subtitle-2 { font-size: 0.95rem; }
          .hero-coming-date { font-size: 1.125rem; margin-left: 1rem; margin-top: 0; }
          
          .release-dock-container {
            margin-top: auto;
            margin-bottom: 0;
            padding: 0.5rem 3rem 0.5rem 0.75rem;
            align-self: flex-start;
          }
          .release-dock-content {
             gap: 0.5rem;
          }
          .release-dock-title {
            font-size: 1.25rem;
            margin-bottom: 0;
            max-width: 100%;
          }
          .release-dock-controls {
            flex-direction: row;
            gap: 0.75rem;
            margin-top: 0.25rem;
          }
          .release-btn {
            height: 36px;
            padding: 0 0.875rem;
            font-size: 0.75rem;
          }
          .platform-grid {
            gap: 0.75rem;
          }
          .platform-icon {
            width: 16px;
            height: 16px;
          }
          .platform-label {
            font-size: 0.65rem;
          }
        }

        /* 3. PHONE PORTRAIT (320px - 599px, portrait) */
        @media (max-width: 599px) and (orientation: portrait) {
          .hero-section {
            height: 100dvh;
            min-height: 100dvh;
            padding-bottom: 2rem;
          }
          .hero-bg-layer {
            position: absolute;
            height: 750px;
            bottom: auto;
            background-size: auto 88%;
            background-position: 70% top;
            -webkit-mask-image: linear-gradient(to bottom, black 70%, rgba(0,0,0,0.55) 86%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 70%, rgba(0,0,0,0.55) 86%, transparent 100%);
          }
          .hero-contrast-layer {
            background: none;
          }
          .hero-content-container {
            padding-top: 360px;
            padding-left: 20px;
            padding-right: 20px;
            justify-content: flex-start;
          }
          .hero-the-label {
            font-size: 11px;
            margin-bottom: 2px;
            margin-left: 0;
          }
          .hero-headline {
            font-size: clamp(44px, 14vw, 58px);
            line-height: 0.86;
          }
          .hero-subtitle-group {
            margin-top: 1rem;
            gap: 0.5rem;
          }
          .hero-subtitle-1 { font-size: 17px; line-height: 1.45; }
          .hero-subtitle-2 { font-size: 13px; line-height: 1.55; }
          .hero-coming-date { font-size: 16px; margin-left: 0; margin-top: 1.25rem; }
          
          .release-dock-container {
            display: none;
          }
          .release-dock-bg {
             top: -0.25rem; bottom: -0.25rem; left: 0; right: 0;
          }
          .release-dock-left p {
            font-size: 9px;
            margin-bottom: 4px;
          }
          .release-dock-title {
            font-size: clamp(12px, 4.5vw, 15px);
            line-height: 1.1;
            margin-bottom: 0;
            max-width: 100%;
            white-space: nowrap;
          }
          .release-dock-controls {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
            margin-top: 8px;
          }
          .release-btn {
            width: auto;
            height: 32px;
            padding: 0 1rem;
            font-size: 11px;
          }
          .platform-grid {
            display: none;
          }
        }
        
        /* Phone portrait very narrow tweak (< 350px) */
        @media (max-width: 349px) and (orientation: portrait) {
          .hero-bg-layer { height: 680px; background-size: auto 95%; }
        }

        /* 4. PHONE LANDSCAPE (height < 600px, landscape) */
        @media (max-height: 599px) and (orientation: landscape) {
          .hero-section {
            height: 100dvh;
            min-height: 100dvh;
            padding-bottom: 1.5rem;
          }
          .hero-bg-layer {
            background-position: 75% top;
          }
          .hero-content-container {
            padding-top: 10rem;
            padding-left: 20px;
            padding-right: 20px;
            justify-content: flex-start;
          }
          .hero-primary-text {
            width: 50%;
          }
          .hero-the-label { font-size: 11px; margin-bottom: 2px; margin-left: 0; }
          .hero-headline { font-size: clamp(38px, 7vw, 54px); line-height: 0.86; }
          .hero-subtitle-group { margin-top: 0.75rem; gap: 0.25rem; }
          .hero-subtitle-1 { font-size: 15px; line-height: 1.4; }
          .hero-subtitle-2 { font-size: 11px; line-height: 1.4; }
          .hero-coming-date { font-size: 14px; margin-top: 0.5rem; margin-left: 0;}
          
          .release-dock-container {
            display: none;
          }
          .release-dock-content {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }
          .release-dock-left { margin-right: 0.5rem; }
          .release-dock-title {
            font-size: 24px;
            margin-bottom: 0;
            line-height: 1.05;
            max-width: 280px;
          }
          .release-dock-controls {
            flex-direction: row;
            gap: 1rem;
            align-items: center;
            margin-top: 0;
          }
          .release-btn { height: 44px; padding: 0 1rem; font-size: 14px; }
          .platform-grid { gap: 1rem; }
          .platform-link { flex-direction: row; padding: 0.25rem; }
          .platform-icon { width: 18px; height: 18px; margin-right: 6px; }
          .platform-label { font-size: 10px; }
          .yt-break, .apple-break { display: none; }
        }
      `}</style>

      <section id={SectionIds.HERO} className="hero-section relative w-full overflow-x-clip box-border text-left font-sans">
        
        {/* Background Layer */}
        <div className="hero-bg-layer absolute inset-0 z-0 pointer-events-none bg-no-repeat"></div>
        
        {/* Contrast Overlay */}
        <div className="hero-contrast-layer absolute inset-0 z-0 pointer-events-none"></div>
        
        {/* Bottom Fade */}
        <div className="hero-bottom-fade absolute inset-x-0 z-0 pointer-events-none"></div>

        {/* Content Container */}
        <div className="hero-content-container relative z-10 w-full max-w-[1400px] mx-auto flex flex-col box-border">
          
          {/* Primary Text */}
          <div className="hero-primary-text flex flex-col">
            <h1 className="flex flex-col font-display font-bold uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              <span className="relative inline-block max-w-min">
                <span className="hero-the-label block text-white font-sans font-bold tracking-[0.2em] md:tracking-[0.3em] md:text-transparent md:bg-clip-text md:bg-gradient-to-tr md:from-[#999999] md:via-[#E8E8E8] md:to-[#555555] z-10">
                  THE
                </span>
                <span className="hero-headline text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal max-w-full md:max-w-min" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                  AUGMENTED
                </span>
              </span>
              <span className="hero-headline text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal max-w-full md:max-w-min" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                ATHLETE
              </span>
            </h1>

            <div className="hero-subtitle-group flex flex-col">
              <p className="hero-subtitle-1 text-neutral-300 uppercase tracking-widest md:tracking-[0.2em] font-medium">
                MORE THAN HUMAN,<br className="block md:hidden" /><span className="hidden md:inline"> </span>BETTER THAN MACHINE.
              </p>
              <p className="hero-subtitle-2 text-neutral-400 uppercase tracking-wider md:tracking-[0.2em] font-medium">
                GRAPHIC T-SHIRTS <span className="text-neutral-500 mx-1">&</span> PREMIUM FITNESS APPAREL
              </p>
              <p className="hero-coming-date font-bold text-[#00F0FF] uppercase tracking-[0.2em] md:tracking-[0.25em]">
                COMING IN 2027
              </p>
            </div>
          </div>

          {/* Release Dock */}
          <div className="release-dock-container relative flex items-start w-full md:w-auto">
            <div className="release-dock-bg absolute z-0 pointer-events-none"></div>
            
            <div className="release-dock-content relative z-10 flex w-full">
              <div className="release-dock-left flex flex-col">
                <p className="font-mono font-bold text-cyzborg-orange text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.3em] mb-1 md:mb-1.5">
                  NOW STREAMING
                </p>
                <h2 className="release-dock-title font-display font-bold text-white uppercase tracking-wider">
                  MY BRAIN THINKS I’M A MONSTER
                </h2>
              </div>
              
              <div className="release-dock-controls flex w-full md:w-auto">
                <button 
                  onClick={scrollToSoundtrack}
                  className="release-btn group relative flex items-center justify-center font-display font-bold text-black bg-white hover:bg-cyzborg-orange transition-all duration-300 uppercase tracking-widest shrink-0"
                >
                  VIEW RELEASE
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="platform-grid">
                  <a 
                    href={RELEASE_LINKS.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-link group flex items-center text-neutral-300 hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <FaSpotify className="platform-icon shrink-0" />
                    <span className="platform-label font-mono tracking-wider uppercase">Spotify</span>
                  </a>
                  <a 
                    href={RELEASE_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-link group flex items-center text-neutral-300 hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <FaYoutube className="platform-icon shrink-0" />
                    <span className="platform-label font-mono tracking-wider uppercase">YouTube<br className="yt-break" /><span className="hidden md:inline"> </span>Music</span>
                  </a>
                  <a 
                    href={RELEASE_LINKS.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-link group flex items-center text-neutral-300 hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <FaApple className="platform-icon shrink-0" />
                    <span className="platform-label font-mono tracking-wider uppercase">Apple<br className="apple-break" /><span className="hidden md:inline"> </span>Music</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;