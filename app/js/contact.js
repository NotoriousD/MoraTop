$(function(){

    $('.main-humb').on('click', function () {
        $(this).toggleClass('is-active');
        $('.toggle-humb').addClass('is-active');
        $('.toggle-mnu').addClass("active");
    });

    $('.toggle-humb').on('click', function () {
        $(this).removeClass('is-active');
        $('.main-humb').removeClass('is-active');
        $('.toggle-mnu').removeClass("active");
    });

    var windowW = $(window).width();

    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".toggle-mnu"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(this).removeClass('is-active');
            $('.main-humb').removeClass('is-active');
            $('.toggle-mnu').removeClass("active");
        }
    });

    var wh = $(window).height();

    if (wh <= 768) {
        $('.toggle-mnu__top').addClass('lang-13d');
        $('.toggle-mnu__nav').addClass('nav-13d');
    }

    var windowWidth = $(window).width();

    if (windowWidth >= 900) {
        var doc = document.querySelector('link[id="map"]').import;
        var text = doc.querySelector('.map-container');
        document.querySelector('.contact-container').prepend(text);
        $(".open-tab").on("click", function (e) {
            e.preventDefault();
            var id = $(this).attr("href");
            $(this).addClass("open-tab-active").siblings(".open-tab").removeClass("open-tab-active");
            $(id).addClass("tab-active").siblings(".map-tab").removeClass("tab-active");
        });
    }

    $('.map-tab').on('click', function () {
        $(this).toggleClass('tab-toggle').siblings('.map-tab').removeClass('tab-toggle');
    });
    $('.to__top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});