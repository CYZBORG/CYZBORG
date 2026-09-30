const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

content = content.replace(/className="py-6 md:py-8 bg-neutral-100/g, 'className="pt-6 pb-2 md:pt-8 md:pb-4 bg-neutral-100');

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
console.log("Patched bottom padding");
