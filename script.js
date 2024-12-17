// Sélectionner l'image (par exemple, avec un ID spécifique ou un sélecteur CSS)
const maRose = document.getElementById("maRose");

// Ajouter un événement pour détecter le double-clic
maRose.addEventListener("dblclick", function () {
    // Remplacer la source de l'image par une autre
    maRose.src = "pizza.jpg"; // Remplace "image2.jpg" par le chemin de la nouvelle image
});