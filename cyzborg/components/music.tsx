"use client";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronRight, ChevronDown, Play, AudioLines } from "lucide-react";
import { siSpotify, siApplemusic, siYoutubemusic } from "simple-icons";
import { useAudioDock } from "@/components/audio-dock";
import catalog from "@/app/music-data.json";

type Links = {spotifyUrl:string;youtubeUrl:string;appleUrl:string};
type Track = Links & {id:string;number:string;name:string;embedUrl:string};
type Release = Links & {id:string;titleText:string;coverUrl:string;embedUrl:string;description:string[];label?:string;type?:string};

const PLATFORMS=[
  {key:"spotifyUrl",name:"Spotify",icon:siSpotify,color:"#1ED760"},
  {key:"appleUrl",name:"Apple Music",icon:siApplemusic,color:"#FA243C"},
  {key:"youtubeUrl",name:"YouTube Music",icon:siYoutubemusic,color:"#FF3B3B"},
] as const;
const hasLink=(u?:string)=>!!u&&u!=="#";
const releases=catalog.albums as Release[];
const PHONE="(max-width: 767px)";

// Every release is described the same way: a type line and a tracklist (singles have one track).
function tracksOf(r:Release):Track[]{
  if(r.id==="pnr")return catalog.tracks as Track[];
  return [{id:r.id,number:"01",name:r.titleText,embedUrl:r.embedUrl,spotifyUrl:r.spotifyUrl,appleUrl:r.appleUrl,youtubeUrl:r.youtubeUrl}];
}
function typeOf(r:Release){
  if(r.type)return r.type;
  if(r.id==="pnr")return "Two-track release";
  return r.embedUrl.includes("/album/")?"Album":"Single";
}

function PlatformIcons({links,label}:{links:Links;label:string}){
  const list=PLATFORMS.filter(p=>hasLink(links[p.key]));
  if(!list.length)return null;
  return <div className="rp-platforms">{list.map(p=><a key={p.name} href={links[p.key]} target="_blank" rel="noreferrer" style={{"--platform":p.color} as CSSProperties} aria-label={`${label} on ${p.name} (opens in a new tab)`} title={p.name}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={p.icon.path}/></svg></a>)}</div>;
}

function Description({release}:{release:Release}){
  const [lead,...rest]=release.description;
  const leadIsTagline=release.description.length>1&&lead===lead.toUpperCase();
  return <div className="rp-desc">{leadIsTagline?<><p className="rp-tagline">{lead}</p>{rest.map((p,i)=><p key={i}>{p}</p>)}</>:release.description.map((p,i)=><p key={i}>{p}</p>)}</div>;
}

function Tracklist({release}:{release:Release}){
  const dock=useAudioDock();
  return <ol className="rp-tracks" aria-label={`${release.titleText} tracklist`}>
    {tracksOf(release).map(t=>{const on=dock.current?.id===t.id;return <li key={t.id} className={`rp-track ${on?"is-playing":""}`}>
      <span className="rp-track-no" aria-hidden="true">{on?<AudioLines size={16}/>:t.number}</span>
      <span className="rp-track-name">{t.name}</span>
      <PlatformIcons links={t} label={t.name}/>
      {t.embedUrl&&<button className="rp-track-play" onClick={()=>dock.play({id:t.id,title:t.name,embedUrl:t.embedUrl})} aria-label={on?`${t.name} is in the audio player`:`Play ${t.name}`}><Play size={14} fill="currentColor"/><span>{on?"Playing":"Play"}</span></button>}
    </li>;})}
  </ol>;
}

function ReleasePanel({release,meta,id,labelledBy,active=true}:{release:Release;meta:string;id?:string;labelledBy?:string;active?:boolean}){
  const dock=useAudioDock();
  const tracks=tracksOf(release);
  const firstPlayable=tracks.find(t=>t.embedUrl);
  const releasePlaying=tracks.some(t=>dock.current?.id===t.id);
  return <article className={`rp ${active?"is-active is-current":""}`} id={id} role={id?"tabpanel":undefined} aria-labelledby={labelledBy} aria-hidden={!active||undefined} inert={!active||undefined}>
    <div className="rp-art">
      <img src={release.coverUrl} alt={`${release.titleText} cover art`} loading="lazy"/>
      {firstPlayable&&<button className={`rp-cover-play ${releasePlaying?"is-playing":""}`} onClick={()=>dock.play({id:firstPlayable.id,title:firstPlayable.name,embedUrl:firstPlayable.embedUrl})} aria-label={releasePlaying?`${release.titleText} is in the audio player`:`Play ${release.titleText}`}>{releasePlaying?<AudioLines size={22}/>:<Play size={22} fill="currentColor"/>}</button>}
    </div>
    <div className="rp-info">
      <div className="rp-head"><p className="rp-meta">{meta}</p><h3 className="rp-title">{release.titleText}</h3></div>
      <Description release={release}/>
      <Tracklist release={release}/>
    </div>
  </article>;
}

