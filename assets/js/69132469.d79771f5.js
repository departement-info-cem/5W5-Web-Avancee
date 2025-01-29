"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[385],{89014:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"info/TestsUnitaires","title":"Tests Unitaires","description":"Les diff\xe9rents types de tests (liste incompl\xe8te):","source":"@site/docs/02-info/10-TestsUnitaires.md","sourceDirName":"02-info","slug":"/info/TestsUnitaires","permalink":"/5W5-Web-Avancee/info/TestsUnitaires","draft":false,"unlisted":false,"editUrl":"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/02-info/10-TestsUnitaires.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{},"sidebar":"info","previous":{"title":"\xc9v\xe9nements","permalink":"/5W5-Web-Avancee/info/Events"},"next":{"title":"Animations","permalink":"/5W5-Web-Avancee/info/Animations"}}');var i=s(74848),r=s(28453);const a={},l="Tests Unitaires",d={},o=[{value:"Les diff\xe9rents types de tests (liste incompl\xe8te):",id:"les-diff\xe9rents-types-de-tests-liste-incompl\xe8te",level:2},{value:"Responsabilit\xe9s des <strong>contr\xf4leurs</strong> vs responsabilit\xe9s des <strong>services</strong>",id:"responsabilit\xe9s-des-contr\xf4leurs-vs-responsabilit\xe9s-des-services",level:2},{value:"Un contr\xf4leur \xe7a fait quoi?",id:"un-contr\xf4leur-\xe7a-fait-quoi",level:3},{value:"Un service \xe7a fait quoi?",id:"un-service-\xe7a-fait-quoi",level:3},{value:"G\xe9n\xe9ration de tests",id:"g\xe9n\xe9ration-de-tests",level:2},{value:"Test unitaires avec MSTest",id:"test-unitaires-avec-mstest",level:2},{value:"Comment tester une exception?",id:"comment-tester-une-exception",level:3},{value:"Comment tester du code qui utilise une BD?",id:"comment-tester-du-code-qui-utilise-une-bd",level:2},{value:"Exemple de test avec InMemoryDatabase",id:"exemple-de-test-avec-inmemorydatabase",level:3},{value:"La couverture de code",id:"la-couverture-de-code",level:2},{value:"Outil int\xe9ressant",id:"outil-int\xe9ressant",level:3},{value:"Utilisation",id:"utilisation",level:3},{value:"Activiter ou d\xe9sactiver la coloration du code",id:"activiter-ou-d\xe9sactiver-la-coloration-du-code",level:3},{value:"Une autre fa\xe7on de faire le setup/Dispose",id:"une-autre-fa\xe7on-de-faire-le-setupdispose",level:3},{value:"Quoi tester?",id:"quoi-tester",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"tests-unitaires",children:"Tests Unitaires"})}),"\n",(0,i.jsx)(n.h2,{id:"les-diff\xe9rents-types-de-tests-liste-incompl\xe8te",children:"Les diff\xe9rents types de tests (liste incompl\xe8te):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Tests ",(0,i.jsx)(n.strong,{children:"unitaires"})," : v\xe9rifient le bon fonctionnement des composants individuels du logiciel.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pour nos services et \xe9ventuellements nos contr\xf4leurs."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Tests ",(0,i.jsx)(n.strong,{children:"fonctionnels"})," : v\xe9rifient la conformit\xe9 du logiciel aux exigences fonctionnelles.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pour tester la fonctionnalit\xe9 du jeu."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Tests ",(0,i.jsx)(n.strong,{children:"de performance"})," : v\xe9rifient la capacit\xe9 du logiciel \xe0 supporter des charges ou des contraintes.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pour v\xe9rifier que l'on peut g\xe9rer un grand nombre de parties en m\xeame temps."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"responsabilit\xe9s-des-contr\xf4leurs-vs-responsabilit\xe9s-des-services",children:["Responsabilit\xe9s des ",(0,i.jsx)(n.strong,{children:"contr\xf4leurs"})," vs responsabilit\xe9s des ",(0,i.jsx)(n.strong,{children:"services"})]}),"\n",(0,i.jsx)(n.h3,{id:"un-contr\xf4leur-\xe7a-fait-quoi",children:"Un contr\xf4leur \xe7a fait quoi?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["La s\xe9curit\xe9 \xe0 travers les ",(0,i.jsx)(n.strong,{children:"[Authorize]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Obtient les ",(0,i.jsx)(n.strong,{children:"donn\xe9es de l'utilisateur qui a fait la requ\xeate"})]}),"\n",(0,i.jsx)(n.li,{children:"Modifie les param\xe8tres re\xe7us pour faire les appels de services (Si n\xe9cessaire)"}),"\n",(0,i.jsx)(n.li,{children:"Retourne les donn\xe9es"}),"\n",(0,i.jsx)(n.li,{children:"G\xe8re les exceptions et renvoi les erreurs"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"un-service-\xe7a-fait-quoi",children:"Un service \xe7a fait quoi?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La validation des param\xe8tres"}),"\n",(0,i.jsx)(n.li,{children:"Les requ\xeates dans la BD"}),"\n",(0,i.jsx)(n.li,{children:"La logique de l'application"}),"\n",(0,i.jsxs)(n.li,{children:["V\xe9rification des droits d'acc\xe8s aux donn\xe9es","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\xc0 ne pas confondre avec [Authorize]. Ici on parle, par exemple, de v\xe9rifier qu'un usager n'efface pas les donn\xe9es d'un autre usager!"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Lance une exception lorsqu'il y a un probl\xe8me"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"g\xe9n\xe9ration-de-tests",children:"G\xe9n\xe9ration de tests"}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:(0,i.jsx)(n.img,{alt:"image",src:s(73782).A+"",width:"520",height:"330"})})})})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"On peut utiliser cette fonctionnalit\xe9 m\xeame si il n'y a pas encore de projet de tests dans la solution!"})}),"\n",(0,i.jsx)(n.h2,{id:"test-unitaires-avec-mstest",children:"Test unitaires avec MSTest"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[TestClass]"})," Permet d'identifier la classe comme un classe de Test"]}),"\n",(0,i.jsxs)(n.li,{children:["Le ",(0,i.jsx)(n.strong,{children:"constructeur"})," est appel\xe9 une fois pour l'ensemble des tests de la classe"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[TestInitialize]"})," Marque une m\xe9thode pour qu'elle soit appel\xe9e ",(0,i.jsx)(n.strong,{children:"avant"})," chaque test"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[TestCleanup]"})," Marque une m\xe9thode pour qu'elle soit appel\xe9e ",(0,i.jsx)(n.strong,{children:"apr\xe8s"})," chaque test"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[TestMethod]"})," Marque une m\xe9thode pour indiquer que c'est un ",(0,i.jsx)(n.strong,{children:"test \xe0 ex\xe9cut\xe9"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[TestClass]\npublic class ServiceTests\n{\n    // \xc9tape: 1\n    public ServiceTests()\n    {\n        // Ex\xe9cuter une fois pour l'ensemble des tests de la classe\n    }\n\n    // \xc9tapes: 2 et 5\n    [TestInitialize]\n    public void Init()\n    {\n        // Ex\xe9cuter AVANT chaque test\n    }\n    \n    // \xc9tapes: 4 et 7\n    [TestCleanup]\n    public void Dispose()\n    {\n        // Ex\xe9cuter APR\xc8S chaque test\n    }\n\n    // \xc9tape: 3\n    [TestMethod]\n    public void Test1()\n    {\n        // Ex\xe9cution du test avec des Asserts\n    }\n    \n    // \xc9tape: 6\n    [TestMethod]\n    public void Test2()\n    {\n        // Ex\xe9cution d'un autre test avec des Asserts\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Les ",(0,i.jsx)(n.strong,{children:"\xe9tapes"})," indiqu\xe9s dans l'exemple, montre dans quel ordre les m\xe9thodes sont appel\xe9es"]})}),"\n",(0,i.jsx)(n.h3,{id:"comment-tester-une-exception",children:"Comment tester une exception?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'Exception e = Assert.ThrowsException<SomeException>(() => service.DoSomething());\nAssert.AreEqual("ExpectedMessage", e.Message);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Il y a plusieurs fa\xe7on de tester qu'un m\xe9thode lance bien une exception. En utilisant celle-ci, on peut \xe9galement ",(0,i.jsx)(n.strong,{children:"valider le message de l'exception"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"comment-tester-du-code-qui-utilise-une-bd",children:"Comment tester du code qui utilise une BD?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour faire nos tests facilement, nous utiliserons une BD de tests de type ",(0,i.jsx)(n.strong,{children:"InMemoryDatabase"})]}),"\n",(0,i.jsxs)(n.li,{children:["Il est ",(0,i.jsx)(n.strong,{children:"IMPORTANT"})," que la BD est la ",(0,i.jsx)(n.strong,{children:"plus petit dur\xe9e de vie possible"})," pour \xe9viter des probl\xe8mes avec ",(0,i.jsx)(n.strong,{children:"Entity"})]}),"\n",(0,i.jsxs)(n.li,{children:["Il est ",(0,i.jsx)(n.strong,{children:"IMPORTANT"})," d'effacer les donn\xe9es dans notre BD de tests entre 2 tests"]}),"\n",(0,i.jsxs)(n.li,{children:["Il est ",(0,i.jsx)(n.strong,{children:"IMPORTANT"})," que la BD utilise ",(0,i.jsx)(n.strong,{children:"UseLazyLoadingProxies(true)"})," si c'est \xe9galement le cas dans notre projet!"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il faut ajouter une libraire (Utiliser la m\xeame version que pour les librairies d'EntityFramework utilis\xe9es dans votre projet)"}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:(0,i.jsx)(n.img,{alt:"image",src:s(34875).A+"",width:"327",height:"28"})})})})}),"\n",(0,i.jsx)(n.h3,{id:"exemple-de-test-avec-inmemorydatabase",children:"Exemple de test avec InMemoryDatabase"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'[TestClass]\npublic class CardsServiceTests\n{\n    // TODO Mettre seulement les optionms ici et non la BD en entier\n    // La BD doit \xeatre cr\xe9e et d\xe9truite pour chacun des tests, sinon il y aura des probl\xe8mes avec le tracking des \xe9l\xe9ments\n    private DbContextOptions<ApplicationDbContext> _options;\n    public CardsServiceTests()\n    {\n        // TODO On initialise les options de la BD, on utilise une InMemoryDatabase\n        _options = new DbContextOptionsBuilder<ApplicationDbContext>()\n            // TODO il faut installer la d\xe9pendance Microsoft.EntityFrameworkCore.InMemory\n            .UseInMemoryDatabase(databaseName: "CardsService")\n            .UseLazyLoadingProxies(true) // Active le lazy loading\n            .Options;\n    }\n    [TestInitialize]\n    public void Init()\n    {\n        // TODO avoir la dur\xe9e de vie d\'un context la plus petite possible\n        using ApplicationDbContext db = new ApplicationDbContext(_options);\n        // TODO on ajoute des donn\xe9es de tests\n        Card[] cards = new Card[] {\n          new Card\n          {\n              Id = 1,\n              Name = "Chat Dragon",\n              Attack = 5,\n              Defense = 6,\n              Cost = 5,\n              ImageUrl = "https://i.pinimg.com/originals/a8/16/49/a81649bd4b0f032ce633161c5a076b87.jpg"\n          }, new Card\n          {\n              Id = 2,\n              Name = "Chat Awesome",\n              Attack = 2,\n              Defense = 4,\n              Cost = 3,\n              ImageUrl = "https://i0.wp.com/thediscerningcat.com/wp-content/uploads/2021/02/tabby-cat-wearing-sunglasses.jpg"\n          }, new Card\n          {\n              Id = 3,\n              Name = "Chatton Laser",\n              Attack = 4,\n              Defense = 2,\n              Cost = 3,\n              ImageUrl = "https://cdn.wallpapersafari.com/27/53/SZ8PO9.jpg"\n          }\n        };\n        db.AddRange(cards);\n        db.SaveChanges();\n    }\n    [TestCleanup]\n    public void Dispose()\n    {\n        //TODO on efface les donn\xe9es de tests pour remettre la BD dans son \xe9tat initial\n        using ApplicationDbContext db = new ApplicationDbContext(_options);\n        db.Cards.RemoveRange(db.Cards);\n        db.SaveChanges();\n    }\n    [TestMethod]\n    public void AddValidCard()\n    {\n        //TODO Test classique d\'une m\xe9thode de service\n        using ApplicationDbContext db = new ApplicationDbContext(_options);\n        CardsService service = new CardsService(db);\n        Card c = new Card()\n        {\n            Id = 4,\n        };\n        service.Add(c);\n        Assert.AreEqual(4, db.Cards.Count());\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"la-couverture-de-code",children:"La couverture de code"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["L'objectif d'avoir une \"couverture de code ",(0,i.jsx)(n.strong,{children:"compl\xe8te"}),"\", c'est que chaque ligne de code de notre application soit ex\xe9cut\xe9 par au moins un test."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"outil-int\xe9ressant",children:"Outil int\xe9ressant"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il y a un outil qui permet de voir la couverture de code directement dans Visual Studio"}),"\n"]}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:(0,i.jsx)(n.img,{alt:"image",src:s(33820).A+"",width:"957",height:"608"})})})})}),"\n",(0,i.jsx)(n.p,{children:"Dans cet exemple:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Les lignes de code en ",(0,i.jsx)(n.strong,{children:"bleu"})," sont couvertes par au moins un test"]}),"\n",(0,i.jsxs)(n.li,{children:["Les lignes de code en ",(0,i.jsx)(n.strong,{children:"rouge"})," ne sont pas couvertes par au moins un test"]}),"\n",(0,i.jsxs)(n.li,{children:["Pour avoir une couverture de tests compl\xe8tes, il faudrait",":L","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Faire un test avec un nombre de matches plus grand que 1 (Premi\xe8re section rouge)"}),"\n",(0,i.jsx)(n.li,{children:"Faire un test avec un nombre de matches \xe9gal \xe0 1 (Deuxi\xe8me section rouge)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"utilisation",children:"Utilisation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pour d\xe9marrer la couverture de code, il faut s\xe9lectionner les tests qui nous int\xe9resse"}),"\n",(0,i.jsx)(n.li,{children:"Ensuite faire Analyser la couverture du code"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Il faut la version ",(0,i.jsx)(n.strong,{children:"Pro"})," pour ex\xe9cuter la couverture du code. ",(0,i.jsx)(n.strong,{children:"\xc7a FONCTIONNE \xe0 l'\xe9cole"}),", mais \xe7a ne fonctionnera pas si vous avez une version ",(0,i.jsx)(n.strong,{children:"Express"}),"."]})}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:(0,i.jsx)(n.img,{alt:"image",src:s(65326).A+"",width:"787",height:"441"})})})})}),"\n",(0,i.jsx)(n.h3,{id:"activiter-ou-d\xe9sactiver-la-coloration-du-code",children:"Activiter ou d\xe9sactiver la coloration du code"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il suffit de cliquer sur un petit bouton dans les r\xe9sultats de la couverture du code"}),"\n"]}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:(0,i.jsx)(n.img,{alt:"image",src:s(93157).A+"",width:"746",height:"622"})})})})}),"\n",(0,i.jsx)(n.h3,{id:"une-autre-fa\xe7on-de-faire-le-setupdispose",children:"Une autre fa\xe7on de faire le setup/Dispose"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pour \xe9viter d'avoir \xe0 \xe9crire un Dispose complexe, on peut cr\xe9er une BD diff\xe9rente pour chaque test en lui donnant un nom diff\xe9rent \xe0 chaque fois"}),"\n",(0,i.jsx)(n.li,{children:"Voici donc une autre option pour votre code de Init et Dispose (pas besoin de constructeur dans ce cas)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'[TestClass]\npublic class CardsServiceTests\n{\n    private ApplicationDbContext _db;\n    \n    [TestInitialize]\n    public void Init()\n    {\n        // En utilisant un nom diff\xe9rent \xe0 chaque fois, on n\'a pas besoin de retirer les donn\xe9es\n        string dbName = "CardsService" + Guid.NewGuid().ToString();\n        // TODO On initialise les options de la BD, on utilise une InMemoryDatabase\n        DbContextOptions<ApplicationDbContext> options = new DbContextOptionsBuilder<ApplicationDbContext>()\n            // TODO il faut installer la d\xe9pendance Microsoft.EntityFrameworkCore.InMemory\n            .UseInMemoryDatabase(databaseName: dbName)\n            .UseLazyLoadingProxies(true) // Active le lazy loading\n            .Options;\n        \n        _db = new ApplicationDbContext(options);\n        \n        // TODO on ajoute des donn\xe9es de tests\n        Card[] cards = new Card[] {\n          new Card\n          {\n              Id = 1,\n              Name = "Chat Dragon",\n              Attack = 5,\n              Defense = 6,\n              Cost = 5,\n              ImageUrl = "https://i.pinimg.com/originals/a8/16/49/a81649bd4b0f032ce633161c5a076b87.jpg"\n          }, new Card\n          {\n              Id = 2,\n              Name = "Chat Awesome",\n              Attack = 2,\n              Defense = 4,\n              Cost = 3,\n              ImageUrl = "https://i0.wp.com/thediscerningcat.com/wp-content/uploads/2021/02/tabby-cat-wearing-sunglasses.jpg"\n          }, new Card\n          {\n              Id = 3,\n              Name = "Chatton Laser",\n              Attack = 4,\n              Defense = 2,\n              Cost = 3,\n              ImageUrl = "https://cdn.wallpapersafari.com/27/53/SZ8PO9.jpg"\n          }\n        };\n        _db.AddRange(cards);\n        _db.SaveChanges();\n    }\n    [TestCleanup]\n    public void Dispose()\n    {\n        _db.Dispose();\n    }\n    [TestMethod]\n    public void AddValidCard()\n    {\n        //TODO Test classique d\'une m\xe9thode de service\n        CardsService service = new CardsService(_db);\n        Card c = new Card()\n        {\n            Id = 4,\n        };\n        service.Add(c);\n        Assert.AreEqual(4, _db.Cards.Count());\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"quoi-tester",children:"Quoi tester?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Nous testerons uniquement les ",(0,i.jsx)(n.strong,{children:"services"})," et les m\xe9thodes ",(0,i.jsx)(n.strong,{children:"HasPower"})," et ",(0,i.jsx)(n.strong,{children:"GetPowerValue"})," pour le Sprint 2 ",(0,i.jsx)(n.strong,{children:"(TP2)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Plus tard, ",(0,i.jsx)(n.strong,{children:"TP3"}),", nous allons \xe9galement apprendre \xe0 \xe9crire des tests pour nos ",(0,i.jsx)(n.strong,{children:"contr\xf4leurs"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},34875:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},33820:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/CouvertureDeCode-7d354c83cbecbdb730159fd87125154d.png"},73782:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/CreerDesTestsUnitaires-877dfe7d4d00ac7738608ba5e4ee94ff.png"},65326:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/OutilCouverture1-7d50f0e868f7cb40dc66f9c7403571bb.png"},93157:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/OutilCouverture2-c72d2fe8cc8e7fe5bc40c44ae801719e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);