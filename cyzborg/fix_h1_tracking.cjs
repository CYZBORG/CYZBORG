const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

code = code.replace(
  '<div className="hero-headline font-bebas text-white leading-[0.85] md:leading-[0.8] tracking-tight">',
  '<div className="hero-headline font-bebas text-white leading-[0.85] md:leading-[0.8] tracking-tighter">'
);

// Tweak the letter spacing slightly to match the image better (maybe 0.5em is enough for Bebas Neue)
code = code.replace(/letterSpacing: '0.6em'/g, "letterSpacing: '0.5em'");
code = code.replace(/marginRight: '-0.6em'/g, "marginRight: '-0.5em'");

fs.writeFileSync('components/sections/Hero.tsx', code);
