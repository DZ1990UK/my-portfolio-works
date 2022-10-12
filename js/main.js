$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
      $(".header__top").addClass("header__top--fixed");
    } else {
      $(".header__top").removeClass("header__top--fixed");
    }
  });

  const headerHeight = $(".header__top").outerHeight();

  $(".header a, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top - headerHeight;
    if (id === "#about") {
      top = top + 100;
    }
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".burger, .menu__list").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  var mixer = mixitup(".works__content");
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
  });

  $(".menu__link").on("click", function () {
    $("nav button").removeClass("burger--active");
  });
});
