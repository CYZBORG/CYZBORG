const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

code = code.replace(
  /.hero-top-text {\n\s*font-size: 4\.5rem;\n\s*}/,
  '.hero-top-text {\n            font-size: 3.75rem;\n          }'
);

code = code.replace(
  /.hero-headline {\n\s*font-size: 7\.5rem;\n\s*}/,
  '.hero-headline {\n            font-size: 6rem;\n          }'
);

code = code.replace(
  /.hero-subtitle-1 { font-size: 1\.5rem; }/,
  '.hero-subtitle-1 { font-size: 1.25rem; }'
);

code = code.replace(
  /.hero-subtitle-2 { font-size: 1rem; }/,
  '.hero-subtitle-2 { font-size: 0.875rem; }'
);

code = code.replace(
  /.hero-coming-date { font-size: 1\.875rem; margin-top: 1rem; }/,
  '.hero-coming-date { font-size: 1.5rem; margin-top: 0.75rem; }'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
