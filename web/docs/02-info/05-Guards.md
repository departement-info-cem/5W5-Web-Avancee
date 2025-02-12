# Routage et Guards

### Exemple

| ![image](/img/infos/Guards/5W5-s3-re1.jpg) |
| ------------------------------------------ |

```html
<router-outlet></router-outlet>
```

- Dans l'exemple, app.component.html contient un \<router-outlet\> pour charger **HomeComponent**
- home.component.hmtl contient également un \<router-outlet\> pour charger le magasin et "mes cartes"

### Le code

- Il suffit d'ajouter à la route de HomeComponent la propriété children pour ajouter des routes enfants

```ts
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "cards", component: PlayerCardsComponent },
      { path: "store", component: StoreComponent },
    ],
  },
  { path: "**", redirectTo: "/" },
];
```

### Sécurisé certaines routes

- Les Guards permettent de sécuriser des routes
- Dans notre contexte, imaginer devoir s'assurer que l'utilisateur est bien connecté avant d'accéder à une page

```ts
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit() {
    if (!this.logged()) {
      this.router.navigate(["/login"]);
    }
  }
}
```

- Il faudrait sûrement faire le ngOnInit dans chacune de nos pages
- C'est l'automatisation que les Guards permettent de faire

### Générer le Route Guard

- Choisir le type CanActivate

```powershell
ng generate guard
```

### Les types de Guards

- CanActivate
- CanActivateChild
- CanDeactivate

### CanActivate

- Regarde si un utilisateur peut visiter une route

### CanActivateChild

- Regarde si un utilisateur peut visiter une route enfant

#### CanDeactivate

- Regarde si un utilisateur peut quitter une route (changements non sauvegardés)

### Configuration

- On doit placer le guard sur la ou les routes que l'on veut protéger

```ts
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: HomeComponent, canActivate: [apiGuard, otherGuard] },
  { path: "**", redirectTo: "/" },
];
```

```ts
import { inject } from "@angular/core";
import { CanActivateFn, createUrlTreeFromSnapshot } from "@angular/router";
import { PlayerService } from "../services/player.service";
export const apiGuard: CanActivateFn = (route, state) => {
  // On inject le service pour regarder si l'utilisateur est connecté
  if (!inject(PlayerService).isLogged())
    // S'il n'est pas connecté on le redirige vers la page de login
    return createUrlTreeFromSnapshot(route, ["/login"]);
  // S'il est connecté, tout est beau on continue!
  else return true;
};
```

- Si plusieurs guards sont spécifiés dans canActivate (comme apiGuard et otherGuard dans l'exemple précédent), ils sont évalués un à la suite de l'autre.
  - Donc apiGuard est appelé et s'il retourne true, otherGuard est appelé et s'il retourne également true, la route ciblée est atteinte
