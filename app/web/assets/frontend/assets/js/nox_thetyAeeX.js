import{T as mn,r as l,q as te,y as ge,x as Y,W as De,i as Ie,H as pe,N as ve,n as Ye,G as gn,u as Be,g as Cn,a5 as yn,$ as Sn,p as bn,e as xn,h as wn,a8 as kn,k as Pn,D as En,ad as ze,ag as On,ae as In,b as be,j as Ge,E as _n,F as Vn,C as Nn}from"./nox_pkpXrtgyh.js";import{B as Mn}from"./nox_yhXeegXht.js";import{T as $n}from"./nox_eXeXg7khQ.js";import{g as Kn,L as An}from"./nox_kXrkQroQ7.js";import{R as Ln}from"./nox_7orkkeryy.js";import{e as We,f as Rn,B as Tn,D as Dn,u as Wn,b as Hn,c as Fn,d as jn,g as Bn}from"./nox_At7tt7gA7.js";import{d as zn,e as Gn}from"./nox_yXegrrXgo.js";import"./nox_kXk7X7eeg.js";import"./nox_geektteor.js";import"./nox_gtprokeeo.js";import"./nox_ppoee7he7.js";function Je(e,n){var t=new Set;return e.forEach(function(r){n.has(r)||t.add(r)}),t}function Xn(e){var n=e||{},t=n.disabled,r=n.disableCheckbox,a=n.checkable;return!!(t||r)||a===!1}function Un(e,n,t,r){for(var a=new Set(e),o=new Set,i=0;i<=t;i+=1){var c=n.get(i)||new Set;c.forEach(function(m){var f=m.key,v=m.node,p=m.children,h=p===void 0?[]:p;a.has(f)&&!r(v)&&h.filter(function(u){return!r(u.node)}).forEach(function(u){a.add(u.key)})})}for(var d=new Set,s=t;s>=0;s-=1){var C=n.get(s)||new Set;C.forEach(function(m){var f=m.parent,v=m.node;if(!(r(v)||!m.parent||d.has(m.parent.key))){if(r(m.parent.node)){d.add(f.key);return}var p=!0,h=!1;(f.children||[]).filter(function(u){return!r(u.node)}).forEach(function(u){var y=u.key,P=a.has(y);p&&!P&&(p=!1),!h&&(P||o.has(y))&&(h=!0)}),p&&a.add(f.key),h&&o.add(f.key),d.add(f.key)}})}return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(Je(o,a))}}function qn(e,n,t,r,a){for(var o=new Set(e),i=new Set(n),c=0;c<=r;c+=1){var d=t.get(c)||new Set;d.forEach(function(f){var v=f.key,p=f.node,h=f.children,u=h===void 0?[]:h;!o.has(v)&&!i.has(v)&&!a(p)&&u.filter(function(y){return!a(y.node)}).forEach(function(y){o.delete(y.key)})})}i=new Set;for(var s=new Set,C=r;C>=0;C-=1){var m=t.get(C)||new Set;m.forEach(function(f){var v=f.parent,p=f.node;if(!(a(p)||!f.parent||s.has(f.parent.key))){if(a(f.parent.node)){s.add(v.key);return}var h=!0,u=!1;(v.children||[]).filter(function(y){return!a(y.node)}).forEach(function(y){var P=y.key,_=o.has(P);h&&!_&&(h=!1),!u&&(_||i.has(P))&&(u=!0)}),h||o.delete(v.key),u&&i.add(v.key),s.add(v.key)}})}return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(Je(i,o))}}function Te(e,n,t,r){var a=[],o;r?o=r:o=Xn;var i=new Set(e.filter(function(C){var m=!!t[C];return m||a.push(C),m})),c=new Map,d=0;Object.keys(t).forEach(function(C){var m=t[C],f=m.level,v=c.get(f);v||(v=new Set,c.set(f,v)),v.add(m),d=Math.max(d,f)}),mn(!a.length,"Tree missing follow keys: ".concat(a.slice(0,100).map(function(C){return"'".concat(C,"'")}).join(", ")));var s;return n===!0?s=Un(i,c,d,o):s=qn(i,n.halfCheckedKeys,c,d,o),s}var Ve=l.createContext(null),we="__rc_cascader_search_mark__",Yn=function(n,t,r){var a=r.label;return t.some(function(o){return String(o[a]).toLowerCase().includes(n.toLowerCase())})},Jn=function(n,t,r,a){return t.map(function(o){return o[a.label]}).join(" / ")};const Qn=function(e,n,t,r,a,o){var i=a.filter,c=i===void 0?Yn:i,d=a.render,s=d===void 0?Jn:d,C=a.limit,m=C===void 0?50:C,f=a.sort;return l.useMemo(function(){var v=[];if(!e)return[];function p(h,u){h.forEach(function(y){if(!(!f&&m>0&&v.length>=m)){var P=[].concat(te(u),[y]),_=y[t.children];if((!_||_.length===0||o)&&c(e,P,{label:t.label})){var S;v.push(ge(ge({},y),{},(S={},Y(S,t.label,s(e,P,r,t)),Y(S,we,P),Y(S,t.children,void 0),S)))}_&&p(y[t.children],P)}})}return p(n,[]),f&&v.sort(function(h,u){return f(h[we],u[we],e,t)}),m>0?v.slice(0,m):v},[e,n,t,r,s,o,c,f,m])};var He="__RC_CASCADER_SPLIT__",Qe="SHOW_PARENT",Ze="SHOW_CHILD";function le(e){return e.join(He)}function xe(e){return e.map(le)}function Zn(e){return e.split(He)}function et(e){var n=e||{},t=n.label,r=n.value,a=n.children,o=r||"value";return{label:t||"label",value:o,key:o,children:a||"children"}}function Oe(e,n){var t,r;return(t=e.isLeaf)!==null&&t!==void 0?t:!((r=e[n.children])!==null&&r!==void 0&&r.length)}function nt(e){var n=e.parentElement;if(n){var t=e.offsetTop-n.offsetTop;t-n.scrollTop<0?n.scrollTo({top:t}):t+e.offsetHeight-n.scrollTop>n.offsetHeight&&n.scrollTo({top:t+e.offsetHeight-n.offsetHeight})}}function en(e,n){return e.map(function(t){var r;return(r=t[we])===null||r===void 0?void 0:r.map(function(a){return a[n.value]})})}function Xe(e,n,t){var r=new Set(e),a=n();return e.filter(function(o){var i=a[o],c=i?i.parent:null,d=i?i.children:null;return t===Ze?!(d&&d.some(function(s){return s.key&&r.has(s.key)})):!(c&&!c.node.disabled&&r.has(c.key))})}function _e(e,n,t){for(var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,a=n,o=[],i=function(){var s,C,m,f=e[c],v=(s=a)===null||s===void 0?void 0:s.findIndex(function(h){var u=h[t.value];return r?String(u)===String(f):u===f}),p=v!==-1?(C=a)===null||C===void 0?void 0:C[v]:null;o.push({value:(m=p==null?void 0:p[t.value])!==null&&m!==void 0?m:f,index:v,option:p}),a=p==null?void 0:p[t.children]},c=0;c<e.length;c+=1)i();return o}const tt=function(e,n,t,r,a){return l.useMemo(function(){var o=a||function(i){var c=r?i.slice(-1):i,d=" / ";return c.every(function(s){return["string","number"].includes(De(s))})?c.join(d):c.reduce(function(s,C,m){var f=l.isValidElement(C)?l.cloneElement(C,{key:m}):C;return m===0?[f]:[].concat(te(s),[d,f])},[])};return e.map(function(i){var c,d,s=_e(i,n,t),C=o(s.map(function(f){var v,p=f.option,h=f.value;return(v=p==null?void 0:p[t.label])!==null&&v!==void 0?v:h}),s.map(function(f){var v=f.option;return v})),m=le(i);return{label:C,value:m,key:m,valueCells:i,disabled:(c=s[s.length-1])===null||c===void 0||(d=c.option)===null||d===void 0?void 0:d.disabled}})},[e,n,t,a,r])};function at(e,n){return"".concat(e,"-").concat(n)}function nn(e,n){return e??n}function rt(e){var n=e||{},t=n.title,r=n._title,a=n.key,o=n.children,i=t||"title";return{title:i,_title:r||[i],key:a||"key",children:o||"children"}}function ot(e,n,t){var r={};De(t)==="object"?r=t:r={externalGetKey:t},r=r||{};var a=r,o=a.childrenPropName,i=a.externalGetKey,c=a.fieldNames,d=rt(c),s=d.key,C=d.children,m=o||C,f;i?typeof i=="string"?f=function(h){return h[i]}:typeof i=="function"&&(f=function(h){return i(h)}):f=function(h,u){return nn(h[s],u)};function v(p,h,u,y){var P=p?p[m]:e,_=p?at(u.pos,h):"0",S=p?[].concat(te(y),[p]):[];if(p){var O=f(p,_),N={node:p,index:h,pos:_,key:O,parentPos:u.node?u.pos:null,level:u.level+1,nodes:S};n(N)}P&&P.forEach(function(x,I){v(x,I,{node:p,pos:_,level:u?u.level+1:-1},S)})}v(null)}function it(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.initWrapper,r=n.processEntity,a=n.onProcessFinished,o=n.externalGetKey,i=n.childrenPropName,c=n.fieldNames,d=arguments.length>2?arguments[2]:void 0,s=o||d,C={},m={},f={posEntities:C,keyEntities:m};return t&&(f=t(f)||f),ot(e,function(v){var p=v.node,h=v.index,u=v.pos,y=v.key,P=v.parentPos,_=v.level,S=v.nodes,O={node:p,nodes:S,index:h,key:y,pos:u,level:_},N=nn(y,u);C[u]=O,m[N]=O,O.parent=C[P],O.parent&&(O.parent.children=O.parent.children||[],O.parent.children.push(O)),r&&r(O,f)},{externalGetKey:s,childrenPropName:i,fieldNames:c}),a&&a(f),f}const lt=function(e,n){var t=l.useRef({options:null,info:null}),r=l.useCallback(function(){return t.current.options!==e&&(t.current.options=e,t.current.info=it(e,{fieldNames:n,initWrapper:function(o){return ge(ge({},o),{},{pathKeyEntities:{}})},processEntity:function(o,i){var c=o.nodes.map(function(d){return d[n.value]}).join(He);i.pathKeyEntities[c]=o,o.key=c}})),t.current.info.pathKeyEntities},[n,e]);return r},ct=function(e,n){return l.useCallback(function(t){var r=[],a=[];return t.forEach(function(o){var i=_e(o,e,n);i.every(function(c){return c.option})?a.push(o):r.push(o)}),[a,r]},[e,n])};function Ue(e){var n=l.useRef();n.current=e;var t=l.useCallback(function(){return n.current.apply(n,arguments)},[]);return t}function st(e){return l.useMemo(function(){if(!e)return[!1,{}];var n={matchInputWidth:!0,limit:50};return e&&De(e)==="object"&&(n=ge(ge({},n),e)),n.limit<=0&&delete n.limit,[!0,n]},[e])}var ut=l.memo(function(e){var n=e.children;return n},function(e,n){return!n.open});function dt(e){var n,t=e.prefixCls,r=e.checked,a=e.halfChecked,o=e.disabled,i=e.onClick,c=e.disableCheckbox,d=l.useContext(Ve),s=d.checkable,C=typeof s!="boolean"?s:null;return l.createElement("span",{className:Ie("".concat(t),(n={},Y(n,"".concat(t,"-checked"),r),Y(n,"".concat(t,"-indeterminate"),!r&&a),Y(n,"".concat(t,"-disabled"),o||c),n)),onClick:i},C)}var tn="__cascader_fix_label__";function ft(e){var n=e.prefixCls,t=e.multiple,r=e.options,a=e.activeValue,o=e.prevValuePath,i=e.onToggleOpen,c=e.onSelect,d=e.onActive,s=e.checkedSet,C=e.halfCheckedSet,m=e.loadingKeys,f=e.isSelectable,v=e.searchValue,p="".concat(n,"-menu"),h="".concat(n,"-menu-item"),u=l.useContext(Ve),y=u.fieldNames,P=u.changeOnSelect,_=u.expandTrigger,S=u.expandIcon,O=u.loadingIcon,N=u.dropdownMenuColumnStyle,x=_==="hover",I=l.useMemo(function(){return r.map(function(g){var w,b=g.disabled,T=g.disableCheckbox,F=g[we],K=(w=g[tn])!==null&&w!==void 0?w:g[y.label],L=g[y.value],X=Oe(g,y),ne=F?F.map(function(H){return H[y.value]}):[].concat(te(o),[L]),D=le(ne),U=m.includes(D),J=s.has(D),V=C.has(D);return{disabled:b,label:K,value:L,isLeaf:X,isLoading:U,checked:J,halfChecked:V,option:g,disableCheckbox:T,fullPath:ne,fullPathKey:D}})},[r,s,y,C,m,o]);return l.createElement("ul",{className:p,role:"menu"},I.map(function(g){var w,b=g.disabled,T=g.label,F=g.value,K=g.isLeaf,L=g.isLoading,X=g.checked,ne=g.halfChecked,D=g.option,U=g.fullPath,J=g.fullPathKey,V=g.disableCheckbox,H=function(){if(!(b||v)){var B=te(U);x&&K&&B.pop(),d(B)}},R=function(){f(D)&&c(U,K)},j;return typeof D.title=="string"?j=D.title:typeof T=="string"&&(j=T),l.createElement("li",{key:J,className:Ie(h,(w={},Y(w,"".concat(h,"-expand"),!K),Y(w,"".concat(h,"-active"),a===F||a===J),Y(w,"".concat(h,"-disabled"),b),Y(w,"".concat(h,"-loading"),L),w)),style:N,role:"menuitemcheckbox",title:j,"aria-checked":X,"data-path-key":J,onClick:function(){H(),!V&&(!t||K)&&R()},onDoubleClick:function(){P&&i(!1)},onMouseEnter:function(){x&&H()},onMouseDown:function(B){B.preventDefault()}},t&&l.createElement(dt,{prefixCls:"".concat(n,"-checkbox"),checked:X,halfChecked:ne,disabled:b||V,disableCheckbox:V,onClick:function(B){V||(B.stopPropagation(),R())}}),l.createElement("div",{className:"".concat(h,"-content")},T),!L&&S&&!K&&l.createElement("div",{className:"".concat(h,"-expand-icon")},S),L&&O&&l.createElement("div",{className:"".concat(h,"-loading-icon")},O))}))}const vt=function(){var e=We(),n=e.multiple,t=e.open,r=l.useContext(Ve),a=r.values,o=l.useState([]),i=pe(o,2),c=i[0],d=i[1];return l.useEffect(function(){if(t&&!n){var s=a[0];d(s||[])}},[t]),[c,d]},pt=function(e,n,t,r,a,o){var i=We(),c=i.direction,d=i.searchValue,s=i.toggleOpen,C=i.open,m=c==="rtl",f=l.useMemo(function(){for(var N=-1,x=n,I=[],g=[],w=r.length,b=en(n,t),T=function(D){var U=x.findIndex(function(J,V){return(b[V]?le(b[V]):J[t.value])===r[D]});if(U===-1)return"break";N=U,I.push(N),g.push(r[D]),x=x[N][t.children]},F=0;F<w&&x;F+=1){var K=T(F);if(K==="break")break}for(var L=n,X=0;X<I.length-1;X+=1)L=L[I[X]][t.children];return[g,N,L,b]},[r,t,n]),v=pe(f,4),p=v[0],h=v[1],u=v[2],y=v[3],P=function(x){a(x)},_=function(x){var I=u.length,g=h;g===-1&&x<0&&(g=I);for(var w=0;w<I;w+=1){g=(g+x+I)%I;var b=u[g];if(b&&!b.disabled){var T=p.slice(0,-1).concat(y[g]?le(y[g]):b[t.value]);P(T);return}}},S=function(){if(p.length>1){var x=p.slice(0,-1);P(x)}else s(!1)},O=function(){var x,I=((x=u[h])===null||x===void 0?void 0:x[t.children])||[],g=I.find(function(b){return!b.disabled});if(g){var w=[].concat(te(p),[g[t.value]]);P(w)}};l.useImperativeHandle(e,function(){return{onKeyDown:function(x){var I=x.which;switch(I){case ve.UP:case ve.DOWN:{var g=0;I===ve.UP?g=-1:I===ve.DOWN&&(g=1),g!==0&&_(g);break}case ve.LEFT:{m?O():S();break}case ve.RIGHT:{m?S():O();break}case ve.BACKSPACE:{d||S();break}case ve.ENTER:{if(p.length){var w=u[h],b=(w==null?void 0:w[we])||[];b.length?o(b.map(function(T){return T[t.value]}),b[b.length-1]):o(p,u[h])}break}case ve.ESC:s(!1),C&&x.stopPropagation()}},onKeyUp:function(){}}})};var ht=l.forwardRef(function(e,n){var t,r,a,o,i=We(),c=i.prefixCls,d=i.multiple,s=i.searchValue,C=i.toggleOpen,m=i.notFoundContent,f=i.direction,v=i.open,p=l.useRef(),h=f==="rtl",u=l.useContext(Ve),y=u.options,P=u.values,_=u.halfValues,S=u.fieldNames,O=u.changeOnSelect,N=u.onSelect,x=u.searchOptions,I=u.dropdownPrefixCls,g=u.loadData,w=u.expandTrigger,b=I||c,T=l.useState([]),F=pe(T,2),K=F[0],L=F[1],X=function(k){if(!(!g||s)){var M=_e(k,y,S),$=M.map(function(se){var me=se.option;return me}),W=$[$.length-1];if(W&&!Oe(W,S)){var ae=le(k);L(function(se){return[].concat(te(se),[ae])}),g($)}}};l.useEffect(function(){K.length&&K.forEach(function(A){var k=Zn(A),M=_e(k,y,S,!0).map(function(W){var ae=W.option;return ae}),$=M[M.length-1];(!$||$[S.children]||Oe($,S))&&L(function(W){return W.filter(function(ae){return ae!==A})})})},[y,K,S]);var ne=l.useMemo(function(){return new Set(xe(P))},[P]),D=l.useMemo(function(){return new Set(xe(_))},[_]),U=vt(),J=pe(U,2),V=J[0],H=J[1],R=function(k){H(k),X(k)},j=function(k){var M=k.disabled,$=Oe(k,S);return!M&&($||O||d)},q=function(k,M){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;N(k),!d&&(M||O&&(w==="hover"||$))&&C(!1)},B=l.useMemo(function(){return s?x:y},[s,x,y]),Q=l.useMemo(function(){for(var A=[{options:B}],k=B,M=en(k,S),$=function(){var me=V[W],ye=k.find(function(ue,re){return(M[re]?le(M[re]):ue[S.value])===me}),oe=ye==null?void 0:ye[S.children];if(!(oe!=null&&oe.length))return"break";k=oe,A.push({options:oe})},W=0;W<V.length;W+=1){var ae=$();if(ae==="break")break}return A},[B,V,S]),Z=function(k,M){j(M)&&q(k,Oe(M,S),!0)};pt(n,B,S,V,R,Z),l.useEffect(function(){for(var A=0;A<V.length;A+=1){var k,M=V.slice(0,A+1),$=le(M),W=(k=p.current)===null||k===void 0?void 0:k.querySelector('li[data-path-key="'.concat($.replace(/\\{0,2}"/g,'\\"'),'"]'));W&&nt(W)}},[V]);var ee=!((t=Q[0])!==null&&t!==void 0&&(r=t.options)!==null&&r!==void 0&&r.length),ce=[(a={},Y(a,S.value,"__EMPTY__"),Y(a,tn,m),Y(a,"disabled",!0),a)],ke=ge(ge({},e),{},{multiple:!ee&&d,onSelect:q,onActive:R,onToggleOpen:C,checkedSet:ne,halfCheckedSet:D,loadingKeys:K,isSelectable:j}),Ce=ee?[{options:ce}]:Q,he=Ce.map(function(A,k){var M=V.slice(0,k),$=V[k];return l.createElement(ft,Ye({key:k},ke,{searchValue:s,prefixCls:b,options:A.options,prevValuePath:M,activeValue:$}))});return l.createElement(ut,{open:v},l.createElement("div",{className:Ie("".concat(b,"-menus"),(o={},Y(o,"".concat(b,"-menu-empty"),ee),Y(o,"".concat(b,"-rtl"),h),o)),ref:p},he))}),mt=["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","children","dropdownMatchSelectWidth","showCheckedStrategy"];function gt(e){return Array.isArray(e)&&Array.isArray(e[0])}function qe(e){return e?gt(e)?e:(e.length===0?[]:[e]).map(function(n){return Array.isArray(n)?n:[n]}):[]}var Ke=l.forwardRef(function(e,n){var t=e.id,r=e.prefixCls,a=r===void 0?"rc-cascader":r,o=e.fieldNames,i=e.defaultValue,c=e.value,d=e.changeOnSelect,s=e.onChange,C=e.displayRender,m=e.checkable,f=e.searchValue,v=e.onSearch,p=e.showSearch,h=e.expandTrigger,u=e.options,y=e.dropdownPrefixCls,P=e.loadData,_=e.popupVisible,S=e.open,O=e.popupClassName,N=e.dropdownClassName,x=e.dropdownMenuColumnStyle,I=e.popupPlacement,g=e.placement,w=e.onDropdownVisibleChange,b=e.onPopupVisibleChange,T=e.expandIcon,F=T===void 0?">":T,K=e.loadingIcon,L=e.children,X=e.dropdownMatchSelectWidth,ne=X===void 0?!1:X,D=e.showCheckedStrategy,U=D===void 0?Qe:D,J=gn(e,mt),V=Rn(t),H=!!m,R=Be(i,{value:c,postState:qe}),j=pe(R,2),q=j[0],B=j[1],Q=l.useMemo(function(){return et(o)},[JSON.stringify(o)]),Z=l.useMemo(function(){return u||[]},[u]),ee=lt(Z,Q),ce=l.useCallback(function(z){var E=ee();return z.map(function(G){var de=E[G].nodes;return de.map(function(ie){return ie[Q.value]})})},[ee,Q]),ke=Be("",{value:f,postState:function(E){return E||""}}),Ce=pe(ke,2),he=Ce[0],A=Ce[1],k=function(E,G){A(E),G.source!=="blur"&&v&&v(E)},M=st(p),$=pe(M,2),W=$[0],ae=$[1],se=Qn(he,Z,Q,y||a,ae,d),me=ct(Z,Q),ye=l.useMemo(function(){var z=me(q),E=pe(z,2),G=E[0],de=E[1];if(!H||!q.length)return[G,[],de];var ie=xe(G),Pe=ee(),Se=Te(ie,!0,Pe),Me=Se.checkedKeys,$e=Se.halfCheckedKeys;return[ce(Me),ce($e),de]},[H,q,ee,ce,me]),oe=pe(ye,3),ue=oe[0],re=oe[1],fe=oe[2],an=l.useMemo(function(){var z=xe(ue),E=Xe(z,ee,U);return[].concat(te(fe),te(ce(E)))},[ue,ee,ce,fe,U]),rn=tt(an,Z,Q,H,C),Ae=Ue(function(z){if(B(z),s){var E=qe(z),G=E.map(function(Pe){return _e(Pe,Z,Q).map(function(Se){return Se.option})}),de=H?E:E[0],ie=H?G:G[0];s(de,ie)}}),Le=Ue(function(z){if(A(""),!H)Ae(z);else{var E=le(z),G=xe(ue),de=xe(re),ie=G.includes(E),Pe=fe.some(function(Ee){return le(Ee)===E}),Se=ue,Me=fe;if(Pe&&!ie)Me=fe.filter(function(Ee){return le(Ee)!==E});else{var $e=ie?G.filter(function(Ee){return Ee!==E}):[].concat(te(G),[E]),je=ee(),Re;if(ie){var vn=Te($e,{checked:!1,halfCheckedKeys:de},je);Re=vn.checkedKeys}else{var pn=Te($e,!0,je);Re=pn.checkedKeys}var hn=Xe(Re,ee,U);Se=ce(hn)}Ae([].concat(te(Me),te(Se)))}}),on=function(E,G){if(G.type==="clear"){Ae([]);return}var de=G.values[0],ie=de.valueCells;Le(ie)},ln=S!==void 0?S:_,cn=N||O,sn=g||I,un=function(E){w==null||w(E),b==null||b(E)},dn=l.useMemo(function(){return{options:Z,fieldNames:Q,values:ue,halfValues:re,changeOnSelect:d,onSelect:Le,checkable:m,searchOptions:se,dropdownPrefixCls:y,loadData:P,expandTrigger:h,expandIcon:F,loadingIcon:K,dropdownMenuColumnStyle:x}},[Z,Q,ue,re,d,Le,m,se,y,P,h,F,K,x]),Fe=!(he?se:Z).length,fn=he&&ae.matchInputWidth||Fe?{}:{minWidth:"auto"};return l.createElement(Ve.Provider,{value:dn},l.createElement(Tn,Ye({},J,{ref:n,id:V,prefixCls:a,dropdownMatchSelectWidth:ne,dropdownStyle:fn,displayValues:rn,onDisplayValuesChange:on,mode:H?"multiple":void 0,searchValue:he,onSearch:k,showSearch:W,OptionList:ht,emptyOptions:Fe,open:ln,dropdownClassName:cn,placement:sn,onDropdownVisibleChange:un,getRawInputElement:function(){return L}})))});Ke.SHOW_PARENT=Qe;Ke.SHOW_CHILD=Ze;const Ct=e=>{const{prefixCls:n,componentCls:t,antCls:r}=e,a=`${t}-menu-item`,o=`
    &${a}-expand ${a}-expand-icon,
    ${a}-loading-icon
  `,i=Math.round((e.controlHeight-e.fontSize*e.lineHeight)/2);return[{[t]:{width:e.controlWidth}},{[`${t}-dropdown`]:[Kn(`${n}-checkbox`,e),{[`&${r}-select-dropdown`]:{padding:0}},{[t]:{"&-checkbox":{top:0,marginInlineEnd:e.paddingXS},"&-menus":{display:"flex",flexWrap:"nowrap",alignItems:"flex-start",[`&${t}-menu-empty`]:{[`${t}-menu`]:{width:"100%",height:"auto",[a]:{color:e.colorTextDisabled}}}},"&-menu":{flexGrow:1,minWidth:e.controlItemWidth,height:e.dropdownHeight,margin:0,padding:e.paddingXXS,overflow:"auto",verticalAlign:"top",listStyle:"none","-ms-overflow-style":"-ms-autohiding-scrollbar","&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},"&-item":Object.assign(Object.assign({},yn),{display:"flex",flexWrap:"nowrap",alignItems:"center",padding:`${i}px ${e.paddingSM}px`,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationMid}`,borderRadius:e.borderRadiusSM,"&:hover":{background:e.controlItemBgHover},"&-disabled":{color:e.colorTextDisabled,cursor:"not-allowed","&:hover":{background:"transparent"},[o]:{color:e.colorTextDisabled}},[`&-active:not(${a}-disabled)`]:{["&, &:hover"]:{fontWeight:e.fontWeightStrong,backgroundColor:e.controlItemBgActive}},"&-content":{flex:"auto"},[o]:{marginInlineStart:e.paddingXXS,color:e.colorTextDescription,fontSize:e.fontSizeIcon},"&-keyword":{color:e.colorHighlight}})}}}]},{[`${t}-dropdown-rtl`]:{direction:"rtl"}},Sn(e)]},yt=Cn("Cascader",e=>[Ct(e)],{controlWidth:184,controlItemWidth:111,dropdownHeight:180});var St=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const{SHOW_CHILD:bt,SHOW_PARENT:xt}=Ke;function wt(e,n,t){const r=e.toLowerCase().split(n).reduce((i,c,d)=>d===0?[c]:[].concat(te(i),[n,c]),[]),a=[];let o=0;return r.forEach((i,c)=>{const d=o+i.length;let s=e.slice(o,d);o=d,c%2===1&&(s=l.createElement("span",{className:`${t}-menu-item-keyword`,key:`separator-${c}`},s)),a.push(s)}),a}const kt=(e,n,t,r)=>{const a=[],o=e.toLowerCase();return n.forEach((i,c)=>{c!==0&&a.push(" / ");let d=i[r.label];const s=typeof d;(s==="string"||s==="number")&&(d=wt(String(d),o,t)),a.push(d)}),a},Ne=l.forwardRef((e,n)=>{const{prefixCls:t,size:r,disabled:a,className:o,rootClassName:i,multiple:c,bordered:d=!0,transitionName:s,choiceTransitionName:C="",popupClassName:m,dropdownClassName:f,expandIcon:v,placement:p,showSearch:h,allowClear:u=!0,notFoundContent:y,direction:P,getPopupContainer:_,status:S,showArrow:O,builtinPlacements:N}=e,x=St(e,["prefixCls","size","disabled","className","rootClassName","multiple","bordered","transitionName","choiceTransitionName","popupClassName","dropdownClassName","expandIcon","placement","showSearch","allowClear","notFoundContent","direction","getPopupContainer","status","showArrow","builtinPlacements"]),I=bn(x,["suffixIcon"]),{getPopupContainer:g,getPrefixCls:w,renderEmpty:b,direction:T,popupOverflow:F}=l.useContext(xn),K=P||T,L=K==="rtl",{status:X,hasFeedback:ne,isFormItemInput:D,feedbackIcon:U}=l.useContext(wn),J=Gn(X,S),V=y||(b==null?void 0:b("Cascader"))||l.createElement(Dn,{componentName:"Cascader"}),H=w(),R=w("select",t),j=w("cascader",t),[q,B]=Wn(R),[Q]=yt(j),{compactSize:Z,compactItemClassnames:ee}=kn(R,P),ce=Ie(m||f,`${j}-dropdown`,{[`${j}-dropdown-rtl`]:K==="rtl"},i,B),ke=l.useMemo(()=>{if(!h)return h;let re={render:kt};return typeof h=="object"&&(re=Object.assign(Object.assign({},re),h)),re},[h]),Ce=Pn(re=>{var fe;return(fe=Z??r)!==null&&fe!==void 0?fe:re}),he=l.useContext(En),A=a??he;let k=v;v||(k=L?l.createElement(An,null):l.createElement(Ln,null));const M=l.createElement("span",{className:`${R}-menu-item-loading-icon`},l.createElement(On,{spin:!0})),$=l.useMemo(()=>c?l.createElement("span",{className:`${j}-checkbox-inner`}):!1,[c]),W=jn(O),{suffixIcon:ae,removeIcon:se,clearIcon:me}=Hn(Object.assign(Object.assign({},e),{hasFeedback:ne,feedbackIcon:U,showArrow:W,multiple:c,prefixCls:R})),ye=l.useMemo(()=>p!==void 0?p:L?"bottomRight":"bottomLeft",[p,L]),oe=Fn(N,F),ue=l.createElement(Ke,Object.assign({prefixCls:R,className:Ie(!t&&j,{[`${R}-lg`]:Ce==="large",[`${R}-sm`]:Ce==="small",[`${R}-rtl`]:L,[`${R}-borderless`]:!d,[`${R}-in-form-item`]:D},zn(R,J,ne),ee,o,i,B),disabled:A},I,{builtinPlacements:oe,direction:K,placement:ye,notFoundContent:V,allowClear:u,showSearch:ke,expandIcon:k,inputIcon:ae,removeIcon:se,clearIcon:me,loadingIcon:M,checkable:$,dropdownClassName:ce,dropdownPrefixCls:t||j,choiceTransitionName:ze(H,"",C),transitionName:ze(H,In(p),s),getPopupContainer:_||g,ref:n,showArrow:ne||W}));return Q(q(ue))}),Pt=Bn(Ne);Ne.SHOW_PARENT=xt;Ne.SHOW_CHILD=bt;Ne._InternalPanelDoNotUseOrYouWillBeFired=Pt;const Et=Ne;function Tt(e){var n;return be(Nn,{extra:Ge("span",{children:[be("strong",{children:e.productCount})," Product"]}),size:"small",type:"inner",title:be(Mn,{separator:"/",items:(n=e.categoriesName)==null?void 0:n.map(t=>({title:t}))}),children:Ge(Vn,{style:{rowGap:"5px"},children:[be($n.Text,{children:"Map to :"}),be(_n,{style:{columnGap:"7px"},children:be(Et,{value:e.catsValue,onChange:e.onChangeCatsValue,options:e.optionsCats,placeholder:"Category Tree",showSearch:!0,style:{width:"100%"}})})]})})}export{Tt as default};
