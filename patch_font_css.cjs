const fs = require('fs');
let content = fs.readFileSync('index.css', 'utf8');

const regex = /@import url\('https:\/\/fonts.googleapis.com\/css2\?family=Black\+Ops\+One&family=Teko:wght@500;700&display=swap'\);/g;

if (regex.test(content)) {
  content = content.replace(regex, "@import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch&family=Teko:wght@500;700&display=swap');");
  fs.writeFileSync('index.css', content);
  console.log("Patched index.css for Rubik Glitch");
} else {
  console.log("Could not find regex match for index.css");
}
