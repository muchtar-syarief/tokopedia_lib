import{d as Xe,a2 as We,g as re,m as G,a4 as ce,a3 as Y,aj as ve,ak as de,c as ie,al as Fe,r as l,e as L,h as T,am as ke,an as V,ao as Ge,aa as q,ap as F,aq as U,ar as Ye,as as Ve,at as Ue,au as ye,W as Ce,av as Ke,aw as xe,ax as Ze,ay as qe,az as Je,aA as Qe,Z as et,Y as tt,a0 as ot,$ as nt,aB as rt,w as te,a5 as it,B as ue,aC as lt,u as at,aD as st,aE as ct,aF as dt}from"./nox_pyXA7rrAA.js";import{p as Se}from"./nox_yp7yprhk7.js";import{i as me,g as ut,h as mt}from"./nox_hgeAQoQoA.js";import{R as pt}from"./nox_e7otkQypX.js";import{d as gt}from"./nox_gorQoh7AA.js";const bt=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}}),$t=bt,ft=e=>{const{componentCls:n,motionDurationSlow:t,menuHorizontalHeight:o,colorSplit:r,lineWidth:a,lineType:i,menuItemPaddingInline:s}=e;return{[`${n}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${a}px ${i} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${n}-item, ${n}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:s},[`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${n}-item, ${n}-submenu-title`]:{transition:[`border-color ${t}`,`background ${t}`].join(",")},[`${n}-submenu-arrow`]:{display:"none"}}}},ht=ft,vt=e=>{let{componentCls:n,menuArrowOffset:t}=e;return{[`${n}-rtl`]:{direction:"rtl"},[`${n}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]:{[`${n}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${t})`},"&::after":{transform:`rotate(45deg) translateY(${t})`}}}}},yt=vt,pe=e=>Object.assign({},Xe(e)),Ct=(e,n)=>{const{componentCls:t,colorItemText:o,colorItemTextSelected:r,colorGroupTitle:a,colorItemBg:i,colorSubItemBg:s,colorItemBgSelected:c,colorActiveBarHeight:m,colorActiveBarWidth:p,colorActiveBarBorderSize:g,motionDurationSlow:u,motionEaseInOut:b,motionEaseOut:d,menuItemPaddingInline:$,motionDurationMid:f,colorItemTextHover:y,lineType:h,colorSplit:w,colorItemTextDisabled:j,colorDangerItemText:v,colorDangerItemTextHover:C,colorDangerItemTextSelected:S,colorDangerItemBgActive:B,colorDangerItemBgSelected:_,colorItemBgHover:O,menuSubMenuBg:N,colorItemTextSelectedHorizontal:z,colorItemBgSelectedHorizontal:P}=e;return{[`${t}-${n}, ${t}-${n} > ${t}`]:{color:o,background:i,[`&${t}-root:focus-visible`]:Object.assign({},pe(e)),[`${t}-item-group-title`]:{color:a},[`${t}-submenu-selected`]:{[`> ${t}-submenu-title`]:{color:r}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{color:`${j} !important`},[`${t}-item:hover, ${t}-submenu-title:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:y}},[`&:not(${t}-horizontal)`]:{[`${t}-item:not(${t}-item-selected)`]:{"&:hover":{backgroundColor:O},"&:active":{backgroundColor:c}},[`${t}-submenu-title`]:{"&:hover":{backgroundColor:O},"&:active":{backgroundColor:c}}},[`${t}-item-danger`]:{color:v,[`&${t}-item:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:C}},[`&${t}-item:active`]:{background:B}},[`${t}-item a`]:{"&, &:hover":{color:"inherit"}},[`${t}-item-selected`]:{color:r,[`&${t}-item-danger`]:{color:S},["a, a:hover"]:{color:"inherit"}},[`& ${t}-item-selected`]:{backgroundColor:c,[`&${t}-item-danger`]:{backgroundColor:_}},[`${t}-item, ${t}-submenu-title`]:{[`&:not(${t}-item-disabled):focus-visible`]:Object.assign({},pe(e))},[`&${t}-submenu > ${t}`]:{backgroundColor:N},[`&${t}-popup > ${t}`]:{backgroundColor:i},[`&${t}-horizontal`]:Object.assign(Object.assign({},n==="dark"?{borderBottom:0}:{}),{[`> ${t}-item, > ${t}-submenu`]:{top:g,marginTop:-g,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:$,bottom:0,borderBottom:`${m}px solid transparent`,transition:`border-color ${u} ${b}`,content:'""'},["&:hover, &-active, &-open"]:{"&::after":{borderBottomWidth:m,borderBottomColor:z}},["&-selected"]:{color:z,backgroundColor:P,"&::after":{borderBottomWidth:m,borderBottomColor:z}}}}),[`&${t}-root`]:{[`&${t}-inline, &${t}-vertical`]:{borderInlineEnd:`${g}px ${h} ${w}`}},[`&${t}-inline`]:{[`${t}-sub${t}-inline`]:{background:s},[`${t}-item, ${t}-submenu-title`]:g&&p?{width:`calc(100% + ${g}px)`}:{},[`${t}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${p}px solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${f} ${d}`,`opacity ${f} ${d}`].join(","),content:'""'},[`&${t}-item-danger`]:{"&::after":{borderInlineEndColor:S}}},[`${t}-selected, ${t}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${f} ${b}`,`opacity ${f} ${b}`].join(",")}}}}}},ge=Ct,be=e=>{const{componentCls:n,menuItemHeight:t,itemMarginInline:o,padding:r,menuArrowSize:a,marginXS:i,marginXXS:s}=e,c=r+a+i;return{[`${n}-item`]:{position:"relative",["&:not(:last-child)"]:{marginBottom:i}},[`${n}-item, ${n}-submenu-title`]:{height:t,lineHeight:`${t}px`,paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:s,width:`calc(100% - ${o*2}px)`},[`${n}-submenu`]:{paddingBottom:.02},[`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]:{height:t,lineHeight:`${t}px`},[`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]:{paddingInlineEnd:c}}},xt=e=>{const{componentCls:n,iconCls:t,menuItemHeight:o,colorTextLightSolid:r,dropdownWidth:a,controlHeightLG:i,motionDurationMid:s,motionEaseOut:c,paddingXL:m,itemMarginInline:p,fontSizeLG:g,motionDurationSlow:u,paddingXS:b,boxShadowSecondary:d}=e,$={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[n]:{["&-inline, &-vertical"]:Object.assign({[`&${n}-root`]:{boxShadow:"none"}},be(e))},[`${n}-submenu-popup`]:{[`${n}-vertical`]:Object.assign(Object.assign({},be(e)),{boxShadow:d})}},{[`${n}-submenu-popup ${n}-vertical${n}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${i*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${n}-inline`]:{width:"100%",[`&${n}-root`]:{[`${n}-item, ${n}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${u}`,`background ${u}`,`padding ${s} ${c}`].join(","),[`> ${n}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${n}-sub${n}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${n}-submenu > ${n}-submenu-title`]:$,[`& ${n}-item-group-title`]:{paddingInlineStart:m}},[`${n}-item`]:$}},{[`${n}-inline-collapsed`]:{width:o*2,[`&${n}-root`]:{[`${n}-item, ${n}-submenu ${n}-submenu-title`]:{[`> ${n}-inline-collapsed-noicon`]:{fontSize:g,textAlign:"center"}}},[`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${g/2}px - ${p}px)`,textOverflow:"clip",[`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]:{opacity:0},[`${n}-item-icon, ${t}`]:{margin:0,fontSize:g,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${n}-item-icon, ${t}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${n}-item-icon, ${t}`]:{display:"none"},"a, a:hover":{color:r}},[`${n}-item-group-title`]:Object.assign(Object.assign({},We),{paddingInline:b})}}]},St=xt,$e=e=>{const{componentCls:n,fontSize:t,motionDurationSlow:o,motionDurationMid:r,motionEaseInOut:a,motionEaseOut:i,iconCls:s,controlHeightSM:c}=e;return{[`${n}-item, ${n}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${a}`].join(","),[`${n}-item-icon, ${s}`]:{minWidth:t,fontSize:t,transition:[`font-size ${r} ${i}`,`margin ${o} ${a}`,`color ${o}`].join(","),"+ span":{marginInlineStart:c-t,opacity:1,transition:[`opacity ${o} ${a}`,`margin ${o}`,`color ${o}`].join(",")}},[`${n}-item-icon`]:Object.assign({},Fe()),[`&${n}-item-only-child`]:{[`> ${s}, > ${n}-item-icon`]:{marginInlineEnd:0}}},[`${n}-item-disabled, ${n}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${n}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},fe=e=>{const{componentCls:n,motionDurationSlow:t,motionEaseInOut:o,borderRadius:r,menuArrowSize:a,menuArrowOffset:i}=e;return{[`${n}-submenu`]:{["&-expand-icon, &-arrow"]:{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${t} ${o}, opacity ${t}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:a*.6,height:a*.15,backgroundColor:"currentcolor",borderRadius:r,transition:[`background ${t} ${o}`,`transform ${t} ${o}`,`top ${t} ${o}`,`color ${t} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${i})`},"&::after":{transform:`rotate(-45deg) translateY(${i})`}}}}},Ot=e=>{const{antCls:n,componentCls:t,fontSize:o,motionDurationSlow:r,motionDurationMid:a,motionEaseInOut:i,lineHeight:s,paddingXS:c,padding:m,colorSplit:p,lineWidth:g,zIndexPopup:u,borderRadiusLG:b,radiusSubMenuItem:d,menuArrowSize:$,menuArrowOffset:f,lineType:y,menuPanelMaskInset:h}=e;return[{"":{[`${t}`]:Object.assign(Object.assign({},de()),{["&-hidden"]:{display:"none"}})},[`${t}-submenu-hidden`]:{display:"none"}},{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ie(e)),de()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,["ul, ol"]:{margin:0,padding:0,listStyle:"none"},["&-overflow"]:{display:"flex",[`${t}-item`]:{flex:"none"}},[`${t}-item, ${t}-submenu, ${t}-submenu-title`]:{borderRadius:e.radiusItem},[`${t}-item-group-title`]:{padding:`${c}px ${m}px`,fontSize:o,lineHeight:s,transition:`all ${r}`},[`&-horizontal ${t}-submenu`]:{transition:[`border-color ${r} ${i}`,`background ${r} ${i}`].join(",")},[`${t}-submenu, ${t}-submenu-inline`]:{transition:[`border-color ${r} ${i}`,`background ${r} ${i}`,`padding ${a} ${i}`].join(",")},[`${t}-submenu ${t}-sub`]:{cursor:"initial",transition:[`background ${r} ${i}`,`padding ${r} ${i}`].join(",")},[`${t}-title-content`]:{transition:`color ${r}`},[`${t}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${t}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:p,borderStyle:y,borderWidth:0,borderTopWidth:g,marginBlock:g,padding:0,"&-dashed":{borderStyle:"dashed"}}}),$e(e)),{[`${t}-item-group`]:{[`${t}-item-group-list`]:{margin:0,padding:0,[`${t}-item, ${t}-submenu-title`]:{paddingInline:`${o*2}px ${m}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:u,background:"transparent",borderRadius:b,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:`${h}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:h},[`> ${t}`]:Object.assign(Object.assign(Object.assign({borderRadius:b},$e(e)),fe(e)),{[`${t}-item, ${t}-submenu > ${t}-submenu-title`]:{borderRadius:d},[`${t}-submenu-title::after`]:{transition:`transform ${r} ${i}`}})}}),fe(e)),{[`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${f})`},"&::after":{transform:`rotate(45deg) translateX(-${f})`}},[`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:{transform:`translateY(-${$*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${f})`},"&::before":{transform:`rotate(45deg) translateX(${f})`}}})},{[`${n}-layout-header`]:{[t]:{lineHeight:"inherit"}}}]},wt=(e,n)=>re("Menu",(o,r)=>{let{overrideComponentToken:a}=r;if(n===!1)return[];const{colorBgElevated:i,colorPrimary:s,colorError:c,colorErrorHover:m,colorTextLightSolid:p,controlHeightLG:g,fontSize:u}=o,b=u/7*5,d=G(o,{menuItemHeight:g,menuItemPaddingInline:o.margin,menuArrowSize:b,menuHorizontalHeight:g*1.15,menuArrowOffset:`${b*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:i}),$=new ce(p).setAlpha(.65).toRgbString(),f=G(d,{colorItemText:$,colorItemTextHover:p,colorGroupTitle:$,colorItemTextSelected:p,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:s,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new ce(p).setAlpha(.25).toRgbString(),colorDangerItemText:c,colorDangerItemTextHover:m,colorDangerItemTextSelected:p,colorDangerItemBgActive:c,colorDangerItemBgSelected:c,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:p,colorItemBgSelectedHorizontal:s},Object.assign({},a));return[Ot(d),ht(d),St(d),ge(d,"light"),ge(f,"dark"),yt(d),$t(d),Y(d,"slide-up"),Y(d,"slide-down"),ve(d,"zoom-big")]},o=>{const{colorPrimary:r,colorError:a,colorTextDisabled:i,colorErrorBg:s,colorText:c,colorTextDescription:m,colorBgContainer:p,colorFillAlter:g,colorFillContent:u,lineWidth:b,lineWidthBold:d,controlItemBgActive:$,colorBgTextHover:f}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,colorItemText:c,colorItemTextHover:c,colorItemTextHoverHorizontal:r,colorGroupTitle:m,colorItemTextSelected:r,colorItemTextSelectedHorizontal:r,colorItemBg:p,colorItemBgHover:f,colorItemBgActive:u,colorSubItemBg:g,colorItemBgSelected:$,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:d,colorActiveBarBorderSize:b,colorItemTextDisabled:i,colorDangerItemText:a,colorDangerItemTextHover:a,colorDangerItemTextSelected:a,colorDangerItemBgActive:s,colorDangerItemBgSelected:s,itemMarginInline:o.marginXXS}})(e);var It=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const K=l.createContext(null),jt=e=>{const{children:n}=e,t=It(e,["children"]),o=l.useContext(K),r=l.useMemo(()=>Object.assign(Object.assign({},o),t),[o,t.prefixCls,t.mode,t.selectable]);return l.createElement(K.Provider,{value:r},n)};var Pt=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const Et=e=>{const{prefixCls:n,className:t,dashed:o}=e,r=Pt(e,["prefixCls","className","dashed"]),{getPrefixCls:a}=l.useContext(L),i=a("menu",n),s=T({[`${i}-item-divider-dashed`]:!!o},t);return l.createElement(ke,Object.assign({className:s},r))},Oe=Et;globalThis&&globalThis.__rest;const we=l.createContext({}),Tt=l.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),Z=Tt,Bt=e=>{var n;const{className:t,children:o,icon:r,title:a,danger:i}=e,{prefixCls:s,firstLevel:c,direction:m,disableMenuItemTitleTooltip:p,inlineCollapsed:g}=l.useContext(Z),u=h=>{const w=l.createElement("span",{className:`${s}-title-content`},o);return(!r||U(o)&&o.type==="span")&&o&&h&&c&&typeof o=="string"?l.createElement("div",{className:`${s}-inline-collapsed-noicon`},o.charAt(0)):w},{siderCollapsed:b}=l.useContext(we);let d=a;typeof a>"u"?d=c?o:"":a===!1&&(d="");const $={title:d};!b&&!g&&($.title=null,$.open=!1);const f=V(o).length;let y=l.createElement(Ge,Object.assign({},q(e,["title","icon","danger"]),{className:T({[`${s}-item-danger`]:i,[`${s}-item-only-child`]:(r?f+1:f)===1},t),title:typeof a=="string"?a:void 0}),F(r,{className:T(U(r)?(n=r.props)===null||n===void 0?void 0:n.className:"",`${s}-item-icon`)}),u(g));return p||(y=l.createElement(Ye,Object.assign({},$,{placement:m==="rtl"?"left":"right",overlayClassName:`${s}-inline-collapsed-tooltip`}),y)),y},Ie=Bt,Nt=e=>{var n;const{popupClassName:t,icon:o,title:r,theme:a}=e,i=l.useContext(Z),{prefixCls:s,inlineCollapsed:c,theme:m,mode:p}=i,g=Ve();let u;if(!o)u=c&&!g.length&&r&&typeof r=="string"?l.createElement("div",{className:`${s}-inline-collapsed-noicon`},r.charAt(0)):l.createElement("span",{className:`${s}-title-content`},r);else{const $=U(r)&&r.type==="span";u=l.createElement(l.Fragment,null,F(o,{className:T(U(o)?(n=o.props)===null||n===void 0?void 0:n.className:"",`${s}-item-icon`)}),$?r:l.createElement("span",{className:`${s}-title-content`},r))}const b=l.useMemo(()=>Object.assign(Object.assign({},i),{firstLevel:!1}),[i]),d=p==="horizontal"?[0,8]:[10,0];return l.createElement(Z.Provider,{value:b},l.createElement(Ue,Object.assign({popupOffset:d},q(e,["icon"]),{title:u,popupClassName:T(s,t,`${s}-${a||m}`)})))},je=Nt;var zt=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};function oe(e){return(e||[]).map((n,t)=>{if(n&&typeof n=="object"){const o=n,{label:r,children:a,key:i,type:s}=o,c=zt(o,["label","children","key","type"]),m=i??`tmp-${t}`;return a||s==="group"?s==="group"?l.createElement(ye,Object.assign({key:m},c,{title:r}),oe(a)):l.createElement(je,Object.assign({key:m},c,{title:r}),oe(a)):s==="divider"?l.createElement(Oe,Object.assign({key:m},c)):l.createElement(Ie,Object.assign({key:m},c),r)}return null}).filter(n=>n)}function Dt(e){return l.useMemo(()=>e&&oe(e),[e])}var Mt=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const Rt=l.forwardRef((e,n)=>{var t,o;const r=l.useContext(K),a=r||{},{getPrefixCls:i,getPopupContainer:s,direction:c}=l.useContext(L),m=i(),{prefixCls:p,className:g,theme:u="light",expandIcon:b,_internalDisableMenuItemTitleTooltip:d,inlineCollapsed:$,siderCollapsed:f,items:y,children:h,rootClassName:w,mode:j,selectable:v,onClick:C}=e,S=Mt(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick"]),B=q(S,["collapsedWidth"]),_=Dt(y)||h;(t=a.validator)===null||t===void 0||t.call(a,{mode:j});const O=Ce(function(){var E;C==null||C.apply(void 0,arguments),(E=a.onClick)===null||E===void 0||E.call(a)}),N=a.mode||j,z=v??a.selectable,P=l.useMemo(()=>f!==void 0?f:$,[$,f]),D={horizontal:{motionName:`${m}-slide-up`},inline:Ze(m),other:{motionName:`${m}-zoom-big`}},x=i("menu",p||a.prefixCls),[M,H]=wt(x,!r),A=T(`${x}-${u}`,g);let R;if(typeof b=="function")R=b;else{const E=b||a.expandIcon;R=F(E,{className:T(`${x}-submenu-expand-icon`,(o=E==null?void 0:E.props)===null||o===void 0?void 0:o.className)})}const X=l.useMemo(()=>({prefixCls:x,inlineCollapsed:P||!1,direction:c,firstLevel:!0,theme:u,mode:N,disableMenuItemTitleTooltip:d}),[x,P,c,d,u]);return M(l.createElement(K.Provider,{value:null},l.createElement(Z.Provider,{value:X},l.createElement(Ke,Object.assign({getPopupContainer:s,overflowedIndicator:l.createElement(xe,null),overflowedIndicatorPopupClassName:T(x,`${x}-${u}`),mode:N,selectable:z,onClick:O},B,{inlineCollapsed:P,className:A,prefixCls:x,direction:c,defaultMotions:D,expandIcon:R,ref:n,rootClassName:T(w,H)}),_))))}),_t=Rt,k=l.forwardRef((e,n)=>{const t=l.useRef(null),o=l.useContext(we);return l.useImperativeHandle(n,()=>({menu:t.current,focus:r=>{var a;(a=t.current)===null||a===void 0||a.focus(r)}})),l.createElement(_t,Object.assign({ref:t},e,o))});k.Item=Ie;k.SubMenu=je;k.Divider=Oe;k.ItemGroup=ye;const Ht=k,At=()=>{const[e,n]=l.useState(!1);return l.useEffect(()=>{n(gt())},[]),e};function Lt(e){let{className:n,direction:t,index:o,marginDirection:r,children:a,split:i,wrap:s}=e;const{horizontalSize:c,verticalSize:m,latestIndex:p,supportFlexGap:g}=l.useContext(Pe);let u={};return g||(t==="vertical"?o<p&&(u={marginBottom:c/(i?2:1)}):u=Object.assign(Object.assign({},o<p&&{[r]:c/(i?2:1)}),s&&{paddingBottom:m})),a==null?null:l.createElement(l.Fragment,null,l.createElement("div",{className:n,style:u},a),o<p&&i&&l.createElement("span",{className:`${n}-split`,style:u},i))}var Xt=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const Pe=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),Wt={small:8,middle:16,large:24};function Ft(e){return typeof e=="string"?Wt[e]:e||0}const kt=l.forwardRef((e,n)=>{const{getPrefixCls:t,space:o,direction:r}=l.useContext(L),{size:a=(o==null?void 0:o.size)||"small",align:i,className:s,rootClassName:c,children:m,direction:p="horizontal",prefixCls:g,split:u,style:b,wrap:d=!1}=e,$=Xt(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),f=At(),[y,h]=l.useMemo(()=>(Array.isArray(a)?a:[a,a]).map(x=>Ft(x)),[a]),w=V(m,{keepEmpty:!0}),j=i===void 0&&p==="horizontal"?"center":i,v=t("space",g),[C,S]=Je(v),B=T(v,S,`${v}-${p}`,{[`${v}-rtl`]:r==="rtl",[`${v}-align-${j}`]:j},s,c),_=`${v}-item`,O=r==="rtl"?"marginLeft":"marginRight";let N=0;const z=w.map((x,M)=>{x!=null&&(N=M);const H=x&&x.key||`${_}-${M}`;return l.createElement(Lt,{className:_,key:H,direction:p,index:M,marginDirection:O,split:u,wrap:d},x)}),P=l.useMemo(()=>({horizontalSize:y,verticalSize:h,latestIndex:N,supportFlexGap:f}),[y,h,N,f]);if(w.length===0)return null;const D={};return d&&(D.flexWrap="wrap",f||(D.marginBottom=-h)),f&&(D.columnGap=y,D.rowGap=h),C(l.createElement("div",Object.assign({ref:n,className:B,style:Object.assign(Object.assign({},D),b)},$),l.createElement(Pe.Provider,{value:P},z)))}),Ee=kt;Ee.Compact=qe;const Gt=Ee,Yt=e=>{const{componentCls:n,menuCls:t,colorError:o,colorTextLightSolid:r}=e,a=`${t}-item`;return{[`${n}, ${n}-menu-submenu`]:{[`${t} ${a}`]:{[`&${a}-danger:not(${a}-disabled)`]:{color:o,"&:hover":{color:r,backgroundColor:o}}}}}},Vt=Yt,Ut=e=>{const{componentCls:n,menuCls:t,zIndexPopup:o,dropdownArrowDistance:r,sizePopupArrow:a,antCls:i,iconCls:s,motionDurationMid:c,dropdownPaddingVertical:m,fontSize:p,dropdownEdgeChildPadding:g,colorTextDisabled:u,fontSizeIcon:b,controlPaddingHorizontal:d,colorBgElevated:$}=e;return[{[n]:Object.assign(Object.assign({},ie(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:o,display:"block","&::before":{position:"absolute",insetBlock:-r+a/2,zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${i}-btn`]:{[`& > ${s}-down, & > ${i}-btn-icon > ${s}-down`]:{fontSize:b}},[`${n}-wrap`]:{position:"relative",[`${i}-btn > ${s}-down`]:{fontSize:b},[`${s}-down::before`]:{transition:`transform ${c}`}},[`${n}-wrap-open`]:{[`${s}-down::before`]:{transform:"rotate(180deg)"}},[`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]:{display:"none"},[`&${i}-slide-down-enter${i}-slide-down-enter-active${n}-placement-bottomLeft,
          &${i}-slide-down-appear${i}-slide-down-appear-active${n}-placement-bottomLeft,
          &${i}-slide-down-enter${i}-slide-down-enter-active${n}-placement-bottom,
          &${i}-slide-down-appear${i}-slide-down-appear-active${n}-placement-bottom,
          &${i}-slide-down-enter${i}-slide-down-enter-active${n}-placement-bottomRight,
          &${i}-slide-down-appear${i}-slide-down-appear-active${n}-placement-bottomRight`]:{animationName:et},[`&${i}-slide-up-enter${i}-slide-up-enter-active${n}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${n}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${n}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${n}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${n}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${n}-placement-topRight`]:{animationName:tt},[`&${i}-slide-down-leave${i}-slide-down-leave-active${n}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${n}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${n}-placement-bottomRight`]:{animationName:ot},[`&${i}-slide-up-leave${i}-slide-up-leave-active${n}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${n}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${n}-placement-topRight`]:{animationName:nt}})},rt(e,{colorBg:$,limitVerticalRadius:!0,arrowPlacement:{top:!0,bottom:!0}}),{[`${n} ${t}`]:{position:"relative",margin:0},[`${t}-submenu-popup`]:{position:"absolute",zIndex:o,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${n}, ${n}-menu-submenu`]:{[t]:Object.assign(Object.assign({padding:g,listStyleType:"none",backgroundColor:$,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},te(e)),{[`${t}-item-group-title`]:{padding:`${m}px ${d}px`,color:e.colorTextDescription,transition:`all ${c}`},[`${t}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${t}-item-icon`]:{minWidth:p,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${t}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${c}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${t}-item, ${t}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${m}px ${d}px`,color:e.colorText,fontWeight:"normal",fontSize:p,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${c}`,borderRadius:e.borderRadiusSM,["&:hover, &-active"]:{backgroundColor:e.controlItemBgHover}},te(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:u,cursor:"not-allowed","&:hover":{color:u,backgroundColor:$,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${e.marginXXS}px 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${n}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${n}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:b,fontStyle:"normal"}}}),[`${t}-item-group-list`]:{margin:`0 ${e.marginXS}px`,padding:0,listStyle:"none"},[`${t}-submenu-title`]:{paddingInlineEnd:d+e.fontSizeSM},[`${t}-submenu-vertical`]:{position:"relative"},[`${t}-submenu${t}-submenu-disabled ${n}-menu-submenu-title`]:{[`&, ${n}-menu-submenu-arrow-icon`]:{color:u,backgroundColor:$,cursor:"not-allowed"}},[`${t}-submenu-selected ${n}-menu-submenu-title`]:{color:e.colorPrimary}})}},[Y(e,"slide-up"),Y(e,"slide-down"),me(e,"move-up"),me(e,"move-down"),ve(e,"zoom-big")]]},Te=re("Dropdown",(e,n)=>{let{rootPrefixCls:t}=n;const{marginXXS:o,sizePopupArrow:r,controlHeight:a,fontSize:i,lineHeight:s,paddingXXS:c,componentCls:m,borderRadiusLG:p}=e,g=(a-i*s)/2,{dropdownArrowOffset:u}=Qe({contentRadius:p}),b=G(e,{menuCls:`${m}-menu`,rootPrefixCls:t,dropdownArrowDistance:r/2+o,dropdownArrowOffset:u,dropdownPaddingVertical:g,dropdownEdgeChildPadding:c});return[Ut(b),Vt(b)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));var Kt=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const Be=e=>{const{getPopupContainer:n,getPrefixCls:t,direction:o}=l.useContext(L),{prefixCls:r,type:a="default",danger:i,disabled:s,loading:c,onClick:m,htmlType:p,children:g,className:u,menu:b,arrow:d,autoFocus:$,overlay:f,trigger:y,align:h,open:w,onOpenChange:j,placement:v,getPopupContainer:C,href:S,icon:B=l.createElement(xe,null),title:_,buttonsRender:O=Le=>Le,mouseEnterDelay:N,mouseLeaveDelay:z,overlayClassName:P,overlayStyle:D,destroyPopupOnHide:x,dropdownRender:M}=e,H=Kt(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),A=t("dropdown",r),R=`${A}-button`,[X,E]=Te(A),W={menu:b,arrow:d,autoFocus:$,align:h,disabled:s,trigger:s?[]:y,onOpenChange:j,getPopupContainer:C||n,mouseEnterDelay:N,mouseLeaveDelay:z,overlayClassName:P,overlayStyle:D,destroyPopupOnHide:x,dropdownRender:M},{compactSize:Q,compactItemClassnames:ee}=it(A,o),I=T(R,ee,u,E);"overlay"in e&&(W.overlay=f),"open"in e&&(W.open=w),"placement"in e?W.placement=v:W.placement=o==="rtl"?"bottomLeft":"bottomRight";const se=l.createElement(ue,{type:a,danger:i,disabled:s,loading:c,onClick:m,htmlType:p,href:S,title:_},g),_e=l.createElement(ue,{type:a,danger:i,icon:B}),[He,Ae]=O([se,_e]);return X(l.createElement(Gt.Compact,Object.assign({className:I,size:Q,block:!0},H),He,l.createElement(Ne,Object.assign({},W),Ae)))};Be.__ANT_BUTTON=!0;const Zt=Be,J=e=>{const{menu:n,arrow:t,prefixCls:o,children:r,trigger:a,disabled:i,dropdownRender:s,getPopupContainer:c,overlayClassName:m,rootClassName:p,open:g,onOpenChange:u,visible:b,onVisibleChange:d,mouseEnterDelay:$=.15,mouseLeaveDelay:f=.1,autoAdjustOverflow:y=!0,placement:h="",overlay:w,transitionName:j}=e,{getPopupContainer:v,getPrefixCls:C,direction:S}=l.useContext(L),B=l.useMemo(()=>{const I=C();return j!==void 0?j:h.includes("top")?`${I}-slide-down`:`${I}-slide-up`},[C,h,j]),_=l.useMemo(()=>h?h.includes("Center")?h.slice(0,h.indexOf("Center")):h:S==="rtl"?"bottomRight":"bottomLeft",[h,S]),O=C("dropdown",o),[N,z]=Te(O),{token:P}=lt.useToken(),D=l.Children.only(r),x=F(D,{className:T(`${O}-trigger`,{[`${O}-rtl`]:S==="rtl"},D.props.className),disabled:i}),M=i?[]:a;let H;M&&M.includes("contextMenu")&&(H=!0);const[A,R]=at(!1,{value:g??b}),X=Ce(I=>{u==null||u(I),d==null||d(I),R(I)}),E=T(m,p,z,{[`${O}-rtl`]:S==="rtl"}),W=st({arrowPointAtCenter:typeof t=="object"&&t.pointAtCenter,autoAdjustOverflow:y,offset:P.marginXXS,arrowWidth:t?P.sizePopupArrow:0,borderRadius:P.borderRadius}),Q=l.useCallback(()=>{R(!1)},[]),ee=()=>{let I;return n!=null&&n.items?I=l.createElement(Ht,Object.assign({},n)):typeof w=="function"?I=w():I=w,s&&(I=s(I)),I=l.Children.only(typeof I=="string"?l.createElement("span",null,I):I),l.createElement(jt,{prefixCls:`${O}-menu`,expandIcon:l.createElement("span",{className:`${O}-menu-submenu-arrow`},l.createElement(pt,{className:`${O}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:Q,validator:se=>{}},l.createElement(dt,null,I))};return N(l.createElement(ct,Object.assign({alignPoint:H},q(e,["rootClassName"]),{mouseEnterDelay:$,mouseLeaveDelay:f,visible:A,builtinPlacements:W,arrow:!!t,overlayClassName:E,prefixCls:O,getPopupContainer:c||v,transitionName:B,trigger:M,overlay:ee,placement:_,onVisibleChange:X}),x))};J.Button=Zt;function qt(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Jt=ut(J,"dropdown",e=>e,qt),Qt=e=>l.createElement(Jt,Object.assign({},e),l.createElement("span",null));J._InternalPanelDoNotUseOrYouWillBeFired=Qt;const Ne=J,ze=e=>{let{children:n}=e;const{getPrefixCls:t}=l.useContext(L),o=t("breadcrumb");return l.createElement("li",{className:`${o}-separator`,"aria-hidden":"true"},n===""?n:n||"/")};ze.__ANT_BREADCRUMB_SEPARATOR=!0;const le=ze;var eo=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};function to(e,n){if(e.title===void 0)return null;const t=Object.keys(n).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${t})`,"g"),(o,r)=>n[r]||o)}function De(e,n,t,o){if(t==null)return null;const{className:r,onClick:a}=n,i=eo(n,["className","onClick"]),s=Object.assign(Object.assign({},Se(i,{data:!0,aria:!0})),{onClick:a});return o!==void 0?l.createElement("a",Object.assign({},s,{className:T(`${e}-link`,r),href:o}),t):l.createElement("span",Object.assign({},s,{className:T(`${e}-link`,r)}),t)}function oo(e,n){return(o,r,a,i,s)=>{if(n)return n(o,r,a,i);const c=to(o,r);return De(e,o,c,s)}}var ne=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const Me=e=>{const{prefixCls:n,separator:t="/",children:o,menu:r,overlay:a,dropdownProps:i,href:s}=e,m=(p=>{if(r||a){const g=Object.assign({},i);if(r){const u=r||{},{items:b}=u,d=ne(u,["items"]);g.menu=Object.assign(Object.assign({},d),{items:b==null?void 0:b.map(($,f)=>{var{key:y,title:h,label:w,path:j}=$,v=ne($,["key","title","label","path"]);let C=w??h;return j&&(C=l.createElement("a",{href:`${s}${j}`},C)),Object.assign(Object.assign({},v),{key:y??f,label:C})})})}else a&&(g.overlay=a);return l.createElement(Ne,Object.assign({placement:"bottom"},g),l.createElement("span",{className:`${n}-overlay-link`},p,l.createElement(mt,null)))}return p})(o);return m!=null?l.createElement(l.Fragment,null,l.createElement("li",null,m),t&&l.createElement(le,null,t)):null},Re=e=>{const{prefixCls:n,children:t,href:o}=e,r=ne(e,["prefixCls","children","href"]),{getPrefixCls:a}=l.useContext(L),i=a("breadcrumb",n);return l.createElement(Me,Object.assign({},r,{prefixCls:i}),De(i,r,t,o))};Re.__ANT_BREADCRUMB_ITEM=!0;const no=Re,ro=e=>{const{componentCls:n,iconCls:t}=e;return{[n]:Object.assign(Object.assign({},ie(e)),{color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize,[t]:{fontSize:e.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.breadcrumbLinkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},te(e)),["li:last-child"]:{color:e.breadcrumbLastItemColor},[`${n}-separator`]:{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor},[`${n}-link`]:{[`
          > ${t} + span,
          > ${t} + a
        `]:{marginInlineStart:e.marginXXS}},[`${n}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${t}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},io=re("Breadcrumb",e=>{const n=G(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[ro(n)]});var he=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};function lo(e){const{breadcrumbName:n,children:t}=e,o=he(e,["breadcrumbName","children"]),r=Object.assign({title:n},o);return t&&(r.menu={items:t.map(a=>{var{breadcrumbName:i}=a,s=he(a,["breadcrumbName"]);return Object.assign(Object.assign({},s),{title:i})})}),r}function ao(e,n){return l.useMemo(()=>e||(n?n.map(lo):null),[e,n])}var so=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const co=(e,n)=>{if(n===void 0)return n;let t=(n||"").replace(/^\//,"");return Object.keys(e).forEach(o=>{t=t.replace(`:${o}`,e[o])}),t},ae=e=>{const{prefixCls:n,separator:t="/",style:o,className:r,rootClassName:a,routes:i,items:s,children:c,itemRender:m,params:p={}}=e,g=so(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:u,direction:b}=l.useContext(L);let d;const $=u("breadcrumb",n),[f,y]=io($),h=ao(s,i),w=oo($,m);if(h&&h.length>0){const v=[],C=s||i;d=h.map((S,B)=>{const{path:_,key:O,type:N,menu:z,overlay:P,onClick:D,className:x,separator:M}=S,H=co(p,_);H!==void 0&&v.push(H);const A=O??B;if(N==="separator")return l.createElement(le,{key:A},M);const R={},X=B===h.length-1;z?R.menu=z:P&&(R.overlay=P),x&&(R.className=x);let{href:E}=S;return v.length&&H!==void 0&&(E=`#/${v.join("/")}`),l.createElement(Me,Object.assign({key:A},R,Se(S,{data:!0,aria:!0}),{href:E,separator:X?"":t,onClick:D,prefixCls:$}),w(S,p,C,v,E))})}else if(c){const v=V(c).length;d=V(c).map((C,S)=>{if(!C)return C;const B=S===v-1;return F(C,{separator:B?"":t,key:S})})}const j=T($,{[`${$}-rtl`]:b==="rtl"},r,a,y);return f(l.createElement("nav",Object.assign({className:j,style:o},g),l.createElement("ol",null,d)))};ae.Item=no;ae.Separator=le;const $o=ae;export{$o as B};