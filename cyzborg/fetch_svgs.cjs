const fs = require('fs');

const urls = {
  Squat: 'https://helmet-with-logo.netlify.app/squat.svg',
  Running: 'https://helmet-with-logo.netlify.app/run.svg',
  Deadlift: 'https://helmet-with-logo.netlify.app/deadlift.svg',
  Sprint: 'https://helmet-with-logo.netlify.app/sprint.svg',
  Pullup: 'https://helmet-with-logo.netlify.app/pullup.svg',
  TireFlip: 'https://helmet-with-logo.netlify.app/tireflip.svg',
  Hiking: 'https://helmet-with-logo.netlify.app/hiking.svg',
  JumpRope: 'https://helmet-with-logo.netlify.app/jumprope.svg'
};

async function fetchAndGenerate() {
  let components = `import React from 'react';\n\n`;
  components += `// Common styling classes for the SVGs\n`;
  components += `const svgClass = "h-[30px] md:h-9 w-auto opacity-70 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,174,239,0.8)] transition-all duration-300 cursor-default";\n\n`;

  for (const [name, url] of Object.entries(urls)) {
    console.log(`Fetching ${name}...`);
    const res = await fetch(url);
    let svgText = await res.text();
    
    const viewBoxMatch = svgText.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 100 100";
    
    const svgContentMatch = svgText.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    let innerContent = svgContentMatch ? svgContentMatch[1] : "";
    
    // Reactify attributes
    innerContent = innerContent
      .replace(/fill-rule/g, 'fillRule')
      .replace(/clip-rule/g, 'clipRule')
      .replace(/stroke-width/g, 'strokeWidth')
      .replace(/stroke-linecap/g, 'strokeLinecap')
      .replace(/stroke-linejoin/g, 'strokeLinejoin')
      .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
      .replace(/class=/g, 'className=')
      .replace(/style="[^"]*"/g, '') // Remove inline styles to avoid React style object errors
      .replace(/fill="[^"]+"/g, 'fill="currentColor"'); // Force currentColor
      
    components += `export const ${name}Silhouette = () => (\n`;
    components += `  <svg viewBox="${viewBox}" className={\`text-white \${svgClass}\`}>\n`;
    components += `    ${innerContent.trim()}\n`;
    components += `  </svg>\n`;
    components += `);\n\n`;
  }

  fs.writeFileSync('components/ui/CyborgWorkouts.tsx', components);
  console.log('Successfully updated CyborgWorkouts.tsx');
}

fetchAndGenerate();
