const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

// Fix Cult Classic wrapper size and center it vertically
const albumRegex = /\{\/\* Album Cover wrapper \*\/\}[\s\S]*?(?=<iframe)/;
const newAlbumBlock = `{/* Album Cover wrapper */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0 flex flex-col justify-center items-center">
          
          <div className="relative w-full max-w-[400px] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-500 hover:scale-[1.02]">
            
            {playingTrackId === 'mbfhm' ? (
              `;
content = content.replace(albumRegex, newAlbumBlock);

// Fix vertical centering of dots and links
content = content.replace(/flex flex-col md:flex-row md:flex-nowrap items-center lg:items-start/g, 'flex flex-col md:flex-row md:flex-nowrap items-center lg:items-center');
content = content.replace(/flex flex-col md:flex-row items-center lg:items-start gap-y-4/g, 'flex flex-col md:flex-row items-center lg:items-center gap-y-4');

// Remove the -translate-y-[2px] from the dots
content = content.replace(/ -translate-y-\[2px\]/g, '');

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
console.log("Patched all");
