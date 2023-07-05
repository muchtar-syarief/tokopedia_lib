import{r as a,A as b,h as C,R as h,j as e,f as _,F as w,v as R,B as u,U as z,_ as k}from"./nox_ttrgtpApt.js";import{a as m}from"./nox_pAQXgAehe.js";import{A as B,a as p}from"./nox_XhQ7hptoh.js";import{I}from"./nox_kX7hpyyXg.js";import{R as E}from"./nox_7Ahgrytey.js";import{m as s}from"./nox_hkoXopykg.js";import"./nox_tgykoyXXt.js";import"./nox_Xporkptho.js";import"./nox_gkAAkhkp7.js";import"./nox_kekAyAtpp.js";import"./nox_k77ytekAo.js";import"./nox_peoQppkph.js";import"./nox_kepptkQep.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"}}]},name:"idcard",theme:"outlined"};const F=O;var P=function(n,i){return a.createElement(b,C({},n,{ref:i,icon:F}))};const T=a.forwardRef(P),H=h.lazy(()=>k(()=>import("./nox_kyg7khtrh.js"),["./nox_kyg7khtrh.js","./nox_ttrgtpApt.js","..\\css\\nox_gor7hQeg7.css","./nox_AeykQAAoA.js","./nox_pAQXgAehe.js","./nox_tgykoyXXt.js","./nox_AhptQ77ok.js","./nox_kekAyAtpp.js","./nox_tQyeQXhXg.js","./nox_kX7hpyyXg.js","./nox_peoQppkph.js","./nox_kepptkQep.js","./nox_Aoo7eytoh.js","./nox_k77ytekAo.js"],import.meta.url)),K=h.lazy(()=>k(()=>import("./nox_yAQr7reyt.js"),["./nox_yAQr7reyt.js","./nox_ttrgtpApt.js","..\\css\\nox_gor7hQeg7.css","./nox_AeykQAAoA.js","./nox_pAQXgAehe.js","./nox_tgykoyXXt.js","./nox_AhptQ77ok.js","./nox_kekAyAtpp.js","./nox_tQyeQXhXg.js","./nox_kX7hpyyXg.js","./nox_peoQppkph.js","./nox_kepptkQep.js","./nox_Aoo7eytoh.js","./nox_k77ytekAo.js"],import.meta.url));function Y(){const[f,n]=a.useState(!1),[i,d]=a.useState(!1),{sender:x}=m("PostTokopediaAkunBulkAdd",{onError:o=>s.error(`Error: ${o.msg}`),onSuccess:()=>{s.success("Success!")}}),{sender:g}=m(),{sender:A}=m(),[r,v]=a.useState(""),c=h.createRef();function j(){p(r,c,o=>{s.warning({content:o,key:"ghigggj"})},o=>{const t={data:o.filter(Boolean)};x({method:"post",path:"tokopedia/akun/bulk_add",payload:t})})}function y(o){p(r,c,t=>{s.warning({content:t,key:"ghigggj"})},t=>{const l=t.filter(Boolean);g({method:"put",path:"tokopedia/cekbot/run",payload:{fname:o,Akuns:l}})})}function S(o){p(r,c,t=>{s.warning({content:t,key:"vfdvf"})},t=>{const l=t.filter(Boolean);A({method:"put",path:"tokopedia/check_verif/run",payload:{fname:o,Akuns:l}})})}return e.jsx(_,{size:"small",title:"Bulk Add Tokopedia Account",children:e.jsxs(w,{children:[e.jsx(a.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(H,{onFinish:o=>{n(!1),y(o)},open:f,onCancel:()=>n(!1)})}),e.jsx(a.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(K,{onFinish:o=>{d(!1),S(o)},open:i,onCancel:()=>d(!1)})}),e.jsx(B,{type:"info",message:"Format: username|password|otp_secret",showIcon:!0}),e.jsx(I.TextArea,{ref:c,size:"large",autoSize:{minRows:24,maxRows:24},value:r,onChange:o=>v(o.target.value)}),e.jsxs(R,{children:[e.jsx(u,{style:{boxShadow:"none"},type:"primary",onClick:j,icon:e.jsx(z,{rev:"add-account"}),children:"Add Account"}),e.jsx("div",{style:{flex:1}}),e.jsx(u,{style:{backgroundColor:"#005246",boxShadow:"none",color:"#fff"},type:"primary",icon:e.jsx(E,{rev:"check-bot"}),onClick:()=>n(!0),children:"Check Bot"}),e.jsx(u,{type:"primary",style:{backgroundColor:"#C2418D",boxShadow:"none",color:"#fff"},icon:e.jsx(T,{rev:"id-card"}),onClick:()=>d(o=>!o),children:"Check Submit KTP"})]})]})})}export{Y as default};