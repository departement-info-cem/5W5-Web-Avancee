"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[5595],{96935:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"exercices/ReactiveForms","title":"Reactive Forms","description":"Cr\xe9er un nouveau projet","source":"@site/docs/03-exercices/08-ReactiveForms.md","sourceDirName":"03-exercices","slug":"/exercices/ReactiveForms","permalink":"/5W5-Web-Avancee/exercices/ReactiveForms","draft":false,"unlisted":false,"editUrl":"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/03-exercices/08-ReactiveForms.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"exercices","previous":{"title":"Routage et Guards","permalink":"/5W5-Web-Avancee/exercices/Guards"},"next":{"title":"Polling vs SignalR","permalink":"/5W5-Web-Avancee/exercices/Polling"}}');var s=r(74848),t=r(28453);const o={},a="Reactive Forms",l={},c=[{value:"Cr\xe9er un nouveau projet",id:"cr\xe9er-un-nouveau-projet",level:3},{value:"Ajout d&#39;un ReactiveForm pour savoir si on aime les chats",id:"ajout-dun-reactiveform-pour-savoir-si-on-aime-les-chats",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"reactive-forms",children:"Reactive Forms"})}),"\n",(0,s.jsx)(n.h3,{id:"cr\xe9er-un-nouveau-projet",children:"Cr\xe9er un nouveau projet"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cr\xe9er un nouveau projet Angular"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"ng new ngReactiveForms\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Les autres options ne sont pas importantes.","\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Si vous avez d\xe9j\xe0 cr\xe9\xe9 un projet pour suivre cet exemple ",(0,s.jsx)(n.a,{href:"/info/ReactiveForms",children:"Info/ReactiveForms"}),", vous pouvez simplement ajouter un autre formulaire au m\xeame projet.\nSinon, suivez les instructions pour la cr\xe9ation du projet et la configuration."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ajout-dun-reactiveform-pour-savoir-si-on-aime-les-chats",children:"Ajout d'un ReactiveForm pour savoir si on aime les chats"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On va ajouter un formulaire"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ajouter un champ texte et un input","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ce champ texte demande votre animal favori"}),"\n",(0,s.jsx)(n.li,{children:"La r\xe9ponse est requise"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Ajouter un deuxi\xe8me champ texte","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Le champ texte demande si on aime mieux les chats que l'informatique"}),"\n",(0,s.jsx)(n.li,{children:"La r\xe9ponse est requise"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Ajouter une validation du formulaire","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['Le formulaire est seulement valide si l\'utilisateur \xe9crit "chat" comme animal favori ',(0,s.jsx)(n.strong,{children:"ET"}),' qu\'il r\xe9pond "oui" \xe0 la 2e question']}),"\n",(0,s.jsxs)(n.li,{children:["Il faut afficher ",(0,s.jsx)(n.strong,{children:"Vous devez pr\xe9f\xe9rer le chat!"})," si la r\xe9ponse \xe0 la 1ere question n'est pas chat (Directement sur le premier input)"]}),"\n",(0,s.jsxs)(n.li,{children:["Il faut afficher ",(0,s.jsx)(n.strong,{children:"Vous devez r\xe9pondre oui!"})," si la r\xe9ponse \xe0 la 2e question n'est pas oui (Directement sur le deuxi\xe8me input)"]}),"\n",(0,s.jsxs)(n.li,{children:["Il faut afficher ",(0,s.jsx)(n.strong,{children:"N'importe quoi!"})," avec le message d'erreur du formulaire dans les deux cas!"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Ajouter un bouton pour pouvoir soumettre le formulaire","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Le bouton est seulement actif si le formulaire est valide"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83d\udd17",(0,s.jsx)(n.a,{href:"https://github.com/CEM-420-5W5/ngReactiveForms",children:"Solution"})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);