// Phones: the open release sits in a boxed card; earlier releases live in one expandable group.
// Only one release is open at a time, the new release included.
function PhoneCard({release,isNew,onClose}:{release:Release;isNew:boolean;onClose:()=>void}){
  return <div className="pc" id={`rl-body-${release.id}`}>
    <img className="rb-bg" src={release.coverUrl} alt=""/>
    <button className="pc-head" aria-expanded="true" onClick={onClose}>
      <img className="pc-cover" src={release.coverUrl} alt={`${release.titleText} cover art`}/>
      <span className="rl-text"><span className="rp-meta">{isNew&&<span className="rl-new">NEW</span>}{release.label?release.label.replace(/^NEW RELEASE\s*[•·]\s*/i,""):typeOf(release)}</span><span className="pc-title">{release.titleText}</span></span>
      <ChevronDown className="rl-chev" size={22} aria-hidden="true"/>
    </button>
    <Description release={release}/>
    <Tracklist release={release}/>
  </div>;
}
function PhoneRow({release,isNew,onOpen}:{release:Release;isNew:boolean;onOpen:()=>void}){
  return <button className="rl-row" aria-expanded="false" aria-controls={`rl-body-${release.id}`} onClick={onOpen}>
    <img className="rl-cover" src={release.coverUrl} alt="" loading="lazy"/>
    <span className="rl-text"><span className="rl-name">{release.titleText}</span><span className="rl-type">{isNew&&<span className="rl-new">NEW</span>}{typeOf(release)}</span></span>
    <ChevronDown className="rl-chev" size={22} aria-hidden="true"/>
  </button>;
}
function ReleaseList(){
  const [open,setOpen]=useState(0);
  const [showOlder,setShowOlder]=useState(false);
  const items=useRef<(HTMLElement|null)[]>([]);
  const anchor=useRef<{i:number;top:number}|null>(null);
  function choose(i:number){
    const el=items.current[i];
    anchor.current=el?{i,top:el.getBoundingClientRect().top}:null;
    setOpen(o=>o===i?-1:i);
  }
  // Keep the tapped release where the finger was, even when one above it closes.
  useLayoutEffect(()=>{
    const a=anchor.current;anchor.current=null;if(!a)return;
    const el=items.current[a.i];if(!el)return;
    const shift=el.getBoundingClientRect().top-a.top;
    if(Math.abs(shift)>1)window.scrollBy({top:shift,behavior:"instant" as ScrollBehavior});
  },[open]);
  const [latest,...older]=releases;
  const item=(r:Release,i:number)=><div key={r.id} ref={el=>{items.current[i]=el;}} className="rl-slot">
    {open===i?<PhoneCard release={r} isNew={i===0} onClose={()=>choose(i)}/>:<PhoneRow release={r} isNew={i===0} onOpen={()=>choose(i)}/>}
  </div>;
  return <div className="rl-wrap">
    {item(latest,0)}
    <div className={`rl-archive ${showOlder?"is-open":""}`}>
      <button className="rl-archive-toggle" aria-expanded={showOlder} aria-controls="rl-older" onClick={()=>{setShowOlder(v=>!v);if(showOlder&&open>0)setOpen(-1);}}>
        <span className="rl-stack" aria-hidden="true">{older.slice(0,4).map(r=><img key={r.id} src={r.coverUrl} alt="" loading="lazy"/>)}</span>
        <span className="rl-text"><span className="rl-name">Earlier releases</span><span className="rl-type">{older.length} releases</span></span>
        <ChevronDown className="rl-chev" size={22} aria-hidden="true"/>
      </button>
      {showOlder&&<div className="rl-older" id="rl-older" role="group" aria-label="Earlier CYZBORG releases">{older.map((r,i)=>item(r,i+1))}</div>}
    </div>
  </div>;
}

// Tablets: featured release card beside a scrollable list of every release.
function ReleaseBoard(){
  const [sel,setSel]=useState(0);
  return <div className="rb">
    {/* Every release is laid out in the same cell, so the card is always as tall as the tallest one (PSYCHOTIC Dancing) and never changes size. */}
    <div className="rb-stack">
      {releases.map((x,i)=><article className={`rb-feature ${i===sel?"is-on":""}`} key={x.id} aria-hidden={i!==sel||undefined} inert={i!==sel||undefined}>
        <img className="rb-bg" src={x.coverUrl} alt=""/>
        <div className="rb-copy">
          <p className="rp-meta">{x.label||typeOf(x)}</p>
          <h3 className="rb-title">{x.titleText}</h3>
          <p className="rb-desc">{x.description.join(" ")}</p>
          <Tracklist release={x}/>
        </div>
        <img className="rb-cover" src={x.coverUrl} alt={`${x.titleText} cover art`}/>
      </article>)}
    </div>
    <ul className="rb-list" aria-label="All releases">
      {releases.map((x,i)=><li key={x.id}><button className={i===sel?"is-on":""} aria-pressed={i===sel} onClick={()=>setSel(i)}>
        <span className="rb-no" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><img src={x.coverUrl} alt="" loading="lazy"/><span><strong>{x.titleText}</strong><small>{i===0?"New · ":""}{typeOf(x)}</small></span><ChevronRight size={18} aria-hidden="true"/>
      </button></li>)}
    </ul>
  </div>;
}

export default function Music(){
  const [phone,setPhone]=useState(false);
  useEffect(()=>{const m=window.matchMedia(PHONE);const u=()=>setPhone(m.matches);u();m.addEventListener("change",u);return()=>m.removeEventListener("change",u);},[]);
  const count=releases.length;
  return <>
    <section id="music" className="music-catalog section-block">
      <img className="music-brand-art" src="/detailed-helmet.svg" alt="" aria-hidden="true" loading="lazy"/>
      <div className="shell">
        <header className="audio-head">
          <h2>AUDIO</h2>
          <p>{count} releases <span aria-hidden="true">/</span> Now streaming<span className="audio-head-long"> on major platforms</span></p>
        </header>
        {phone?<ReleaseList/>:<ReleaseBoard/>}
      </div>
    </section>
    <section className="fan-favorite section-block" id="fan-favorite"><div className="shell">
      <ReleasePanel release={catalog.fanFavorite as Release} meta={`Fan favorite / ${typeOf(catalog.fanFavorite as Release)}`}/>
    </div></section>
  </>;
}
