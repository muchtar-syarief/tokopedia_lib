import{r as f,q as ee,y as pe,x as X,V as Re,S as In,H as Q,h as Ce,O as ue,l as We,u as Te,Z as Ie,G as _n,e as Ge,ag as Vn,a5 as Nn,g as Xe,$ as $n,p as Mn,a8 as Kn,i as An,D as Dn,ad as Be,b as Se,j as ze,E as Tn,F as Ln,C as Rn}from"./nox_eAQthyghr.js";import{B as Wn}from"./nox_7ohXr7X7X.js";import{T as Fn}from"./nox_AypQAh7XA.js";import{e as Hn,f as jn,B as Bn,D as Ue,u as zn,b as Gn,c as Xn,d as Un}from"./nox_ggrXXkoQe.js";import{g as qn}from"./nox_Qt7XAAoyh.js";import{e as Jn,f as Yn}from"./nox_QheAeyg7A.js";import{F as Zn}from"./nox_X7rooyogr.js";import{L as Qn,g as et}from"./nox_rrptyggpQ.js";import{R as nt}from"./nox_X77oykoAX.js";import"./nox_oQAp7oohr.js";import"./nox_AXotyeoXA.js";var ke=f.createContext(null),be="__rc_cascader_search_mark__",tt=function(n,t,a){var r=a.label;return t.some(function(o){return String(o[r]).toLowerCase().includes(n.toLowerCase())})},at=function(n,t,a,r){return t.map(function(o){return o[r.label]}).join(" / ")};const rt=function(e,n,t,a,r,o){var l=r.filter,i=l===void 0?tt:l,c=r.render,s=c===void 0?at:c,g=r.limit,p=g===void 0?50:g,u=r.sort;return f.useMemo(function(){var v=[];if(!e)return[];function m(d,h){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;d.forEach(function(x){if(!(!u&&p!==!1&&p>0&&v.length>=p)){var y=[].concat(ee(h),[x]),I=x[t.children],O=S||x.disabled;if((!I||I.length===0||o)&&i(e,y,{label:t.label})){var b;v.push(pe(pe({},x),{},(b={disabled:O},X(b,t.label,s(e,y,a,t)),X(b,be,y),X(b,t.children,void 0),b)))}I&&m(x[t.children],y,O)}})}return m(n,[]),u&&v.sort(function(d,h){return u(d[be],h[be],e,t)}),p!==!1&&p>0?v.slice(0,p):v},[e,n,t,a,s,o,i,u,p])};var Fe="__RC_CASCADER_SPLIT__",qe="SHOW_PARENT",Je="SHOW_CHILD";function oe(e){return e.join(Fe)}function xe(e){return e.map(oe)}function ot(e){return e.split(Fe)}function Ye(e){var n=e||{},t=n.label,a=n.value,r=n.children,o=a||"value";return{label:t||"label",value:o,key:o,children:r||"children"}}function Oe(e,n){var t,a;return(t=e.isLeaf)!==null&&t!==void 0?t:!((a=e[n.children])!==null&&a!==void 0&&a.length)}function lt(e){var n=e.parentElement;if(n){var t=e.offsetTop-n.offsetTop;t-n.scrollTop<0?n.scrollTo({top:t}):t+e.offsetHeight-n.scrollTop>n.offsetHeight&&n.scrollTo({top:t+e.offsetHeight-n.offsetHeight})}}function Ze(e,n){return e.map(function(t){var a;return(a=t[be])===null||a===void 0?void 0:a.map(function(r){return r[n.value]})})}function it(e){return Array.isArray(e)&&Array.isArray(e[0])}function _e(e){return e?it(e)?e:(e.length===0?[]:[e]).map(function(n){return Array.isArray(n)?n:[n]}):[]}function Qe(e,n,t){var a=new Set(e),r=n();return e.filter(function(o){var l=r[o],i=l?l.parent:null,c=l?l.children:null;return l&&l.node.disabled?!0:t===Je?!(c&&c.some(function(s){return s.key&&a.has(s.key)})):!(i&&!i.node.disabled&&a.has(i.key))})}function we(e,n,t){for(var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=n,o=[],l=function(){var s,g,p,u=e[i],v=(s=r)===null||s===void 0?void 0:s.findIndex(function(d){var h=d[t.value];return a?String(h)===String(u):h===u}),m=v!==-1?(g=r)===null||g===void 0?void 0:g[v]:null;o.push({value:(p=m==null?void 0:m[t.value])!==null&&p!==void 0?p:u,index:v,option:m}),r=m==null?void 0:m[t.children]},i=0;i<e.length;i+=1)l();return o}const ct=function(e,n,t,a,r){return f.useMemo(function(){var o=r||function(l){var i=a?l.slice(-1):l,c=" / ";return i.every(function(s){return["string","number"].includes(Re(s))})?i.join(c):i.reduce(function(s,g,p){var u=f.isValidElement(g)?f.cloneElement(g,{key:p}):g;return p===0?[u]:[].concat(ee(s),[c,u])},[])};return e.map(function(l){var i,c,s=we(l,n,t),g=o(s.map(function(u){var v,m=u.option,d=u.value;return(v=m==null?void 0:m[t.label])!==null&&v!==void 0?v:d}),s.map(function(u){var v=u.option;return v})),p=oe(l);return{label:g,value:p,key:p,valueCells:l,disabled:(i=s[s.length-1])===null||i===void 0||(c=i.option)===null||c===void 0?void 0:c.disabled}})},[e,n,t,r,a])};function en(e,n){return f.useCallback(function(t){var a=[],r=[];return t.forEach(function(o){var l=we(o,e,n);l.every(function(i){return i.option})?r.push(o):a.push(o)}),[r,a]},[e,n])}function st(e,n){return e[n]}function ut(e,n){return"".concat(e,"-").concat(n)}function nn(e,n){return e??n}function dt(e){var n=e||{},t=n.title,a=n._title,r=n.key,o=n.children,l=t||"title";return{title:l,_title:a||[l],key:r||"key",children:o||"children"}}function ft(e,n,t){var a={};Re(t)==="object"?a=t:a={externalGetKey:t},a=a||{};var r=a,o=r.childrenPropName,l=r.externalGetKey,i=r.fieldNames,c=dt(i),s=c.key,g=c.children,p=o||g,u;l?typeof l=="string"?u=function(d){return d[l]}:typeof l=="function"&&(u=function(d){return l(d)}):u=function(d,h){return nn(d[s],h)};function v(m,d,h,S){var x=m?m[p]:e,y=m?ut(h.pos,d):"0",I=m?[].concat(ee(S),[m]):[];if(m){var O=u(m,y),b={node:m,index:d,pos:y,key:O,parentPos:h.node?h.pos:null,level:h.level+1,nodes:I};n(b)}x&&x.forEach(function(w,V){v(w,V,{node:m,pos:y,level:h?h.level+1:-1},I)})}v(null)}function vt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.initWrapper,a=n.processEntity,r=n.onProcessFinished,o=n.externalGetKey,l=n.childrenPropName,i=n.fieldNames,c=arguments.length>2?arguments[2]:void 0,s=o||c,g={},p={},u={posEntities:g,keyEntities:p};return t&&(u=t(u)||u),ft(e,function(v){var m=v.node,d=v.index,h=v.pos,S=v.key,x=v.parentPos,y=v.level,I=v.nodes,O={node:m,nodes:I,index:d,key:S,pos:h,level:y},b=nn(S,h);g[h]=O,p[b]=O,O.parent=g[x],O.parent&&(O.parent.children=O.parent.children||[],O.parent.children.push(O)),a&&a(O,u)},{externalGetKey:s,childrenPropName:l,fieldNames:i}),r&&r(u),u}const pt=function(e,n){var t=f.useRef({options:null,info:null}),a=f.useCallback(function(){return t.current.options!==e&&(t.current.options=e,t.current.info=vt(e,{fieldNames:n,initWrapper:function(o){return pe(pe({},o),{},{pathKeyEntities:{}})},processEntity:function(o,l){var i=o.nodes.map(function(c){return c[n.value]}).join(Fe);l.pathKeyEntities[i]=o,o.key=i}})),t.current.info.pathKeyEntities},[n,e]);return a};function tn(e,n){var t=f.useMemo(function(){return n||[]},[n]),a=pt(t,e),r=f.useCallback(function(o){var l=a();return o.map(function(i){var c=l[i].nodes;return c.map(function(s){return s[e.value]})})},[a,e]);return[t,a,r]}function ht(e){return f.useMemo(function(){if(!e)return[!1,{}];var n={matchInputWidth:!0,limit:50};return e&&Re(e)==="object"&&(n=pe(pe({},n),e)),n.limit<=0&&delete n.limit,[!0,n]},[e])}function an(e,n){var t=new Set;return e.forEach(function(a){n.has(a)||t.add(a)}),t}function mt(e){var n=e||{},t=n.disabled,a=n.disableCheckbox,r=n.checkable;return!!(t||a)||r===!1}function gt(e,n,t,a){for(var r=new Set(e),o=new Set,l=0;l<=t;l+=1){var i=n.get(l)||new Set;i.forEach(function(p){var u=p.key,v=p.node,m=p.children,d=m===void 0?[]:m;r.has(u)&&!a(v)&&d.filter(function(h){return!a(h.node)}).forEach(function(h){r.add(h.key)})})}for(var c=new Set,s=t;s>=0;s-=1){var g=n.get(s)||new Set;g.forEach(function(p){var u=p.parent,v=p.node;if(!(a(v)||!p.parent||c.has(p.parent.key))){if(a(p.parent.node)){c.add(u.key);return}var m=!0,d=!1;(u.children||[]).filter(function(h){return!a(h.node)}).forEach(function(h){var S=h.key,x=r.has(S);m&&!x&&(m=!1),!d&&(x||o.has(S))&&(d=!0)}),m&&r.add(u.key),d&&o.add(u.key),c.add(u.key)}})}return{checkedKeys:Array.from(r),halfCheckedKeys:Array.from(an(o,r))}}function Ct(e,n,t,a,r){for(var o=new Set(e),l=new Set(n),i=0;i<=a;i+=1){var c=t.get(i)||new Set;c.forEach(function(u){var v=u.key,m=u.node,d=u.children,h=d===void 0?[]:d;!o.has(v)&&!l.has(v)&&!r(m)&&h.filter(function(S){return!r(S.node)}).forEach(function(S){o.delete(S.key)})})}l=new Set;for(var s=new Set,g=a;g>=0;g-=1){var p=t.get(g)||new Set;p.forEach(function(u){var v=u.parent,m=u.node;if(!(r(m)||!u.parent||s.has(u.parent.key))){if(r(u.parent.node)){s.add(v.key);return}var d=!0,h=!1;(v.children||[]).filter(function(S){return!r(S.node)}).forEach(function(S){var x=S.key,y=o.has(x);d&&!y&&(d=!1),!h&&(y||l.has(x))&&(h=!0)}),d||o.delete(v.key),h&&l.add(v.key),s.add(v.key)}})}return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(an(l,o))}}function Le(e,n,t,a){var r=[],o;a?o=a:o=mt;var l=new Set(e.filter(function(g){var p=!!st(t,g);return p||r.push(g),p})),i=new Map,c=0;Object.keys(t).forEach(function(g){var p=t[g],u=p.level,v=i.get(u);v||(v=new Set,i.set(u,v)),v.add(p),c=Math.max(c,u)}),In(!r.length,"Tree missing follow keys: ".concat(r.slice(0,100).map(function(g){return"'".concat(g,"'")}).join(", ")));var s;return n===!0?s=gt(l,i,c,o):s=Ct(l,n.halfCheckedKeys,i,c,o),s}function rn(e,n,t,a,r,o,l,i){return function(c){if(!e)n(c);else{var s=oe(c),g=xe(t),p=xe(a),u=g.includes(s),v=r.some(function(b){return oe(b)===s}),m=t,d=r;if(v&&!u)d=r.filter(function(b){return oe(b)!==s});else{var h=u?g.filter(function(b){return b!==s}):[].concat(ee(g),[s]),S=o(),x;if(u){var y=Le(h,{checked:!1,halfCheckedKeys:p},S);x=y.checkedKeys}else{var I=Le(h,!0,S);x=I.checkedKeys}var O=Qe(x,o,i);m=l(O)}n([].concat(ee(d),ee(m)))}}}function on(e,n,t,a,r){return f.useMemo(function(){var o=r(n),l=Q(o,2),i=l[0],c=l[1];if(!e||!n.length)return[i,[],c];var s=xe(i),g=t(),p=Le(s,!0,g),u=p.checkedKeys,v=p.halfCheckedKeys;return[a(u),a(v),c]},[e,n,t,a,r])}var yt=f.memo(function(e){var n=e.children;return n},function(e,n){return!n.open});function St(e){var n,t=e.prefixCls,a=e.checked,r=e.halfChecked,o=e.disabled,l=e.onClick,i=e.disableCheckbox,c=f.useContext(ke),s=c.checkable,g=typeof s!="boolean"?s:null;return f.createElement("span",{className:Ce("".concat(t),(n={},X(n,"".concat(t,"-checked"),a),X(n,"".concat(t,"-indeterminate"),!a&&r),X(n,"".concat(t,"-disabled"),o||i),n)),onClick:l},g)}var ln="__cascader_fix_label__";function bt(e){var n=e.prefixCls,t=e.multiple,a=e.options,r=e.activeValue,o=e.prevValuePath,l=e.onToggleOpen,i=e.onSelect,c=e.onActive,s=e.checkedSet,g=e.halfCheckedSet,p=e.loadingKeys,u=e.isSelectable,v=e.searchValue,m="".concat(n,"-menu"),d="".concat(n,"-menu-item"),h=f.useContext(ke),S=h.fieldNames,x=h.changeOnSelect,y=h.expandTrigger,I=h.expandIcon,O=h.loadingIcon,b=h.dropdownMenuColumnStyle,w=y==="hover",V=f.useMemo(function(){return a.map(function(C){var P,_=C.disabled,N=C.disableCheckbox,$=C[be],R=(P=C[ln])!==null&&P!==void 0?P:C[S.label],A=C[S.value],j=Oe(C,S),U=$?$.map(function(z){return z[S.value]}):[].concat(ee(o),[A]),W=oe(U),M=p.includes(W),E=s.has(W),L=g.has(W);return{disabled:_,label:R,value:A,isLeaf:j,isLoading:M,checked:E,halfChecked:L,option:C,disableCheckbox:N,fullPath:U,fullPathKey:W}})},[a,s,S,g,p,o]);return f.createElement("ul",{className:m,role:"menu"},V.map(function(C){var P,_=C.disabled,N=C.label,$=C.value,R=C.isLeaf,A=C.isLoading,j=C.checked,U=C.halfChecked,W=C.option,M=C.fullPath,E=C.fullPathKey,L=C.disableCheckbox,z=function(){if(!(_||v)){var B=ee(M);w&&R&&B.pop(),c(B)}},q=function(){u(W)&&i(M,R)},H;return typeof W.title=="string"?H=W.title:typeof N=="string"&&(H=N),f.createElement("li",{key:E,className:Ce(d,(P={},X(P,"".concat(d,"-expand"),!R),X(P,"".concat(d,"-active"),r===$||r===E),X(P,"".concat(d,"-disabled"),_),X(P,"".concat(d,"-loading"),A),P)),style:b,role:"menuitemcheckbox",title:H,"aria-checked":j,"data-path-key":E,onClick:function(){z(),!L&&(!t||R)&&q()},onDoubleClick:function(){x&&l(!1)},onMouseEnter:function(){w&&z()},onMouseDown:function(B){B.preventDefault()}},t&&f.createElement(St,{prefixCls:"".concat(n,"-checkbox"),checked:j,halfChecked:U,disabled:_||L,disableCheckbox:L,onClick:function(B){L||(B.stopPropagation(),q())}}),f.createElement("div",{className:"".concat(d,"-content")},N),!A&&I&&!R&&f.createElement("div",{className:"".concat(d,"-expand-icon")},I),A&&O&&f.createElement("div",{className:"".concat(d,"-loading-icon")},O))}))}const xt=function(e,n){var t=f.useContext(ke),a=t.values,r=f.useState([]),o=Q(r,2),l=o[0],i=o[1];return f.useEffect(function(){if(n&&!e){var c=a[0];i(c||[])}},[n]),[l,i]},wt=function(e,n,t,a,r,o,l){var i=l.direction,c=l.searchValue,s=l.toggleOpen,g=l.open,p=i==="rtl",u=f.useMemo(function(){for(var b=-1,w=n,V=[],C=[],P=a.length,_=Ze(n,t),N=function(W){var M=w.findIndex(function(E,L){return(_[L]?oe(_[L]):E[t.value])===a[W]});if(M===-1)return"break";b=M,V.push(b),C.push(a[W]),w=w[b][t.children]},$=0;$<P&&w;$+=1){var R=N($);if(R==="break")break}for(var A=n,j=0;j<V.length-1;j+=1)A=A[V[j]][t.children];return[C,b,A,_]},[a,t,n]),v=Q(u,4),m=v[0],d=v[1],h=v[2],S=v[3],x=function(w){r(w)},y=function(w){var V=h.length,C=d;C===-1&&w<0&&(C=V);for(var P=0;P<V;P+=1){C=(C+w+V)%V;var _=h[C];if(_&&!_.disabled){var N=m.slice(0,-1).concat(S[C]?oe(S[C]):_[t.value]);x(N);return}}},I=function(){if(m.length>1){var w=m.slice(0,-1);x(w)}else s(!1)},O=function(){var w,V=((w=h[d])===null||w===void 0?void 0:w[t.children])||[],C=V.find(function(_){return!_.disabled});if(C){var P=[].concat(ee(m),[C[t.value]]);x(P)}};f.useImperativeHandle(e,function(){return{onKeyDown:function(w){var V=w.which;switch(V){case ue.UP:case ue.DOWN:{var C=0;V===ue.UP?C=-1:V===ue.DOWN&&(C=1),C!==0&&y(C);break}case ue.LEFT:{if(c)break;p?O():I();break}case ue.RIGHT:{if(c)break;p?I():O();break}case ue.BACKSPACE:{c||I();break}case ue.ENTER:{if(m.length){var P=h[d],_=(P==null?void 0:P[be])||[];_.length?o(_.map(function(N){return N[t.value]}),_[_.length-1]):o(m,h[d])}break}case ue.ESC:s(!1),g&&w.stopPropagation()}},onKeyUp:function(){}}})};var cn=f.forwardRef(function(e,n){var t,a,r,o,l=e.prefixCls,i=e.multiple,c=e.searchValue,s=e.toggleOpen,g=e.notFoundContent,p=e.direction,u=e.open,v=f.useRef(),m=p==="rtl",d=f.useContext(ke),h=d.options,S=d.values,x=d.halfValues,y=d.fieldNames,I=d.changeOnSelect,O=d.onSelect,b=d.searchOptions,w=d.dropdownPrefixCls,V=d.loadData,C=d.expandTrigger,P=w||l,_=f.useState([]),N=Q(_,2),$=N[0],R=N[1],A=function(k){if(!(!V||c)){var D=we(k,h,y),T=D.map(function(de){var me=de.option;return me}),F=T[T.length-1];if(F&&!Oe(F,y)){var ne=oe(k);R(function(de){return[].concat(ee(de),[ne])}),V(T)}}};f.useEffect(function(){$.length&&$.forEach(function(K){var k=ot(K),D=we(k,h,y,!0).map(function(F){var ne=F.option;return ne}),T=D[D.length-1];(!T||T[y.children]||Oe(T,y))&&R(function(F){return F.filter(function(ne){return ne!==K})})})},[h,$,y]);var j=f.useMemo(function(){return new Set(xe(S))},[S]),U=f.useMemo(function(){return new Set(xe(x))},[x]),W=xt(i,u),M=Q(W,2),E=M[0],L=M[1],z=function(k){L(k),A(k)},q=function(k){var D=k.disabled,T=Oe(k,y);return!D&&(T||I||i)},H=function(k,D){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;O(k),!i&&(D||I&&(C==="hover"||T))&&s(!1)},G=f.useMemo(function(){return c?b:h},[c,b,h]),B=f.useMemo(function(){for(var K=[{options:G}],k=G,D=Ze(k,y),T=function(){var me=E[F],fe=k.find(function(ye,ve){return(D[ve]?oe(D[ve]):ye[y.value])===me}),ie=fe==null?void 0:fe[y.children];if(!(ie!=null&&ie.length))return"break";k=ie,K.push({options:ie})},F=0;F<E.length;F+=1){var ne=T();if(ne==="break")break}return K},[G,E,y]),he=function(k,D){q(D)&&H(k,Oe(D,y),!0)};wt(n,G,y,E,z,he,{direction:p,searchValue:c,toggleOpen:s,open:u}),f.useEffect(function(){for(var K=0;K<E.length;K+=1){var k,D=E.slice(0,K+1),T=oe(D),F=(k=v.current)===null||k===void 0?void 0:k.querySelector('li[data-path-key="'.concat(T.replace(/\\{0,2}"/g,'\\"'),'"]'));F&&lt(F)}},[E]);var te=!((t=B[0])!==null&&t!==void 0&&(a=t.options)!==null&&a!==void 0&&a.length),J=[(r={},X(r,y.value,"__EMPTY__"),X(r,ln,g),X(r,"disabled",!0),r)],le=pe(pe({},e),{},{multiple:!te&&i,onSelect:H,onActive:z,onToggleOpen:s,checkedSet:j,halfCheckedSet:U,loadingKeys:$,isSelectable:q}),ae=te?[{options:J}]:B,Y=ae.map(function(K,k){var D=E.slice(0,k),T=E[k];return f.createElement(bt,We({key:k},le,{searchValue:c,prefixCls:P,options:K.options,prevValuePath:D,activeValue:T}))});return f.createElement(yt,{open:u},f.createElement("div",{className:Ce("".concat(P,"-menus"),(o={},X(o,"".concat(P,"-menu-empty"),te),X(o,"".concat(P,"-rtl"),m),o)),ref:v},Y))}),kt=f.forwardRef(function(e,n){var t=Hn();return f.createElement(cn,We({},e,t,{ref:n}))});function Pt(){}function sn(e){var n,t=e,a=t.prefixCls,r=a===void 0?"rc-cascader":a,o=t.style,l=t.className,i=t.options,c=t.checkable,s=t.defaultValue,g=t.value,p=t.fieldNames,u=t.changeOnSelect,v=t.onChange,m=t.showCheckedStrategy,d=t.loadData,h=t.expandTrigger,S=t.expandIcon,x=S===void 0?">":S,y=t.loadingIcon,I=t.direction,O=t.notFoundContent,b=O===void 0?"Not Found":O,w=!!c,V=Te(s,{value:g,postState:_e}),C=Q(V,2),P=C[0],_=C[1],N=f.useMemo(function(){return Ye(p)},[JSON.stringify(p)]),$=tn(N,i),R=Q($,3),A=R[0],j=R[1],U=R[2],W=en(A,N),M=on(w,P,j,U,W),E=Q(M,3),L=E[0],z=E[1],q=E[2],H=Ie(function(le){if(_(le),v){var ae=_e(le),Y=ae.map(function(D){return we(D,A,N).map(function(T){return T.option})}),K=w?ae:ae[0],k=w?Y:Y[0];v(K,k)}}),G=rn(w,H,L,z,q,j,U,m),B=Ie(function(le){G(le)}),he=f.useMemo(function(){return{options:A,fieldNames:N,values:L,halfValues:z,changeOnSelect:u,onSelect:B,checkable:c,searchOptions:[],dropdownPrefixCls:null,loadData:d,expandTrigger:h,expandIcon:x,loadingIcon:y,dropdownMenuColumnStyle:null}},[A,N,L,z,u,B,c,d,h,x,y]),te="".concat(r,"-panel"),J=!A.length;return f.createElement(ke.Provider,{value:he},f.createElement("div",{className:Ce(te,(n={},X(n,"".concat(te,"-rtl"),I==="rtl"),X(n,"".concat(te,"-empty"),J),n),l),style:o},J?b:f.createElement(cn,{prefixCls:r,searchValue:null,multiple:w,toggleOpen:Pt,open:!0,direction:I})))}var Ot=["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","autoClearSearchValue","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","children","dropdownMatchSelectWidth","showCheckedStrategy"],Ee=f.forwardRef(function(e,n){var t=e.id,a=e.prefixCls,r=a===void 0?"rc-cascader":a,o=e.fieldNames,l=e.defaultValue,i=e.value,c=e.changeOnSelect,s=e.onChange,g=e.displayRender,p=e.checkable,u=e.autoClearSearchValue,v=u===void 0?!0:u,m=e.searchValue,d=e.onSearch,h=e.showSearch,S=e.expandTrigger,x=e.options,y=e.dropdownPrefixCls,I=e.loadData,O=e.popupVisible,b=e.open,w=e.popupClassName,V=e.dropdownClassName,C=e.dropdownMenuColumnStyle,P=e.popupPlacement,_=e.placement,N=e.onDropdownVisibleChange,$=e.onPopupVisibleChange,R=e.expandIcon,A=R===void 0?">":R,j=e.loadingIcon,U=e.children,W=e.dropdownMatchSelectWidth,M=W===void 0?!1:W,E=e.showCheckedStrategy,L=E===void 0?qe:E,z=_n(e,Ot),q=jn(t),H=!!p,G=Te(l,{value:i,postState:_e}),B=Q(G,2),he=B[0],te=B[1],J=f.useMemo(function(){return Ye(o)},[JSON.stringify(o)]),le=tn(J,x),ae=Q(le,3),Y=ae[0],K=ae[1],k=ae[2],D=Te("",{value:m,postState:function(Z){return Z||""}}),T=Q(D,2),F=T[0],ne=T[1],de=function(Z,ge){ne(Z),ge.source!=="blur"&&d&&d(Z)},me=ht(h),fe=Q(me,2),ie=fe[0],ye=fe[1],ve=rt(F,Y,J,y||r,ye,c),Ve=en(Y,J),Ne=on(H,he,K,k,Ve),ce=Q(Ne,3),se=ce[0],$e=ce[1],Me=ce[2],mn=f.useMemo(function(){var re=xe(se),Z=Qe(re,K,L);return[].concat(ee(Me),ee(k(Z)))},[se,K,k,Me,L]),gn=ct(mn,Y,J,H,g),He=Ie(function(re){if(te(re),s){var Z=_e(re),ge=Z.map(function(On){return we(On,Y,J).map(function(En){return En.option})}),Ae=H?Z:Z[0],De=H?ge:ge[0];s(Ae,De)}}),Cn=rn(H,He,se,$e,Me,K,k,L),Ke=Ie(function(re){(!H||v)&&ne(""),Cn(re)}),yn=function(Z,ge){if(ge.type==="clear"){He([]);return}var Ae=ge.values[0],De=Ae.valueCells;Ke(De)},Sn=b!==void 0?b:O,bn=V||w,xn=_||P,wn=function(Z){N==null||N(Z),$==null||$(Z)},kn=f.useMemo(function(){return{options:Y,fieldNames:J,values:se,halfValues:$e,changeOnSelect:c,onSelect:Ke,checkable:p,searchOptions:ve,dropdownPrefixCls:y,loadData:I,expandTrigger:S,expandIcon:A,loadingIcon:j,dropdownMenuColumnStyle:C}},[Y,J,se,$e,c,Ke,p,ve,y,I,S,A,j,C]),je=!(F?ve:Y).length,Pn=F&&ye.matchInputWidth||je?{}:{minWidth:"auto"};return f.createElement(ke.Provider,{value:kn},f.createElement(Bn,We({},z,{ref:n,id:q,prefixCls:r,autoClearSearchValue:v,dropdownMatchSelectWidth:M,dropdownStyle:Pn,displayValues:gn,onDisplayValuesChange:yn,mode:H?"multiple":void 0,searchValue:F,onSearch:de,showSearch:ie,OptionList:kt,emptyOptions:je,open:Sn,dropdownClassName:bn,placement:xn,onDropdownVisibleChange:wn,getRawInputElement:function(){return U}})))});Ee.SHOW_PARENT=qe;Ee.SHOW_CHILD=Je;Ee.Panel=sn;function un(e,n){const{getPrefixCls:t,direction:a,renderEmpty:r}=f.useContext(Ge),o=n||a,l=t("select",e),i=t("cascader",e);return[l,i,o,r]}function dn(e,n){return f.useMemo(()=>n?f.createElement("span",{className:`${e}-checkbox-inner`}):!1,[n])}function fn(e,n,t){let a=t;t||(a=n?f.createElement(Qn,null):f.createElement(nt,null));const r=f.createElement("span",{className:`${e}-menu-item-loading-icon`},f.createElement(Vn,{spin:!0}));return[a,r]}const Et=e=>{const{prefixCls:n,componentCls:t}=e,a=`${t}-menu-item`,r=`
  &${a}-expand ${a}-expand-icon,
  ${a}-loading-icon
`;return[et(`${n}-checkbox`,e),{[t]:{"&-checkbox":{top:0,marginInlineEnd:e.paddingXS},"&-menus":{display:"flex",flexWrap:"nowrap",alignItems:"flex-start",[`&${t}-menu-empty`]:{[`${t}-menu`]:{width:"100%",height:"auto",[a]:{color:e.colorTextDisabled}}}},"&-menu":{flexGrow:1,flexShrink:0,minWidth:e.controlItemWidth,height:e.dropdownHeight,margin:0,padding:e.menuPadding,overflow:"auto",verticalAlign:"top",listStyle:"none","-ms-overflow-style":"-ms-autohiding-scrollbar","&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},"&-item":Object.assign(Object.assign({},Nn),{display:"flex",flexWrap:"nowrap",alignItems:"center",padding:e.optionPadding,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationMid}`,borderRadius:e.borderRadiusSM,"&:hover":{background:e.controlItemBgHover},"&-disabled":{color:e.colorTextDisabled,cursor:"not-allowed","&:hover":{background:"transparent"},[r]:{color:e.colorTextDisabled}},[`&-active:not(${a}-disabled)`]:{"&, &:hover":{fontWeight:e.optionSelectedFontWeight,backgroundColor:e.optionSelectedBg}},"&-content":{flex:"auto"},[r]:{marginInlineStart:e.paddingXXS,color:e.colorTextDescription,fontSize:e.fontSizeIcon},"&-keyword":{color:e.colorHighlight}})}}}]},vn=Et,It=e=>{const{componentCls:n,antCls:t}=e;return[{[n]:{width:e.controlWidth}},{[`${n}-dropdown`]:[{[`&${t}-select-dropdown`]:{padding:0}},vn(e)]},{[`${n}-dropdown-rtl`]:{direction:"rtl"}},$n(e)]},pn=e=>{const n=Math.round((e.controlHeight-e.fontSize*e.lineHeight)/2);return{controlWidth:184,controlItemWidth:111,dropdownHeight:180,optionSelectedBg:e.controlItemBgActive,optionSelectedFontWeight:e.fontWeightStrong,optionPadding:`${n}px ${e.paddingSM}px`,menuPadding:e.paddingXXS}},hn=Xe("Cascader",e=>[It(e)],pn),_t=e=>{const{componentCls:n}=e;return{[`${n}-panel`]:[vn(e),{display:"inline-flex",border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,borderRadius:e.borderRadiusLG,overflowX:"auto",maxWidth:"100%",[`${n}-menus`]:{alignItems:"stretch"},[`${n}-menu`]:{height:"auto"},"&-empty":{padding:e.paddingXXS}}]}},Vt=Xe(["Cascader","Panel"],e=>_t(e),pn);function Nt(e){const{prefixCls:n,className:t,multiple:a,rootClassName:r,notFoundContent:o,direction:l,expandIcon:i}=e,[c,s,g,p]=un(n,l),[,u]=hn(s);Vt(s);const v=g==="rtl",[m,d]=fn(c,v,i),h=o||(p==null?void 0:p("Cascader"))||f.createElement(Ue,{componentName:"Cascader"}),S=dn(s,a);return f.createElement(sn,Object.assign({},e,{checkable:S,prefixCls:s,className:Ce(t,u,r),notFoundContent:h,direction:g,expandIcon:m,loadingIcon:d}))}var $t=globalThis&&globalThis.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const{SHOW_CHILD:Mt,SHOW_PARENT:Kt}=Ee;function At(e,n,t){const a=e.toLowerCase().split(n).reduce((l,i,c)=>c===0?[i]:[].concat(ee(l),[n,i]),[]),r=[];let o=0;return a.forEach((l,i)=>{const c=o+l.length;let s=e.slice(o,c);o=c,i%2===1&&(s=f.createElement("span",{className:`${t}-menu-item-keyword`,key:`separator-${i}`},s)),r.push(s)}),r}const Dt=(e,n,t,a)=>{const r=[],o=e.toLowerCase();return n.forEach((l,i)=>{i!==0&&r.push(" / ");let c=l[a.label];const s=typeof c;(s==="string"||s==="number")&&(c=At(String(c),o,t)),r.push(c)}),r},Pe=f.forwardRef((e,n)=>{const{prefixCls:t,size:a,disabled:r,className:o,rootClassName:l,multiple:i,bordered:c=!0,transitionName:s,choiceTransitionName:g="",popupClassName:p,dropdownClassName:u,expandIcon:v,placement:m,showSearch:d,allowClear:h=!0,notFoundContent:S,direction:x,getPopupContainer:y,status:I,showArrow:O,builtinPlacements:b,style:w}=e,V=$t(e,["prefixCls","size","disabled","className","rootClassName","multiple","bordered","transitionName","choiceTransitionName","popupClassName","dropdownClassName","expandIcon","placement","showSearch","allowClear","notFoundContent","direction","getPopupContainer","status","showArrow","builtinPlacements","style"]),C=Mn(V,["suffixIcon"]),{getPopupContainer:P,getPrefixCls:_,popupOverflow:N,cascader:$}=f.useContext(Ge),{status:R,hasFeedback:A,isFormItemInput:j,feedbackIcon:U}=f.useContext(Zn),W=Yn(R,I),[M,E,L,z]=un(t,x),q=L==="rtl",H=_(),[G,B]=zn(M),[he]=hn(E),{compactSize:te,compactItemClassnames:J}=Kn(M,x),le=S||(z==null?void 0:z("Cascader"))||f.createElement(Ue,{componentName:"Cascader"}),ae=Ce(p||u,`${E}-dropdown`,{[`${E}-dropdown-rtl`]:L==="rtl"},l,B),Y=f.useMemo(()=>{if(!d)return d;let ce={render:Dt};return typeof d=="object"&&(ce=Object.assign(Object.assign({},ce),d)),ce},[d]),K=An(ce=>{var se;return(se=a??te)!==null&&se!==void 0?se:ce}),k=f.useContext(Dn),D=r??k,[T,F]=fn(M,q,v),ne=dn(E,i),de=Gn(e.suffixIcon,O),{suffixIcon:me,removeIcon:fe,clearIcon:ie}=Xn(Object.assign(Object.assign({},e),{hasFeedback:A,feedbackIcon:U,showSuffixIcon:de,multiple:i,prefixCls:M,componentName:"Cascader"})),ye=f.useMemo(()=>m!==void 0?m:q?"bottomRight":"bottomLeft",[m,q]),ve=Un(b,N),Ve=h===!0?{clearIcon:ie}:h,Ne=f.createElement(Ee,Object.assign({prefixCls:M,className:Ce(!t&&E,{[`${M}-lg`]:K==="large",[`${M}-sm`]:K==="small",[`${M}-rtl`]:q,[`${M}-borderless`]:!c,[`${M}-in-form-item`]:j},Jn(M,W,A),J,$==null?void 0:$.className,o,l,B),disabled:D,style:Object.assign(Object.assign({},$==null?void 0:$.style),w)},C,{builtinPlacements:ve,direction:L,placement:ye,notFoundContent:le,allowClear:Ve,showSearch:Y,expandIcon:T,suffixIcon:me,removeIcon:fe,loadingIcon:F,checkable:ne,dropdownClassName:ae,dropdownPrefixCls:t||E,choiceTransitionName:Be(H,"",g),transitionName:Be(H,"slide-up",s),getPopupContainer:y||P,ref:n}));return he(G(Ne))}),Tt=qn(Pe);Pe.SHOW_PARENT=Kt;Pe.SHOW_CHILD=Mt;Pe.Panel=Nt;Pe._InternalPanelDoNotUseOrYouWillBeFired=Tt;const Lt=Pe;function Jt(e){var n;return Se(Rn,{extra:ze("span",{children:[Se("strong",{children:e.productCount})," Product"]}),size:"small",type:"inner",title:Se(Wn,{separator:"/",items:(n=e.categoriesName)==null?void 0:n.map(t=>({title:t}))}),children:ze(Ln,{style:{rowGap:"5px"},children:[Se(Fn.Text,{children:"Map to :"}),Se(Tn,{style:{columnGap:"7px"},children:Se(Lt,{value:e.catsValue,onChange:e.onChangeCatsValue,options:e.optionsCats,placeholder:"Category Tree",showSearch:!0,style:{width:"100%"}})})]})})}export{Jt as default};