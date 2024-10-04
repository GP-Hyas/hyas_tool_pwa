import{c as R,d as _,g as y,e as x,b as j,A as v,u as E,f as M,r as m,j as n,H as b,F as w,P as L}from"./index-rKjsT3U2.js";import{g as P}from"./reportService-BfgX1O55.js";import{B as g,S as G}from"./Button-D9eb8fkD.js";const f=R(),N=async(e,r)=>{try{const s=x(e.client_id),a=(await j.post(v.dnsLogs,s,{headers:r})).data;if(!a||!a.aggregates)return console.warn(`Unexpected response format for ${e.organization_name}`),{dnsVolume:0,estimatedUsers:0};const o=a.aggregates.resolverModes.reduce((c,u)=>c+u.count,0),d=o?Math.round(o/f/5e3):0;return{dnsVolume:o,estimatedUsers:d}}catch(s){return console.error(`Error fetching DNS data for ${e.organization_name}: ${s.message}`),{dnsVolume:0,estimatedUsers:0}}},T=(e,r,s,t)=>{if(!e.mssp_id){console.warn(`MSSP ID is missing for organization: ${e.organization_name}`);return}t[e.mssp_id]||(t[e.mssp_id]={mssp_name:e.is_mssp?e.organization_name:"",clients:[],mssp_dns_volume:0,mssp_estimated_users:0}),e.is_mssp?(t[e.mssp_id].mssp_name=e.organization_name,t[e.mssp_id].mssp_dns_volume=r,t[e.mssp_id].mssp_estimated_users=s):t[e.mssp_id].clients.push({client_name:e.organization_name,total_dns_volume:r,estimated_users:s})},D=async()=>{try{const e=_.getOrganizationList(),r=e.filter(i=>i.products.includes("PROTECT")),s=new Set(_.getSelectedMSSPs().map(i=>i.mssp_id));if(!Array.isArray(e)||s.size===0)return{success:!1,data:null,error:"No 'PROTECT' organizations or selected MSSPs available"};const t=await y(),a={};let o=0;const d=r.map(async i=>{if(s.has(i.mssp_id)){const{dnsVolume:l,estimatedUsers:S}=await N(i,t);o+=l,T(i,l,S,a)}});if(await Promise.all(d),Object.keys(a).length===0)return{success:!1,data:null,error:"No data found."};const c=z(a,o),u=P(c,"dns_volume");return{success:u.success,error:u.error}}catch(e){return _.clearSelectedMSSPs(),console.error(`Error fetching DNS volume: ${e}`),{success:!1,error:`Error fetching DNS volume: ${e.message}`}}},z=(e,r)=>{const s=[];Object.values(e).forEach(a=>{s.push({MSSP:a.mssp_name,"Client Org":"","Total DNS Volume":a.mssp_dns_volume,"Estimated Users":a.mssp_estimated_users}),a.clients.forEach(o=>{s.push({MSSP:"","Client Org":o.client_name,"Total DNS Volume":o.total_dns_volume,"Estimated Users":o.estimated_users})})});const t=r?Math.round(r/f/5e3):0;return s.push({MSSP:"Totals","Client Org":"","Total DNS Volume":r,"Estimated Users":t}),s},O="_GenerateReport_1b0lq_2",U="_generateReport_1b0lq_9",k="_reportActions_1b0lq_36",A="_error_1b0lq_43",p={GenerateReport:O,generateReport:U,reportActions:k,error:A};function q(){const e=E(),r=M(),{selectedMssps:s}=r.state||{selectedMssps:[]},[t,a]=m.useState(!1),[o,d]=m.useState(""),c=m.useRef(!0);m.useEffect(()=>(c.current=!0,()=>{c.current=!1}),[]);const u=async()=>{a(!0),d("");try{const l=await D();if(!l.success)throw new Error(l.error||"Failed to generate report.");setTimeout(()=>{alert("Report generated successfully and downloaded to your Downloads folder.")},100),e("/usage-report")}catch(l){console.error("Error generating report:",l),c.current&&d(`There was an error generating the report: ${l.message}`)}finally{c.current&&a(!1)}},i=()=>e("/mssp-selection");return n.jsxs("div",{className:p.GenerateReport,children:[n.jsx(b,{}),n.jsxs("div",{className:p.generateReport,children:[n.jsx("h1",{children:"Generate Billing Report"}),n.jsx(h,{mssps:s}),n.jsxs("div",{className:p.reportActions,children:[n.jsx(g,{theme:"dark",onClick:u,ariaLabel:"Generate the usage report",disabled:t,children:t?"Generating...":"Generate Report"}),n.jsx(g,{theme:"dark",onClick:i,ariaLabel:"Go back to MSSP Selection",disabled:t,children:"Go Back"})]}),o&&n.jsx("p",{className:p.error,role:"alert",children:o})]}),n.jsx(w,{}),t&&n.jsx(G,{"aria-label":"Loading, please wait..."})]})}const h=({mssps:e})=>n.jsx("ul",{children:e.map(r=>n.jsx("li",{children:r.organization_name},r.mssp_id))});h.propTypes={mssps:L.array.isRequired};export{q as default};
