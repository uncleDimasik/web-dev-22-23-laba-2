const da = new DynamicAdapt("max");
da.init();

$(function () {
    $('.icon-menu').on('click', function () {
        $('.wrapper').toggleClass('_lock');
        $('.icon-menu').toggleClass('menu-open');
        $('.menu__body').toggleClass('menu-open');
    })
})