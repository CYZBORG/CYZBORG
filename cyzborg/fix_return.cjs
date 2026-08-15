const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

content = content.replace(
  /    <\/section>\n  <\/>;\n\};\n\nexport default Soundtrack;/g,
  '    </section>\n  </>);\n};\n\nexport default Soundtrack;'
);

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
