import{V as b,u as x}from"./component.9de7ad8c.js";import{f as i,j as V,r as c,o as s,k as N,w as U,c as o,h as v,F as h,u as k,d as g,t as f,b as d,_ as w,g as p,i as D}from"../app.b3e85b66.js";import{v as $}from"./directive.82448468.js";const C=i({__name:"NestedComponent",props:{modelValue:{}},emits:["update:modelValue"],setup(u,{emit:e}){const m=u,l=V({get:()=>m.modelValue,set:t=>e("update:modelValue",t)});return(t,n)=>{const _=c("nested-component",!0);return s(),N(k(b),{class:"drag-area",tag:"ul",modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=a=>l.value=a),group:"g1"},{default:U(()=>[(s(!0),o(h,null,v(t.modelValue,a=>(s(),o("li",{key:a.name},[g("p",null,f(a.name),1),d(_,{modelValue:a.children,"onUpdate:modelValue":r=>a.children=r},null,8,["modelValue","onUpdate:modelValue"])]))),128))]),_:1},8,["modelValue"])}}});const j=w(C,[["__scopeId","data-v-58698aa9"]]),B={class:"flex justify-between"},J=i({__name:"demo",setup(u){const e=p([{name:"item 1",children:[{name:"item 2",children:[]}]},{name:"item 3",children:[{name:"item 4",children:[]}]},{name:"item 5",children:[]}]);return(m,l)=>{const t=c("preview-list");return s(),o("div",B,[d(j,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),class:"w-full"},null,8,["modelValue"]),d(t,{list:e.value},null,8,["list"])])}}}),H=i({__name:"NestedHooks",props:{modelValue:{}},emits:["update:modelValue"],setup(u,{emit:e}){const m=u,l=V({get:()=>m.modelValue,set:n=>e("update:modelValue",n)}),t=p();return x(t,l,{group:"g1"}),(n,_)=>{const a=c("nested-hooks",!0);return s(),o("ul",{class:"drag-area",ref_key:"el",ref:t},[(s(!0),o(h,null,v(n.modelValue,r=>(s(),o("li",{key:r.name},[g("p",null,f(r.name),1),d(a,{modelValue:r.children,"onUpdate:modelValue":y=>r.children=y},null,8,["modelValue","onUpdate:modelValue"])]))),128))],512)}}});const I=w(H,[["__scopeId","data-v-be125b71"]]),F={class:"flex justify-between"},K=i({__name:"hooks",setup(u){const e=p([{name:"item 1",children:[{name:"item 2",children:[]}]},{name:"item 3",children:[{name:"item 4",children:[]}]},{name:"item 5",children:[]}]);return(m,l)=>{const t=c("preview-list");return s(),o("div",F,[d(I,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),class:"w-full"},null,8,["modelValue"]),d(t,{list:e.value},null,8,["list"])])}}}),E={class:"drag-area"},L=i({__name:"NestedDirective",props:{modelValue:{}},emits:["update:modelValue"],setup(u,{emit:e}){const m=u,l=V({get:()=>m.modelValue,set:t=>e("update:modelValue",t)});return(t,n)=>{const _=c("nested-directive",!0);return D((s(),o("ul",E,[(s(!0),o(h,null,v(t.modelValue,a=>(s(),o("li",{key:a.name},[g("p",null,f(a.name),1),d(_,{modelValue:a.children,"onUpdate:modelValue":r=>a.children=r},null,8,["modelValue","onUpdate:modelValue"])]))),128))])),[[k($),[l.value,{group:"g1"}]]])}}});const S=w(L,[["__scopeId","data-v-9aceee5e"]]),q={class:"flex justify-between"},M=i({__name:"directive",setup(u){const e=p([{name:"item 1",children:[{name:"item 2",children:[]}]},{name:"item 3",children:[{name:"item 4",children:[]}]},{name:"item 5",children:[]}]);return(m,l)=>{const t=c("preview-list");return s(),o("div",q,[d(S,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),class:"w-full"},null,8,["modelValue"]),d(t,{list:e.value},null,8,["list"])])}}});export{J as _,K as a,M as b};