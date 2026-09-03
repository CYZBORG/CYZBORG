const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldH1 = `<h1 className="flex flex-col items-end w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              <div className="font-bebas text-white text-[clamp(24px,3.5vw,55px)] leading-[0.9] -mb-1 md:-mb-2 mr-[0.1em]">
                <span style={{ letterSpacing: '0.5em', marginRight: '-0.5em' }}>STRONGER.</span>
              </div>
              <div className="font-bebas text-white text-[clamp(24px,3.5vw,55px)] leading-[0.9] -mb-1 md:-mb-2 mr-[0.1em]">
                <span style={{ letterSpacing: '0.5em', marginRight: '-0.5em' }}>SMARTER.</span>
              </div>
              <div className="hero-headline font-bebas text-white leading-[0.85] md:leading-[0.8] tracking-tighter">
                MORE CAPABLE.
              </div>
            </h1>`;

const newH1 = `<h1 className="flex flex-col items-end w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              <div className="font-bebas text-white text-[clamp(32px,4.5vw,70px)] leading-[1] mb-1 md:mb-2 flex justify-end items-baseline">
                <span style={{ letterSpacing: '0.6em' }}>STRONGER</span>
                <span style={{ letterSpacing: 'normal', marginLeft: '-0.55em' }}>.</span>
              </div>
              <div className="font-bebas text-white text-[clamp(32px,4.5vw,70px)] leading-[1] mb-2 md:mb-4 flex justify-end items-baseline">
                <span style={{ letterSpacing: '0.6em' }}>SMARTER</span>
                <span style={{ letterSpacing: 'normal', marginLeft: '-0.55em' }}>.</span>
              </div>
              <div className="hero-headline font-bebas text-white leading-[0.85] md:leading-[0.8] flex justify-end items-baseline">
                <span style={{ letterSpacing: '0.04em' }}>MORE CAPABLE</span>
                <span style={{ letterSpacing: 'normal', marginLeft: '-0.02em' }}>.</span>
              </div>
            </h1>`;

code = code.replace(oldH1, newH1);

// Increase hero-headline font sizes
code = code.replace('font-size: clamp(64px, 8vw, 130px);', 'font-size: clamp(80px, 10vw, 160px);');
code = code.replace('font-size: 6rem;', 'font-size: 7.5rem;'); 
code = code.replace('font-size: 6rem;', 'font-size: 7.5rem;'); 
code = code.replace('font-size: 4.5rem;', 'font-size: 5.5rem;');
code = code.replace('font-size: clamp(52px, 15vw, 76px);', 'font-size: clamp(64px, 18vw, 92px);');
code = code.replace('font-size: clamp(42px, 8vw, 60px);', 'font-size: clamp(52px, 12vw, 72px);');

fs.writeFileSync('components/sections/Hero.tsx', code);
