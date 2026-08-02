const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<section className="pt-16 pb-16 lg:pt-20 lg:pb-20 bg-neutral-100 dark:bg-\[#0a0a0a\] relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">/;
const newSection = '<section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-neutral-100 dark:bg-[#0a0a0a] relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">';

content = content.replace(regex, newSection);
fs.writeFileSync('components/sections/Soundtrack.tsx', content);
