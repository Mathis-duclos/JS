let image = document.getElementById('image');

image.ondblclick = function() {
    if (image.src.match("pizza.jpg")) {
        image.src = "suhsi.jpg";
    } else {
        image.src = "pizza.jpg";
    }
};