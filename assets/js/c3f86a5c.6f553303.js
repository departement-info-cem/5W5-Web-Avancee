"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,v=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?o.createElement(v,i(i({ref:t},l),{},{components:n})):o.createElement(v,i({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={title:"Navigation",description:"Flutter - Navigation",hide_table_of_contents:!0},i="Flutter et la navigation",c={unversionedId:"cours/navigation",id:"cours/navigation",title:"Navigation",description:"Flutter - Navigation",source:"@site/docs/01-cours/03-navigation.md",sourceDirName:"01-cours",slug:"/cours/navigation",permalink:"/5N6-mobile-2/cours/navigation",draft:!1,editUrl:"https://github.com/departement-info-cem/5N6-mobile-2/tree/main/web/docs/01-cours/03-navigation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Navigation",description:"Flutter - Navigation",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Layout",permalink:"/5N6-mobile-2/cours/layout"},next:{title:"Liste",permalink:"/5N6-mobile-2/cours/liste"}},p={},u=[],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=l("Row"),d=l("Column"),m={toc:u},v="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flutter-et-la-navigation"},"Flutter et la navigation"),(0,r.kt)(s,{mdxType:"Row"},(0,r.kt)(d,{mdxType:"Column"},(0,r.kt)("admonition",{title:"Avant la s\xe9ance : doc officielle et exemple",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Vous pouvez lire la doc officielle ",(0,r.kt)("a",{parentName:"p",href:"https://flutter.dev/docs/development/ui/navigation"},"sur navigation et routing"),". Flutter a r\xe9cemment introduit une version 2.0 de la navigation ",(0,r.kt)("strong",{parentName:"p"},"mais nous vous conseillons d'utiliser la version 1")," pour l'instant car vous trouverez moins de soutien (prof, Google et stackoverflow) pour la nouvelle approche."),(0,r.kt)("p",{parentName:"admonition"},"Vous devez \xe9galement regarder le code de d\xe9mo dans le repo ici: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/departement-info-cem/5N6-mobile-2-Nouveau/tree/main/code/navigation"},"d\xe9mo de navigation"),". Vous devez chercher les TODOs pour chercher les explications dans le code."))),(0,r.kt)(d,{mdxType:"Column"},(0,r.kt)("admonition",{title:"S\xe9ance",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On discutera du concept de pile de navigation et des op\xe9rations de push et pop."),(0,r.kt)("p",{parentName:"admonition"},"On regardera les avantages et inconv\xe9nients des route nomm\xe9es ou pas dans un context mobile ou web."),(0,r.kt)("p",{parentName:"admonition"},"On discutera des avantages et des inconv\xe9nients de passer des objets complexes ou uniquement des identifiants entre les \xe9crans de notre application."),(0,r.kt)("p",{parentName:"admonition"},"On regardera le comportement du Scaffold quand on ajouter un drawer.")))),(0,r.kt)("admonition",{title:"Exercices",type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"exercice-simple_nav"},"Exercice simple_nav"),(0,r.kt)("p",{parentName:"admonition"},"Faites un premier \xe9cran qui contient un champ texte et un bouton. Quand on appuie sur le bouton, un deuxi\xe8me \xe9cran part et on lui passe la valeur du champ texte."),(0,r.kt)("p",{parentName:"admonition"},"Le deuxi\xe8me \xe9cran affiche le contenu de la valeur qu'on vient de lui passer."),(0,r.kt)("h3",{parentName:"admonition",id:"exercice-liste_nav"},"Exercice liste_nav"),(0,r.kt)("p",{parentName:"admonition"},"Faites un premier \xe9cran qui contient 5 objets de type Truc contenant un ",(0,r.kt)("strong",{parentName:"p"},"name")," et un ",(0,r.kt)("strong",{parentName:"p"},"id"),"."),(0,r.kt)("p",{parentName:"admonition"},"Faites que l'appui sur un des \xe9l\xe9ments d\xe9clenche la navigation vers un deuxi\xe8me \xe9cran qui affiche le truc.")))}f.isMDXComponent=!0}}]);