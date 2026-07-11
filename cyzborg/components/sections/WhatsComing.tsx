import React, { useState } from 'react';
import { SectionIds } from '../../types';
import { X, RotateCcw } from 'lucide-react';

const WhatsComing: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [view, setView] = useState<'front' | 'back'>('front');

  const frontImg = "https://helmet-with-logo.netlify.app/black%20front%20-%20cyzborg.png";
  const backImg = "https://helmet-with-logo.netlify.app/black%20back%20-%20z.png";

  return (
    <section id={SectionIds.WHATS_COMING} className="py-8 md:py-12 bg-cyzborg-black relative overflow-hidden border-t border-neutral-800 scroll-mt-24 md:scroll-mt-32">
       
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

       {/* Oversized Watermark Logo */}
       <div className="absolute top-[50%] left-[50%] w-[600px] md:w-[1000px] opacity-[0.03] pointer-events-none -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] select-none z-0">
          <img loading="lazy" decoding="async" src="https://helmet-with-logo.netlify.app/cyzborg-z.svg" alt="" className="w-full" />
       </div>

       {/* Section Header */}
       <div className="relative z-10 text-center mb-0 lg:mb-16 px-4">
          <span className="text-cyzborg-orange font-mono text-xs tracking-[0.3em] uppercase block mb-1 md:mb-4 animate-pulse">
            System Loading...
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase flex flex-wrap justify-center items-center gap-y-2">
            <span className="text-cyzborg-orange">Apparel</span> 
            <span className="text-neutral-600 mx-3 sm:mx-4">&</span> 
            <span className="text-cyzborg-blue">Gear</span>
          </h2>
       </div>

       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 border border-cyzborg-orange/30 bg-cyzborg-orange/10 px-4 py-1.5 rounded-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyzborg-orange animate-pulse"></span>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-cyzborg-orange font-bold">
                Deployment Roadmap
              </span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white mb-6 leading-[0.9]">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">
                Mission
              </span>
            </h2>
            
            <div className="space-y-6 mb-2 lg:mb-10">
              <div className="space-y-4">
                <p className="font-sans text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                  CYZBORG will launch with premium graphic T-shirts for people who don’t back down. Bold designs. Quality you can feel. A fuck-you attitude toward excuses, comfort zones, and anyone who thinks you should settle.
                </p>
                <p className="font-sans text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                  This is where it starts. Next comes premium fitness apparel, headwear, and training gear built for the people who keep showing up, keep pushing, and keep moving forward.
                </p>
              </div>
              
              <div className="flex flex-col items-start border-l-2 border-cyzborg-orange pl-4 lg:pl-5 py-1 mt-8 text-left">
                <h4 className="font-sans text-white text-base md:text-lg font-bold uppercase tracking-widest mb-1">PHASE 01: GRAPHIC T-SHIRTS</h4>
                <span className="block font-mono text-cyzborg-orange text-xs tracking-[0.2em] uppercase mb-3">Early 2027</span>
                <p className="font-sans text-neutral-400 text-base md:text-lg leading-relaxed max-w-md">
                  Premium CYZBORG graphic T-shirts built around a new vision of gym style, where human ambition meets the technology we train with every day.
                </p>
              </div>

              <div className="flex flex-col items-start border-l-2 border-cyzborg-blue pl-4 lg:pl-5 py-1 text-left">
                <h4 className="font-sans text-white text-base md:text-lg font-bold uppercase tracking-widest mb-1">PHASE 02: PERFORMANCE APPAREL</h4>
                <span className="block font-mono text-cyzborg-blue text-xs tracking-[0.2em] uppercase mb-3">Late 2027 / Early 2028</span>
                <p className="font-sans text-neutral-400 text-base md:text-lg leading-relaxed max-w-md">
                  Premium fitness apparel, headwear, and training gear built for people who use every tool at their disposal to become something more.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative order-1 lg:order-2 flex flex-col items-center justify-center w-full max-w-lg mx-auto lg:max-w-none">
            
            {/* Subtle glow behind shirt */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Shirt Display Area */}
            <div 
              className="relative w-full aspect-square md:aspect-[4/5] flex items-center justify-center cursor-pointer group mt-4 md:-mt-4 lg:mt-0 mb-2 md:mb-0"
              onClick={() => setIsImageOpen(true)}
            >
              
              <div className="absolute inset-0 flex items-center justify-center p-2 md:p-8 transition-all duration-700">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={frontImg}
                  alt="CYZBORG Apparel Prototype Front" 
                  className={`w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 transform group-hover:scale-105 ${view === 'front' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'}`}
                />
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={backImg}
                  alt="CYZBORG Apparel Prototype Back" 
                  className={`w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 transform group-hover:scale-105 ${view === 'back' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'}`}
                />
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 p-2 rounded-sm text-neutral-400">
                <span className="text-[10px] uppercase tracking-widest font-sans">Click to expand</span>
              </div>
            </div>

            {/* Toggle Controls */}
            <div className="flex items-center gap-2 mt-4 md:-mt-2 lg:mt-4 bg-neutral-900/50 p-1 rounded-sm border border-neutral-800 relative z-10">
              <button 
                onClick={() => setView('front')}
                className={`px-6 py-2 text-xs uppercase tracking-widest font-sans font-bold transition-all duration-300 rounded-sm ${view === 'front' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white hover:bg-neutral-800'}`}
              >
                Front
              </button>
              <button 
                onClick={() => setView('back')}
                className={`px-6 py-2 text-xs uppercase tracking-widest font-sans font-bold transition-all duration-300 rounded-sm ${view === 'back' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white hover:bg-neutral-800'}`}
              >
                Back
              </button>
              <button
                onClick={() => setView(v => v === 'front' ? 'back' : 'front')}
                className="px-3 py-2 text-neutral-500 hover:text-white transition-colors"
                aria-label="Toggle View"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
            
          </div>

        </div>
       </div>

       {/* Bottom Link */}
       <div className="relative z-10 text-center mt-2 lg:mt-8">
          <p className="font-mono text-cyzborg-blue text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] uppercase animate-pulse whitespace-nowrap">
            /// Standby for drop dates ///
          </p>
       </div>

       {/* Image Modal */}
       {isImageOpen && (
         <div 
           className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4"
           onClick={() => setIsImageOpen(false)}
         >
           <button 
             className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
             onClick={() => setIsImageOpen(false)}
           >
             <X className="w-8 h-8" />
           </button>
           
           <div className="w-full max-w-5xl flex-grow flex items-center justify-center relative" onClick={(e) => e.stopPropagation()}>
              <img 
                 loading="lazy" 
                 decoding="async" 
                 src={view === 'front' ? frontImg : backImg} 
                 alt="CYZBORG Apparel Prototype Full Size" 
                 className="w-full max-h-[85vh] object-contain animate-fade-in"
               />
           </div>
           
           <div className="mt-4 pb-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-2 bg-neutral-900/80 backdrop-blur-sm p-1 rounded-sm border border-neutral-700">
                 <button 
                   onClick={() => setView('front')}
                   className={`px-8 py-3 text-xs uppercase tracking-widest font-sans font-bold transition-all duration-300 rounded-sm ${view === 'front' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white hover:bg-neutral-800'}`}
                 >
                   Front
                 </button>
                 <button 
                   onClick={() => setView('back')}
                   className={`px-8 py-3 text-xs uppercase tracking-widest font-sans font-bold transition-all duration-300 rounded-sm ${view === 'back' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white hover:bg-neutral-800'}`}
                 >
                   Back
                 </button>
               </div>
           </div>
         </div>
       )}
    </section>
  );
};

export default WhatsComing;
