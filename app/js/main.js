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
    $('.product-slider').slick({
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: "<div class='a-left control-c prev slick-prev'><svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 320 512\">\n" +
            "    <path d=\"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z\"/>\n" +
            "</svg></div>",
        nextArrow: "<div class='a-right control-c next slick-next'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\">\n" +
            "    <path d=\"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z\"/>\n" +
            "</svg></div>"
    });

    $("[data-background-color]").each(function (index, el) {
        let $el = $(el);
        let data = $el.data();
        $el.css(data);
    });

    let dropdownColor = new DropDown($('#dropdownColor'));
    let dropdownSize = new DropDown($('#dropdownSize'));
    $(document).click(function () {
        $('.wrapper-dropdown').removeClass('active');
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


function DropDown(el) {
    console.log(el)
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        let obj = this;

        obj.dd.on('click', function () {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.html(opt[0].innerHTML);
        });
    }
}
