const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<div className="relative flex flex-col items-center lg:items-start border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5">[\s\S]*?(?=<\/section>\s*<\/>\);)/;

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
        
        {/* Album Cover wrapper */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.02] hover:-translate-y-2">
            
            {playingTrackId === 'mbfhm' ? (
              <iframe 
                style={{ borderRadius: 0 }} 
                src="https://open.spotify.com/embed/album/2fRmqckKwmi9PT6njHrhb7?utm_source=generator&theme=0" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen={false} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="absolute inset-0 w-full h-full z-10"
              ></iframe>
            ) : (
              <>
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src="https://helmet-with-logo.netlify.app/mbfhm-cover.png" 
                  alt="My Body Fucking Hates Me" 
                  className="w-full h-full object-cover absolute inset-0 z-10 pointer-events-none" 
                />
                
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 bg-white/40 dark:bg-black/40 cursor-pointer"
                  onClick={() => setPlayingTrackId('mbfhm')}
                >
                  <div className="w-16 h-16 bg-cyzborg-orange/90 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,75,0,0.4)] backdrop-blur-sm transform transition-transform duration-300 hover:scale-110">
                    <svg className="w-8 h-8 text-black dark:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
`;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Fixed layout bottom");
} else {
  console.log("Regex not found");
}
