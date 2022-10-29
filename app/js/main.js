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
        arrows:false,
    });
})