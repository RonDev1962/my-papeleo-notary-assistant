export const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n/100);
const cents=n=>Math.round(Number(n)*100);
export function calculateQuote(input,s){
 const errors=[],pending=[],lines=[];
 const add=(label,quantity,rate,detail='')=>lines.push({label,quantity,rate:cents(rate),amount:Math.round(quantity*cents(rate)),detail});
 const service=s.services.find(x=>x.id===input.service);
 if(!service)return{errors:['Choose an available service.'],pending,lines,total:0};
 if(!Array.isArray(input.documents)||!input.documents.length)errors.push('Add at least one document to begin.');
 const nums=[['Session minutes',input.minutes,1,1440,false],['Witnesses',input.witnesses,0,50,true]];
 for(const [label,v,min,max,integer] of nums)if(!Number.isFinite(v)||v<min||v>max||(integer&&!Number.isInteger(v)))errors.push(`${label} must be ${integer?'a whole number ':''}between ${min} and ${max}.`);
 for(const d of input.documents||[])if(!Number.isInteger(d.signers)||d.signers<1||d.signers>100)errors.push('Each document needs 1–100 signers.');
 if(input.mode==='mobile'&&(!Number.isFinite(input.distance)||input.distance<0))errors.push('Enter a valid distance from dispatch.');
 if(input.mode==='mobile'&&input.distance>s.fees.maxRadius)pending.push(`Outside the ${s.fees.maxRadius}-mile maximum. Service availability and pricing require review.`);
 if(errors.length)return{errors,pending,lines,total:0};
 add('Notarial act · first signer',input.documents.length,s.fees.act,`${input.documents.length} document(s); one act per document assumed. Verify the act type.`);
 const additional=input.documents.reduce((n,d)=>n+d.signers-1,0);
 if(additional)add('Additional signer · same document',additional,s.fees.additional);
 if(input.witnesses)add('Requested witnesses',input.witnesses,s.fees.witness);
 const billedMinutes=Math.max(s.fees.minimumMinutes,input.minutes);
 add(input.mode==='online'?'RON session time':'Session time',billedMinutes/60,input.mode==='online'?s.fees.ronHour:s.fees.mobileHour,`${billedMinutes} minutes billed; ${s.fees.minimumMinutes}-minute minimum, then prorated. Rounded to the nearest cent.`);
 if(input.mode==='online'){
  add('RON fee · once per session',1,s.fees.ron);
  add('RON technology surcharge · review required',1,s.fees.ronTech);
  if(s.fees.ronTech>0)pending.push('Texas SOS guidance says no additional platform/system fees. The supplied technology surcharge needs legal review before use.');
  if(s.fees.ronHour>0)pending.push('Verify whether the separate RON session charge is permitted before sending or collecting this estimate.');
 }else if(input.distance<=s.fees.includedRadius){add('Round-trip travel',1,s.fees.travel,'Non-refundable travel fee; required to confirm a mobile appointment.');}
 else pending.push(`Travel over ${s.fees.includedRadius} miles requires a manual quote. No travel amount has been invented or included.`);
 if(service.kind==='manual')pending.push(`${service.name}: no separate service fee was supplied. This is a notarial subtotal only; confirm the complete scope and pricing.`);
 const total=lines.reduce((n,l)=>n+l.amount,0);
 return{errors,pending,lines,total,deposit:input.mode==='mobile'?cents(s.fees.deposit):null};
}
export function quoteText(result,input,s){
 if(result.errors.length)return '';
 return `${s.brand.name}\n${result.pending.length?'INTERNAL DRAFT — INCOMPLETE / FEE REVIEW REQUIRED':'ESTIMATE — STATE-LAW VERIFICATION REQUIRED'}\n${s.services.find(x=>x.id===input.service)?.name} | ${input.mode==='online'?'Online':'Mobile'}\n\n${result.lines.map(x=>`${x.label}: ${x.quantity.toFixed(2).replace(/\.00$/,'')} × ${money(x.rate)} = ${money(x.amount)}`).join('\n')}\n\n${result.pending.length?'Calculated subtotal (not a final quote)':'Estimated total'}: ${money(result.total)}\n${result.deposit!==null?`Required travel deposit: ${money(result.deposit)}. This is not an additional charge; final allocation and any remaining travel amount must be confirmed.\n`:''}\n${result.pending.join('\n')}\n\nVerify every notarial act, fee limit, and separate service charge under current ${s.brand.state} law before sending or collecting payment. One notarial act per document is assumed; other act types require manual review.\n${s.policies.quote}\n\n${s.brand.signoff}`;
}
