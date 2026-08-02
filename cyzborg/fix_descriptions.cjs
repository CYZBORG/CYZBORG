const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

content = content.replace(
  /description: \(\s*<div className="text-xs sm:text-\[13px\] md:text-sm lg:text-base xl:text-lg 2xl:text-xl">\s*<p>A brutal war march for those who refuse to break. When the world collapses into chaos, you don't look for a way out&mdash;you force your way through the wreckage.<\/p>\s*<\/div>\s*\),/g,
  `description: (
      <>
        <p>A brutal war march for those who refuse to break. When the world collapses into chaos, you don't look for a way out&mdash;you force your way through the wreckage.</p>
      </>
    ),`
);

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
