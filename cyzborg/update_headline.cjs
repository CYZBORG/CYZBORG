const fs = require('fs');
let code = fs.readFileSync('components/sections/Hero.tsx', 'utf-8');

code = code.replace(
  '<span className="hero-headline font-bebas text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block tracking-normal max-w-full" style={{ WebkitTextStroke: \'1px rgba(255,255,255,0.1)\' }}>',
  '<span className="hero-headline font-bebas text-white block tracking-normal max-w-full leading-[0.8] md:leading-[0.8]">',
);

code = code.replace(
  '<span className="font-display font-medium text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block text-[clamp(20px,2.5vw,40px)] -mb-1 md:-mb-2" style={{ WebkitTextStroke: \'0.5px rgba(255,255,255,0.1)\', letterSpacing: \'0.9em\', marginRight: \'-0.9em\' }}>',
  '<span className="font-display font-medium text-white block text-[clamp(20px,2.5vw,40px)] mb-1" style={{ letterSpacing: \'0.9em\', marginRight: \'-0.9em\' }}>'
);
code = code.replace(
  '<span className="font-display font-medium text-transparent bg-clip-text bg-gradient-to-tr from-[#999999] via-[#E8E8E8] to-[#555555] block text-[clamp(20px,2.5vw,40px)] mb-0" style={{ WebkitTextStroke: \'0.5px rgba(255,255,255,0.1)\', letterSpacing: \'0.9em\', marginRight: \'-0.9em\' }}>',
  '<span className="font-display font-medium text-white block text-[clamp(20px,2.5vw,40px)] mb-0 md:mb-1" style={{ letterSpacing: \'0.9em\', marginRight: \'-0.9em\' }}>'
);

fs.writeFileSync('components/sections/Hero.tsx', code);
