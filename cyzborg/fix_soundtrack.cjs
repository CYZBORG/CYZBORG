const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

content = content.replace(
  /description: \(\s*<>\s*<p>A brutal war march for those who refuse to break. When the world collapses into chaos, you don't look for a way out&mdash;you force your way through the wreckage.<\/p>\s*<\/>\s*\),/g,
  `description: (
      <div className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
        <p>A brutal war march for those who refuse to break. When the world collapses into chaos, you don't look for a way out&mdash;you force your way through the wreckage.</p>
      </div>
    ),`
);

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
