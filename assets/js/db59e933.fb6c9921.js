"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[748],{3946:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=i(5893),s=i(1151);const r={},o=".NET BackgroundService",c={id:"exercices/BackgroundService",title:".NET BackgroundService",description:"Objectifs",source:"@site/docs/03-exercices/17-BackgroundService.md",sourceDirName:"03-exercices",slug:"/exercices/BackgroundService",permalink:"/5W5-Web-Avancee/exercices/BackgroundService",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/03-exercices/17-BackgroundService.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"exercices",previous:{title:"GitHub tests et PRs",permalink:"/5W5-Web-Avancee/exercices/GitTestsEtPRs"},next:{title:"Mocks",permalink:"/5W5-Web-Avancee/exercices/Mocks"}},u={},l=[{value:"Objectifs",id:"objectifs",level:2},{value:"\xc9tapes",id:"\xe9tapes",level:2},{value:"Ajout d&#39;un NbWins pour les joueurs",id:"ajout-dun-nbwins-pour-les-joueurs",level:3},{value:"Ajout d&#39;un mutliplicateur (multiplier)",id:"ajout-dun-mutliplicateur-multiplier",level:3},{value:"Solution",id:"solution",level:3}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"net-backgroundservice",children:".NET BackgroundService"}),"\n",(0,t.jsx)(n.h2,{id:"objectifs",children:"Objectifs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Comprendre l'exemple qui utilise un BackgroundService ",(0,t.jsx)(n.a,{href:"/info/BackgroundService",children:"voir info"})]}),"\n",(0,t.jsx)(n.li,{children:"Modifier un projet qui utilise un BackgroundService qui utilise une BD et un Hub."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\xe9tapes",children:"\xc9tapes"}),"\n",(0,t.jsx)(n.p,{children:"Commencer par mettre en place le projet."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/CEM-420-5W5/BackgroundService",children:"Projet GitHub"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ATTENTION:"})," Le client doit \xeatre roul\xe9 avec ",(0,t.jsx)(n.strong,{children:"ng serve --ssl"}),", car on utilise l'authentification par cookie!"]}),"\n",(0,t.jsx)(n.p,{children:"Une fois que vous avez fait fonctionner l'exemple et que vous avez bien compris comment il fonctionne, on veut ajouter les 2 fonctionnalit\xe9s suivantes:"}),"\n",(0,t.jsx)(n.h3,{id:"ajout-dun-nbwins-pour-les-joueurs",children:"Ajout d'un NbWins pour les joueurs"}),"\n",(0,t.jsx)(n.p,{children:"\xc7a serait int\xe9ressant de sauvegarder le nombre de victoires des joueurs."}),"\n",(0,t.jsxs)(n.p,{children:["Donc chaques fois que l'on termine un Round dans notre BackgroundService ",(0,t.jsx)(n.strong,{children:"Game"}),", on va obtenir les Players qui ont gagn\xe9s et incr\xe9ment\xe9 le nombre de victories (NbWins)"]}),"\n",(0,t.jsx)(n.p,{children:"Une fois que c'est fait, on va vouloir \xe9galement afficher \xe7a sur le client."}),"\n",(0,t.jsx)(n.p,{children:"Il y a de nombreux TODOs dans le code pour vous aider \xe0 faire cette t\xe2che."}),"\n",(0,t.jsx)(n.p,{children:"Une fois que c'est fonctionnel, on veut voir quelque chose comme \xe7a:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:i(7263).Z+"",width:"437",height:"110"})}),"\n",(0,t.jsx)(n.h3,{id:"ajout-dun-mutliplicateur-multiplier",children:"Ajout d'un mutliplicateur (multiplier)"}),"\n",(0,t.jsxs)(n.p,{children:["Un mutliplier permet d'augmenter le score de plusieurs points \xe0 chaque click. Donc si le multiplier est \xe0 4, le joueur gagne 4 points \xe0 ",(0,t.jsx)(n.strong,{children:"chaque"})," click."]}),"\n",(0,t.jsx)(n.p,{children:"Un mutltplier co\xfbte des points (Le joueur fait baisser son score pour augmenter son multiplier). Le premier multiplier co\xfbt 10 points."}),"\n",(0,t.jsx)(n.p,{children:"Quand on augmente le multiplier, il DOUBLE \xe0 chaque fois 1 devient 2, 2 devient 4, qui devient 8, 16, 32, 64, 128..... etc."}),"\n",(0,t.jsx)(n.p,{children:"Le co\xfbt du multiplier augmente de la m\xeame fa\xe7on! Donc acheter le multiplier 32 (alors qu'on est d\xe9j\xe0 \xe0 16), co\xfbte 160 points! (Mais par la suite, chaque click donne 32 points, une AUBAINE)"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"\xc0 la fin d'un round, le multiplier REDEVIENT 1! Comme \xe7a, c'est \xe9quitable pour les joueurs qui viennent tout juste de commencer \xe0 jouer!"})}),"\n",(0,t.jsx)(n.p,{children:"Encore une fois, il y a de nombreux TODOs dans le code pour vous aider \xe0 faire cette t\xe2che."}),"\n",(0,t.jsx)(n.p,{children:"Une fois que c'est fonctionnel, on veut voir quelque chose comme \xe7a:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:i(4323).Z+"",width:"445",height:"204"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Si vous jouez bien, vous devriez \xeatre capable d'atteindre plus de 50,000 points en 30 secondes!"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Comme c'est un jeu simple et que \xe7a va vite, j'ai utilis\xe9 la technique de faire les actions \xe0 la fois sur le client et le serveur en parall\xe8le. On n'attend pas la r\xe9ponse du serveur pour augmenter le score ou le multiplicateur! Ce n'est pas une solution qui est toujours appropri\xe9e, disons que c'est un sujet assez complexe, mais dans la pluspart des logiciels sur lesquels vous allez travailler, c'est probablement mieux de ne pas utiliser cette technique... Sauf si l'interactivit\xe9 est tr\xe8s importante!"})}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsxs)(n.p,{children:["Il y a une branche ",(0,t.jsx)(n.strong,{children:"solution"})," dans le projet"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4323:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-1-47a5741b50f01010a5ca8e8dfa8791ed.png"},7263:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-298ccb0510e146bd0a120f979942c162.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var t=i(7294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);