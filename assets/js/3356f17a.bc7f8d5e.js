"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[397],{3905:(e,r,t)=>{t.d(r,{Zo:()=>A,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),s=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},A=function(e){var r=s(e.components);return a.createElement(i.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,A=u(e,["components","mdxType","originalType","parentName"]),c=s(t),p=n,f=c["".concat(i,".").concat(p)]||c[p]||d[p]||l;return t?a.createElement(f,o(o({ref:r},A),{},{components:t})):a.createElement(f,o({ref:r},A))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=p;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[c]="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4109:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const l={},o=void 0,u={unversionedId:"exercices/AreasA",id:"exercices/AreasA",title:"AreasA",description:"Qu'est-ce qu'un Area?",source:"@site/docs/02-exercices/04-AreasA.md",sourceDirName:"02-exercices",slug:"/exercices/AreasA",permalink:"/5W5-Web-Avancee/exercices/AreasA",draft:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/02-exercices/04-AreasA.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"exercices",previous:{title:"Les bonnes pratiques avec Git",permalink:"/5W5-Web-Avancee/exercices/BonnesPratiquesGit"}},i={},s=[{value:"Qu&#39;est-ce qu&#39;un Area?",id:"quest-ce-quun-area",level:3},{value:"Configuration d&#39;un Area",id:"configuration-dun-area",level:2},{value:"Cr\xe9er la structure des dossiers",id:"cr\xe9er-la-structure-des-dossiers",level:3},{value:"Ajouter le layout de base",id:"ajouter-le-layout-de-base",level:3},{value:"Modifier _VIewStart.cshtml",id:"modifier-_viewstartcshtml",level:3},{value:"CONFIGURATION DU ROUTAGE",id:"configuration-du-routage",level:2},{value:"Modifier Program.cs",id:"modifier-programcs",level:3},{value:"Ajouter un contr\xf4leur",id:"ajouter-un-contr\xf4leur",level:2},{value:"G\xe9n\xe9rer un contr\xf4leur",id:"g\xe9n\xe9rer-un-contr\xf4leur",level:3},{value:"Voil\xe0!",id:"voil\xe0",level:3},{value:"Contr\xf4leur Web API",id:"contr\xf4leur-web-api",level:2},{value:"Ajouter un contr\xf4leur directement dans le projet (pas sous un Area)",id:"ajouter-un-contr\xf4leur-directement-dans-le-projet-pas-sous-un-area",level:3}],A={toc:s},c="wrapper";function d(e){let{components:r,...l}=e;return(0,n.kt)(c,(0,a.Z)({},A,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"#LES AREAS"),(0,n.kt)("h3",{id:"quest-ce-quun-area"},"Qu'est-ce qu'un Area?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Un Area c'est une section s\xe9par\xe9e de l'application asp.net (asp.net c'est le framework qui comprend MVC et Web API)"),(0,n.kt)("li",{parentName:"ul"},"Un Area a une url s\xe9par\xe9e du reste de l'application")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:t(3917).Z,width:"2270",height:"162"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ce sera particuli\xe8rement utile pour s\xe9parer la partie admin du reste de l'application")),(0,n.kt)("h2",{id:"configuration-dun-area"},"Configuration d'un Area"),(0,n.kt)("h3",{id:"cr\xe9er-la-structure-des-dossiers"},"Cr\xe9er la structure des dossiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cr\xe9er un r\xe9pertoire Areas"),(0,n.kt)("li",{parentName:"ul"},"Cr\xe9er un dossier de base pour la section dans le dossier Areas (ex. Admin)"),(0,n.kt)("li",{parentName:"ul"},"Dans le dossier de la section, cr\xe9er les dossiers Controllers et Views")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:t(6186).Z,width:"661",height:"407"})),(0,n.kt)("h3",{id:"ajouter-le-layout-de-base"},"Ajouter le layout de base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copier le fichier _ViewStart.cshtml du dossiers Views vers le dossier Views de votre Area"),(0,n.kt)("li",{parentName:"ul"},"Copier \xe9galement le fichier _ViewImports.cshtml")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:t(5770).Z,width:"430",height:"310"})),(0,n.kt)("h3",{id:"modifier-_viewstartcshtml"},"Modifier _VIewStart.cshtml"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modifier le path du fichier de layout")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'@{\n    Layout = "/Views/Shared/_Layout.cshtml";\n}\n')),(0,n.kt)("h2",{id:"configuration-du-routage"},"CONFIGURATION DU ROUTAGE"),(0,n.kt)("h3",{id:"modifier-programcs"},"Modifier Program.cs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajouter une configuration pour le routage \xe0 la fin du fichier, juste avant la configuration des routes par d\xe9faut")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'app.MapControllerRoute(\n    name: "Admin",\n    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");\n')),(0,n.kt)("h2",{id:"ajouter-un-contr\xf4leur"},"Ajouter un contr\xf4leur"),(0,n.kt)("h3",{id:"g\xe9n\xe9rer-un-contr\xf4leur"},"G\xe9n\xe9rer un contr\xf4leur"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On peut g\xe9n\xe9rer des contr\xf4leurs dans l'area en ajoutant directement au dossier Controllers de l'area Admin"),(0,n.kt)("li",{parentName:"ul"},"On pourrait faire un ou l'autre, mais dans ce cas, faites un contr\xf4leur ",(0,n.kt)("strong",{parentName:"li"},"MVC")),(0,n.kt)("li",{parentName:"ul"},"On va appeler le contr\xf4leur ",(0,n.kt)("strong",{parentName:"li"},"CatsController"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:t(7841).Z,width:"820",height:"415"}),"\n",(0,n.kt)("img",{alt:"image",src:t(4354).Z,width:"931",height:"626"})),(0,n.kt)("h3",{id:"voil\xe0"},"Voil\xe0!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tout a \xe9t\xe9 g\xe9n\xe9r\xe9 correctement dans l'area\n",(0,n.kt)("img",{alt:"image",src:t(3665).Z,width:"628",height:"287"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ouvrir le contr\xf4leur g\xe9n\xe9r\xe9 et remarqu\xe9 l'annotation Area")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[Area("Admin")]\npublic class CatsController : Controller\n{\n    //...\n}\n')),(0,n.kt)("h2",{id:"contr\xf4leur-web-api"},"Contr\xf4leur Web API"),(0,n.kt)("h3",{id:"ajouter-un-contr\xf4leur-directement-dans-le-projet-pas-sous-un-area"},"Ajouter un contr\xf4leur directement dans le projet (pas sous un Area)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On va maintenant ajouter un autre contr\xf4leur, mais cettes fois-ci, choisissez un contr\xf4leur Web API"),(0,n.kt)("li",{parentName:"ul"},"Ce n'est pas vraiment une tr\xe8s bonne id\xe9e dans un vrai projet, mais pour le bien de la d\xe9monstration, appelez votre 2e contr\xf4leur ",(0,n.kt)("strong",{parentName:"li"},"CatsController")," aussi!"),(0,n.kt)("li",{parentName:"ul"},"Apr\xe8s avoir termin\xe9, vous avez maintenant 2 contr\xf4leurs avec le m\xeame nom.")))}d.isMDXComponent=!0},5770:(e,r,t)=>{t.d(r,{Z:()=>a});const a="data:image/png;base64,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"},7841:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/CreationController-151f34b1c6e16ecb0fcac960cbf66097.png"},3665:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/CreationControllerResultat-d0be143a6de1a695af4fbe7ca8257b41.png"},4354:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/CreationControllerSuite-947e0f99eb8c4d0f376a999151faf206.png"},6186:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/CreationRepertoiresArea-34166c577237ab6d83388d042ccc6961.png"},3917:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/path-d7f9220547acd6b2178b99e6ba16a724.jpg"}}]);