const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<div className="relative flex flex-col items-center lg:items-start border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5">[\s\S]*?(?=<\/div>\s*<\/div>\s*\{\/\* Album Cover)/;

const newBlock = `<div className="relative flex flex-col items-center lg:items-start border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5">
            <div className="hidden lg:block absolute -left-[2px] top-0 w-[2px] h-8 bg-cyzborg-orange"></div>
            
            <div className="font-display text-[16px] sm:text-[18px] md:text-xl lg:text-2xl font-black text-black dark:text-white uppercase tracking-wider flex flex-col md:flex-row items-center lg:items-start gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-5 pb-1 mt-2">
              <a 
                href="https://open.spotify.com/album/2fRmqckKwmi9PT6njHrhb7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaSpotify className="mr-2 text-2xl md:text-3xl shrink-0" /> Spotify
              </a>
              <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0">•</span>
              <a 
                href="https://music.youtube.com/watch?v=f3BG_CWdcIs&list=OLAK5uy_k3GSHs1_Sr2D1daHRzz9CD5xgefQWxu64" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaYoutube className="mr-2 text-2xl md:text-3xl shrink-0" /> YouTube Music
              </a>
              <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0">•</span>
              <a 
                href="https://music.apple.com/us/album/my-body-f-g-hates-me-single/6780128308" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaApple className="mr-2 text-2xl md:text-3xl shrink-0" /> Apple Music
              </a>
            </div>
          </div>
        </div>
        
        `;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched links successfully");
} else {
  console.log("Could not find regex match for links");
}
