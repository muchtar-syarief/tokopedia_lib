import{r as u,k as e,l as T,F as p,B as f}from"./nox_rghtApo7t.js";import{u as _}from"./nox_Q7hhk7k7e.js";import{M as C}from"./nox_roAXpyQgX.js";import{T as d}from"./nox_ehg77erhA.js";import{I as m}from"./nox_yQgAApgoh.js";import{D as w}from"./nox_Qt7ptXtk7.js";import"./nox_Qeyoptr7e.js";import"./nox_ykrXhoohh.js";import"./nox_yyXeoApor.js";import"./nox_ypoX7ehAg.js";import"./nox_heQgkAkrk.js";function y(){const c="email_ctx_toped",n="password_ctx_toped",i="secret_ctx_toped";function t(){const r=localStorage.getItem(c),l=localStorage.getItem(n),o=localStorage.getItem(i);return r&&l&&o?{email:r,password:l,secret:o}:null}function a(r){localStorage.setItem(c,r.email),localStorage.setItem(n,r.password),localStorage.setItem(i,r.secret)}return{getCache:t,setCache:a}}function G(c){const{getCache:n,setCache:i}=y(),[t,a]=u.useState({email:"",password:"",otp:""}),{sender:r}=_("PutTokopediaCategoryUpdateCategory",{onSuccess(){i({email:t.email,password:t.password,secret:t.otp}),c.onFinish()}});u.useEffect(()=>{const o=n();if(o){const{email:s,password:h,secret:g}=o;a(x=>({...x,email:s,password:h,otp:g}))}},[]);function l(){r({method:"put",path:"tokopedia/category/update_category",payload:{password:t.password,secret:t.otp,username:t.email}})}return e.jsx(C,{...c,onOk:l,centered:!0,closeIcon:!0,width:400,footer:null,children:e.jsx(T,{size:"small",type:"inner",title:"Tokopedia Account for Getting Cat List",bordered:!1,children:e.jsxs(p,{children:[e.jsxs(p,{style:{rowGap:5},children:[e.jsx(d.Text,{children:"Email:"}),e.jsx(m,{value:t.email,onChange:o=>a(s=>({...s,email:o.target.value})),placeholder:"silverrayleigh@yahoo.com"})]}),e.jsxs(p,{style:{rowGap:5},children:[e.jsx(d.Text,{children:"Password:"}),e.jsx(m.Password,{value:t.password,onChange:o=>a(s=>({...s,password:o.target.value})),placeholder:"⁎⁎⁎⁎⁎⁎⁎⁎"})]}),e.jsxs(p,{style:{rowGap:5},children:[e.jsx(d.Text,{children:"OTP Secret:"}),e.jsx(m,{value:t.otp,onChange:o=>a(s=>({...s,otp:o.target.value})),placeholder:"SF56F87CBJSXXXXXXXX"})]}),e.jsx(w,{dashed:!0,style:{marginBlock:2}}),e.jsx(f,{onClick:l,type:"primary",children:"Submit"})]})})})}export{G as default};