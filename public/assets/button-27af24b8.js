import{o as m,c as i,t as d,e as o,n as k,b as c}from"./index-ae08a8a1.js";const u=c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 cursor-pointer"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),p=[u],g={__name:"button",props:{msg:String,type:String,deleteBtn:Boolean,modal:Boolean},emits:["click","deleteItem"],setup(t,{emit:l}){let r=e=>{l("click",e)},a=e=>{l("deleteItem",e)};return(e,n)=>t.deleteBtn?(m(),i("button",{key:1,onClick:n[1]||(n[1]=(...s)=>o(a)&&o(a)(...s))},p)):(m(),i("button",{key:0,onClick:n[0]||(n[0]=(...s)=>o(r)&&o(r)(...s)),class:k(["btn btn-primary",t.type?t.type:"btn btn-primary"])},d(t.msg),3))}};export{g as _};