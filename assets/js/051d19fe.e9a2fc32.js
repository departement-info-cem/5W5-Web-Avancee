"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[6899],{9215:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var i=r(5893),c=r(1151);const o={},s="BackgroundService",t={id:"info/BackgroundService",title:"BackgroundService",description:"R\xe9sum\xe9",source:"@site/docs/02-info/17-BackgroundService.md",sourceDirName:"02-info",slug:"/info/BackgroundService",permalink:"/5W5-Web-Avancee/info/BackgroundService",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/02-info/17-BackgroundService.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"info",previous:{title:"Test Driven Development",permalink:"/5W5-Web-Avancee/info/TDD"},next:{title:"Mocks",permalink:"/5W5-Web-Avancee/info/Mocks"}},u={},a=[{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Les nouveaux concepts",id:"les-nouveaux-concepts",level:2},{value:"BackgroundService",id:"backgroundservice-1",level:3},{value:"Utilisation d&#39;un scope et d&#39;un DbContext",id:"utilisation-dun-scope-et-dun-dbcontext",level:3},{value:"Utilisation d&#39;un IHubContext",id:"utilisation-dun-ihubcontext",level:3},{value:"Utilisation du BackgroundService \xe0 partir du Hub",id:"utilisation-du-backgroundservice-\xe0-partir-du-hub",level:3},{value:"R\xe9f\xe9rences",id:"r\xe9f\xe9rences",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"backgroundservice",children:"BackgroundService"}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Utiliser un BackgroundService"}),"\n",(0,i.jsx)(n.li,{children:"Int\xe9grer le BackgroundService avec un Hub"}),"\n",(0,i.jsx)(n.li,{children:"Cr\xe9er un scope \xe0 l'int\xe9rieur d'un Singleton"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Pour comprendre ces nouveaux concepts, nous allons regarder un exemple. L'exercice sera ensuite d'ajouter des fonctionalit\xe9s \xe0 cet exemple."}),"\n",(0,i.jsx)(n.p,{children:"L'exemple est un le jeu le plus simple que l'on puisse imagine. Il faut cliquer le plus de fois possible sur un bouton \xe0 l'int\xe9rieur d'une m\xeame round."}),"\n",(0,i.jsx)(n.p,{children:"Par d\xe9faut, un round dure 30 secondes."}),"\n",(0,i.jsx)(n.p,{children:"Chaque click va faire un appel vers le serveur et augmenter le score du joueur."}),"\n",(0,i.jsx)(n.p,{children:"\xc0 chaque 30 secondes, le serveur va regarder quel(s) joueur(s) a le plus grand score et envoyer \xe0 TOUT les clients un message de fin de round avec le(s) joueur(s) gagnant(s) et le nombre de clicks gagnant."}),"\n",(0,i.jsx)(n.p,{children:"Chaque joueur doit se cr\xe9er un compte et \xeatre connect\xe9 \xe0 l'aide de son token pour pouvoir jouer."}),"\n",(0,i.jsx)(n.h2,{id:"les-nouveaux-concepts",children:"Les nouveaux concepts"}),"\n",(0,i.jsx)(n.h3,{id:"backgroundservice-1",children:"BackgroundService"}),"\n",(0,i.jsx)(n.p,{children:"Dans notre exemple, on a besoin d'une t\xe2che qui roule sur le serveur \xe0 chaque fin de round (chaque 30 secondes).\nContrairement aux autres fonctionnalit\xe9s que nous avons fait sur nos serveurs par le pass\xe9, celle-ci n'est pas d\xe9clench\xe9 par un contr\xf4leur!"}),"\n",(0,i.jsxs)(n.p,{children:["On va utiliser un ",(0,i.jsx)(n.strong,{children:"BackgroundService"})," avec une m\xe9thode ",(0,i.jsx)(n.strong,{children:"ExecuteAsync"})," que l'on va faire boucler \xe0 l'infini:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class MonBackgroundService : BackgroundService\n{\n    public const int DELAY = 30 * 1000;\n    \n    public MonBackgroundService(){}\n\n    public async Task DoSomething(CancellationToken stoppingToken){}\n\n    protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n    {\n        while (!stoppingToken.IsCancellationRequested)\n        {\n            await Task.Delay(DELAY, stoppingToken);\n            await DoSomething(stoppingToken);\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\xc0 la base, on peut ajouter un ",(0,i.jsx)(n.strong,{children:"BackgroundService"})," de cette mani\xe8re."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"builder.Services.AddHostedService<MonBackgroundService>;\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Cette technique est tout \xe0 fait appropri\xe9 dans de nombreux cas, mais pas si on veut que le service soit accessible par d'autres services!"})}),"\n",(0,i.jsxs)(n.p,{children:["Pour nous perttre d'acc\xe9der \xe0 notre ",(0,i.jsx)(n.strong,{children:"BackgroundService"})," dans notre ",(0,i.jsx)(n.strong,{children:"Hub"}),", on va utiliser cette technique qui d\xe9clare un service Singleton et l'enregistre ensuite comme HostedService"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"builder.Services.AddSingleton<MonBackgroundService>();\nbuilder.Services.AddHostedService<MonBackgroundService>(p => p.GetService<MonBackgroundService>());\n"})}),"\n",(0,i.jsx)(n.h3,{id:"utilisation-dun-scope-et-dun-dbcontext",children:"Utilisation d'un scope et d'un DbContext"}),"\n",(0,i.jsxs)(n.p,{children:["Comme notre service est un ",(0,i.jsx)(n.strong,{children:"Singleton"})," (On en veut un seul, sinon \xe7a va vite devenir chaotique!), on ne peut pas ",(0,i.jsx)(n.strong,{children:"injecter une d\xe9pendance"})," vers un ",(0,i.jsx)(n.strong,{children:"service Scoped"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Le ",(0,i.jsx)(n.strong,{children:"DbContext"})," est ",(0,i.jsx)(n.strong,{children:"scoped"}),", alors \xe7a peut rapidement devenir un probl\xe8me!"]}),"\n",(0,i.jsxs)(n.p,{children:["On va utiliser un ",(0,i.jsx)(n.strong,{children:"scope"})," et un ",(0,i.jsx)(n.strong,{children:"IServiceScopeFactory"})," que l'on va injecter dans notre service:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public MonBackgroundService(IServiceScopeFactory serviceScopeFactory)\n{\n    _serviceScopeFactory = serviceScopeFactory;\n}\n\npublic async Task DoSomething(CancellationToken stoppingToken){\n    using (IServiceScope scope = _serviceScopeFactory.CreateScope())\n    {\n        BackgroundServiceContext dbContext = scope.ServiceProvider.GetRequiredService<BackgroundServiceContext>();\n\n        // On peut maintenant utiliser le dbContext normalement\n        // On peut \xe9galement faire un SaveChanges\n\n        \n    }\n    // Une fois que l\'on va sortir du "using", le scope va \xeatre d\xe9truit et le dbContext associ\xe9 au scope va \xe9galement \xeatre d\xe9truit!\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utilisation-dun-ihubcontext",children:"Utilisation d'un IHubContext"}),"\n",(0,i.jsx)(n.p,{children:"Ici on va voir comment appeler un Hub \xe0 partir d'un BackgroundService"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public MonBackgroundService(IHubContext<MonHub> monHub, IServiceScopeFactory serviceScopeFactory)\n{\n    _monHub = monHub;\n    _serviceScopeFactory = serviceScopeFactory;\n}\n\npublic async Task DoSomething(CancellationToken stoppingToken){\n    // On peut maintenant faire un appel \xe0 un Hub!\n    _monHub.Clients.All.SendAsync("Method", data, stoppingToken);\n}\n\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["On peut acc\xe9der \xe0 un ",(0,i.jsx)(n.strong,{children:"IHubContext"}),", mais pas au ",(0,i.jsx)(n.strong,{children:"Hub"})," lui m\xeame. On peut utiliser le ",(0,i.jsx)(n.strong,{children:"IHubContext"}),' pour envoyer des messages aux clients et aux groupes ou ajouter et retirer des connections \xe0 un groupe, mais on ne peut pas appeler les m\xe9thodes du Hub. Il n\'y a pas de "User", ni de "connection" dans notre BackgroundService. Donc pas possible d\'utiliser ConnectionId, Caller, Others ou l\'utilisateur comme dans une action du Hub!']})}),"\n",(0,i.jsx)(n.h3,{id:"utilisation-du-backgroundservice-\xe0-partir-du-hub",children:"Utilisation du BackgroundService \xe0 partir du Hub"}),"\n",(0,i.jsx)(n.p,{children:"Pour une fois, rien de nouveau \xe0 apprendre! Comme le BackgroundService est un service Singleton, on peut simplement l'injecter dans notre constructeur et voil\xe0!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public MonHub(MonBackgroundService backgroundService)\n{\n    _backgroundService = backgroundService;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"r\xe9f\xe9rences",children:"R\xe9f\xe9rences"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple qui est discutt\xe9 ici fait r\xe9f\xe9rence \xe0 l'exercice que vous pouvez trouver ici:\n",(0,i.jsx)(n.a,{href:"/exercices/BackgroundService",children:"Exercice BackgroundService"})]}),"\n",(0,i.jsxs)(n.p,{children:["Voici \xe9galement un projet de r\xe9f\xe9rence plus simple qui est utile pour comprendre les Background Services:\n",(0,i.jsx)(n.a,{href:"https://github.com/CEM-420-5W5/SimpleBackgroundService.git",children:"Projet GitHub Simple"})]})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>s});var i=r(7294);const c={},o=i.createContext(c);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);