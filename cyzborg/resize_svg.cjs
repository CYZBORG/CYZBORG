const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const oldImg = '<img src="https://helmet-with-logo.netlify.app/stronger%20smarter%20more%20capable.svg" alt="STRONGER. SMARTER. MORE CAPABLE." className="w-full max-w-[1100px] h-auto object-contain" style={{ width: \'100%\', maxWidth: \'100%\' }} />';
const newImg = '<img src="https://helmet-with-logo.netlify.app/stronger%20smarter%20more%20capable.svg" alt="STRONGER. SMARTER. MORE CAPABLE." className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] max-w-[850px] h-auto object-contain mb-2 md:mb-4" />';

code = code.replace(oldImg, newImg);
fs.writeFileSync('components/sections/Hero.tsx', code);
