const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

for (let i = 0; i <= 4; i++) {
  const oldUrl = `https://storage.googleapis.com/aistudio-artifacts-public/013063bd-53b9-4089-a2de-6df900b73c4c/image_${i}.png`;
  const newUrl = `https://helmet-with-logo.netlify.app/collage-${i + 1}.png`;
  content = content.replace(oldUrl, newUrl);
}

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
