"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[9548],{7240:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>A,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(5893),t=n(1151);const i={},a=void 0,l={id:"exercices/Areas",title:"Areas",description:"7# Les Areas",source:"@site/docs/02-exercices/04-Areas.md",sourceDirName:"02-exercices",slug:"/exercices/Areas",permalink:"/5W5-Web-Avancee/exercices/Areas",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/02-exercices/04-Areas.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"exercices",previous:{title:"Les bonnes pratiques avec Git",permalink:"/5W5-Web-Avancee/exercices/BonnesPratiquesGit"},next:{title:"ReactiveForms",permalink:"/5W5-Web-Avancee/exercices/ReactiveForms"}},o={},c=[{value:"Qu&#39;est-ce qu&#39;un Area?",id:"quest-ce-quun-area",level:3},{value:"Configuration d&#39;un Area",id:"configuration-dun-area",level:2},{value:"Cr\xe9er la structure des dossiers",id:"cr\xe9er-la-structure-des-dossiers",level:3},{value:"Ajouter le layout de base",id:"ajouter-le-layout-de-base",level:3},{value:"Modifier _VIewStart.cshtml",id:"modifier-_viewstartcshtml",level:3},{value:"Configuration du routeage",id:"configuration-du-routeage",level:2},{value:"Modifier Program.cs",id:"modifier-programcs",level:3},{value:"Ajouter un contr\xf4leur",id:"ajouter-un-contr\xf4leur",level:2},{value:"G\xe9n\xe9rer un contr\xf4leur",id:"g\xe9n\xe9rer-un-contr\xf4leur",level:3},{value:"Voil\xe0!",id:"voil\xe0",level:3},{value:"Contr\xf4leur Web API",id:"contr\xf4leur-web-api",level:2},{value:"Ajouter un contr\xf4leur directement dans le projet (pas sous un Area)",id:"ajouter-un-contr\xf4leur-directement-dans-le-projet-pas-sous-un-area",level:3},{value:"Voir nos contr\xf4leurs",id:"voir-nos-contr\xf4leurs",level:2},{value:"Ajouter Swagger",id:"ajouter-swagger",level:3}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"7# Les Areas"}),"\n",(0,s.jsx)(r.h3,{id:"quest-ce-quun-area",children:"Qu'est-ce qu'un Area?"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Un Area c'est une section s\xe9par\xe9e de l'application asp.net (asp.net c'est le framework qui comprend MVC et Web API)"}),"\n",(0,s.jsx)(r.li,{children:"Un Area a une url s\xe9par\xe9e du reste de l'application"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"image",src:n(3917).Z+"",width:"2270",height:"162"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Ce sera particuli\xe8rement utile pour s\xe9parer la partie admin du reste de l'application"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"configuration-dun-area",children:"Configuration d'un Area"}),"\n",(0,s.jsx)(r.h3,{id:"cr\xe9er-la-structure-des-dossiers",children:"Cr\xe9er la structure des dossiers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Cr\xe9er un r\xe9pertoire ",(0,s.jsx)(r.strong,{children:"Areas"})]}),"\n",(0,s.jsxs)(r.li,{children:["Cr\xe9er un dossier de base pour la section dans le dossier ",(0,s.jsx)(r.strong,{children:"Areas"})," (ex. ",(0,s.jsx)(r.strong,{children:"Admin"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:["Dans le dossier de la section, cr\xe9er les dossiers ",(0,s.jsx)(r.strong,{children:"Controllers"})," et ",(0,s.jsx)(r.strong,{children:"Views"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"image",src:n(6186).Z+"",width:"661",height:"407"})}),"\n",(0,s.jsx)(r.h3,{id:"ajouter-le-layout-de-base",children:"Ajouter le layout de base"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Copier le fichier ",(0,s.jsx)(r.strong,{children:"_ViewStart.cshtml"})," du dossiers ",(0,s.jsx)(r.strong,{children:"Views"})," vers le dossier ",(0,s.jsx)(r.strong,{children:"Views"})," de votre Area"]}),"\n",(0,s.jsxs)(r.li,{children:["Copier \xe9galement le fichier ",(0,s.jsx)(r.strong,{children:"_ViewImports.cshtml"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"image",src:n(5770).Z+"",width:"430",height:"310"})}),"\n",(0,s.jsx)(r.h3,{id:"modifier-_viewstartcshtml",children:"Modifier _VIewStart.cshtml"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Modifier le path du fichier de layout"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",children:'@{\n    Layout = "/Views/Shared/_Layout.cshtml";\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"configuration-du-routeage",children:"Configuration du routeage"}),"\n",(0,s.jsx)(r.h3,{id:"modifier-programcs",children:"Modifier Program.cs"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Ajouter une configuration pour le routage \xe0 la fin du fichier, juste avant la configuration des routes par d\xe9faut"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",metastring:"title=Program.cs",children:'app.MapControllerRoute(\n    name: "Admin",\n    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");\n'})}),"\n",(0,s.jsx)(r.h2,{id:"ajouter-un-contr\xf4leur",children:"Ajouter un contr\xf4leur"}),"\n",(0,s.jsx)(r.h3,{id:"g\xe9n\xe9rer-un-contr\xf4leur",children:"G\xe9n\xe9rer un contr\xf4leur"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"On peut g\xe9n\xe9rer des contr\xf4leurs dans l'area en ajoutant directement au dossier Controllers de l'area Admin"}),"\n",(0,s.jsxs)(r.li,{children:["On pourrait faire un ou l'autre, mais dans ce cas, faites un contr\xf4leur ",(0,s.jsx)(r.strong,{children:"MVC"})]}),"\n",(0,s.jsxs)(r.li,{children:["On va appeler le contr\xf4leur ",(0,s.jsx)(r.strong,{children:"CatsController"}),"\n",(0,s.jsx)(r.img,{alt:"image",src:n(7841).Z+"",width:"820",height:"415"}),"\n",(0,s.jsx)(r.img,{alt:"image",src:n(4354).Z+"",width:"931",height:"626"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"voil\xe0",children:"Voil\xe0!"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Tout a \xe9t\xe9 g\xe9n\xe9r\xe9 correctement dans l'area\n",(0,s.jsx)(r.img,{alt:"image",src:n(3665).Z+"",width:"628",height:"287"})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Ouvrir le contr\xf4leur g\xe9n\xe9r\xe9 et remarqu\xe9 l'annotation Area"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",children:'[Area("Admin")]\npublic class CatsController : Controller\n{\n    //...\n}\n'})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Pour v\xe9rifier que le contr\xf4leur fonctionne bien, on peut d\xe9marrer le serveur et v\xe9rifier que la page MVC s'affiche bien"}),"\n"]}),"\n",(0,s.jsx)(r.table,{children:(0,s.jsx)(r.thead,{children:(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.th,{children:(0,s.jsx)(r.img,{alt:"image",src:n(9768).Z+"",width:"336",height:"358"})})})})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"Si tout fonctionne bien, on peut \xe9galement cr\xe9er des chats, les \xe9diter et les effacer"})}),"\n",(0,s.jsx)(r.h2,{id:"contr\xf4leur-web-api",children:"Contr\xf4leur Web API"}),"\n",(0,s.jsx)(r.h3,{id:"ajouter-un-contr\xf4leur-directement-dans-le-projet-pas-sous-un-area",children:"Ajouter un contr\xf4leur directement dans le projet (pas sous un Area)"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"On va maintenant ajouter un autre contr\xf4leur, mais cettes fois-ci, choisissez un contr\xf4leur Web API"}),"\n",(0,s.jsxs)(r.li,{children:["Ce n'est pas vraiment une tr\xe8s bonne id\xe9e dans un vrai projet, mais pour le bien de la d\xe9monstration, appelez votre 2e contr\xf4leur ",(0,s.jsx)(r.strong,{children:"CatsController"})," aussi!"]}),"\n",(0,s.jsx)(r.li,{children:"Apr\xe8s avoir termin\xe9, vous avez maintenant 2 contr\xf4leurs avec le m\xeame nom."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"image",src:n(2262).Z+"",width:"420",height:"463"})}),"\n",(0,s.jsx)(r.h2,{id:"voir-nos-contr\xf4leurs",children:"Voir nos contr\xf4leurs"}),"\n",(0,s.jsx)(r.h3,{id:"ajouter-swagger",children:"Ajouter Swagger"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["On peut ajouter ",(0,s.jsx)(r.strong,{children:"Swagger"})," \xe0 notre projet MVC pour nous permettre de voir nos contr\xf4leurs"]}),"\n",(0,s.jsx)(r.li,{children:"Premi\xe8rement, il faut ajouter la librairie"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"image",src:n(2304).Z+"",width:"412",height:"69"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Ensuite, il fautmodifier ",(0,s.jsx)(r.strong,{children:"Program.cs"})]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",metastring:"title=Program.cs",children:"// Ajouter les services pour Swagger\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\n\nvar app = builder.Build();\n\n// Configure the HTTP request pipeline.\nif (app.Environment.IsDevelopment())\n{\n    app.UseMigrationsEndPoint();\n    // Utiliser Swagger\n    app.UseSwagger();\n    app.UseSwaggerUI();\n}\nelse\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Pour v\xe9rifier que Swagger fonctionne bien, on peut lancer le serveur et acc\xe9der \xe0 ",(0,s.jsx)(r.strong,{children:"/swagger/"})]}),"\n"]}),"\n",(0,s.jsx)(r.table,{children:(0,s.jsx)(r.thead,{children:(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.th,{children:(0,s.jsx)(r.img,{alt:"image",src:n(5026).Z+"",width:"544",height:"645"})})})})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\ud83d\udd17",(0,s.jsx)(r.a,{href:"https://github.com/CEM-420-5W5/Areas",children:"Solution"})]}),"\n"]})]})}function A(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5770:(e,r,n)=>{n.d(r,{Z:()=>s});const s="data:image/png;base64,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"},7841:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/CreationController-151f34b1c6e16ecb0fcac960cbf66097.png"},3665:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/CreationControllerResultat-d0be143a6de1a695af4fbe7ca8257b41.png"},4354:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/CreationControllerSuite-947e0f99eb8c4d0f376a999151faf206.png"},6186:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/CreationRepertoiresArea-34166c577237ab6d83388d042ccc6961.png"},2262:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/DeuxControleurs-dbd8fecd810187135a30b8f79a50c285.png"},9768:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/mvcScreenshot-5671ea06fe10f20da7aa847d9bd46efb.png"},3917:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/path-d7f9220547acd6b2178b99e6ba16a724.jpg"},2304:(e,r,n)=>{n.d(r,{Z:()=>s});const s="data:image/png;base64,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"},5026:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/swaggerScreenshot-0798076799fb71119fdc8ccef3249174.png"},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>a});var s=n(7294);const t={},i=s.createContext(t);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);