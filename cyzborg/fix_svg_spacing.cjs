const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// 1. Left align SVG and remove margin bottom
const oldSvg = 'className="w-full sm:w-[95%] md:w-[90%] lg:w-[75%] max-w-[1020px] h-auto object-contain mb-2 md:mb-4"';
const newSvg = 'className="w-full sm:w-[95%] md:w-[90%] lg:w-[75%] max-w-[1020px] h-auto object-contain object-left"';
code = code.replace(oldSvg, newSvg);

// 2. Base group margin-top
code = code.replace(
  /.hero-subtitle-group {\n\s*margin-top: 2\.5rem;\n\s*gap: 0\.5rem;\n\s*}/,
  '.hero-subtitle-group {\n          margin-top: 1.5rem;\n          gap: 0.5rem;\n        }'
);

// 3. Tablet Landscape margin-top
code = code.replace(
  /.hero-subtitle-group { margin-top: 2rem; }/,
  '.hero-subtitle-group { margin-top: 0.75rem; }'
);

// 4. Tablet Portrait margin-top
code = code.replace(
  /.hero-subtitle-group {\n\s*margin-top: 1\.25rem; \/\* ~20px below ATHLETE \*\//,
  '.hero-subtitle-group {\n             margin-top: 1rem; /* Matched to coming-date */'
);

// 5. Mobile landscape margin-top
code = code.replace(
  /.hero-subtitle-group { margin-top: 0\.75rem; gap: 0\.25rem; }/,
  '.hero-subtitle-group { margin-top: 0.25rem; gap: 0.25rem; }'
);

// 6. Mobile portrait margin-top is already 1rem, which matches coming-date 1rem. So it's fine.

fs.writeFileSync('components/sections/Hero.tsx', code);
