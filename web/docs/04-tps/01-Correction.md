# Correction

### Pondération
- Chaque TP représente 20% de la note final

- 8% de la note est une évaluation du travail d'équipe. Chaque TP à sa propre grille d'évaluation pour le travail d'équipe.

- 12% de la note est une évaluation du travail individuel. Chaque TP mentionne les requis pour chacune des 4 sections du travail à faire pour un TP.

- Un étudiant est évalué pour une de ces 4 sections et doit faire une démonstration des fonctionnalités à l'enseignant, ainsi que répondre à ces questions pendant son évaluation.

### Grille de correction général pour la section individuelle

| Le projet est excellent. | Le projet est bien. | Le projet est passable. | Le projet est très faible. |
|---|---|---|---|
| Les points énumérés dans l’énoncé ont tous été complétés. | Les points énumérés dans l’énoncé ont été complétés en majorité et les fonctionnalités ont été réalisés avec une grande qualité.| Plusieurs points énumérés dans l’énoncé ont été complétés et les fonctionnalités ont été réalisés avec une bonne qualité.| De nombreux points énumérés dans l’énoncé n’ont pas été complétés. |
| **ET** Les fonctionnalités ont été réalisés avec une grande qualité. | **Ou** les points énumérés dans l’énoncé ont pratiquement tous été complétés, mais le fonctionnement pourrait être mieux. | **Ou** les points énumérés dans l’énoncé ont été complétés en majorité, mais le fonctionnement pourrait être mieux. | **Ou** la qualité des fonctionnalités était insatisfaisante. |
| 12 | 10 à 11 | 7 à 9 | 0 à 6 |

### Information supplémentaire pour les différentes sections

#### Angular
- Découplage vue code
    - Il n'y a pas de traitement dans les vues
- Structure du projet client
    - Appels HTTP regroupés (service)
    - Structure et noms homogènes et standards
    - Lisibilité du code (1 fonction < 1 page, etc.)
- Stabilité
    - Crash application
    - Données toujours à jour
- Sécurité
    - Gestion de l'utilisateur
    - Utilisation des données du joueur
    - Manipulation des données de la partie
- Interface utilisateur
    - Messages d'erreur (indique clairement une solution)

#### Web API
- Persistance des données
    - Utilisation d'Entity Framework et des services
    - Modélisation des données
    - Gestion des droits d'accès
    - Accès aux données
- Code serveur
    - Validation des données
    - Définition d'exceptions appropriées
- Tests serveur **(Sauf pour TP1)**
    - Stratégie de test
    - Couverture complète de la fonctionnalité
    - Tester les cas limites du type et de la logique
    - Tester les exceptions
- Structure du code / standards
    - Découpage en couches (avec services)
    - Lisibilité du code (1 fonction < 1 page, commentaires etc.)
    - Structure et noms homogènes et respect des standards
    - Code factorisé (Réutilisation du code, encapsulation, dépendances minimales)
    - Utilisation adéquate de l'injection de dépendance
    - Utilisation appropriée des types abstraits et des interfaces

#### MVC
- Persistance des données
    - Utilisation d'Entity Framework et des services
    - Gestion des droits d'accès
- Code serveur
    - Validation des données
    - Définition d'exceptions appropriées
- Tests serveur **(Sauf pour TP1)**
    - Stratégie de test
    - Couverture complète de la fonctionnalité
    - Tester les cas limites du type et de la logique
    - Tester les exceptions
- Structure du code / standards
    - Découpage en couches (avec services)
    - Cohabitation avec Web API
    - Lisibilité du code (1 fonction < 1 page, commentaires etc.)
    - Structure et noms homogènes et respect des standards
    - Code factorisé (Réutilisation du code, encapsulation, dépendances minimales)
    - Utilisation adéquate de l'injection de dépendance
    - Utilisation appropriée des types abstraits et des interfaces
- Découplage vue code
    - Il n'y a pas de traitement dans les vues
- Stabilité
    - Pas de crash de l'application
    - Données toujours à jour
- Interface utilisateur
    - Messages d'erreur (indique clairement une solution)





