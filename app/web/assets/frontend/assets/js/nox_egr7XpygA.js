import{r as h,b as o,C,j as p,F as d,J as _}from"./nox_pkpXrtgyh.js";import{u as w}from"./nox_ppoee7he7.js";import{T as m}from"./nox_eXeXg7khQ.js";import{I as u}from"./nox_ttgoehttr.js";import{D as y}from"./nox_po7XXhte7.js";import{M as S}from"./nox_7X7htortQ.js";import"./nox_geektteor.js";import"./nox_gtprokeeo.js";import"./nox_yXegrrXgo.js";import"./nox_Xpt7eXeyh.js";import"./nox_kXk7X7eeg.js";function E(){const c="email_ctx_toped",n="password_ctx_toped",i="secret_ctx_toped";function e(){const a=localStorage.getItem(c),l=localStorage.getItem(n),t=localStorage.getItem(i);return a&&l&&t?{email:a,password:l,secret:t}:null}function s(a){localStorage.setItem(c,a.email),localStorage.setItem(n,a.password),localStorage.setItem(i,a.secret)}return{getCache:e,setCache:s}}function R(c){const{getCache:n,setCache:i}=E(),[e,s]=h.useState({email:"",password:"",otp:""}),{sender:a}=w("PutTokopediaCategoryUpdateCategory",{onSuccess(){i({email:e.email,password:e.password,secret:e.otp}),c.onFinish()}});h.useEffect(()=>{const t=n();if(t){const{email:r,password:g,secret:T}=t;s(f=>({...f,email:r,password:g,otp:T}))}},[]);function l(){a({method:"put",path:"tokopedia/category/update_category",payload:{password:e.password,secret:e.otp,username:e.email}})}return o(S,{...c,onOk:l,centered:!0,closeIcon:!0,width:400,footer:null,children:o(C,{size:"small",type:"inner",title:"Tokopedia Account for Getting Cat List",bordered:!1,children:p(d,{children:[p(d,{style:{rowGap:5},children:[o(m.Text,{children:"Email:"}),o(u,{value:e.email,onChange:t=>s(r=>({...r,email:t.target.value})),placeholder:"silverrayleigh@yahoo.com"})]}),p(d,{style:{rowGap:5},children:[o(m.Text,{children:"Password:"}),o(u.Password,{value:e.password,onChange:t=>s(r=>({...r,password:t.target.value})),placeholder:"⁎⁎⁎⁎⁎⁎⁎⁎"})]}),p(d,{style:{rowGap:5},children:[o(m.Text,{children:"OTP Secret:"}),o(u,{value:e.otp,onChange:t=>s(r=>({...r,otp:t.target.value})),placeholder:"SF56F87CBJSXXXXXXXX"})]}),o(y,{dashed:!0,style:{marginBlock:2}}),o(_,{onClick:l,type:"primary",children:"Submit"})]})})})}export{R as default};