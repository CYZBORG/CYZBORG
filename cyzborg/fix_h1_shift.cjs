const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

code = code.replace(
  '<div className="font-bebas text-white text-[clamp(32px,4.5vw,70px)] leading-[0.95] mb-0 md:mb-1 flex justify-end items-baseline">',
  '<div className="font-bebas text-white text-[clamp(38px,5.5vw,85px)] leading-[0.95] mb-0 md:mb-1 flex justify-end items-baseline mr-[0.25em]">'
);

code = code.replace(
  '<div className="font-bebas text-white text-[clamp(32px,4.5vw,70px)] leading-[0.95] mb-1 md:mb-2 flex justify-end items-baseline">',
  '<div className="font-bebas text-white text-[clamp(38px,5.5vw,85px)] leading-[0.95] mb-1 md:mb-2 flex justify-end items-baseline mr-[0.25em]">'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
