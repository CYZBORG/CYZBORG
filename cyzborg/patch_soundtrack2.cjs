const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const regex = /\{\/\* Album Cover \/ Embed \*\/\}[\s\S]*?(?=      <\/div>\n    <\/section>)/;

const newBlock = `{/* Album Cover & Collage */}
        <div className="flex-1 w-full h-[400px] sm:h-[500px] lg:h-[600px] relative order-1 lg:order-2 flex items-center justify-center lg:justify-end group perspective-[1000px]">
          
          {/* Collage Images */}
          <img src="https://storage.googleapis.com/aistudio-artifacts-public/013063bd-53b9-4089-a2de-6df900b73c4c/image_0.png" className="absolute w-[35%] lg:w-[30%] aspect-[9/16] object-cover -rotate-[8deg] top-[5%] left-[5%] shadow-2xl opacity-60 dark:opacity-40 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 hover:z-30 transition-all duration-500 ease-out" alt="Collage 1" />
          
          <img src="https://storage.googleapis.com/aistudio-artifacts-public/013063bd-53b9-4089-a2de-6df900b73c4c/image_1.png" className="absolute w-[40%] lg:w-[35%] aspect-[9/16] object-cover rotate-[4deg] top-[2%] right-[5%] lg:right-[0%] shadow-2xl opacity-70 dark:opacity-50 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 hover:z-30 transition-all duration-500 ease-out z-10" alt="Collage 2" />
          
          <img src="https://storage.googleapis.com/aistudio-artifacts-public/013063bd-53b9-4089-a2de-6df900b73c4c/image_2.png" className="absolute w-[30%] lg:w-[25%] aspect-[9/16] object-cover -rotate-[15deg] bottom-[15%] left-[2%] lg:-left-[5%] shadow-2xl opacity-60 dark:opacity-40 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 hover:z-30 transition-all duration-500 ease-out z-0" alt="Collage 3" />
          
          <img src="https://storage.googleapis.com/aistudio-artifacts-public/013063bd-53b9-4089-a2de-6df900b73c4c/image_3.png" className="absolute w-[35%] lg:w-[30%] aspect-[9/16] object-cover rotate-[10deg] bottom-[5%] right-[15%] lg:right-[10%] shadow-2xl opacity-80 dark:opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 hover:z-30 transition-all duration-500 ease-out z-0" alt="Collage 4" />
          
          <img src="https://storage.googleapis.com/aistudio-artifacts-public/013063bd-53b9-4089-a2de-6df900b73c4c/image_4.png" className="absolute w-[45%] lg:w-[40%] aspect-[9/16] object-cover -rotate-[3deg] top-[30%] left-[20%] shadow-2xl opacity-50 dark:opacity-30 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 hover:z-30 transition-all duration-500 ease-out z-0" alt="Collage 5" />
          
          {/* Main Album Cover Stack */}
          <div className="relative w-[60%] sm:w-[50%] lg:w-[55%] aspect-square max-w-[400px] border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 hover:-translate-y-4">
            
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
              {/* Optional play icon overlay if we weren't just showing the iframe */}
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
