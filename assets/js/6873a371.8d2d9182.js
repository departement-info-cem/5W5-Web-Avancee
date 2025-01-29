"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[495],{69346:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"exercices/Polling","title":"Polling vs SignalR","description":"Objectifs","source":"@site/docs/03-exercices/09-Polling.md","sourceDirName":"03-exercices","slug":"/exercices/Polling","permalink":"/5W5-Web-Avancee/exercices/Polling","draft":false,"unlisted":false,"editUrl":"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/03-exercices/09-Polling.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"exercices","previous":{"title":"Reactive Forms","permalink":"/5W5-Web-Avancee/exercices/ReactiveForms"},"next":{"title":"SignalR, 2e partie","permalink":"/5W5-Web-Avancee/exercices/SignalR2"}}');var s=i(74848),r=i(28453);const t={},o="Polling vs SignalR",c={},a=[{value:"Objectifs",id:"objectifs",level:2},{value:"La version <strong>polling</strong>",id:"la-version-polling",level:2},{value:"Compl\xe9tez la partie Angular de <strong>Polling</strong>",id:"compl\xe9tez-la-partie-angular-de-polling",level:3},{value:"La version <strong>SignalR</strong>",id:"la-version-signalr",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Cr\xe9er un Hub qui permet de supporter les actions suivantes :",id:"cr\xe9er-un-hub-qui-permet-de-supporter-les-actions-suivantes-",level:3},{value:"Connexion",id:"connexion",level:4},{value:"Ajouter une t\xe2che",id:"ajouter-une-t\xe2che",level:4},{value:"Compl\xe9ter une t\xe2che",id:"compl\xe9ter-une-t\xe2che",level:4},{value:"D\xe9connexion",id:"d\xe9connexion",level:4},{value:"Angular",id:"angular",level:3},{value:"Ajout du nombre d&#39;utilisateurs",id:"ajout-du-nombre-dutilisateurs",level:2},{value:"R\xe9flexion",id:"r\xe9flexion",level:2},{value:"Solution",id:"solution",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"polling-vs-signalr",children:"Polling vs SignalR"})}),"\n",(0,s.jsx)(n.h2,{id:"objectifs",children:"Objectifs"}),"\n",(0,s.jsx)(n.p,{children:"Faire deux impl\xe9mentations d\u2019une application pour g\xe9rer des t\xe2ches:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"La premi\xe8re avec un Controller d\u2019API et du polling"}),"\n",(0,s.jsx)(n.li,{children:"La seconde avec SignalR"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Les deux versions vont utiliser 2 components diff\xe9rents en Angular et les deux impl\xe9mentations vont exister en m\xeame temps sur le m\xeame serveur."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/CEM-420-5W5/PollingEtSignalR",children:"Projet GitHub avec Client et Serveur"})}),"\n",(0,s.jsxs)(n.h2,{id:"la-version-polling",children:["La version ",(0,s.jsx)(n.strong,{children:"polling"})]}),"\n",(0,s.jsxs)(n.h3,{id:"compl\xe9tez-la-partie-angular-de-polling",children:["Compl\xe9tez la partie Angular de ",(0,s.jsx)(n.strong,{children:"Polling"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Il existe d\xe9j\xe0 un contr\xf4leur d'API pour les t\xe2ches qui est fonctionnel ",(0,s.jsx)(n.strong,{children:"UselessTasksController.cs"})]}),"\n",(0,s.jsxs)(n.li,{children:["Il faut faire les appels et mettres les donn\xe9es \xe0 jour du c\xf4t\xe9 du client","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Regardez les TODOs dans le fichier ",(0,s.jsx)(n.strong,{children:"polling.component.ts"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Une fois que c'est possible d'ajouter les t\xe2ches et de les compl\xe9ter, essayez d'ouvrir un autre navigateur et v\xe9rifier que les t\xe2ches ne sont ",(0,s.jsx)(n.strong,{children:"PAS"})," synchronis\xe9 entre les deux!"]}),"\n",(0,s.jsx)(n.li,{children:"Ajoutez ensuite du polling pour mettre \xe0 jour les t\xe2ches chaque seconde"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"la-version-signalr",children:["La version ",(0,s.jsx)(n.strong,{children:"SignalR"})]}),"\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Modifier Program.cs, regardez les TODOs et ",(0,s.jsx)(n.a,{href:"/info/SignalR#enregistrer-un-hub",children:"les infos sur SignalR"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cr\xe9er-un-hub-qui-permet-de-supporter-les-actions-suivantes-",children:"Cr\xe9er un Hub qui permet de supporter les actions suivantes :"}),"\n",(0,s.jsx)(n.h4,{id:"connexion",children:"Connexion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["D\xe9clencher la fonction TaskList sur ",(0,s.jsx)(n.strong,{children:"le client qui a fait l\u2019appel"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ajouter-une-t\xe2che",children:"Ajouter une t\xe2che"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ajouter une nouvelle t\xe2che dans la BD, puis d\xe9clencher la fonction TaskList sur ",(0,s.jsx)(n.strong,{children:"tous les clients"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"compl\xe9ter-une-t\xe2che",children:"Compl\xe9ter une t\xe2che"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Marquer une t\xe2che comme compl\xe9t\xe9e dans BD, puis d\xe9clencher la fonction TaskList sur ",(0,s.jsx)(n.strong,{children:"tous les clients"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"d\xe9connexion",children:"D\xe9connexion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"D\xe9cr\xe9menter le nombre d'utilisateurs actifs"}),"\n",(0,s.jsx)(n.li,{children:"D\xe9clencher la fonction UserCount sur les clients"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"angular",children:"Angular"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ajouter la possibilit\xe9 d'ajouter et de compl\xe9ter des t\xe2ches, mais avec SignalR","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Voir les ",(0,s.jsx)(n.strong,{children:"TODOs"})," dans ",(0,s.jsx)(n.strong,{children:"signalr.component.ts"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ajout-du-nombre-dutilisateurs",children:"Ajout du nombre d'utilisateurs"}),"\n",(0,s.jsx)(n.p,{children:"Maintenant que les deux versions sont fonctionnels, on va ajouter une fonctionnalit\xe9 \xe0 la version SignalR."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Chaque fois qu'un client se connecte au Hub incr\xe9menter le nombre de connection (Une simpleme variable int \xe0 ajouter)"}),"\n",(0,s.jsx)(n.li,{children:"D\xe9clencher \xe9galement une m\xe9thode sur les clients pour mettre \xe0 jour le nombre de connexions (Il faut ajouter la m\xe9thode)"}),"\n",(0,s.jsx)(n.li,{children:"Faire ensuite la m\xeame chose avec la d\xe9connexion pour r\xe9duire le compte"}),"\n",(0,s.jsx)(n.li,{children:"Sur le client, il faut ajouter un affichage pour le nombre d'utilisateurs et la m\xe9thode pour mettre \xe0 jour le nombre de connexions."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"r\xe9flexion",children:"R\xe9flexion"}),"\n",(0,s.jsx)(n.p,{children:"Est-ce que \xe7a serait possible d'ajouter l'affichage du nombre d'utilisateurs avec la solution de polling?"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"C'est possible d'afficher le nombre d'utilisateurs connect\xe9s avec polling, mais ce n'est vraiment pas aussi simple. C'est surtout le fait de d\xe9crementer le nombre d'utilisateurs qui est complexe, car il n'y a pas de connexion/d\xe9connexion."})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Ce n'est pas n\xe9cessaire de l'impl\xe9menter, mais si vous voulez l'essayer, n'h\xe9sitez pas \xe0 demander de l'aide \xe0 votre enseignant."})}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(n.p,{children:["La solution est dans la branche ",(0,s.jsx)(n.strong,{children:"solution2"})," du repo"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var l=i(96540);const s={},r=l.createContext(s);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);