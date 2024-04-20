"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[3374],{1806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(5893),r=t(1151);const i={},l="Events",a={id:"exercices/Events",title:"Events",description:"Objectifs",source:"@site/docs/03-exercices/11-Events.md",sourceDirName:"03-exercices",slug:"/exercices/Events",permalink:"/5W5-Web-Avancee/exercices/Events",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/03-exercices/11-Events.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"exercices",previous:{title:"SignalR, 2e partie",permalink:"/5W5-Web-Avancee/exercices/SignalR2"},next:{title:"Git Branches et Merges",permalink:"/5W5-Web-Avancee/exercices/GitMerges"}},o={},c=[{value:"Objectifs",id:"objectifs",level:2},{value:"\xc9tat initial",id:"\xe9tat-initial",level:2},{value:"Compl\xe9tez les t\xe2ches suivantes",id:"compl\xe9tez-les-t\xe2ches-suivantes",level:2},{value:"La premi\xe8re fonctionnalit\xe9 \xe0 ajouter, c&#39;est d&#39;afficher les lettres essay\xe9es par les utilisateurs avec <strong>GuessedLetterEvent</strong>",id:"la-premi\xe8re-fonctionnalit\xe9-\xe0-ajouter-cest-dafficher-les-lettres-essay\xe9es-par-les-utilisateurs-avec-guessedletterevent",level:3},{value:"Afficher lorsqu&#39;une lettre n&#39;est pas dans le mot avec <strong>WrongGuessEvent</strong>",id:"afficher-lorsquune-lettre-nest-pas-dans-le-mot-avec-wrongguessevent",level:3},{value:"Remplacer les lettres avec <strong>RevealLetterEvent</strong>",id:"remplacer-les-lettres-avec-revealletterevent",level:3},{value:"Ajouter un <strong>WinEvent</strong>",id:"ajouter-un-winevent",level:3},{value:"Ajouter un <strong>LoseEvent</strong>",id:"ajouter-un-loseevent",level:3},{value:"Dead eyes",id:"dead-eyes",level:3},{value:"D\xe9fi extra?",id:"d\xe9fi-extra",level:3},{value:"Solution",id:"solution",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.h2,{id:"objectifs",children:"Objectifs"}),"\n",(0,s.jsx)(n.p,{children:"Compl\xe9ter l'impl\xe9mentation d'une application de bonhomme pendu en utilisant des \xe9v\xe9nements."}),"\n",(0,s.jsx)(n.p,{children:"L'objectif ici c'est d'abord de devenir \xe0 l'aise avec la cr\xe9ation d'\xe9v\xe9nements qui contiennent des \xe9v\xe9nements."}),"\n",(0,s.jsx)(n.p,{children:"Il y aura ensuite de petites am\xe9liorations \xe0 apporter sur le client \xe9galement."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/CEM-420-5W5/BonhommePendu.git",children:"Projet GitHub avec Client et Serveur"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Dans ce jeu, tous les utilisateurs jouent ENSEMBLE pour d\xe9couvrir le mot. Il y a donc UN seul mot qui se fait d\xe9couvrir \xe0 la fois sur le serveur."})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:'Il n\'y a pas de base de donn\xe9es, alors si vous red\xe9marrez le serveur pendant que vous devinez un mot, la "partie" est perdu.'})}),"\n",(0,s.jsx)(n.h2,{id:"\xe9tat-initial",children:"\xc9tat initial"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Le client se connecte d\xe9j\xe0 au Hub et \xe9coute d\xe9j\xe0 la majorit\xe9 des messages. Parcontre, le serveur ne fait rien du tout lorsqu'il re\xe7oit une action pour voir si une lettre est dans le mot \xe0 deviner."}),"\n"]}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(6296).Z+"",width:"413",height:"669"})})})})}),"\n",(0,s.jsx)(n.h2,{id:"compl\xe9tez-les-t\xe2ches-suivantes",children:"Compl\xe9tez les t\xe2ches suivantes"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GuessEvent"})," est l'event de base o\xf9 tout commence! C'est ",(0,s.jsx)(n.strong,{children:"l\xe0"})," que vous allez commencer \xe0 ajouter les autres \xe9v\xe9nements!"]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Certains events ont besoin d'avoir des propri\xe9t\xe9s qui vont \xeatre lues par le client!"})}),"\n",(0,s.jsxs)(n.h3,{id:"la-premi\xe8re-fonctionnalit\xe9-\xe0-ajouter-cest-dafficher-les-lettres-essay\xe9es-par-les-utilisateurs-avec-guessedletterevent",children:["La premi\xe8re fonctionnalit\xe9 \xe0 ajouter, c'est d'afficher les lettres essay\xe9es par les utilisateurs avec ",(0,s.jsx)(n.strong,{children:"GuessedLetterEvent"})]}),"\n",(0,s.jsx)(n.p,{children:"Voicie le r\xe9sultat voulu:"}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(463).Z+"",width:"272",height:"85"})})})})}),"\n",(0,s.jsxs)(n.p,{children:["C'est assez simplement, vous pouvez simplement cr\xe9er un ",(0,s.jsx)(n.strong,{children:"GuessedLetterEvent"})," dans le constructeur de ",(0,s.jsx)(n.strong,{children:"GuessEvent"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Il faut \xe9galement mettre \xe0 jour ",(0,s.jsx)(n.strong,{children:"gameData.GuessedLetters"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous regardez le client, vous allez voir que pendant la gestion de l'\xe9v\xe9nement ",(0,s.jsx)(n.strong,{children:"GuessedLetter"}),", on s'attend \xe0 avoir une propri\xe9t\xe9 ",(0,s.jsx)(n.strong,{children:"letter"})," (Sur le serveur, commencez par une lettre majuscule pour la propri\xe9t\xe9)"]}),"\n",(0,s.jsxs)(n.h3,{id:"afficher-lorsquune-lettre-nest-pas-dans-le-mot-avec-wrongguessevent",children:["Afficher lorsqu'une lettre n'est pas dans le mot avec ",(0,s.jsx)(n.strong,{children:"WrongGuessEvent"})]}),"\n",(0,s.jsxs)(n.p,{children:["N'h\xe9sitez pas \xe0 commencer simplement, au d\xe9but vous pouvez tester en cr\xe9ant un ",(0,s.jsx)(n.strong,{children:"WrongGuessEvent"})," peu importe que ce soit une bonne lettre ou pas!"]}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(8144).Z+"",width:"247",height:"273"})})})})}),"\n",(0,s.jsxs)(n.p,{children:["Ensuite, utilisez ",(0,s.jsx)(n.strong,{children:"HasSameLetterAtIndex"})," pour chercher la lettre et cr\xe9er un ",(0,s.jsx)(n.strong,{children:"WrongGuessEvent"})," seulement si la lettre n'est pas pr\xe9sente!"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"\xc0 partir de maintenant, c'est \xe0 vous de comprendre GameData et de le mettre \xe0 jour correctement dans vos \xe9v\xe8nements!"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Si vous voulez v\xe9rifier si vous mettez correctement GameData \xe0 jour, faites un refresh du client!"})}),"\n",(0,s.jsxs)(n.h3,{id:"remplacer-les-lettres-avec-revealletterevent",children:["Remplacer les lettres avec ",(0,s.jsx)(n.strong,{children:"RevealLetterEvent"})]}),"\n",(0,s.jsxs)(n.p,{children:["Il faut cr\xe9er un ",(0,s.jsx)(n.strong,{children:"RevealLetterEvent"})," pour chaque occurence de la lettre dans le mot."]}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(1926).Z+"",width:"297",height:"71"})})})})}),"\n",(0,s.jsxs)(n.h3,{id:"ajouter-un-winevent",children:["Ajouter un ",(0,s.jsx)(n.strong,{children:"WinEvent"})]}),"\n",(0,s.jsx)(n.p,{children:"Lorsqu'on trouve une lettre dans un mot, si le mot est compl\xe9tement trouv\xe9, on doit cr\xe9er un WinEvent."}),"\n",(0,s.jsxs)(n.p,{children:["Il ",(0,s.jsx)(n.strong,{children:"FAUT"})," enregistrer ",(0,s.jsx)(n.strong,{children:"WinEvent"})," pour qu'il soit correctement s\xe9rialis\xe9 lorsqu'il est envoy\xe9 au client. Regardez la classe ",(0,s.jsx)(n.strong,{children:"GameEvent"})," et enregistrez le comme les autres!"]}),"\n",(0,s.jsx)(n.p,{children:"Regardez maintenant sur le client, l'event \"Win\" n'est pas g\xe9rer. Il faut mettre la propri\xe9t\xe9 won du GameData \xe0 jour."}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(4268).Z+"",width:"367",height:"243"})})})})}),"\n",(0,s.jsxs)(n.h3,{id:"ajouter-un-loseevent",children:["Ajouter un ",(0,s.jsx)(n.strong,{children:"LoseEvent"})]}),"\n",(0,s.jsxs)(n.p,{children:["Lorsqu'on fait un erreur, on doit \xe9ventuellement perdre. Ajoutez un ",(0,s.jsx)(n.strong,{children:"LoseEvent"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Regardez maintenant sur le client, l'event \"Lose\" n'est pas g\xe9rer non plus. Il faut mettre la propri\xe9t\xe9 lost du GameData \xe0 jour."}),"\n",(0,s.jsxs)(n.p,{children:["Lorsqu'on perd, il faudrait afficher le mot qu'on cherchait dans le message d'erreur. Il existe d\xe9j\xe0 la variable ",(0,s.jsx)(n.strong,{children:"wronglyGuessedWord"})," dans ",(0,s.jsx)(n.strong,{children:"app.component.ts"})]}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(5252).Z+"",width:"552",height:"42"})})})})}),"\n",(0,s.jsx)(n.h3,{id:"dead-eyes",children:"Dead eyes"}),"\n",(0,s.jsx)(n.p,{children:"Il existe une derni\xe8re \xe9tape au bonhomme pendu pour afficher les yeux rouges. Le mini d\xe9fi c'est d'appeler hangman.showMore() une fois de plus apr\xe8s une d\xe9faite MAIS apr\xe8s un d\xe9lai de quelques secondes."}),"\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(3106).Z+"",width:"217",height:"238"})})})})}),"\n",(0,s.jsx)(n.h3,{id:"d\xe9fi-extra",children:"D\xe9fi extra?"}),"\n",(0,s.jsx)(n.p,{children:"Si vous voulez un d\xe9fi en plus, changez la langue pour le fran\xe7ais! Mais faites attention, il faut comparer les lettres en ignorant les accents!"}),"\n",(0,s.jsxs)(n.p,{children:["La deuxi\xe8me r\xe9ponse semble \xeatre une bonne solution \xe0 notre probl\xe8me!\n",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/359827/ignoring-accented-letters-in-string-comparison",children:"StackOverflow"})]}),"\n",(0,s.jsx)(n.p,{children:"Voil\xe0!"}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(n.p,{children:["La solution est dans la branche ",(0,s.jsx)(n.strong,{children:"solution"})," du repo"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6296:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-2-a19ed16b072ca56291fe67240f946d6d.png"},463:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},8144:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-4-4718e2550a64c53666323b8af4a9865a.png"},1926:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},5252:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},3106:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-7-c84a8e641c4c737aa8708134921d7231.png"},4268:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-8-b9d9aba89336350a321bab49eeebe97a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(7294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);