"use client";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Play, AudioLines } from "lucide-react";
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
const reducedMotion=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const COMPACT="(max-width: 1023px), (pointer: coarse) and (max-width: 1366px)";

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

// Phones & tablets: the latest release is featured open; earlier releases live in one expandable group.
function ReleaseList(){
  const [latest,...older]=releases;
  const [showOlder,setShowOlder]=useState(false);
  const [open,setOpen]=useState(-1);
  const items=useRef<(HTMLLIElement|null)[]>([]);
  const anchor=useRef<{i:number;top:number}|null>(null);
  function toggle(i:number){
    const el=items.current[i];
    anchor.current=el?{i,top:el.getBoundingClientRect().top}:null;
    setOpen(o=>o===i?-1:i);
  }
  // Keep the tapped row where the finger was, even when a release above it closes.
  useLayoutEffect(()=>{
    const a=anchor.current;anchor.current=null;if(!a)return;
    const el=items.current[a.i];if(!el)return;
    const shift=el.getBoundingClientRect().top-a.top;
    if(Math.abs(shift)>1)window.scrollBy({top:shift,behavior:"instant" as ScrollBehavior});
  },[open]);
  return <div className="rl-wrap">
    <div className="rl-item rl-featured is-open">
      <div className="rl-row">
        <img className="rl-cover" src={latest.coverUrl} alt="" loading="lazy"/>
        <span className="rl-text"><span className="rl-name">{latest.titleText}</span><span className="rl-type"><span className="rl-new">NEW</span>{typeOf(latest)}</span></span>
      </div>
      <div className="rl-body"><Description release={latest}/><Tracklist release={latest}/></div>
    </div>
    <div className={`rl-archive ${showOlder?"is-open":""}`}>
      <button className="rl-archive-toggle" aria-expanded={showOlder} aria-controls="rl-older" onClick={()=>{setShowOlder(v=>!v);setOpen(-1);}}>
        <span className="rl-stack" aria-hidden="true">{older.slice(0,4).map(r=><img key={r.id} src={r.coverUrl} alt="" loading="lazy"/>)}</span>
        <span className="rl-text"><span className="rl-name">Earlier releases</span><span className="rl-type">{older.length} releases</span></span>
        <ChevronDown className="rl-chev" size={22} aria-hidden="true"/>
      </button>
      {showOlder&&<ol className="rl" id="rl-older" aria-label="Earlier CYZBORG releases">
        {older.map((r,i)=>{const isOpen=open===i;return <li key={r.id} ref={el=>{items.current[i]=el;}} className={`rl-item ${isOpen?"is-open":""}`}>
          <button className="rl-row" aria-expanded={isOpen} aria-controls={`rl-body-${r.id}`} onClick={()=>toggle(i)}>
            <img className="rl-cover" src={r.coverUrl} alt="" loading="lazy"/>
            <span className="rl-text"><span className="rl-name">{r.titleText}</span><span className="rl-type">{typeOf(r)}</span></span>
            <ChevronDown className="rl-chev" size={22} aria-hidden="true"/>
          </button>
          {isOpen&&<div className="rl-body" id={`rl-body-${r.id}`}><Description release={r}/><Tracklist release={r}/></div>}
        </li>;})}
      </ol>}
    </div>
  </div>;
}

