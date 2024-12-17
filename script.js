maRose = document.querySelector("img");

maRose.addEventListener("dblclick", toto)

function toto()
{

    if (maRose.src.endsWith("sushi.jpg"))
            maRose.src = "pizza.jpg" ;
    else 
        maRose.src = "sushi.jpg" ;

}