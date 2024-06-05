let index = 0;

function changeSlide() {
    const slides = document.querySelector('.slides');
    index = (index + 1) % 2; // Alterna entre 0 e 1
    slides.style.transform = `translateX(${-index * 1363}px)`;
}

setInterval(changeSlide, 5000);
