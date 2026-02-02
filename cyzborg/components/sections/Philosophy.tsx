import React from 'react';
import { SectionIds, PhilosophyItem } from '../../types';

const mantras: PhilosophyItem[] = [
  { id: 1, text: "Built, Not Born." },
  { id: 2, text: "EXERCYZ The System." },
  { id: 3, text: "No Excuses. Only Data." },
  { id: 4, text: "Systems Don't Quit." },
];

const Philosophy: React.FC = () => {
  return (
    <section id={SectionIds.PHILOSOPHY} className="py-8 bg-cyzborg-dark border-y border-neutral-900 relative overflow-hidden">
      
      {/* Decorative Background Helmet - Left */}
      <img 
        src="https://helmet-with-logo.netlify.app/cyzborg-logo-flat-outline.svg" 
        className="absolute top-10 left-[-100px] w-96 h-96 opacity-[0.02] pointer-events-none -rotate-12 select-none"
        alt=""
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Manifesto Section - Tightened Layout */}
        <div className="flex flex-col items-center space-y-4 max-w-4xl mx-auto text-center mb-6">
          
          {/* Block 1: The Context */}
          <div className="space-y-1">
            <p className="font-sans text-neutral-400 text-sm md:text-lg uppercase tracking-[0.25em] leading-relaxed">
              We already train augmented.
            </p>
            <p className="font-sans text-neutral-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
              Watches track. Phones log. Music drives intensity.
            </p>
          </div>

          {/* Block 2: The Insight */}
          <p className="font-sans text-white text-lg md:text-2xl uppercase tracking-widest font-semibold leading-relaxed py-1 text-center">
            Technology isn’t the future of training.<br />
            <span className="text-cyzborg-blue drop-shadow-[0_0_10px_rgba(0,174,239,0.4)]">It’s already embedded in it.</span>
          </p>

          {/* Block 3: The Identity */}
          <div className="flex flex-col items-center pt-2">
             <div className="w-16 h-[2px] bg-cyzborg-orange mb-3"></div>
             <p className="font-display text-xl md:text-3xl uppercase tracking-widest text-neutral-300">
               Human drive. Machine precision.
             </p>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
          {mantras.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-cyzborg-black p-8 md:p-14 flex items-center justify-center text-center overflow-hidden hover:bg-neutral-950 transition-colors duration-500"
            >
              {/* Helmet Stamp - Updated to SVG */}
              <img 
                src="https://helmet-with-logo.netlify.app/cyzborg-logo-flat-outline.svg" 
                alt="" 
                className="absolute top-4 right-4 w-8 md:w-10 h-auto opacity-20 group-hover:opacity-40 transition-all duration-500 grayscale pointer-events-none select-none"
              />

              {/* Corner Accents - Burnt Orange by default for premium look, Blue on hover */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyzborg-orange/50 transition-colors duration-300 group-hover:border-cyzborg-blue"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyzborg-orange/50 transition-colors duration-300 group-hover:border-cyzborg-blue"></div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wider text-neutral-300 group-hover:text-white transition-colors duration-300 z-10 leading-tight">
                {item.text}
              </h3>

              {/* Hover Background Number */}
              <span className="absolute right-4 bottom-0 text-[6rem] md:text-[8rem] font-display font-bold text-neutral-900 opacity-0 group-hover:opacity-20 transition-all duration-500 translate-y-10 group-hover:translate-y-4 pointer-events-none select-none">
                0{item.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;