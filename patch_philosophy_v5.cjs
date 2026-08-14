const fs = require('fs');

const content = `import React from 'react';
import { SectionIds } from '../../types';
import { Headphones, Smartphone, Watch } from 'lucide-react';
import { FaTiktok, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { SiOpenai, SiGooglegemini } from 'react-icons/si';

const Philosophy: React.FC = () => {
  return (
    <section 
      id={SectionIds.PHILOSOPHY} 
      className="bg-[#0a0a0a] bg-cover bg-center text-white py-16 md:py-24 relative border-t border-neutral-900 overflow-hidden scroll-mt-24 md:scroll-mt-32"
      style={{ backgroundImage: 'url("https://helmet-with-logo.netlify.app/system%20architecture%20background.png")' }}
    >
      {/* Background Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 lg:mb-24">
          
          {/* Left Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6 md:mb-8 font-sans font-medium text-xs md:text-sm tracking-[0.2em] uppercase">
              <span className="text-cyzborg-orange font-bold text-lg">02</span>
              <span className="text-cyzborg-orange">//</span>
              <span className="text-neutral-500 tracking-[0.3em]">SYSTEM ARCHITECTURE</span>
            </div>
            
            <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-[6.5rem] font-bold uppercase leading-[0.9] tracking-tight mb-8 text-white">
              HUMAN EFFORT,<br/>
              <span className="text-cyzborg-orange">ENHANCED BY TECHNOLOGY.</span>
            </h2>
            
            <div className="max-w-xl mb-8 md:mb-12">
              <p className="font-sans font-medium text-neutral-400 text-lg md:text-xl lg:text-[22px] leading-relaxed mb-4">
                <span className="text-white">CYZBORG</span> represents the people who use every available tool to train with greater knowledge, awareness, and purpose. Music creates focus. Phones record form and progress. Watches provide feedback. Digital education teaches new skills. AI helps turn information into a plan. 
              </p>
              <p className="font-sans font-medium text-neutral-400 text-lg md:text-xl lg:text-[22px] leading-relaxed">
                None of it replaces the work. It helps us perform the work better.
              </p>
            </div>
          </div>
          
          {/* Right Image Composition */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[16/10] rounded-sm overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <img 
              src="https://helmet-with-logo.netlify.app/system%20architecture.png" 
              alt="System Architecture" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 4 Column Labels with Icons and Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-16 lg:mb-24 relative">
          
          {/* Horizontal Line connecting columns on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-neutral-800 z-0"></div>

          {/* FOCUS */}
          <div className="flex flex-col relative z-10">
            <div className="mb-4 flex items-center lg:justify-start">
               <div className="bg-transparent pr-4 lg:pl-0 inline-flex items-center gap-2 relative">
                 <Headphones className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
               </div>
            </div>
            <h4 className="font-bebas text-3xl font-bold text-white uppercase tracking-wider mb-3">FOCUS</h4>
            <p className="font-sans font-medium text-neutral-400 text-sm md:text-base leading-relaxed pr-4">Music drives energy, rhythm, and intensity.</p>
          </div>

          {/* TRACK */}
          <div className="flex flex-col relative z-10">
            <div className="mb-4 flex items-center lg:justify-start">
               <div className="bg-transparent pr-4 lg:pl-0 inline-flex items-center gap-2 relative">
                 <Smartphone className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
                 <Watch className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
               </div>
            </div>
            <h4 className="font-bebas text-3xl font-bold text-white uppercase tracking-wider mb-3">TRACK</h4>
            <p className="font-sans font-medium text-neutral-400 text-sm md:text-base leading-relaxed pr-4">Phones, apps, and watches measure workouts and progress.</p>
          </div>

          {/* LEARN */}
          <div className="flex flex-col relative z-10">
            <div className="mb-4 flex items-center lg:justify-start">
               <div className="bg-transparent pr-4 lg:pl-0 inline-flex items-center gap-3 relative text-neutral-400">
                 <FaTiktok className="w-7 h-7" />
                 <FaInstagram className="w-7 h-7" />
                 <FaYoutube className="w-7 h-7" />
               </div>
            </div>
            <h4 className="font-bebas text-3xl font-bold text-white uppercase tracking-wider mb-3">LEARN</h4>
            <p className="font-sans font-medium text-neutral-400 text-sm md:text-base leading-relaxed pr-4">Digital resources make training knowledge accessible.</p>
          </div>

          {/* ADAPT */}
          <div className="flex flex-col relative z-10">
            <div className="mb-4 flex items-center lg:justify-start">
               <div className="bg-transparent pr-4 lg:pl-0 inline-flex items-center gap-3 relative text-neutral-400">
                 <SiOpenai className="w-7 h-7" />
                 <SiGooglegemini className="w-7 h-7" />
                 <div className="flex items-center gap-1 font-display font-bold italic tracking-tighter text-xl">
                   <FaXTwitter className="w-6 h-6 mr-1" />
                 </div>
               </div>
            </div>
            <h4 className="font-bebas text-3xl font-bold text-white uppercase tracking-wider mb-3">ADAPT</h4>
            <p className="font-sans font-medium text-neutral-400 text-sm md:text-base leading-relaxed pr-4">AI helps build and refine training around the individual.</p>
          </div>

        </div>

        {/* Bottom Definition Panel */}
        <div className="border border-neutral-800/50 bg-[#050505]/80 backdrop-blur-sm p-6 md:p-10 flex flex-col items-center text-center gap-4">
          <h3 className="font-bebas text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
            THE AUGMENTED ATHLETE
          </h3>
          <p className="font-sans font-medium text-neutral-400 text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto">
            Not part human and part machine. A person who combines discipline with technology to become <span className="text-white font-semibold">stronger, smarter, and more capable.</span>
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Philosophy;
`;

fs.writeFileSync('components/sections/Philosophy.tsx', content);
console.log("Patched Philosophy");
