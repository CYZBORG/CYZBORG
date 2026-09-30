const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<h3 style=\{\{ fontFamily: '"Black Ops One", system-ui' \}\}/g;

if (regex.test(content)) {
  content = content.replace(regex, `<h3 style={{ fontFamily: '"Rubik Glitch", system-ui' }}`);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched font in Soundtrack.tsx");
} else {
  console.log("Could not find regex match for font in Soundtrack.tsx");
}
