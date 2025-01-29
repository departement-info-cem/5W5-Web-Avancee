"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[8840],{70889:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"exercices/BackgroundService2","title":".NET BackgroundService #2","description":"2","source":"@site/docs/03-exercices/17-BackgroundService2.md","sourceDirName":"03-exercices","slug":"/exercices/BackgroundService2","permalink":"/5W5-Web-Avancee/exercices/BackgroundService2","draft":false,"unlisted":false,"editUrl":"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/03-exercices/17-BackgroundService2.md","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{},"sidebar":"exercices","previous":{"title":".NET BackgroundService","permalink":"/5W5-Web-Avancee/exercices/BackgroundService"},"next":{"title":"Mocks","permalink":"/5W5-Web-Avancee/exercices/Mocks"}}');var s=n(74848),i=n(28453);const t={},a=".NET BackgroundService #2",o={},c=[{value:"Objectifs",id:"objectifs",level:2},{value:"\xc9tapes",id:"\xe9tapes",level:2},{value:"Ajout d&#39;un NbMessages sur la classe Channel (sur le serveur)",id:"ajout-dun-nbmessages-sur-la-classe-channel-sur-le-serveur",level:3},{value:"Ajout d&#39;un BackgroundService",id:"ajout-dun-backgroundservice",level:3},{value:"Ajout d&#39;une m\xe9thode qui \xe9coute le message sur le client",id:"ajout-dune-m\xe9thode-qui-\xe9coute-le-message-sur-le-client",level:3},{value:"Solution",id:"solution",level:3}];function l(A){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"net-backgroundservice-2",children:".NET BackgroundService #2"})}),"\n",(0,s.jsx)(e.h2,{id:"objectifs",children:"Objectifs"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Ajouter un ",(0,s.jsx)(e.strong,{children:"BackgroundService"})," \xe0 l'exerice ",(0,s.jsx)(e.a,{href:"/exercices/SignalR2",children:"SignalR, 2e partie"})]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\xe9tapes",children:"\xc9tapes"}),"\n",(0,s.jsxs)(e.p,{children:["Continuer l'exercice sur ",(0,s.jsx)(e.strong,{children:"SignalR, 2e partie"})," disponible ici:"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://github.com/CEM-420-5W5/SignalR_2",children:"Projet GitHub avec Client et Serveur"}),"\n(il existe une branche solution \xe0 partir de laquelle vous pouvez commencer cette partie)"]}),"\n",(0,s.jsx)(e.p,{children:"Une fois que vous avez fait fonctionner l'exemple et que vous avez bien compris comment il fonctionne, on veut ajouter les choses suivantes:"}),"\n",(0,s.jsx)(e.h3,{id:"ajout-dun-nbmessages-sur-la-classe-channel-sur-le-serveur",children:"Ajout d'un NbMessages sur la classe Channel (sur le serveur)"}),"\n",(0,s.jsx)(e.p,{children:"On ne sauvegardera pas les messages, mais seulement la quantit\xe9."}),"\n",(0,s.jsxs)(e.p,{children:["On va donc ajouter une propri\xe9t\xe9 NbMessages sur la classe Channel ",(0,s.jsx)(e.strong,{children:"(N'oubliez pas de faire une migration)"})]}),"\n",(0,s.jsx)(e.p,{children:"On va ensuite incr\xe9menter la valeur chaque fois qu'un message est envoy\xe9 avec sur un channel avec la m\xe9thode SendMessage."}),"\n",(0,s.jsx)(e.p,{children:"N'oubliez pas de faire un SaveChangesAsync()"}),"\n",(0,s.jsx)(e.h3,{id:"ajout-dun-backgroundservice",children:"Ajout d'un BackgroundService"}),"\n",(0,s.jsxs)(e.p,{children:["Suivre les instructions pour ajouter un BackgroundService avec le nom de votre choix. (N'oubliez pas de l'ajouter dans ",(0,s.jsx)(e.strong,{children:"Program.cs"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"Le BackgroundService doit faire la chose suivante chaque 30 secondes:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Trouver le canal le populaire (Vous ",(0,s.jsx)(e.strong,{children:"pouvez"})," d\xe9cider de g\xe9rer le cas o\xf9 il y a plusieurs canaux avec une \xe9galit\xe9 pour la premi\xe8re place)"]}),"\n",(0,s.jsxs)(e.li,{children:["Envoyer un message ",(0,s.jsx)(e.strong,{children:"MostPopularChannel"})," avec la quantit\xe9 de messages au(x) groupe(s)"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["Il faut donc utiliser un ",(0,s.jsx)(e.strong,{children:"scope"})," pour obtenir le ",(0,s.jsx)(e.strong,{children:"DbContext"})," et un ",(0,s.jsx)(e.strong,{children:"IHubContext"})," pour envoyer le message."]})}),"\n",(0,s.jsx)(e.h3,{id:"ajout-dune-m\xe9thode-qui-\xe9coute-le-message-sur-le-client",children:"Ajout d'une m\xe9thode qui \xe9coute le message sur le client"}),"\n",(0,s.jsx)(e.p,{children:"Sur le client, une alert du genre devrait s'afficher lorsqu'un utilisateur est connect\xe9 au canal le plus populaire:"}),"\n",(0,s.jsx)(e.table,{children:(0,s.jsx)(e.thead,{children:(0,s.jsx)(e.tr,{children:(0,s.jsx)(e.th,{children:(0,s.jsx)(e.img,{alt:"alt text",src:n(50335).A+"",width:"474",height:"143"})})})})}),"\n",(0,s.jsx)(e.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(e.p,{children:["Il y a une branche ",(0,s.jsx)(e.strong,{children:"backgroundService"})," dans le projet avec la solution\n(La branche solution, c'est la solution de la partie sur SignalR sans BackgroundService)"]})]})}function u(A={}){const{wrapper:e}={...(0,i.R)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(l,{...A})}):l(A)}},50335:(A,e,n)=>{n.d(e,{A:()=>r});const r="data:image/png;base64,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"},28453:(A,e,n)=>{n.d(e,{R:()=>t,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function t(A){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function a(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:t(A.components),r.createElement(i.Provider,{value:e},A.children)}}}]);