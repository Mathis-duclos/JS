// pour gérer les évents, il y a toujours 3 etapes
// 1) savoir sur quel objet on traville (ici le titre H1)
// 2) savoir quelle action on va effectuer (ici afficher une popup)
// 3) savoir quel type d'event on va surveiller (ici le survol de la souris)


// définir l'action
function truc(){
    console.log("Tu redimensionne la page");
}


// définir quel event va déclencher mon action
window.addEventListener("resize",truc)	;

