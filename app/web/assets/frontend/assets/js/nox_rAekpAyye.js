import{r as a,A as x,l as z,R as h,b as o,j as k,k as g,y as B,B as u,U as I,F as R,C as O,_ as A}from"./nox_pyXA7rrAA.js";import{u as m}from"./nox_hAototeho.js";import{A as E,a as p}from"./nox_hohQtAoph.js";import{I as F}from"./nox_geheotXAh.js";import{R as P}from"./nox_opgr7ehhQ.js";import{m as c}from"./nox_AX77QyXto.js";import"./nox_ogAoghAQ7.js";import"./nox_oheepQAoX.js";import"./nox_tkko7r7rr.js";import"./nox_7XQAprAhh.js";import"./nox_oA7ptQppr.js";import"./nox_hkyyy7koe.js";import"./nox_Ap7oAXApA.js";var T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"}}]},name:"idcard",theme:"outlined"};const j=T;var H=function(n,i){return a.createElement(x,z({},n,{ref:i,icon:j}))};const K=a.forwardRef(H),M=h.lazy(()=>A(()=>import("./nox_ehteQtA7o.js"),["./nox_ehteQtA7o.js","./nox_pyXA7rrAA.js","..\\css\\nox_reyeAA7Qp.css","./nox_geheotXAh.js","./nox_7XQAprAhh.js","./nox_hkyyy7koe.js","./nox_Ap7oAXApA.js","./nox_hAototeho.js","./nox_Qp7rpthge.js","./nox_yp7yprhk7.js","./nox_oA7ptQppr.js","./nox_gXhygXpee.js","./nox_ogAoghAQ7.js","./nox_gorQoh7AA.js"],import.meta.url)),V=h.lazy(()=>A(()=>import("./nox_AgrQeXgep.js"),["./nox_AgrQeXgep.js","./nox_pyXA7rrAA.js","..\\css\\nox_reyeAA7Qp.css","./nox_geheotXAh.js","./nox_7XQAprAhh.js","./nox_hkyyy7koe.js","./nox_Ap7oAXApA.js","./nox_hAototeho.js","./nox_Qp7rpthge.js","./nox_yp7yprhk7.js","./nox_oA7ptQppr.js","./nox_gXhygXpee.js","./nox_ogAoghAQ7.js","./nox_gorQoh7AA.js"],import.meta.url));function ee(){const[f,n]=a.useState(!1),[i,d]=a.useState(!1),{sender:v}=m("PostTokopediaAkunBulkAdd",{onError:e=>c.error(`Error: ${e.msg}`),onSuccess:()=>{c.success("Success!")}}),{sender:y}=m(),{sender:S}=m(),[r,b]=a.useState(""),s=h.createRef();function C(){p(r,s,e=>{c.warning({content:e,key:"ghigggj"})},e=>{const t={data:e.filter(Boolean)};v({method:"post",path:"tokopedia/akun/bulk_add",payload:t})})}function _(e){p(r,s,t=>{c.warning({content:t,key:"ghigggj"})},t=>{const l=t.filter(Boolean);y({method:"put",path:"tokopedia/cekbot/run",payload:{fname:e,Akuns:l}})})}function w(e){p(r,s,t=>{c.warning({content:t,key:"vfdvf"})},t=>{const l=t.filter(Boolean);S({method:"put",path:"tokopedia/check_verif/run",payload:{fname:e,Akuns:l}})})}return o(O,{size:"small",title:"Bulk Add Tokopedia Account",children:k(R,{children:[o(a.Suspense,{fallback:o(g,{}),children:o(M,{onFinish:e=>{n(!1),_(e)},open:f,onCancel:()=>n(!1)})}),o(a.Suspense,{fallback:o(g,{}),children:o(V,{onFinish:e=>{d(!1),w(e)},open:i,onCancel:()=>d(!1)})}),o(E,{type:"info",message:"Format: username|password|otp_secret",showIcon:!0}),o(F.TextArea,{ref:s,size:"large",autoSize:{minRows:24,maxRows:24},value:r,onChange:e=>b(e.target.value)}),k(B,{children:[o(u,{style:{boxShadow:"none"},type:"primary",onClick:C,icon:o(I,{rev:"add-account"}),children:"Add Account"}),o("div",{style:{flex:1}}),o(u,{style:{backgroundColor:"#005246",boxShadow:"none",color:"#fff"},type:"primary",icon:o(P,{rev:"check-bot"}),onClick:()=>n(!0),children:"Check Bot"}),o(u,{type:"primary",style:{backgroundColor:"#C2418D",boxShadow:"none",color:"#fff"},icon:o(K,{rev:"id-card"}),onClick:()=>d(e=>!e),children:"Check Submit KTP"})]})]})})}export{ee as default};