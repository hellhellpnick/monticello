"use strict";


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
    responsive: [{
      breakpoint: 700,
      settings: {
        dots: false
      }
    }]
  });
}

function SliderLatest() {
  $('.news__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    dotsClass: 'card-dots',
    responsive: [{
      breakpoint: 1175,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    }, {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
  });
}
function navBurger() {
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
}

function switchiListNavigation() {
  let $listNavigationChild = $(".list-navigation__item");
  $(".list-navigation__item-link").on("click", function () {
    $listNavigationChild.removeClass("list-navigation__item-active");
    $(this).parent().addClass("list-navigation__item-active");
  });

};

$(document).on('ready', function () {
  initSlider();
  SliderLatest();
  navBurger();
  switchiListNavigation();
  initMap();
});