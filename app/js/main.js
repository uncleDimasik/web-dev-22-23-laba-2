const da = new DynamicAdapt("max");
da.init();

$(function () {

    $('.icon-menu').on('click', function () {
        $('.wrapper').toggleClass('_lock');
        $('.icon-menu').toggleClass('menu-open');
        $('.menu__body').toggleClass('menu-open');
        $('.catalog__item').toggleClass('active');
        $('.review-slider').toggle('review-slider');
    })
    $('.review-slider').slick({
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1000,
        values: [75, 300],
        slide: function (event, ui) {
            $("#price-from").val("£" + ui.values[0]);
            $("#price-to").val("£" + ui.values[1]);
        }
    });
    $("#price-from").val("£" + $("#slider-range").slider("values", 0));
    $("#price-to").val("£" + $("#slider-range").slider("values", 1));
})


