const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /<section className="py-8 md:py-16 bg-neutral-100 dark:bg-\[#0a0a0a\] relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">[\s\S]*?(?=<\/section>\s*<\/>\);)/;

const newBlock = `<section className="py-8 md:py-16 bg-neutral-100 dark:bg-[#0a0a0a] relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none z-0"></div>
      
      {/* Background Collage */}
      <img src="https://helmet-with-logo.netlify.app/cyzborg-collage.png" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-20 grayscale-[0.8] mix-blend-luminosity pointer-events-none z-0" alt="CYZBORG Collage Background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        
        {/* Title & Info */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1 relative z-10 w-full">
          <div className="inline-flex items-center gap-2 mb-4 lg:mb-6 justify-center lg:justify-start w-full">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyzborg-orange font-bold">
              MOST STREAMED
            </span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white uppercase leading-[0.9] mb-4 tracking-tighter drop-shadow-md">
            MY BODY<br />
            <span className="text-neutral-500">FUCKING</span><br />
            HATES ME.
          </h2>
          
          <div className="font-sans text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-lg xl:text-xl lg:leading-relaxed tracking-wide max-w-lg mx-auto lg:mx-0 mb-6 lg:mb-8 drop-shadow-sm">
            <p>
              The first remastered sonic weapon from the CYZBORG system. Brutal, relentless, and engineered for the hardest training sessions.
            </p>
          </div>
          
          <div className="relative flex flex-col items-center lg:items-start border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5">
            <div className="hidden lg:block absolute -left-[2px] top-0 w-[2px] h-8 bg-cyzborg-orange"></div>
            <p className="font-mono text-neutral-600 dark:text-neutral-400 text-xs lg:text-sm tracking-[0.3em] lg:tracking-[0.25em] uppercase mb-3 text-center lg:text-left drop-shadow-sm">
              Now streaming on major platforms:
            </p>
            <div className="font-display text-[13px] sm:text-[15px] md:text-base font-black text-black dark:text-white uppercase tracking-wider flex flex-col md:flex-row items-center lg:items-start gap-y-3 md:gap-y-0 gap-x-0 md:gap-x-3 pb-1">
              <a 
                href="https://open.spotify.com/album/2fRmqckKwmi9PT6njHrhb7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaSpotify className="mr-2 text-xl shrink-0" /> Spotify
              </a>
              <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs shrink-0">•</span>
              <a 
                href="https://music.youtube.com/watch?v=f3BG_CWdcIs&list=OLAK5uy_k3GSHs1_Sr2D1daHRzz9CD5xgefQWxu64" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaYoutube className="mr-2 text-xl shrink-0" /> YouTube Music
              </a>
              <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs shrink-0">•</span>
              <a 
                href="https://music.apple.com/us/album/my-body-f-g-hates-me-single/6780128308" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center whitespace-nowrap hover:text-black dark:hover:text-cyzborg-orange transition-colors border-b-2 border-cyzborg-orange/30 hover:border-cyzborg-orange pb-0.5 shrink-0"
              >
                <FaApple className="mr-2 text-xl shrink-0" /> Apple Music
              </a>
            </div>
          </div>
        </div>
        
        {/* Album Cover wrapper matching the width of the main soundtrack section for alignment */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0">
          
          {/* Centered actual cover, max 400px like original */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-[400px] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.02] hover:-translate-y-2">
            
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
`;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched successfully");
} else {
  console.log("Could not find regex match");
}
