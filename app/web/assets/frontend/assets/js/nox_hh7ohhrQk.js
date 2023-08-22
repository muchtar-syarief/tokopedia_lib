import{r as a,H as _,n as G,i as j,x as oe,N as se,q as M,y as A,a as ae,af as re,G as ie,g as ce,m as le,K as z,c as ue,e as Q,ag as fe,ac as de,ah as me,ai as ge,aj as W}from"./nox_pkpXrtgyh.js";import{C as ve,b as pe,E as ye}from"./nox_ppoee7he7.js";import{I as Ce}from"./nox_Xpt7eXeyh.js";var xe=a.forwardRef(function(e,n){var s=e.prefixCls,t=e.style,o=e.className,i=e.duration,d=i===void 0?4.5:i,x=e.eventKey,l=e.content,u=e.closable,p=e.closeIcon,g=p===void 0?"x":p,f=e.props,m=e.onClick,C=e.onNoticeClose,b=e.times,N=a.useState(!1),h=_(N,2),E=h[0],S=h[1],O=function(){C(x)},$=function(y){(y.key==="Enter"||y.code==="Enter"||y.keyCode===se.ENTER)&&O()};a.useEffect(function(){if(!E&&d>0){var r=setTimeout(function(){O()},d*1e3);return function(){clearTimeout(r)}}},[d,E,b]);var c="".concat(s,"-notice");return a.createElement("div",G({},f,{ref:n,className:j(c,o,oe({},"".concat(c,"-closable"),u)),style:t,onMouseEnter:function(){S(!0)},onMouseLeave:function(){S(!1)},onClick:m}),a.createElement("div",{className:"".concat(c,"-content")},l),u&&a.createElement("a",{tabIndex:0,className:"".concat(c,"-close"),onKeyDown:$,onClick:function(y){y.preventDefault(),y.stopPropagation(),O()}},g))});const X=xe;var be=a.forwardRef(function(e,n){var s=e.prefixCls,t=s===void 0?"rc-notification":s,o=e.container,i=e.motion,d=e.maxCount,x=e.className,l=e.style,u=e.onAllRemoved,p=a.useState([]),g=_(p,2),f=g[0],m=g[1],C=function(r){var y,v=f.find(function(P){return P.key===r});v==null||(y=v.onClose)===null||y===void 0||y.call(v),m(function(P){return P.filter(function(w){return w.key!==r})})};a.useImperativeHandle(n,function(){return{open:function(r){m(function(y){var v=M(y),P=v.findIndex(function(H){return H.key===r.key}),w=A({},r);if(P>=0){var I;w.times=(((I=y[P])===null||I===void 0?void 0:I.times)||0)+1,v[P]=w}else w.times=0,v.push(w);return d>0&&v.length>d&&(v=v.slice(-d)),v})},close:function(r){C(r)},destroy:function(){m([])}}});var b=a.useState({}),N=_(b,2),h=N[0],E=N[1];a.useEffect(function(){var c={};f.forEach(function(r){var y=r.placement,v=y===void 0?"topRight":y;v&&(c[v]=c[v]||[],c[v].push(r))}),Object.keys(h).forEach(function(r){c[r]=c[r]||[]}),E(c)},[f]);var S=function(r){E(function(y){var v=A({},y),P=v[r]||[];return P.length||delete v[r],v})},O=a.useRef(!1);if(a.useEffect(function(){Object.keys(h).length>0?O.current=!0:O.current&&(u==null||u(),O.current=!1)},[h]),!o)return null;var $=Object.keys(h);return ae.createPortal(a.createElement(a.Fragment,null,$.map(function(c){var r=h[c],y=r.map(function(P){return{config:P,key:P.key}}),v=typeof i=="function"?i(c):i;return a.createElement(re,G({key:c,className:j(t,"".concat(t,"-").concat(c),x==null?void 0:x(c)),style:l==null?void 0:l(c),keys:y,motionAppear:!0},v,{onAllRemoved:function(){S(c)}}),function(P,w){var I=P.config,H=P.className,Z=P.style,L=I.key,ee=I.times,ne=I.className,te=I.style;return a.createElement(X,G({},I,{ref:w,prefixCls:t,className:j(H,ne),style:A(A({},Z),te),times:ee,key:L,eventKey:L,onNoticeClose:C}))})})),o)}),he=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],Ee=function(){return document.body},B=0;function $e(){for(var e={},n=arguments.length,s=new Array(n),t=0;t<n;t++)s[t]=arguments[t];return s.forEach(function(o){o&&Object.keys(o).forEach(function(i){var d=o[i];d!==void 0&&(e[i]=d)})}),e}function Oe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.getContainer,s=n===void 0?Ee:n,t=e.motion,o=e.prefixCls,i=e.maxCount,d=e.className,x=e.style,l=e.onAllRemoved,u=ie(e,he),p=a.useState(),g=_(p,2),f=g[0],m=g[1],C=a.useRef(),b=a.createElement(be,{container:f,ref:C,prefixCls:o,motion:t,maxCount:i,className:d,style:x,onAllRemoved:l}),N=a.useState([]),h=_(N,2),E=h[0],S=h[1],O=a.useMemo(function(){return{open:function(c){var r=$e(u,c);(r.key===null||r.key===void 0)&&(r.key="rc-notification-".concat(B),B+=1),S(function(y){return[].concat(M(y),[{type:"open",config:r}])})},close:function(c){S(function(r){return[].concat(M(r),[{type:"close",key:c}])})},destroy:function(){S(function(c){return[].concat(M(c),[{type:"destroy"}])})}}},[]);return a.useEffect(function(){m(s())}),a.useEffect(function(){C.current&&E.length&&(E.forEach(function($){switch($.type){case"open":C.current.open($.config);break;case"close":C.current.close($.key);break;case"destroy":C.current.destroy();break}}),S([]))},[E]),[O,b]}const Pe=e=>{const{componentCls:n,iconCls:s,boxShadow:t,colorText:o,colorSuccess:i,colorError:d,colorWarning:x,colorInfo:l,fontSizeLG:u,motionEaseInOutCirc:p,motionDurationSlow:g,marginXS:f,paddingXS:m,borderRadiusLG:C,zIndexPopup:b,contentPadding:N,contentBg:h}=e,E=`${n}-notice`,S=new z("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:m,transform:"translateY(0)",opacity:1}}),O=new z("MessageMoveOut",{"0%":{maxHeight:e.height,padding:m,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),$={padding:m,textAlign:"center",[`${n}-custom-content > ${s}`]:{verticalAlign:"text-bottom",marginInlineEnd:f,fontSize:u},[`${E}-content`]:{display:"inline-block",padding:N,background:h,borderRadius:C,boxShadow:t,pointerEvents:"all"},[`${n}-success > ${s}`]:{color:i},[`${n}-error > ${s}`]:{color:d},[`${n}-warning > ${s}`]:{color:x},[`${n}-info > ${s},
      ${n}-loading > ${s}`]:{color:l}};return[{[n]:Object.assign(Object.assign({},ue(e)),{color:o,position:"fixed",top:f,width:"100%",pointerEvents:"none",zIndex:b,[`${n}-move-up`]:{animationFillMode:"forwards"},[`
        ${n}-move-up-appear,
        ${n}-move-up-enter
      `]:{animationName:S,animationDuration:g,animationPlayState:"paused",animationTimingFunction:p},[`
        ${n}-move-up-appear${n}-move-up-appear-active,
        ${n}-move-up-enter${n}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${n}-move-up-leave`]:{animationName:O,animationDuration:g,animationPlayState:"paused",animationTimingFunction:p},[`${n}-move-up-leave${n}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[n]:{[E]:Object.assign({},$)}},{[`${n}-notice-pure-panel`]:Object.assign(Object.assign({},$),{padding:0,textAlign:"start"})}]},Y=ce("Message",e=>{const n=le(e,{height:150});return[Pe(n)]},e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}));function Ne(e,n){return{motionName:n??`${e}-move-up`}}function K(e){let n;const s=new Promise(o=>{n=e(()=>{o(!0)})}),t=()=>{n==null||n()};return t.then=(o,i)=>s.then(o,i),t.promise=s,t}var Se=globalThis&&globalThis.__rest||function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]]);return s};const Re={info:a.createElement(Ce,null),success:a.createElement(ve,null),error:a.createElement(pe,null),warning:a.createElement(ye,null),loading:a.createElement(fe,null)};function q(e){let{prefixCls:n,type:s,icon:t,children:o}=e;return a.createElement("div",{className:j(`${n}-custom-content`,`${n}-${s}`)},t||Re[s],a.createElement("span",null,o))}function Ie(e){const{prefixCls:n,className:s,type:t,icon:o,content:i}=e,d=Se(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:x}=a.useContext(Q),l=n||x("message"),[,u]=Y(l);return a.createElement(X,Object.assign({},d,{prefixCls:l,className:j(s,u,`${l}-notice-pure-panel`),eventKey:"pure",duration:null,content:a.createElement(q,{prefixCls:l,type:t,icon:o},i)}))}var we=globalThis&&globalThis.__rest||function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]]);return s};const ke=8,je=3,Me=a.forwardRef((e,n)=>{const{top:s,prefixCls:t,getContainer:o,maxCount:i,duration:d=je,rtl:x,transitionName:l,onAllRemoved:u}=e,{getPrefixCls:p,getPopupContainer:g}=a.useContext(Q),f=t||p("message"),[,m]=Y(f),C=()=>({left:"50%",transform:"translateX(-50%)",top:s??ke}),b=()=>j(m,x?`${f}-rtl`:""),N=()=>Ne(f,l),h=a.createElement("span",{className:`${f}-close-x`},a.createElement(de,{className:`${f}-close-icon`})),[E,S]=Oe({prefixCls:f,style:C,className:b,motion:N,closable:!1,closeIcon:h,duration:d,getContainer:()=>(o==null?void 0:o())||(g==null?void 0:g())||document.body,maxCount:i,onAllRemoved:u});return a.useImperativeHandle(n,()=>Object.assign(Object.assign({},E),{prefixCls:f,hashId:m})),S});let U=0;function J(e){const n=a.useRef(null);return[a.useMemo(()=>{const t=l=>{var u;(u=n.current)===null||u===void 0||u.close(l)},o=l=>{if(!n.current){const $=()=>{};return $.then=()=>{},$}const{open:u,prefixCls:p,hashId:g}=n.current,f=`${p}-notice`,{content:m,icon:C,type:b,key:N,className:h,onClose:E}=l,S=we(l,["content","icon","type","key","className","onClose"]);let O=N;return O==null&&(U+=1,O=`antd-message-${U}`),K($=>(u(Object.assign(Object.assign({},S),{key:O,content:a.createElement(q,{prefixCls:p,type:b,icon:C},m),placement:"top",className:j(b&&`${f}-${b}`,g,h),onClose:()=>{E==null||E(),$()}})),()=>{t(O)}))},d={open:o,destroy:l=>{var u;l!==void 0?t(l):(u=n.current)===null||u===void 0||u.destroy()}};return["info","success","warning","error","loading"].forEach(l=>{const u=(p,g,f)=>{let m;p&&typeof p=="object"&&"content"in p?m=p:m={content:p};let C,b;typeof g=="function"?b=g:(C=g,b=f);const N=Object.assign(Object.assign({onClose:b,duration:C},m),{type:l});return o(N)};d[l]=u}),d},[]),a.createElement(Me,Object.assign({key:"message-holder"},e,{ref:n}))]}function _e(e){return J(e)}let R=null,k=e=>e(),F=[],T={};function Fe(){const{prefixCls:e,getContainer:n,duration:s,rtl:t,maxCount:o,top:i}=T,d=e??W().getPrefixCls("message"),x=(n==null?void 0:n())||document.body;return{prefixCls:d,container:x,duration:s,rtl:t,maxCount:o,top:i}}const Ae=a.forwardRef((e,n)=>{const s=()=>{const{prefixCls:f,container:m,maxCount:C,duration:b,rtl:N,top:h}=Fe();return{prefixCls:f,getContainer:()=>m,maxCount:C,duration:b,rtl:N,top:h}},[t,o]=a.useState(s),[i,d]=J(t),x=W(),l=x.getRootPrefixCls(),u=x.getIconPrefixCls(),p=x.getTheme(),g=()=>{o(s)};return a.useEffect(g,[]),a.useImperativeHandle(n,()=>{const f=Object.assign({},i);return Object.keys(f).forEach(m=>{f[m]=function(){return g(),i[m].apply(i,arguments)}}),{instance:f,sync:g}}),a.createElement(ge,{prefixCls:l,iconPrefixCls:u,theme:p},d)});function D(){if(!R){const e=document.createDocumentFragment(),n={fragment:e};R=n,k(()=>{me(a.createElement(Ae,{ref:s=>{const{instance:t,sync:o}=s||{};Promise.resolve().then(()=>{!n.instance&&t&&(n.instance=t,n.sync=o,D())})}}),e)});return}R.instance&&(F.forEach(e=>{const{type:n,skipped:s}=e;if(!s)switch(n){case"open":{k(()=>{const t=R.instance.open(Object.assign(Object.assign({},T),e.config));t==null||t.then(e.resolve),e.setCloseFn(t)});break}case"destroy":k(()=>{R==null||R.instance.destroy(e.key)});break;default:k(()=>{var t;const o=(t=R.instance)[n].apply(t,M(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),F=[])}function Te(e){T=Object.assign(Object.assign({},T),e),k(()=>{var n;(n=R==null?void 0:R.sync)===null||n===void 0||n.call(R)})}function De(e){const n=K(s=>{let t;const o={type:"open",config:e,resolve:s,setCloseFn:i=>{t=i}};return F.push(o),()=>{t?k(()=>{t()}):o.skipped=!0}});return D(),n}function He(e,n){const s=K(t=>{let o;const i={type:e,args:n,resolve:t,setCloseFn:d=>{o=d}};return F.push(i),()=>{o?k(()=>{o()}):i.skipped=!0}});return D(),s}function Ge(e){F.push({type:"destroy",key:e}),D()}const Ke=["success","info","warning","error","loading"],Le={open:De,destroy:Ge,config:Te,useMessage:_e,_InternalPanelDoNotUseOrYouWillBeFired:Ie},V=Le;Ke.forEach(e=>{V[e]=function(){for(var n=arguments.length,s=new Array(n),t=0;t<n;t++)s[t]=arguments[t];return He(e,s)}});const Qe=V;export{Qe as m};