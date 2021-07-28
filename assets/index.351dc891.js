var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,o=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&s(e,r,t[r]);return e};import{R as c,k as i,S as m,f as u,r as d,B as p,j as E,a as v}from"./vendor.a2e7fa00.js";const b=()=>c.createElement("div",{className:"fixed bg-white top-0 left-0 right-0 bottom-0 z-50 boxes-container"},c.createElement("div",{className:"boxes"},c.createElement("div",{className:"box"},c.createElement("div",null),c.createElement("div",null),c.createElement("div",null),c.createElement("div",null)),c.createElement("div",{className:"box"},c.createElement("div",null),c.createElement("div",null),c.createElement("div",null),c.createElement("div",null)),c.createElement("div",{className:"box"},c.createElement("div",null),c.createElement("div",null),c.createElement("div",null),c.createElement("div",null)),c.createElement("div",{className:"box"},c.createElement("div",null),c.createElement("div",null),c.createElement("div",null),c.createElement("div",null)))),h=e=>c.createElement(i,{path:e.path,exact:e.exact,meta:e.meta,render:n=>{return c.createElement(e.component,(l=o({},n),a={routes:e.routes},t(l,r(a))));var l,a}}),y=({routes:e})=>c.createElement(m,null,e.map((e=>c.createElement(h,o({key:e.key},e)))));u.initializeApp({apiKey:"AIzaSyAKrKqHKeLprlLbC6jdd53aJQ9bzSV8W1w",authDomain:"speedy-solstice-319505.firebaseapp.com",projectId:"speedy-solstice-319505",storageBucket:"speedy-solstice-319505.appspot.com",messagingSenderId:"502470576000",appId:"1:502470576000:web:7e83717481d1c404322365"});const f=u.auth(),P=d.exports.createContext({}),x=({children:e})=>{const t=(()=>{const[e,t]=d.exports.useState(null),[r,n]=d.exports.useState(null),[l,a]=d.exports.useState(!1);return d.exports.useEffect((()=>{const e=f.onAuthStateChanged((e=>{t(e||null)}));return()=>e()}),[]),{user:e,loginResponse:r,loading:l,logIn:(e,r)=>(a(!0),f.signInWithEmailAndPassword(e,r).then((e=>(t(e.user),n(e),e.user))).finally((()=>a(!1)))),logOut:()=>f.signOut().then((()=>{t(null)})),register:(e,r)=>(a(!0),f.createUserWithEmailAndPassword(e,r).then((e=>(t(e.user),e.user))).finally((()=>a(!1)))),sendPasswordResetEmail:e=>f.sendPasswordResetEmail(e).then((()=>!0)),confirmPasswordReset:(e,t)=>f.confirmPasswordReset(e,t).then((()=>!0))}})();return c.createElement(P.Provider,{value:t},e)},g=()=>d.exports.useContext(P),O=(e,t,r)=>{if(e.meta.isPublic)return r();return g().user?r():r.redirect("/")};let _;const I={},A=function(e,t){if(!t||0===t.length)return e();if(void 0===_){const e=document.createElement("link").relList;_=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/react-vite/${e}`)in I)return;I[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":_,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},R=[{path:"/app",key:"PATIENT_DASHBOARD",exact:!0,meta:{isPublic:!0},component:d.exports.lazy((()=>A((()=>import("./Dashboard.c5441147.js")),["assets/Dashboard.c5441147.js","assets/Button.3697d8f2.js","assets/vendor.a2e7fa00.js"])))}];var T,k;(k=T||(T={}))[k.PATIENT=0]="PATIENT",k[k.DOCTOR=1]="DOCTOR",k[k.ADMIN=2]="ADMIN";const w={[T.PATIENT]:R},S=[{path:"/",exact:!0,key:"LOGIN",meta:{isPublic:!0},component:d.exports.lazy((()=>A((()=>import("./Login.78b42d3f.js")),["assets/Login.78b42d3f.js","assets/vendor.a2e7fa00.js","assets/Button.3697d8f2.js","assets/Input.2e2fa7c2.js"])))},{path:"/register",exact:!0,key:"REGISTER",meta:{isPublic:!0},component:d.exports.lazy((()=>A((()=>import("./Register.79fb0358.js")),["assets/Register.79fb0358.js","assets/vendor.a2e7fa00.js","assets/Button.3697d8f2.js","assets/Input.2e2fa7c2.js"])))},{path:"/404",exact:!0,key:"404",meta:{isPublic:!0},component:d.exports.lazy((()=>A((()=>import("./404.472da4cb.js")),["assets/404.472da4cb.js","assets/vendor.a2e7fa00.js"])))},{path:"/app",key:"APP",meta:{isPublic:!0},component:()=>{var e;const t=g();return c.createElement(m,null,w[(null==(e=t.user)?void 0:e.role)||0].map((e=>c.createElement(h,o({key:e.key},e)))))}}],j=()=>c.createElement(p,null,c.createElement(E,{guards:[O],loading:b},c.createElement(y,{routes:S}))),D=()=>c.createElement(d.exports.Suspense,{fallback:c.createElement(b,null)},c.createElement(x,null,c.createElement(p,null,c.createElement(j,null))));v.render(c.createElement(c.StrictMode,null,c.createElement(D,null)),document.getElementById("root"));export{b as B,g as u};