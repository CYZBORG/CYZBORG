import React, { useState } from 'react';
import { SectionIds } from '../../types';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

// Direct platform URLs for the "My Brain Thinks I'm a Monster" release.
const MONSTER_RELEASE_LINKS = {
  spotifyUrl: 'https://open.spotify.com/track/2PzkJcUb8dvhyqCetBSl1M?si=9d8d21dc549b4c5b',
  youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_lRQzeVXLtS2JAWR8NnbvO4g3gEUmY5vOI&si=X8-vtFatE4CLl45r',
  appleUrl: 'https://music.apple.com/us/song/my-brain-thinks-im-a-monster/6798165774',
};

const PNR_SUBTRACKS = {
  1: {
    id: 'pnr-1',
    number: '01',
    name: 'PSYCHOTIC. NOT ROBOTIC.',
    title: (
      <>
        <span className="text-[#00A3FF]">PSYCHOTIC.</span>{' '}
        <span className="text-white whitespace-nowrap">NOT ROBOTIC.</span>
      </>
    ),
    spotifyUrl: 'https://open.spotify.com/track/4QqhEUpS8RVaeX7yEEOvgv?si=fa2143e4fec84129',
    youtubeUrl: 'https://music.youtube.com/watch?v=s7wmiy8xo_c&si=_jE8rLybAJUSu_U8',
    appleUrl: 'https://music.apple.com/us/song/psychotic-not-robotic/6813677979',
    embedUrl: 'https://open.spotify.com/embed/track/4QqhEUpS8RVaeX7yEEOvgv?utm_source=generator&theme=0',
    description: (
      <div className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[21px] 2xl:text-[23px] text-[#A6A6A6] leading-[1.6]">
        <p>This song is about refusing to train on autopilot. No going through the motions. No dead-eyed reps. No mechanical bullshit. It is about turning the switch, bringing aggression into the room, pushing past comfortable, and attacking the workout with enough energy to make it feel a little unhinged. Go harder. Get louder. Lose your mind for the set, then come back for another.</p>
      </div>
    ),
  },
  2: {
    id: 'pnr-2',
    number: '02',
    name: 'Dancing Between Sets',
    title: (
      <>
        <span className="text-cyzborg-orange">DANCING</span>{' '}
        <span className="text-white">BETWEEN SETS</span>
      </>
    ),
    spotifyUrl: 'https://open.spotify.com/track/4gR0Tv8DozzlqH7kSt9K8b?si=9d744432f8d04344',
    youtubeUrl: 'https://music.youtube.com/watch?v=fIi97je_6Mc&si=y3_tANQOnmvcs5O5',
    appleUrl: 'https://music.apple.com/us/song/dancing-between-sets/6813677980',
    embedUrl: 'https://open.spotify.com/embed/track/4gR0Tv8DozzlqH7kSt9K8b?utm_source=generator&theme=0',
    description: (
      <div className="text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[21px] 2xl:text-[23px] text-[#A6A6A6] leading-[1.6]">
        <p>The set ends, the weight hits the rack, and then the right track comes on. Suddenly you are not just standing there waiting for the next set. The shoulders start rolling, the feet start moving, maybe there is a little bounce, and before you know it, a head nod turns into a full rhythm. For a few seconds, the gym stops feeling so serious. The beat keeps going, the rest time ends, and it is right back to work. Catch the beat. Move a little. Reset. Do it again.</p>
      </div>
    ),
  },
};

const TRACKS = [
  {
    id: 'pnr',
    label: 'NEW RELEASE • TWO-TRACK RELEASE',
    titleText: 'PSYCHOTIC Dancing',
    title: (
      <>
        <span className="text-[#00A3FF]">PSYCHOTIC</span>{' '}
        <span className="text-cyzborg-orange">Dancing</span>
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/pnr%20album%20cover.png',
    spotifyUrl: '#',
    youtubeUrl: '#',
    appleUrl: '#',
    description: (
      <div className="text-lg sm:text-xl md:text-2xl lg:text-[20px] xl:text-[22px] 2xl:text-[25px] text-[#A6A6A6] leading-[1.5] space-y-3">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[25px] xl:text-[28px] 2xl:text-[31px] font-bold text-white uppercase tracking-wider leading-tight">TWO SIDES OF THE SAME WORKOUT.</p>
        <p>One side is locked in. Heavy weight, dark thoughts, controlled aggression.</p>
        <p>The other catches the right song between sets and stops taking the whole damn gym so seriously.</p>
        <p>
          <span className="text-[#00A3FF] font-semibold">PSYCHOTIC</span>{' '}
          <span className="text-cyzborg-orange font-semibold">Dancing</span> puts both sides together. The intensity that gets you through the set and the energy that keeps you moving when the weight hits the floor.
        </p>
      </div>
    ),
    embedUrl: ''
  },
  {
    id: 'fbm',
    titleText: 'FEARED BY MANY. LOVED BY DOGS.',
    title: (
      <>
        FEARED BY MANY.<br />
        <span className="text-neutral-500">LOVED BY DOGS.</span>
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/fbm-album.png',
    spotifyUrl: 'https://open.spotify.com/track/1Wwy1LXODrHkkYAJGRkwoP?si=c53ce8ceaa084419',
    youtubeUrl: 'https://music.youtube.com/watch?v=HlkEyus0T4Q&si=M7garPC2aU7H19fb',
    appleUrl: 'https://music.apple.com/us/song/feared-by-many-loved-by-dogs/6806499742',
    description: (
      <div className="text-sm sm:text-base md:text-lg lg:text-base lg:max-[1180px]:text-[19px] lg:max-[1180px]:leading-[1.55] xl:text-lg 2xl:text-xl text-[#A6A6A6] leading-[1.6]">
        <p>People see the size, the scars, and the hard exterior, then decide who you are before you say a word. Dogs don’t. They see past appearances and recognize the hand, the heart, and the character underneath. From predawn miles to late-night sessions under the iron, you keep moving without applause or approval. Let the world stare. Let them talk. Let them judge. If a dog trusts you, who gives a fuck who doesn’t?</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/1Wwy1LXODrHkkYAJGRkwoP?utm_source=generator&theme=0'
  },
  {
    id: 'monster',
    titleText: 'MY BRAIN THINKS I’M A MONSTER',
    title: (
      <>
        MY BRAIN<br />
        <span className="text-neutral-500">THINKS I'M A</span><br />
        MONSTER
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/monster%20album%20cover.png',
    spotifyUrl: MONSTER_RELEASE_LINKS.spotifyUrl,
    youtubeUrl: MONSTER_RELEASE_LINKS.youtubeUrl,
    appleUrl: MONSTER_RELEASE_LINKS.appleUrl,
    description: (
      <div className="text-sm sm:text-base md:text-lg lg:text-base lg:max-[1180px]:text-[20px] lg:max-[1180px]:leading-[1.55] xl:text-lg 2xl:text-xl text-[#A6A6A6] leading-[1.6]">
        <p>The voice in your head tells you to slow down, be normal, skip the workout, stop obsessing, and take it easy. Instead, you grab the pre-workout, count the macros, weigh the food, load another plate, and keep going. It is discipline taken so far that even your own mind starts wondering what the hell you have become.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/2PzkJcUb8dvhyqCetBSl1M?utm_source=generator&theme=0'
  },
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
      <div className="text-sm sm:text-base md:text-lg lg:text-base lg:max-[1180px]:text-[22px] lg:max-[1180px]:leading-[1.6] xl:text-lg 2xl:text-xl text-[#A6A6A6] leading-[1.6]">
        <p>The official anthem of CYZBORG. Built by pressure, forged by pain, and strengthened by every scar, it represents the relentless pursuit of becoming more without losing the heart, soul, and will that no machine can replicate.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/6v4PY5aoN1bmkW9AgQhyJx?utm_source=generator&theme=0'
  },
  {
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
      <div className="text-sm sm:text-base md:text-lg lg:text-base lg:max-[1180px]:text-[22px] lg:max-[1180px]:leading-[1.6] xl:text-lg 2xl:text-xl text-[#A6A6A6] leading-[1.6]">
        <p>A raw, uncompromising anthem for the heavy iron. When the weight threatens to crush you, there is no room for hesitation, excuses, or fear. Lock in, get under the bar, and prove what you're made of.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/66C6QcaaqHhwmsLs6ijoWs?utm_source=generator&theme=0'
  },
  {
    id: 'rtg',
    titleText: 'RUN THE GAUNTLET',
    title: (
      <>
        RUN<br />
        <span className="text-neutral-500">THE</span><br />
        GAUNTLET
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/rtg-cover.png',
    spotifyUrl: 'https://open.spotify.com/track/1GCbDeNYLEfIECES5CUDWs?si=caf820a9cd954472',
    youtubeUrl: 'https://music.youtube.com/watch?v=G5lwEvPGq4w&si=-WI3MRp5hIU6VrJD',
    appleUrl: 'https://music.apple.com/us/album/run-the-gauntlet-single/6789544340',
    description: (
      <div className="text-sm sm:text-base md:text-lg lg:text-base lg:max-[1180px]:text-[22px] lg:max-[1180px]:leading-[1.6] xl:text-lg 2xl:text-xl text-[#A6A6A6] leading-[1.6]">
        <p>A brutal war march for those who refuse to break. When the world collapses into chaos, you don't look for a way out&mdash;you force your way through the wreckage.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/1GCbDeNYLEfIECES5CUDWs?utm_source=generator&theme=0'
  },
  {
    id: 'dysmorphia',
    titleText: 'DYSMORPHIA',
    title: (
      <>
        DYS<span className="text-neutral-500">MORP</span>HIA
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/dysmorphia-cover.png',
    spotifyUrl: 'https://open.spotify.com/track/05CHpPg5ZX54OUheazmtxV?si=d38f862cb16b4f66',
    youtubeUrl: 'https://music.youtube.com/watch?v=RQIz5vsp7dc&si=tpAkC8E_2tH-YMxW',
    appleUrl: 'https://music.apple.com/us/song/dysmorphia/6789440215',
    description: (
      <div className="text-sm sm:text-base md:text-lg lg:text-base lg:max-[1180px]:text-[23px] lg:max-[1180px]:leading-[1.65] xl:text-lg 2xl:text-xl text-[#A6A6A6] leading-[1.6]">
        <p>The ultimate visual and physical confrontation. A heavy, unforgiving strike against the mirror, the doubt, and the perceived weakness within. Stop hiding, endure the pressure, and outwork your own mind.</p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/track/05CHpPg5ZX54OUheazmtxV?utm_source=generator&theme=0'
  },
  {
    id: 'fyf',
    titleText: 'FUCK YOUR FEELINGS',
    title: (
      <>
        FUCK<br />
        <span className="text-neutral-500">YOUR</span><br />
        FEELINGS
      </>
    ),
    coverUrl: 'https://helmet-with-logo.netlify.app/fyf-cover.png',
    spotifyUrl: 'https://open.spotify.com/album/4MIKxWNZam7Dr9T5yOFcMo',
    youtubeUrl: 'https://music.youtube.com/watch?v=PYTFLEAOpnA&list=OLAK5uy_lFD6iAKpLXocqvUcYF4ShOxgO0FND99JI',
    appleUrl: 'https://music.apple.com/us/album/f-k-your-feelings-single/6782700672',
    description: (
      <div className="text-sm sm:text-base md:text-lg lg:text-base lg:max-[1180px]:text-[22px] lg:max-[1180px]:leading-[1.6] xl:text-lg 2xl:text-xl text-[#A6A6A6] leading-[1.6]">
        <p>
          A middle finger to weakness, victimhood, and self-imposed limits. Turn off the noise, embrace the struggle, and earn your results.
        </p>
      </div>
    ),
    embedUrl: 'https://open.spotify.com/embed/album/4MIKxWNZam7Dr9T5yOFcMo?utm_source=generator&theme=0'
  }
];

const Soundtrack: React.FC = () => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredPnrTrack, setHoveredPnrTrack] = useState<1 | 2 | null>(null);
  const [selectedPnrTrack, setSelectedPnrTrack] = useState<1 | 2 | null>(null);
  const activeTrack = TRACKS[activeTrackIndex];

  const isPnr = activeTrack.id === 'pnr';
  const activePnrSubtrack = isPnr && selectedPnrTrack ? PNR_SUBTRACKS[selectedPnrTrack] : null;

  const displayedTitle = activePnrSubtrack ? activePnrSubtrack.title : activeTrack.title;
  const displayedDescription = activePnrSubtrack ? activePnrSubtrack.description : activeTrack.description;
  const displayedSpotifyUrl = activePnrSubtrack ? activePnrSubtrack.spotifyUrl : activeTrack.spotifyUrl;
  const displayedYoutubeUrl = activePnrSubtrack ? activePnrSubtrack.youtubeUrl : activeTrack.youtubeUrl;
  const displayedAppleUrl = activePnrSubtrack ? activePnrSubtrack.appleUrl : activeTrack.appleUrl;
  const displayedEmbedUrl = activePnrSubtrack ? activePnrSubtrack.embedUrl : activeTrack.embedUrl;

  const handleSelectAlbumIndex = (newIndex: number) => {
    setActiveTrackIndex(newIndex);
    setPlayingTrackId(null);
    setSelectedPnrTrack(null);
    setHoveredPnrTrack(null);
  };

  const handleSelectPnrSubtrack = (trackNum: 1 | 2) => {
    setSelectedPnrTrack(trackNum);
    setPlayingTrackId(null);
  };

  return (
  <>
    <section id={SectionIds.SOUNDTRACK} className="pt-[32px] md:pt-[45px] lg:pt-[44px] xl:pt-[60px] pb-4 md:pb-6 lg:pb-8 bg-neutral-50 dark:bg-cyzborg-black relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden flex items-start xl:items-center scroll-mt-[61px] md:scroll-mt-[83px] lg:scroll-mt-[103px]">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] dark:opacity-0 pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[380px] md:w-[540px] opacity-[0.03] pointer-events-none select-none z-0 -rotate-[6deg]">
        <img
          loading="lazy"
          decoding="async"
          src="https://helmet-with-logo.netlify.app/detailed%20white.svg"
          alt=""
          className="w-full h-auto hidden dark:block"
        />
        <img
          loading="lazy"
          decoding="async"
          src="https://helmet-with-logo.netlify.app/detailed%20black.svg"
          alt=""
          className="w-full h-auto block dark:hidden"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Mobile Header */}
        <span className="font-mono text-xs text-cyzborg-orange font-bold tracking-[0.15em] sm:tracking-[0.3em] uppercase block mb-6 text-center lg:text-left lg:hidden">
          {activeTrack.label || 'AUDIO TRANSMISSION'}
        </span>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-16 items-start">
          
          {/* Audio Info / Text */}
          <div className="flex flex-col lg:pr-4 order-3 lg:order-1 relative z-20 min-w-0 lg:h-[580px] xl:h-[500px] 2xl:h-[600px]">
            <div className="mb-0 lg:mb-0 xl:mb-1 shrink-0">
              <div className="hidden lg:flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-cyzborg-orange font-bold tracking-[0.3em] uppercase">
                  {activeTrack.label || 'AUDIO TRANSMISSION'}
                </span>
              </div>
              <h2 
                onClick={() => {
                  if (isPnr && selectedPnrTrack !== null) {
                    setSelectedPnrTrack(null);
                    setPlayingTrackId(null);
                  }
                }}
                className={`font-display ${isPnr ? 'text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl' : 'text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl'} font-bold text-black dark:text-white uppercase leading-[0.92] mb-1 md:mb-0 whitespace-normal tracking-tighter text-center lg:text-left overflow-hidden text-ellipsis ${isPnr && selectedPnrTrack !== null ? 'cursor-pointer' : ''}`}
              >
                {displayedTitle}
              </h2>
            </div>
            
            {/* Dynamic content container */}
            <div className={`flex flex-col justify-start ${isPnr ? 'mt-3 lg:mt-3' : 'mt-2 lg:mt-2'} lg:pb-4 relative z-10`}>
              <div className={`font-sans text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl lg:leading-relaxed tracking-wide max-w-xl md:max-w-2xl lg:max-w-full text-center lg:text-left mx-auto lg:mx-0 flex flex-col w-full ${isPnr ? 'mb-0 lg:mb-2' : 'mb-0 lg:mb-4'}`}>
                {displayedDescription}
              </div>

              {(displayedSpotifyUrl !== '#' || displayedYoutubeUrl !== '#' || displayedAppleUrl !== '#') && (
                <div className={`border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5 md:pl-6 relative flex flex-col items-center lg:items-start shrink-0 ${isPnr ? 'mt-2 lg:mt-1.5 mb-2 lg:mb-3' : activeTrack.id === 'rtg' ? 'mt-2 lg:mt-1.5 lg:max-[1180px]:mt-4 mb-2 md:mb-4 lg:mb-4 xl:mb-36 2xl:mb-36' : 'mt-2 lg:mt-1.5 lg:max-[1180px]:mt-4 mb-2 md:mb-4 lg:mb-4 xl:mb-36 2xl:mb-36'}`}>
                  <div className={`hidden lg:block absolute -left-[2px] top-0 w-[2px] ${isPnr ? 'h-8 lg:h-10 xl:h-12' : 'h-8 lg:h-10 lg:max-[1180px]:h-14 xl:h-12'} ${isPnr && selectedPnrTrack === 1 ? 'bg-[#00A3FF]' : 'bg-cyzborg-orange'}`}></div>
                  <p className={`font-mono text-neutral-600 dark:text-neutral-400 ${isPnr ? 'text-xs lg:text-xs xl:text-sm 2xl:text-base mb-2 lg:mb-1 xl:mb-1 2xl:mb-1.5' : 'text-xs lg:text-xs lg:max-[1180px]:text-[15px] xl:text-sm 2xl:text-base mb-2 lg:mb-1 lg:max-[1180px]:mb-2 xl:mb-1 2xl:mb-1.5'} tracking-[0.3em] lg:tracking-[0.25em] uppercase text-center lg:text-left`}>
                    Now streaming on major platforms:
                  </p>
                  <div className={`font-display ${isPnr ? 'text-[13px] sm:text-[15px] md:text-base lg:text-[14px] xl:text-[17px] 2xl:text-[19px] gap-x-0 md:gap-x-2 xl:gap-x-3 2xl:gap-x-4' : 'text-[13px] sm:text-[15px] md:text-base lg:text-[14px] lg:max-[1180px]:text-[19px] xl:text-[17px] 2xl:text-[19px] gap-x-0 md:gap-x-2 lg:max-[1180px]:gap-x-3.5 xl:gap-x-3 2xl:gap-x-4'} font-black text-black dark:text-white uppercase tracking-wider flex flex-col md:flex-row md:flex-nowrap items-center lg:items-center gap-y-3 md:gap-y-0 pb-1`}>
                    {displayedSpotifyUrl !== '#' ? (
                      <a 
                        href={displayedSpotifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center whitespace-nowrap text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange pb-0.5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      >
                        <FaSpotify className={`mr-2 text-2xl md:text-2xl ${isPnr ? 'lg:text-xl' : 'lg:text-xl lg:max-[1180px]:text-[26px]'} xl:text-3xl shrink-0`} /> Spotify
                      </a> 
                    ) : (
                      <span className="flex items-center whitespace-nowrap text-neutral-500 border-b-2 border-transparent pb-0.5 shrink-0 cursor-not-allowed" title="Coming Soon">
                        <FaSpotify className={`mr-2 text-2xl md:text-2xl ${isPnr ? 'lg:text-xl' : 'lg:text-xl lg:max-[1180px]:text-[26px]'} xl:text-3xl shrink-0`} /> Spotify (Soon)
                      </span>
                    )}
                    
                    {(displayedYoutubeUrl !== '#' || displayedAppleUrl !== '#') && (
                      <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs lg:text-[10px] xl:text-[11px] shrink-0 transform translate-y-[2px]">•</span> 
                    )}
                    
                    {displayedYoutubeUrl !== '#' && (
                      <a 
                        href={displayedYoutubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center whitespace-nowrap text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange pb-0.5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      >
                        <FaYoutube className={`mr-2 text-2xl md:text-2xl ${isPnr ? 'lg:text-xl' : 'lg:text-xl lg:max-[1180px]:text-[26px]'} xl:text-3xl shrink-0`} /> YouTube Music
                      </a> 
                    )}
                    {displayedYoutubeUrl !== '#' && displayedAppleUrl !== '#' && (
                      <span className="hidden md:block text-black dark:text-cyzborg-blue font-bold opacity-70 text-xs lg:text-[10px] xl:text-[11px] shrink-0 transform translate-y-[2px]">•</span> 
                    )}
                    {displayedAppleUrl !== '#' && (
                      <a 
                        href={displayedAppleUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center whitespace-nowrap text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange pb-0.5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      >
                        <FaApple className={`mr-2 text-2xl md:text-2xl ${isPnr ? 'lg:text-xl' : 'lg:text-xl lg:max-[1180px]:text-[26px]'} xl:text-3xl mb-1 md:mb-0.5 shrink-0`} /> Apple Music
                      </a> 
                    )}
                  </div>
                </div>
              )}

              {/* Interactive Two-Track Selector for PSYCHOTIC Dancing (Below Description & Now Streaming) */}
              {isPnr && (
                <div className="relative z-30 w-fit flex flex-col items-center sm:items-end mx-auto lg:mx-0 mt-3 mb-2 lg:mb-14 shrink-0">
                  <div className="flex flex-col sm:flex-row lg:flex-row gap-3 justify-center lg:justify-start">
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredPnrTrack(1)}
                      onMouseLeave={() => setHoveredPnrTrack(null)}
                      onClick={() => handleSelectPnrSubtrack(1)}
                      className={`group flex items-center gap-3 px-4 py-2.5 border text-left transition-all duration-200 cursor-pointer whitespace-nowrap ${
                        selectedPnrTrack === 1 || hoveredPnrTrack === 1
                          ? 'border-[#00A3FF] bg-[#04141f] text-white shadow-[0_0_18px_rgba(0,163,255,0.28)] -translate-y-0.5'
                          : 'border-neutral-800 bg-neutral-950/95 text-neutral-300 hover:border-[#00A3FF]'
                      }`}
                    >
                      <span className="font-mono text-sm sm:text-base font-bold text-[#00A3FF]">01</span>
                      <span className="font-display text-base sm:text-[17px] xl:text-[19px] 2xl:text-[19px] font-bold uppercase tracking-wider">
                        PSYCHOTIC. NOT ROBOTIC.
                      </span>
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => setHoveredPnrTrack(2)}
                      onMouseLeave={() => setHoveredPnrTrack(null)}
                      onClick={() => handleSelectPnrSubtrack(2)}
                      className={`group flex items-center gap-3 px-4 py-2.5 border text-left transition-all duration-200 cursor-pointer whitespace-nowrap ${
                        selectedPnrTrack === 2 || hoveredPnrTrack === 2
                          ? 'border-cyzborg-orange bg-[#1a1007] text-white shadow-[0_0_18px_rgba(184,115,51,0.3)] -translate-y-0.5'
                          : 'border-neutral-800 bg-neutral-950/95 text-neutral-300 hover:border-cyzborg-orange'
                      }`}
                    >
                      <span className="font-mono text-sm sm:text-base font-bold text-cyzborg-orange">02</span>
                      <span className="font-display text-base sm:text-[17px] xl:text-[19px] 2xl:text-[19px] font-bold uppercase tracking-wider">
                        Dancing Between Sets
                      </span>
                    </button>
                  </div>

                  {selectedPnrTrack !== null && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPnrTrack(null);
                        setPlayingTrackId(null);
                      }}
                      className="mt-2.5 font-mono text-sm xl:text-[15px] font-bold text-neutral-300 hover:text-cyzborg-orange uppercase tracking-[0.2em] transition-colors cursor-pointer"
                    >
                      ← Album Overview
                    </button>
                  )}
                </div>
              )}
            </div>
            
            {/* Track Selector Controls (Desktop) */}
            <div className="hidden lg:flex gap-4 absolute bottom-0 left-0 shrink-0 z-20">
              <button 
                onClick={() => handleSelectAlbumIndex(Math.max(0, activeTrackIndex - 1))}
                disabled={activeTrackIndex === 0}
                className="w-12 h-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-cyzborg-orange text-neutral-600 dark:text-neutral-400 hover:text-black dark:text-white transition-all disabled:opacity-30 disabled:hover:border-neutral-200 dark:border-neutral-800 disabled:hover:text-neutral-600 dark:text-neutral-400 group"
              >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => handleSelectAlbumIndex(Math.min(TRACKS.length - 1, activeTrackIndex + 1))}
                disabled={activeTrackIndex === TRACKS.length - 1}
                className="w-12 h-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-cyzborg-orange text-neutral-600 dark:text-neutral-400 hover:text-black dark:text-white transition-all disabled:opacity-30 disabled:hover:border-neutral-200 dark:border-neutral-800 disabled:hover:text-neutral-600 dark:text-neutral-400 group"
              >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Mobile Track Selectors */}
          <div className="flex lg:hidden gap-4 justify-center order-2 relative z-20 min-w-0">
            <button 
              onClick={() => handleSelectAlbumIndex(Math.max(0, activeTrackIndex - 1))}
              disabled={activeTrackIndex === 0}
              className="w-12 h-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-cyzborg-orange text-neutral-600 dark:text-neutral-400 hover:text-black dark:text-white transition-all disabled:opacity-30 disabled:hover:border-neutral-200 dark:border-neutral-800 disabled:hover:text-neutral-600 dark:text-neutral-400 group shrink-0"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => handleSelectAlbumIndex(Math.min(TRACKS.length - 1, activeTrackIndex + 1))}
              disabled={activeTrackIndex === TRACKS.length - 1}
              className="w-12 h-12 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 hover:border-cyzborg-orange text-neutral-600 dark:text-neutral-400 hover:text-black dark:text-white transition-all disabled:opacity-30 disabled:hover:border-neutral-200 dark:border-neutral-800 disabled:hover:text-neutral-600 dark:text-neutral-400 group shrink-0"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Album Art Graphic representation */}
          <div 
            className="relative z-10 w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto aspect-[5/4] sm:aspect-[10/9] lg:aspect-square order-1 lg:order-2 lg:mt-0 min-w-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {TRACKS.map((track, idx) => {
              const isActive = activeTrackIndex === idx;
              const isTrackPnr = track.id === 'pnr';
              const isPlaying = isTrackPnr
                ? (selectedPnrTrack !== null && playingTrackId === PNR_SUBTRACKS[selectedPnrTrack].id)
                : playingTrackId === track.id;
              
              let posOffset = 0;
              let zIndexValue = isActive ? 10 : 5;
              
              if (!isActive) {
                const inactiveIndices = TRACKS.map((_, i) => i).filter(i => i !== activeTrackIndex);
                const pos = inactiveIndices.indexOf(idx);
                if (pos === 0) { posOffset = -1; zIndexValue = 5; }
                else if (pos === 1) { posOffset = 1; zIndexValue = 4; }
                else if (pos === 2) { posOffset = 2; zIndexValue = 3; }
                else if (pos === 3) { posOffset = -2; zIndexValue = 2; }
              }
              
              const baseTranslateX = posOffset * 80;
              const hoverTranslateX = posOffset * 170;
              const translateX = isHovered ? hoverTranslateX : baseTranslateX;
              
              const translateY = isActive ? 0 : 0;
              const hoverTranslateY = isActive ? 0 : 20;
              const finalTranslateY = isHovered ? hoverTranslateY : translateY;
              
              const scale = isActive ? 1 : 0.85;
              const rotate = isHovered ? posOffset * 15 : posOffset * 6;
              
              return (
                <div 
                  key={track.id}
                  onClick={() => {
                    if (!isActive) {
                      handleSelectAlbumIndex(idx);
                    }
                  }}
                  className={`absolute top-0 left-[10%] sm:left-[5%] w-[80%] sm:w-[90%] aspect-square cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-bottom ${!isActive ? 'group' : ''}`}
                  style={{
                    zIndex: zIndexValue,
                    transform: `translateX(${translateX}px) translateY(${finalTranslateY}px) scale(${scale}) rotate(${rotate}deg)`,
                    opacity: isActive || isHovered ? 1 : 0.6,
                  }}
                >
                  {/* The Sleeve */}
                  <div className={`relative w-full h-full border ${isActive ? 'border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)]' : 'border-neutral-200 dark:border-neutral-800 shadow-xl hover:border-neutral-400'} bg-white dark:bg-black overflow-hidden z-10 transition-all duration-500`}>
                    
                    {isPlaying && isActive ? (
                      <iframe 
                        style={{ borderRadius: 0 }} 
                        src={isTrackPnr ? displayedEmbedUrl : track.embedUrl} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allowFullScreen={false} 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    ) : isTrackPnr && isActive ? (
                      <div className="relative w-full h-full select-none">
                        {/* Base cover image (dims slightly when a half is highlighted) */}
                        <img
                          loading="lazy"
                          decoding="async"
                          src={track.coverUrl}
                          alt={track.titleText}
                          className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
                            hoveredPnrTrack !== null ? 'brightness-[0.45] saturate-75' : 'brightness-100'
                          }`}
                        />

                        {/* BLUE HALF (01 PSYCHOTIC. NOT ROBOTIC.) */}
                        <div
                          onMouseEnter={() => setHoveredPnrTrack(1)}
                          onMouseLeave={() => setHoveredPnrTrack(null)}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectPnrSubtrack(1);
                          }}
                          style={{ clipPath: 'polygon(0% 0%, 81.5% 0%, 16% 100%, 0% 100%)' }}
                          className={`absolute inset-0 cursor-pointer transition-all duration-300 ease-out ${
                            hoveredPnrTrack === 1
                              ? 'z-20 -translate-x-1.5 -translate-y-1.5 scale-[1.035]'
                              : selectedPnrTrack === 1 && hoveredPnrTrack === null
                              ? 'z-15 -translate-x-1 -translate-y-1 scale-[1.02]'
                              : 'z-10'
                          }`}
                          title="01 PSYCHOTIC. NOT ROBOTIC."
                        >
                          <img
                            src={track.coverUrl}
                            alt="01 PSYCHOTIC. NOT ROBOTIC."
                            className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
                              hoveredPnrTrack === 1
                                ? 'brightness-125 contrast-110 saturate-125'
                                : selectedPnrTrack === 1 && hoveredPnrTrack === null
                                ? 'brightness-115 saturate-115'
                                : 'opacity-0'
                            }`}
                          />
                          {(hoveredPnrTrack === 1 || (selectedPnrTrack === 1 && hoveredPnrTrack === null)) && (
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(0,240,255,0.28)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
                          )}
                        </div>

                        {/* ORANGE HALF (02 Dancing Between Sets) */}
                        <div
                          onMouseEnter={() => setHoveredPnrTrack(2)}
                          onMouseLeave={() => setHoveredPnrTrack(null)}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectPnrSubtrack(2);
                          }}
                          style={{ clipPath: 'polygon(81.5% 0%, 100% 0%, 100% 100%, 16% 100%)' }}
                          className={`absolute inset-0 cursor-pointer transition-all duration-300 ease-out ${
                            hoveredPnrTrack === 2
                              ? 'z-20 translate-x-1.5 translate-y-1.5 scale-[1.035]'
                              : selectedPnrTrack === 2 && hoveredPnrTrack === null
                              ? 'z-15 translate-x-1 translate-y-1 scale-[1.02]'
                              : 'z-10'
                          }`}
                          title="02 Dancing Between Sets"
                        >
                          <img
                            src={track.coverUrl}
                            alt="02 Dancing Between Sets"
                            className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
                              hoveredPnrTrack === 2
                                ? 'brightness-125 contrast-110 saturate-125'
                                : selectedPnrTrack === 2 && hoveredPnrTrack === null
                                ? 'brightness-115 saturate-115'
                                : 'opacity-0'
                            }`}
                          />
                          {(hoveredPnrTrack === 2 || (selectedPnrTrack === 2 && hoveredPnrTrack === null)) && (
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(255,106,0,0.28)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
                          )}
                        </div>

                        {/* Playable Spotify Button Overlay when Track 01 or Track 02 is selected */}
                        {selectedPnrTrack !== null && (
                          <div 
                            className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/35 pointer-events-none transition-opacity duration-300"
                          >
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlayingTrackId(PNR_SUBTRACKS[selectedPnrTrack].id);
                              }}
                              className={`pointer-events-auto group/play flex items-center gap-3 px-5 py-3.5 rounded-full font-display font-bold uppercase tracking-wider text-sm shadow-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-105 cursor-pointer ${
                                selectedPnrTrack === 1
                                  ? 'bg-[#00A3FF] text-black shadow-[0_0_35px_rgba(0,163,255,0.6)]'
                                  : 'bg-cyzborg-orange text-white shadow-[0_0_35px_rgba(184,115,51,0.6)]'
                              }`}
                            >
                              <FaSpotify className="text-2xl shrink-0" />
                              <span>Play Track 0{selectedPnrTrack}</span>
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        <img loading="lazy" decoding="async" src={track.coverUrl} alt={track.titleText} className="w-full h-full object-cover pointer-events-none" />
                        {!isActive && (
                          <div className="absolute inset-0 bg-white/50 dark:bg-black/50 group-hover:bg-white/30 dark:bg-black/30 transition-colors duration-300"></div>
                        )}
                        {isActive && track.embedUrl !== '' && (
                          <div 
                            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 bg-white/40 dark:bg-black/40"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingTrackId(track.id);
                            }}
                          >
                            <div className="w-16 h-16 bg-cyzborg-orange/90 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,75,0,0.4)] backdrop-blur-sm transform transition-transform duration-300 hover:scale-110">
                              <svg className="w-8 h-8 text-black dark:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>

    {/* CULT CLASSIC SECTION */}
    <section className="pt-8 pb-3 lg:pt-12 lg:pb-6 bg-neutral-100 dark:bg-[#0a0a0a] relative border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none z-0"></div>
      
      {/* Background Collage */}
      <img src="https://helmet-with-logo.netlify.app/cyzborg-collage.png" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-20 grayscale-[0.8] mix-blend-luminosity pointer-events-none z-0" alt="CYZBORG Collage Background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Fan Favorite Title - Mobile & Tablet Vertical */}
        <div className="w-full mb-2 lg:hidden text-center md:text-left">
          <h3 style={{ fontFamily: '"Rubik Glitch", system-ui', textShadow: '0 0 1.5px #FF5500, 0 0 1px #FF5500' }} className="text-4xl sm:text-5xl md:text-6xl text-cyzborg-orange tracking-wider inline-block">
            FAN FAVORITE
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-start md:items-center lg:items-start">
        
        {/* Title & Info */}
        <div className="flex flex-col items-center md:items-start lg:pr-4 order-2 md:order-1 relative min-w-0 mt-0 md:mt-0">
          <h3 style={{ fontFamily: '"Rubik Glitch", system-ui', textShadow: '0 0 1.5px #FF5500, 0 0 1px #FF5500' }} className="hidden lg:block text-4xl sm:text-5xl md:text-6xl text-cyzborg-orange mb-2 tracking-wider">
            FAN FAVORITE
          </h3>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white uppercase leading-[0.9] mb-4 tracking-tighter drop-shadow-md text-center md:text-left">
            MY BODY<br />
            <span className="text-neutral-500 dark:text-neutral-400">FUCKING</span><br />
            HATES ME
          </h2>
          
          <div className="font-sans text-neutral-600 dark:text-[#A6A6A6] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl lg:leading-relaxed tracking-wide max-w-xl md:max-w-2xl lg:max-w-full mx-auto lg:mx-0 mb-3 lg:mb-4 drop-shadow-sm text-center md:text-left">
            <p>
              The first remastered sonic weapon from the CYZBORG system. Brutal, relentless, and engineered for the hardest training sessions.
            </p>
          </div>
          
          <div className="flex relative flex-col items-center lg:items-start border-l-0 lg:border-l-2 border-neutral-200 dark:border-neutral-800 pl-0 lg:pl-5 shrink-0 w-full lg:w-auto">
            <div className="hidden lg:block absolute -left-[2px] top-0 w-[2px] h-8 bg-cyzborg-orange"></div>
            
            <div className="font-display text-[13px] sm:text-[15px] md:text-base lg:text-[16px] xl:text-[17px] 2xl:text-[19px] font-black text-black dark:text-white uppercase tracking-wider flex flex-col lg:flex-row lg:flex-nowrap items-center lg:items-center gap-y-3 lg:gap-y-0 gap-x-0 lg:gap-x-3 xl:gap-x-3 2xl:gap-x-4 pb-1 mt-0 lg:-mt-1">
              <a 
                href="https://open.spotify.com/album/2fRmqckKwmi9PT6njHrhb7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center whitespace-nowrap text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange pb-0.5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FaSpotify className="mr-2 text-2xl md:text-2xl lg:text-2xl xl:text-3xl shrink-0" /> Spotify
              </a>
              <span className="hidden lg:inline-block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0 transform translate-y-[4px]">•</span>
              <a 
                href="https://music.youtube.com/watch?v=f3BG_CWdcIs&list=OLAK5uy_k3GSHs1_Sr2D1daHRzz9CD5xgefQWxu64" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center whitespace-nowrap text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange pb-0.5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FaYoutube className="mr-2 text-2xl md:text-2xl lg:text-2xl xl:text-3xl shrink-0" /> YouTube Music
              </a>
              <span className="hidden lg:inline-block text-black dark:text-cyzborg-blue font-bold opacity-70 text-sm shrink-0 transform translate-y-[4px]">•</span>
              <a 
                href="https://music.apple.com/us/album/my-body-f-g-hates-me-single/6780128308" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center whitespace-nowrap text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-cyzborg-orange pb-0.5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyzborg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FaApple className="mr-2 text-2xl md:text-2xl lg:text-2xl xl:text-3xl shrink-0" /> Apple Music
              </a>
            </div>
          </div>
        </div>
        
        {/* Album Cover wrapper */}
        <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[600px] mx-auto order-1 md:order-2 min-w-0 flex justify-center items-center lg:items-start mt-4 md:mt-0">
          
          <div className="relative w-[80%] sm:w-[90%] md:w-full max-w-[400px] aspect-square border border-neutral-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-white dark:bg-black overflow-hidden group/album z-20 transition-all duration-500 hover:scale-[1.02] lg:-mt-0 lg:mb-0 mb-2 md:mb-0">
            
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
                  className="w-full h-full object-cover absolute inset-0 z-10 pointer-events-none brightness-110" 
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
    </section>
  </>);
};

export default Soundtrack;
