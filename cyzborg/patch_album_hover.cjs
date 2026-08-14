const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<div className="relative w-full max-w-\[400px\] aspect-square border border-neutral-500 shadow-\[0_20px_50px_rgba\(0,0,0,0\.7\)\] bg-white dark:bg-black overflow-hidden group\/album z-20 transition-all duration-500 hover:scale-\[1\.02\]">/;

const newBlock = `<div className="relative w-full max-w-[400px] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20">`;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched album hover successfully");
} else {
  console.log("Could not find regex match for album hover");
}
