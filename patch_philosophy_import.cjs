const fs = require('fs');

let content = fs.readFileSync('components/sections/Philosophy.tsx', 'utf8');
content = content.replace(
  "import techBg from '../../assets/images/devices_bg_1786413384114.jpg';",
  "import techBg from '../../src/assets/images/devices_bg_1786413384114.jpg';"
);
fs.writeFileSync('components/sections/Philosophy.tsx', content);
console.log("Patched import");
