import{b as i,j as a,aq as n,E as h,F as t,C as s}from"./nox_QyQrhXh7t.js";import{C as u}from"./nox_kg7Qeopok.js";import{C as y,T as r}from"./nox_hXXg7Qh7r.js";import{m as f}from"./nox_kgthygAQt.js";import{I as p}from"./nox_kgkAX7QhA.js";import{I as C}from"./nox_yprt7XXko.js";import{S as o}from"./nox_QtogQkhAh.js";import{F as v,D as g}from"./nox_pAAXttoXo.js";import"./nox_rQttQQ7Qk.js";import"./nox_ytr777ott.js";import"./nox_kyketkteA.js";import"./nox_tkopQrXee.js";import"./nox_kooyAtAXp.js";import"./nox_eQykeApX7.js";import"./nox_pkQgreokQ.js";import"./nox_AQrygoekt.js";import"./nox_QppgXhkAX.js";import"./nox_XkkrepXho.js";import"./nox_pQXtypkA7.js";import"./nox_teokkAeoA.js";import"./nox_Xk7eooAto.js";function L(e){var d,c,m;return i(s,{title:a(u,{checked:e.profile.isChecked,onChange:l=>{e.updateSingleProfileFn(e.profile.id,{isChecked:l.target.checked})},style:{userSelect:"none"},children:[e.number+". ",e.profile.id]}),hoverable:!0,size:"small",type:"inner",actions:[i(n,{title:"Copy",placement:"bottom",showArrow:!1,children:i(y,{style:{color:"#FFA559"},rev:"copy",onClick:()=>{f.success(`Copied profile: ${e.profile.id}`),e.copyProfileFn(e.profile)}},"copy")}),i(n,{title:"Paste",placement:"bottom",showArrow:!1,children:i(v,{style:{color:"#FFA559"},rev:"paste",onClick:()=>{e.clipboard&&(f.info(`Paste from: ${e.clipboard.id}`),e.updateSingleProfileFn(e.profile.id,{limitUpload:e.clipboard.limitUpload,markupName:e.clipboard.markupName,spinName:e.clipboard.spinName,colName:e.clipboard.colName}))}},"paste")}),i(n,{title:"Remove",placement:"bottom",showArrow:!1,children:i(g,{style:{color:"#FFA559"},onClick:()=>e.deleter({method:"post",path:"tokopedia/akun/delete",payload:{usernames:[e.profile.id]}}),rev:"delete"},"delete")})],children:a(t,{children:[a(h,{style:{width:"100%"},children:[a(t,{style:{flex:1},children:[a(t,{style:{rowGap:"5px"},children:[i(r.Text,{type:"secondary",children:"Username :"}),i(p,{value:e.profile.emailOrUsername,onChange:l=>e.updateSingleProfileFn(e.profile.id,{emailOrUsername:l.target.value}),placeholder:"username"})]}),a(t,{style:{rowGap:"5px"},children:[i(r.Text,{type:"secondary",children:"Password :"}),i(p.Password,{value:e.profile.password,onChange:l=>e.updateSingleProfileFn(e.profile.id,{password:l.target.value}),placeholder:"⁎⁎⁎⁎⁎⁎⁎⁎"})]}),a(t,{style:{rowGap:"5px"},children:[i(r.Text,{type:"secondary",children:"Upload Limit :"}),i(C,{value:e.profile.limitUpload,onChange:l=>e.updateSingleProfileFn(e.profile.id,{limitUpload:l||0}),placeholder:"1000",style:{width:"100%"}})]}),i("div",{})]}),a(t,{style:{flex:1},children:[a(t,{style:{rowGap:"5px"},children:[i(r.Text,{type:"secondary",children:"Markup :"}),a(o,{value:e.profile.markupName,onChange:l=>e.updateSingleProfileFn(e.profile.id,{markupName:l}),placeholder:"Choose Markup Data",children:[i(o.Option,{disabled:!0,value:"",children:"Markup Select"}),(d=e.markups)==null?void 0:d.map(l=>i(o.Option,{value:l.value,children:l.label},l.value))]})]}),a(t,{style:{rowGap:"5px"},children:[i(r.Text,{type:"secondary",children:"Spin :"}),a(o,{value:e.profile.spinName,onChange:l=>e.updateSingleProfileFn(e.profile.id,{spinName:l}),placeholder:"Choose Spin Data",children:[i(o.Option,{disabled:!0,value:"",children:"Spin Select"}),(c=e.spins)==null?void 0:c.map(l=>i(o.Option,{value:l.value,children:l.label},l.value))]})]}),a(t,{style:{rowGap:"5px"},children:[i(r.Text,{type:"secondary",children:"Collection :"}),a(o,{value:e.profile.colName,onChange:l=>e.updateSingleProfileFn(e.profile.id,{colName:l}),placeholder:"Choose Collection Data",children:[i(o.Option,{value:"",disabled:!0,children:"Choose Collection"}),(m=e.collections)==null?void 0:m.map(l=>i(o.Option,{value:l.value,children:l.label},l.value))]})]})]})]}),a(h,{style:{justifyContent:"space-between",width:"100%"},children:[i(u,{checked:e.profile.isActive,onChange:l=>e.updateSingleProfileFn(e.profile.id,{isActive:l.target.checked}),style:{userSelect:"none"},children:"Active"}),a(r.Text,{children:["Product Uploaded Count:"," ",e.profile.productCount||0]})]})]})})}export{L as default};