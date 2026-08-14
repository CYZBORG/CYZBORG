const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<\/div>\s*<\/div>\s*<\/section>\s*<\/>\);/m;
const newBlock = `        </div>\n      </div>\n      </div>\n    </section>\n  </>);`;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Fixed divs");
} else {
  console.log("Div regex not found");
}
