const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /\{\/\* Album Cover & Collage \*\/\}[\s\S]*?(?=      <\/div>\n    <\/section>)/;

const newBlock = `{/* Album Cover & Collage */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0 flex items-center justify-center group perspective-[1000px]">
          
          {/* Collage Images */}
          <img src="https://helmet-with-logo.netlify.app/cyzborg%20flex.png" className="absolute w-[45%] lg:w-[45%] aspect-[9/16] object-cover -rotate-[12deg] top-[-5%] left-[-10%] sm:left-[-15%] shadow-2xl opacity-60 dark:opacity-50 grayscale-[0.8] hover:grayscale-0 hover:opacity-100 hover:z-30 hover:scale-105 transition-all duration-500 ease-out z-0" alt="Collage 1" />
          
          <img src="https://helmet-with-logo.netlify.app/holding%20pre-workout.png" className="absolute w-[40%] lg:w-[40%] aspect-[9/16] object-cover rotate-[8deg] top-[-10%] right-[-5%] sm:right-[-10%] shadow-2xl opacity-70 dark:opacity-60 grayscale-[0.8] hover:grayscale-0 hover:opacity-100 hover:z-30 hover:scale-105 transition-all duration-500 ease-out z-10" alt="Collage 2" />
          
          <img src="https://helmet-with-logo.netlify.app/cyzborg%20hand%202.png" className="absolute w-[35%] lg:w-[35%] aspect-[9/16] object-cover -rotate-[18deg] bottom-[-5%] left-[0%] sm:left-[-5%] shadow-2xl opacity-60 dark:opacity-50 grayscale-[0.8] hover:grayscale-0 hover:opacity-100 hover:z-30 hover:scale-105 transition-all duration-500 ease-out z-0" alt="Collage 3" />
          
          <img src="https://helmet-with-logo.netlify.app/cyzborg%20opening%20shot.png" className="absolute w-[40%] lg:w-[40%] aspect-[9/16] object-cover rotate-[12deg] bottom-[-10%] right-[0%] sm:right-[-5%] shadow-2xl opacity-80 dark:opacity-60 grayscale-[0.8] hover:grayscale-0 hover:opacity-100 hover:z-30 hover:scale-105 transition-all duration-500 ease-out z-10" alt="Collage 4" />
          
          <img src="https://helmet-with-logo.netlify.app/cyzborg%20smile.png" className="absolute w-[50%] lg:w-[50%] aspect-[9/16] object-cover -rotate-[4deg] top-[20%] left-[25%] shadow-2xl opacity-40 dark:opacity-30 grayscale-[0.8] hover:grayscale-0 hover:opacity-100 hover:z-30 hover:scale-105 transition-all duration-500 ease-out z-0" alt="Collage 5" />
          
          {/* Main Album Cover Stack */}
          <div className="relative w-[80%] sm:w-[90%] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.02] hover:-translate-y-2">
            
            <img 
              loading="lazy" 
              decoding="async" 
              src="https://helmet-with-logo.netlify.app/mbfhm-cover.png" 
              alt="My Body Fucking Hates Me" 
              className="w-full h-full object-cover transition-opacity duration-300 group-hover/album:opacity-0 absolute inset-0 z-10 pointer-events-none" 
            />
            
            <div className="absolute inset-0 z-0">
              <iframe 
                style={{ borderRadius: 0 }} 
                src="https://open.spotify.com/embed/album/2fRmqckKwmi9PT6njHrhb7?utm_source=generator&theme=0" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen={false} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/album:opacity-0 transition-opacity duration-300 z-20 pointer-events-none flex items-center justify-center">
            </div>
          </div>

        </div>`;

if (regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync('components/sections/Soundtrack.tsx', content);
  console.log("Patched successfully");
} else {
  console.log("Could not find regex match");
}
