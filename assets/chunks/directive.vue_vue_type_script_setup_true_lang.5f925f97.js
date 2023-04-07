import{V as y,u as $}from"./component.2e979db0.js";import{f,g as i,r as x,o as l,c as n,d,b as c,w,F as u,h as m,u as _,t as v,i as b}from"../app.14249882.js";import{v as J}from"./directive.97873c0d.js";const k={class:"flex"},V={class:"flex justify-between"},S=f({__name:"demo",setup(h){const s=i([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]),t=i(s.value.map(o=>({name:`${o.name}-2`,id:`${o.id}-2`})));function p(o){const e=t.value.length;return{name:`${o.name}-clone-${e}`,id:`${o.id}-clone-${e}`}}return(o,e)=>{const r=x("preview-list");return l(),n(u,null,[d("div",k,[c(_(y),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value=a),animation:"150",ghostClass:"ghost",group:{name:"people",pull:"clone",put:!1},clone:p,sort:!1,class:"flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded"},{default:w(()=>[(l(!0),n(u,null,m(s.value,a=>(l(),n("div",{key:a.id,class:"cursor-move h-50px bg-gray-500/5 rounded p-3"},v(a.name),1))),128))]),_:1},8,["modelValue"]),c(_(y),{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value=a),animation:"150",group:"people",ghostClass:"ghost",class:"flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto"},{default:w(()=>[(l(!0),n(u,null,m(t.value,a=>(l(),n("div",{key:a.id,class:"cursor-move h-50px bg-gray-500/5 rounded p-3"},v(a.name),1))),128))]),_:1},8,["modelValue"])]),d("div",V,[c(r,{list:s.value},null,8,["list"]),c(r,{list:t.value},null,8,["list"])])],64)}}}),C={class:"flex"},D={class:"flex justify-between"},q=f({__name:"hooks",setup(h){const s=i([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]),t=i(s.value.map(e=>({name:`${e.name}-2`,id:`${e.id}-2`}))),p=i(),o=i();return $(p,s,{animation:150,group:{name:"people",pull:"clone",put:!1},sort:!1,clone(e){const r=t.value.length;return{name:`${e.name}-clone-${r}`,id:`${e.id}-clone-${r}`}}}),$(o,t,{animation:150,group:"people"}),(e,r)=>{const a=x("preview-list");return l(),n(u,null,[d("div",C,[d("section",{class:"flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded",ref_key:"el1",ref:p},[(l(!0),n(u,null,m(s.value,g=>(l(),n("div",{key:g.id,class:"cursor-move h-50px bg-gray-500/5 rounded p-3"},v(g.name),1))),128))],512),d("section",{class:"flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto",ref_key:"el2",ref:o},[(l(!0),n(u,null,m(t.value,g=>(l(),n("div",{key:g.id,class:"cursor-move h-50px bg-gray-500/5 rounded p-3"},v(g.name),1))),128))],512)]),d("div",D,[c(a,{list:s.value},null,8,["list"]),c(a,{list:t.value},null,8,["list"])])],64)}}}),j={class:"flex"},B={class:"flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded"},F={class:"flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto"},N={class:"flex justify-between"},z=f({__name:"directive",setup(h){const s=i([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]),t=i(s.value.map(o=>({name:`${o.name}-2`,id:`${o.id}-2`})));function p(o){const e=t.value.length;return{name:`${o.name}-clone-${e}`,id:`${o.id}-clone-${e}`}}return(o,e)=>{const r=x("preview-list");return l(),n(u,null,[d("div",j,[b((l(),n("section",B,[(l(!0),n(u,null,m(s.value,a=>(l(),n("div",{key:a.id,class:"cursor-move h-50px bg-gray-500/5 rounded p-3"},v(a.name),1))),128))])),[[_(J),[s.value,{animation:150,group:{name:"people",pull:"clone",put:!1},sort:!1,clone:p}]]]),b((l(),n("section",F,[(l(!0),n(u,null,m(t.value,a=>(l(),n("div",{key:a.id,class:"cursor-move h-50px bg-gray-500/5 rounded p-3"},v(a.name),1))),128))])),[[_(J),[t.value,{animation:150,group:"people"}]]])]),d("div",N,[c(r,{list:s.value},null,8,["list"]),c(r,{list:t.value},null,8,["list"])])],64)}}});export{S as _,q as a,z as b};
