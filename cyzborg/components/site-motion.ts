"use client";
import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXPO = "expo.out";
const BOOTED = "cyzborg-booted";

// Everything is visible by default. Motion only hides content after this script runs,
// so a failed script never leaves the page blank.
export function useSiteMotion(root:RefObject<HTMLElement|null>){
  useLayoutEffect(()=>{
    if(!root.current)return;
    const ctx=gsap.context(()=>{
      const mm=gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)",()=>{
        const stopBoot=heroBoot();
        heroDepth();
        choreography();
        const stopRail=systemRail(false);
        return ()=>{stopBoot?.();stopRail?.();};
      });
      // Reduced motion: no movement, but the System pillars still switch on as you reach them.
      mm.add("(prefers-reduced-motion: reduce)",()=>systemRail(true));
    },root);
    return ()=>ctx.revert();
  },[root]);
}

// Focal moment: a scan line crosses the campaign, bringing the photo into focus
// and uncovering the official slogan artwork as it passes. Once per visit.
function heroBoot(){
  let seen=false;
  try{seen=sessionStorage.getItem(BOOTED)==="1";}catch{}
  if(seen)return;
  const scan=document.querySelector<HTMLElement>(".hero-scan");
  if(!scan)return;
  const tl=gsap.timeline({defaults:{ease:EXPO},onComplete:()=>{try{sessionStorage.setItem(BOOTED,"1");}catch{}}});
  tl.set(scan,{opacity:1,xPercent:0,left:"0%"})
    .fromTo(".hero-photo",{filter:"brightness(0.35) blur(10px)",scale:1.04},{filter:"brightness(1) blur(0px)",scale:1,duration:1.3,ease:"power2.inOut",clearProps:"filter,scale"},0)
    .fromTo(scan,{left:"0%"},{left:"100%",duration:1.1,ease:"power2.inOut"},0.1)
    .from(".hero-artwork",{clipPath:"inset(0 100% 0 0)",duration:0.9,ease:"power2.inOut"},0.15)
    .to(scan,{opacity:0,duration:0.3},1.05)
    .from([".hero-tagline",".hero-actions",".release-note"],{y:18,opacity:0,duration:0.7,stagger:0.08},0.75)
    .set(".hero-artwork",{clearProps:"clipPath"});
  // If frames stall (background tab, throttled device), never leave the hero dark.
  const failsafe=setTimeout(()=>{if(tl.progress()<1)tl.progress(1);},2600);
  return ()=>clearTimeout(failsafe);
}

// Scrolling away from the hero: the campaign drifts slower than the copy.
function heroDepth(){
  const hero=document.querySelector(".hero");
  if(!hero)return;
  const scroll={trigger:hero,start:"top top",end:"bottom top",scrub:true};
  gsap.to(".hero-photo",{yPercent:8,ease:"none",scrollTrigger:scroll});
  gsap.to(".hero-copy",{yPercent:-18,opacity:.25,ease:"none",scrollTrigger:scroll});
}

// Lists arrive as lists; each surface gets its own material, not one shared fade.
function choreography(){
  gsap.from(".category",{clipPath:"inset(100% 0 0 0)",duration:0.9,ease:EXPO,stagger:0.1,
    scrollTrigger:{trigger:".category-grid",start:"top 98%",once:true}});

  ScrollTrigger.batch(".product",{start:"top 92%",once:true,
    onEnter:els=>gsap.fromTo(els,{y:32,opacity:0},{y:0,opacity:1,duration:0.7,ease:EXPO,stagger:{each:0.06,amount:0.3},overwrite:true})});
  gsap.set(".product",{opacity:0});

  gsap.utils.toArray<HTMLElement>(".rp-art").forEach(art=>{
    gsap.fromTo(art,{filter:"blur(12px)",scale:.94,opacity:0},{filter:"blur(0px)",scale:1,opacity:1,duration:0.9,ease:EXPO,clearProps:"filter",
      scrollTrigger:{trigger:art,start:"top 85%",once:true}});
  });

  ScrollTrigger.batch(".disco-card",{start:"top 94%",once:true,
    onEnter:els=>gsap.fromTo(els,{y:16,opacity:0},{y:0,opacity:1,duration:0.6,ease:EXPO,stagger:{each:0.04,amount:0.28},overwrite:true})});
  gsap.set(".disco-card",{opacity:0});

  ScrollTrigger.batch(".network-links > a",{start:"top 92%",once:true,
    onEnter:els=>gsap.fromTo(els,{y:20,opacity:0},{y:0,opacity:1,duration:0.6,ease:EXPO,stagger:0.05,overwrite:true})});
  gsap.set(".network-links > a",{opacity:0});
}

// Focus → Track → Learn → Adapt is a real sequence, so scroll drives it:
// the rail fills and each pillar powers up as it is reached.
function systemRail(reduced:boolean){
  const section=document.querySelector<HTMLElement>(".mission-pillars");
  if(!section)return;
  const pillars=gsap.utils.toArray<HTMLElement>(".mission-pillar",section);
  section.classList.add("system-armed");
  pillars.forEach(p=>{
    ScrollTrigger.create({trigger:p,start:"top 72%",once:true,onEnter:()=>p.classList.add("is-online")});
  });
  if(!reduced){
    gsap.fromTo(".system-rail-fill",{scaleX:0},{scaleX:1,ease:"none",
      scrollTrigger:{trigger:section,start:"top 80%",end:"bottom 70%",scrub:0.4}});
  }
  return ()=>{section.classList.remove("system-armed");pillars.forEach(p=>p.classList.remove("is-online"));};
}
