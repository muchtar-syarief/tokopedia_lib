import{K as a,m as t,g as n,c as e,d as l}from"./nox_AXrk7pAAg.js";const s=new a("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),c=r=>{const{checkboxCls:i}=r,o=`${i}-wrapper`;return[{[`${i}-group`]:Object.assign(Object.assign({},e(r)),{display:"inline-flex",flexWrap:"wrap",columnGap:r.marginXS,[`> ${r.antCls}-row`]:{flex:1}}),[o]:Object.assign(Object.assign({},e(r)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${o}`]:{marginInlineStart:0},[`&${o}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[i]:Object.assign(Object.assign({},e(r)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"start",transform:`translate(0, ${r.lineHeight*r.fontSize/2-r.checkboxSize/2}px)`,[`${i}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${i}-inner`]:Object.assign({},l(r))},[`${i}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:r.checkboxSize,height:r.checkboxSize,direction:"ltr",backgroundColor:r.colorBgContainer,border:`${r.lineWidth}px ${r.lineType} ${r.colorBorder}`,borderRadius:r.borderRadiusSM,borderCollapse:"separate",transition:`all ${r.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:r.checkboxSize/14*5,height:r.checkboxSize/14*8,border:`${r.lineWidthBold}px solid ${r.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${r.motionDurationFast} ${r.motionEaseInBack}, opacity ${r.motionDurationFast}`}},"& + span":{paddingInlineStart:r.paddingXS,paddingInlineEnd:r.paddingXS}})},{[i]:{"&-indeterminate":{[`${i}-inner`]:{"&:after":{top:"50%",insetInlineStart:"50%",width:r.fontSizeLG/2,height:r.fontSizeLG/2,backgroundColor:r.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${o}:hover ${i}:after`]:{visibility:"visible"},[`
        ${o}:not(${o}-disabled),
        ${i}:not(${i}-disabled)
      `]:{[`&:hover ${i}-inner`]:{borderColor:r.colorPrimary}},[`${o}:not(${o}-disabled)`]:{[`&:hover ${i}-checked:not(${i}-disabled) ${i}-inner`]:{backgroundColor:r.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${i}-checked:not(${i}-disabled):after`]:{borderColor:r.colorPrimaryHover}}},{[`${i}-checked`]:{[`${i}-inner`]:{backgroundColor:r.colorPrimary,borderColor:r.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${r.motionDurationMid} ${r.motionEaseOutBack} ${r.motionDurationFast}`}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:r.borderRadiusSM,visibility:"hidden",border:`${r.lineWidthBold}px solid ${r.colorPrimary}`,animationName:s,animationDuration:r.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:`all ${r.motionDurationSlow}`}},[`
        ${o}-checked:not(${o}-disabled),
        ${i}-checked:not(${i}-disabled)
      `]:{[`&:hover ${i}-inner`]:{backgroundColor:r.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${i}:after`]:{borderColor:r.colorPrimaryHover}}},{[`${o}-disabled`]:{cursor:"not-allowed"},[`${i}-disabled`]:{[`&, ${i}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${i}-inner`]:{background:r.colorBgContainerDisabled,borderColor:r.colorBorder,"&:after":{borderColor:r.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:r.colorTextDisabled},[`&${i}-indeterminate ${i}-inner::after`]:{background:r.colorTextDisabled}}}]};function d(r,i){const o=t(i,{checkboxCls:`.${r}`,checkboxSize:i.controlInteractiveSize});return[c(o)]}const p=n("Checkbox",(r,i)=>{let{prefixCls:o}=i;return[d(o,r)]});export{d as g,p as u};
