const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /\{\/\* Album Cover wrapper \*\/\}[\s\S]*?(?=<iframe)/;
const newAlbumBlock = `{/* Album Cover wrapper */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto order-1 lg:order-2 lg:mt-0 min-w-0 flex justify-center items-center lg:items-start">
          
          <div className="relative w-full max-w-[400px] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-500 hover:scale-[1.02] my-4 lg:mt-4 lg:mb-0">
            
            {playingTrackId === 'mbfhm' ? (
              `;
content = content.replace(regex, newAlbumBlock);
fs.writeFileSync('components/sections/Soundtrack.tsx', content);
