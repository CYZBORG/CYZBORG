const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldSmarter = `              {/* SMARTER. */}
              <div className="flex justify-between w-full text-[clamp(42px,6vw,95px)] leading-[0.95] mb-1 md:mb-2 items-baseline" style={{ paddingLeft: '32.5%' }}>
                <span>S</span><span>M</span><span>A</span><span>R</span><span>T</span><span>E</span><span>R</span>
              </div>`;

const newSmarter = `              {/* SMARTER. */}
              <div className="flex justify-between w-full text-[clamp(42px,6vw,95px)] leading-[0.95] mb-1 md:mb-2 items-baseline" style={{ paddingLeft: '21.5%' }}>
                <span className="invisible pointer-events-none select-none">S</span>
                <span className="relative"><span className="invisible pointer-events-none select-none">T</span><span className="absolute left-1/2 -translate-x-1/2 top-0">S</span></span>
                <span className="relative"><span className="invisible pointer-events-none select-none">R</span><span className="absolute left-0 top-0">M</span></span>
                <span className="relative"><span className="invisible pointer-events-none select-none">O</span><span className="absolute left-1/2 -translate-x-1/2 top-0">A</span></span>
                <span className="relative"><span className="invisible pointer-events-none select-none">N</span><span className="absolute left-0 top-0">R</span></span>
                <span className="relative"><span className="invisible pointer-events-none select-none">G</span><span className="absolute left-1/2 -translate-x-1/2 top-0">T</span></span>
                <span className="relative"><span className="invisible pointer-events-none select-none">E</span><span className="absolute left-0 top-0">E</span></span>
                <span className="relative"><span className="invisible pointer-events-none select-none">R</span><span className="absolute left-0 top-0">R</span></span>
              </div>`;

code = code.replace(oldSmarter, newSmarter);
fs.writeFileSync('components/sections/Hero.tsx', code);
