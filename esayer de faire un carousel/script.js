let tabImg = document.querySelectorAll("img");
alert("lkjhgjklkjhgf")

for (let i = 0; i < tabImg.length; i = i + 1) {
  // définir l'action
    function replacePic(e) {
        e.target.src = "pancakes.jpg"
    }


   // associe une action (replacePic)
   // sur un event (double click)
   // lié à ma rose
    tabImg[i].addEventListener("click", replacePic)
}
