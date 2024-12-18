let images = document.querySelectorAll(".image");

function imageclic(img) {
    if (img == 1) {
        images[0].style.left = "50%";
        images[0].style.zIndex = "30";
        images[0].style.width = "250px";
        images[2].style.left = "60%";
        images[2].style.zIndex = "10";
        images[2].style.width = "200px";
        images[1].style.left = "40%";
        images[1].style.zIndex = "20";
        images[1].style.width = "225px";
    }

    if (img == 2) {
        images[1].style.left = "50%";
        images[1].style.zIndex = "30";
        images[1].style.width = "250px";
        images[0].style.left = "60%";
        images[0].style.zIndex = "10";
        images[0].style.width = "200px";
        images[2].style.left = "40%";
        images[2].style.zIndex = "20";
        images[2].style.width = "225px";
    }

    if (img == 3) {
        images[2].style.left = "50%";
        images[2].style.zIndex = "30";
        images[2].style.width = "250px";
        images[1].style.left = "60%";
        images[1].style.zIndex = "10";
        images[1].style.width = "200px";
        images[0].style.left = "40%";
        images[0].style.zIndex = "20";
        images[0].style.width = "225px";
    }
}