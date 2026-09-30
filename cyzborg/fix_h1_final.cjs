const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldH1 = `<h1 className="flex flex-col items-end w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.85] md:leading-[0.8]">
              <span className="font-display font-medium text-white block text-[clamp(20px,2.5vw,40px)] -mb-1 md:-mb-2" style={{ letterSpacing: '0.9em', marginRight: '-0.9em' }}>
                STRONGER.
              </span>
              <span className="font-display font-medium text-white block text-[clamp(20px,2.5vw,40px)] mb-0" style={{ letterSpacing: '0.9em', marginRight: '-0.9em' }}>
                SMARTER.
              </span>
              <span className="hero-headline font-bebas text-white block tracking-normal max-w-full">
                MORE CAPABLE.
              </span>
            </h1>`;

const newH1 = `<h1 className="flex flex-col items-end w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              <div className="font-bebas text-white text-[clamp(24px,3.5vw,55px)] leading-[0.9] -mb-1 md:-mb-2 mr-[0.1em]">
                <span style={{ letterSpacing: '0.6em', marginRight: '-0.6em' }}>STRONGER.</span>
              </div>
              <div className="font-bebas text-white text-[clamp(24px,3.5vw,55px)] leading-[0.9] -mb-1 md:-mb-2 mr-[0.1em]">
                <span style={{ letterSpacing: '0.6em', marginRight: '-0.6em' }}>SMARTER.</span>
              </div>
              <div className="hero-headline font-bebas text-white leading-[0.85] md:leading-[0.8] tracking-tight">
                MORE CAPABLE.
              </div>
            </h1>`;

code = code.replace(oldH1, newH1);
fs.writeFileSync('components/sections/Hero.tsx', code);
