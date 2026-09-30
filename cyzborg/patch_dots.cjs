const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

content = content.replace(/className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs lg:text-\[10px\] xl:text-\[11px\] shrink-0"/g, 
  'className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs lg:text-[10px] xl:text-[11px] shrink-0 -translate-y-[2px]"');

content = content.replace(/className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0"/g, 
  'className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0 -translate-y-[2px]"');

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
console.log("Patched dots");
