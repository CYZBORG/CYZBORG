"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import ShirtVote from "@/components/shirt-vote";
export type Shirt = {name:string;color:string;front:string;back:string};
// Split viewer: the garment on the left, details, side switch and vote on the right.
export default function ProductViewer({product,lead="front",onClose}:{product:Shirt;lead?:"front"|"back";onClose:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 const [side,setSide]=useState<"front"|"back">(lead);
 useEffect(()=>{const el=dialog.current;const prior=document.body.style.overflow;document.body.style.overflow="hidden";el?.showModal();return ()=>{document.body.style.overflow=prior;};},[]);
 return <dialog ref={dialog} className="shirt-viewer" onClose={onClose} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}} aria-labelledby="shirt-view-title">
  <div className="sv-stage">{(["front","back"] as const).map(s=><img key={s} src={`/${product[s]}`} alt={`${product.name}, ${product.color}, ${s}`} className={side===s?"is-on":""} aria-hidden={side!==s}/>)}</div>
  <div className="sv-side">
   <button className="viewer-close sv-close" onClick={()=>dialog.current?.close()} aria-label="Close shirt viewer"><X/></button>
   <p className="sv-tag">CONCEPT MOCKUP</p>
   <h2 id="shirt-view-title">{product.name}</h2>
   <p className="sv-color">{product.color}</p>
   <div className="sv-switch" role="group" aria-label="Side">{(["front","back"] as const).map(s=><button key={s} aria-pressed={side===s} onClick={()=>setSide(s)}>{s.toUpperCase()}</button>)}</div>
   <p className="sv-note">Final fabrics, fit, sizing, pricing and availability have not been announced.</p>
   <ShirtVote productId={product.front.replace(/\.png$/, "")} name={`${product.name} (${product.color})`}/>
  </div>
 </dialog>;
}
