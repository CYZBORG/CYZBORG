const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<section className="py-8 md:py-16 bg-neutral-100 dark:bg-\[#0a0a0a\] relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">[\s\S]*?(?=<h2 className="font-display)/;

const newBlock = `<section className="py-4 md:py-8 bg-neutral-100 dark:bg-[#0a0a0a] relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none z-0"></div>
      
      {/* Background Collage */}
      <img src="https://helmet-with-logo.netlify.app/cyzborg-collage.png" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-20 grayscale-[0.8] mix-blend-luminosity pointer-events-none z-0" alt="CYZBORG Collage Background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        
        {/* Title & Info */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1 relative z-10 w-full">
          <h3 style={{ fontFamily: '"Black Ops One", system-ui' }} className="text-4xl sm:text-5xl md:text-6xl text-cyzborg-orange mb-2 drop-shadow-lg tracking-wider">
            CULT CLASSIC
          </h3>
          
          `;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched successfully");
} else {
  console.log("Could not find regex match");
}
