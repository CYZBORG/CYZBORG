const fs = require('fs');
let content = fs.readFileSync('index.css', 'utf8');

const importStatement = "@import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch&family=Creepster&family=Nosifer&family=Metal+Mania&family=Permanent+Marker&display=swap');\n";

if (!content.includes('fonts.googleapis.com')) {
  fs.writeFileSync('index.css', importStatement + content);
  console.log("Patched index.css");
} else {
  console.log("Already has fonts");
}
