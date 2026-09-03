const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldH1 = `<h1 className="flex flex-col items-end w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.85] md:leading-[0.8]">
              <span className="font-display font-medium text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block text-[clamp(20px,2.5vw,40px)] -mb-1 md:-mb-2" style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.1)', letterSpacing: '0.9em', marginRight: '-0.9em' }}>
                STRONGER.
              </span>
              <span className="font-display font-medium text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block text-[clamp(20px,2.5vw,40px)] mb-0" style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.1)', letterSpacing: '0.9em', marginRight: '-0.9em' }}>
                SMARTER.
              </span>
              <span className="hero-headline font-bebas text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal max-w-full" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                MORE CAPABLE.
              </span>
            </h1>`;

const newH1 = `<h1 className="flex flex-col items-end w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.85] md:leading-[0.8]">
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

code = code.replace(oldH1, newH1);
fs.writeFileSync('components/sections/Hero.tsx', code);
