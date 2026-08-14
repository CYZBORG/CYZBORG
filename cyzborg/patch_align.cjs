const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /\{\/\* Album Cover wrapper \*\/\}[\s\S]*?(?=<iframe)/;

const newBlock = `{/* Album Cover wrapper */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0">
          
          <div className="absolute top-0 left-[10%] sm:left-[5%] w-[80%] sm:w-[90%] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20">
            
            {playingTrackId === 'mbfhm' ? (
              `;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched Cult Classic alignment");
} else {
  console.log("Could not find regex match for Cult Classic alignment");
}
