import{u as c}from"./movies-3996db49.js";import{_ as l,f as p,g as _,o as s,c as a,a as o,F as r,r as u,h as d,i as m,p as h,d as f,j as g,t as n}from"./index-ab352757.js";const S={name:"SearchResult",computed:{...p(c,["movieList"])}},k=e=>(h("data-v-e66baf75"),e=e(),f(),e),v=k(()=>o("div",null,[o("h4",{style:{"text-align":"center","margin-top":"1rem"}},"Результаты поиска")],-1)),x={class:"list-group",style:{margin:"0 auto",width:"50%"}};function y(e,I,R,$,b,w){const i=_("router-link");return s(),a(r,null,[v,o("ul",x,[(s(!0),a(r,null,u(e.movieList.items,t=>(s(),a("li",{class:"list-group-item list-group-item-light",key:t},[d(i,{to:{name:"search-edit",params:{id:t.kinopoiskId}}},{default:m(()=>[g(n(t.nameOriginal)+" / "+n(t.nameRu),1)]),_:2},1032,["to"])]))),128))])],64)}const N=l(S,[["render",y],["__scopeId","data-v-e66baf75"]]);export{N as default};
