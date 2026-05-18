import React from 'react';
import { SectionIds } from '../../types';
import { ChevronRight } from 'lucide-react';

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
      className="relative h-[100dvh] min-h-[600px] w-full bg-cyzborg-black overflow-hidden flex items-end pb-4 md:pb-0 md:items-center"
    >
      {/* Background Image (Covering the entire screen) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://helmet-with-logo.netlify.app/cyzborg-hero-image.png?v=2')",
          backgroundPosition: "80% top"
        }}
      ></div>

      {/* Dark gradient mapping text alignment left */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none"></div>
      
      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 z-0 bg-gradient-to-t from-cyzborg-black to-transparent pointer-events-none"></div>

      {/* Content Container positioned to the left */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 lg:pt-16 flex flex-col justify-center">
        
        {/* Main Title (Metallic / Silver Gradient) */}
        <h1 className="flex flex-col font-display font-bold uppercase leading-[0.9] text-left drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          <span className="relative inline-block max-w-min">
            <span className="absolute -top-3 left-1 md:-top-5 md:left-2 font-sans text-xs md:text-xl tracking-[0.2em] md:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] font-bold z-10" style={{ WebkitTextStroke: '0px' }}>
              THE
            </span>
            <span className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal max-w-min" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
              AUGMENTED
            </span>
          </span>
          <span className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal max-w-min" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
            ATHLETE
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mt-6 md:mt-8 mb-10 flex flex-col gap-2">
          <p className="font-sans text-neutral-300 text-sm md:text-lg lg:text-xl uppercase tracking-[0.2em] font-medium">
            Train Like A Machine.
          </p>
          <p className="font-sans text-neutral-400 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
            Graphic T-Shirts <span className="text-neutral-500 mx-1">&</span> Premium Fitness Apparel
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col gap-3">
          <button 
            onClick={scrollToJoin} 
            className="group flex items-center justify-between border border-neutral-600 hover:border-white w-[260px] px-6 py-4 bg-transparent text-white font-sans text-xs md:text-sm tracking-[0.25em] transition-all duration-300"
          >
            <span className="font-bold">INITIALIZE</span>
            <ChevronRight className="w-4 h-4 text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
          <p className="font-sans text-neutral-500 text-[10px] md:text-xs uppercase tracking-[0.2em] ml-1">
            Coming in 2027
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;