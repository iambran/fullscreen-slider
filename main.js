const allSlides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > allSlides.length - 1) {
        activeSlide = 0;
    }

    showActiveSlide();
})

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = allSlides.length - 1;
    }

    showActiveSlide();
})

function showActiveSlide() {

    allSlides.forEach((slide) => slide.classList.remove('active'));

    allSlides[activeSlide].classList.add('active');
}