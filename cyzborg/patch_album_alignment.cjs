const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<div className="relative w-full max-w-md lg:max-w-\[460px\] xl:max-w-\[500px\] 2xl:max-w-\[600px\] mx-auto aspect-\[5\/4\] sm:aspect-\[10\/9\] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0 flex flex-col justify-center items-center">/g;

const newBlock = `<div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0 flex flex-col lg:justify-start items-center justify-center lg:pt-2">`;

content = content.replace(regex, newBlock);

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
console.log("Patched album vertical alignment");
