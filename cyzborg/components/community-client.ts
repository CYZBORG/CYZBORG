"use client";
export type Community={signedIn:boolean;owner:boolean;token:string;votes:{product_id:string;choice:"wear"|"pass"}[]};
let pending:Promise<Community>|null=null;
export function community():Promise<Community>{if(!pending)pending=fetch("/api/community",{cache:"no-store"}).then(async r=>{const data=await r.json() as Community & {error?:string};if(!r.ok)throw new Error(data.error||"Unable to load");return data;}).catch(e=>{pending=null;throw e;});return pending!;}
