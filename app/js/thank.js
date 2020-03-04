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
    $('.to__top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});