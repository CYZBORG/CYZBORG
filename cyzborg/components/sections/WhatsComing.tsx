import React from 'react';
import { SectionIds } from '../../types';
import { Shirt, Zap, Dumbbell, ScanLine } from 'lucide-react';

const WhatsComing: React.FC = () => {
  const items = [
    {
      title: "Graphic Tees",
      subtitle: "Visual Warfare",
      icon: <Shirt className="w-7 h-7 text-cyzborg-orange" />
    },
    {
      title: "Performance Apparel",
      subtitle: "Thermoregulation",
      icon: <Dumbbell className="w-7 h-7 text-cyzborg-orange" />
    },
    {
      title: "Standard Issue",
      subtitle: "Daily Operations",
      icon: <ScanLine className="w-7 h-7 text-cyzborg-orange" />
    },
    {
      title: "Limited Drops",
      subtitle: "No Restocks",
      icon: <Zap className="w-7 h-7 text-cyzborg-orange" />
    }
  ];

  return (
    <section id={SectionIds.WHATS_COMING} className="py-8 bg-cyzborg-black relative overflow-hidden">
       {/* Background Watermark - Helmet SVG */}
       <div className="absolute top-10 right-0 w-[500px] md:w-[700px] opacity-[0.03] pointer-events-none rotate-12 translate-x-1/4 select-none z-0">
          <img src="https://helmet-with-logo.netlify.app/cyzborg-logo-flat-outline.svg" alt="" className="w-full grayscale" />
       </div>

       {/* Section Header */}
       <div className="relative z-10 text-center mb-12">
          <span className="text-cyzborg-orange font-mono text-xs tracking-[0.3em] uppercase block mb-4 animate-pulse">
            System Loading...
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
            Hardware <span className="text-neutral-600">&</span> Software
          </h2>
       </div>

       <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         {items.map((item, idx) => (
           <div 
            key={idx} 
            className="group border border-neutral-900 bg-neutral-950/80 backdrop-blur-sm p-5 flex flex-col items-center text-center hover:border-cyzborg-orange/50 transition-all duration-300 relative"
           >
             <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyzborg-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             {/* Icon Container - Explicitly Centered and Slightly Smaller */}
             <div className="bg-neutral-900 w-14 h-14 rounded-full mb-4 flex items-center justify-center group-hover:bg-neutral-800 transition-colors border border-neutral-800 group-hover:border-neutral-700">
               {item.icon}
             </div>
             
             <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
               {item.title}
             </h3>
             <p className="font-sans text-gray-500 uppercase text-xs tracking-widest group-hover:text-cyzborg-white transition-colors">
               {item.subtitle}
             </p>
           </div>
         ))}
       </div>

       {/* Bottom Link */}
       <div className="relative z-10 text-center">
          <p className="font-mono text-cyzborg-blue text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] uppercase animate-pulse whitespace-nowrap">
            /// More engineered gear coming soon ///
          </p>
       </div>
    </section>
  );
};

export default WhatsComing;