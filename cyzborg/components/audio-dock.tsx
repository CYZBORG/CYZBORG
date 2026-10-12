"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";

export type DockTrack = {id:string;title:string;embedUrl:string};
type Dock = {current:DockTrack|null;play:(track:DockTrack)=>void;close:()=>void};
const DockContext = createContext<Dock>({current:null,play:()=>{},close:()=>{}});
export const useAudioDock = () => useContext(DockContext);

// One Spotify player for the whole page. It lives in a fixed dock, so music keeps playing
// while the visitor scrolls the collection. Spotify only loads after someone presses Play.
export function AudioDockProvider({children}:{children:ReactNode}){
  const [current,setCurrent]=useState<DockTrack|null>(null);
  const [leaving,setLeaving]=useState(false);
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const dockRef=useRef<HTMLDivElement>(null);
  function play(track:DockTrack){if(timer.current)clearTimeout(timer.current);setLeaving(false);setCurrent(track);}
  function close(){
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduced){setCurrent(null);return;}
    setLeaving(true);
    timer.current=setTimeout(()=>{setCurrent(null);setLeaving(false);},200);
  }
  useEffect(()=>{document.documentElement.classList.toggle("dock-open",!!current);},[current]);
  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
  return <DockContext.Provider value={{current,play,close}}>
    {children}
    {current&&<div ref={dockRef} className={`audio-dock ${leaving?"is-leaving":""}`} role="region" aria-label={`Audio player: ${current.title}`}>
      <div className="audio-dock-meta"><span className="audio-dock-status">NOW PLAYING</span><strong>{current.title}</strong></div>
      <iframe key={current.id} title={`Spotify player: ${current.title}`} src={current.embedUrl} height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
      <button className="audio-dock-close" onClick={close} aria-label="Close audio player"><X size={18}/></button>
    </div>}
  </DockContext.Provider>;
}
