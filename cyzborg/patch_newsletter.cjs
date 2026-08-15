const fs = require('fs');
let content = fs.readFileSync('components/sections/Newsletter.tsx', 'utf8');

// Fix h3
content = content.replace(
  'mb-0.5 group-hover:text-black dark:text-white transition-colors',
  'mb-0.5 transition-colors'
);

// Fix TikTok
content = content.replace(
  'hoverColorClass="text-black dark:text-cyzborg-blue font-bold group-hover:text-black dark:hover:text-cyzborg-blue"',
  'hoverColorClass="text-black dark:text-cyzborg-blue font-bold"'
);

// Fix Instagram
content = content.replace(
  'hoverColorClass="text-cyzborg-orange font-bold group-hover:text-black dark:hover:text-cyzborg-orange"',
  'hoverColorClass="text-[#E1306C] font-bold"'
);
content = content.replace(
  'hoverBgClass="bg-cyzborg-orange"',
  'hoverBgClass="bg-[#E1306C]"'
);

// Fix YouTube
content = content.replace(
  'hoverColorClass="text-red-500 group-hover:text-red-500"',
  'hoverColorClass="text-red-500 font-bold"'
);

// Fix X
content = content.replace(
  'hoverColorClass="text-black dark:text-white group-hover:text-black dark:text-white"',
  'hoverColorClass="text-black dark:text-white font-bold"'
);

// Fix Facebook
content = content.replace(
  'hoverColorClass="text-blue-500 group-hover:text-blue-500"',
  'hoverColorClass="text-blue-500 font-bold"'
);

// Fix Contact
content = content.replace(
  'hoverColorClass="text-cyzborg-orange font-bold group-hover:text-black dark:hover:text-cyzborg-orange"',
  'hoverColorClass="text-cyzborg-orange font-bold"'
);

fs.writeFileSync('components/sections/Newsletter.tsx', content);
console.log("Patched Newsletter.tsx");
