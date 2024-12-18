const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let activeIndex = 0;

function showNextImage() {
    // Calcule le déplacement de l'image
    activeIndex = (activeIndex + 1) % carouselItems.length;

    // Déplace le carrousel en fonction de l'indice de l'image active
    carousel.style.transform = 'translateX(-' + (activeIndex * 100) + '%)';
}

// barre d'espace
document.addEventListener('keydown', function(event) {
    if (event.code == 'Space') { 
        showNextImage();
    }
});