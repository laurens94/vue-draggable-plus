import{u as m}from"./component.99fc525a.js";import{q as n}from"../app.4bbadaf4.js";const a={mounted:"mounted",unmounted:"unmounted"},o=new WeakMap,c={[a.mounted](t,e){const s=n(e.value)?[e.value]:e.value,u=m(t,...s);o.set(t,u.destroy)},[a.unmounted](t){var e;(e=o.get(t))==null||e(),o.delete(t)}};export{c as v};