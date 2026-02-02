import React from 'react';
import { SectionIds } from '../../types';
import { Shirt, Dumbbell, Backpack } from 'lucide-react';

const WhatsComing: React.FC = () => {
  const items = [
    {
      title: "Graphic Tees",
      subtitle: "Visual Warfare",
      color: "orange",
      icon: <Shirt className="w-7 h-7" />
    },
    {
      title: "Performance Apparel",
      subtitle: "Thermoregulation",
      color: "blue",
      icon: <Dumbbell className="w-7 h-7" />
    },
    {
      title: "Hats & Headwear",
      subtitle: "Cranial Shielding",
      color: "orange",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-7 h-7"
        >
          <path d="M3 14h14c0-3.87-3.13-7-7-7S3 10.13 3 14z" />
          <path d="M17 14h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4" />
          <path d="M10 7v-1" />
        </svg>
      )
    },
    {
      title: "Accessories",
      subtitle: "Tactical Loadout",
      color: "blue",
      icon: <Backpack className="w-7 h-7" />
    }
  ];

  return (
    <section id={SectionIds.WHATS_COMING} className="pt-8 pb-8 bg-cyzborg-black relative overflow-hidden border-t border-neutral-800">
       
       {/* Background Watermark - Helmet SVG */}
       <div className="absolute top-10 right-0 w-[500px] md:w-[700px] opacity-[0.03] pointer-events-none rotate-12 translate-x-1/4 select-none z-0">
          <img src="https://helmet-with-logo.netlify.app/cyzborg-logo-flat-outline.svg" alt="" className="w-full grayscale" />
       </div>

       {/* Section Header */}
       <div className="relative z-10 text-center mb-16 px-4">
          <span className="text-cyzborg-orange font-mono text-xs tracking-[0.3em] uppercase block mb-4 animate-pulse">
            System Loading...
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase drop-shadow-md">
            <span className="text-cyzborg-orange drop-shadow-[0_0_10px_rgba(196,90,26,0.3)]">Hardware</span> 
            <span className="text-neutral-600 mx-3">&</span> 
            <span className="text-cyzborg-blue drop-shadow-[0_0_10px_rgba(0,174,239,0.3)]">Software</span>
          </h2>
       </div>

       <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {items.map((item, idx) => {
           const isBlue = item.color === 'blue';
           const accentColorClass = isBlue ? 'text-cyzborg-blue' : 'text-cyzborg-orange';
           const groupHoverBorderClass = isBlue ? 'hover:border-cyzborg-blue/50' : 'hover:border-cyzborg-orange/50';
           const gradientClass = isBlue ? 'via-cyzborg-blue' : 'via-cyzborg-orange';
           const iconBgHoverClass = isBlue ? 'group-hover:border-cyzborg-blue group-hover:shadow-[0_0_15px_rgba(0,174,239,0.2)]' : 'group-hover:border-cyzborg-orange group-hover:shadow-[0_0_15px_rgba(196,90,26,0.2)]';

           return (
            <div 
              key={idx} 
              className={`group border border-neutral-900 bg-neutral-950/80 backdrop-blur-sm p-8 flex flex-col items-center text-center ${groupHoverBorderClass} transition-all duration-300 relative overflow-hidden`}
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent ${gradientClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`bg-neutral-900 w-16 h-16 rounded-full mb-6 flex items-center justify-center group-hover:bg-neutral-900 transition-all duration-300 border border-neutral-800 ${iconBgHoverClass} ${accentColorClass}`}>
                {item.icon}
              </div>
              
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                {item.title}
              </h3>
              <p className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${isBlue ? 'text-neutral-500 group-hover:text-cyzborg-blue' : 'text-neutral-500 group-hover:text-cyzborg-orange'}`}>
                {item.subtitle}
              </p>
            </div>
           );
         })}
       </div>

       {/* Bottom Link */}
       <div className="relative z-10 text-center mt-16">
          <p className="font-mono text-cyzborg-blue text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] uppercase animate-pulse whitespace-nowrap">
            /// More engineered gear coming soon ///
          </p>
       </div>
    </section>
  );
};

export default WhatsComing;