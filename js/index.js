import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'


const gallery = new Swiper('.gallery__slider', {

    // Navigation arrows
    navigation: {
        nextEl: '.gallery-slider-next',
        prevEl: '.gallery-slider-prev',
    },
    loop: true,
    slidesPerView: 2.2,
    spaceBetween: 80,
    centeredSlides: true,
    transformEl: null


});
const expert = new Swiper('.gallery__expert', {

    // Navigation arrows
    navigation: {
        nextEl: '.gallery__expert-next',
        prevEl: '.gallery__expert-prev',
    },
    pagination: {
        el: '.gallery__expert-pagination',
    },
    loop: true,
    slidesPerView: 1,

    centeredSlides: true,



});
const presentation = new Swiper('.slider-top', {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    slidesPerView: 1,

    centeredSlides: true,



});
const presentationBottom = new Swiper('.slider-bottom', {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    slidesPerView: 3.5,
    spaceBetween: 30,
    centeredSlides: true,



});