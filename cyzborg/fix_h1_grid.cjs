const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldH1 = `<h1 className="flex flex-col items-end w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              <div className="font-bebas text-white text-[clamp(38px,5.5vw,85px)] leading-[0.95] mb-0 md:mb-1 flex justify-end items-baseline mr-[0.25em]">
                <span style={{ letterSpacing: '0.6em' }}>STRONGER</span>
                <span style={{ letterSpacing: 'normal', marginLeft: '-0.55em' }}>.</span>
              </div>
              <div className="font-bebas text-white text-[clamp(38px,5.5vw,85px)] leading-[0.95] mb-1 md:mb-2 flex justify-end items-baseline mr-[0.25em]">
                <span style={{ letterSpacing: '0.6em' }}>SMARTER</span>
                <span style={{ letterSpacing: 'normal', marginLeft: '-0.55em' }}>.</span>
              </div>
              <div className="hero-headline font-bebas text-white leading-[0.85] md:leading-[0.8] flex justify-end items-baseline">
                <span style={{ letterSpacing: '0.04em' }}>MORE CAPABLE</span>
                <span style={{ letterSpacing: 'normal', marginLeft: '-0.02em' }}>.</span>
              </div>
            </h1>`;

const newH1 = `<h1 className="grid grid-cols-[1fr_auto] w-fit uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] text-white font-bebas">
              {/* STRONGER. */}
              <div className="flex justify-between w-full text-[clamp(42px,6vw,95px)] leading-[0.95] mb-0 md:mb-1 items-baseline" style={{ paddingLeft: '22%' }}>
                <span>S</span><span>T</span><span>R</span><span>O</span><span>N</span><span>G</span><span>E</span><span>R</span>
              </div>
              <div className="text-[clamp(42px,6vw,95px)] leading-[0.95] mb-0 md:mb-1 items-baseline">.</div>

              {/* SMARTER. */}
              <div className="flex justify-between w-full text-[clamp(42px,6vw,95px)] leading-[0.95] mb-1 md:mb-2 items-baseline" style={{ paddingLeft: '33.5%' }}>
                <span>S</span><span>M</span><span>A</span><span>R</span><span>T</span><span>E</span><span>R</span>
              </div>
              <div className="text-[clamp(42px,6vw,95px)] leading-[0.95] mb-1 md:mb-2 items-baseline">.</div>

              {/* MORE CAPABLE. */}
              <div className="hero-headline leading-[0.85] md:leading-[0.8] flex justify-end items-baseline">
                <span style={{ letterSpacing: '0.04em' }}>MORE CAPABLE</span>
              </div>
              <div className="hero-headline leading-[0.85] md:leading-[0.8] items-baseline">.</div>
            </h1>`;

code = code.replace(oldH1, newH1);
fs.writeFileSync('components/sections/Hero.tsx', code);
