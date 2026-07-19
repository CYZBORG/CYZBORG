import React from 'react';
import { SectionIds } from '../../types';

const Philosophy: React.FC = () => {
  return (
    <section id={SectionIds.PHILOSOPHY} className="bg-white dark:bg-cyzborg-black py-8 md:py-12 relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden scroll-mt-24 md:scroll-mt-32">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

      {/* Scattered LED Logo */}
      <img loading="lazy" decoding="async" 
        src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" 
        alt="" 
        className="dark:invert-0 invert absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] md:w-[120%] opacity-10 dark:opacity-[0.02] pointer-events-none select-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4 md:pb-6 gap-4 md:gap-6">
           <div>
             <h2 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-800 tracking-tighter uppercase select-none leading-none mb-3 whitespace-nowrap">
               SYSTEM ARCHITECTURE
             </h2>
             <div className="font-display text-[14px] sm:text-lg md:text-3xl font-bold uppercase tracking-widest leading-tight whitespace-nowrap">
                <span className="text-black dark:text-cyzborg-blue font-bold mr-1.5 md:mr-3">CYZBORG:</span>
                <span className="text-cyzborg-orange font-bold mr-1.5 md:mr-3">[CYZ + BORG]</span>
                <span className="text-[#00D4FF] normal-case">&bull; "SIZE-borg"</span>
             </div>
           </div>
           

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Module 01: Context / How it came to be */}
          <div className="lg:col-span-7 flex flex-col">
             <div className="border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/30 shadow-sm dark:shadow-none p-8 md:p-12 h-full relative group transition-colors hover:border-cyzborg-blue/30 hover:bg-neutral-100 dark:bg-neutral-900/50 flex flex-col justify-between overflow-hidden">
                
                {/* Technical Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyzborg-blue/[0.03] to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(0,174,239,0.1)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)] pointer-events-none"></div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyzborg-blue shadow-[0_0_10px_rgba(0,174,239,0.5)]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neutral-300 dark:border-neutral-700 group-hover:border-cyzborg-blue transition-colors"></div>
                
                <div className="relative z-10">
                    <span className="font-mono text-xs md:text-sm text-black dark:text-cyzborg-blue font-bold mb-8 block tracking-[0.3em] uppercase">
                    01_GENESIS
                    </span>

                    <h3 className="font-display text-2xl md:text-4xl lg:text-5xl text-black dark:text-white uppercase mb-10 leading-[0.9] font-bold [text-wrap:balance]">
                    CYZBORG is a fitness lifestyle brand creating premium apparel, original music, and cinematic content inspired by modern training culture.
                    </h3>

                    <div className="font-sans text-neutral-600 dark:text-neutral-400 text-xl md:text-2xl lg:text-3xl leading-tight tracking-wide uppercase border-l-2 border-neutral-200 dark:border-neutral-800 pl-6 mb-12 flex flex-col gap-4 group-hover:border-cyzborg-blue/50 transition-colors duration-500">
                        <p className="text-black dark:text-white font-bold mb-2">We're already becoming cyborgs.</p>
                        <p>The phone in your pocket.</p>
                        <p>The music in your ears.</p>
                        <p>The watch on your wrist.</p>
                        <p>The AI in your hand.</p>
                    </div>
                </div>
                  
                <div className="bg-neutral-50 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 p-8 relative z-10 backdrop-blur-sm">
                    <p className="font-display text-xl md:text-2xl lg:text-3xl text-black dark:text-cyzborg-blue font-bold uppercase leading-tight tracking-wide">
                      Technology has become part of how we train, work, learn, recover, and compete.
                    </p>
                </div>
             </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            
            {/* Module 02: What CYZBORG Is Building */}
            <div className="border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/30 shadow-sm dark:shadow-none p-8 relative group transition-colors hover:border-cyzborg-blue/50 hover:bg-neutral-100 dark:bg-neutral-900/50 flex-1 flex flex-col justify-center overflow-hidden">
               
               {/* Technical Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyzborg-blue/[0.03] pointer-events-none"></div>
               <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,174,239,0.08)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(to_top_left,black,transparent_70%)] pointer-events-none"></div>

               {/* Accent Line */}
               <div className="absolute top-0 right-0 w-8 h-[1px] bg-cyzborg-blue shadow-[0_0_8px_#00AEEF]"></div>
               
               <span className="font-mono text-xs md:text-sm text-black dark:text-cyzborg-blue font-bold mb-4 block tracking-[0.3em] uppercase relative z-10">
                 02_THE_AUGMENTED_ATHLETE
               </span>
                              <div className="flex flex-col relative z-10 pt-2 h-full justify-start gap-5">
                 <p className="font-display text-neutral-700 dark:text-neutral-300 text-xl md:text-2xl lg:text-[28px] leading-[1.15] tracking-wide uppercase">
                   To us, an <span className="text-black dark:text-white font-bold">AUGMENTED ATHLETE</span> isn't someone with robotic implants <span className="text-neutral-500">(at least not yet 😉).</span> It's someone who embraces technology as a tool for self-improvement.
                 </p>
                 
                 <div className="relative pt-6 border-t border-neutral-200 dark:border-neutral-800 mt-2">
                   <div className="absolute left-0 top-0 w-12 h-[2px] bg-cyzborg-blue -translate-y-[1px]"></div>
                   
                   <p className="font-sans text-neutral-600 dark:text-neutral-400 text-xl md:text-2xl lg:text-[22px] leading-relaxed uppercase tracking-[0.15em]">
                     <span className="text-black dark:text-white font-bold tracking-widest">CYZBORG</span> is a brand built for people obsessed with becoming
                   </p>
                   
                   <div className="my-5">
                     <div className="inline-block bg-white text-neutral-950 font-display font-black text-lg sm:text-xl md:text-2xl lg:text-[26px] px-5 py-2.5 -skew-x-12 uppercase tracking-widest border-b-4 border-r-4 border-cyzborg-blue">
                       <span className="block skew-x-12">STRONGER. SMARTER. MORE CAPABLE.</span>
                     </div>
                   </div>
                   
                   <p className="font-sans text-neutral-600 dark:text-neutral-400 text-xl md:text-2xl lg:text-[22px] leading-relaxed uppercase tracking-[0.15em]">
                     than they were yesterday.
                   </p>
                 </div>
               </div>
            </div>

            {/* Module 03: The Origin */}
            <div className="border border-neutral-300 dark:border-neutral-800 bg-neutral-50 shadow-sm dark:shadow-none dark:bg-neutral-950 p-8 relative group transition-colors hover:border-cyzborg-orange/50 overflow-hidden">
               
               {/* Technical Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-cyzborg-orange/[0.05] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(196,90,26,0.15)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>

               <span className="font-mono text-xs md:text-sm text-cyzborg-orange font-bold mb-6 block tracking-[0.3em] uppercase relative z-10">
                 03_SYSTEM_OUTPUT
               </span>

               <div className="font-display text-2xl md:text-3xl lg:text-4xl text-neutral-700 dark:text-neutral-300 uppercase leading-none space-y-4 mb-4 tracking-wider relative z-10">
                 <p>The apparel is the uniform.</p>
                 <p>The music is the soundtrack.</p>
                 <p>The videos tell the story.</p>
               </div>
            </div>

          </div>

          {/* Module 04: The Origin */}
          <div className="lg:col-span-12 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 shadow-sm dark:shadow-none dark:bg-neutral-950 p-8 md:p-12 relative group transition-colors hover:border-cyzborg-orange/50 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
             
             {/* Technical Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-cyzborg-orange/[0.05] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(196,90,26,0.15)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>

             <div className="relative z-10 flex-grow">
               <span className="font-mono text-xs md:text-sm text-cyzborg-orange font-bold mb-6 block tracking-[0.3em] uppercase">
                 04_ORIGIN_DATA
               </span>

               <div className="font-display text-2xl md:text-3xl lg:text-4xl text-neutral-600 dark:text-neutral-400 uppercase leading-none space-y-3 mb-6 md:mb-0 tracking-wider">
                 <p>People exercise.</p>
                 <p>People train with technology.</p>
               </div>
             </div>
             
             <div className="relative z-10 flex flex-col items-center gap-5 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-900 pt-6 md:pt-0 md:pl-12">
               <p className="font-display text-xl md:text-2xl text-black dark:text-white uppercase font-bold tracking-widest leading-none text-center">
                 That combination created
               </p>
               <img loading="lazy" decoding="async" src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" alt="CYZBORG" className="h-16 md:h-[90px] object-contain mt-1" style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(87%) saturate(1476%) hue-rotate(349deg) brightness(88%) contrast(92%)' }} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;