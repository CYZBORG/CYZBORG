const fs = require('fs');

let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

const newTrack = `  {
    id: 'utb',
    titleText: 'UNDER THE BAR',
    title: (
      <>
        UNDER<br />
        <span className="text-neutral-500">THE</span><br />
        BAR
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/utb-cover.png',
    spotifyUrl: 'https://open.spotify.com/track/66C6QcaaqHhwmsLs6ijoWs?si=90a4f6643e364ff8',
    youtubeUrl: 'https://www.youtube.com/watch?v=HbAxN9m4jzk',
    appleUrl: 'https://music.apple.com/sa/album/under-the-bar-single/6791034280',
    description: (
      <div className="flex flex-col flex-grow">
        <div className="text-neutral-700 dark:text-neutral-300 font-medium space-y-2 md:space-y-3 lg:space-y-5 text-[13px] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl lg:leading-relaxed">
          <p>A raw, uncompromising anthem for the heavy iron. When the weight threatens to crush you, there is no room for hesitation, excuses, or fear. Lock in, get under the bar, and prove what you're made of.</p>
        </div>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/66C6QcaaqHhwmsLs6ijoWs?utm_source=generator&theme=0'
  },
`;

content = content.replace('const TRACKS = [\n', 'const TRACKS = [\n' + newTrack);
fs.writeFileSync('components/sections/Soundtrack.tsx', content);
