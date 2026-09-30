const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// Base group margin-top
code = code.replace(
  /.hero-subtitle-group {\n\s*margin-top: -1\.5rem; \/\* Pulled up \*\//,
  '.hero-subtitle-group {\n          margin-top: 1.5rem; /* Matched to coming-date */'
);

// Tablet Landscape margin-top
code = code.replace(
  /.hero-subtitle-group { margin-top: -1rem; }/,
  '.hero-subtitle-group { margin-top: 0.75rem; }'
);

// Tablet Portrait margin-top
code = code.replace(
  /.hero-subtitle-group {\n\s*margin-top: -0\.5rem; \/\* Matched to coming-date \*\//,
  '.hero-subtitle-group {\n             margin-top: 1rem; /* Matched to coming-date */'
);

// Mobile Portrait margin-top
code = code.replace(
  /.hero-subtitle-group {\n\s*margin-top: -0\.5rem;\n\s*gap: 0\.5rem;\n\s*}/,
  '.hero-subtitle-group {\n            margin-top: 1rem;\n            gap: 0.5rem;\n          }'
);

// Mobile landscape margin-top
code = code.replace(
  /.hero-subtitle-group { margin-top: -0\.5rem; gap: 0\.25rem; }/,
  '.hero-subtitle-group { margin-top: 0.25rem; gap: 0.25rem; }'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
