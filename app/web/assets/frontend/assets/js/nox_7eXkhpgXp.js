import{r as d,A as s,n as m,b as t,j as i,E as r,J as a,C as u}from"./nox_pkpXrtgyh.js";import{u as h}from"./nox_ppoee7he7.js";import{C as v}from"./nox_QhApokoor.js";import{I as C}from"./nox_ttgoehttr.js";import{F as f,D as k}from"./nox_rQhgyA7Qg.js";import{C as g}from"./nox_geektteor.js";import{m as c}from"./nox_hh7ohhrQk.js";import{R as A,S}from"./nox_t7QXoehky.js";import"./nox_7rAkXkpkr.js";import"./nox_kXrkQroQ7.js";import"./nox_7orkkeryy.js";import"./nox_kXk7X7eeg.js";import"./nox_yXAgkhpgk.js";import"./nox_At7tt7gA7.js";import"./nox_yXegrrXgo.js";import"./nox_QgAgrh7kX.js";import"./nox_ge7pteAAe.js";import"./nox_po7XXhte7.js";import"./nox_gtprokeeo.js";import"./nox_Xpt7eXeyh.js";var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const x=y;var b=function(o,l){return d.createElement(s,m({},o,{ref:l,icon:x}))};const O=d.forwardRef(b);function J(e){const{sender:o}=h("PutTokopediaAkunResetAllCount",{onSuccess(){c.success({key:"rss-scss",content:"Reset fulfilled"})},onError(l){c.success({key:"rss-err",content:l.error})}});return t(u,{size:"small",title:"Setting Tokopedia Upload",children:i(r,{style:{justifyContent:"space-between",alignItems:"center"},children:[t(v,{checked:e.checkedAll,indeterminate:e.indeterminate,onChange:l=>{var n;(n=e.onChangeCheckedAll)==null||n.call(e,l.target.checked)},children:"Select All"}),i(r,{style:{flex:1},children:[t(C,{allowClear:!0,placeholder:"Search Profile...",style:{flex:1},value:e.nameQuery,onChange:l=>{var n;return(n=e.onChangeNameQuery)==null?void 0:n.call(e,l.target.value)}}),t(a,{onClick:e.onClickPasteAll,icon:t(f,{rev:"paste"}),disabled:e.disablePasteAll,children:"Paste All"}),t(a,{disabled:e.disableRemoveAll,icon:t(k,{rev:"remove"}),onClick:e.onClickRemoveAll,children:"Remove"}),t(a,{onClick:e.onClickSetActive,icon:t(g,{rev:"active"}),children:"Active All"}),t(a,{onClick:()=>o({method:"put",path:"tokopedia/akun/reset_all_count"}),icon:t(A,{rev:"reset"}),children:"Reset All"}),t(a,{type:"primary",icon:t(S,{rev:"save"}),onClick:e.onClickSave,loading:e.loadingSave,style:{backgroundColor:"#C2418D",boxShadow:"none",color:"#fff"},children:"Save"}),t(a,{type:"primary",icon:t(O,{rev:"upload"}),style:{boxShadow:"none"},onClick:e.onClickStartUpload,loading:e.loadingStartUpload,children:"Start Upload"})]})]})})}export{J as default};