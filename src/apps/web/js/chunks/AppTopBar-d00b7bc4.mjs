import{d as i,c as a,a as _,e as r,j as d,r as u,f as c,b as m,g as o,o as s}from"./vendor-2c44cb30.mjs";import{_ as f}from"./eventBus-bf81ca73.mjs";const b=i({name:"AppTopBar",props:{resource:{type:Object,default:null}},emits:["close"]});const v={class:"oc-flex oc-p-s app-top-bar"},$={key:1};function B(e,t,k,y,C,g){const n=o("oc-resource"),p=o("oc-icon"),l=o("oc-button");return s(),a("div",v,[e.resource?(s(),_(n,{key:0,id:"app-top-bar-resource","is-thumbnail-displayed":!1,resource:e.resource},null,8,["resource"])):(s(),a("div",$)),r(),d("div",null,[u(e.$slots,"right",{},void 0,!0),r(),c(l,{id:"app-top-bar-close","aria-label":e.$gettext("Close"),size:"small",onClick:t[0]||(t[0]=h=>e.$emit("close"))},{default:m(()=>[c(p,{name:"close",size:"small"})]),_:1},8,["aria-label"])])])}const x=f(b,[["render",B],["__scopeId","data-v-60853539"]]);export{x as A};
