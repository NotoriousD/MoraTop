$(function(){$(".main-humb").on("click",function(){$(this).toggleClass("is-active"),$(".toggle-humb").addClass("is-active"),$(".toggle-mnu").addClass("active")}),$(".toggle-humb").on("click",function(){$(this).removeClass("is-active"),$(".main-humb").removeClass("is-active"),$(".toggle-mnu").removeClass("active")});var e=$(window).width();if(new LazyLoad({elements_selector:".lazy"}),801<=e){var t=document.getElementById("scene");new Parallax(t,{relativeInput:!0,clipRelativeInput:!0,hoverOnly:!0,scalarY:25,scalarX:25})}if($(document).mouseup(function(e){var t=$(".toggle-mnu");t.is(e.target)||0!==t.has(e.target).length||($(this).removeClass("is-active"),$(".main-humb").removeClass("is-active"),$(".toggle-mnu").removeClass("active"))}),$(window).height()<=768&&($(".toggle-mnu__top").addClass("lang-13d"),$(".toggle-mnu__nav").addClass("nav-13d")),$(window).scroll(function(){var e=$(".boilers__docs");if(parseInt(e.offset().top)-700<$(window).scrollTop()){var t=parseInt($(window).scrollTop()-e.offset().top);(t-=0)<e.height()-$(".bdocs__line").height()&&$(".bdocs__line").css("left",-t)}}),$(window).scroll(function(){var e=$(window).scrollTop();$(".comfort__delivery").offset().top-e<300&&$(".truck").addClass("truck-active")}),e=$(window).width(),1250<$(window).width()&&$(window).scroll(function(){var e=$(".comfort__container"),t=parseInt(e.offset().top)-200;if(parseInt(e.offset().top),t<$(window).scrollTop()){var r=parseInt($(window).scrollTop()-e.offset().top);(r+=150)<e.height()-$(".comfort__name").height()&&$(".comfort__name").css("top",r)}}),1400<e?$(window).scroll(function(){var e=$(".c-slider");if(parseInt(e.offset().top)-200<$(window).scrollTop()){var t=parseInt($(window).scrollTop()-e.offset().top);(t-=0)<e.height()-$(".slider__line").height()&&$(".slider__line").css("left",-t)}}):$(window).scroll(function(){var e=$(".c-slider");if(parseInt(e.offset().top)-700<$(window).scrollTop()){var t=parseInt($(window).scrollTop()-e.offset().top);(t-=0)<e.height()-$(".slider__line").height()&&$(".slider__line").css("left",-t)}}),$(".open-popup").magnificPopup({type:"inline",zoom:{enabled:!0,duration:300,easing:"ease-in-out"}}),$(".all-spec").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(".table__start").toggleClass("table__active"),$(".table__upgrage").toggleClass("table__active")}),$(".tab__block").on("click",function(){$(this).toggleClass("active").siblings(".tab__block").removeClass("active")}),$(".tab__link").on("click",function(e){e.preventDefault();var t=$(this).attr("href");$(this).addClass("active").siblings(".tab__link").removeClass("active"),$(t).addClass("active").siblings(".adds__tab").removeClass("active")}),900<=$(window).width()){var r=document.querySelector('link[id="map"]').import.querySelector(".map-container");document.querySelector(".contact-container").prepend(r),$(".open-tab").on("click",function(e){e.preventDefault();var t=$(this).attr("href");$(this).addClass("open-tab-active").siblings(".open-tab").removeClass("open-tab-active"),$(t).addClass("tab-active").siblings(".map-tab").removeClass("tab-active")})}$("#teleph").mask("+380 (99) 99-99-999"),$("#teleph2").mask("+380 (99) 99-99-999"),$("#teleph5").mask("+380 (99) 99-99-999"),$("#teleph3").mask("+380 (99) 99-99-999"),$("#teleph4").mask("+380 (99) 99-99-999");var a=window.location.pathname.split("/");a.shift(),"ru"==a[0]&&$(".lang-ru").addClass("active").siblings(".lang").removeClass("active"),"ru"==a[0]?($("#form").validate({messages:{username:{required:"Введите Имя"},teleph:{required:"Введите телефон"},teleph1:{required:"Введите телефон"},teleph2:{required:"Введите телефон"},teleph3:{required:"Введите телефон"},teleph4:{required:"Введите телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/ru/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$("#form1").validate({messages:{username:{required:"Введите Имя"},teleph:{required:"Введите телефон"},teleph1:{required:"Введите телефон"},teleph2:{required:"Введите телефон"},teleph3:{required:"Введите телефон"},teleph4:{required:"Введите телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/ru/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$("#form2").validate({messages:{username:{required:"Введите Имя"},teleph:{required:"Введите телефон"},teleph1:{required:"Введите телефон"},teleph2:{required:"Введите телефон"},teleph3:{required:"Введите телефон"},teleph4:{required:"Введите телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/ru/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$("#form3").validate({messages:{username:{required:"Введите Имя"},teleph:{required:"Введите телефон"},teleph1:{required:"Введите телефон"},teleph2:{required:"Введите телефон"},teleph3:{required:"Введите телефон"},teleph4:{required:"Введите телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/ru/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$("#form4, #form5").validate({messages:{username:{required:"Введите Имя"},teleph:{required:"Введите телефон"},teleph1:{required:"Введите телефон"},teleph2:{required:"Введите телефон"},teleph3:{required:"Введите телефон"},teleph4:{required:"Введите телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/ru/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$.validator.messages.required="Заполните поле"):($("#form").validate({messages:{username:{required:"Введіть Ім'я"},teleph:{required:"Введіть телефон"},teleph1:{required:"Введіть телефон"},teleph2:{required:"Введіть телефон"},teleph3:{required:"Введіть телефон"},teleph4:{required:"Введіть телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$("#form1").validate({messages:{username:{required:"Введіть Ім'я"},teleph:{required:"Введіть телефон"},teleph1:{required:"Введіть телефон"},teleph2:{required:"Введіть телефон"},teleph3:{required:"Введіть телефон"},teleph4:{required:"Введіть телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$("#form2").validate({messages:{username:{required:"Введіть Ім'я"},teleph:{required:"Введіть телефон"},teleph1:{required:"Введіть телефон"},teleph2:{required:"Введіть телефон"},teleph3:{required:"Введіть телефон"},teleph4:{required:"Введіть телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$("#form3").validate({messages:{username:{required:"Введіть Ім'я"},teleph:{required:"Введіть телефон"},teleph1:{required:"Введіть телефон"},teleph2:{required:"Введіть телефон"},teleph3:{required:"Введіть телефон"},teleph4:{required:"Введіть телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}),$("#form4, #form5").validate({messages:{username:{required:"Введіть Ім'я"},teleph:{required:"Введіть телефон"},teleph1:{required:"Введіть телефон"},teleph2:{required:"Введіть телефон"},teleph3:{required:"Введіть телефон"},teleph4:{required:"Введіть телефон"}},submitHandler:function(e){var t=$(e).find("input, textarea");$.ajax({type:"POST",url:"/mail.php",data:t,success:function(t){"1"==t?(e.reset(),document.location.href="http://moratop.bogemia.com/dyakuyemo/"):alert("error"),console.log(t)},error:function(e,t){alert(e.responseCode)}})}}))});
$('.to__top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
