let tabImg = document.querySelectorAll("img");


for (let i = 0; i < tabImg.length; i = i + 1) {
  // définir l'action
    function replacePic(e) {
        e.target.src = "pizza.jpg"
    }


   // associe une action (replacePic)
   // sur un event (double click)
   // lié à ma rose
    tabImg[i].addEventListener("dblclick", replacePic)
}
