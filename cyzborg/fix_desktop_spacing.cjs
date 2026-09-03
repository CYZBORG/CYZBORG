const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

// The user wants to reduce line spacing on desktop only.
// We will replace md:mb-1 with md:mb-0 and md:mb-2 with md:mb-0 for these specific lines.

// For STRONGER
code = code.replace(
  'div className="flex justify-between w-full hero-top-text leading-[0.95] mb-0 md:mb-1 items-baseline"',
  'div className="flex justify-between w-full hero-top-text leading-[0.95] mb-0 md:mb-0 items-baseline"'
);
code = code.replace(
  'div className="hero-top-text leading-[0.95] mb-0 md:mb-1 flex items-baseline justify-start relative left-[0.08em]"',
  'div className="hero-top-text leading-[0.95] mb-0 md:mb-0 flex items-baseline justify-start relative left-[0.08em]"'
);

// For SMARTER
code = code.replace(
  'div className="flex justify-between w-full hero-top-text leading-[0.95] mb-1 md:mb-2 items-baseline"',
  'div className="flex justify-between w-full hero-top-text leading-[0.95] mb-1 md:mb-0 items-baseline"'
);
code = code.replace(
  'div className="hero-top-text leading-[0.95] mb-1 md:mb-2 flex items-baseline justify-start relative left-[0.08em]"',
  'div className="hero-top-text leading-[0.95] mb-1 md:mb-0 flex items-baseline justify-start relative left-[0.08em]"'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
