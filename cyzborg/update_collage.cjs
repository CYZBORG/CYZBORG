const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /\{\/\* Collage Images \*\/\}[\s\S]*?(?=\{\/\* Main Album Cover Stack \*\/)/;

const newBlock = `{/* Collage Images */}
          <img src="https://helmet-with-logo.netlify.app/cyzborg-collage.png" className="absolute w-[110%] sm:w-[120%] h-[110%] sm:h-[120%] max-w-none object-contain opacity-60 dark:opacity-50 grayscale-[0.5] hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out z-0 mix-blend-luminosity hover:mix-blend-normal" alt="CYZBORG Collage" />
          
          `;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched successfully");
} else {
  console.log("Could not find regex match");
}
