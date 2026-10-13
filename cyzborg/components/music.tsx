"use client";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, Play, AudioLines } from "lucide-react";
import { siSpotify, siApplemusic, siYoutubemusic } from "simple-icons";
import { useAudioDock } from "@/components/audio-dock";
import catalog from "@/app/music-data.json";

type Links = {spotifyUrl:string;youtubeUrl:string;appleUrl:string};
type Track = Links & {id:string;number:string;name:string;embedUrl:string;description?:string[]};
type Release = Links & {id:string;titleText:string;coverUrl:string;embedUrl:string;description:string[];label?:string};

const PLATFORMS=[
  {key:"spotifyUrl",name:"Spotify",icon:siSpotify,color:"#1ED760"},
  {key:"appleUrl",name:"Apple Music",icon:siApplemusic,color:"#FA243C"},
  {key:"youtubeUrl",name:"YouTube Music",icon:siYoutubemusic,color:"#FF3B3B"},
] as const;
const hasLink=(u?:string)=>!!u&&u!=="#";
const releases=catalog.albums as Release[];

// Every release is described the same way: a type line, a tracklist (singles have one track) and its links.
function tracksOf(r:Release):Track[]{
  if(r.id==="pnr")return catalog.tracks as Track[];
  return [{id:r.id,number:"01",name:r.titleText,embedUrl:r.embedUrl,spotifyUrl:r.spotifyUrl,appleUrl:r.appleUrl,youtubeUrl:r.youtubeUrl}];
}
function typeOf(r:Release){
  if(r.id==="pnr")return "Two-track release";
  return r.embedUrl.includes("/album/")?"Album":"Single";
}

function PlatformLinks({links,compact=false,label}:{links:Links;compact?:boolean;label:string}){
  const list=PLATFORMS.filter(p=>hasLink(links[p.key]));
  if(!list.length)return null;
  return <div className={`platforms ${compact?"platforms-compact":""}`}>{list.map(p=><a key={p.name} className="platform-link" href={links[p.key]} target="_blank" rel="noreferrer" style={{"--platform":p.color} as CSSProperties} aria-label={`${label} on ${p.name} (opens in a new tab)`}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={p.icon.path}/></svg>{!compact&&p.name}</a>)}</div>;
}

function ReleasePanel({release,meta,id,labelledBy}:{release:Release;meta:string;id?:string;labelledBy?:string}){
  const dock=useAudioDock();
  const tracks=tracksOf(release);
  const multi=tracks.length>1;
  const firstPlayable=tracks.find(t=>t.embedUrl);
  const play=(t:Track)=>dock.play({id:t.id,title:t.name,embedUrl:t.embedUrl});
  const releasePlaying=tracks.some(t=>dock.current?.id===t.id);
  const [lead,...rest]=release.description;
  const leadIsTagline=release.description.length>1&&lead===lead.toUpperCase();
  return <article className="rp" id={id} role={id?"tabpanel":undefined} aria-labelledby={labelledBy}>
    <div className="rp-art">
      <img src={release.coverUrl} alt={`${release.titleText} cover art`} loading="lazy"/>
      {firstPlayable&&<button className={`rp-cover-play ${releasePlaying?"is-playing":""}`} onClick={()=>play(firstPlayable)} aria-label={releasePlaying?`${release.titleText} is in the audio player`:`Play ${release.titleText}`}>{releasePlaying?<AudioLines size={22}/>:<Play size={22} fill="currentColor"/>}</button>}
    </div>
    <div className="rp-info">
      <p className="rp-meta">{meta}</p>
      <h3 className="rp-title">{release.titleText}</h3>
      <div className="rp-desc">
        {leadIsTagline?<><p className="rp-tagline">{lead}</p>{rest.map((p,i)=><p key={i}>{p}</p>)}</>:release.description.map((p,i)=><p key={i}>{p}</p>)}
      </div>
      <ol className="rp-tracks" aria-label={`${release.titleText} tracklist`}>
        {tracks.map(t=>{const on=dock.current?.id===t.id;return <li key={t.id} className={`rp-track ${on?"is-playing":""}`}>
          <span className="rp-track-no" aria-hidden="true">{on?<AudioLines size={16}/>:t.number}</span>
          <span className="rp-track-name">{t.name}</span>
          {multi&&<PlatformLinks links={t} compact label={t.name}/>}
          {t.embedUrl&&<button className="rp-track-play" onClick={()=>play(t)} aria-label={on?`${t.name} is in the audio player`:`Play ${t.name}`}><Play size={14} fill="currentColor"/><span>{on?"Playing":"Play"}</span></button>}
        </li>;})}
      </ol>
      {!multi&&<div className="rp-listen"><p>Listen on</p><PlatformLinks links={release} label={release.titleText}/></div>}
    </div>
  </article>;
}

