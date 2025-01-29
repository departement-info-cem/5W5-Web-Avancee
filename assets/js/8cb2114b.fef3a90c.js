"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[1132],{9661:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"cours/rencontre1","title":"1.1 - MVC et WebAPI \ud83c\udfe0","description":"Plan de cours, r\xe9vision et solution avec MVC et WebAPI","source":"@site/docs/01-cours/01-rencontre1.md","sourceDirName":"01-cours","slug":"/cours/rencontre1","permalink":"/5W5-Web-Avancee/cours/rencontre1","draft":false,"unlisted":false,"editUrl":"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/01-cours/01-rencontre1.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"1.1 - MVC et WebAPI \ud83c\udfe0","hide_table_of_contents":true},"sidebar":"docs","next":{"title":"1.2 - Auth. et d\xe9bogage \u2687","permalink":"/5W5-Web-Avancee/cours/rencontre2"}}');var s=r(74848),o=r(28453);const i={title:"1.1 - MVC et WebAPI \ud83c\udfe0",hide_table_of_contents:!0},c="MVC et WebAPI \ud83c\udfe0",l={},a=[{value:"Plan de cours, r\xe9vision et solution avec MVC et WebAPI",id:"plan-de-cours-r\xe9vision-et-solution-avec-mvc-et-webapi",level:2},{value:"MVC, Services et Areas",id:"mvc-services-et-areas",level:3},{value:"Exercice",id:"exercice",level:3},{value:"Liens",id:"liens",level:3}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"mvc-et-webapi-",children:"MVC et WebAPI \ud83c\udfe0"})}),"\n",(0,s.jsx)(n.h2,{id:"plan-de-cours-r\xe9vision-et-solution-avec-mvc-et-webapi",children:"Plan de cours, r\xe9vision et solution avec MVC et WebAPI"}),"\n",(0,s.jsx)(n.h3,{id:"mvc-services-et-areas",children:"MVC, Services et Areas"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Avoir Web API et MVC dans une m\xeame solution"}),"\n",(0,s.jsx)(n.li,{children:"Utilisation de 2 types d'authentification \xe0 la fois (Cookies + Token)"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Conseil de la s\xe9ance",type:"tip",children:[(0,s.jsx)(n.p,{children:"M\xe9fiez-vous des IAs... au moins pour l'instant!"}),(0,s.jsx)(n.p,{children:"Comme le niveau de l'IA est semblable \xe0 celui d'un programmeur junior, il est incroyablement utile pour un programmeur avec de l'exp\xe9rience!"}),(0,s.jsxs)(n.p,{children:["Quand on \xe9crit son ",(0,s.jsx)(n.strong,{children:"propre code"}),": \xe7a prend ",(0,s.jsx)(n.strong,{children:"3 heures de travail"})," et ",(0,s.jsx)(n.strong,{children:"1 heure"})," pour r\xe9gler les probl\xe8mes."]}),(0,s.jsxs)(n.p,{children:["Quand on modifie du code qu'on ne comprend pas trop sur ",(0,s.jsx)(n.strong,{children:"Stack Overflow"}),": \xe7a prend ",(0,s.jsx)(n.strong,{children:"1 heure de travail"})," et ",(0,s.jsx)(n.strong,{children:"7 heures"})," pour r\xe9gler les probl\xe8mes."]}),(0,s.jsxs)(n.p,{children:["Quand on g\xe9n\xe8re du code avec ",(0,s.jsx)(n.strong,{children:"ChatGPT"})," que l'on ne comprend pas: \xe7a prend ",(0,s.jsx)(n.strong,{children:"5 minutes"})," de travail et ",(0,s.jsx)(n.strong,{children:"3 jours"})," pour r\xe9gler les probl\xe8mes!"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Pas d'IA pour les examens"})," (Pour vous prot\xe9ger!)"]})]}),"\n",(0,s.jsx)(n.h3,{id:"exercice",children:"Exercice"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/exercices/MVCEtWebAPI",children:"MVC et Web API"})}),"\n",(0,s.jsx)(n.h3,{id:"liens",children:"Liens"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cegepedouardmontpetit.sharepoint.com/:p:/s/CMT420InformatiqueComitesCours-5W5/EXgLsnAyZVdKtNnYRXcSoaQBEB2PNCwTP2-aVgGvotjmPQ?e=L8J3AS",children:"\ud83d\udd17 Cours1.pptx"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cegepedouardmontpetit.sharepoint.com/:f:/s/CMT420InformatiqueComitesCours-5W5/Esn6iJzfe9NIlXvuctJhRxwBdztZkK84Ww9uWTvQwTHS7g?e=OxVKEz",children:"\ud83d\udd17 R\xe9pertoire qui contient les pr\xe9sentations"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);