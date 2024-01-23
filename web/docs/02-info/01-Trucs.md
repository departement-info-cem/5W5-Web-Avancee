# Trucs

### Pour se débarasser du certificat HTTPS corrompu et en générer un nouveau
Dans la **console de gestionnaire de package**

```powershell
dotnet dev-certs https --clean
dotnet dev-certs https --trust
```

### Pour accéder à une page avec un certificat signé localement sur Chrome ou Edge
Taper "thisisunsafe" alors que le focus est sur la page

### Pour travailler avec Angular version 17
Lors de la création du projet, forcez l'utilisation de app.module.ts avec l'option --no-standalone

```powershell
ng new --no-standalone ngNomDuProjet
```
