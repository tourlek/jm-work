import{_ as s,o as n,e as p,h as d,m as y,p as i,r as m}from"./index-dbd23a5d.js";const f={},_={class:"loading-container"},h=d("span",{class:"loading loading-dots loading-lg m-auto"},null,-1),u=[h];function g(c,a){return n(),p("div",_,u)}const B=s(f,[["render",g]]),r=y.firestore(),b=i("employer",()=>{const c=m([]);return{employer:c,fetchEmployerId:async e=>{try{const o=await r.collection("employer").doc(e).get();if(o.exists){const l=o.data();c.value=l}else console.log("employer not found")}catch(t){console.error("Error fetching employer:",t)}},fetchEmployer:async()=>{try{const t=(await r.collection("employer").get()).docs.map(o=>{const l=o.data();return{id:o.id,...l}});c.value=t}catch(e){console.log(e)}},postEmployer:async e=>{await r.collection("employer").add(e)},patchEmployer:async(e,t)=>{try{await r.collection("employer").doc(e).update(t)}catch(o){console.error("Error updating employer:",o)}},deleteEmployer:async e=>{await r.collection("employer").doc(e).delete()}}});export{B as L,b as u};