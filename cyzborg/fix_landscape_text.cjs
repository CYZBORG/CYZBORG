const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// Replace the inline clamp with a custom CSS class
code = code.replace(/text-\[clamp\(28px,8\.5vw,95px\)\]/g, 'hero-top-text');

// Add the default .hero-top-text to the top CSS block (around line 90-100)
code = code.replace(
  /.hero-headline {\n\s*font-size: clamp\(80px, 10vw, 160px\);\n\s*line-height: 0.9;\n\s*}/,
  '.hero-top-text {\n          font-size: clamp(42px, 6vw, 95px);\n        }\n        .hero-headline {\n          font-size: clamp(80px, 10vw, 160px);\n          line-height: 0.9;\n        }'
);

// Add to 768px-1180px landscape (currently hero-headline is 7.5rem = 120px)
// Top text should be roughly 60% of that -> 4.5rem
code = code.replace(
  /.hero-headline {\n\s*font-size: 7.5rem;\n\s*}/,
  '.hero-top-text {\n            font-size: 4.5rem;\n          }\n          .hero-headline {\n            font-size: 7.5rem;\n          }'
);

// Add to 600px-900px portrait (currently hero-headline is 5.5rem = 88px)
// Top text should be roughly 60% of that -> 3.25rem
code = code.replace(
  /.hero-headline {\n\s*font-size: 5.5rem;\n\s*}/,
  '.hero-top-text {\n            font-size: 3.25rem;\n          }\n          .hero-headline {\n            font-size: 5.5rem;\n          }'
);

// Add to max-width 599 portrait (currently hero-headline is clamp(42px, 13vw, 72px))
// Top text should be clamp(28px, 8.5vw, 48px)
code = code.replace(
  /.hero-headline {\n\s*font-size: clamp\(42px, 13vw, 72px\);\n\s*line-height: 0.86;\n\s*white-space: nowrap;\n\s*}/,
  '.hero-top-text {\n            font-size: clamp(28px, 8vw, 42px);\n          }\n          .hero-headline {\n            font-size: clamp(42px, 13vw, 72px);\n            line-height: 0.86;\n            white-space: nowrap;\n          }'
);

// Add to max-height 599 landscape (currently hero-headline is clamp(36px, 9vw, 52px))
// Top text should be clamp(22px, 6vw, 32px)
code = code.replace(
  /.hero-headline { font-size: clamp\(36px, 9vw, 52px\); line-height: 0.86; white-space: nowrap; }/,
  '.hero-top-text { font-size: clamp(24px, 5.5vw, 32px); }\n          .hero-headline { font-size: clamp(36px, 9vw, 52px); line-height: 0.86; white-space: nowrap; }'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
