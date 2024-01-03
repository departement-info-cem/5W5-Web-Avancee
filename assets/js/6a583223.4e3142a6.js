"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return r?a.createElement(f,u(u({ref:t},p),{},{components:r})):a.createElement(f,u({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,u=new Array(n);u[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,u[1]=l;for(var o=2;o<n;o++)u[o]=r[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var a=r(7462),i=(r(7294),r(3905));const n={},u="TP1 (Super Cartes Infinies)",l={unversionedId:"tps/tp1",id:"tps/tp1",title:"TP1 (Super Cartes Infinies)",description:"L'application",source:"@site/docs/03-tps/01-tp1.md",sourceDirName:"03-tps",slug:"/tps/tp1",permalink:"/5W5-Web-Avancee/tps/tp1",draft:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/03-tps/01-tp1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tps",previous:{title:"Correction",permalink:"/5W5-Web-Avancee/tps/Correction"},next:{title:"TP2 (Suite de Super Cartes Infinies)",permalink:"/5W5-Web-Avancee/tps/tp2"}},s={},o=[{value:"L&#39;application",id:"lapplication",level:2},{value:"TODO:",id:"todo",level:2},{value:"Objectifs :",id:"objectifs-",level:3},{value:"Les r\xe8gles :",id:"les-r\xe8gles-",level:3},{value:"Le d\xe9tail des sections",id:"le-d\xe9tail-des-sections",level:2},{value:"Section d\u2019administration",id:"section-dadministration",level:3},{value:"Carte",id:"carte",level:3},{value:"Utilisateur",id:"utilisateur",level:3},{value:"Partie",id:"partie",level:3},{value:"Contraintes",id:"contraintes",level:2}],p={toc:o},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tp1-super-cartes-infinies"},"TP1 (Super Cartes Infinies)"),(0,i.kt)("h2",{id:"lapplication"},"L'application"),(0,i.kt)("h2",{id:"todo"},"TODO:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"R\xe9duire la t\xe2che"),(0,i.kt)("li",{parentName:"ul"},"Utiliser SignalR d\xe8s le d\xe9but"),(0,i.kt)("li",{parentName:"ul"},"Exiger l'utilisation de Reactive Forms pour la cr\xe9ation du compte (avoir plus de questions)"),(0,i.kt)("li",{parentName:"ul"},"Exiger l'utilisation de Guards"),(0,i.kt)("li",{parentName:"ul"},"Exiger que l'utilisateur reste connect\xe9"),(0,i.kt)("li",{parentName:"ul"},"Signal R doit utiliser Authorize"),(0,i.kt)("li",{parentName:"ul"},"Pas de tests dans la premi\xe8re partie"),(0,i.kt)("li",{parentName:"ul"},"Fournir un Stub partiel pour pouvoir avancer la connection du Match sur le client"),(0,i.kt)("li",{parentName:"ul"},"Demander que le nombre de cartes de d\xe9part soit configurable"),(0,i.kt)("li",{parentName:"ul"},"Demander que les decks soient modifiables"),(0,i.kt)("li",{parentName:"ul"},"Fournir des stats de cartes par d\xe9faut (minimum 10)"),(0,i.kt)("li",{parentName:"ul"},"Ajouter un diagramme de classes comme livrable")),(0,i.kt)("h3",{id:"objectifs-"},"Objectifs :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cr\xe9er un application web \xe0 l\u2019aide d\u2019Angular, Web API et MVC pour faire un jeu de carte."),(0,i.kt)("li",{parentName:"ul"},"Le site Angular sera utilis\xe9 par des membres inscrits. "),(0,i.kt)("li",{parentName:"ul"},"L\u2019administrateur pourra configurer le contenu de l\u2019application \xe0 l\u2019aide de MVC.")),(0,i.kt)("h3",{id:"les-r\xe8gles-"},"Les r\xe8gles :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deux joueurs s\u2019affrontent tour \xe0 tour et joue une carte chacun par tour. "),(0,i.kt)("li",{parentName:"ul"},"Chaque carte a une certaine quantit\xe9 de points d\u2019attaque et une certaine quantit\xe9 de points de d\xe9fense."),(0,i.kt)("li",{parentName:"ul"},"Apr\xe8s avoir jou\xe9 une carte, toutes les cartes pr\xe9sente du jouer attaque une carte de l\u2019adversaire."),(0,i.kt)("li",{parentName:"ul"},"Chaque attaque diminue les points d\xe9fense de la carte cibl\xe9e jusqu\u2019\xe0 ce que la carte n\u2019ait plus de points de d\xe9fense."),(0,i.kt)("li",{parentName:"ul"},"Chaque joueur \xe0 un certain nombre de points de vies, lorsque qu\u2019un joueur n\u2019a pas de carte en jeu pour se d\xe9fendre, il re\xe7oit des d\xe9g\xe2ts qui font descendre ses points de vie."),(0,i.kt)("li",{parentName:"ul"},"Le premier joueur \xe0 ne plus avoir ne points de vie perds la partie.")),(0,i.kt)("h2",{id:"le-d\xe9tail-des-sections"},"Le d\xe9tail des sections"),(0,i.kt)("h3",{id:"section-dadministration"},"Section d\u2019administration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L\u2019administrateur peut cr\xe9er, modifier, voir et supprimer une carte."),(0,i.kt)("li",{parentName:"ul"},"L\u2019administrateur peut modifier les cartes de d\xe9part des nouveaux joueurs.")),(0,i.kt)("h3",{id:"carte"},"Carte"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une carte doit avoir une valeur d\u2019attaque et une valeur en d\xe9fense."),(0,i.kt)("li",{parentName:"ul"},"Les cartes peuvent \xeatre tri\xe9s pour \xeatre plus faciles \xe0 rep\xe9rer.")),(0,i.kt)("h3",{id:"utilisateur"},"Utilisateur"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un nouvel utilisateur doit obtenir un paquet de carte de d\xe9part.")),(0,i.kt)("h3",{id:"partie"},"Partie"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un utilisateur peut jouer contre un autre utilisateur pr\xe9sent."),(0,i.kt)("li",{parentName:"ul"},"Chaque utilisateur doit jouer une carte par tour."),(0,i.kt)("li",{parentName:"ul"},"Chaque carte en jeu doit attaquer une autre carte \xe0 chaque tour et ainsi enlever des points de points de d\xe9fense \xe0 l\u2019autre carte."),(0,i.kt)("li",{parentName:"ul"},"Une carte n\u2019ayant plus de points de d\xe9fense doit \xeatre retir\xe9e du jeu."),(0,i.kt)("li",{parentName:"ul"},"Si l\u2019adversaire n\u2019a plus de carte en jeu, il se fera attaquer par la carte et il perdra des points de vie."),(0,i.kt)("li",{parentName:"ul"},"Chaque action des utilisateurs doit \xeatre envoy\xe9e au serveur pour que l\u2019autre joueur puisse r\xe9cup\xe9rer l\u2019action effectu\xe9e.")),(0,i.kt)("h2",{id:"contraintes"},"Contraintes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le travail doit \xeatre effectu\xe9 en \xe9quipes de 4."),(0,i.kt)("li",{parentName:"ul"},"Vous devrez utiliser Git."),(0,i.kt)("li",{parentName:"ul"},"Vous devrez utiliser DevOps pour la gestion des t\xe2ches."),(0,i.kt)("li",{parentName:"ul"},"Vous devrez d\xe9ployer votre application sur Azure."),(0,i.kt)("li",{parentName:"ul"},"Vous devrez faire une application cliente en Angular."),(0,i.kt)("li",{parentName:"ul"},"Vous devrez faire une application serveur en ASP.NET Web API."),(0,i.kt)("li",{parentName:"ul"},"Vous devrez faire une section d\u2019administrateur sur votre serveur en MVC."),(0,i.kt)("li",{parentName:"ul"},"Vous devrez faire des tests unitaires pour l\u2019utilisation des services."),(0,i.kt)("li",{parentName:"ul"},"Vous devrez ajuster les tests unitaires du \xab gameplay \xbb pour qu\u2019il fonctionne.")))}c.isMDXComponent=!0}}]);