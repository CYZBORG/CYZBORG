const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<h3 style=\{\{ fontFamily: '"Rubik Glitch", system-ui' \}\} className="text-4xl sm:text-5xl md:text-6xl text-cyzborg-orange mb-1 drop-shadow-lg tracking-wider">\s*CULT CLASSIC\s*<\/h3>/;

const newBlock = `<div className="inline-flex items-center gap-2 mb-2 lg:mb-4 justify-center lg:justify-start w-full">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyzborg-orange font-bold">
                  MOST STREAMED
                </span>
              </div>`;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched successfully");
} else {
  console.log("Could not find regex match");
}
