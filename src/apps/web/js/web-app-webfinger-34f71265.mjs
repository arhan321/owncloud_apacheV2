var y=Object.defineProperty;var x=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var g=(e,t,n)=>(x(e,typeof t!="symbol"?t+"":t,n),n);import{d as C,C as k,E as W,D as v,K as p,G as R,o as f,c as h,j as o,t as r,e as c,F as w}from"./chunks/vendor-2c44cb30.mjs";import{u as z,d as O,b as $,a as E}from"./chunks/useAuthService-746ac4ed.mjs";import{u as Y}from"./chunks/useRouteMeta-37d67251.mjs";import{u as D,_ as U}from"./chunks/eventBus-bf81ca73.mjs";import{u as A}from"./chunks/useLoadingService-9d293e70.mjs";const B={},N={},j={},F={"One moment please…":"Einen Moment bitte ...","Resolve destination":"Ziel auflösen","Something went wrong.":"Etwas ist schiefgelaufen.","Sorry!":"Entschuldigung!","We could not resolve the destination.":"Das Ziel konnte nicht aufgelöst werden.",Webfinger:"Webfinger","You are being redirected.":"Sie werden weitergeleitet."},L={"One moment please…":"Aguarde un momento…","Resolve destination":"Resolver destino","Something went wrong.":"Se produjo un error.","Sorry!":"Lo sentimos","We could not resolve the destination.":"No hemos podido resolver el destino.",Webfinger:"WebFinger","You are being redirected.":"Se le redirigirá."},M={"One moment please…":"Veuillez patienter …","Sorry!":"Désolé !","You are being redirected.":"Vous allez être redirigé ..."},T={},V={"One moment please…":"רק רגע בבקשה…","Resolve destination":"פתרון היעד","Something went wrong.":"משהו השתבש.","Sorry!":"מתנצלים!","We could not resolve the destination.":"לא הצלחנו לפתור את היעד.",Webfinger:"Webfinger","You are being redirected.":"מתבצעת הפניה."},I={},P={"One moment please…":"Proszę czekać …","Resolve destination":"Określanie miejsca docelowego.","Something went wrong.":"Coś poszło nie tak.","Sorry!":"Przepraszam!","We could not resolve the destination.":"Nie mogliśmy określić miejsca docelowego.",Webfinger:"Webfinger","You are being redirected.":"Jesteś przekierowywany."},q={},G={},H={},J={"One moment please…":"Bir dakika lütfen...","Resolve destination":"Hedefi çöz","Something went wrong.":"Bir şeyler ters gitti.","Sorry!":"Üzgünüz!","We could not resolve the destination.":"Hedefi çözemedik.",Webfinger:"Ağ parmağı","You are being redirected.":"Yönlendiriliyorsunuz."},Z={ar:B,bg:N,cs:j,de:F,es:L,fr:M,gl:T,he:V,it:I,pl:P,ru:q,sk:G,sq:H,tr:J},K="http://webfinger.owncloud/rel/server-instance";class Q{constructor(t,n){g(this,"serverUrl");g(this,"clientService");this.serverUrl=t,this.clientService=n}async discoverOwnCloudServers(){const t=this.clientService.httpAuthenticated,n=D(this.serverUrl,".well-known","webfinger")+`?resource=${encodeURI(this.serverUrl)}`;return(await t.get(n)).data.links.filter(i=>i.rel===K)}}const X=C({name:"WebfingerResolve",setup(){const e=E(),t=z(),n=A(),d=O(),i=$(),{$gettext:m}=k(),b=Y("title",""),_=W(()=>m(p(b))),a=v([]),u=v(!1),S=new Q(e.serverUrl,t);return n.addTask(async()=>{var l;try{const s=await S.discoverOwnCloudServers();a.value=s,s.length===0&&(u.value=!0)}catch(s){if(console.error(s),((l=s.response)==null?void 0:l.status)===401)return d.handleAuthError(p(i));u.value=!0}}),R(a,l=>{l.length!==0&&(window.location.href=a.value[0].href)}),{pageTitle:_,ownCloudInstances:a,hasError:u}}});const ee={class:"webfinger-resolve oc-height-viewport oc-flex oc-flex-column oc-flex-center oc-flex-middle"},te=["textContent"],ne={class:"oc-card oc-card-body oc-text-center oc-width-large"},oe={key:"webfinger-resolve-error"},re=["textContent"],se=["textContent"],ie=["textContent"],ae={key:"webfinger-resolve-loading"},le=["textContent"],ce=["textContent"];function de(e,t,n,d,i,m){return f(),h("main",ee,[o("h1",{class:"oc-invisible-sr",textContent:r(e.pageTitle)},null,8,te),c(),o("div",ne,[e.hasError?(f(),h(w,{key:0},[o("h2",oe,[o("span",{textContent:r(e.$gettext("Sorry!"))},null,8,re)]),c(),o("p",{textContent:r(e.$gettext("Something went wrong."))},null,8,se),c(),o("p",{textContent:r(e.$gettext("We could not resolve the destination."))},null,8,ie)],64)):(f(),h(w,{key:1},[o("h2",ae,[o("span",{textContent:r(e.$gettext("One moment please…"))},null,8,le)]),c(),o("p",{textContent:r(e.$gettext("You are being redirected."))},null,8,ce)],64))])])}const ue=U(X,[["render",de]]);const ge={name:"Webfinger",id:"webfinger",icon:"fingerprint",isFileEditor:!1},fe=()=>[{name:"webfinger-root",path:"/",redirect:()=>({name:"webfinger-resolve"}),meta:{authContext:"anonymous"}},{path:"/resolve",name:"webfinger-resolve",component:ue,meta:{authContext:"idp",title:"Resolve destination",entryPoint:!0}}],_e={appInfo:ge,routes:fe,translations:Z};export{_e as default};
