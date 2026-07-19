const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles('components').concat(['App.tsx', 'index.tsx', 'types.ts']).filter(fs.existsSync);

const replacements = [
  { regex: /(?<!dark:)text-white/g, replacement: 'text-black dark:text-white' },
  { regex: /(?<!dark:)bg-cyzborg-black/g, replacement: 'bg-white dark:bg-cyzborg-black' },
  { regex: /(?<!dark:)bg-black/g, replacement: 'bg-white dark:bg-black' },
  { regex: /(?<!dark:)bg-neutral-900/g, replacement: 'bg-neutral-100 dark:bg-neutral-900' },
  { regex: /(?<!dark:)bg-neutral-950/g, replacement: 'bg-neutral-50 dark:bg-neutral-950' },
  { regex: /(?<!dark:)bg-neutral-800/g, replacement: 'bg-neutral-200 dark:bg-neutral-800' },
  { regex: /(?<!dark:)border-neutral-800/g, replacement: 'border-neutral-200 dark:border-neutral-800' },
  { regex: /(?<!dark:)border-neutral-700/g, replacement: 'border-neutral-300 dark:border-neutral-700' },
  { regex: /(?<!dark:)border-neutral-900/g, replacement: 'border-neutral-200 dark:border-neutral-900' },
  { regex: /(?<!dark:)text-neutral-400/g, replacement: 'text-neutral-600 dark:text-neutral-400' },
  { regex: /(?<!dark:)text-neutral-300/g, replacement: 'text-neutral-700 dark:text-neutral-300' },
  { regex: /(?<!dark:)text-neutral-200/g, replacement: 'text-neutral-800 dark:text-neutral-200' },
  { regex: /(?<!dark:)text-cyzborg-white/g, replacement: 'text-cyzborg-black dark:text-cyzborg-white' },
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  replacements.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
