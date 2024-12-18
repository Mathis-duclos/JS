
app.js

// lorsque je double click sur n'importe quelle
// alors mon poragramme la remplace par
// une image de tournesol


// faire référence à la premiere image
let maRose = document.querySelector("img");


// faire référence à la seconde image
let maRose2 = document.querySelectorAll("img")[1];


// définir l'action
function replacePic()
{
    maRose.src = "tournesol.jpg"
}


// définir l'action
function replacePic2()
{
    maRose2.src = "tournesol.jpg"
}


// associe une action (replacePic)
// sur un event (double click)
// lié à ma rose
maRose.addEventListener("dblclick", replacePic)
maRose2.addEventListener("dblclick", replacePic2)




// création d'un tableau
let tabFleurs = ["pizza.jpg","sushi.jpg","pancakes.jpg"];
console.log(tabFleurs[0]); // affiche le nom de la premiere fleur dans la console
console.log(tabFleurs[1]); // affiche le nom de la deuxieme fleur dans la console
console.log(tabFleurs[2]); // affiche le nom de la derniere fleur dans la console


// affiche le nombre de fleurs contenues dans le tableau
console.log(tabFleurs.length); // = 3


// affiche le nom de la derniere fleur dans la console
console.log(tabFleurs[tabFleurs.length-1])

// afficher toutes les cellules du tableau de fleurs 
for(let i =0; i<3; i=i+1){
    console.log(tabFleurs[i]); 
}
