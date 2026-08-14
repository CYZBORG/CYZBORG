const fs = require('fs');

const content = `import React from 'react';
import { SectionIds } from '../../types';
import { Crosshair } from 'lucide-react';
import techBg from '../../assets/images/devices_bg_1786413384114.jpg';

const Philosophy: React.FC = () => {
  return (
    <section id={SectionIds.PHILOSOPHY} className="bg-[#050505] text-white py-16 md:py-24 relative border-t border-neutral-900 overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 lg:mb-24">
          
          {/* Left Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6 md:mb-8 text-neutral-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
              <Crosshair className="w-5 h-5 text-cyzborg-orange opacity-80" />
              <div className="flex items-center gap-3">
                <span className="tracking-[0.3em]">SYSTEM ARCHITECTURE</span>
                <span className="text-cyzborg-orange">//</span>
                <span className="text-cyzborg-orange font-bold">01</span>
              </div>
            </div>
            
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-8 md:mb-10 text-white">
              HUMAN EFFORT,<br/>
              ENHANCED BY<br/>
              TECHNOLOGY.
            </h2>
            
            <div className="max-w-lg mb-8 md:mb-12">
              <p className="font-sans text-neutral-400 text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
                <span className="text-white font-medium">CYZBORG</span> represents people who use every available tool to learn, track, refine, and improve.
              </p>
              <p className="font-sans text-neutral-400 text-lg md:text-xl lg:text-2xl leading-relaxed">
                Technology doesn't replace the work&mdash;it helps us perform the work better.
              </p>
            </div>
            
            {/* Orange Slashes */}
            <div className="flex gap-1 text-cyzborg-orange font-black italic text-xl">
              ////
            </div>
          </div>
          
          {/* Right Image Composition */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[16/10] rounded-sm overflow-hidden border border-neutral-900 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-[#0a0a0a]">
            <img 
              src={techBg} 
              alt="Technology Composition" 
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            />
            {/* Overlay Gradient for blending if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            
            {/* Z Logo in center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img 
                src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" 
                alt="Z" 
                className="w-32 md:w-48 lg:w-56 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                style={{
                  filter: 'drop-shadow(0px 0px 40px rgba(255, 100, 0, 0.6)) drop-shadow(0px 0px 80px rgba(255, 100, 0, 0.4))'
                }}
              />
            </div>
          </div>
        </div>

        {/* 4 Column Labels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 lg:mb-24">
          <div className="flex flex-col border-t-2 border-cyzborg-orange pt-4 md:pt-6">
            <h4 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1 md:mb-2">FOCUS</h4>
            <p className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-widest">MUSIC + INTENSITY</p>
          </div>
          <div className="flex flex-col border-t-2 border-cyzborg-orange pt-4 md:pt-6">
            <h4 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1 md:mb-2">TRACK</h4>
            <p className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-widest">DATA + PROGRESS</p>
          </div>
          <div className="flex flex-col border-t-2 border-cyzborg-orange pt-4 md:pt-6">
            <h4 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1 md:mb-2">LEARN</h4>
            <p className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-widest">KNOWLEDGE + FORM</p>
          </div>
          <div className="flex flex-col border-t-2 border-cyzborg-orange pt-4 md:pt-6">
            <h4 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1 md:mb-2">ADAPT</h4>
            <p className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-widest">AI + PERSONALIZATION</p>
          </div>
        </div>

        {/* Bottom Definition Panel */}
        <div className="border border-neutral-800 bg-[#0a0a0a] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-start">
            <span className="text-cyzborg-orange font-black italic text-xl hidden md:block">////</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-wider text-center lg:text-left">
              THE AUGMENTED ATHLETE
            </h3>
          </div>
          
          <div className="font-mono text-xs md:text-sm text-cyzborg-orange font-bold uppercase tracking-[0.2em] text-center">
            DISCIPLINE + TECHNOLOGY
          </div>
          
          <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-end">
            <p className="font-sans text-neutral-400 text-sm md:text-base uppercase tracking-widest text-center lg:text-right">
              STRONGER. SMARTER. MORE CAPABLE.
            </p>
            <span className="text-neutral-700 font-black italic text-xl hidden lg:block">////</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Philosophy;
`;

fs.writeFileSync('components/sections/Philosophy.tsx', content);
console.log("Patched Philosophy.tsx");
