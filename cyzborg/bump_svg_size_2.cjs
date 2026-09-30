const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldClasses = 'className="w-[85%] sm:w-[80%] md:w-[76%] lg:w-[64%] max-w-[867px] h-auto object-contain object-left"';
const newClasses = 'className="w-[87%] sm:w-[82%] md:w-[78%] lg:w-[65%] max-w-[884px] h-auto object-contain object-left"';

code = code.replace(oldClasses, newClasses);
fs.writeFileSync('components/sections/Hero.tsx', code);
