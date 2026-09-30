const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// For mobile horizontal (max-height 599px and orientation: landscape)
// We add `.hero-subtitle-1 br { display: none !important; }` to hide the break.
code = code.replace(
  /.hero-subtitle-1 { font-size: 15px; line-height: 1.4; }/,
  '.hero-subtitle-1 { font-size: 15px; line-height: 1.4; }\n          .hero-subtitle-1 br { display: none !important; }'
);

// Decrease margin-top of hero-coming-date on mobile landscape to move it up
code = code.replace(
  /.hero-coming-date { font-size: 20px; margin-top: 0.75rem; margin-left: 0;}/,
  '.hero-coming-date { font-size: 20px; margin-top: 0.25rem; margin-left: 0;}'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
