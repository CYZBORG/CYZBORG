"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import catalog from "@/app/music-data.json";

type Audio = {id:string; spotifyUrl:string; youtubeUrl:string; appleUrl:string; embedUrl:string; description:string[]};
type Release = Audio & {titleText:string;coverUrl:string;label?:string};
function Platforms({audio,onPlay}:{audio:Audio;onPlay?:()=>void}) {
  return <div className="streaming-links"><p>Now streaming on major platforms:</p><div className="platforms">{[["Spotify",audio.spotifyUrl],["Apple Music",audio.appleUrl],["YouTube Music",audio.youtubeUrl]].filter(([,url])=>url&&url!=="#").map(([name,url])=><a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>)}{onPlay&&<button className="button outline inline-listen" onClick={onPlay}><Play size={14} fill="currentColor"/> Play</button>}</div></div>;
}
function Player({audio,onClose}:{audio:Audio;onClose:()=>void}){return <div className="music-player"><button className="player-close" onClick={onClose} aria-label="Close music player"><X size={18}/></button><iframe title={`Spotify player for ${audio.id}`} src={audio.embedUrl} width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" /></div>;}
function ReleaseFeature({album,fan=false,active=true}:{album:Release;fan?:boolean;active?:boolean}) {
  const [track,setTrack]=useState<number|null>(null);
  const [playing,setPlaying]=useState(false);
  useEffect(()=>{if(!active){setPlaying(false);setTrack(null);}},[active]);
  const selected = album.id==="pnr" && track!==null?catalog.tracks[track]:album;
  const name = "name" in selected?selected.name:album.titleText;
  return <div className={`release-feature ${fan?"fan-feature":""} ${album.id==="pnr"?"psychotic-feature":""}`}>
    <div className="release-art">{playing&&selected.embedUrl?<Player audio={selected} onClose={()=>setPlaying(false)}/>:<><img src={album.coverUrl} alt={`${album.titleText} cover art`} loading="lazy"/>{selected.embedUrl&&<button className="cover-play" onClick={()=>setPlaying(true)} aria-label={`Listen to ${name}`}><Play size={22} fill="currentColor"/></button>}</>}</div>
    <div className="release-copy"><p className="eyebrow">{fan?"FAN FAVORITE":album.label||"AUDIO TRANSMISSION"}</p><h3>{album.id==="pnr"&&track===null?<><span className="brand-blue">PSYCHOTIC</span> <span className="brand-copper">Dancing</span></>:name}</h3><div className="release-description">{selected.description.map((p,i)=><p key={i}>{p}</p>)}</div>
      {album.id==="pnr"&&<div className="track-list" aria-label="Album tracks">{catalog.tracks.map((t,i)=><div className={`track-row ${track===i?"active":""}`} key={t.id}><button className="track-name" onClick={()=>{setTrack(i);setPlaying(false);}} aria-pressed={track===i}><span>{t.number}</span>{t.name}</button><button className="track-play" onClick={()=>{setTrack(i);setPlaying(true);}} aria-label={`Listen to ${t.name}`}><Play size={15} fill="currentColor"/> LISTEN</button></div>)}{track!==null&&<button className="text-button" onClick={()=>{setTrack(null);setPlaying(false);}}>Album Overview</button>}</div>}
      <Platforms audio={selected} onPlay={album.id==="pnr"&&track!==null&&selected.embedUrl&&!playing?()=>setPlaying(true):undefined}/>
      {!(album.id==="pnr"&&track!==null)&&selected.embedUrl&&!playing&&<button className="button outline inline-listen" onClick={()=>setPlaying(true)}><Play size={14} fill="currentColor"/> Play</button>}
    </div>
  </div>;
}
export default function Music(){
  const [index,setIndex]=useState(0);
  const [direction,setDirection]=useState("next");
  const [railIndex,setRailIndex]=useState(0);
  const [outgoing,setOutgoing]=useState<number|null>(null);
  const [moving,setMoving]=useState(false);
  const movingRef=useRef(false);
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
  const browser=useRef<HTMLDivElement>(null);
  const restoreAlbumFocus=useRef(false);
  useEffect(()=>{if(!moving&&restoreAlbumFocus.current){browser.current?.querySelector<HTMLButtonElement>(".album-option.selected")?.focus({preventScroll:true});restoreAlbumFocus.current=false;}},[index,moving]);
  function change(i:number){
    const next=(i+catalog.albums.length)%catalog.albums.length;
    if(movingRef.current||next===index)return;
    restoreAlbumFocus.current=!!document.activeElement?.classList.contains("album-option");
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setDirection(i<index?"previous":"next");
    setIndex(next);
    if(reduced){setRailIndex(next);return;}
    movingRef.current=true;setOutgoing(index);setMoving(true);
    timer.current=setTimeout(()=>{setRailIndex(next);setOutgoing(null);setMoving(false);movingRef.current=false;},480);
  }

  return <>
    <section id="music" className="music-catalog section-block"><img className="music-brand-art" src="/detailed-helmet.svg" alt="" aria-hidden="true" loading="lazy"/><div className="shell"><div className="music-heading"><div><h2>AUDIO</h2></div><div className="catalog-controls"><span>{String(index+1).padStart(2,"0")} / {String(catalog.albums.length).padStart(2,"0")}</span></div></div>
      <div className={`release-stage direction-${direction}`}>{catalog.albums.map(a=><div key={`sizer-${a.id}`} className="release-slide" aria-hidden="true" inert><ReleaseFeature album={a} active={false}/></div>)}{outgoing!==null&&<div key={`outgoing-${catalog.albums[outgoing].id}`} className="release-slide outgoing" aria-hidden="true" inert><ReleaseFeature album={catalog.albums[outgoing]} active={false}/></div>}<div key={`active-${catalog.albums[index].id}`} className="release-slide active"><ReleaseFeature album={catalog.albums[index]}/></div></div>
      <div className="album-browser"><div className="album-browser-heading"><p>ALBUMS</p><span></span></div><div ref={browser} className="album-window" onKeyDown={e=>{if(e.key==="ArrowLeft"){e.preventDefault();change(index-1);}if(e.key==="ArrowRight"){e.preventDefault();change(index+1);}}}><button className="album-arrow previous" disabled={moving} onClick={()=>change(index-1)} aria-label="Previous album"><ChevronLeft/></button><div className="album-viewport"><div className={`album-rail ${moving?`moving-${direction}`:""}`} role="group" aria-label="CYZBORG releases">{[-2,-1,0,1,2].map(offset=>{const i=(railIndex+offset+catalog.albums.length)%catalog.albums.length;const a=catalog.albums[i];return <button key={a.id} data-album-index={i} className={`album-option ${i===index?"selected":""}`} aria-pressed={i===index} disabled={moving} tabIndex={Math.abs(offset)>1?-1:0} aria-hidden={Math.abs(offset)>1} onClick={()=>change(index+(offset))}><img src={a.coverUrl} alt="" loading="lazy"/><span>{a.titleText}</span><small aria-hidden={i!==0}>{i===0?"NEW RELEASE":" "}</small></button>;})}</div></div><button className="album-arrow next" disabled={moving} onClick={()=>change(index+1)} aria-label="Next album"><ChevronRight/></button></div></div>
    </div></section>
    <section className="fan-favorite section-block" id="fan-favorite"><div className="shell"><ReleaseFeature album={catalog.fanFavorite} fan/></div></section>
  </>;
}
