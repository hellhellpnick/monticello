function initSlider() {
    $('.header__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: false,
        vertical: true,
        nextArrow: $(".arrow-down"),
        dotsClass: 'slick-dots',
    });
}

function SliderLatest() {
    $('.news__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right"),
        dotsClass: 'card-dots',
    });
}

$(document).on('ready', function () {
    initSlider();
    SliderLatest();
    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});