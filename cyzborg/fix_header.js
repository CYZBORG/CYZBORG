const fs = require('fs');

let content = fs.readFileSync('components/layout/Header.tsx', 'utf8');

// Replace nav links to switch between white when transparent and black/white when scrolled
content = content.replace(/className="font-sans text-xs uppercase tracking-\[0\.2em\] text-black dark:text-white hover:text-black dark:text-white hover:text-shadow-glow transition-all"/g, 
  "className={`font-sans text-xs uppercase tracking-[0.2em] transition-all ${scrolled ? 'text-black dark:text-white hover:text-cyzborg-blue' : 'text-white hover:text-cyzborg-white hover:text-shadow-glow'}`}");

// Fix the initialize button border/text color 
content = content.replace(/className="!py-2 !px-6 !text-xs border-black\/20 dark:border-white\/20 hover:border-cyzborg-blue"/g,
  "className={`!py-2 !px-6 !text-xs hover:border-cyzborg-blue transition-colors ${scrolled ? 'border-black/20 dark:border-white/20 text-black dark:text-white' : 'border-white/20 text-white hover:text-white hover:border-white/50'}`}");

// Fix theme toggle button icons to be white when unscrolled
content = content.replace(/<button onClick={toggleTheme} className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">/g,
  '<button onClick={toggleTheme} className={`p-2 border rounded-sm transition-colors ${scrolled ? "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800" : "border-white/20 hover:bg-white/10"}`}>');

// We also need to fix the SVGs inside the toggle button. 
// They currently use text-white for dark mode and text-black for light mode.
// We need to pass the scrolled state to the SVGs, but React allows us to just use `text-white` or `text-black`.
// Wait, we can just replace the SVG classNames inside the theme toggle.
// In Header.tsx, we have two toggle buttons (Desktop and Mobile).
