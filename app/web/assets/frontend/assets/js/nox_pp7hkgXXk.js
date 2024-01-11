import{r as T,A as Y,l as ee}from"./nox_XtthQrgQe.js";var Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};const ze=Me;var $e=function(t,r){return T.createElement(Y,ee({},t,{ref:r,icon:ze}))};const dr=T.forwardRef($e);var Je={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};const ve=Je;var Ve=function(t,r){return T.createElement(Y,ee({},t,{ref:r,icon:ve}))};const hr=T.forwardRef(Ve);var We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};const Ke=We;var Ge=function(t,r){return T.createElement(Y,ee({},t,{ref:r,icon:Ke}))};const mr=T.forwardRef(Ge);function we(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xe}=Object.prototype,{getPrototypeOf:te}=Object,I=(e=>t=>{const r=Xe.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>I(t)===e),q=e=>t=>typeof t===e,{isArray:F}=Array,L=q("undefined");function Qe(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const be=C("ArrayBuffer");function Ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&be(e.buffer),t}const Ye=q("string"),A=q("function"),Se=q("number"),M=e=>e!==null&&typeof e=="object",et=e=>e===!0||e===!1,D=e=>{if(I(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tt=C("Date"),rt=C("File"),nt=C("Blob"),st=C("FileList"),ot=e=>M(e)&&A(e.pipe),it=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=I(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},at=C("URLSearchParams"),ct=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),F(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(n=0;n<i;n++)l=o[n],t.call(null,e[l],l,e)}}function Re(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Ae=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ge=e=>!L(e)&&e!==Ae;function K(){const{caseless:e}=ge(this)&&this||{},t={},r=(n,s)=>{const o=e&&Re(t,s)||s;D(t[o])&&D(n)?t[o]=K(t[o],n):D(n)?t[o]=K({},n):F(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&B(arguments[n],r);return t}const lt=(e,t,r,{allOwnKeys:n}={})=>(B(t,(s,o)=>{r&&A(s)?e[o]=we(s,r):e[o]=s},{allOwnKeys:n}),e),ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ft=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},dt=(e,t,r,n)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=r!==!1&&te(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},ht=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},mt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!Se(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},pt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),yt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Et=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},wt=C("HTMLFormElement"),bt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),St=C("RegExp"),Ce=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};B(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},Rt=e=>{Ce(e,(t,r)=>{if(A(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(A(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},At=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return F(e)?n(e):n(String(e).split(t)),r},gt=()=>{},Ct=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",ce="0123456789",Te={DIGIT:ce,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+ce},Tt=(e=16,t=Te.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function xt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Nt=e=>{const t=new Array(10),r=(n,s)=>{if(M(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=F(n)?[]:{};return B(n,(i,l)=>{const d=r(i,s+1);!L(d)&&(o[l]=d)}),t[s]=void 0,o}}return n};return r(e,0)},Pt=C("AsyncFunction"),Ft=e=>e&&(M(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:F,isArrayBuffer:be,isBuffer:Qe,isFormData:it,isArrayBufferView:Ze,isString:Ye,isNumber:Se,isBoolean:et,isObject:M,isPlainObject:D,isUndefined:L,isDate:tt,isFile:rt,isBlob:nt,isRegExp:St,isFunction:A,isStream:ot,isURLSearchParams:at,isTypedArray:pt,isFileList:st,forEach:B,merge:K,extend:lt,trim:ct,stripBOM:ut,inherits:ft,toFlatObject:dt,kindOf:I,kindOfTest:C,endsWith:ht,toArray:mt,forEachEntry:yt,matchAll:Et,isHTMLForm:wt,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Ce,freezeMethods:Rt,toObjectSet:At,toCamelCase:bt,noop:gt,toFiniteNumber:Ct,findKey:Re,global:Ae,isContextDefined:ge,ALPHABET:Te,generateString:Tt,isSpecCompliantForm:xt,toJSONObject:Nt,isAsyncFn:Pt,isThenable:Ft};function p(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(p,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=p.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(p,Ne);Object.defineProperty(xe,"isAxiosError",{value:!0});p.from=(e,t,r,n,s,o)=>{const i=Object.create(xe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),p.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ot=null;function G(e){return a.isPlainObject(e)||a.isArray(e)}function Pe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function le(e,t,r){return e?e.concat(t).map(function(s,o){return s=Pe(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function Lt(e){return a.isArray(e)&&!e.some(G)}const Bt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!a.isUndefined(R[m])});const n=r.metaTokens,s=r.visitor||c,o=r.dots,i=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,m,R){let E=u;if(u&&!R&&typeof u=="object"){if(a.endsWith(m,"{}"))m=n?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Lt(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(E=a.toArray(u)))return m=Pe(m),E.forEach(function(_,qe){!(a.isUndefined(_)||_===null)&&t.append(i===!0?le([m],qe,o):i===null?m:m+"[]",h(_))}),!1}return G(u)?!0:(t.append(le(R,m,o),h(u)),!1)}const f=[],y=Object.assign(Bt,{defaultVisitor:c,convertValue:h,isVisitable:G});function S(u,m){if(!a.isUndefined(u)){if(f.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(u),a.forEach(u,function(E,b){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(b)?b.trim():b,m,y))===!0&&S(E,m?m.concat(b):[b])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function re(e,t){this._pairs=[],e&&z(e,this,t)}const Fe=re.prototype;Fe.append=function(t,r){this._pairs.push([t,r])};Fe.toString=function(t){const r=t?function(n){return t.call(this,n,ue)}:ue;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Ut(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Oe(e,t,r){if(!t)return e;const n=r&&r.encode||Ut,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new re(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class _t{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const fe=_t,Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Dt=typeof URLSearchParams<"u"?URLSearchParams:re,kt=typeof FormData<"u"?FormData:null,jt=typeof Blob<"u"?Blob:null,Ht=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),It=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),g={isBrowser:!0,classes:{URLSearchParams:Dt,FormData:kt,Blob:jt},isStandardBrowserEnv:Ht,isStandardBrowserWebWorkerEnv:It,protocols:["http","https","file","blob","url","data"]};function qt(e,t){return z(e,new g.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return g.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Mt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zt(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function Be(e){function t(r,n,s,o){let i=r[o++];const l=Number.isFinite(+i),d=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=zt(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(Mt(n),s,r,0)}),r}return null}function $t(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ne={transitional:Le,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Be(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return qt(t,this.formSerializer).toString();if((l=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return z(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),$t(t)):t}],transformResponse:[function(t){const r=this.transitional||ne.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?p.from(l,p.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.classes.FormData,Blob:g.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ne.headers[e]={}});const se=ne,Jt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vt=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&Jt[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},de=Symbol("internals");function O(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function Vt(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Wt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function v(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function Kt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Gt(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class ${constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(l,d,h){const c=O(d);if(!c)throw new Error("header name must be a non-empty string");const f=a.findKey(s,c);(!f||s[f]===void 0||h===!0||h===void 0&&s[f]!==!1)&&(s[f||d]=k(l))}const i=(l,d)=>a.forEach(l,(h,c)=>o(h,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!Wt(t)?i(vt(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=O(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return Vt(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=O(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||v(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=O(i),i){const l=a.findKey(n,i);l&&(!r||v(n,n[l],l,r))&&(delete n[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||v(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=k(s),delete r[o];return}const l=t?Kt(o):String(o).trim();l!==o&&delete r[o],r[l]=k(s),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[de]=this[de]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=O(i);n[l]||(Gt(s,i),n[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}$.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors($.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods($);const x=$;function V(e,t){const r=this||se,n=t||r,s=x.from(n.headers);let o=n.data;return a.forEach(e,function(l){o=l.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ue(e){return!!(e&&e.__CANCEL__)}function U(e,t,r){p.call(this,e??"canceled",p.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(U,p,{__CANCEL__:!0});function Xt(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new p("Request failed with status code "+r.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Qt=g.isStandardBrowserEnv?function(){return{write:function(r,n,s,o,i,l){const d=[];d.push(r+"="+encodeURIComponent(n)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Zt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Yt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function _e(e,t){return e&&!Zt(t)?Yt(e,t):t}const er=g.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function tr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function rr(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const h=Date.now(),c=n[o];i||(i=h),r[s]=d,n[s]=h;let f=o,y=0;for(;f!==s;)y+=r[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const S=c&&h-c;return S?Math.round(y*1e3/S):void 0}}function he(e,t){let r=0;const n=rr(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-r,d=n(l),h=o<=i;r=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&h?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const nr=typeof XMLHttpRequest<"u",sr=nr&&function(e){return new Promise(function(r,n){let s=e.data;const o=x.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let h;a.isFormData(s)&&(g.isStandardBrowserEnv||g.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(h=o.getContentType())&&o.setContentType(h.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+m))}const f=_e(e.baseURL,e.url);c.open(e.method.toUpperCase(),Oe(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function y(){if(!c)return;const u=x.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),R={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};Xt(function(b){r(b),d()},function(b){n(b),d()},R),c=null}if("onloadend"in c?c.onloadend=y:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(y)},c.onabort=function(){c&&(n(new p("Request aborted",p.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new p("Network Error",p.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const R=e.transitional||Le;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),n(new p(m,R.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,e,c)),c=null},g.isStandardBrowserEnv){const u=(e.withCredentials||er(f))&&e.xsrfCookieName&&Qt.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(m,R){c.setRequestHeader(R,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",he(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(n(!u||u.type?new U(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const S=tr(f);if(S&&g.protocols.indexOf(S)===-1){n(new p("Unsupported protocol "+S+":",p.ERR_BAD_REQUEST,e));return}c.send(s||null)})},X={http:Ot,xhr:sr};a.forEach(X,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const me=e=>`- ${e}`,or=e=>a.isFunction(e)||e===null||e===!1,De={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!or(r)&&(n=X[(i=String(r)).toLowerCase()],n===void 0))throw new p(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(me).join(`
`):" "+me(o[0]):"as no adapter specified";throw new p("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:X};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function pe(e){return W(e),e.headers=x.from(e.headers),e.data=V.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),De.getAdapter(e.adapter||se.adapter)(e).then(function(n){return W(e),n.data=V.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return Ue(n)||(W(e),n&&n.response&&(n.response.data=V.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}const ye=e=>e instanceof x?e.toJSON():e;function P(e,t){t=t||{};const r={};function n(h,c,f){return a.isPlainObject(h)&&a.isPlainObject(c)?a.merge.call({caseless:f},h,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(h,c,f){if(a.isUndefined(c)){if(!a.isUndefined(h))return n(void 0,h,f)}else return n(h,c,f)}function o(h,c){if(!a.isUndefined(c))return n(void 0,c)}function i(h,c){if(a.isUndefined(c)){if(!a.isUndefined(h))return n(void 0,h)}else return n(void 0,c)}function l(h,c,f){if(f in t)return n(h,c);if(f in e)return n(void 0,h)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(h,c)=>s(ye(h),ye(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=d[c]||s,y=f(e[c],t[c],c);a.isUndefined(y)&&f!==l||(r[c]=y)}),r}const ke="1.5.1",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Ee={};oe.transitional=function(t,r,n){function s(o,i){return"[Axios v"+ke+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,l)=>{if(t===!1)throw new p(s(i," has been removed"+(r?" in "+r:"")),p.ERR_DEPRECATED);return r&&!Ee[i]&&(Ee[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,l):!0}};function ir(e,t,r){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new p("option "+o+" must be "+d,p.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new p("Unknown option "+o,p.ERR_BAD_OPTION)}}const Q={assertOptions:ir,validators:oe},N=Q.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=P(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&Q.assertOptions(n,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:Q.assertOptions(s,{encode:N.function,serialize:N.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),r.headers=x.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(d=d&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const h=[];this.interceptors.response.forEach(function(m){h.push(m.fulfilled,m.rejected)});let c,f=0,y;if(!d){const u=[pe.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,h),y=u.length,c=Promise.resolve(r);f<y;)c=c.then(u[f++],u[f++]);return c}y=l.length;let S=r;for(f=0;f<y;){const u=l[f++],m=l[f++];try{S=u(S)}catch(R){m.call(this,R);break}}try{c=pe.call(this,S)}catch(u){return Promise.reject(u)}for(f=0,y=h.length;f<y;)c=c.then(h[f++],h[f++]);return c}getUri(t){t=P(this.defaults,t);const r=_e(t.baseURL,t.url);return Oe(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(r,n){return this.request(P(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,l){return this.request(P(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}H.prototype[t]=r(),H.prototype[t+"Form"]=r(!0)});const j=H;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{n.subscribe(l),o=l}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,l){n.reason||(n.reason=new U(o,i,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const ar=ie;function cr(e){return function(r){return e.apply(null,r)}}function lr(e){return a.isObject(e)&&e.isAxiosError===!0}const Z={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Z).forEach(([e,t])=>{Z[t]=e});const ur=Z;function je(e){const t=new j(e),r=we(j.prototype.request,t);return a.extend(r,j.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return je(P(e,s))},r}const w=je(se);w.Axios=j;w.CanceledError=U;w.CancelToken=ar;w.isCancel=Ue;w.VERSION=ke;w.toFormData=z;w.AxiosError=p;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=cr;w.isAxiosError=lr;w.mergeConfig=P;w.AxiosHeaders=x;w.formToJSON=e=>Be(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=De.getAdapter;w.HttpStatusCode=ur;w.default=w;const He=w;He.defaults.baseURL="http://localhost:5000";const Ie=He.create({baseURL:"http://localhost:5000",timeout:3e4});function pr(e,t){async function r(n,s){var o,i,l,d,h,c;try{const{data:f}=await Ie({method:n.method,data:n.payload,url:n.path,params:n.params,signal:s==null?void 0:s.signal});if(f!=null&&f.error){const y={error:f.error,msg:f.msg};(o=t==null?void 0:t.onError)==null||o.call(t,y),(i=s==null?void 0:s.onError)==null||i.call(s,y)}else(l=t==null?void 0:t.onSuccess)==null||l.call(t,f),(d=s==null?void 0:s.onSuccess)==null||d.call(s,f)}catch(f){const y={error:String(f),msg:"Unpredictable Error Type"};(h=t==null?void 0:t.onError)==null||h.call(t,y),(c=s==null?void 0:s.onError)==null||c.call(s,y)}}return{sender:r}}function yr(e,t){const[r,n]=T.useState(!1),[s,o]=T.useState(null),[i,l]=T.useState(null);async function d(h,c){var f,y,S,u,m,R;n(!0);try{const{data:E}=await Ie({method:h.method,data:h.payload,url:h.path,params:h.params,signal:c==null?void 0:c.signal});if(E!=null&&E.error){const b={error:E.error,msg:E.msg};l(b),o(null),(f=t==null?void 0:t.onError)==null||f.call(t,b),(y=c==null?void 0:c.onError)==null||y.call(c,b)}else l(null),o(E),(S=t==null?void 0:t.onSuccess)==null||S.call(t,E),(u=c==null?void 0:c.onSuccess)==null||u.call(c,E)}catch(E){const b={error:String(E),msg:"Unpredictable Error Type"};o(null),l(b),(m=t==null?void 0:t.onError)==null||m.call(t,b),(R=c==null?void 0:c.onError)==null||R.call(c,b)}finally{n(!1)}return{pending:r,response:s,error:i}}return{sender:d,pending:r,response:s,error:i}}export{dr as C,mr as E,pr as a,hr as b,He as c,yr as u};
