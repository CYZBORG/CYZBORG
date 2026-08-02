const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

content = content.replace(/<div className="flex flex-col flex-grow">\s*<div className="text-neutral-700 dark:text-neutral-300 font-medium space-y-2 md:space-y-3 lg:space-y-5 text-xs sm:text-\[13px\] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl lg:leading-relaxed">\s*(<p>.*?<\/p>)\s*<\/div>\s*<\/div>/g, '<>\n        $1\n      </>');

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
