import{_ as a}from"./form-input-329611a2.js";import{u as o}from"./employee-eabfc88c.js";import{r as i,o as m,c as p,u as e}from"./index-dbd23a5d.js";import"./button-f840e959.js";const b={__name:"home",setup(d){const s=o();let t=i({firstName:"",lastName:"",email:"",phone:"",employerId:"",streetAddress:"",provide:"",district:"",subDistrict:"",postalCode:"",attorney:[{firstName:"",lastName:"",streetAddress:"",addressNo:"",road:"",district:"",subDistrict:"",provide:"",postalCode:""}]}),r=async()=>{await s.postEmployee(t.value)};return(c,l)=>(m(),p(a,{data:e(t),onSubmit:e(r)},null,8,["data","onSubmit"]))}};export{b as default};
