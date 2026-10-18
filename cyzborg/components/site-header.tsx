"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandHelp from "@/components/brand-help";

// Shared floating header. On the home page links jump to sections; on other pages they go back home first.
export default function SiteHeader({onHome=true,current}:{onHome?:boolean;current?:"calculator"}){
  const [menu,setMenu]=useState(false),[scrolled,setScrolled]=useState(false),[help,setHelp]=useState(false);
  const base=onHome?"":"/";
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>2);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update);},[]);
  useEffect(()=>{if(!menu)return;const escape=(e:KeyboardEvent)=>{if(e.key==="Escape"){setMenu(false);document.querySelector<HTMLButtonElement>(".menu-button")?.focus();}};document.addEventListener("keydown",escape);return()=>document.removeEventListener("keydown",escape);},[menu]);
  const close=()=>setMenu(false);
  const links=(mobile:boolean)=><>
    <span className="nav-coming">SHOP <small>SOON</small></span><span className="nav-coming">ORIGIN <small>SOON</small></span>
    <a href={`${base}#apparel`} onClick={mobile?close:undefined}>LAUNCH</a>
    <a href={`${base}#music`} onClick={mobile?close:undefined}>AUDIO</a>
    <a href={`${base}#mission`} onClick={mobile?close:undefined}>SYSTEM</a>
    <a href="/calculator" onClick={mobile?close:undefined} aria-current={current==="calculator"?"page":undefined}>CALCULATOR</a>
    <a href={`${base}#join`} onClick={mobile?close:undefined}>SOCIALS</a>
  </>;
  const home=onHome?"#top":"/";
  return <>
    <header className={`site-header ${scrolled||menu?"is-scrolled":""} ${menu?"is-menu-open":""}`}><div className="shell header-inner">
      <a className="brand header-wordmark" href={home} aria-label="CYZBORG home"><img className="wordmark" src="/wordmark-tight.svg" alt="CYZBORG" /></a>
      <a className="header-helmet" href={home} aria-label="CYZBORG home"><img src="/helmet.svg" alt="" width={226} height={308}/></a>
      <nav className="desktop-nav" aria-label="Primary">{links(false)}</nav>
      <button className="header-cta" onClick={()=>setHelp(true)}>SHARE YOUR INPUT</button>
      <button className="menu-button" onClick={()=>setMenu(!menu)} aria-label={menu?"Close menu":"Open menu"} aria-expanded={menu} aria-controls="mobile-menu">{menu?<X/>:<Menu/>}</button>
    </div>{menu&&<nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">{links(true)}<button className="mobile-input-cta" onClick={()=>{close();setHelp(true);}}>SHARE YOUR INPUT</button></nav>}</header>
    {help&&<BrandHelp onClose={()=>setHelp(false)}/>}
  </>;
}
