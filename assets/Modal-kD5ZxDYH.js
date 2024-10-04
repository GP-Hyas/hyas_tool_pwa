import{r as i,k as A,P as y,j as e,m as v,d as K,n as S}from"./index-CEAzVpQd.js";import{S as _}from"./Button-CYlmiFKa.js";const k=()=>{const t=i.useContext(A);if(!t)throw new Error("ApiKeyContext must be used within an ApiKeyProvider. Please ensure it is correctly nested within the provider.");return t},P="_apiKeyModal_pkc19_1",j="_modalContent_pkc19_14",C="_modalTitle_pkc19_28",E="_modalActions_pkc19_55",I="_error_pkc19_88",o={apiKeyModal:P,modalContent:j,modalTitle:C,modalActions:E,error:I},R=t=>/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t);function w({isOpen:t,onClose:m,onSuccess:f}){const[n,l]=i.useState(""),[c,r]=i.useState(""),[s,d]=i.useState(!1),{handleApiKeySubmitted:h}=k(),u=i.useRef(null);i.useEffect(()=>{t&&u.current&&u.current.focus()},[t]);const b=async p=>{if(p.preventDefault(),!R(n)){r("Invalid API key format. Please enter a valid HYAS API key.");return}try{d(!0),r(""),await v(n),l("");try{const a=K.getOrganizationList();if(a&&a.length>0)console.log("Organizations in store.");else{const g=await S();if(!g.success){r(g.error),d(!1);return}console.log("Organizations fetched and stored.")}h(),f(!0)}catch(a){console.error("Error fetching organizations:",a),r("Error fetching organizations list. Please try again.")}}catch(a){console.error("Error storing API key:",a),r("Error storing API key. Please try again.")}finally{d(!1)}},x=()=>{l(""),r(""),m(),f(!1)};return t?e.jsxs("div",{className:o.apiKeyModal,role:"dialog","aria-labelledby":"modal-title","aria-modal":"true","aria-hidden":!t,children:[e.jsxs("div",{className:o.modalContent,children:[e.jsx("h3",{className:o.modalTitle,children:"API Key Required"}),e.jsx("p",{children:"Please enter your API key to continue:"}),e.jsxs("form",{onSubmit:b,children:[e.jsx("input",{type:"password",value:n,ref:u,onChange:p=>{r(""),l(p.target.value)},"aria-invalid":!!c,"aria-describedby":"api-key-error"}),c&&e.jsx("p",{id:"api-key-error",className:o.error,"aria-live":"assertive",children:c}),e.jsxs("div",{className:o.modalActions,children:[e.jsx("button",{type:"submit",disabled:s,children:s?"Submitting...":"Submit"}),e.jsx("button",{type:"button",onClick:x,disabled:s,children:"Cancel"})]})]})]}),s&&e.jsx(_,{"aria-label":"Loading..."})]}):null}w.propTypes={isOpen:y.bool.isRequired,onClose:y.func.isRequired,onSuccess:y.func.isRequired};export{w as M,k as u};
