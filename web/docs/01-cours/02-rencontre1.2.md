---
title: 1.2 - Auth. et déboguage 🪙
hide_table_of_contents: true
---

import SlidePage from '@site/src/components/SlidePage';

# 1.2 - Authentification par token et déboguage 🪙

:::tip Conseil de la séance

Un des avantages les plus intéressants de l'informatique, c'est qu'on peut essayer des milliers de choses sans avoir à ne rien dépenser!

Quand on compare à la mécanique, la chimie, l'électronique, etc. On peut simplement télécharger des librairies et les essayer!

N'hésitez pas à modifier les exemples fournis, à suivre des tutoriels, à essayer des choses. C'est la meilleure façon **d'apprendre à apprendre!**

:::

<iframe 
  src="/5W5-Web-Avancee/slides/Rencontre_1_2.html" 
  width="100%" 
  height="800px" 
  style={{ border: 'none' }} 
  allowFullScreen 
/>

## Info

[Bonnes pratiques avec Git/GitHub](/info/BonnesPratiquesGit)


### Exercices

[Authentification par token avec MVC et React](/exercices/AuthentificationParToken)

### Truc avec update-database et add-migration

Si vous avez l'erreur suivante:

:::danger
L’exécution de la commande s’est arrêtée, car la variable de préférence « ErrorActionPreference » ou le paramètre courant a la valeur Stop : System.Management.Automation.RemoteException
:::

Ajoutez -ErrorAction Continue à votre commande:

```powershell
update-database -ErrorAction Continue
```

:::info
Ça ne va probablement pas régler votre erreur, MAIS ça va vous donner assez d'information pour la régler!
:::

