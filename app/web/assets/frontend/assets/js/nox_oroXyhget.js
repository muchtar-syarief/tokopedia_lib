import{r as t,ae as S,u as $,O as w,h as D,t as p,l as M,v as g}from"./nox_AXrk7pAAg.js";var j=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],A=t.forwardRef(function(a,k){var c,u=a.prefixCls,n=u===void 0?"rc-checkbox":u,C=a.className,m=a.style,_=a.checked,s=a.disabled,d=a.defaultChecked,b=d===void 0?!1:d,i=a.type,o=i===void 0?"checkbox":i,l=a.onChange,y=S(a,j),r=t.useRef(null),x=$(b,{value:_}),f=w(x,2),v=f[0],N=f[1];t.useImperativeHandle(k,function(){return{focus:function(){var e;(e=r.current)===null||e===void 0||e.focus()},blur:function(){var e;(e=r.current)===null||e===void 0||e.blur()},input:r.current}});var E=D(n,C,(c={},p(c,"".concat(n,"-checked"),v),p(c,"".concat(n,"-disabled"),s),c)),P=function(e){s||("checked"in a||N(e.target.checked),l==null||l({target:g(g({},a),{},{type:o,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))};return t.createElement("span",{className:E,style:m},t.createElement("input",M({},y,{className:"".concat(n,"-input"),ref:r,onChange:P,disabled:s,checked:!!v,type:o})),t.createElement("span",{className:"".concat(n,"-inner")}))});export{A as C};
