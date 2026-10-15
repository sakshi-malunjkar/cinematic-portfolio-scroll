import {createServerFn} from '@tanstack/react-start';
import {enquirySchema} from './enquiry-schema';
export const submitEnquiry=createServerFn({method:'POST'}).inputValidator(input=>enquirySchema.parse(input)).handler(async({data})=>{
 // Public intake intentionally allows only a validated insert. No read or update is exposed.
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const {error}=await supabaseAdmin.from('studio_enquiries').insert({name:data.name,email:data.email,project_type:data.project_type,message:data.message});
 if(error) return {ok:false as const,message:'Your enquiry could not be saved. Please try again.'};
 return {ok:true as const};
});
