const fs = require('fs');
let code = fs.readFileSync('components/sections/Philosophy.tsx', 'utf-8');

const oldClasses = 'className="absolute lg:relative w-[130%] lg:w-[150%] max-w-none h-auto object-contain transform translate-x-0 lg:-translate-x-12 xl:translate-x-8 -translate-y-8 md:translate-y-2 lg:translate-y-16 xl:translate-y-0 scale-110 lg:scale-125"';
const newClasses = 'className="absolute lg:relative w-[130%] lg:w-[150%] max-w-none h-auto object-contain transform -translate-x-6 md:-translate-x-12 lg:-translate-x-36 xl:-translate-x-16 -translate-y-8 md:translate-y-2 lg:translate-y-16 xl:translate-y-0 scale-110 lg:scale-125"';

code = code.replace(oldClasses, newClasses);
fs.writeFileSync('components/sections/Philosophy.tsx', code);
