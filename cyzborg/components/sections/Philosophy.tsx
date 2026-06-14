import React from 'react';
import { SectionIds } from '../../types';

const Philosophy: React.FC = () => {
  return (
    <section id={SectionIds.PHILOSOPHY} className="bg-cyzborg-black py-8 md:py-12 relative border-t border-neutral-900 overflow-hidden scroll-mt-24 md:scroll-mt-32">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

      {/* Scattered LED Logo */}
      <img 
        src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" 
        alt="" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] md:w-[120%] opacity-[0.02] pointer-events-none select-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 border-b border-neutral-800 pb-4 md:pb-6 gap-4 md:gap-6">
           <div>
             <h2 className="font-display text-4xl md:text-7xl font-bold text-neutral-800 tracking-tighter uppercase select-none leading-none mb-3">
               SYSTEM ARCHITECTURE
             </h2>
             <div className="font-display text-xl md:text-3xl font-bold uppercase tracking-widest leading-tight">
                <span className="text-cyzborg-blue block md:inline md:mr-3">MORE THAN HUMAN,</span>
                <span className="text-cyzborg-orange block md:inline">BETTER THAN MACHINE.</span>
             </div>
           </div>
           
           <div className="hidden md:flex flex-col items-end pb-1">
              <span className="font-mono text-xs text-cyzborg-blue tracking-[0.3em]">SYS.CONFIG_V2</span>
              <div className="flex gap-1 mt-2">
                 <div className="w-1 h-1 bg-cyzborg-blue shadow-[0_0_5px_#00AEEF]"></div>
                 <div className="w-1 h-1 bg-neutral-700"></div>
                 <div className="w-1 h-1 bg-neutral-700"></div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Module 01: Context / How it came to be */}
          <div className="lg:col-span-7 flex flex-col">
             <div className="border border-neutral-800 bg-neutral-900/30 p-8 md:p-12 h-full relative group transition-colors hover:border-cyzborg-blue/30 hover:bg-neutral-900/50 flex flex-col justify-between overflow-hidden">
                
                {/* Technical Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyzborg-blue/[0.03] to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(0,174,239,0.1)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)] pointer-events-none"></div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyzborg-blue shadow-[0_0_10px_rgba(0,174,239,0.5)]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neutral-700 group-hover:border-cyzborg-blue transition-colors"></div>
                
                <div className="relative z-10">
                    <span className="font-mono text-xs md:text-sm text-cyzborg-blue mb-8 block tracking-[0.3em] uppercase">
                    /// 01_GENESIS
                    </span>

                    <h3 className="font-display text-3xl md:text-5xl text-white uppercase mb-10 leading-[0.9] font-bold [text-wrap:balance]">
                    CYZBORG was created from a simple truth.{" "}
                    <span className="text-neutral-500">Modern athletes already train with technology.</span>
                    </h3>

                    <div className="font-sans text-neutral-400 text-xl md:text-3xl lg:text-4xl leading-tight tracking-wide uppercase border-l-2 border-neutral-800 pl-6 mb-12 flex flex-col gap-4 group-hover:border-cyzborg-blue/50 transition-colors duration-500">
                        <p>Music drives intensity.</p>
                        <p>Phones, watches, and bands track performance.</p>
                        <p>Headphones sharpen focus.</p>
                        <p>Cameras record form, progress, and discipline.</p>
                        <p>Training is measured, optimized, shared, and refined.</p>
                    </div>
                </div>
                  
                <div className="bg-neutral-950/80 border border-neutral-800 p-8 relative z-10 backdrop-blur-sm">
                    <p className="font-display text-2xl md:text-3xl text-white uppercase leading-none tracking-wide mb-2">
                      Technology enhances the process.
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-cyzborg-blue uppercase leading-none tracking-wide">
                      The athlete does the work.
                    </p>
                </div>
             </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            
            {/* Module 02: What CYZBORG Is Building */}
            <div className="border border-neutral-800 bg-neutral-900/30 p-8 relative group transition-colors hover:border-cyzborg-blue/50 hover:bg-neutral-900/50 flex-1 flex flex-col justify-center overflow-hidden">
               
               {/* Technical Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyzborg-blue/[0.03] pointer-events-none"></div>
               <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,174,239,0.08)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(to_top_left,black,transparent_70%)] pointer-events-none"></div>

               {/* Accent Line */}
               <div className="absolute top-0 right-0 w-8 h-[1px] bg-cyzborg-blue shadow-[0_0_8px_#00AEEF]"></div>
               
               <span className="font-mono text-xs md:text-sm text-cyzborg-blue mb-4 block tracking-[0.3em] uppercase relative z-10">
                 /// 02_BUILD_Protocol
               </span>
               
               <h3 className="font-display text-3xl md:text-4xl text-white uppercase mb-6 font-bold tracking-wide leading-none relative z-10">
                 What CYZBORG Is Building
               </h3>
               
               <div className="space-y-6 relative z-10">
                 <p className="font-sans text-neutral-400 text-xl md:text-2xl lg:text-[30px] leading-none tracking-wide uppercase">
                   CYZBORG is a premium fitness brand shaped by modern training culture, where discipline, data, and physical effort converge.
                 </p>
                 <p className="font-sans text-neutral-500 text-xl md:text-2xl lg:text-[30px] leading-none tracking-wide uppercase">
                   Our apparel and gear are designed for athletes who train with intent, track their work, and continuously improve their physical system.
                 </p>
               </div>
            </div>

            {/* Module 03: The Origin */}
            <div className="border border-neutral-800 bg-neutral-950 p-8 relative group transition-colors hover:border-cyzborg-orange/50 overflow-hidden">
               
               {/* Technical Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-cyzborg-orange/[0.05] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(196,90,26,0.15)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>

               {/* Status Light */}
               <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-cyzborg-orange rounded-full animate-pulse shadow-[0_0_8px_rgba(196,90,26,0.8)]"></div>

               <span className="font-mono text-xs md:text-sm text-cyzborg-orange mb-6 block tracking-[0.3em] uppercase relative z-10">
                 /// 03_ORIGIN_DATA
               </span>

               <div className="font-display text-2xl md:text-3xl text-neutral-400 uppercase leading-none space-y-2 mb-8 tracking-wider relative z-10">
                 <p>People exercise.</p>
                 <p>People train with technology.</p>
               </div>
               
               <div className="pt-6 border-t border-neutral-900 relative z-10 flex flex-col gap-1">
                 <p className="font-display text-xl md:text-2xl text-white uppercase font-bold tracking-widest leading-none">
                   That combination created
                 </p>
                 <img src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" alt="CYZBORG" className="h-12 md:h-[60px] object-contain object-left mt-0.5" style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(87%) saturate(1476%) hue-rotate(349deg) brightness(88%) contrast(92%)' }} />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;