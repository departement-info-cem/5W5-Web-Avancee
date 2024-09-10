"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[812],{6382:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var r=s(5893),i=s(1151);const l={},t="Routage et Guards",a={id:"exercices/Guards",title:"Routage et Guards",description:"Cr\xe9er un nouveau projet",source:"@site/docs/03-exercices/07-Guards.md",sourceDirName:"03-exercices",slug:"/exercices/Guards",permalink:"/5W5-Web-Avancee/exercices/Guards",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/03-exercices/07-Guards.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"exercices",previous:{title:"Azure DevOps Boards",permalink:"/5W5-Web-Avancee/exercices/AzureDevOpsBoards"},next:{title:"Reactive Forms",permalink:"/5W5-Web-Avancee/exercices/ReactiveForms"}},c={},o=[{value:"Cr\xe9er un nouveau projet",id:"cr\xe9er-un-nouveau-projet",level:3},{value:"Un exemple de pr\xe9sentation",id:"un-exemple-de-pr\xe9sentation",level:3},{value:"Solution",id:"solution",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"routage-et-guards",children:"Routage et Guards"}),"\n",(0,r.jsx)(n.h3,{id:"cr\xe9er-un-nouveau-projet",children:"Cr\xe9er un nouveau projet"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cr\xe9er un nouveau projet Angular en utilisant le mode ",(0,r.jsx)(n.strong,{children:"--no-standalone"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"ng new --no-standalone ngReactiveForms\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Cr\xe9er une page ",(0,r.jsx)(n.strong,{children:"parent"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cr\xe9er 4 pages enfant:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/verreDEau qui affiche l'image d'un verre d'eau"}),"\n",(0,r.jsx)(n.li,{children:"/bonbon qui affiche une image de bonbons"}),"\n",(0,r.jsx)(n.li,{children:"/sel qui affiche une image de sel"}),"\n",(0,r.jsx)(n.li,{children:"/caramelAuSel qui affiche une image de caramel au beurre sal\xe9"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Compl\xe9ter la page parent en ajoutant:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"2 checkbox"}),"\n",(0,r.jsx)(n.li,{children:"un lien (<a>) vers la page /caramelAuSel"}),"\n",(0,r.jsx)(n.li,{children:"un <router-outlet> pour les pages enfants"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Les 2 check boxes ",(0,r.jsx)(n.strong,{children:"sauvegarde leur \xe9tat"})," dans le ",(0,r.jsx)(n.strong,{children:"localStorage"})," et ont les textes suivants :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\xab J\u2019aime les choses sucr\xe9s ! \xbb"}),"\n",(0,r.jsx)(n.li,{children:"\xab J\u2019aime les choses sal\xe9s ! \xbb"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Vous pouvez utiliser [(ngModel)] et (ngModelChange) pour g\xe9rer l'\xe9tat des pr\xe9f\xe9rences de l'utilisateur (Si il aime le sal\xe9 et/ou le sucr\xe9)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ajouter un guard pour la page /caramelAuSel et rediriger vers :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/verreDEau si l\u2019utilisateur n\u2019aime ni le sucre, ni le sel"}),"\n",(0,r.jsx)(n.li,{children:"/bonbon si l\u2019utilisateur n\u2019aime pas le sel, mais aime le sucre"}),"\n",(0,r.jsx)(n.li,{children:"/sel si l\u2019utilisateur aime le sel, mais pas le sucre"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"un-exemple-de-pr\xe9sentation",children:"Un exemple de pr\xe9sentation"}),"\n",(0,r.jsx)(n.p,{children:"Si on clique sur \"J'ai faim\" alors qu'on aime les choses sal\xe9s"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Sel",src:s(8556).Z+"",width:"595",height:"520"})}),"\n",(0,r.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ud83d\udd17",(0,r.jsx)(n.a,{href:"https://github.com/CEM-420-5W5/ngGuards",children:"Solution Angular"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8556:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/sel-1f7ab3310a0a595ee4b06201806a195d.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var r=s(7294);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);