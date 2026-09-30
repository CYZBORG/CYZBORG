const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldClasses = 'className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] max-w-[850px] h-auto object-contain mb-2 md:mb-4"';
const newClasses = 'className="w-full sm:w-[95%] md:w-[90%] lg:w-[75%] max-w-[1020px] h-auto object-contain mb-2 md:mb-4"';

code = code.replace(oldClasses, newClasses);
fs.writeFileSync('components/sections/Hero.tsx', code);
