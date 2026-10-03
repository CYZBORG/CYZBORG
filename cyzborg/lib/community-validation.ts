export const feedbackCategories=["Apparel & items","Fabrics & fit","Music","Videos & content","Anything else"];
export function isOwner(email:string|undefined|null,owner:string|undefined|null){return !!email&&!!owner&&email.trim().toLowerCase()===owner.trim().toLowerCase();}
export function validFeedback(body:Record<string,unknown>){
 const category=typeof body.category==="string"?body.category:"";
 const message=typeof body.message==="string"?body.message.trim():"";
 const email=typeof body.email==="string"?body.email.trim():"";
 const id=typeof body.id==="string"?body.id:"";
 if(!feedbackCategories.includes(category)||message.length<3||message.length>3000||email.length>254||(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))||! /^[a-f0-9-]{36}$/i.test(id))return null;
 return {id,category,message,email:email||null};
}
export function validVote(body:Record<string,unknown>,ids:readonly string[]){return typeof body.productId==="string"&&ids.includes(body.productId)&&body.choice==="wear";}
