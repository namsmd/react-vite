import{B as e}from"./Button.809edeb7.js";import{u as a}from"./index.a4c4acd3.js";import{u as s,R as t}from"./vendor.15b98c76.js";export default()=>{const r=a(),l=s();return t.createElement("div",{className:"h-screen w-screen flex flex-col justify-center items-center"},t.createElement("div",{className:"mb-3 shadow p-3 bg-gray-100 max-h-[400px] overflow-scroll"},t.createElement("p",{className:"text-base"},"Login response:"),t.createElement("pre",{className:"max-w-[800px] whitespace-pre-wrap break-words text-sm"},JSON.stringify(r.loginResponse,null,2))),t.createElement("div",{className:"mb-8 shadow p-3 bg-gray-100 max-h-[400px] overflow-scroll"},t.createElement("p",{className:"text-base"},"User data"),t.createElement("pre",{className:"max-w-[800px] whitespace-pre-wrap break-words text-sm"},JSON.stringify(r.user,null,2))),t.createElement(e,{onClick:()=>r.logOut().then((()=>l.replace("/")))},"Log out"))};
