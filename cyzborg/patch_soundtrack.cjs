const fs = require('fs');
let code = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf-8');

// 1. Remove label from monster
code = code.replace(/id: 'monster',\n    label: 'NEW RELEASE',\n/, "id: 'monster',\n");

// 2. Add the new track at the beginning of TRACKS
const newTrack = `  {
    id: 'fbm',
    label: 'NEW RELEASE',
    titleText: 'FEARED BY MANY. LOVED BY DOGS.',
    title: (
      <>
        FEARED BY MANY.<br />
        <span className="text-neutral-500">LOVED BY</span><br />
        DOGS.
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/fbm-album.png',
    spotifyUrl: 'https://open.spotify.com/track/1Wwy1LXODrHkkYAJGRkwoP?si=c53ce8ceaa084419',
    youtubeUrl: 'https://music.youtube.com/watch?v=HlkEyus0T4Q&si=M7garPC2aU7H19fb',
    appleUrl: 'https://music.apple.com/us/song/feared-by-many-loved-by-dogs/6806499742',
    description: (
      <div className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-[#A6A6A6] leading-[1.6]">
        <p>People see the size, the scars, and the hard exterior, then decide who you are before you say a word. Dogs don’t. They see past appearances and recognize the hand, the heart, and the character underneath. Keep running, keep lifting, and let the world judge. If a dog trusts you, who gives a fuck who doesn’t?</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/1Wwy1LXODrHkkYAJGRkwoP?utm_source=generator&theme=0'
  },
`;

code = code.replace('const TRACKS = [\n', 'const TRACKS = [\n' + newTrack);

fs.writeFileSync('components/sections/Soundtrack.tsx', code);
