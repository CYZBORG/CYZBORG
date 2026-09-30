const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// Update the mobile portrait CSS for hero-headline
code = code.replace(
  /.hero-headline {\n\s*font-size: clamp\(64px, 18vw, 92px\);\n\s*line-height: 0.86;\n\s*}/,
  '.hero-headline {\n            font-size: clamp(42px, 13vw, 72px);\n            line-height: 0.86;\n            white-space: nowrap;\n          }'
);

// Update MORE CAPABLE in JSX to add whitespace-nowrap just in case
code = code.replace(
  '<span style={{ letterSpacing: \'0.04em\', marginRight: \'-0.04em\' }}>MORE CAPABLE</span>',
  '<span className="whitespace-nowrap" style={{ letterSpacing: \'0.04em\', marginRight: \'-0.04em\' }}>MORE CAPABLE</span>'
);

// Update STRONGER and SMARTER text clamps so they can shrink on mobile
code = code.replace(
  /text-\[clamp\(42px,6vw,95px\)\]/g,
  'text-[clamp(28px,8.5vw,95px)]'
);

// Also need to adjust the period font size next to STRONGER and SMARTER which is currently hardcoded in the same way
// Wait, they all use text-[clamp(42px,6vw,95px)]? Let's check how many replacements are made
fs.writeFileSync('components/sections/Hero.tsx', code);
