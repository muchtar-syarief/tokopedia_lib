import{r as l,A as te,_ as oe,g as M,m as L,i as ne,a as H,b as re,P as le,C as P,c as S,d as ae,T as se,e as ie,f as ce,B as z,h as de,u as pe,o as ue,j as ge,K as me,k as fe,l as he,n as Ce,p as ye,W as be,R as T,q as u,F as A,s as V,t as ve,v as xe}from"./nox_yerp7r77e.js";import{E as X,u as D}from"./nox_rgXyhhA7p.js";import{A as Oe}from"./nox_eoeyykerr.js";import{u as $e}from"./nox_QXtkXQtAp.js";import{D as Pe}from"./nox_tAeoA7peQ.js";import{T as Se}from"./nox_pXhrAtgrA.js";import{R as Ee}from"./nox_t7kXgQQtp.js";var je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const we=je;var Te=function(n,r){return l.createElement(te,oe({},n,{ref:r,icon:we}))};const _e=l.forwardRef(Te),E=e=>e?typeof e=="function"?e():e:null,ze=e=>{const{componentCls:n,popoverBg:r,popoverColor:t,width:o,fontWeightStrong:c,popoverPadding:i,boxShadowSecondary:s,colorTextHeading:p,borderRadiusLG:a,zIndexPopup:d,marginXS:m,colorBgElevated:h}=e;return[{[n]:Object.assign(Object.assign({},H(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":h,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:r,backgroundClip:"padding-box",borderRadius:a,boxShadow:s,padding:i},[`${n}-title`]:{minWidth:o,marginBottom:m,color:p,fontWeight:c},[`${n}-inner-content`]:{color:t}})},re(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},Ne=e=>{const{componentCls:n}=e;return{[n]:le.map(r=>{const t=e[`${r}6`];return{[`&${n}-${r}`]:{"--antd-arrow-background-color":t,[`${n}-inner`]:{backgroundColor:t},[`${n}-arrow`]:{background:"transparent"}}}})}},Ie=e=>{const{componentCls:n,lineWidth:r,lineType:t,colorSplit:o,paddingSM:c,controlHeight:i,fontSize:s,lineHeight:p,padding:a}=e,d=i-Math.round(s*p),m=d/2,h=d/2-r,f=a;return{[n]:{[`${n}-inner`]:{padding:0},[`${n}-title`]:{margin:0,padding:`${m}px ${f}px ${h}px`,borderBottom:`${r}px ${t} ${o}`},[`${n}-inner-content`]:{padding:`${c}px ${f}px`}}}},Q=M("Popover",e=>{const{colorBgElevated:n,colorText:r,wireframe:t}=e,o=L(e,{popoverBg:n,popoverColor:r,popoverPadding:12});return[ze(o),Ne(o),t&&Ie(o),ne(o,"zoom-big")]},e=>{let{zIndexPopupBase:n}=e;return{zIndexPopup:n+30,width:177}});var Be=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const ke=(e,n,r)=>{if(!(!n&&!r))return l.createElement(l.Fragment,null,n&&l.createElement("div",{className:`${e}-title`},E(n)),l.createElement("div",{className:`${e}-inner-content`},E(r)))};function De(e){const{hashId:n,prefixCls:r,className:t,style:o,placement:c="top",title:i,content:s,children:p}=e;return l.createElement("div",{className:S(n,r,`${r}-pure`,`${r}-placement-${c}`,t),style:o},l.createElement("div",{className:`${r}-arrow`}),l.createElement(ae,Object.assign({},e,{className:n,prefixCls:r}),p||ke(r,i,s)))}function q(e){const{prefixCls:n}=e,r=Be(e,["prefixCls"]),{getPrefixCls:t}=l.useContext(P),o=t("popover",n),[c,i]=Q(o);return c(l.createElement(De,Object.assign({},r,{prefixCls:o,hashId:i})))}var Me=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const Re=e=>{let{title:n,content:r,prefixCls:t}=e;return l.createElement(l.Fragment,null,n&&l.createElement("div",{className:`${t}-title`},E(n)),l.createElement("div",{className:`${t}-inner-content`},E(r)))},K=l.forwardRef((e,n)=>{const{prefixCls:r,title:t,content:o,overlayClassName:c,placement:i="top",trigger:s="hover",mouseEnterDelay:p=.1,mouseLeaveDelay:a=.1,overlayStyle:d={}}=e,m=Me(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:h}=l.useContext(P),f=h("popover",r),[$,v]=Q(f),y=h(),x=S(c,v);return $(l.createElement(se,Object.assign({placement:i,trigger:s,mouseEnterDelay:p,mouseLeaveDelay:a,overlayStyle:d},m,{prefixCls:f,overlayClassName:x,ref:n,overlay:t||o?l.createElement(Re,{prefixCls:f,title:t,content:o}):null,transitionName:ie(y,"zoom-big",m.transitionName),"data-popover-inject":!0})))});K._InternalPanelDoNotUseOrYouWillBeFired=q;const We=K,Ae=e=>{const{componentCls:n,iconCls:r,zIndexPopup:t,colorText:o,colorWarning:c,marginXXS:i,marginXS:s,fontSize:p,fontWeightStrong:a}=e;return{[n]:{zIndex:t,color:o,[`${n}-message`]:{marginBottom:s,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${r}`]:{color:c,fontSize:p,lineHeight:1,marginInlineEnd:s},[`${n}-title`]:{fontWeight:a,"&:only-child":{fontWeight:"normal"}},[`${n}-description`]:{marginTop:i}},[`${n}-buttons`]:{textAlign:"end",button:{marginInlineStart:s}}}}},U=M("Popconfirm",e=>Ae(e),e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}});var Fe=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const G=e=>{const{prefixCls:n,okButtonProps:r,cancelButtonProps:t,title:o,description:c,cancelText:i,okText:s,okType:p="primary",icon:a=l.createElement(X,null),showCancel:d=!0,close:m,onConfirm:h,onCancel:f,onPopupClick:$}=e,{getPrefixCls:v}=l.useContext(P),[y]=$e("Popconfirm",ce.Popconfirm),x=E(o),O=E(c);return l.createElement("div",{className:`${n}-inner-content`,onClick:$},l.createElement("div",{className:`${n}-message`},a&&l.createElement("span",{className:`${n}-message-icon`},a),l.createElement("div",{className:`${n}-message-text`},x&&l.createElement("div",{className:S(`${n}-title`)},x),O&&l.createElement("div",{className:`${n}-description`},O))),l.createElement("div",{className:`${n}-buttons`},d&&l.createElement(z,Object.assign({onClick:f,size:"small"},t),i??(y==null?void 0:y.cancelText)),l.createElement(Oe,{buttonProps:Object.assign(Object.assign({size:"small"},de(p)),r),actionFn:h,close:m,prefixCls:v("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},s??(y==null?void 0:y.okText))))};function Le(e){const{prefixCls:n,placement:r,className:t,style:o}=e,c=Fe(e,["prefixCls","placement","className","style"]),{getPrefixCls:i}=l.useContext(P),s=i("popconfirm",n),[p]=U(s);return p(l.createElement(q,{placement:r,className:S(s,t),style:o,content:l.createElement(G,Object.assign({prefixCls:s},c))}))}var He=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const Y=l.forwardRef((e,n)=>{const{prefixCls:r,placement:t="top",trigger:o="click",okType:c="primary",icon:i=l.createElement(X,null),children:s,overlayClassName:p,onOpenChange:a,onVisibleChange:d}=e,m=He(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:h}=l.useContext(P),[f,$]=pe(!1,{value:e.open,defaultValue:e.defaultOpen}),v=(g,C)=>{$(g,!0),d==null||d(g),a==null||a(g,C)},y=g=>{v(!1,g)},x=g=>{var C;return(C=e.onConfirm)===null||C===void 0?void 0:C.call(globalThis,g)},O=g=>{var C;v(!1,g),(C=e.onCancel)===null||C===void 0||C.call(globalThis,g)},N=g=>{g.keyCode===me.ESC&&f&&v(!1,g)},b=g=>{const{disabled:C=!1}=e;C||v(g)},j=h("popconfirm",r),I=S(j,p),[B]=U(j);return B(l.createElement(We,Object.assign({},ue(m,["title"]),{trigger:o,placement:t,onOpenChange:b,open:f,ref:n,overlayClassName:I,content:l.createElement(G,Object.assign({okType:c,icon:i},e,{prefixCls:j,close:y,onConfirm:x,onCancel:O})),"data-popover-inject":!0}),ge(s,{onKeyDown:g=>{var C,w;l.isValidElement(s)&&((w=s==null?void 0:(C=s.props).onKeyDown)===null||w===void 0||w.call(C,g)),N(g)}})))});Y._InternalPanelDoNotUseOrYouWillBeFired=Le;const Ve=Y;function Xe(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const _=(e,n,r)=>{const t=Xe(r);return{[`${e.componentCls}-${n}`]:{color:e[`color${r}`],background:e[`color${t}Bg`],borderColor:e[`color${t}Border`]}}},Qe=e=>fe(e,(n,r)=>{let{textColor:t,lightBorderColor:o,lightColor:c,darkColor:i}=r;return{[`${e.componentCls}-${n}`]:{color:t,background:c,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:i,borderColor:i},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),qe=e=>{const{paddingXXS:n,lineWidth:r,tagPaddingHorizontal:t,componentCls:o}=e,c=t-r,i=n-r;return{[o]:Object.assign(Object.assign({},H(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:c,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${o}-close-icon`]:{marginInlineStart:i,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:c}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},Z=M("Tag",e=>{const{fontSize:n,lineHeight:r,lineWidth:t,fontSizeIcon:o}=e,c=Math.round(n*r),i=e.fontSizeSM,s=c-t*2,p=e.colorFillQuaternary,a=e.colorText,d=L(e,{tagFontSize:i,tagLineHeight:s,tagDefaultBg:p,tagDefaultColor:a,tagIconSize:o-2*t,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[qe(d),Qe(d),_(d,"success","Success"),_(d,"processing","Info"),_(d,"error","Error"),_(d,"warning","Warning")]});var Ke=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const Ue=e=>{const{prefixCls:n,className:r,checked:t,onChange:o,onClick:c}=e,i=Ke(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:s}=l.useContext(P),p=f=>{o==null||o(!t),c==null||c(f)},a=s("tag",n),[d,m]=Z(a),h=S(a,{[`${a}-checkable`]:!0,[`${a}-checkable-checked`]:t},r,m);return d(l.createElement("span",Object.assign({},i,{className:h,onClick:p})))},Ge=Ue;var Ye=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const Ze=(e,n)=>{const{prefixCls:r,className:t,rootClassName:o,style:c,children:i,icon:s,color:p,onClose:a,closeIcon:d,closable:m=!1,bordered:h=!0}=e,f=Ye(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:$,direction:v}=l.useContext(P),[y,x]=l.useState(!0);l.useEffect(()=>{"visible"in f&&x(f.visible)},[f.visible]);const O=he(p)||Ce(p),N=Object.assign({backgroundColor:p&&!O?p:void 0},c),b=$("tag",r),[j,I]=Z(b),B=S(b,{[`${b}-${p}`]:O,[`${b}-has-color`]:p&&!O,[`${b}-hidden`]:!y,[`${b}-rtl`]:v==="rtl",[`${b}-borderless`]:!h},t,o,I),g=k=>{k.stopPropagation(),a==null||a(k),!k.defaultPrevented&&x(!1)},C=l.useMemo(()=>m?d?l.createElement("span",{className:`${b}-close-icon`,onClick:g},d):l.createElement(ye,{className:`${b}-close-icon`,onClick:g}):null,[m,d,b,g]),w=typeof f.onClick=="function"||i&&i.type==="a",R=s||null,ee=R?l.createElement(l.Fragment,null,R,l.createElement("span",null,i)):i,W=l.createElement("span",Object.assign({},f,{ref:n,className:B,style:N}),ee,C);return j(w?l.createElement(be,null,W):W)},J=l.forwardRef(Ze);J.CheckableTag=Ge;const F=J,Je=e=>{const n=[],r=e.data.categoryAllListLite;function t(o){o.children?o.children.forEach(t):n.push({value:o.id,label:o.name})}return r&&r.categories.forEach(o=>{o.children?o.children.forEach(t):n.push({value:o.id,label:o.name})}),n},et=T.lazy(()=>xe(()=>import("./nox_XrkAho77h.js"),["./nox_XrkAho77h.js","./nox_yerp7r77e.js","..\\css\\nox_Q7gegkekp.css","./nox_rgXyhhA7p.js","./nox_hAyg7XtQX.js","./nox_pXhrAtgrA.js","./nox_QXtkXQtAp.js","./nox_oee7kgoXp.js","./nox_yhoyoyprX.js","./nox_g7hptgXyA.js","./nox_eykohAhhg.js","./nox_hreerr7ok.js","./nox_eoeyykerr.js","./nox_pgopXAAph.js","./nox_hXehtgrtr.js","./nox_kopgAgyyA.js","./nox_ekghXpAgA.js","./nox_kpQtpQoXp.js","./nox_Aygyryhee.js","./nox_h7XAAoegt.js","./nox_eXoAXpry7.js","./nox_tAeoA7peQ.js","./nox_t7kXgQQtp.js"],import.meta.url)),tt=u.jsx(V,{size:"small",loading:!0});function ot(){const{sender:e,response:n,pending:r}=D(),{sender:t,response:o}=D(),{sender:c}=D(),[i,s]=T.useState(!1),p=T.useMemo(()=>{if(n)if(o!=null&&o.data.categoryAllListLite){const a=Je(o);return n.data.map(d=>({name:d.etalase,ids:d.cat_ids,ids_names:d.cat_ids.map(m=>{for(const h of a)if(h.value==m)return h.label}).filter(Boolean)}))}else return n.data.map(a=>({name:a.etalase,ids:a.cat_ids,ids_names:[]}));return[]},[n,o]);return T.useEffect(()=>{e({method:"get",path:"tokopedia/etalase_map/list"}),t({method:"get",path:"tokopedia/category/list"})},[]),u.jsxs(u.Fragment,{children:[u.jsx(T.Suspense,{fallback:u.jsx(u.Fragment,{}),children:u.jsx(et,{onFinish:()=>{s(!1),e({method:"get",path:"tokopedia/etalase_map/list"})},open:i,onCancel:()=>s(!1)})}),r?tt:p.length?u.jsxs(A,{style:{alignItems:"start"},children:[u.jsx(z,{onClick:()=>s(!0),type:"primary",children:"Add Map"}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(100px, 1fr))",gap:"8px",alignItems:"start",width:"100%"},children:p.map(a=>u.jsxs(V,{hoverable:!0,style:{width:"100%",position:"relative"},size:"small",children:[u.jsx(Ve,{title:"Delete the task",description:"Are you sure to delete this task?",icon:u.jsx(_e,{style:{color:"red"},rev:"frdel"}),onConfirm:()=>{c({method:"delete",path:"tokopedia/etalase_map",params:{name:a.name}},{onSuccess:()=>{e({method:"get",path:"tokopedia/etalase_map/list"})}})},children:u.jsx(z,{size:"small",type:"ghost",icon:u.jsx(Pe,{rev:"del"}),style:{position:"absolute",zIndex:99,right:8,top:6}})}),u.jsxs(A,{style:{rowGap:0},children:[u.jsx(Se.Title,{level:5,children:a.name}),u.jsx(ve,{style:{flexWrap:"nowrap",width:"100%",overflow:"hidden",gap:"6px 0px"},children:a.ids.length>2&&u.jsxs(u.Fragment,{children:[Array.from(Array(2).keys()).map((d,m)=>u.jsx(F,{style:{fontSize:"11.5px"},color:"cyan",children:a.ids_names[m]},d)),u.jsxs(F,{style:{fontSize:"11.5px"},children:["+",a.ids.length-2," Other"]})]})})]})]},a.name))})]}):u.jsx(Ee,{status:"404",title:"Etalase mapping not available",extra:u.jsx(z,{onClick:()=>s(!0),type:"primary",children:"Add Map"})})]})}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{dt as E,Je as u};
