const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldH1 = `<h1 className="flex flex-col font-display font-bold uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.95] md:leading-[0.85]">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(28px,3.5vw,55px)] ml-[2%] -mb-2 md:-mb-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                STRONGER.
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(28px,3.5vw,55px)] ml-[12%] sm:ml-[16%] md:ml-[18%] lg:ml-[20%] -mb-2 md:-mb-3" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                SMARTER.
              </span>
              <span className="hero-headline text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal md:tracking-tighter max-w-full" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                MORE CAPABLE.
              </span>
            </h1>`;

const newH1 = `<h1 className="flex flex-col font-display font-bold uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.85] md:leading-[0.8]">
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

code = code.replace(oldH1, newH1);

// Adjust sizes
code = code.replace('font-size: clamp(60px, 8.5vw, 150px);', 'font-size: clamp(52px, 7.5vw, 120px);');
code = code.replace('font-size: 5rem;', 'font-size: 4.5rem;'); // replace all 5rem with 4.5rem (tablet portrait/landscape)
code = code.replace('font-size: 5rem;', 'font-size: 4.5rem;');
code = code.replace('font-size: clamp(52px, 16.5vw, 70px);', 'font-size: clamp(42px, 14vw, 60px);');
code = code.replace('font-size: clamp(38px, 7vw, 54px);', 'font-size: clamp(32px, 6.5vw, 48px);');


fs.writeFileSync('components/sections/Hero.tsx', code);
