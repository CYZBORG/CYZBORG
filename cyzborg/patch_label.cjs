const fs = require('fs');
let content = fs.readFileSync('index.css', 'utf8');

const importStatement = "@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Teko:wght@500;700&display=swap');\n";

fs.writeFileSync('index.css', importStatement + content);
