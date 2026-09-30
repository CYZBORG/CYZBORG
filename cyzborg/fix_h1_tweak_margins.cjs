const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

code = code.replace(
  "style={{ paddingLeft: '22%' }}",
  "style={{ paddingLeft: '20.5%' }}"
);

code = code.replace(
  "style={{ paddingLeft: '33.5%' }}",
  "style={{ paddingLeft: '32.5%' }}"
);

fs.writeFileSync('components/sections/Hero.tsx', code);
