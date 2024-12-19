//faire ref à l'image

//ma rose est un objet qui continet une hateur, une largeur, une position, un src
let maRose = document.querySelector("img"); 

/* si on veut la deuxieme on fait ça 
maRose = document.querySelectorAll("img")[1];
querySelectorAll("img") va selectionner 
TOUTES les images et renvoyer un tableau donc
on va lui demander l'image à l'index 1 du tableau 
c-à-d la 2e image, car on commnce à compter à partir de 0 */

function replacePic()
{
    maRose.src = "sushi.jpg"; 
}

// associe l'action replacepic a l'event double click lié à marose
maRose.addEventListener("dblclick" , replacePic)