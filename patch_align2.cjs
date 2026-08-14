const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<\/div>\n      <\/div>\n    <\/section>\n  <\/>\);/m;
const newBlock = `        </div>\n      </div>\n      </div>\n    </section>\n  </>);`;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched layout closing div successfully");
} else {
  console.log("Could not find closing div match");
}
