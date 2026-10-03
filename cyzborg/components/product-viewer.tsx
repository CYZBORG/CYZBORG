"use client";
import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, ArrowLeft } from "lucide-react";
export type Shirt = {name:string;color:string;front:string;back:string};
export default function ProductViewer({product,onClose}:{product:Shirt;onClose:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 const [side,setSide]=useState<"front"|"back"|null>(null);
 useEffect(()=>{const el=dialog.current;const prior=document.body.style.overflow;document.body.style.overflow="hidden";el?.showModal();return ()=>{document.body.style.overflow=prior;};},[]);
 return <dialog ref={dialog} className={`shirt-dialog ${side?"is-inspecting":""}`} onClose={onClose} onCancel={e=>{if(side){e.preventDefault();setSide(null);}}} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}} aria-labelledby="shirt-view-title">
 <header className="viewer-header"><div>{side&&<button className="viewer-back" onClick={()=>setSide(null)}><ArrowLeft size={18}/> Front &amp; back</button>}<h2 id="shirt-view-title">{product.name}</h2><p>{product.color}{side?` · ${side.toUpperCase()}`:" · CONCEPT MOCKUP"}</p></div><button className="viewer-close" onClick={()=>dialog.current?.close()} aria-label="Close shirt viewer"><X/></button></header>
 {side?<div className="shirt-inspect"><img src={`/${product[side]}`} alt={`${product.name} ${side}, ${product.color}`}/><div className="inspect-switch"><button aria-pressed={side==="front"} onClick={()=>setSide("front")}>FRONT</button><button aria-pressed={side==="back"} onClick={()=>setSide("back")}>BACK</button></div></div>:<><p className="viewer-hint">Choose a side to inspect it at full screen size.</p><div className="shirt-pair">{(["front","back"] as const).map(s=><button key={s} onClick={()=>setSide(s)} aria-label={`Inspect ${s} of ${product.name}`}><img src={`/${product[s]}`} alt={`${product.name} ${s}, ${product.color}`}/><span>{s.toUpperCase()} <ZoomIn size={18}/></span></button>)}</div></>}
 </dialog>;
}
