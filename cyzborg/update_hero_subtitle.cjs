const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// Replace subtitle group text
const oldSubtitleGroup = `<div className="hero-subtitle-group flex flex-col">
              <p className="hero-subtitle-1 text-neutral-300 uppercase tracking-widest md:tracking-[0.2em] font-medium">
                MORE THAN HUMAN,<br className="block md:hidden" /><span className="hidden md:inline"> </span>BETTER THAN MACHINE.
              </p>
              <p className="hero-subtitle-2 text-neutral-400 uppercase tracking-wider md:tracking-[0.2em] font-medium">
                GRAPHIC T-SHIRTS <span className="text-neutral-500 mx-1">&</span> PREMIUM FITNESS APPAREL
              </p>
              <p className="hero-coming-date font-bold text-[#00F0FF] uppercase tracking-[0.2em] md:tracking-[0.25em]">
                COMING IN 2027
              </p>
            </div>`;

const newSubtitleGroup = `<div className="hero-subtitle-group flex flex-col">
              <p className="hero-subtitle-1 text-neutral-300 uppercase tracking-widest md:tracking-[0.2em] font-medium">
                GRAPHIC T-SHIRTS <span className="text-neutral-500 mx-1">&</span> PREMIUM FITNESS APPAREL
              </p>
              <p className="hero-coming-date font-bold text-[#00F0FF] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[1.5em] md:text-[2em] mt-4 md:mt-6">
                COMING IN 2027
              </p>
            </div>`;

code = code.replace(oldSubtitleGroup, newSubtitleGroup);

// Move all text down some by increasing padding-top on .hero-content-container
code = code.replace(/padding-top: 14rem;/g, 'padding-top: 18rem;');
code = code.replace(/padding-top: 17rem;/g, 'padding-top: 20rem;');
code = code.replace(/padding-top: 38rem;/g, 'padding-top: 42rem;');
code = code.replace(/padding-top: 400px;/g, 'padding-top: 480px;');
code = code.replace(/padding-top: 10rem;/g, 'padding-top: 14rem;');

fs.writeFileSync('components/sections/Hero.tsx', code);
