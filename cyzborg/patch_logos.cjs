const fs = require('fs');

let newsletter = fs.readFileSync('components/sections/Newsletter.tsx', 'utf8');
newsletter = newsletter.replace(
  'className="dark:invert-0 invert absolute -bottom-[10%] -left-[20%] md:-left-[10%] w-[1000px] md:w-[1400px] opacity-10 dark:opacity-[0.02] pointer-events-none -rotate-6 select-none z-0"',
  'className="dark:invert-0 invert absolute -bottom-[10%] -left-[20%] md:-left-[10%] w-[1000px] md:w-[1400px] opacity-10 dark:opacity-[0.02] pointer-events-none -rotate-6 select-none z-0 md:hidden xl:block"'
);
fs.writeFileSync('components/sections/Newsletter.tsx', newsletter);

let footer = fs.readFileSync('components/layout/Footer.tsx', 'utf8');
footer = footer.replace(
  'className="dark:invert-0 invert absolute bottom-[-40%] right-[-20%] md:right-[-5%] w-[600px] md:w-[800px] opacity-10 dark:opacity-[0.02] pointer-events-none -rotate-6 select-none"',
  'className="dark:invert-0 invert absolute bottom-[-40%] right-[-20%] md:right-[-5%] w-[600px] md:w-[800px] opacity-10 dark:opacity-[0.02] pointer-events-none -rotate-6 select-none md:hidden xl:block"'
);
fs.writeFileSync('components/layout/Footer.tsx', footer);

console.log("Patched logos");
