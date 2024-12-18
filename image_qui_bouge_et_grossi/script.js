// Sélection de l'image
let maRose = document.querySelector("img");
let myBody = document.body;

// Position relative de l'image
maRose.style.position = "relative";
maRose.style.top = "0px";

// Fonction pour déplacer l'image vers le bas avec une touche
function toto() {
    maRose.style.top = 5 + Number(maRose.style.top.substring(0, maRose.style.top.length - 2)) + "px";
}

// Fonction pour agrandir l'image au clic
function grossir() {
    let currentWidth = maRose.offsetWidth; // Largeur actuelle de l'image
    let currentHeight = maRose.offsetHeight; // Hauteur actuelle de l'image
    maRose.style.width = currentWidth * 1.1 + "px"; // Augmente la largeur de 10%
    maRose.style.height = currentHeight * 1.1 + "px"; // Augmente la hauteur de 10%
}

// Ajout des événements
myBody.addEventListener("keydown", toto); // Déplacement au clavier
maRose.addEventListener("click", grossir); // Grossissement au clic

let tabFleurs = ["pizza.jpg", "sushi.jpg", "riz.jpg"];

console.log(tabFleurs[tabFleurs.length-1])