const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldH1 = `<h1 className="flex flex-col items-end w-fit font-display font-bold uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.85] md:leading-[0.8]">
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

const newH1 = `<h1 className="flex flex-col items-end w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
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

code = code.replace(oldH1, newH1);

// Increase hero-headline font size slightly to match the 3:1 ratio
code = code.replace('font-size: clamp(42px, 14vw, 60px);', 'font-size: clamp(52px, 15vw, 76px);');
code = code.replace('font-size: clamp(32px, 6.5vw, 48px);', 'font-size: clamp(42px, 8vw, 60px);');
code = code.replace('font-size: clamp(52px, 7.5vw, 120px);', 'font-size: clamp(64px, 8vw, 130px);');
code = code.replace('font-size: 4.5rem;', 'font-size: 6rem;'); // x2


fs.writeFileSync('components/sections/Hero.tsx', code);
