# Trucs

## Pour se débarasser du certificat HTTPS corrompu et en générer un nouveau

Dans la **console de gestionnaire de package**

```powershell
dotnet dev-certs https --clean
dotnet dev-certs https --trust
```

## Pour accéder à une page avec un certificat signé localement sur Chrome ou Edge

Taper "thisisunsafe" alors que le focus est sur la page

## Pour accepter les cookies third parties

Si vous avez des erreurs avec un cookie qui est refusé par votre navigateur. C'est possible de forcer le navigateur a l'accepté.
(C'est généralement un problème lorsque le client et le serveur n'ont pas le même domaine et c'est malheureusement le cas avec notre solution de déploiement gratuit)

### Accepter avec Edge

![image](/img/infos/trucs/ChromeCookieBloque1.png)

![image](/img/infos/trucs/ChromeCookieBloque2.png)

### Accepter avec Chrome

![image](/img/infos/trucs/EdgeCookieBloque1.png)

![image](/img/infos/trucs/EdgeCookieBloque3.png)
