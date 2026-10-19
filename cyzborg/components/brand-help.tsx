"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { X, Send, CheckCircle2, LoaderCircle } from "lucide-react";
import { community } from "@/components/community-client";

const categories = [
 {name:"Apparel & items",prompt:"What would you like us to make? Tell us the item, fit, colors, and how you’d wear or train in it.",placeholder:"A hoodie, graphic tee, shorts, or something else? What would make it your go-to piece?"},
 {name:"Fabrics & fit",prompt:"What makes apparel feel right to you? Tell us about softness, weight, stretch, breathability, and fit.",placeholder:"Do you prefer a cotton blend, a heavier tee, fitted sleeves, a relaxed cut, or another fabric or detail?"},
 {name:"Music",prompt:"What do you want to hear? Share a genre, mood, theme, or the workout you want a soundtrack for.",placeholder:"Heavy lifting, running, recovery, dark intensity, or energy between sets? Tell us your idea."},
 {name:"Videos & content",prompt:"What should our videos tell or show? Share a training scene, story, or concept you’d like to see.",placeholder:"A music video idea, an augmented-athlete story, or training content you’d watch?"},
 {name:"Anything else",prompt:"Have another idea or a question? We want to hear what would make CYZBORG better for you.",placeholder:"Share your thoughts with The CYZBORG Team…"}
];

// Share Your Input: a side sheet with topic chips, the idea, and an optional reply email.
export default function BrandHelp({onClose}:{onClose:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 const [category,setCategory]=useState(0),[suggestion,setSuggestion]=useState(""),[email,setEmail]=useState("");
 const [status,setStatus]=useState<"idle"|"saving"|"success"|"error">("idle"),[error,setError]=useState("");
 const submissionId=useRef("");
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();if(status==="saving")return;setStatus("saving");setError("");
  if(!submissionId.current)submissionId.current=crypto.randomUUID();
  try{const info=await community();const response=await fetch("/api/community",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"feedback",token:info.token,id:submissionId.current,category:categories[category].name,message:suggestion,email})});const data=await response.json() as {error?:string};if(!response.ok)throw new Error(data.error||"Unable to send");setStatus("success");}catch(e){setStatus("error");setError(e instanceof Error?e.message:"We couldn’t save your idea. Please try again.");}
 }
 useEffect(()=>{dialog.current?.showModal();const prior=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=prior;};},[]);
 const reset=()=>{setStatus("idle");setSuggestion("");setEmail("");submissionId.current="";};
 return <dialog ref={dialog} className="input-sheet" onClose={onClose} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}} aria-labelledby="help-title">
  <div className="is-inner">
   <header className="is-head"><div><h2 id="help-title">SHARE YOUR INPUT</h2><p>With The CYZBORG Team</p></div><button onClick={()=>dialog.current?.close()} aria-label="Close"><X size={24}/></button></header>
   {status==="success"?<div className="is-done" role="status"><CheckCircle2 size={40}/><h3>IDEA RECEIVED.</h3><p>Thanks for helping shape CYZBORG. Your message is saved for The CYZBORG Team to review.</p><button className="is-submit" onClick={reset}>SHARE ANOTHER IDEA</button></div>
   :<form onSubmit={submit}>
    <fieldset className="is-chips"><legend>TOPIC</legend>{categories.map((c,i)=><button type="button" key={c.name} aria-pressed={category===i} disabled={status==="saving"} onClick={()=>setCategory(i)}>{c.name}</button>)}</fieldset>
    <label htmlFor="brand-suggestion">YOUR IDEA</label>
    <p className="is-hint" id="suggestion-prompt">{categories[category].prompt}</p>
    <textarea required minLength={3} disabled={status==="saving"} id="brand-suggestion" value={suggestion} onChange={e=>setSuggestion(e.target.value)} maxLength={3000} rows={5} placeholder={categories[category].placeholder} aria-describedby="suggestion-prompt"/>
    <label htmlFor="suggestion-email">REPLY EMAIL (OPTIONAL)</label>
    <input disabled={status==="saving"} id="suggestion-email" type="email" value={email} onChange={e=>setEmail(e.target.value)} maxLength={254} autoComplete="email" aria-describedby="suggestion-email-note"/>
    <p id="suggestion-email-note" className="is-hint">Only used to reply to you. See our <a href="/privacy" target="_blank">Privacy Policy</a>.</p>
    {status==="error"&&<p className="form-error" role="alert">{error}</p>}
    <button className="is-submit" type="submit" disabled={status==="saving"||suggestion.trim().length<3}>{status==="saving"?<><LoaderCircle size={18} className="spin"/> SENDING</>:<><Send size={18}/> SEND TO THE CYZBORG TEAM</>}</button>
    <p className="is-hint">Suggestions help guide us. They aren’t a promise that an item or song will be released.</p>
   </form>}
  </div>
 </dialog>;
}
