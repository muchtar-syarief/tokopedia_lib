import{g as O,m as I,c as M,r as s,e as j,h as P}from"./nox_QyQrhXh7t.js";const E=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:l,colorSplit:i,lineWidth:r,textPaddingInline:d,orientationMargin:o,verticalMarginInline:a}=t;return{[e]:Object.assign(Object.assign({},M(t)),{borderBlockStart:`${r}px solid ${i}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:a,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${r}px solid ${i}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${i}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${r}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:`${o*100}%`},"&::after":{width:`${100-o*100}%`}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:`${100-o*100}%`},"&::after":{width:`${o*100}%`}},[`${e}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:d},"&-dashed":{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:`${r}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:l}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:l}}})}},B=O("Divider",t=>{const e=I(t,{dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG,sizePaddingEdgeHorizontal:0});return[E(e)]},t=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:t.marginXS}));var N=globalThis&&globalThis.__rest||function(t,e){var l={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(l[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(l[i[r]]=t[i[r]]);return l};const H=t=>{const{getPrefixCls:e,direction:l,divider:i}=s.useContext(j),{prefixCls:r,type:d="horizontal",orientation:o="center",orientationMargin:a,className:p,rootClassName:b,children:c,dashed:$,plain:x,style:u}=t,v=N(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),n=e("divider",r),[y,S]=B(n),w=o.length>0?`-${o}`:o,g=!!c,h=o==="left"&&a!=null,f=o==="right"&&a!=null,z=P(n,i==null?void 0:i.className,S,`${n}-${d}`,{[`${n}-with-text`]:g,[`${n}-with-text${w}`]:g,[`${n}-dashed`]:!!$,[`${n}-plain`]:!!x,[`${n}-rtl`]:l==="rtl",[`${n}-no-default-orientation-margin-left`]:h,[`${n}-no-default-orientation-margin-right`]:f},p,b),m=s.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),C=Object.assign(Object.assign({},h&&{marginLeft:m}),f&&{marginRight:m});return y(s.createElement("div",Object.assign({className:z,style:Object.assign(Object.assign({},i==null?void 0:i.style),u)},v,{role:"separator"}),c&&d!=="vertical"&&s.createElement("span",{className:`${n}-inner-text`,style:C},c)))},W=H;export{W as D};
