const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// 1. Mobile Horizontal (landscape) text container move down slightly
code = code.replace(
  /.hero-content-container {\n\s*padding-top: 7rem;\n\s*padding-left: 20px;\n\s*padding-right: 20px;\n\s*justify-content: flex-start;\n\s*}/,
  '.hero-content-container {\n            padding-top: 9.5rem;\n            padding-left: 20px;\n            padding-right: 20px;\n            justify-content: flex-start;\n          }'
);

// 2. Mobile Vertical (portrait) subtitle line break
// Replace the exact subtitle line to insert a mobile-only line break before the &
const oldSubtitle = 'GRAPHIC T-SHIRTS <span className="text-neutral-500 mx-1">&</span> PREMIUM FITNESS APPAREL';
const newSubtitle = 'GRAPHIC T-SHIRTS <br className="block md:hidden" /><span className="text-neutral-500 md:ml-1 mr-1">&</span> PREMIUM FITNESS APPAREL';
code = code.replace(oldSubtitle, newSubtitle);

fs.writeFileSync('components/sections/Hero.tsx', code);
