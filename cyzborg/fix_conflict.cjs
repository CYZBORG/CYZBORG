const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

content = content.replace(
  /className=\{\`border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5 md:pl-6 relative flex flex-col items-center lg:items-start shrink-0 mt-auto mb-2 md:mb-4 lg:mb-20 xl:mb-28 2xl:mb-36 \$\{activeTrack.id === 'rtg' \? 'lg:mb-\[110px\] xl:mb-28' : ''\}\`\}/g,
  'className={`border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5 md:pl-6 relative flex flex-col items-center lg:items-start shrink-0 mt-auto mb-2 md:mb-4 ${activeTrack.id === \'rtg\' ? \'lg:mb-[110px]\' : \'lg:mb-20\'} xl:mb-28 2xl:mb-36`}'
);

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
