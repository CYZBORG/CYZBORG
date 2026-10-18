"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import BrandHelp from "@/components/brand-help";

const EXIT_MS=240;

// Shared floating header. On the home page links jump to sections; on other pages they go back home first.
export default function SiteHeader({onHome=true,current}:{onHome?:boolean;current?:"calculator"}){
  const [menu,setMenu]=useState(false),[closing,setClosing]=useState(false),[scrolled,setScrolled]=useState(false),[help,setHelp]=useState(false);
  const trigger=useRef<HTMLButtonElement>(null),closeBtn=useRef<HTMLButtonElement>(null),timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const base=onHome?"":"/";
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>2);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update);},[]);

  function open(){if(timer.current)clearTimeout(timer.current);setClosing(false);setMenu(true);}
  function close(returnFocus=true){
    if(!menu)return;
    const done=()=>{setMenu(false);setClosing(false);if(returnFocus)trigger.current?.focus();};
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return done();
    setClosing(true);timer.current=setTimeout(done,EXIT_MS);
  }
  // While the drawer is open: lock page scroll, close on Escape, keep Tab inside the drawer.
  useEffect(()=>{
    if(!menu)return;
    const prior=document.body.style.overflow;document.body.style.overflow="hidden";
    closeBtn.current?.focus();
    const key=(e:KeyboardEvent)=>{
      if(e.key==="Escape")close();
      if(e.key==="Tab"){const items=[...document.querySelectorAll<HTMLElement>(".drawer a,.drawer button")];if(!items.length)return;const first=items[0],last=items[items.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
    };
    document.addEventListener("keydown",key);
    return()=>{document.body.style.overflow=prior;document.removeEventListener("keydown",key);};
  },[menu]);// eslint-disable-line react-hooks/exhaustive-deps
  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);

  const nav=[["LAUNCH",`${base}#apparel`],["AUDIO",`${base}#music`],["SYSTEM",`${base}#mission`],["CALCULATOR","/calculator"],["SOCIALS",`${base}#join`]] as const;
  const home=onHome?"#top":"/";
  return <>
    <header className={`site-header ${scrolled?"is-scrolled":""}`}><div className="shell header-inner">
      <a className="brand header-wordmark" href={home} aria-label="CYZBORG home"><img className="wordmark" src="/wordmark-tight.svg" alt="CYZBORG" /></a>
      <a className="header-helmet" href={home} aria-label="CYZBORG home"><img src="/helmet.svg" alt="" width={226} height={308}/></a>
      {!onHome?<a className="header-home" href="/"><ArrowLeft size={18} aria-hidden="true"/><span><span className="header-home-long">BACK TO </span>HOME</span></a>:<>
      <nav className="desktop-nav" aria-label="Primary">
        <span className="nav-coming">SHOP <small>SOON</small></span><span className="nav-coming">ORIGIN <small>SOON</small></span>
        {nav.map(([l,h])=><a key={l} href={h} aria-current={l==="CALCULATOR"&&current==="calculator"?"page":undefined}>{l}</a>)}
      </nav>
      <button className="header-cta" onClick={()=>setHelp(true)}>SHARE YOUR INPUT</button>
      <button ref={trigger} className="menu-button" onClick={open} aria-label="Open menu" aria-expanded={menu} aria-controls="site-drawer"><Menu/></button></>}
    </div></header>

    {menu&&<div className={`drawer-root ${closing?"is-closing":""}`}>
      <div className="drawer-backdrop" onClick={()=>close()} aria-hidden="true"/>
      <nav className="drawer" id="site-drawer" aria-label="Menu" role="dialog" aria-modal="true">
        <div className="drawer-top">
          <a href={home} onClick={()=>close(false)} aria-label="CYZBORG home"><img className="drawer-word" src="/wordmark-tight.svg" alt="CYZBORG"/></a>
          <button ref={closeBtn} className="drawer-close" onClick={()=>close()} aria-label="Close menu"><X size={26}/></button>
        </div>
        <div className="drawer-mark" aria-hidden="true"><img src="/helmet.svg" alt=""/></div>
        <ul className="drawer-links">
          <li><span className="drawer-soon">Shop <small>SOON</small></span></li>
          <li><span className="drawer-soon">Origin <small>SOON</small></span></li>
          {nav.map(([l,h])=><li key={l}><a href={h} onClick={()=>close(false)} aria-current={l==="CALCULATOR"&&current==="calculator"?"page":undefined}>{l[0]+l.slice(1).toLowerCase()}</a></li>)}
        </ul>
        <button className="drawer-cta" onClick={()=>{close(false);setHelp(true);}}>Share your input</button>
      </nav>
    </div>}
    {help&&<BrandHelp onClose={()=>setHelp(false)}/>}
  </>;
}
