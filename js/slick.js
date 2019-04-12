$(document).ready(function () {
    $('.kar-right').slick({
        prevArrow:'<div class="arrow-left"><svg class="karusel-arrow-left"><use xlink:href="#arrow-left-karusel"></use></svg></div>',
        nextArrow:'<div class="arrow-right"><svg class="karusel-arrow-right"><use xlink:href="#arrow-right-karusel"></use></svg></div>',
        arrows:false,
        dotsClass: "dots-karusel",
        dots:true,
        responsive: [
            {breakpoint: 1300,
                settings: {
                    arrows:true,
                    dots:false
                }
            },
            {breakpoint: 768,
                settings: {
                    arrows:false,
                    dots:false,
                    autoplay:true,
                    speed:100
                }
            }
        ]
    });

});

$(document).ready(function () {
    $('.fade').slick({
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 200,
        fade: true,
        arrows:false,
        cssEase: 'linear',
        responsive: [
            {breakpoint: 992,
                settings: {
                    dots: false
                }
            }
        ]
    });
});