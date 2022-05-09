# agily-api

## Project setup
```
yarn install
```

### Compiles and start server
```
yarn start
```

# Notes à propos du projet

Temps de travail approximatif : 4h

## Requêtes

Dans les requêtes j'ai utilisé la déstructuration d'objet JSON pour pouvoir assainir ma data. C'est beaucoup plus pratique que par exemple boucler sur l'objet pour return seulement les variable que l'on désire.

L'utilisation du Try Catch est obligatoire quand il s'agit de Promise cela permet d'intercepter les erreurs ou de traiter la data renvoyé.

L'imbrication des requêtes est à mon sens la manière la plus optimale de réaliser cette opération. En effet le fait que pour pouvoir récupérer la data sur 7 jours n'est possible qu'à partir de la longitude et de la latitude de la ville que l'on recherche nous sommes contraint d'utiliser deux requêtes.

L'imbrication permet de faire les requêtes en deux temps et de renvoyer pour chacune les erreurs au bon moment.

Pour une amélioration future il serait bien de séparer les fichiers dans notre cas nous avons une seule requête ce n'est pas nécessaire.
