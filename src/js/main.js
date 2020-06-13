function initSlider() {
    $('.header__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true
    });
}

$(document).on('ready', function () {
    initSlider();

    $('.news__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right"),
    });
});