import{r as a,A as t,l as n,g as l,m as s,c as i,d as c}from"./nox_yApeAXQky.js";var d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};const b=d;var p=function(e,o){return a.createElement(t,n({},e,{ref:o,icon:b}))};const h=a.forwardRef(p),$=r=>{const{checkboxCls:e}=r,o=`${e}-wrapper`;return[{[`${e}-group`]:Object.assign(Object.assign({},i(r)),{display:"inline-flex",flexWrap:"wrap",columnGap:r.marginXS,[`> ${r.antCls}-row`]:{flex:1}}),[o]:Object.assign(Object.assign({},i(r)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${o}`]:{marginInlineStart:0},[`&${o}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[e]:Object.assign(Object.assign({},i(r)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:r.borderRadiusSM,alignSelf:"center",[`${e}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${e}-inner`]:Object.assign({},c(r))},[`${e}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:r.checkboxSize,height:r.checkboxSize,direction:"ltr",backgroundColor:r.colorBgContainer,border:`${r.lineWidth}px ${r.lineType} ${r.colorBorder}`,borderRadius:r.borderRadiusSM,borderCollapse:"separate",transition:`all ${r.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:r.checkboxSize/14*5,height:r.checkboxSize/14*8,border:`${r.lineWidthBold}px solid ${r.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${r.motionDurationFast} ${r.motionEaseInBack}, opacity ${r.motionDurationFast}`}},"& + span":{paddingInlineStart:r.paddingXS,paddingInlineEnd:r.paddingXS}})},{[`
        ${o}:not(${o}-disabled),
        ${e}:not(${e}-disabled)
      `]:{[`&:hover ${e}-inner`]:{borderColor:r.colorPrimary}},[`${o}:not(${o}-disabled)`]:{[`&:hover ${e}-checked:not(${e}-disabled) ${e}-inner`]:{backgroundColor:r.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${e}-checked:not(${e}-disabled):after`]:{borderColor:r.colorPrimaryHover}}},{[`${e}-checked`]:{[`${e}-inner`]:{backgroundColor:r.colorPrimary,borderColor:r.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${r.motionDurationMid} ${r.motionEaseOutBack} ${r.motionDurationFast}`}}},[`
        ${o}-checked:not(${o}-disabled),
        ${e}-checked:not(${e}-disabled)
      `]:{[`&:hover ${e}-inner`]:{backgroundColor:r.colorPrimaryHover,borderColor:"transparent"}}},{[e]:{"&-indeterminate":{[`${e}-inner`]:{backgroundColor:r.colorBgContainer,borderColor:r.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:r.fontSizeLG/2,height:r.fontSizeLG/2,backgroundColor:r.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${o}-disabled`]:{cursor:"not-allowed"},[`${e}-disabled`]:{[`&, ${e}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${e}-inner`]:{background:r.colorBgContainerDisabled,borderColor:r.colorBorder,"&:after":{borderColor:r.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:r.colorTextDisabled},[`&${e}-indeterminate ${e}-inner::after`]:{background:r.colorTextDisabled}}}]};function g(r,e){const o=s(e,{checkboxCls:`.${r}`,checkboxSize:e.controlInteractiveSize});return[$(o)]}const f=l("Checkbox",(r,e)=>{let{prefixCls:o}=e;return[g(o,r)]});export{h as L,g,f as u};
