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
      className="relative bg-cyzborg-black"
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
      
      {/* VIEWPORT 1: Full Screen Feathered Image */}
      {/* This ensures the helmet is the centerpiece filling the screen */}
      {/* Increased height on mobile/tablet to ensure the logo/helmet is big and fills width */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-screen w-full flex items-end justify-center z-10 overflow-hidden pt-16 pb-0">
         <img 
          src="https://helmet-with-logo.netlify.app/cyzborg-helmet.png" 
          alt="Cyzborg Helmet" 
          className="w-full h-full object-contain object-bottom md:p-0 scale-110 md:scale-110 origin-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] translate-y-2 md:translate-y-0"
         />
      </div>

      {/* VIEWPORT 2: Text Content (Overlaying Image) */}
      {/* Changed mobile margin to mt-1 (down 2 clicks from -mt-1) while keeping desktop at -mt-3 */}
      <div className="relative z-20 flex flex-col items-center max-w-[90rem] mx-auto text-center pb-8 px-4 mt-1 md:-mt-3">
        
        {/* NEW HERO HEADLINE: The Augmented Athlete (H1) */}
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
          
          {/* Bottom Line: ATHLETE. */}
          <span className="text-6xl md:text-8xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600 block">
            ATHLETE.
          </span>
        </h1>

        {/* SECONDARY COMMAND (H2) */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest text-neutral-300 mb-12 opacity-90 drop-shadow-md">
          Train Like A Machine.
        </h2>

        {/* PRODUCT MANIFESTO */}
        <div className="flex flex-col items-center space-y-2 max-w-5xl mb-12 border-y border-neutral-800 py-8 px-4 w-full bg-cyzborg-black/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          
          {/* Primary Product Line */}
          <h3 className="font-display text-sm sm:text-xl md:text-3xl uppercase tracking-widest text-cyzborg-white whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            Performance Apparel <span className="text-cyzborg-orange mx-1 md:mx-2">&</span> Graphic Tees
          </h3>

          {/* Target Audience & Action (Refined Subtext) */}
          <div className="space-y-2">
            <p className="font-sans text-neutral-300 text-sm md:text-lg uppercase tracking-[0.2em] leading-relaxed max-w-3xl mx-auto">
              Technology enhances the process. The athlete does the work. <br className="hidden md:inline" />
              <span className="text-white font-bold">Train Hard. Track Everything. Refine the System.</span>
            </p>
          </div>

          {/* Tagline / Insight */}
          <div className="pt-4 flex flex-col items-center">
             <div className="w-12 h-[1px] bg-cyzborg-blue mb-4"></div>
             <p className="font-sans text-neutral-500 text-xs md:text-sm uppercase tracking-[0.25em] font-medium">
               Technology isn’t just the future. It's the uniform.
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
              Coming later in 2026. Follow for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;