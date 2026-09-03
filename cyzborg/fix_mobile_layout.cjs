const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// --- PHONE LANDSCAPE ---
// Reduce padding-top which is currently 14rem
code = code.replace(
  /.hero-content-container {\n\s*padding-top: 14rem;\n\s*padding-left: 20px;\n\s*padding-right: 20px;\n\s*justify-content: flex-start;\n\s*}/,
  '.hero-content-container {\n            padding-top: 7rem;\n            padding-left: 20px;\n            padding-right: 20px;\n            justify-content: flex-start;\n          }'
);

// Increase width and reduce font size
code = code.replace(
  /.hero-primary-text {\n\s*width: 50%;\n\s*}/,
  '.hero-primary-text {\n            width: 65%;\n          }'
);

// We need to match the exact string for .hero-headline on landscape
code = code.replace(
  /.hero-headline { font-size: clamp\(52px, 12vw, 72px\); line-height: 0.86; }/,
  '.hero-headline { font-size: clamp(36px, 9vw, 52px); line-height: 0.86; white-space: nowrap; }'
);


// --- PHONE PORTRAIT ---
// Reduce padding-top which is currently 480px, it's pushing text too low
code = code.replace(
  /.hero-content-container {\n\s*padding-top: 480px;\n\s*padding-left: 20px;\n\s*padding-right: 20px;\n\s*justify-content: flex-start;\n\s*}/,
  '.hero-content-container {\n            padding-top: 380px;\n            padding-left: 20px;\n            padding-right: 20px;\n            justify-content: flex-start;\n          }'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
