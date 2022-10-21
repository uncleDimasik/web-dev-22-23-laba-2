$(function () {

    $('.icon-menu').on('click', function () {
        $('body').toggleClass('lock');
        $('.icon-menu').toggleClass('menu-open');
        $('.menu__body').toggleClass('menu-open');
    })

})