"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[9130],{7689:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(5893),r=i(1151);const s={},l="Authentification par Cookies",o={id:"exercices/AuthentificationParCookie",title:"Authentification par Cookies",description:"Utiliser Identity avec MVC",source:"@site/docs/02-exercices/03-AuthentificationParCookie.md",sourceDirName:"02-exercices",slug:"/exercices/AuthentificationParCookie",permalink:"/5W5-Web-Avancee/exercices/AuthentificationParCookie",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/web/docs/02-exercices/03-AuthentificationParCookie.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"exercices",previous:{title:"Les Areas",permalink:"/5W5-Web-Avancee/exercices/Areas"},next:{title:"Relations",permalink:"/5W5-Web-Avancee/exercices/Relations"}},a={},c=[{value:"Utiliser Identity avec MVC",id:"utiliser-identity-avec-mvc",level:2},{value:"Cr\xe9ation du projet (\xc9tape 1)",id:"cr\xe9ation-du-projet-\xe9tape-1",level:2},{value:"Configuration des Cookies (\xc9tape 2)",id:"configuration-des-cookies-\xe9tape-2",level:2},{value:"Configurer les acc\xe8s entre domaines",id:"configurer-les-acc\xe8s-entre-domaines",level:3},{value:"Une fois qu&#39;on met tout ensemble",id:"une-fois-quon-met-tout-ensemble",level:3},{value:"Propri\xe9t\xe9 HttpOnly des Cookie",id:"propri\xe9t\xe9-httponly-des-cookie",level:3},{value:"Configurer les Cookies dans Program.cs",id:"configurer-les-cookies-dans-programcs",level:3},{value:"Ajouter un contr\xf4leur d&#39;API pour les connections (\xc9TAPE 3)",id:"ajouter-un-contr\xf4leur-dapi-pour-les-connections-\xe9tape-3",level:2},{value:"Ajouter un contr\xf4leur d&#39;API appel\xe9 Account",id:"ajouter-un-contr\xf4leur-dapi-appel\xe9-account",level:3},{value:"Injecter les d\xe9pendances",id:"injecter-les-d\xe9pendances",level:3},{value:"Ajouter l&#39;action Register",id:"ajouter-laction-register",level:3},{value:"Ajouter l&#39;action Login",id:"ajouter-laction-login",level:3},{value:"Ajouter l&#39;action Logout",id:"ajouter-laction-logout",level:3},{value:"Angular (\xc9TAPE 4)",id:"angular-\xe9tape-4",level:2},{value:"HTTPS",id:"https",level:3},{value:"Effectuer une requ\xeate Http \xe0 partir d&#39;Angular",id:"effectuer-une-requ\xeate-http-\xe0-partir-dangular",level:3},{value:"Ajouter un interceptor",id:"ajouter-un-interceptor",level:3},{value:"Solution",id:"solution",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"authentification-par-cookies",children:"Authentification par Cookies"}),"\n",(0,t.jsx)(n.h2,{id:"utiliser-identity-avec-mvc",children:"Utiliser Identity avec MVC"}),"\n",(0,t.jsx)(n.h2,{id:"cr\xe9ation-du-projet-\xe9tape-1",children:"Cr\xe9ation du projet (\xc9tape 1)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Cocher "Authentification individuelle"'}),"\n",(0,t.jsx)(n.li,{children:"Par d\xe9faut, Identity est pr\xe9sent et fonctionnel avec l'utilisation de Cookies"}),"\n",(0,t.jsx)(n.li,{children:"L'interface utilisateur est g\xe9n\xe9r\xe9e en utilisant Identity.UI"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-des-cookies-\xe9tape-2",children:"Configuration des Cookies (\xc9tape 2)"}),"\n",(0,t.jsx)(n.h3,{id:"configurer-les-acc\xe8s-entre-domaines",children:"Configurer les acc\xe8s entre domaines"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Il faudra mettre \xe0 jours les autorisations CORS pour inclure l'utilisation de Cookies avec AllowCredentials()"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"    policy.AllowCredentials();\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sp\xe9cifier l'adresse ou les adresses des clients"}),"\n",(0,t.jsx)(n.li,{children:"On ne peut plus accepter toutes les adresses"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'    // Pour utiliser AllowCredentials, il faut sp\xe9cifier les origines accept\xe9s\n    // on ne peut plus utiliser AllowAnyOrigin\n    policy.WithOrigins("http://localhost:4200","https://localhost:4200");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"une-fois-quon-met-tout-ensemble",children:"Une fois qu'on met tout ensemble"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'    builder.Services.AddCors(options =>\n{\n    options.AddPolicy("AllowAlmostAll", policy =>\n    {\n        // On n\'accepte plus toutes les origines\n        //policy.AllowAnyOrigin();\n        // Pour utiliser AllowCredentials, il faut sp\xe9cifier les origines accept\xe9s\n        // on ne peut plus utiliser AllowAnyOrigin\n        policy.WithOrigins("http://localhost:4200","https://localhost:4200");\n        policy.AllowAnyHeader();\n        policy.AllowAnyMethod();\n        // Permettre l\'utilisation des Cookies\n        policy.AllowCredentials();\n    });\n});\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ne pas oublier d'utiliser la configuration qui vient d'\xeatre cr\xe9er"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'    app.UseCors("AllowAlmostAll");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"propri\xe9t\xe9-httponly-des-cookie",children:"Propri\xe9t\xe9 HttpOnly des Cookie"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Par d\xe9faut, les Cookies ont la propri\xe9t\xe9 HttpOnly"}),"\n",(0,t.jsx)(n.li,{children:"HttpOnly signifie qu'on ne peut pas lire les Cookies \xe0 partie de Code Javascript (ou TypeScript)"}),"\n",(0,t.jsx)(n.li,{children:"Nous voudrons donc d\xe9sactiver cette propri\xe9t\xe9 pour avoir le plein contr\xf4le \xe0 partir d'Angular"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configurer-les-cookies-dans-programcs",children:"Configurer les Cookies dans Program.cs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mettre HttpOnly \xe0 false pour qu'Angular puisse voir le Cookie pour valider la connexion \xe0 l'api"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"builder.Services.ConfigureApplicationCookie(options =>\n{\n    options.Cookie.HttpOnly = false;\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ajouter-un-contr\xf4leur-dapi-pour-les-connections-\xe9tape-3",children:"Ajouter un contr\xf4leur d'API pour les connections (\xc9TAPE 3)"}),"\n",(0,t.jsx)(n.h3,{id:"ajouter-un-contr\xf4leur-dapi-appel\xe9-account",children:"Ajouter un contr\xf4leur d'API appel\xe9 Account"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ce contr\xf4leur aura les actions Login, Register et Logout"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"injecter-les-d\xe9pendances",children:"Injecter les d\xe9pendances"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"UserManager pour le Register"}),"\n",(0,t.jsx)(n.li,{children:"SignInManager pour le login"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"UserManager<IdentityUser> userManager;\nSignInManager<IdentityUser> signInManager;\n\npublic AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)\n{\n    this.userManager = userManager;\n    this.signInManager = signInManager;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ajouter-laction-register",children:"Ajouter l'action Register"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Register peut \xeatre exactement le m\xeame code que ce qui \xe9tait fait dans le cours de 4W6"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'[HttpPost]\npublic async Task<ActionResult> Register(RegisterDTO register)\n{\n    if(register.Password != register.PasswordConfirm)\n    {\n        return StatusCode(StatusCodes.Status500InternalServerError, new { Error = "Le mot de passe et la confirmation ne sont pas identique" });\n    }\n\n    DemoUser user = new DemoUser()\n    {\n        UserName = register.UserName,\n        Email = register.Email\n    };\n    IdentityResult identityResult = await this.userManager.CreateAsync(user, register.Password);\n\n    if(!identityResult.Succeeded)\n    {\n        return StatusCode(StatusCodes.Status500InternalServerError, new { Error = identityResult.Errors });\n    }\n\n    return Ok();\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"ajouter-laction-login",children:"Ajouter l'action Login"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Utiliser le SignInManager pour cr\xe9er le Cookie"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var result = await signInManager.PasswordSignInAsync(login.UserName, login.Password, true, lockoutOnFailure: false);\nif(result.Succeeded)\n{\n   return Ok();\n}\n                \nreturn NotFound(new { Error = "L\'utilisateur est introuvable ou le mot de passe de concorde pas" });\n'})}),"\n",(0,t.jsx)(n.h3,{id:"ajouter-laction-logout",children:"Ajouter l'action Logout"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Utiliser le SignInManager pour faire le logout et d\xe9truire le Cookie"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public async Task<ActionResult> Logout()\n{\n    await signInManager.SignOutAsync();\n    return Ok();\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"angular-\xe9tape-4",children:"Angular (\xc9TAPE 4)"}),"\n",(0,t.jsx)(n.h3,{id:"https",children:"HTTPS"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Il est essentiel d'utiliser le serveur en Https"}),"\n",(0,t.jsx)(n.li,{children:"ET de d\xe9marrer Angular en HTTPS"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"ng serve --ssl\n"})}),"\n",(0,t.jsx)(n.h3,{id:"effectuer-une-requ\xeate-http-\xe0-partir-dangular",children:"Effectuer une requ\xeate Http \xe0 partir d'Angular"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xc0 partir d'une requ\xeate de base"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let result = await lastValueFrom(this.http.get<Cat>('https://localhost:7219/api/cats/3'));\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ajouter ensuite l'option withCredentials pour activer l'envoie du Cookie"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let options = { withCredentials:true };\nlet result = await lastValueFrom(this.http.get<Cat>('https://localhost:7219/api/cats/3', options));\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ajouter-un-interceptor",children:"Ajouter un interceptor"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automatiser l'ajout des options avec un interceptor"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {\n  request = request.clone({ withCredentials: true });\n  return next.handle(request);\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\ud83d\udd17",(0,t.jsx)(n.a,{href:"https://github.com/CEM-420-5W5/CookieAuthentication",children:"Solution .Net"})]}),"\n",(0,t.jsxs)(n.li,{children:["\ud83d\udd17",(0,t.jsx)(n.a,{href:"https://github.com/CEM-420-5W5/ngCookieAuthentication",children:"Solution Angular"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var t=i(7294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);