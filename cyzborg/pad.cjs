const fs = require('fs');
let content = fs.readFileSync('components/sections/WhatsComing.tsx', 'utf8');

content = content.replace(
  '<div className="absolute top-[50%] left-[50%] w-[600px] md:w-[1000px] opacity-[0.03] pointer-events-none -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] select-none z-0">',
  '<div className="absolute top-[50%] left-[50%] w-[600px] md:w-[1000px] opacity-[0.04] dark:opacity-[0.03] pointer-events-none -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] select-none z-0">'
);

content = content.replace(
  '<img loading="lazy" decoding="async" src="https://helmet-with-logo.netlify.app/cyzborg-z.svg" alt="" className="w-full" />',
  '<img loading="lazy" decoding="async" src="https://helmet-with-logo.netlify.app/cyzborg-z.svg" alt="" className="w-full dark:invert-0 invert" />'
);

fs.writeFileSync('components/sections/WhatsComing.tsx', content);
console.log("Patched WhatsComing.tsx");
