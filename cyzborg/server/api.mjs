import {createHash,createHmac,randomUUID,timingSafeEqual} from 'node:crypto';
export const productIds=['core-front','core-olive-front','z-front','mbfhm-front','fitness-front','dogs-front','psychotic-front','fyf-front','ssmc-front','muscle-front'];
const categories=['Apparel & items','Fabrics & fit','Music','Videos & content','Anything else'];
const uuid=/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
const emailOK=e=>e.length<=254&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const hash=s=>createHash('sha256').update(s).digest('hex');
const same=(a,b)=>timingSafeEqual(Buffer.from(hash(a)),Buffer.from(hash(b)));
const cookie=(req,name)=>req.headers.get('cookie')?.split(';').map(s=>s.trim()).find(s=>s.startsWith(name+'='))?.slice(name.length+1)||'';
const json=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store',...headers}});
class HttpError extends Error{constructor(status,message){super(message);this.status=status;}}
export function makeApi({store,env,now=()=>Date.now()}){
 const secret=()=>{if(!env.CYZBORG_SESSION_SECRET||env.CYZBORG_SESSION_SECRET.length<32||!env.CYZBORG_ADMIN_PASSWORD||env.CYZBORG_ADMIN_PASSWORD.length<16)throw new HttpError(503,'Owner login is not configured. Set the two Netlify environment variables.');return env.CYZBORG_SESSION_SECRET;};
 const sign=text=>createHmac('sha256',secret()).update(text).digest('base64url');
 const owner=req=>{try{const token=cookie(req,'cyzborg_owner'),[text,mac]=token.split('.');if(!text||!mac||!same(sign(text),mac))return false;const value=JSON.parse(Buffer.from(text,'base64url').toString());return value.exp>now()&&value.pw===hash(env.CYZBORG_ADMIN_PASSWORD);}catch{return false;}};
 const requireOwner=req=>{secret();if(!owner(req))throw new HttpError(401,'Please sign in to your owner dashboard.');};
 async function limit(key,max,window){const bucket=Math.floor(now()/window);for(let i=0;i<max;i++){const {modified}=await store.setJSON(`limits/${key}/${bucket}/${i}`,{created_at:now()},{onlyIfNew:true});if(modified)return;}throw new HttpError(429,'Too many attempts. Please try again later.');}
 async function body(req){if(Number(req.headers.get('content-length')||0)>12000)throw new HttpError(413,'Message is too large.');const raw=await req.text();if(Buffer.byteLength(raw)>12000)throw new HttpError(413,'Message is too large.');try{const b=JSON.parse(raw);if(!b||typeof b!=='object'||Array.isArray(b))throw 0;return b;}catch{throw new HttpError(400,'Invalid request.');}}
 async function records(prefix){const {blobs}=await store.list({prefix});const results=[];for(let i=0;i<blobs.length;i+=25){results.push(...await Promise.all(blobs.slice(i,i+25).map(b=>store.get(b.key,{type:'json'}))));}return results.filter(Boolean);}
 function method(req,allowed){if(!allowed.includes(req.method))throw new HttpError(405,'Method not allowed.');}
 return async function handler(req,context={}){try{
  const url=new URL(req.url),path=url.pathname;
  if(!['GET','HEAD'].includes(req.method)&&req.headers.get('origin')!==url.origin)throw new HttpError(403,'Please submit through this website.');
  const ip=hash(context.ip||'local');
  if(path==='/api/admin/auth'){
   method(req,['GET','POST']);secret();
   if(req.method==='GET')return json({authenticated:owner(req)});
   const b=await body(req);
   if(b.action==='logout')return json({ok:true},200,{'Set-Cookie':'cyzborg_owner=; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=0'});
   await limit(`login/${ip}`,5,15*60*1000);
   if(typeof b.password!=='string'||!same(b.password,env.CYZBORG_ADMIN_PASSWORD))throw new HttpError(401,'Incorrect password.');
   const text=Buffer.from(JSON.stringify({exp:now()+12*60*60*1000,pw:hash(env.CYZBORG_ADMIN_PASSWORD)})).toString('base64url');
   return json({authenticated:true},200,{'Set-Cookie':`cyzborg_owner=${text}.${sign(text)}; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=43200`});
  }
  if(path==='/api/community'){
   method(req,['GET','POST']);let token=cookie(req,'cyzborg_input');
   if(req.method==='GET'){
    if(!uuid.test(token))token=randomUUID();const voter=hash(token);
    const found=await Promise.all(productIds.map(async id=>(await store.get(`votes/${id}/${voter}`,{type:'json'}))?{product_id:id,choice:'wear'}:null));
    return json({signedIn:false,owner:owner(req),token,votes:found.filter(Boolean)},200,{'Set-Cookie':`cyzborg_input=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000`});
   }
   const b=await body(req);if(!uuid.test(token)||b.token!==token)throw new HttpError(403,'Refresh the page and try again.');
   const voter=hash(token);
   if(b.action==='vote'){
    if(!productIds.includes(b.productId)||b.choice!=='wear')throw new HttpError(400,'Invalid shirt vote.');
    const key=`votes/${b.productId}/${voter}`;
    if(!await store.get(key,{type:'json'})){await limit(`vote/${ip}`,40,60*60*1000);await store.setJSON(key,{product_id:b.productId,choice:'wear',created_at:now()},{onlyIfNew:true});}
    return json({choice:'wear'});
   }
   if(b.action==='feedback'){
    const message=typeof b.message==='string'?b.message.trim():'',email=typeof b.email==='string'?b.email.trim():'';
    if(b.website||!uuid.test(b.id)||!categories.includes(b.category)||message.length<3||message.length>3000||(email&&!emailOK(email)))throw new HttpError(400,'Please check your idea and email.');
    const key=`feedback/${voter}/${b.id}`;
    if(!await store.get(key,{type:'json'})){
     await limit(`feedback/${voter}`,3,60*60*1000);await limit(`feedback-ip/${ip}`,10,60*60*1000);
     await store.setJSON(key,{id:`${voter}/${b.id}`,category:b.category,message,email:email||null,created_at:now(),reviewed:0},{onlyIfNew:true});
    }
    return json({ok:true});
   }
   throw new HttpError(400,'Unknown action.');
  }
  if(path==='/api/subscribe'){
   method(req,['POST']);const b=await body(req),email=typeof b.email==='string'?b.email.trim().toLowerCase():'';
   if(!emailOK(email)||b.website)throw new HttpError(400,'Enter a valid email address.');
   const key=`subscribers/${hash(email)}`;
   if(!await store.get(key,{type:'json'})){await limit(`subscribe/${ip}`,10,60*60*1000);await store.setJSON(key,{email,created_at:now(),consent:'CYZBORG apparel and music updates — v1'},{onlyIfNew:true});}
   return json({ok:true});
  }
  if(path==='/api/admin/community'){
   method(req,['GET','PATCH']);requireOwner(req);
   if(req.method==='PATCH'){
    const b=await body(req);if(typeof b.id!=='string'||!/^[a-f0-9]{64}\/[a-f0-9-]{36}$/i.test(b.id)||typeof b.reviewed!=='boolean')throw new HttpError(400,'Invalid message.');
    const key=`feedback/${b.id}`,m=await store.get(key,{type:'json'});if(!m)throw new HttpError(404,'Message not found.');await store.setJSON(key,{...m,reviewed:b.reviewed?1:0});return json({ok:true});
   }
   const [messages,voteKeys]=await Promise.all([records('feedback/'),store.list({prefix:'votes/'})]);
   const counts={};for(const {key} of voteKeys.blobs){const id=key.split('/')[1];counts[id]=(counts[id]||0)+1;}
   const filter=url.searchParams.get('filter'),selected=messages.filter(m=>filter==='new'?!m.reviewed:filter==='reviewed'?!!m.reviewed:true).sort((a,b)=>b.created_at-a.created_at||b.id.localeCompare(a.id));
   const page=Math.max(0,Math.floor(Number(url.searchParams.get('page'))||0));
   return json({messages:selected.slice(page*50,(page+1)*50),votes:Object.entries(counts).map(([product_id,total])=>({product_id,choice:'wear',total})),total:selected.length,unread:messages.filter(m=>!m.reviewed).length});
  }
  if(path==='/api/admin/subscribers'){method(req,['GET']);requireOwner(req);return json({subscribers:(await records('subscribers/')).sort((a,b)=>b.created_at-a.created_at)});}
  throw new HttpError(404,'Not found.');
 }catch(e){if(e instanceof HttpError)return json({error:e.message},e.status);console.error('CYZBORG API failure:',e.message);return json({error:'We couldn’t save or load this right now. Please try again.'},503);}};
}
