"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[9749],{818:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(5893),i=t(1151),r=t(4866),s=t(5162);const o={},l="Animations",c={id:"info/Animations",title:"Animations",description:"Vos options",source:"@site/docs/02-info/11-Animations.md",sourceDirName:"02-info",slug:"/info/Animations",permalink:"/5W5-Web-Avancee/info/Animations",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/02-info/11-Animations.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"info",previous:{title:"Tests Unitaires",permalink:"/5W5-Web-Avancee/info/TestsUnitaires"},next:{title:"Animations et d\xe9lais",permalink:"/5W5-Web-Avancee/info/AnimationsEtD\xe9lais"}},m={},u=[{value:"Vos options",id:"vos-options",level:2},{value:"CSS",id:"css",level:2},{value:"Comment \xe7a marche",id:"comment-\xe7a-marche",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Keyframes",id:"keyframes",level:3},{value:"Utiliser avec Angular",id:"utiliser-avec-angular",level:3},{value:"Angular animations",id:"angular-animations",level:2},{value:"ng-animate",id:"ng-animate",level:3},{value:"Exemple",id:"exemple-1",level:3},{value:"Trigger",id:"trigger",level:3},{value:"Transition",id:"transition",level:3},{value:"useAnimation",id:"useanimation",level:3},{value:"G\xe9n\xe9rateur d&#39;animations CSS",id:"g\xe9n\xe9rateur-danimations-css",level:2},{value:"D\xe9lais",id:"d\xe9lais",level:2},{value:"Exemple",id:"exemple-2",level:2},{value:"Github",id:"github",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"animations",children:"Animations"}),"\n",(0,a.jsx)(e.h2,{id:"vos-options",children:"Vos options"}),"\n",(0,a.jsx)(e.p,{children:"On peut faire les animations en utilisant:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"CSS\nOU"}),"\n",(0,a.jsx)(e.li,{children:"Angular animations"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"css",children:"CSS"}),"\n",(0,a.jsx)(e.h3,{id:"comment-\xe7a-marche",children:"Comment \xe7a marche"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Principalement on change une propri\xe9t\xe9 CSS"}),"\n",(0,a.jsx)(e.li,{children:"On d\xe9cide combien de temps de \xe7a va prendre \xe0 faire la transition"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["On change la propri\xe9t\xe9 ",(0,a.jsx)(e.strong,{children:"top"})," de 0px \xe0 20px en 0.2 seconde, voil\xe0 une animation qui fait descendre un objet de 20 pixels en 0.2 seconde."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"keyframes",children:"Keyframes"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"On peut avoir diff\xe9rentes \xe9tapes \xe0 notre animation"}),"\n",(0,a.jsx)(e.li,{children:"Ces \xe9tapes sont des Keyframes"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"utiliser-avec-angular",children:"Utiliser avec Angular"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Il faut commencer par cr\xe9er l'animation en CSS"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"@keyframes attack {\n  0% {\n    transform: translateY(0%);\n  }\n  20% {\n    transform: translateY(10%);\n  }\n  60% {\n    transform: translateY(-50%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Ensuite on assigne l'animation \xe0 une classe CSS"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:".attack{\n  animation: attack 0.5s;\n  -webkit-animation: attack 0.5s;\n  //C'est peut-\xeatre overkill de mettre toutes les autres, mais \ud83e\udd37\u200d\u2642\ufe0f\n  -moz-animation: attack 0.5s;\n  -o-animation: attack 0.5s;\n  -ms-animation: attack 0.5s;\n}\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Finalement, on peut assigner classe CSS avec une condition"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<app-card [class.attack]="mycard.attack===true"></app-card>\n'})}),"\n",(0,a.jsx)(e.h2,{id:"angular-animations",children:"Angular animations"}),"\n",(0,a.jsx)(e.h3,{id:"ng-animate",children:"ng-animate"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Librairie Angular pour les animations: ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/ng-animate",children:"https://www.npmjs.com/package/ng-animate"})]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://jiayihu.github.io/ng-animate/",children:"Page pour voir les animations"})}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"@Component({\n  selector: 'my-component',\n  templateUrl: 'my-component.component.html',\n  animations: [\n    trigger('montrigger', [transition('* => *', useAnimation(bounce))])\n  ],\n})\nexport class MyComponent {\n  mavariable: any;\n}\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Dans le .hmtl"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<div [@montrigger]="mavariable"></div>\n'})}),"\n",(0,a.jsx)(e.h3,{id:"trigger",children:"Trigger"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"C'est ce qui va permettre de d\xe9clencher l'animation"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"animations: [\n    trigger('montrigger', \n      [transition('* => *', useAnimation(bounce))]\n    )\n],\n"})}),"\n",(0,a.jsx)(e.h3,{id:"transition",children:"Transition"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"C'est le changement sur la variable qui va d\xe9clencher l'animation\n'* => *' signifie n'importe quel changement d'\xe9tat"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["On peut \xe9galement mettre des '",":increment","' ou '",":decrement","'"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"animations: [\n    trigger('bounce', [transition(':increment', useAnimation(bounce))]),\n    trigger('shake', [transition(':decrement', useAnimation(shake))])\n],\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<div [@shake]="mavariable" [@bounce]="mavariable"></div>\n'})}),"\n",(0,a.jsx)(e.h3,{id:"useanimation",children:"useAnimation"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Dans les exemples, on utilise une animation pr\xe9d\xe9finie, mais on pourrait \xe9galement cr\xe9er nos propres animations avec des keyframes"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"g\xe9n\xe9rateur-danimations-css",children:"G\xe9n\xe9rateur d'animations CSS"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Le site ",(0,a.jsx)(e.strong,{children:"animista"})," contient des centaines d'animations que l'on peut modifier avec des param\xe8tres pour g\xe9n\xe9rer nos keyframes."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://animista.net",children:"https://animista.net"})}),"\n",(0,a.jsx)(e.table,{children:(0,a.jsx)(e.thead,{children:(0,a.jsx)(e.tr,{children:(0,a.jsx)(e.th,{children:(0,a.jsx)(e.img,{alt:"alt text",src:t(1272).Z+"",width:"1189",height:"821"})})})})}),"\n",(0,a.jsx)(e.h2,{id:"d\xe9lais",children:"D\xe9lais"}),"\n",(0,a.jsx)(e.p,{children:"Quand on parle d'animation, on parle presque toujours de d\xe9lais. Surtout lorsque l'on fait des s\xe9quences d'animations."}),"\n",(0,a.jsx)(e.p,{children:"Dans l'exemple suivant, on voit que l'on set bounce \xe0 true et on le set \xe0 false apr\xe8s 1000 ms (donc 1 seconde)."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"bounceMe() {\n  this.bounce = true;\n  setTimeout(() => {this.bounce = false;}, 1000);\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"On imagine qu'une animation est d\xe9lench\xe9 quand la valeur de la variable bounce change (comme dans l'exemple complet un peu plus bas.)"}),"\n",(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsxs)(e.p,{children:["Sans le ",(0,a.jsx)(e.strong,{children:"setTimeout"}),", l'animation joue correctement la premi\xe8re fois, mais comme le syst\xe8me d\xe9tecte les changements, rien ne se passe la 2e fois que l'on clique car bounce est ",(0,a.jsx)(e.strong,{children:"ENCORE"})," \xe0 true."]})}),"\n",(0,a.jsx)(e.admonition,{type:"danger",children:(0,a.jsxs)(e.p,{children:["Sans le ",(0,a.jsx)(e.strong,{children:"setTimeout"}),", on obtient des r\xe9sultats encore ",(0,a.jsx)(e.strong,{children:"PLUS"})," bizarre. Par exemple, en jouant une autre animation, on risque d'avoir un ",(0,a.jsx)(e.strong,{children:"bounce"})," en plus \xe0 la fin car le syst\xe8me va r\xe9\xe9valuer les animations apr\xe8s en avoir termin\xe9 une. En r\xe9sum\xe9, il faut utiliser un setTimeout de la m\xeame dur\xe9e que notre animation pour remettre cette valeur \xe0 false."]})}),"\n",(0,a.jsx)(e.h2,{id:"exemple-2",children:"Exemple"}),"\n",(0,a.jsxs)(e.p,{children:["Un exemple qui montre comment utiliser \xe0 la fois des animations angular et des animations css g\xe9n\xe9r\xe9es avec ",(0,a.jsx)(e.strong,{children:"animista"})]}),"\n","\n","\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{value:"app.component.ts",label:"app.component.ts",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"import { Component } from '@angular/core';\nimport {transition, trigger, useAnimation} from \"@angular/animations\";\nimport {bounce, shake} from \"ng-animate\";\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css'],\n  animations:[\n    trigger('bounce', [transition(':increment', useAnimation(bounce, {\n      // Set the duration to 3 seconds and delay to 1 second\n      params: { timing: 3, delay: 1 }\n    }))]),\n    trigger('shake', [transition(':decrement', useAnimation(shake))])\n  ]\n})\nexport class AppComponent {\n\n  mavariable = 0;\n  shake= false;\n  bounce = false;\n\n  constructor() {\n  }\n\n  shakeMe() {\n    this.shake = true;\n    setTimeout(() => {this.shake = false;},1000);\n  }\n\n  bounceMe() {\n    this.bounce = true;\n    setTimeout(() => {this.bounce = false;},1000);\n  }\n}\n"})})}),(0,a.jsx)(s.Z,{value:"app.component.html",label:"app.component.html",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<div style="padding: 20px">\n  <h1>Animation CSS</h1>\n  <button (click)="shakeMe()" mat-raised-button color="accent" style="margin-right: 10px">Shake</button>\n  <button (click)="bounceMe()" mat-raised-button color="primary">Bounce</button>\n  <div [class.bounce-top]="bounce" [class.shake-top]="shake" style="height: 100px; width: 100px; background-color: aqua; margin: 20px"></div>\n</div>\n<div style="padding: 20px">\n  <h1>Animation Angular</h1>\n  <button (click)="mavariable = mavariable - 1" mat-raised-button color="accent" style="margin-right: 10px">Shake</button>\n  <button (click)="mavariable = mavariable + 1" mat-raised-button color="primary">Bounce</button>\n  <div [@shake]="mavariable" [@bounce]="mavariable" style="height: 100px; width: 100px; background-color: aqua; margin: 20px"></div>\n</div>\n'})})}),(0,a.jsx)(s.Z,{value:"app.component.css",label:"app.component.css",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:".shake-top {\n  -webkit-animation: shake-top 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\n  animation: shake-top 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\n}\n/* ----------------------------------------------\n * Generated by Animista on 2023-9-7 15:7:40\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation shake-top\n * ----------------------------------------\n */\n@-webkit-keyframes shake-top {\n  0%,\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transform-origin: 50% 0;\n    transform-origin: 50% 0;\n  }\n  10% {\n    -webkit-transform: rotate(2deg);\n    transform: rotate(2deg);\n  }\n  20%,\n  40%,\n  60% {\n    -webkit-transform: rotate(-4deg);\n    transform: rotate(-4deg);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: rotate(4deg);\n    transform: rotate(4deg);\n  }\n  80% {\n    -webkit-transform: rotate(-2deg);\n    transform: rotate(-2deg);\n  }\n  90% {\n    -webkit-transform: rotate(2deg);\n    transform: rotate(2deg);\n  }\n}\n@keyframes shake-top {\n  0%,\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transform-origin: 50% 0;\n    transform-origin: 50% 0;\n  }\n  10% {\n    -webkit-transform: rotate(2deg);\n    transform: rotate(2deg);\n  }\n  20%,\n  40%,\n  60% {\n    -webkit-transform: rotate(-4deg);\n    transform: rotate(-4deg);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: rotate(4deg);\n    transform: rotate(4deg);\n  }\n  80% {\n    -webkit-transform: rotate(-2deg);\n    transform: rotate(-2deg);\n  }\n  90% {\n    -webkit-transform: rotate(2deg);\n    transform: rotate(2deg);\n  }\n}\n\n.bounce-top {\n  -webkit-animation: bounce-top 0.9s both;\n  animation: bounce-top 0.9s both;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2023-9-7 15:8:5\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation bounce-top\n * ----------------------------------------\n */\n@-webkit-keyframes bounce-top {\n  0% {\n    -webkit-transform: translateY(-45px);\n    transform: translateY(-45px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 1;\n  }\n  24% {\n    opacity: 1;\n  }\n  40% {\n    -webkit-transform: translateY(-24px);\n    transform: translateY(-24px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  65% {\n    -webkit-transform: translateY(-12px);\n    transform: translateY(-12px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  82% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  93% {\n    -webkit-transform: translateY(-4px);\n    transform: translateY(-4px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  25%,\n  55%,\n  75%,\n  87% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n}\n@keyframes bounce-top {\n  0% {\n    -webkit-transform: translateY(-45px);\n    transform: translateY(-45px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 1;\n  }\n  24% {\n    opacity: 1;\n  }\n  40% {\n    -webkit-transform: translateY(-24px);\n    transform: translateY(-24px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  65% {\n    -webkit-transform: translateY(-12px);\n    transform: translateY(-12px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  82% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  93% {\n    -webkit-transform: translateY(-4px);\n    transform: translateY(-4px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  25%,\n  55%,\n  75%,\n  87% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n}\n"})})})]}),"\n",(0,a.jsx)(e.h2,{id:"github",children:"Github"}),"\n",(0,a.jsxs)(e.p,{children:["Le code de cet ",(0,a.jsx)(e.a,{href:"https://github.com/CEM-420-5W5/ngAnimationsInfo",children:"exemple"})]})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},5162:(n,e,t)=>{t.d(e,{Z:()=>s});t(7294);var a=t(512);const i={tabItem:"tabItem_Ymn6"};var r=t(5893);function s(n){let{children:e,hidden:t,className:s}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:t,children:e})}},4866:(n,e,t)=>{t.d(e,{Z:()=>w});var a=t(7294),i=t(512),r=t(2466),s=t(6550),o=t(469),l=t(1980),c=t(7392),m=t(12);function u(n){return a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:i}}=n;return{value:e,label:t,attributes:a,default:i}}))}(t);return function(n){const e=(0,c.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function p(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function h(n){let{queryString:e=!1,groupId:t}=n;const i=(0,s.k6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(i.location.search);e.set(r,n),i.replace({...i.location,search:e.toString()})}),[r,i])]}function f(n){const{defaultValue:e,queryString:t=!1,groupId:i}=n,r=d(n),[s,l]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:r}))),[c,u]=h({queryString:t,groupId:i}),[f,g]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,r]=(0,m.Nk)(t);return[i,(0,a.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:i}),b=(()=>{const n=c??f;return p({value:n,tabValues:r})?n:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((n=>{if(!p({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);l(n),u(n),g(n)}),[u,g,r]),tabValues:r}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function v(n){let{className:e,block:t,selectedValue:a,selectValue:s,tabValues:o}=n;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),m=n=>{const e=n.currentTarget,t=l.indexOf(e),i=o[t].value;i!==a&&(c(e),s(i))},u=n=>{let e=null;switch(n.key){case"Enter":m(n);break;case"ArrowRight":{const t=l.indexOf(n.currentTarget)+1;e=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(n.currentTarget)-1;e=l[t]??l[l.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e),children:o.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,x.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>l.push(n),onKeyDown:u,onClick:m,...r,className:(0,i.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===e}),children:t??e},e)}))})}function j(n){let{lazy:e,children:t,selectedValue:i}=n;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===i));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function k(n){const e=f(n);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(n){const e=(0,g.Z)();return(0,x.jsx)(k,{...n,children:u(n.children)},String(e))}},1272:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/animista-96b9ac9edee6efb5fca1146e4f8ffba7.png"},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>s});var a=t(7294);const i={},r=a.createContext(i);function s(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);