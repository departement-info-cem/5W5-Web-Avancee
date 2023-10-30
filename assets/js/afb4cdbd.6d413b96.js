"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Liste",description:"Flutter - Gestion de listes",hide_table_of_contents:!0},a="Listes et ListView",s={unversionedId:"cours/liste",id:"cours/liste",title:"Liste",description:"Flutter - Gestion de listes",source:"@site/docs/01-cours/04-liste.md",sourceDirName:"01-cours",slug:"/cours/liste",permalink:"/5N6-mobile-2/cours/liste",draft:!1,editUrl:"https://github.com/departement-info-cem/5N6-mobile-2/tree/main/web/docs/01-cours/04-liste.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Liste",description:"Flutter - Gestion de listes",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Navigation",permalink:"/5N6-mobile-2/cours/navigation"},next:{title:"Liste",permalink:"/5N6-mobile-2/cours/liste"}},l={},c=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=p("Row"),m=p("Column"),u={toc:c},f="wrapper";function b(e){let{components:t,...o}=e;return(0,i.kt)(f,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"listes-et-listview"},"Listes et ListView"),(0,i.kt)(d,{mdxType:"Row"},(0,i.kt)(m,{mdxType:"Column"},(0,i.kt)("admonition",{title:"Avant la s\xe9ance",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Vous regarderez la doc officielle ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://flutter.dev/docs/cookbook/lists/basic-list"},"ici"))),(0,i.kt)("p",{parentName:"admonition"},"Vous regardez l'exemple de code ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/departement-info-cem/5N6-mobile-2-Nouveau/tree/main/code/liste"},"demo de liste"))))),(0,i.kt)(m,{mdxType:"Column"},(0,i.kt)("admonition",{title:"S\xe9ance 1 : listes",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"On regardera comment construire une liste d'objets simple puis un peu plus complexe."),(0,i.kt)("p",{parentName:"admonition"},"On expliquera le concept d'expression lambda qui est souvent utilis\xe9 pour d\xe9crire comment produire l'objet graphique correspondant \xe0 l'objet de donn\xe9es.")),(0,i.kt)("admonition",{title:"S\xe9ance 2 : listes int\xe9gration",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Compl\xe9ter les exercices"),(0,i.kt)("p",{parentName:"admonition"},"Ex\xe9cuter un exercice sur le simulateur de iOS. Ex\xe9cuter un exercice sur un appareil iOS.")))),(0,i.kt)("admonition",{title:"Exercices",type:"note"},(0,i.kt)("h3",{parentName:"admonition",id:"exercice-ordre_alpha"},"Exercice ordre_alpha"),(0,i.kt)("p",{parentName:"admonition"},"Tirer une liste de 5 pr\xe9noms et la m\xe9langer"),(0,i.kt)("p",{parentName:"admonition"},"Sur chaque \xe9l\xe9ment de la liste un bouton pour monter et un bouton pour descendre."),(0,i.kt)("p",{parentName:"admonition"},"Quand la liste est dans l'ordre, on affiche un message et on rem\xe9lange."),(0,i.kt)("h3",{parentName:"admonition",id:"exercice-jolie_liste_lambda"},"Exercice jolie_liste_lambda"),(0,i.kt)(d,{mdxType:"Row"},(0,i.kt)(m,{size:"9",mdxType:"Column"},(0,i.kt)("p",{parentName:"admonition"},"Affiche les nombres de la suite de Fibonacci dans un joli format (changer le padding, le style du texte, les bordures, etc.)"),(0,i.kt)("p",{parentName:"admonition"},"La liste doit \xeatre construite \xe0 l'aide d'une expression lambda.")),(0,i.kt)(m,{size:"3",mdxType:"Column"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"jolie liste lambda",src:n(9081).Z,width:"1284",height:"2778"})))),(0,i.kt)("h3",{parentName:"admonition",id:"exercice-jolie_liste_builder"},"Exercice jolie_liste_builder"),(0,i.kt)("p",{parentName:"admonition"},"Reprendre le dernier exercice, mais cette fois la liste doit \xeatre construite \xe0 l'aide d'un listview.builder."),(0,i.kt)("h3",{parentName:"admonition",id:"exercice-mac_simulateur"},"Exercice mac_simulateur"),(0,i.kt)("p",{parentName:"admonition"},"Prendre l'exercice de votre choix et l'ex\xe9cuter dans le simulateur ios."),(0,i.kt)("h3",{parentName:"admonition",id:"exercice-iphone_ipad"},"Exercice iphone_ipad"),(0,i.kt)("p",{parentName:"admonition"},"Prendre l'exercice de votre choix et l'ex\xe9cuter sur un appareil ios.")))}b.isMDXComponent=!0},9081:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jolie-liste-lambda-a0b0799434d4b573742f02ac1c61ca5e.png"}}]);