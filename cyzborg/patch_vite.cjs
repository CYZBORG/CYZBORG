const fs = require('fs');
let config = fs.readFileSync('vite.config.ts', 'utf8');

if (!config.includes('import { fileURLToPath } from "url"')) {
    config = config.replace(
        "import path from 'path';",
        "import path from 'path';\nimport { fileURLToPath } from 'url';\nimport { dirname } from 'path';\n\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = dirname(__filename);"
    );
    fs.writeFileSync('vite.config.ts', config);
    console.log("Patched vite.config.ts");
}
