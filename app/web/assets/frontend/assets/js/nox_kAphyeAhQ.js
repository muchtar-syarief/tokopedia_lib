import{r as c,q as s,F as j,s as I,R as _,v as y}from"./nox_yerp7r77e.js";import{a as k,u as S}from"./nox_rgXyhhA7p.js";import{c as L}from"./nox_gryrXrhpo.js";import{D as v}from"./nox_h7XAAoegt.js";import{R}from"./nox_t7kXgQQtp.js";function A(o){const l=(i,n,t)=>{t.children?t.children.forEach(r=>l(i,[...n,t.id],r)):i.push([...n,t.id])},p=[];return o==null||o.forEach(i=>l(p,[],i)),p}const b=L(o=>{const{sender:l}=k(),{sender:p}=k();return{list:[],pendingInitEffect:!1,initEffect:(i,n)=>{o(t=>({...t,pendingInitEffect:!0,list:[]})),l({method:"get",path:"v1/product/category",params:{is_public:!1,marketplace:"shopee",namespace:i,kota:"",pmax:0,pmin:0}},{onError:()=>{o(t=>({...t,pendingInitEffect:!1}))},onSuccess:t=>{if(t){t.length||o(a=>({...a,pendingInitEffect:!1,list:[]}));const r=t.map(a=>({productCount:a.count,shopeeCategoryId:a._id,shopeeCategoryName:a.name,tokopediaCategoryIds:[]}));o(a=>({...a,pendingInitEffect:!1,list:r})),p({method:"get",path:"tokopedia/mapper/map",params:{collection:i}},{onSuccess(a){var h;if(n){const f=A((h=n.data.categoryAllListLite)==null?void 0:h.categories);a.data.forEach(d=>{f.forEach(m=>{m.indexOf(d.tokopedia_id)>-1&&o(C=>({...C,list:C.list.map(g=>(g.shopeeCategoryId===d.shopee_id&&(g.tokopediaCategoryIds=m),g))}))})})}}})}}})},updateSingleList:(i,n)=>{o(t=>({...t,list:t.list.map(r=>r.shopeeCategoryId==i?{...r,...n}:r)}))}}}),D=_.lazy(()=>y(()=>import("./nox_etrXretyt.js"),["./nox_etrXretyt.js","./nox_yerp7r77e.js","..\\css\\nox_Q7gegkekp.css","./nox_rgXyhhA7p.js","./nox_eykohAhhg.js","./nox_hreerr7ok.js","./nox_eoeyykerr.js","./nox_pgopXAAph.js","./nox_g7hptgXyA.js","./nox_hXehtgrtr.js","./nox_QXtkXQtAp.js","./nox_pXhrAtgrA.js","./nox_oee7kgoXp.js","./nox_yhoyoyprX.js","./nox_Aygyryhee.js","./nox_kpQtpQoXp.js","./nox_h7XAAoegt.js"],import.meta.url)),T=_.lazy(()=>y(()=>import("./nox_AXrQgpkot.js"),["./nox_AXrQgpkot.js","./nox_yerp7r77e.js","..\\css\\nox_Q7gegkekp.css","./nox_rgXyhhA7p.js","./nox_pXhrAtgrA.js","./nox_QXtkXQtAp.js","./nox_oee7kgoXp.js","./nox_yhoyoyprX.js","./nox_g7hptgXyA.js","./nox_kopgAgyyA.js","./nox_ekghXpAgA.js","./nox_pgopXAAph.js","./nox_kpQtpQoXp.js","./nox_QhehpkrQ7.js","./nox_eXoAXpry7.js","./nox_hreerr7ok.js","./nox_7thokQgAg.js"],import.meta.url)),M=_.lazy(()=>y(()=>import("./nox_ytQphQAXQ.js"),["./nox_ytQphQAXQ.js","./nox_yerp7r77e.js","..\\css\\nox_Q7gegkekp.css","./nox_pgopXAAph.js","./nox_ekghXpAgA.js","./nox_QXtkXQtAp.js","./nox_rgXyhhA7p.js","./nox_kpQtpQoXp.js","./nox_eeXtp7oor.js","./nox_hXehtgrtr.js","./nox_pXhrAtgrA.js","./nox_oee7kgoXp.js","./nox_yhoyoyprX.js","./nox_g7hptgXyA.js","./nox_oypeoyAtQ.js"],import.meta.url));function O(){const[o,l]=c.useState(!1),[p,i,n,t]=b(e=>[e.list,e.initEffect,e.updateSingleList,e.pendingInitEffect]),{sender:r,response:a}=S(),{sender:h,response:f}=S(),[d,m]=c.useState(null);c.useEffect(()=>{r({method:"get",path:"tokopedia/category/list"},{onSuccess:e=>{e||l(!0)}}),h({method:"get",path:"v1/product/namespace_all"},{onSuccess(e){e==null||e.forEach(u=>{u.name!=="default"&&m(u.name)})}})},[]),c.useEffect(()=>{d&&i(d,a)},[d]);const C=c.useMemo(()=>f?f.map(e=>({label:e.name,value:e.name})):[],[f]),g=()=>{var e;if(a){const u=E=>{const x={label:E.name,value:E.id};return E.children&&(x.children=E.children.map(u)),x};return((e=a.data.categoryAllListLite)==null?void 0:e.categories.map(u))||[]}return[]};return s.jsxs(j,{children:[s.jsx(c.Suspense,{fallback:s.jsx(s.Fragment,{}),children:s.jsx(D,{onFinish:()=>l(!1),open:o,onCancel:()=>l(!1)})}),s.jsx(c.Suspense,{fallback:s.jsx(I,{loading:!0}),children:s.jsx(T,{list:p,namespace:d,namespaces:C,onChangeNamespace:m,initEffect:i,listCategoryTokopedia:a})}),s.jsx(v,{dashed:!0,style:{marginBlock:"5px"}}),!t&&p.length==0?s.jsx(R,{status:"404",title:"Data not found!"}):s.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr ",gap:"12px"},children:p.map(e=>s.jsx(c.Suspense,{fallback:s.jsx(I,{loading:!0}),children:s.jsx(M,{categoriesName:e.shopeeCategoryName,productCount:e.productCount,catsValue:e.tokopediaCategoryIds,onChangeCatsValue:u=>{n(e.shopeeCategoryId,{tokopediaCategoryIds:u})},optionsCats:g()},e.shopeeCategoryId)},e.shopeeCategoryId))})]})}export{O as default};
