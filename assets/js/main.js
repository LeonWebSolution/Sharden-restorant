$(document).ready(function () {
  $(".menu-btn").click(function() {
    $(".navigation-page__menu").toggleClass("active");
    $(this).toggleClass("active");
    $("body").toggleClass("hidden");
});

$(".btn-close__menu").click(function() {
    $(".navigation-page__menu").removeClass("active");
    $(".menu-btn").removeClass("active");
    $("body").removeClass("hidden");
});
    $(".search-btn").click(function () {
        $(this).addClass("close");
        $(".search-block").addClass("active");
        $(".search-btn-close").addClass("active");
    });
    $(".search-btn-close").click(function () {
        $(this).removeClass("active");
        $(".search-block").removeClass("active");
        $(".search-btn").removeClass("close");
    });

    $('.new-slider').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768, // Ширина экрана 768px и выше
              settings: {
                slidesToShow: 3, // Отображать 3 слайда
              }
            },
            {
                breakpoint: 520, // Ширина экрана 768px и выше
                settings: {
                  slidesToShow: 2, // Отображать 3 слайда
                }
              }
          ]
      });
});


