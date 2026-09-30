const fs = require('fs');

const content = `import React from 'react';
import { SectionIds } from '../../types';
import { Focus, Clock, BookOpen, ChevronsUp, Target } from 'lucide-react';
import techBg from '../../src/assets/images/tech_devices_pedestal_1786414866464.jpg';

const Philosophy: React.FC = () => {
  return (
    <section id={SectionIds.PHILOSOPHY} className="bg-[#0a0a0a] text-white py-16 md:py-24 relative border-t border-neutral-900 overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 lg:mb-24">
          
          {/* Left Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6 md:mb-8 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
              <span className="text-cyzborg-orange font-bold text-lg">02</span>
              <span className="text-cyzborg-orange">//</span>
              <span className="text-neutral-500 tracking-[0.3em]">SYSTEM ARCHITECTURE</span>
            </div>
            
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.5rem] font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-white">
              HUMAN EFFORT,<br/>
              <span className="text-cyzborg-orange">ENHANCED BY TECHNOLOGY.</span>
            </h2>
            
            <div className="max-w-xl mb-8 md:mb-12">
              <p className="font-sans text-neutral-400 text-lg md:text-xl lg:text-[22px] leading-relaxed">
                The tools do not replace the work. They help us learn, measure, refine, and improve.
              </p>
            </div>
          </div>
          
          {/* Right Image Composition */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[16/10] rounded-sm overflow-hidden border border-neutral-900 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-[#050505]">
            <img 
              src={techBg} 
              alt="Technology Composition" 
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            />
            {/* Overlay Gradient for blending if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            
            {/* Ambient Orange Glow behind the logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-cyzborg-orange rounded-full blur-[80px] opacity-20 mix-blend-screen"></div>
            </div>

            {/* Z Logo in center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img 
                src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" 
                alt="Z" 
                className="w-32 md:w-48 lg:w-[220px] h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                style={{
                  filter: 'drop-shadow(0px 0px 40px rgba(255, 100, 0, 0.8)) drop-shadow(0px 0px 80px rgba(255, 100, 0, 0.6)) drop-shadow(0px 0px 120px rgba(255, 100, 0, 0.4))'
                }}
              />
            </div>
          </div>
        </div>

        {/* 4 Column Labels with Icons and Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-16 lg:mb-24 relative">
          
          {/* Horizontal Line connecting columns on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-neutral-800 z-0"></div>

          {/* FOCUS */}
          <div className="flex flex-col relative z-10">
            <div className="mb-4 flex items-center lg:justify-start">
               <div className="bg-[#0a0a0a] pr-4 lg:pl-0 inline-block relative">
                 <Target className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
               </div>
            </div>
            <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-3">FOCUS</h4>
            <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed pr-4">Music drives energy, rhythm, and intensity.</p>
          </div>

          {/* TRACK */}
          <div className="flex flex-col relative z-10">
            <div className="mb-4 flex items-center lg:justify-start">
               <div className="bg-[#0a0a0a] pr-4 lg:pl-0 inline-block relative">
                 <Clock className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
               </div>
            </div>
            <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-3">TRACK</h4>
            <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed pr-4">Phones, apps, and watches measure workouts and progress.</p>
          </div>

          {/* LEARN */}
          <div className="flex flex-col relative z-10">
            <div className="mb-4 flex items-center lg:justify-start">
               <div className="bg-[#0a0a0a] pr-4 lg:pl-0 inline-block relative">
                 <BookOpen className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
               </div>
            </div>
            <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-3">LEARN</h4>
            <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed pr-4">Digital resources make training knowledge accessible.</p>
          </div>

          {/* ADAPT */}
          <div className="flex flex-col relative z-10">
            <div className="mb-4 flex items-center lg:justify-start">
               <div className="bg-[#0a0a0a] pr-4 lg:pl-0 inline-block relative">
                 <ChevronsUp className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
               </div>
            </div>
            <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-3">ADAPT</h4>
            <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed pr-4">AI helps build and refine training around the individual.</p>
          </div>

        </div>

        {/* Bottom Definition Panel */}
        <div className="border border-neutral-800 bg-[#050505] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
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
console.log("Patched Philosophy");
