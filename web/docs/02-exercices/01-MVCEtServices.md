# Utiliser Web API et MVC dans le même projet

## Exercice de gestion de chats! 🐈

### Créer une application MVC pour gérer des chats!!
- Ajouter l'authentification avec comptes individuels lors de la création du projet

###  Ajouter votre classe de chat
- Un chat doit au minimum avoir un nom et une image
- L'image doit être une Url (string) pour simplifier l'application

### Générer contrôleur et vues pour faire la gestion des chats
- Utiliser la génération de code (Scaffolding) pour générer un contrôleur MVC et les vues
- Sécuriser le contrôleur (Authorize) pour restreindre l'accès aux utilisateurs avec le rôle Admin
- Dans les vues de détails, d'index et de suppression, afficher l'image du chat plutôt que l'Url

### Ajouter un Seed
- Ajouter au minimum un chat
- Ajouter le rôle Admin
- Ajouter un utilisateur et affecter lui le rôle Admin

### Important pour le Seed
- Mettre le mot de passe confirmé à true
```csharp
            var hasher = new PasswordHasher<IdentityUser>();
            IdentityUser admin = new IdentityUser
            {
                Id = "11111111-1111-1111-1111-111111111111",
                UserName = "admin@admin.com",
                Email = "admin@admin.com",
                // La comparaison d'identity se fait avec les versions normalisés
                NormalizedEmail = "ADMIN@ADMIN.COM",
                NormalizedUserName = "ADMIN@ADMIN.COM",
                EmailConfirmed = true,
                // On encrypte le mot de passe
                PasswordHash = hasher.HashPassword(null, "Passw0rd!")
            };
```

### Ou changer la configuration d'Identity dans Program.cs
```csharp
// TODO remove options
builder.Services.AddDefaultIdentity<IdentityUser>()
```

### Ajouter la prise en charge des rôles
```csharp
builder.Services.AddDefaultIdentity<IdentityUser>()
    // TODO Attention! AddRole doit être avant AddEntityFrameworkStores
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();
```    

## WEB API

### Exercice de gestion de chats! 🐈
- Ajouter un contrôleur Web API
- Utiliser le Scaffolding pour ajouter un contrôleur Web API à partir du modèle de chat
- Laisser seulement les actions Get
- Tester votre API
- Utiliser Postman pour tester le fonctionnement de API

## APPLICATION ANGULAR

### Exercice de gestion de chats! 🐈
- Créer l'application Angular
- Lister tous les chats présents dans la BD
- Ajouter l'accès entre différents domaines pour Web API
- Ajouter les autorisations CORS