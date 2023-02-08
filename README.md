Web Application - TD Frontend


J'ai utilisé votre backend

Pour faire tourner le site il suffit de lancer le front et le back en s'assurant que le port du backend soit bien 3000

J'ai réussi à implémenter toutes les US :

    -register/login
    
    -redirection si accès à locations sans authentification
    
    -affichage d'informations relatives à un film en appuyant sur le bouton "detail"
   
    -possibilité d'ajouter un film à la DB (en admin)
    
    -possibilité d'éditer les informations relatives à un film (en admin)
    
    -possibilité de supprimer films (en admin)
  
 
 
 
Feature supplémentaire :

  -un bouton logout qui efface les tokens et redirige vers une page de logout




Plus en de détails, le site, passé l'authentification se compose d'une page location sur laquelle on peut faire toutes les opérations. Il existe 2 versions de cette page admin et visiteur

L'affichage est fait via un tableau dans lequel sont render à chaque ligne des composant "location" qui contiennent les caractéristique d'un film donné
En mode admin il est possible d'éditer directement une location via un form qui s'affiche lorsque le bouton "detail" est pressé, pré-rempli des caractéristiques du film, ou de la supprimer

En mode visiteur on peut simplement afficher une liste contenant les caractéristique

Pour ajouter une location, il suffit d'en mode admin, cliquer sur "Add film" et de remplir le form


 
