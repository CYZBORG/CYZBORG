const fs = require('fs');
let content = fs.readFileSync('components/sections/Soundtrack.tsx', 'utf8');

// 1. Remove mbfhm from TRACKS
content = content.replace(
  /,\s*\{\s*id: 'mbfhm',[\s\S]*?embedUrl: 'https:\/\/open\.spotify\.com\/embed\/album\/2fRmqckKwmi9PT6njHrhb7\?utm_source=generator&theme=0'\s*\}/,
  ''
);

// 2. Add mthbtm to the beginning of TRACKS
content = content.replace(
  /const TRACKS = \[\s*\{/,
  `const TRACKS = [
  {
    id: 'mthbtm',
    titleText: 'MORE THAN HUMAN, BETTER THAN MACHINE',
    title: (
      <>
        MORE THAN HUMAN,<br />
        <span className="text-neutral-500">BETTER THAN</span><br />
        MACHINE
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/more%20than%20human,%20better%20than%20machine%20album%20cover.png',
    spotifyUrl: 'https://open.spotify.com/track/6v4PY5aoN1bmkW9AgQhyJx?si=ef47cb0647094c28',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_kBVQjEO4mynCh4d0vZAokOvsMsyxNyQIc&si=u26lfnShUD1SefiN',
    appleUrl: 'https://music.apple.com/sa/song/more-than-human-better-than-machine/6793851284',
    description: (
      <div className="text-xs sm:text-[13px] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        <p>The official anthem of CYZBORG. Built by pressure, forged by pain, and strengthened by every scar, it represents the relentless pursuit of becoming more without losing the heart, soul, and will that no machine can replicate.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/6v4PY5aoN1bmkW9AgQhyJx?utm_source=generator&theme=0'
  },
  {`
);

fs.writeFileSync('components/sections/Soundtrack.tsx', content);
