const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

code = code.replace(
  '<span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(28px,3.5vw,55px)] ml-[2%] -mb-2 md:-mb-1">',
  '<span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(28px,3.5vw,55px)] ml-[2%] -mb-2 md:-mb-1" style={{ WebkitTextStroke: \'1px rgba(255,255,255,0.1)\' }}>'
);
code = code.replace(
  '<span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(28px,3.5vw,55px)] ml-[12%] sm:ml-[16%] md:ml-[18%] lg:ml-[20%] -mb-2 md:-mb-3">',
  '<span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-[0.5em] sm:tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[0.8em] text-[clamp(28px,3.5vw,55px)] ml-[12%] sm:ml-[16%] md:ml-[18%] lg:ml-[20%] -mb-2 md:-mb-3" style={{ WebkitTextStroke: \'1px rgba(255,255,255,0.1)\' }}>'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
