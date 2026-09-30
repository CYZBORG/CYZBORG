const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

const startIdx = code.indexOf('<h1 className="grid grid-cols-[1fr_auto]');
const endStr = '</h1>';
const endIdx = code.indexOf(endStr, startIdx) + endStr.length;

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `<h1 className="w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] flex flex-col">
              <img src="https://helmet-with-logo.netlify.app/stronger%20smarter%20more%20capable.svg" alt="STRONGER. SMARTER. MORE CAPABLE." className="w-full max-w-[1100px] h-auto object-contain" style={{ width: '100%', maxWidth: '100%' }} />
            </h1>`;
  
  code = code.substring(0, startIdx) + replacement + code.substring(endIdx);
  fs.writeFileSync('components/sections/Hero.tsx', code);
  console.log("Successfully replaced h1");
} else {
  console.log("Could not find h1 bounds");
}
