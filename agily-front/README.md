# agily-front

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

# Notes à propos du projet

Temps de travail approximatif : 12h

## VueX
L'utilisation de Vuex dans ce projet nous permet une meilleure manipulation de la data.
En effet celle ci devient globale et donc accessible depuis toutes les views / components.


## MomentJS

MomentJS est une bibliothèque indispensable en javascript elle nous permet de manipuler nos dates et de les afficher sous un large choix de format différents. Ici la bibliothèque m'a servi à transformer des DATETIME en format jours mois.

## Computed data

L'utilisation des data computed m'a permis de pouvoir écouter les changements de valeurs de mon state tout le long de la navigation. C'est grâce à ce principe que le changement de fond d'écran s'opère notamment.

## Fond d'écran dynamique

Le fond d'écran dynamique demandé était en fonction de la ville. Après quelques recherches je suis tombé face à l'API places de google malheureusement celle ci retourne des images à des formats différents ce qui complexifie la manipulation.
J'ai donc pris la décision de changer le fond d'écran en fonction des conditions météo.
J'ai récupérer tout les codes des icônes que peut renvoyer l'api et est fait un objet de correspondance où pour un nom d'icônes j'ai un nom d'image préalablement stocké.

## Middleware

J'ai utilisé un middleware pour bloquer l'accès à la page /weather en cas où mon state est vide. L'utilisation de ce principe est le meilleur pour prévenir des comportements non désirés.

## Recommandations

Il serait recommandable de diviser le contenu des vues en components.
Je pense que la logique peut être améliorer.
Et le design à revoir.