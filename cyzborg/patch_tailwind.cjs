const fs = require('fs');
let config = fs.readFileSync('tailwind.config.ts', 'utf8');
config = config.replace(
  "fontFamily: {",
  "fontFamily: {\n        bebas: ['\"Bebas Neue\"', 'sans-serif'],"
);
fs.writeFileSync('tailwind.config.ts', config);
