const sliderText = document.querySelectorAll('.reviews__item'),
    sliderList = document.querySelector('.reviews__list'),
    sliderDots = document.querySelectorAll('.reviews__dot'),
    sliderBtnNext = document.querySelector('.slider__btn-next'),
    sliderBtnPrev = document.querySelector('.slider__btn-prev');

//Переменные
let sliderCount = 0,
    sliderWidth;

//Адаптивность слайдера
window.addEventListener('resize', showSlide);
console.log ();

// Кнопки листания слайдов вперёд назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// Функции
// Задает нужную ширину картинки и SliderList
function showSlide() {
    sliderWidth = document.querySelector('.reviews__wrapper').offsetWidth;
    sliderList.style.width = sliderWidth * sliderText.length + 'px';
    sliderText.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

//Перелистывает слайд вперёд
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderText.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

//Перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderText.length -1;

    rollSlider();
    thisSlide(sliderCount);
}


// Задает шаг перемещения слайдов
function rollSlider() {
    sliderList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

//Указывает какой слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}


// Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
     sliderCount = index;
     rollSlider();
     thisSlide(sliderCount);
  })
})