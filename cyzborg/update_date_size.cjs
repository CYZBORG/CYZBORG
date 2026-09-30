const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// Remove the inline text classes I just added to avoid conflicts
code = code.replace(
  'p className="hero-coming-date font-bold text-[#00F0FF] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[1.5em] md:text-[2em] mt-4 md:mt-6"',
  'p className="hero-coming-date font-bold text-[#00F0FF] uppercase tracking-[0.2em] md:tracking-[0.25em]"'
);

// Increase hero-coming-date sizes in CSS
code = code.replace(
  /.hero-coming-date {\n\s*font-size: 1.5rem;/g, 
  '.hero-coming-date {\n          font-size: 2.25rem;'
);
code = code.replace(
  /.hero-coming-date { font-size: 1.25rem;/g, 
  '.hero-coming-date { font-size: 1.875rem;'
);
code = code.replace(
  /.hero-coming-date { font-size: 1.125rem;/g, 
  '.hero-coming-date { font-size: 1.5rem;'
);
code = code.replace(
  /.hero-coming-date { font-size: 16px;/g, 
  '.hero-coming-date { font-size: 22px;'
);
code = code.replace(
  /.hero-coming-date { font-size: 14px;/g, 
  '.hero-coming-date { font-size: 20px;'
);

// We need to also increase the margin-top to separate it visually since it's bigger
code = code.replace(
  /margin-top: 0.75rem;\n\s*margin-left: 2.5rem;\n\s*}/g,
  'margin-top: 1.5rem;\n          margin-left: 2.5rem;\n        }'
);
code = code.replace(
  /.hero-coming-date { font-size: 1.875rem; margin-top: 0.5rem; }/g,
  '.hero-coming-date { font-size: 1.875rem; margin-top: 1rem; }'
);
code = code.replace(
  /.hero-coming-date { font-size: 1.5rem; margin-left: 1rem; margin-top: 0; }/g,
  '.hero-coming-date { font-size: 1.5rem; margin-left: 1rem; margin-top: 1rem; }'
);
code = code.replace(
  /.hero-coming-date { font-size: 22px; margin-left: 0; margin-top: 0.75rem; }/g,
  '.hero-coming-date { font-size: 22px; margin-left: 0; margin-top: 1rem; }'
);
code = code.replace(
  /.hero-coming-date { font-size: 20px; margin-top: 0.5rem; margin-left: 0;}/g,
  '.hero-coming-date { font-size: 20px; margin-top: 0.75rem; margin-left: 0;}'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
