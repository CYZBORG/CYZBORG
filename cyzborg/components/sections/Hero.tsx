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
          height: 100svh;
          min-height: 700px;
          background-color: #000;
        }
        .hero-bg-layer {
          background-image: url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=2560&fm=webp&q=92');
          background-image: -webkit-image-set(
            url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=2560&fm=webp&q=92') 1x,
            url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=3344&fm=webp&q=92') 2x
          );
          background-image: image-set(
            url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=2560&fm=webp&q=92') 1x,
            url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=3344&fm=webp&q=92') 2x
          );
          background-size: cover;
          background-position: 80% top;
          inset: 0;
        }

        /* Responsive Background Image Tiers for Mobile & Tablet */
        @media (max-width: 599px) {
          .hero-bg-layer {
            background-image: url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=1200&fm=webp&q=92');
            background-image: -webkit-image-set(
              url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=1080&fm=webp&q=92') 1x,
              url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=1600&fm=webp&q=92') 2x
            );
            background-image: image-set(
              url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=1080&fm=webp&q=92') 1x,
              url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=1600&fm=webp&q=92') 2x
            );
          }
        }

        @media (min-width: 600px) and (max-width: 1180px) {
          .hero-bg-layer {
            background-image: url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=1600&fm=webp&q=92');
            background-image: -webkit-image-set(
              url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=1600&fm=webp&q=92') 1x,
              url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=2560&fm=webp&q=92') 2x
            );
            background-image: image-set(
              url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=1600&fm=webp&q=92') 1x,
              url('https://helmet-with-logo.netlify.app/.netlify/images?url=/cyzborg%20hero%20nm.png&w=2560&fm=webp&q=92') 2x
            );
          }
        }
        .hero-contrast-layer {
          background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 40%, transparent 100%);
          inset: 0;
        }
        .hero-dof-layer {
          display: none;
        }
        @media (min-width: 1181px) {
          .hero-dof-layer {
            display: block;
            inset: 0;
            backdrop-filter: blur(2.8px);
            -webkit-backdrop-filter: blur(2.8px);
            -webkit-mask-image:
              radial-gradient(
                ellipse 25% 44% at 91% 76%,
                rgba(0, 0, 0, 0.82) 0%,
                rgba(0, 0, 0, 0.65) 55%,
                rgba(0, 0, 0, 0.25) 78%,
                transparent 95%
              ),
              radial-gradient(
                ellipse 38% 55% at 16% 68%,
                rgba(0, 0, 0, 0.75) 0%,
                rgba(0, 0, 0, 0.4) 55%,
                transparent 90%
              );
            mask-image:
              radial-gradient(
                ellipse 25% 44% at 91% 76%,
                rgba(0, 0, 0, 0.82) 0%,
                rgba(0, 0, 0, 0.65) 55%,
                rgba(0, 0, 0, 0.25) 78%,
                transparent 95%
              ),
              radial-gradient(
                ellipse 38% 55% at 16% 68%,
                rgba(0, 0, 0, 0.75) 0%,
                rgba(0, 0, 0, 0.4) 55%,
                transparent 90%
              );
          }
        }
        .hero-bottom-fade {
          height: 8rem;
          bottom: 0;
          background: linear-gradient(to top, #000, transparent);
        }
        .hero-content-container {
          padding-top: 21rem;
          padding-left: 1.5rem;
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
        .hero-top-text {
          font-size: clamp(42px, 6vw, 95px);
        }
        .hero-headline {
          font-size: clamp(80px, 10vw, 160px);
          line-height: 0.9;
        }
        .hero-subtitle-group {
          margin-top: 1.5rem; /* Matched to coming-date */
          gap: 0.5rem;
        }
        .hero-subtitle-1 {
          font-size: 1.875rem;
        }
        .hero-subtitle-2 {
          font-size: 1.25rem;
        }
        .hero-coming-date {
          font-size: 2.25rem;
          margin-top: 1.5rem;
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
            background-position: 68% top;
          }
          .hero-content-container {
            padding-top: 28.5rem;
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .hero-the-label {
            font-size: 1rem;
            margin-bottom: -0.5rem;
          }
          .hero-top-text {
            font-size: 3.75rem;
          }
          .hero-headline {
            font-size: 6rem;
          }
          .hero-subtitle-group { margin-top: 0.75rem; }
          .hero-subtitle-1 { font-size: 1.25rem; }
          .hero-subtitle-2 { font-size: 0.875rem; }
          .hero-coming-date { font-size: 1.5rem; margin-top: 0.75rem; }
          
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

        /* 2. TABLET PORTRAIT (600px - 1024px, portrait) */
        @media (min-width: 600px) and (max-width: 1024px) and (orientation: portrait) {
          .hero-section {
            min-height: 100svh;
            height: 100svh;
          }
          .hero-bg-layer {
            background-position: calc(50% - 22.3svh) top;
          }
          .hero-content-container {
            padding-top: 46.5rem;
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
          .hero-top-text {
            font-size: 3.25rem;
          }
          .hero-headline {
            font-size: 5.5rem;
          }
          .hero-subtitle-group {
             margin-top: 1rem; /* Matched to coming-date */
             display: flex;
             flex-direction: column;
             gap: 0.5rem;
          }
          .hero-subtitle-1 { font-size: 1.25rem; }
          .hero-subtitle-2 { font-size: 0.95rem; }
          .hero-coming-date { font-size: 1.5rem; margin-left: 1rem; margin-top: 1rem; }
          
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
            height: 100svh;
            min-height: 100svh;
            padding-bottom: 2rem;
          }
          .hero-bg-layer {
            position: absolute;
            top: 56px;
            height: 750px;
            bottom: auto;
            background-size: auto 85%;
            background-position: calc(50% - 139px) top;
            -webkit-mask-image: linear-gradient(to bottom, black 70%, rgba(0,0,0,0.55) 86%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 70%, rgba(0,0,0,0.55) 86%, transparent 100%);
          }
          .hero-contrast-layer {
            background: none;
          }
          .hero-content-container {
            padding-top: 478px;
            padding-left: 20px;
            padding-right: 20px;
            justify-content: flex-start;
          }
          .hero-the-label {
            font-size: 11px;
            margin-bottom: 2px;
            margin-left: 0;
          }
          .hero-top-text {
            font-size: clamp(28px, 8vw, 42px);
          }
          .hero-headline {
            font-size: clamp(42px, 13vw, 72px);
            line-height: 0.86;
            white-space: nowrap;
          }
          .hero-subtitle-group {
            margin-top: 1rem;
            gap: 0.5rem;
          }
          .hero-subtitle-1 { font-size: clamp(13px, 4.2vw, 17px); line-height: 1.45; white-space: nowrap; }
          .hero-subtitle-2 { font-size: 13px; line-height: 1.55; }
          .hero-coming-date { font-size: 22px; margin-left: 0; margin-top: 0.75rem; }
          
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
            height: 100svh;
            min-height: 100svh;
            padding-bottom: 1.5rem;
          }
          .hero-bg-layer {
            top: 66px;
            background-position: 60% top;
            transform: translateX(26px);
          }
          .hero-content-container {
            padding-top: 12.5rem;
            padding-left: 20px;
            padding-right: 20px;
            justify-content: flex-start;
          }
          .hero-primary-text {
            width: 65%;
          }
          .hero-the-label { font-size: 11px; margin-bottom: 2px; margin-left: 0; }
          .hero-top-text { font-size: clamp(24px, 5.5vw, 32px); }
          .hero-headline { font-size: clamp(36px, 9vw, 52px); line-height: 0.86; white-space: nowrap; }
          .hero-subtitle-group { margin-top: 0.25rem; gap: 0.25rem; }
          .hero-subtitle-1 { font-size: 15px; line-height: 1.4; }
          .hero-subtitle-1 br { display: none !important; }
          .hero-subtitle-2 { font-size: 11px; line-height: 1.4; }
          .hero-coming-date { font-size: 20px; margin-top: 0.25rem; margin-left: 0;}
          
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

        {/* Desktop Optical Depth-of-Field Layer (keeps painted head sharp, blurs surrounding weights) */}
        <div className="hero-dof-layer absolute inset-0 z-0 pointer-events-none"></div>
        
        {/* Contrast Overlay */}
        <div className="hero-contrast-layer absolute inset-0 z-0 pointer-events-none"></div>
        
        {/* Bottom Fade */}
        <div className="hero-bottom-fade absolute inset-x-0 z-0 pointer-events-none"></div>

        {/* Content Container */}
        <div className="hero-content-container relative z-10 w-full max-w-[1560px] mx-auto flex flex-col box-border">
          
          {/* Primary Text */}
          <div className="hero-primary-text flex flex-col">
            <h1 className="w-full flex flex-col">
              <img
                src="https://helmet-with-logo.netlify.app/stronger%20smarter%20more%20capable%202.svg"
                alt="STRONGER. SMARTER. MORE CAPABLE."
                style={{
                  filter:
                    'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.92)) drop-shadow(0 12px 26px rgba(0, 0, 0, 0.85))',
                }}
                className="w-[87%] sm:w-[82%] md:w-[78%] lg:w-[65%] max-w-[884px] h-auto object-contain object-left"
              />
            </h1>

            <div className="hero-subtitle-group flex flex-col">
              <p className="hero-subtitle-1 text-neutral-300 uppercase tracking-widest md:tracking-[0.2em] font-medium whitespace-nowrap">
                GRAPHIC T-SHIRTS <span className="text-neutral-500 md:ml-1 mr-1">&</span> GYMWEAR
              </p>
              <p className="hero-coming-date font-bold text-[#00A3FF] uppercase tracking-[0.2em] md:tracking-[0.25em]">
                COMING IN 2027
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;