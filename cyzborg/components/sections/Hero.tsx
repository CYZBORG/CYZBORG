import React from 'react';
import Button from '../ui/Button';
import { SectionIds } from '../../types';

const Hero: React.FC = () => {
  const scrollToJoin = () => {
    const section = document.getElementById(SectionIds.NEWSLETTER);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id={SectionIds.HERO} 
      className="relative bg-cyzborg-black overflow-hidden"
    >
      {/* Background Texture / Gradient Overlay (Covers entire scrollable section) */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
      
      {/* Cyborg Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-no-repeat pointer-events-none grayscale"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1535378437327-1011d95954a6?auto=format&fit=crop&q=80')",
          backgroundPosition: 'center 25%'
        }}
      ></div>

      {/* Dark gradient to fade the image edges into black */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyzborg-black/80 via-cyzborg-black/40 to-cyzborg-black pointer-events-none"></div>
      
      {/* Scattered LED Logos */}
      <img 
        src="https://helmet-with-logo.netlify.app/cyzborg-leds-logo.svg?v=2" 
        alt="" 
        className="absolute top-1/4 -left-[22%] md:-left-[6%] lg:-left-[4%] w-[80%] md:w-[40%] opacity-[0.03] -rotate-90 pointer-events-none select-none z-10"
      />
      <img 
        src="https://helmet-with-logo.netlify.app/cyzborg-leds-logo.svg?v=2" 
        alt="" 
        className="absolute top-1/4 -right-[22%] md:-right-[6%] lg:-right-[4%] w-[80%] md:w-[40%] opacity-[0.03] rotate-90 pointer-events-none select-none z-10"
      />
      
      {/* VIEWPORT 1: Full Screen Feathered Image */}
      {/* This ensures the helmet is the centerpiece filling the screen */}
      <div className="relative w-full flex justify-center z-10 pt-16 md:pt-12 lg:pt-8 pb-0 overflow-hidden">
         <img 
          src="https://helmet-with-logo.netlify.app/cyzborg-helmet.png?v=4" 
          alt="Cyzborg Helmet" 
          className="w-[110%] sm:w-[95%] md:w-[85%] lg:w-[75%] max-w-[1600px] h-auto object-contain object-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] -mt-4 md:-mt-12 lg:-mt-20 xl:-mt-32"
         />
      </div>

      {/* VIEWPORT 2: Text Content (Overlaying Image) */}
      <div className="relative z-20 flex flex-col items-center max-w-[90rem] mx-auto text-center pb-8 px-4 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 xl:-mt-40 2xl:-mt-52">
        
        {/* NEW HERO HEADLINE: The Augmented Alpha (H1) */}
        <h1 className="flex flex-col items-center font-display font-bold uppercase leading-[0.85] text-white tracking-tighter mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          {/* Top Line: THE (tag) + AUGMENTED */}
          <span className="relative inline-block">
            <span className="absolute -top-3 left-0.5 md:-top-5 md:left-1 font-sans text-xs md:text-xl tracking-[0.2em] md:tracking-[0.3em] text-cyzborg-blue font-bold">
              THE
            </span>
            <span className="text-6xl md:text-8xl lg:text-[10rem] block">
              AUGMENTED
            </span>
          </span>
          
          {/* Bottom Line: ALPHA. */}
          <span className="text-6xl md:text-8xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600 block">
            ALPHA.
          </span>
        </h1>

        {/* SECONDARY COMMAND (H2) */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest text-neutral-300 mb-12 opacity-90 drop-shadow-md">
          Train Like A Machine.
        </h2>

        {/* PRODUCT MANIFESTO */}
        <div className="flex flex-col items-center space-y-8 max-w-5xl mb-12 border-y border-neutral-800 py-10 px-6 w-full bg-cyzborg-black/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          
          {/* Target Audience & Action (HUD Style) */}
          <div className="relative w-full max-w-5xl mx-auto my-4 md:my-8 p-8 md:p-14 bg-black/60 backdrop-blur-lg border border-cyzborg-blue/20 overflow-hidden group">
            
            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-cyzborg-blue opacity-70"></div>
            <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-cyzborg-blue opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-cyzborg-blue opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-cyzborg-blue opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Primary Product Line (Moved into HUD) */}
              <h3 className="font-display text-2xl md:text-4xl lg:text-5xl uppercase tracking-widest leading-[1.4] text-white font-bold mb-8">
                Graphic T-Shirts <span className="text-cyzborg-orange mx-1 md:mx-2">&</span> Premium Fitness Apparel
              </h3>

              {/* System Status (Alerting) */}
              <div className="flex items-center gap-3 mb-8 px-5 py-2 border border-cyzborg-orange/50 bg-cyzborg-orange/20 rounded-full animate-pulse">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyzborg-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyzborg-orange"></span>
                </div>
                <span className="font-mono text-cyzborg-orange text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
                  System Broadcast // Active
                </span>
              </div>

              {/* Main Manifesto */}
              <p className="font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest leading-[1.6] text-neutral-300">
                <img 
                  src="https://helmet-with-logo.netlify.app/cyzborg-leds-logo.svg" 
                  alt="CYZBORG" 
                  className="inline-block h-[0.90em] align-baseline mr-1.5 md:mr-2 transform translate-y-[0.06em] -translate-x-[0.22em]" 
                  referrerPolicy="no-referrer" 
                /> is an up-and-coming fitness apparel brand creating a <br className="hidden lg:block" />
                <span className="relative inline-block group-hover:scale-105 transition-transform duration-500 my-2">
                  <span className="relative text-cyzborg-blue font-bold tracking-[0.2em]">completely new aesthetic</span>
                </span> <br className="hidden lg:block" />
                for the modern athlete.
              </p>

              {/* Secondary Data Stream */}
              <div className="mt-10 pt-6 border-t border-white/10 w-full max-w-3xl relative">
                <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-cyzborg-blue"></div>
                <p className="font-mono text-neutral-400 text-xs md:text-sm uppercase tracking-[0.25em] leading-relaxed">
                  This is a new era of training, driven by <span className="text-white font-bold">technology</span> and <span className="text-white font-bold">progress</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Tagline / Insight */}
          <div className="flex flex-col items-center text-center w-full mt-8">
             <div className="w-24 h-[2px] bg-cyzborg-blue mb-6"></div>
             <p className="font-sans text-white text-base md:text-2xl uppercase tracking-[0.2em] font-bold drop-shadow-lg">
               A NEW BREED OF APPAREL <span className="text-cyzborg-blue">FOR A NEW ERA OF TRAINING.</span>
             </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center space-y-5">
          <Button onClick={scrollToJoin} className="md:px-12 md:py-5 md:text-lg">
            STAY CONNECTED
          </Button>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-cyzborg-orange text-[10px] md:text-xs uppercase tracking-[0.3em] animate-pulse font-mono">
              System Initializing...
            </span>
            <p className="text-neutral-500 text-sm md:text-base font-sans tracking-widest uppercase">
              Coming 2027. Follow for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;