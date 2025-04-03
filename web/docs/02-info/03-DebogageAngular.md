# Déboguage Angular

### Créer une nouvelle configuration

- On clique sur le bouton de déboguage à la gauche
- Et on ajoute une configuration

| ![image](/img/infos/nouvelleConfiguration.png) |
| ---------------------------------------------- |

- Il faut choisir Chrome: Launch (Ou un autre navigateur)

| ![image](/img/infos/nouvelleConfiguration2.png) |
| ----------------------------------------------- |

- Assurez-vous d'avoir le **bon port**

```csharp
{
    "name": "Launch Chrome",
    "request": "launch",
    "type": "chrome",
    "url": "http://localhost:4200",
    "webRoot": "${workspaceFolder}"
}
```

- On peut alors sélectionner notre configuration
- Et démarrer le navigateur pour déboguer

| ![image](/img/infos/starting.png) |
| --------------------------------- |

- Si on a mis un breakpoint, l'exécution va se bloquer et l'on pourra inspecter notre code

| ![image](/img/infos/breakpoint.png) |
| ----------------------------------- |
