import{l as r,m as a,r as p}from"./index-bff270e3.js";const l=r.firestore(),h=a("employees",()=>{const c=p([]);return{employee:c,fetchEmployeeId:async e=>{try{const o=await l.collection("employees").doc(e).get();if(o.exists){const s=o.data();c.value={id:o.id,...s}}else console.log("employer not found")}catch(t){console.error("Error fetching employer:",t)}},fetchEmployees:async()=>{try{const t=(await l.collection("employees").get()).docs.map(o=>{const s=o.data();return{id:o.id,...s}});c.value=t}catch(e){console.log(e)}},postEmployee:async e=>{await l.collection("employees").add(e)},patchEmployee:async(e,t)=>{try{await l.collection("employees").doc(e).update(t)}catch(o){console.error("Error updating employer:",o)}},deleteEmployee:async e=>{await l.collection("employees").doc(e).delete()}}});export{h as u};