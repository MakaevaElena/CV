const slidesPlugin = (activeSlide = 2, className) => {
    // const slides = document.querySelectorAll('.slide');

    const slides = document.querySelectorAll(`${className}`);
    slides[activeSlide].classList.add('active');

    const clearActiveClasses = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }

    slides.forEach((slide) => {
        slide.addEventListener('click', (e) => {
            e.preventDefault();
            clearActiveClasses();
            slide.classList.add('active')
        })
    });
};

slidesPlugin(0, '.sertificate-slide');
slidesPlugin(0, '.project-slide');