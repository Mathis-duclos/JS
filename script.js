
// faire ref à l'image
let maRose = document.querySelector("img");

// ajouter une action sur l'évent mouseover associé à l'image
maRose.addEventListener("dblclick", action);

//définir l'action
function action() {
    alert("Le riz d'Hélène");
}