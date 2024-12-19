// pour gérer les évents, il y a toujours 3 etapes
// 1) savoir sur quel objet on traville (ici le titre H1)
// 2) savoir quelle action on va effectuer (ici afficher une popup)
// 3) savoir quel type d'event on va surveiller (ici le survol de la souris)


// création d'une référence sur h1 (un objet html depuis js)
let monTitre = document.querySelector("h1");;


// définir l'action
function affichePopup(){
    alert("Tu survoles le titre h1");
}


// définir quel event va déclencher mon action
monTitre.addEventListener("mouseover",affichePopup)	;

