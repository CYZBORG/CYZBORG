"use client";
import { useEffect, useState } from "react";
import { ThumbsUp, Check, LoaderCircle } from "lucide-react";
import { community, type Community } from "@/components/community-client";
export default function ShirtVote({productId,name}:{productId:string;name:string}){
 const [info,setInfo]=useState<Community|null>(null),[choice,setChoice]=useState<string|null>(null),[saving,setSaving]=useState(false),[error,setError]=useState("");
 function load(){setError("");community().then(data=>{setInfo(data);setChoice(data.votes.find(v=>v.product_id===productId)?.choice||null);}).catch(()=>setError("Voting is unavailable. Try again."));}
 useEffect(()=>{let live=true;community().then(data=>{if(live){setInfo(data);setChoice(data.votes.find(v=>v.product_id===productId)?.choice||null);}}).catch(()=>{if(live)setError("Voting is unavailable. Try again.");});return()=>{live=false;};},[productId]);
 async function vote(){
  if(saving||choice==="wear")return;setSaving(true);setError("");
  try{const r=await fetch("/api/community",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"vote",token:info?.token,productId,choice:"wear"})});const data=await r.json() as {error?:string;choice:string};if(!r.ok)throw new Error(data.error);setChoice(data.choice);}catch(e){setError(e instanceof Error?e.message:"Unable to vote. Please try again.");}finally{setSaving(false);}
 }
 return <div className="shirt-vote" aria-label={`Vote on ${name}`}><p>Would you wear it?</p>{choice==="wear"?<p className="vote-saved" role="status"><Check size={16}/>You’d wear it<span>Vote saved</span></p>:info?<div className="vote-actions"><button disabled={saving} onClick={vote}><ThumbsUp size={16}/> I’d wear it</button>{saving&&<LoaderCircle size={16} className="spin" aria-label="Saving vote"/>}</div>:!error?<p className="vote-loading">Loading voting…</p>:null}{error&&<p className="vote-error" role="alert">{error}<button onClick={load}>Retry</button></p>}</div>;
}
