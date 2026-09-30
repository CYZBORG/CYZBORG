const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// The new SVG has natural padding at the bottom or is cropped differently.
// Let's reduce the margin-top on the subtitle group to bring it closer.

// Base group margin-top
code = code.replace(
  /.hero-subtitle-group {\n\s*margin-top: 1\.5rem;\n\s*gap: 0\.5rem;\n\s*}/,
  '.hero-subtitle-group {\n          margin-top: -1.5rem; /* Pulled up */\n          gap: 0.5rem;\n        }'
);

// Tablet Landscape margin-top
code = code.replace(
  /.hero-subtitle-group { margin-top: 0\.75rem; }/,
  '.hero-subtitle-group { margin-top: -1rem; }'
);

// Tablet Portrait margin-top
code = code.replace(
  /.hero-subtitle-group {\n\s*margin-top: 1rem; \/\* Matched to coming-date \*\//,
  '.hero-subtitle-group {\n             margin-top: -0.5rem; /* Matched to coming-date */'
);

// Mobile landscape margin-top
code = code.replace(
  /.hero-subtitle-group { margin-top: 0\.25rem; gap: 0\.25rem; }/,
  '.hero-subtitle-group { margin-top: -0.5rem; gap: 0.25rem; }'
);

// Mobile Portrait margin-top
code = code.replace(
  /.hero-subtitle-group {\n\s*margin-top: 1rem;\n\s*gap: 0\.5rem;\n\s*}/,
  '.hero-subtitle-group {\n            margin-top: -0.5rem;\n            gap: 0.5rem;\n          }'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
