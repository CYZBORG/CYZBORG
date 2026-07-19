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

const files = getFiles('components').concat(['App.tsx']).filter(fs.existsSync);

const replacements = [
  { regex: /hover:text-neutral-800 dark:text-cyzborg-blue/g, replacement: 'hover:text-black dark:hover:text-cyzborg-blue' },
  { regex: /hover:text-neutral-800 dark:text-cyzborg-orange/g, replacement: 'hover:text-black dark:hover:text-cyzborg-orange' },
  { regex: /group-hover:text-neutral-800 dark:text-cyzborg-blue/g, replacement: 'group-hover:text-black dark:group-hover:text-cyzborg-blue' },
  { regex: /group-hover:text-neutral-800 dark:text-cyzborg-orange/g, replacement: 'group-hover:text-black dark:group-hover:text-cyzborg-orange' }
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
