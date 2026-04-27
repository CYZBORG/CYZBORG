import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Play, Square, ChevronUp, ChevronDown, Radio, X } from 'lucide-react';

const MediaWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      <div 
        className={`bg-neutral-900 border border-neutral-800 p-1 shadow-2xl origin-bottom-left transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none absolute bottom-full mb-2'
        }`}
      >
        <div className="bg-black w-[280px] h-[157px] sm:w-[320px] sm:h-[180px] relative">
          <ReactPlayer
            url="https://www.youtube.com/playlist?list=PLUJrU0jNUfTZBjLYhboB3dDGZj32MFa-K"
            playing={isPlaying}
            controls={true}
            width="100%"
            height="100%"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            config={{
              youtube: {
                playerVars: { 
                  modestbranding: 1, 
                  playsinline: 1,
                  listType: 'playlist',
                  list: 'PLUJrU0jNUfTZBjLYhboB3dDGZj32MFa-K'
                }
              }
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-3 bg-black/90 backdrop-blur-md border border-neutral-800 hover:border-cyzborg-orange/50 px-4 py-2 hover:bg-neutral-900 transition-all duration-300"
        >
          <Radio className={`w-4 h-4 ${isPlaying ? 'text-cyzborg-orange animate-pulse' : 'text-neutral-500'}`} />
          
          <div className="flex flex-col items-start pr-4 border-r border-neutral-800">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-none mb-1">
              {isPlaying ? 'NOW PLAYING' : 'OFFICIAL AUDIO'}
            </span>
            <span className="font-display text-xs uppercase text-white tracking-wider">
              CYZBORG Music
            </span>
          </div>

          <div className="pl-1 text-neutral-500 group-hover:text-white transition-colors">
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </div>
        </button>

        {!isOpen && (
          <button 
            onClick={() => setIsDismissed(true)}
            className="p-2 bg-black/90 backdrop-blur-md border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaWidget;
