"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[407],{95491:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"info/TDD","title":"Test Driven Development","description":"R\xe9sum\xe9","source":"@site/docs/02-info/16-TDD.md","sourceDirName":"02-info","slug":"/info/TDD","permalink":"/5W5-Web-Avancee/info/TDD","draft":false,"unlisted":false,"editUrl":"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/02-info/16-TDD.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{},"sidebar":"info","previous":{"title":"Ordre des \xe9l\xe9ments dans une BD","permalink":"/5W5-Web-Avancee/info/DataOrder"},"next":{"title":"BackgroundService","permalink":"/5W5-Web-Avancee/info/BackgroundService"}}');var r=n(74848),t=n(28453);const l={},o="Test Driven Development",a={},c=[{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2},{value:"Objectif",id:"objectif",level:2},{value:"Les \xe9tapes",id:"les-\xe9tapes",level:2},{value:"Liste des \xe9tapes",id:"liste-des-\xe9tapes",level:3},{value:"Analyser le probl\xe8me",id:"analyser-le-probl\xe8me",level:3},{value:"\xc9crire les tests",id:"\xe9crire-les-tests",level:3},{value:"Coder la solution",id:"coder-la-solution",level:3},{value:"Maintenance",id:"maintenance",level:3},{value:"B\xe9n\xe9fices",id:"b\xe9n\xe9fices",level:2},{value:"B\xe9n\xe9fice #1",id:"b\xe9n\xe9fice-1",level:3},{value:"B\xe9n\xe9fice #2",id:"b\xe9n\xe9fice-2",level:3},{value:"B\xe9n\xe9fice en \xe9quipe",id:"b\xe9n\xe9fice-en-\xe9quipe",level:3},{value:"Les choses \xe0 ne pas faire",id:"les-choses-\xe0-ne-pas-faire",level:2},{value:"Pour le projet",id:"pour-le-projet",level:2}];function u(e){const s={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"test-driven-development",children:"Test Driven Development"})}),"\n",(0,r.jsx)(s.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Comprendre l\u2019objectif du TDD (Test Driven Development)"}),"\n",(0,r.jsx)(s.li,{children:"Expliquer les \xe9tapes"}),"\n",(0,r.jsx)(s.li,{children:"B\xe9n\xe9fices"}),"\n",(0,r.jsx)(s.li,{children:"Les choses \xe0 ne pas faire"}),"\n",(0,r.jsx)(s.li,{children:"Ce que \xe7a veut dire pour notre projet"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"objectif",children:"Objectif"}),"\n",(0,r.jsx)(s.p,{children:"Cr\xe9er du code simple et bien tester."}),"\n",(0,r.jsx)(s.p,{children:"\xc9crire du code qui r\xe9pond aux besoins r\xe9els de l\u2019application."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Objectif ultime:"})," en regardant dans l\u2019historique dans Git, on devrait pouvoir associer chaque ligne de code \xe0 un test pr\xe9cis qui est mentionn\xe9 dans le commit. Et chaque test devrait \xeatre associ\xe9 \xe0 un besoin r\xe9el de l\u2019application. Chaque ligne de code est alors justifi\xe9e."]}),"\n",(0,r.jsx)(s.h2,{id:"les-\xe9tapes",children:"Les \xe9tapes"}),"\n",(0,r.jsx)(s.h3,{id:"liste-des-\xe9tapes",children:"Liste des \xe9tapes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Analyser le probl\xe8me"}),"\n",(0,r.jsx)(s.li,{children:"\xc9crire les tests"}),"\n",(0,r.jsx)(s.li,{children:"Coder la solution"}),"\n",(0,r.jsx)(s.li,{children:"Maintenance"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"analyser-le-probl\xe8me",children:"Analyser le probl\xe8me"}),"\n",(0,r.jsx)(s.p,{children:"Avant d\u2019\xe9crire les tests, il faut d\u2019abord analyzer le probl\xe8me et cr\xe9er nos \xab\xa0use cases\xa0\xbb et \xab\xa0user stories\xa0\xbb. On met alors toute l\u2019attention sur les besoins de notre application."}),"\n",(0,r.jsx)(s.p,{children:"Dans le cas de notre jeu de cartes, on veut premi\xe8rement bien \xe9tablir les diff\xe9rentes r\xe8gles de notre jeu."}),"\n",(0,r.jsx)(s.h3,{id:"\xe9crire-les-tests",children:"\xc9crire les tests"}),"\n",(0,r.jsx)(s.p,{children:"Les tests doivent couvrir de la fa\xe7on la plus simple possible, l\u2019ensemble des besoins de notre application qui sont couverts par nos user stories."}),"\n",(0,r.jsx)(s.p,{children:"On veut:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"\xc9crire les tests en se basant sur les use cases et user stories"}),"\n",(0,r.jsx)(s.li,{children:"Rouler les tests et \xeatre certains qu\u2019ils ne passent pas par d\xe9faut"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"coder-la-solution",children:"Coder la solution"}),"\n",(0,r.jsx)(s.p,{children:"Au moment de coder la solution, on se concentre sur notre objectif. Faire passer nos tests. Apr\xe8s tout, ils repr\xe9sentent les besoins de notre application."}),"\n",(0,r.jsx)(s.p,{children:"On veut:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Coder de la fa\xe7on la plus simple qui permet de faire passer les tests"}),"\n",(0,r.jsx)(s.li,{children:"Rouler les tests pour voir le progr\xe8s et faire des commits fr\xe9quents"}),"\n",(0,r.jsx)(s.li,{children:"Une fois que les tests passent tous et que l\u2019on a fait un commit, on peut prendre du temps pour am\xe9liorer la qualit\xe9 de notre code sans risque, car les tests ne passeront plus si on brise une fonctionnalit\xe9"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"maintenance",children:"Maintenance"}),"\n",(0,r.jsx)(s.p,{children:"Chaque fois que l\u2019on veut ajouter des options ET chaque fois que l\u2019on rencontre un bug:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Ajouter au moins un nouveau test"}),"\n",(0,r.jsx)(s.li,{children:"S\u2019assurer qu\u2019il ne passe pas"}),"\n",(0,r.jsx)(s.li,{children:"Impl\xe9menter la solution et v\xe9rifier que TOUS les tests passent maintenant"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"b\xe9n\xe9fices",children:"B\xe9n\xe9fices"}),"\n",(0,r.jsx)(s.h3,{id:"b\xe9n\xe9fice-1",children:"B\xe9n\xe9fice #1"}),"\n",(0,r.jsx)(s.p,{children:"En commen\xe7ant par faire les tests, on \xe9vite la situation trop fr\xe9quente o\xf9 les tests sont pr\xe9vus pour plus tard et les programmeurs manquent de temps pour les faire."}),"\n",(0,r.jsx)(s.h3,{id:"b\xe9n\xe9fice-2",children:"B\xe9n\xe9fice #2"}),"\n",(0,r.jsx)(s.p,{children:"Prendre le temps d\u2019\xe9crire de bons tests \xe0 partir des user stories permet au programmeur de bien comprendre les besoins avant de se lancer dans la conception."}),"\n",(0,r.jsx)(s.h3,{id:"b\xe9n\xe9fice-en-\xe9quipe",children:"B\xe9n\xe9fice en \xe9quipe"}),"\n",(0,r.jsx)(s.p,{children:"Si on fait le travail \xe0 deux et qu\u2019une personne \xe9crit les tests et l\u2019autre code, on met en place un moyen tr\xe8s efficace de communiquer et valider la compr\xe9hension des besoins.\nApr\xe8s tout, les mots sont parfois peu pr\xe9cis et souvent mal interpr\xe9t\xe9s, alors que si on code notre besoin, l\u2019autre programmeur peut voir et v\xe9rifier qu\u2019il remplit bien les attentes."}),"\n",(0,r.jsx)(s.p,{children:"Dans le cas o\xf9 les programmeurs ne s\u2019entendent pas sur les besoins, c\u2019est \xe9galement plus efficace de regarder un ou des tests pour en parler:"}),"\n",(0,r.jsx)(s.p,{children:"Joe: \xab\xa0Ton test s\u2019attend \xe0 ce que la m\xe9thode fonctionne, mais elle ne passe pas le param\xe8tre X.\xbb"}),"\n",(0,r.jsx)(s.p,{children:"Bob: \xab\xa0Si tu regardes bien la user stories, le param\xe8tre X est optionnel dans ce cas pour une raison Y.\xbb"}),"\n",(0,r.jsx)(s.p,{children:"Joe: \xab\xa0Tu as raison Bob. T\u2019ai-je mentionn\xe9 que j\u2019appr\xe9cie vraiment travailler avec toi en TDD?\xa0\xbb"}),"\n",(0,r.jsx)(s.h2,{id:"les-choses-\xe0-ne-pas-faire",children:"Les choses \xe0 ne pas faire"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Des tests trop longs et complexes. S\xe9parez-les en plus petits tests."}),"\n",(0,r.jsx)(s.li,{children:"Des tests qui d\xe9pendent de l\u2019ex\xe9cution d\u2019un autre test. Par contre, utiliser un set up et clean up commun est une excellente pratique."}),"\n",(0,r.jsx)(s.li,{children:"Tester les librairies que l\u2019on utilise. Il faut tester ce que l\u2019on a ajout\xe9, pas ce qui est fourni par nos librairies ou notre framework."}),"\n",(0,r.jsx)(s.li,{children:"\xc9crire trop de tests trop pointus. Parfois le nombre de combinaisons de param\xe8tre \xe0 une fonction peut devenir tr\xe8s intense. Il faut parfois se concentrer sur les cas qui repr\xe9sentent bien l\u2019utilisation et ne pas cr\xe9er des centaines de tests sous pr\xe9texte de vouloir \xeatre exhaustif."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"pour-le-projet",children:"Pour le projet"}),"\n",(0,r.jsx)(s.p,{children:"Requis pour la logique de combat du jeu"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Il faut donc ajouter des tests pour couvrir les nouvelles r\xe8gles du jeu et les nouveaux pouvoirs"}),"\n",(0,r.jsx)(s.li,{children:"Si possible, faites le travail \xe0 2. Une personne qui va \xe9crire les tests et une autre qui va \xe9crire le code."}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var i=n(96540);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);