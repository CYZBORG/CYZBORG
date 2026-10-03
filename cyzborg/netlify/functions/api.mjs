import {getStore} from '@netlify/blobs';
import {makeApi} from '../../server/api.mjs';
export default async (req,context)=>{
 const name=context.deploy.context==='production'?'cyzborg-community-v1':'cyzborg-preview-v1';
 const store=getStore({name,consistency:'strong'});
 return makeApi({store,env:process.env})(req,context);
};
export const config={path:['/api/community','/api/subscribe','/api/admin/auth','/api/admin/community','/api/admin/subscribers']};
