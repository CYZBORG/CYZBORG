const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

// 1. Revert the Album Cover wrapper in Cult Classic to its original structural layout, 
// but aligned to the top.
const albumRegex = /\{\/\* Album Cover wrapper \*\/\}[\s\S]*?(?=<iframe)/;
const newAlbumBlock = `{/* Album Cover wrapper */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0">
          
          <div className="absolute lg:top-4 top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-0 -translate-y-1/2 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-500 hover:scale-[1.02]">
            
            {playingTrackId === 'mbfhm' ? (
              `;
content = content.replace(albumRegex, newAlbumBlock);

// 2. Fix the dots spacing/alignment. 
// For normal dots:
content = content.replace(/className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs lg:text-\[10px\] xl:text-\[11px\] shrink-0"/g, 
  'className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs lg:text-[10px] xl:text-[11px] shrink-0 transform translate-y-[2px]"');

// For Cult Classic dots:
content = content.replace(/className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0"/g, 
  'className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0 transform translate-y-[4px]"');

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
console.log("Patched album and dots");