export default function Music(){
  const [index,setIndex]=useState(0);
  const [compact,setCompact]=useState(false);
  const rail=useRef<HTMLDivElement>(null);
  const stage=useRef<HTMLDivElement>(null);
  const [edges,setEdges]=useState({start:true,end:false});
  const count=releases.length;

  useEffect(()=>{const m=window.matchMedia(COMPACT);const u=()=>setCompact(m.matches);u();m.addEventListener("change",u);return()=>m.removeEventListener("change",u);},[]);
  function updateEdges(){const el=rail.current;if(!el)return;setEdges({start:el.scrollLeft<=4,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-4});}
  useEffect(()=>{if(compact)return;updateEdges();const el=rail.current;if(!el)return;const ro=new ResizeObserver(updateEdges);ro.observe(el);return()=>ro.disconnect();},[compact]);

  // Keep the chosen cover visible in the rail without scrolling the page.
  function revealCard(i:number){
    const el=rail.current;const card=el?.querySelectorAll<HTMLElement>(".disco-card")[i];if(!el||!card)return;
    const left=card.offsetLeft-el.offsetLeft,right=left+card.offsetWidth;
    if(left<el.scrollLeft)el.scrollTo({left:left-8,behavior:reducedMotion()?"auto":"smooth"});
    else if(right>el.scrollLeft+el.clientWidth)el.scrollTo({left:right-el.clientWidth+8,behavior:reducedMotion()?"auto":"smooth"});
  }
  function select(i:number,focus=false){
    const next=(i+count)%count;
    setIndex(next);revealCard(next);
    if(focus)rail.current?.querySelectorAll<HTMLButtonElement>(".disco-card")[next]?.focus({preventScroll:true});
    // After paging from below, bring the release's top back into view.
    requestAnimationFrame(()=>{
      const el=stage.current;if(!el)return;
      const header=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||72;
      const top=el.getBoundingClientRect().top;
      if(top<header)window.scrollTo({top:top+window.scrollY-header-12,behavior:reducedMotion()?"auto":"smooth"});
    });
  }
  function onKey(e:KeyboardEvent<HTMLDivElement>){
    let next=-1;
    if(e.key==="ArrowRight")next=index+1;
    if(e.key==="ArrowLeft")next=index-1;
    if(e.key==="Home")next=0;
    if(e.key==="End")next=count-1;
    if(next!==-1){e.preventDefault();select(next,true);}
  }
  function page(dir:1|-1){const el=rail.current;if(!el)return;el.scrollBy({left:dir*el.clientWidth*.8,behavior:reducedMotion()?"auto":"smooth"});}
  const prev=releases[(index-1+count)%count],next=releases[(index+1)%count];

  return <>
    <section id="music" className="music-catalog section-block">
      <img className="music-brand-art" src="/detailed-helmet.svg" alt="" aria-hidden="true" loading="lazy"/>
      <div className="shell">
        <header className="audio-head">
          <h2>AUDIO</h2>
          <p>{count} releases <span aria-hidden="true">/</span> Now streaming on major platforms.</p>
        </header>
        {compact?<ReleaseList/>:<>
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
          <div className="rp-stage" ref={stage}>
            {/* All releases share one grid cell, so the section is always as tall as the longest one and never jumps. */}
            <div className="rp-stack">
              {releases.map((r,i)=><ReleasePanel key={r.id} release={r} meta={r.label||typeOf(r)} active={i===index} id={i===index?"release-panel":undefined} labelledBy={i===index?`disco-${r.id}`:undefined}/>)}
            </div>
            <nav className="rp-pager" aria-label="Browse releases">
              <button onClick={()=>select(index-1)} aria-label={`Previous release: ${prev.titleText}`}><ChevronLeft size={20}/><span className="rp-pager-label">Prev</span><span className="rp-pager-name">{prev.titleText}</span></button>
              <span className="rp-pager-count" aria-live="polite">{String(index+1).padStart(2,"0")} / {String(count).padStart(2,"0")}</span>
              <button onClick={()=>select(index+1)} aria-label={`Next release: ${next.titleText}`}><span className="rp-pager-name">{next.titleText}</span><span className="rp-pager-label">Next</span><ChevronRight size={20}/></button>
            </nav>
          </div>
        </>}
      </div>
    </section>
    <section className="fan-favorite section-block" id="fan-favorite"><div className="shell">
      <ReleasePanel release={catalog.fanFavorite as Release} meta={`Fan favorite / ${typeOf(catalog.fanFavorite as Release)}`}/>
    </div></section>
  </>;
}
