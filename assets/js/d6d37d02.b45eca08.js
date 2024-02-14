"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[4292],{8750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=t(5893),r=t(1151);const s={},i="\xc9v\xe9nements",l={id:"info/Events",title:"\xc9v\xe9nements",description:"JSON",source:"@site/docs/02-info/09-Events.md",sourceDirName:"02-info",slug:"/info/Events",permalink:"/5W5-Web-Avancee/info/Events",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/02-info/09-Events.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"info",previous:{title:"SignalR",permalink:"/5W5-Web-Avancee/info/SignalR"},next:{title:"Animations",permalink:"/5W5-Web-Avancee/info/Animations"}},d={},o=[{value:"JSON",id:"json",level:2},{value:"Exemple du JSon avec un event simple",id:"exemple-du-json-avec-un-event-simple",level:2},{value:"Des events dans des events",id:"des-events-dans-des-events",level:2},{value:"Une action, un arbre d&#39;\xe9v\xe9nements",id:"une-action-un-arbre-d\xe9v\xe9nements",level:2},{value:"La s\xe9rialisation polymorphique",id:"la-s\xe9rialisation-polymorphique",level:2},{value:"La mise \xe0 jour interactive des donn\xe9es",id:"la-mise-\xe0-jour-interactive-des-donn\xe9es",level:2},{value:"Le client",id:"le-client",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\xe9v\xe9nements",children:"\xc9v\xe9nements"}),"\n",(0,a.jsx)(n.h2,{id:"json",children:"JSON"}),"\n",(0,a.jsx)(n.p,{children:"On se souvient que pour la communication entre notre client et notre serveur, les donn\xe9es sont s\xe9rialis\xe9es en utilisant le format JSON."}),"\n",(0,a.jsx)(n.h2,{id:"exemple-du-json-avec-un-event-simple",children:"Exemple du JSon avec un event simple"}),"\n",(0,a.jsx)(n.p,{children:"Voici un exemple d\u2019\xe9v\xe8nement et sa s\xe9rialisation. On peut voir qu\u2019il contient toute l\u2019information \xe0 propos de qui pige quelle carte."}),"\n",(0,a.jsx)(n.p,{children:"Classe d'\xe9v\xe9nement:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public class DrawCardEvent : MatchEvent\n{\n    public int PlayableCardId { get; set; }\n    public int PlayerId { get; set; }\n\n    public DrawCardEvent(MatchPlayerData playerData)\n    {\n        if(playerData.CardsPile.Count > 0) {\n            int lastElementIndex = playerData.CardsPile.Count() - 1;\n            var playableCard = playerData.CardsPile[lastElementIndex];\n\n            PlayerId = playerData.PlayerId;\n            PlayableCardId = playableCard.Id;\n\n            playerData.CardsPile.RemoveAt(lastElementIndex);\n            playerData.Hand.Add(playableCard);\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"S\xe9rialisation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "$type":"DrawCard",\n    "PlayableCardId":54,\n    "PlayerId":2,\n    "Events":null\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"des-events-dans-des-events",children:"Des events dans des events"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"Cet exemple est diff\xe9rent de l'impl\xe9mentation d'\xe9v\xe9nements que vous avez dans le v\xe9ritable TP. Dans le TP, il faut utiliser le PlayerStartTurnEvent."})}),"\n",(0,a.jsx)(n.p,{children:"Un exemple qui contient des sous \xe9v\xe9nements"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public class StartMatchEvent : MatchEvent\n{\n    public StartMatchEvent(Match match, MatchPlayerData currentPlayerData, MatchPlayerData opposingPlayerData)\n    {\n        Events = new List<MatchEvent> { };\n        \n        // On pige les cartes du d\xe9but\n        for(int i = 0; i < match.GameConfig.NbStartingCards; i++)\n        {\n            Events.Add(new DrawCardEvent(currentPlayerData));\n            Events.Add(new DrawCardEvent(opposingPlayerData));\n        }\n        \n        Events.Add(new GainManaEvent(currentPlayerData, match.GameConfig.NbManaPerTurn));\n        // On fait piger la carte de d\xe9but de tour du premier joueur\n        Events.Add(new DrawCardEvent(currentPlayerData));\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"S\xe9rialisation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "$type":"StartMatch",\n    "Events":[\n        {"$type":"DrawCard","PlayableCardId":54,"PlayerId":2,"Events":null},\n        {"$type":"DrawCard","PlayableCardId":45,"PlayerId":1,"Events":null},\n        {"$type":"DrawCard","PlayableCardId":53,"PlayerId":2,"Events":null},\n        {"$type":"DrawCard","PlayableCardId":44,"PlayerId":1,"Events":null},\n        {"$type":"GainMana","Mana":3,"PlayerId":2,"Events":null},\n        {"$type":"DrawCard","PlayableCardId":50,"PlayerId":2,"Events":null}\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"une-action-un-arbre-d\xe9v\xe9nements",children:"Une action, un arbre d'\xe9v\xe9nements"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chaque action va donc g\xe9n\xe9rer un event qui va contenir tout un arbre de sous events."}),"\n",(0,a.jsx)(n.li,{children:"Le JSON de l\u2019arbre d\u2019events est envoy\xe9 aux 2 clients (C\u2019est important pour synchroniser l\u2019autre joueur)."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"la-s\xe9rialisation-polymorphique",children:"La s\xe9rialisation polymorphique"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Il faut ajouter des annotations pour que chaque event soit s\xe9rializ\xe9 avec ses propri\xe9t\xe9s."}),"\n",(0,a.jsx)(n.li,{children:"Mais en bonus, \xe7a nous donne un \xab\xa0$type\xa0\xbb pour l\u2019event qui va \xeatre tr\xe8s utile sur le client!"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'[JsonDerivedType(typeof(DrawCardEvent), typeDiscriminator: "DrawCard")]\n[JsonDerivedType(typeof(EndMatchEvent), typeDiscriminator: "EndMatch")]\n[JsonDerivedType(typeof(GainManaEvent), typeDiscriminator: "GainMana")]\n[JsonDerivedType(typeof(PlayerTurnEvent), typeDiscriminator: "PlayerTurn")]\n[JsonDerivedType(typeof(StartMatchEvent), typeDiscriminator: "StartMatch")]\n[JsonDerivedType(typeof(SurrenderEvent), typeDiscriminator: "Surrender")]\npublic abstract class MatchEvent\n{\n    public MatchEvent()\n    {\n    }\n\n    public List<MatchEvent>? Events { get; set; }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"la-mise-\xe0-jour-interactive-des-donn\xe9es",children:"La mise \xe0 jour interactive des donn\xe9es"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Jusqu\u2019\xe0 pr\xe9sent dans vos cours, le serveur ex\xe9cutait une requ\xeate pour obtenir de l\u2019information et pouvait simplement mettre ses donn\xe9es \xe0 jour."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Par exemple, obtenir une liste d\u2019album d\u2019un groupe ou une liste de zombies \xe0 afficher."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Sinon, le client envoyait un formulaire pour modifier les donn\xe9es sur le serveur et par la suite obtenait les donn\xe9es une fois de plus et ces donn\xe9es contenaient nos changements."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Notre situation est plus complexe car on ne veut pas simplement mettre les donn\xe9es \xe0 jour."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\xc7a ne serait vraiment pas int\xe9ressant, si lorsque l\u2019on joue une carte on voyait simplement le r\xe9sultat sans voir la carte \xeatre jou\xe9e, les combats entre cartes, les d\xe9g\xe2ts re\xe7us, etc."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"On veut donc r\xe9appliquer les changements un \xe0 un sur le client!"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Avec SignalR, on va pouvoir envoyer les events aux deux clients pour pouvoir mettre les donn\xe9es \xe0 jour."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"le-client",children:"Le client"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Le travail du client, c\u2019est de traverser l\u2019arbre d\u2019events et d\u2019afficher au joueur ce qui s\u2019est produit en modifiant les donn\xe9es un event \xe0 la fois."}),"\n",(0,a.jsx)(n.li,{children:"Par exemple, afficher lorsqu\u2019un joueur pige une carte ou lorsqu\u2019une carte re\xe7oit des d\xe9g\xe2ts."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(7294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);