export default function Music(){
  const [index,setIndex]=useState(0);
  const rail=useRef<HTMLDivElement>(null);
  const panelWrap=useRef<HTMLDivElement>(null);
  const [edges,setEdges]=useState({start:true,end:false});
  const release=releases[index];

  function updateEdges(){const el=rail.current;if(!el)return;setEdges({start:el.scrollLeft<=4,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-4});}
  useEffect(()=>{updateEdges();const el=rail.current;if(!el)return;const ro=new ResizeObserver(updateEdges);ro.observe(el);return()=>ro.disconnect();},[]);

  function select(i:number,focus=false){
    setIndex(i);
    const card=rail.current?.querySelectorAll<HTMLButtonElement>(".disco-card")[i];
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card?.scrollIntoView({block:"nearest",inline:"nearest",behavior:reduced?"auto":"smooth"});
    if(focus)card?.focus({preventScroll:true});
    // Phones: keep the details in view right after a cover is chosen.
    if(window.matchMedia("(max-width: 767px)").matches){
      requestAnimationFrame(()=>{const el=panelWrap.current;if(!el)return;const header=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||72;const top=el.getBoundingClientRect().top;if(top<header||top>window.innerHeight*.55)window.scrollTo({top:top+window.scrollY-header-12,behavior:reduced?"auto":"smooth"});});
    }
  }
  function onKey(e:KeyboardEvent<HTMLDivElement>){
    const last=releases.length-1;let next=-1;
    if(e.key==="ArrowRight")next=index===last?0:index+1;
    if(e.key==="ArrowLeft")next=index===0?last:index-1;
    if(e.key==="Home")next=0;
    if(e.key==="End")next=last;
    if(next>=0){e.preventDefault();select(next,true);}
  }
  function page(dir:1|-1){const el=rail.current;if(!el)return;const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;el.scrollBy({left:dir*el.clientWidth*.8,behavior:reduced?"auto":"smooth"});}

  return <>
    <section id="music" className="music-catalog section-block">
      <img className="music-brand-art" src="/detailed-helmet.svg" alt="" aria-hidden="true" loading="lazy"/>
      <div className="shell">
        <header className="audio-head">
          <h2>AUDIO</h2>
          <p>{releases.length} releases <span aria-hidden="true">/</span> Now streaming on major platforms.</p>
        </header>
        <div className={`disco ${edges.start?"at-start":""} ${edges.end?"at-end":""}`}>
          <button className="disco-arrow prev" onClick={()=>page(-1)} aria-label="Scroll releases left" tabIndex={-1} hidden={edges.start}><ChevronLeft/></button>
          <div className="disco-rail" ref={rail} role="tablist" aria-label="CYZBORG releases" onScroll={updateEdges} onKeyDown={onKey}>
            {releases.map((r,i)=><button key={r.id} id={`disco-${r.id}`} className={`disco-card ${i===index?"is-selected":""}`} role="tab" aria-selected={i===index} aria-controls="release-panel" tabIndex={i===index?0:-1} onClick={()=>select(i)}>
              <span className="disco-cover"><img src={r.coverUrl} alt="" loading="lazy"/>{i===0&&<span className="disco-badge">NEW</span>}</span>
              <span className="disco-name">{r.titleText}</span>
              <span className="disco-type">{typeOf(r)}</span>
            </button>)}
          </div>
          <button className="disco-arrow next" onClick={()=>page(1)} aria-label="Scroll releases right" tabIndex={-1} hidden={edges.end}><ChevronRight/></button>
        </div>
        <div className="rp-stage" ref={panelWrap}>
          <ReleasePanel key={release.id} release={release} meta={release.label||typeOf(release)} id="release-panel" labelledBy={`disco-${release.id}`}/>
        </div>
      </div>
    </section>
    <section className="fan-favorite section-block" id="fan-favorite"><div className="shell">
      <ReleasePanel release={catalog.fanFavorite as Release} meta={`Fan favorite / ${typeOf(catalog.fanFavorite as Release)}`}/>
    </div></section>
  </>;
}
