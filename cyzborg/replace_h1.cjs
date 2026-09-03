const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldH1 = `<h1 className="flex flex-col font-display font-bold uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              <span className="relative inline-block max-w-min">
                <span className="hero-the-label block text-white font-sans font-bold tracking-[0.2em] md:tracking-[0.3em] md:text-transparent md:bg-clip-text md:bg-gradient-to-tr md:from-[#999999] md:via-[#E8E8E8] md:to-[#555555] z-10">
                  THE
                </span>
                <span className="hero-headline text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal max-w-full md:max-w-min" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                  AUGMENTED
                </span>
              </span>
              <span className="hero-headline text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal max-w-full md:max-w-min" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                ATHLETE
              </span>
            </h1>`;

const newH1 = `<h1 className="flex flex-col font-display font-bold uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.95] md:leading-[0.85]">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(28px,3.5vw,55px)] ml-[2%] -mb-2 md:-mb-1">
                STRONGER.
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(28px,3.5vw,55px)] ml-[12%] sm:ml-[16%] md:ml-[18%] lg:ml-[20%] -mb-2 md:-mb-3">
                SMARTER.
              </span>
              <span className="hero-headline text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal md:tracking-tighter max-w-full" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                MORE CAPABLE.
              </span>
            </h1>`;

code = code.replace(oldH1, newH1);
fs.writeFileSync('components/sections/Hero.tsx', code);
