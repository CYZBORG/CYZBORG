const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const regex = /<h1 className="grid grid-cols-\[1fr_auto\][^>]*>([\s\S]*?)<\/h1>/;

const newH1 = `<h1 className="grid grid-cols-[1fr_auto] w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] text-white font-bebas">
              {/* STRONGER. */}
              <div className="flex justify-between w-full text-[clamp(42px,6vw,95px)] leading-[0.95] mb-0 md:mb-1 items-baseline" style={{ paddingLeft: '20.5%' }}>
                <span className="inline-flex justify-center">S</span>
                <span className="inline-flex justify-center">T</span>
                <span className="inline-flex justify-center">R</span>
                <span className="inline-flex justify-center">O</span>
                <span className="inline-flex justify-center">N</span>
                <span className="inline-flex justify-center">G</span>
                <span className="inline-flex justify-center">E</span>
                <span className="inline-flex justify-center">R</span>
              </div>
              <div className="text-[clamp(42px,6vw,95px)] leading-[0.95] mb-0 md:mb-1 flex items-baseline justify-start relative left-[0.08em]">.</div>

              {/* SMARTER. */}
              <div className="flex justify-between w-full text-[clamp(42px,6vw,95px)] leading-[0.95] mb-1 md:mb-2 items-baseline" style={{ paddingLeft: '20.5%' }}>
                <span className="inline-flex justify-center invisible pointer-events-none select-none">S</span>
                
                {/* S dead-center over T */}
                <span className="inline-flex justify-center relative">
                  <span className="invisible pointer-events-none select-none">T</span>
                  <span className="absolute left-1/2 -translate-x-1/2 top-0">S</span>
                </span>
                
                {/* M flush left with first R */}
                <span className="inline-flex justify-start relative">
                  <span className="invisible pointer-events-none select-none">R</span>
                  <span className="absolute left-0 top-0">M</span>
                </span>
                
                {/* A dead-center over O */}
                <span className="inline-flex justify-center relative">
                  <span className="invisible pointer-events-none select-none">O</span>
                  <span className="absolute left-1/2 -translate-x-1/2 top-0">A</span>
                </span>
                
                {/* R flush left with N */}
                <span className="inline-flex justify-start relative">
                  <span className="invisible pointer-events-none select-none">N</span>
                  <span className="absolute left-0 top-0">R</span>
                </span>
                
                {/* T dead-center over G */}
                <span className="inline-flex justify-center relative">
                  <span className="invisible pointer-events-none select-none">G</span>
                  <span className="absolute left-1/2 -translate-x-1/2 top-0">T</span>
                </span>
                
                {/* E and R just aligned normally for the rest */}
                <span className="inline-flex justify-start relative">
                  <span className="invisible pointer-events-none select-none">E</span>
                  <span className="absolute left-0 top-0">E</span>
                </span>
                <span className="inline-flex justify-start relative">
                  <span className="invisible pointer-events-none select-none">R</span>
                  <span className="absolute left-0 top-0">R</span>
                </span>
              </div>
              <div className="text-[clamp(42px,6vw,95px)] leading-[0.95] mb-1 md:mb-2 flex items-baseline justify-start relative left-[0.08em]">.</div>

              {/* MORE CAPABLE. */}
              <div className="hero-headline leading-[0.85] md:leading-[0.8] flex justify-end items-baseline">
                <span style={{ letterSpacing: '0.04em', marginRight: '-0.04em' }}>MORE CAPABLE</span>
              </div>
              <div className="hero-headline leading-[0.85] md:leading-[0.8] flex items-baseline justify-start relative left-[0]">.</div>
            </h1>`;

code = code.replace(regex, newH1);
fs.writeFileSync('components/sections/Hero.tsx', code);
