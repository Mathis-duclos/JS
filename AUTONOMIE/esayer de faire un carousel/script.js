let tabImg = document.querySelectorAll("img");

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowLeft") { 
        replacePic(); // si j'appuie à gauche
    } else if (event.key == "ArrowRight") { 
        replacePic2(); //si on appuie à droite
    }
});

function replacePic() {
/* On declare une variable pour pouvoir stocker l'image car elle va se faire remplacer
apres quand le caroussel va tourner, et on va la perdre et c'est pas cool */
    let tempo = tabImg[tabImg.length - 5].src;

    // Décale les images vers la gauche
    tabImg[tabImg.length - 5].src = tabImg[tabImg.length - 4].src;
    tabImg[tabImg.length - 4].src = tabImg[tabImg.length - 3].src;
    tabImg[tabImg.length - 3].src = tabImg[tabImg.length - 2].src;
    tabImg[tabImg.length - 2].src = tabImg[tabImg.length - 1].src;
    tabImg[tabImg.length - 1].src = tempo; // et ici on utilise la variable car -5 a DÉJÀ été remplacée
}

function replacePic2() {
    let tempo = tabImg[tabImg.length - 1].src;
    // Décale les images vers la droite
    tabImg[tabImg.length - 1].src = tabImg[tabImg.length - 2].src;
    tabImg[tabImg.length - 2].src = tabImg[tabImg.length - 3].src;
    tabImg[tabImg.length - 3].src = tabImg[tabImg.length - 4].src;
    tabImg[tabImg.length - 4].src = tabImg[tabImg.length - 5].src;
    tabImg[tabImg.length - 5].src = tempo;
}