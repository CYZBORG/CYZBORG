const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldH1 = `<h1 className="flex flex-col font-display font-bold uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.85] md:leading-[0.8]">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(22px,3vw,48px)] ml-[2%] -mb-1 md:-mb-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                STRONGER.
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(22px,3vw,48px)] ml-[12%] sm:ml-[16%] md:ml-[18%] lg:ml-[20%] mb-0 md:-mb-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                SMARTER.
              </span>
              <span className="hero-headline text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal md:tracking-tighter max-w-full" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                MORE CAPABLE.
              </span>
            </h1>`;

const newH1 = `<h1 className="flex flex-col items-end w-fit font-display font-bold uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.85] md:leading-[0.8]">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block text-[clamp(22px,3vw,48px)] -mb-1 md:-mb-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)', letterSpacing: '0.7em', marginRight: '-0.7em' }}>
                STRONGER.
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block text-[clamp(22px,3vw,48px)] mb-0 md:-mb-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)', letterSpacing: '0.7em', marginRight: '-0.7em' }}>
                SMARTER.
              </span>
              <span className="hero-headline text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal md:tracking-tighter max-w-full" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                MORE CAPABLE.
              </span>
            </h1>`;

code = code.replace(oldH1, newH1);
fs.writeFileSync('components/sections/Hero.tsx', code);
