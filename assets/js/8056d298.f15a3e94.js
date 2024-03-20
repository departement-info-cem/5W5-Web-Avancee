"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[9508],{6495:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=i(5893),r=i(1151);const l={},c="GIT",d={id:"exercices/Git",title:"GIT",description:"Branches",source:"@site/docs/03-exercices/13-Git.md",sourceDirName:"03-exercices",slug:"/exercices/Git",permalink:"/5W5-Web-Avancee/exercices/Git",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/03-exercices/13-Git.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"exercices",previous:{title:"Events",permalink:"/5W5-Web-Avancee/exercices/Events"}},t={},o=[{value:"Branches",id:"branches",level:2},{value:"Jouer avec des branches!",id:"jouer-avec-des-branches",level:3},{value:"Stash et unstash",id:"stash-et-unstash",level:3},{value:"Commit des changements",id:"commit-des-changements",level:3},{value:"Conflits",id:"conflits",level:2},{value:"Setup de l&#39;exercice",id:"setup-de-lexercice",level:3},{value:"Modifier le projet sans conflit",id:"modifier-le-projet-sans-conflit",level:3},{value:"Mettre les 2 clones du repo \xe0 jour",id:"mettre-les-2-clones-du-repo-\xe0-jour",level:3},{value:"Modifier sans conflit v.2.0",id:"modifier-sans-conflit-v20",level:3},{value:"Modifier avec conflit! \ud83e\udde8",id:"modifier-avec-conflit-",level:3},{value:"R\xe9soudre le conflit",id:"r\xe9soudre-le-conflit",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"git",children:"GIT"}),"\n",(0,s.jsx)(n.h2,{id:"branches",children:"Branches"}),"\n",(0,s.jsx)(n.h3,{id:"jouer-avec-des-branches",children:"Jouer avec des branches!"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cr\xe9er un nouveau repo sur GitHub appel\xe9 branches_de_chats"}),"\n",(0,s.jsx)(n.li,{children:"Cr\xe9er 2 nouvelles branches, une branche chats et une branche plus_de_chats"}),"\n",(0,s.jsx)(n.li,{children:"Ajouter 3 fichiers texte"}),"\n",(0,s.jsx)(n.li,{children:"main.txt sur la branche main"}),"\n",(0,s.jsx)(n.li,{children:"chats.txt sur la branche chats"}),"\n",(0,s.jsx)(n.li,{children:"plus_de_chats.txt sur la branche plus_de_chats"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"stash-et-unstash",children:"Stash et unstash"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\xc9crire des noms de chats dans chaque fichier sans faire de commit"}),"\n",(0,s.jsx)(n.li,{children:"Utiliser Stash et Pop (unstash) pour mettre les changement en attente et les r\xe9cup\xe9rer"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"commit-des-changements",children:"Commit des changements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Faire des commits de la version finale des fichiers"}),"\n",(0,s.jsx)(n.li,{children:"Fusionner tous les changements des 2 branches de chats sur la branche main"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Les trois fichiers sont maintenant sur la branche main!"}),"\n",(0,s.jsx)(n.h2,{id:"conflits",children:"Conflits"}),"\n",(0,s.jsx)(n.h3,{id:"setup-de-lexercice",children:"Setup de l'exercice"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cr\xe9er un repo sur GitHub"}),"\n",(0,s.jsx)(n.li,{children:"Ajouter un nouveau projet Angular sur le repo"}),"\n",(0,s.jsx)(n.li,{children:"Faire 2 clones du projet sur votre poste"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"modifier-le-projet-sans-conflit",children:"Modifier le projet sans conflit"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dans le premier clone du repo"}),"\n",(0,s.jsx)(n.li,{children:"Ajouter 2 m\xe9thodes au fichier app.component.ts"}),"\n",(0,s.jsx)(n.li,{children:"Ne pas faire de commit imm\xe9diatement"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export class AppComponent {\n  wow() {\n  }\n  incroyable() {\n    \n  }\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dans l'autre clone du repo"}),"\n",(0,s.jsx)(n.li,{children:"Modifier le fichier app.component.html pour le code suivant"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<div>\n    {{wow()}}\n</div>\n<div>\n    {{incroyable()}}\n</div>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Faire les commits maintenant (un commit pour chaque clone du repo)"}),"\n",(0,s.jsx)(n.li,{children:"Il ne devrait pas avoir de conflit"}),"\n",(0,s.jsx)(n.li,{children:"Vous avez modifier des fichiers diff\xe9rents"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"mettre-les-2-clones-du-repo-\xe0-jour",children:"Mettre les 2 clones du repo \xe0 jour"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"R\xe9cup\xe9rer la derni\xe8re version du code"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"modifier-sans-conflit-v20",children:"Modifier sans conflit v.2.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dans le premier clone du repo"}),"\n",(0,s.jsx)(n.li,{children:"Modifier la m\xe9thode wow"}),"\n",(0,s.jsx)(n.li,{children:"Ne faites pas de commit tout de suite"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'wow() {\n  return "Ben voyons donc!"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dans le deuxi\xe8me clone du repo"}),"\n",(0,s.jsx)(n.li,{children:"Modifier la m\xe9thode incroyable"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'incroyable() {\n  return "Je n\'en reviens pas!"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Faire les commits maintenant (un commit pour chaque clone du repo)"}),"\n",(0,s.jsx)(n.li,{children:"Il ne devrait pas avoir de conflit"}),"\n",(0,s.jsx)(n.li,{children:"M\xeame si vous avez modifi\xe9 le m\xeame fichier, vous avez modifi\xe9 des m\xe9thodes diff\xe9rentes"}),"\n",(0,s.jsx)(n.li,{children:"Mettre les 2 clones du repo \xe0 jour"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"modifier-avec-conflit-",children:"Modifier avec conflit! \ud83e\udde8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dans le premier clone du repo"}),"\n",(0,s.jsx)(n.li,{children:"Modifier la m\xe9thode wow"}),"\n",(0,s.jsx)(n.li,{children:"Ne faites pas de commit tout de suite"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'wow() {\n  return "Ah! voil\xe0!"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dans le deuxi\xe8me clone du repo"}),"\n",(0,s.jsx)(n.li,{children:"Modifier la m\xe9thode wow"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'wow() {\n  return "Boom!"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Faire les commits maintenant (un commit pour chaque clone du repo)"}),"\n",(0,s.jsx)(n.li,{children:"Il devrait y avoir un conflit"}),"\n",(0,s.jsx)(n.li,{children:"Vous avez la m\xeame m\xe9thode / la m\xeame ligne dans le m\xeame fichiers"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"r\xe9soudre-le-conflit",children:"R\xe9soudre le conflit"}),"\n",(0,s.jsx)(n.p,{children:"Vous avez 3 options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Garder la version du premier repo"}),"\n",(0,s.jsx)(n.li,{children:"Garder la version du deuxi\xe8me repo"}),"\n",(0,s.jsx)(n.li,{children:"Garder la fusion des deux versions"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Garder la version du code qui n'est pas encore enregistr\xe9 sur le repo"}),"\n",(0,s.jsx)(n.p,{children:"Voil\xe0!"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var s=i(7294);const r={},l=s.createContext(r);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);