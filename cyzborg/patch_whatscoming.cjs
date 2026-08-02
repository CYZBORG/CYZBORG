const fs = require('fs');

let footer = fs.readFileSync('components/layout/Footer.tsx', 'utf8');
footer = footer.replace(
  /\s*\{\/\* Scattered LED Logo \*\/\}\s*<img loading="lazy"[^>]+src="https:\/\/helmet-with-logo\.netlify\.app\/cyzborg-lightning\.svg"[^>]+md:hidden xl:block"[^>]+alt=""\s*\/>/s,
  ''
);
fs.writeFileSync('components/layout/Footer.tsx', footer);

let newsletter = fs.readFileSync('components/sections/Newsletter.tsx', 'utf8');
newsletter = newsletter.replace(
  /\s*\{\/\* Scattered LED Logo \*\/\}\s*<img loading="lazy"[^>]+src="https:\/\/helmet-with-logo\.netlify\.app\/cyzborg-lightning\.svg"[^>]+md:hidden xl:block"[^>]+alt=""\s*\/>/s,
  `
      {/* Scattered LED Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <img loading="lazy" decoding="async" 
          src="https://helmet-with-logo.netlify.app/cyzborg-lightning.svg" 
          className="dark:invert-0 invert w-[800px] md:w-[1200px] lg:w-[1500px] opacity-[0.04] dark:opacity-[0.02] -rotate-[8deg] select-none max-w-none"
          alt=""
        />
      </div>`
);
fs.writeFileSync('components/sections/Newsletter.tsx', newsletter);

console.log("Patched bg");
