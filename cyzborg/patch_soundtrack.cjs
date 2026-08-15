const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

// 1. Title container
content = content.replace(
  '<div className="mb-0 lg:mb-0 xl:mb-2 shrink-0">',
  '<div className="mb-0 lg:mb-0 xl:mb-2 shrink-0">'
);

// 2. Dynamic content container (remove flex-grow, maybe add negative margin top if needed)
content = content.replace(
  '<div className="flex flex-col justify-start mt-0 flex-grow lg:pb-4 relative z-10">',
  '<div className="flex flex-col justify-start mt-2 lg:mt-2 lg:pb-4 relative z-10">'
);

// 3. Description container (remove flex-grow)
content = content.replace(
  'flex flex-col w-full flex-grow mb-0 lg:mb-1',
  'flex flex-col w-full mb-0 lg:mb-2'
);

// 4. Streaming container 
content = content.replace(
  'shrink-0 mt-4 lg:mt-6 mb-2 md:mb-4 ${activeTrack.id === \'rtg\' ? \'lg:mb-[110px]\' : \'lg:mb-32\'}',
  'shrink-0 mt-2 lg:mt-2 mb-2 md:mb-4 ${activeTrack.id === \'rtg\' ? \'lg:mb-[110px]\' : \'lg:mb-40\'}'
);

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
console.log("Patched Soundtrack.tsx");
