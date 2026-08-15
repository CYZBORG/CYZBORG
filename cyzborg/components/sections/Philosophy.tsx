import React from 'react';
import { SectionIds } from '../../types';
import { Headphones, Smartphone, Watch } from 'lucide-react';
import { FaTiktok, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { SiOpenai, SiGooglegemini } from 'react-icons/si';
import { TbDeviceAirpods } from 'react-icons/tb';

const Philosophy: React.FC = () => {
  return (
    <section 
      id={SectionIds.PHILOSOPHY} 
      className="bg-[#0a0a0a] bg-cover bg-center text-white pt-8 md:pt-12 pb-2 md:pb-6 lg:pb-6 relative border-t border-neutral-900 overflow-hidden scroll-mt-[61px] md:scroll-mt-[83px] lg:scroll-mt-[103px]"
      style={{ backgroundImage: 'url("https://helmet-with-logo.netlify.app/system%20architecture%20background.png")' }}
    >
      {/* Background Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-0 lg:gap-8 items-center mb-12 lg:mb-4">
          
          {/* Left Text */}
          <div className="flex flex-col z-10 relative">
            <div className="flex items-center gap-3 mb-2 md:mb-4 font-sans font-medium text-xs md:text-sm tracking-[0.2em] uppercase">
              <span className="text-neutral-500 tracking-[0.3em]">SYSTEM ARCHITECTURE</span>
            </div>
            
            <h2 className="font-bebas text-6xl sm:text-7xl md:text-[4.5rem] lg:text-[4.5rem] xl:text-[7.5rem] font-bold uppercase leading-[0.85] lg:leading-[0.9] xl:leading-[0.85] tracking-wider mb-4 text-white">
              <span className="whitespace-nowrap">HUMAN EFFORT,</span><br/>
              <span className="text-cyzborg-orange md:whitespace-nowrap xl:whitespace-normal">
                ENHANCED BY
                <br className="md:hidden xl:inline" />
                <span className="hidden md:inline xl:hidden"> </span>
                TECHNOLOGY.
              </span>
            </h2>
            
            <div className="max-w-xl mb-8 md:mb-0 lg:mb-12 border-l-[3px] border-white/80 pl-6 py-1 flex flex-col gap-4">
              <p className="font-sans font-medium text-neutral-400 text-base md:text-lg lg:text-xl uppercase tracking-[0.1em] leading-relaxed">
                <span className="text-white">CYZBORG</span> represents the people who use every available tool to train with greater knowledge, awareness, and purpose.
              </p>
              <p className="font-sans font-medium text-neutral-400 text-base md:text-lg lg:text-xl uppercase tracking-[0.1em] leading-relaxed">
                Music creates focus. Phones record form and progress. Watches provide feedback. Digital education teaches new skills. AI helps turn information into a plan.
              </p>
              <p className="font-sans font-medium text-neutral-400 text-base md:text-lg lg:text-xl uppercase tracking-[0.1em] leading-relaxed">
                None of it replaces the work. It helps us perform the work better. That fusion of human effort, technology, and exercise is how CYZBORG was born.
              </p>
            </div>
          </div>
          
          {/* Right Image Composition */}
          <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px] flex items-center justify-center pointer-events-none z-0 -mt-20 md:-mt-12 lg:mt-0">
            <img 
              src="https://helmet-with-logo.netlify.app/system%20architecture.png?v=5" 
              alt="System Architecture" 
              className="absolute lg:relative w-[130%] lg:w-[150%] max-w-none h-auto object-contain transform translate-x-0 lg:-translate-x-12 xl:translate-x-8 -translate-y-8 md:translate-y-2 lg:translate-y-16 xl:translate-y-0 scale-110 lg:scale-125"
            />
          </div>
        </div>

        {/* 4 Column Panel */}
        <div className="w-full bg-[rgba(5,5,5,0.88)] border border-[#282828] py-6 md:py-7 px-6 md:px-7 mb-2 md:mb-6 lg:mb-6 -mt-24 landscape:mt-8 md:mt-16 md:landscape:mt-24 lg:-mt-12 lg:landscape:-mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
            
            {/* FOCUS */}
            <div className="flex flex-col relative z-10 md:border-r border-[rgba(255,255,255,0.08)] md:pr-6 lg:pr-8">
              <div className="mb-4 flex items-center lg:justify-start">
                 <div className="bg-transparent pr-4 lg:pl-0 inline-flex items-center gap-2 relative h-8">
                   <Headphones className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
                   <TbDeviceAirpods className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
                 </div>
              </div>
              <h4 className="font-bebas text-3xl font-bold text-white uppercase tracking-wider mb-2 underline decoration-[#00F0FF] underline-offset-4 decoration-2">FOCUS</h4>
              <p className="font-sans font-medium text-[#A8A8A8] drop-shadow-md text-base md:text-lg leading-relaxed pr-4">Music drives energy, rhythm, and intensity.</p>
            </div>

            {/* TRACK */}
            <div className="flex flex-col relative z-10 md:pl-6 lg:pl-8 lg:px-8 lg:border-r border-[rgba(255,255,255,0.08)]">
              <div className="mb-4 flex items-center lg:justify-start">
                 <div className="bg-transparent pr-4 lg:pl-0 inline-flex items-center gap-2 relative h-8">
                   <Smartphone className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
                   <Watch className="w-8 h-8 text-neutral-400 stroke-[1.5]" />
                 </div>
              </div>
              <h4 className="font-bebas text-3xl font-bold text-white uppercase tracking-wider mb-2 underline decoration-[#00F0FF] underline-offset-4 decoration-2">TRACK</h4>
              <p className="font-sans font-medium text-[#A8A8A8] drop-shadow-md text-base md:text-lg leading-relaxed pr-4">Phones, apps, and watches measure workouts and progress.</p>
            </div>

            {/* LEARN */}
            <div className="flex flex-col relative z-10 md:border-r border-[rgba(255,255,255,0.08)] md:pr-6 lg:px-8">
              <div className="mb-4 flex items-center lg:justify-start">
                 <div className="bg-transparent pr-4 lg:pl-0 inline-flex items-center gap-3 relative text-neutral-400 h-8">
                   <FaTiktok className="w-7 h-7" />
                   <FaInstagram className="w-7 h-7" />
                   <FaYoutube className="w-7 h-7" />
                 </div>
              </div>
              <h4 className="font-bebas text-3xl font-bold text-white uppercase tracking-wider mb-2 underline decoration-[#00F0FF] underline-offset-4 decoration-2">LEARN</h4>
              <p className="font-sans font-medium text-[#A8A8A8] drop-shadow-md text-base md:text-lg leading-relaxed pr-4">Digital resources make training knowledge accessible.</p>
            </div>

            {/* ADAPT */}
            <div className="flex flex-col relative z-10 md:pl-6 lg:pl-8">
              <div className="mb-4 flex items-center lg:justify-start">
                 <div className="bg-transparent pr-4 lg:pl-0 inline-flex items-center gap-3 relative text-neutral-400 h-8">
                   <SiOpenai className="w-7 h-7" />
                   <SiGooglegemini className="w-7 h-7" />
                   <div className="flex items-center gap-1 font-display font-bold italic tracking-tighter text-xl">
                     <FaXTwitter className="w-6 h-6 mr-1" />
                   </div>
                 </div>
              </div>
              <h4 className="font-bebas text-3xl font-bold text-white uppercase tracking-wider mb-2 underline decoration-[#00F0FF] underline-offset-4 decoration-2">ADAPT</h4>
              <p className="font-sans font-medium text-[#A8A8A8] drop-shadow-md text-base md:text-lg leading-relaxed pr-4">AI helps build and refine training around the individual.</p>
            </div>

          </div>
        </div>

        {/* Bottom Definition Panel */}
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full border border-neutral-800 bg-[#050505]/60 backdrop-blur-md px-3 py-3 md:px-8 md:py-6 gap-1 md:gap-3 lg:gap-2 xl:gap-6 text-center">
            
            <div className="flex items-center justify-center gap-2 lg:gap-2 xl:gap-4 w-full lg:w-auto">
              <span className="text-cyzborg-orange font-black italic text-base min-[375px]:text-lg sm:text-2xl lg:text-xl xl:text-2xl leading-none -mt-1 shrink-0">////</span>
              <h3 className="font-bebas text-2xl min-[375px]:text-[28px] sm:text-4xl md:text-5xl lg:text-[28px] xl:text-5xl font-bold text-white uppercase tracking-wider leading-none shrink-0">
                THE AUGMENTED ATHLETE
              </h3>
            </div>
            
            <div className="font-sans font-bold text-xs min-[375px]:text-[13px] sm:text-sm md:text-base lg:text-xs xl:text-base text-cyzborg-orange uppercase tracking-[0.1em] md:tracking-[0.2em] text-center shrink-0 w-full lg:w-auto mt-1 lg:mt-0">
              DISCIPLINE + TECHNOLOGY
            </div>
            
            <div className="flex items-center justify-center gap-2 lg:gap-2 xl:gap-4 w-full lg:w-auto text-center">
              <p className="font-sans font-medium text-neutral-400 text-[10px] min-[375px]:text-xs sm:text-sm md:text-base lg:text-[11px] xl:text-base uppercase tracking-wider md:tracking-[0.15em] text-center lg:text-right shrink-0">
                STRONGER. SMARTER. MORE CAPABLE.
              </p>
              <span className="text-neutral-700 font-black italic text-base min-[375px]:text-lg sm:text-2xl lg:text-xl xl:text-2xl leading-none -mt-0.5 shrink-0">////</span>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Philosophy;
