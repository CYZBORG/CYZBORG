const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// Move text down on desktop (base CSS)
code = code.replace(
  /.hero-content-container {\n\s*padding-top: 18rem;\n\s*padding-left: 3rem;\n\s*padding-right: 3rem;\n\s*justify-content: center;\n\s*height: 100%;\n\s*}/,
  '.hero-content-container {\n          padding-top: 21rem;\n          padding-left: 3rem;\n          padding-right: 3rem;\n          justify-content: center;\n          height: 100%;\n        }'
);

// Move text down on desktop/tablet landscape (768px - 1180px)
code = code.replace(
  /.hero-content-container {\n\s*padding-top: 20rem; \/\* Align AUGMENTED with Z logo \*\/\n\s*padding-left: 2rem;\n\s*padding-right: 2rem;\n\s*}/,
  '.hero-content-container {\n            padding-top: 23rem; /* Align AUGMENTED with Z logo */\n            padding-left: 2rem;\n            padding-right: 2rem;\n          }'
);

// Lighten contrast layer
code = code.replace(
  /rgba\(0,0,0,0\.95\) 0%, rgba\(0,0,0,0\.5\) 40%/,
  'rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 40%'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
