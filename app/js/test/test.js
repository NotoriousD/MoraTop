$(function () {

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

	if (windowW > 600) {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 700) {
				var scale_tween = TweenMax.to('#about-img', 1, {
					transform: 'translate(81px,-90px)',
					ease: Linear.easeNone,
				});
				var scale_tween = TweenMax.to('#about-img-top', 1, {
					transform: 'translate(-21px,-42px)',
					ease: Linear.easeNone,
				});
			} else if ($(window).scrollTop() > 2000) {
				var scale_tween = TweenMax.to('#about-img', 1, {
					transform: 'translate(0, 0)',
					ease: Linear.easeNone,
				});
				var scale_tween = TweenMax.to('#about-img-top', 1, {
					transform: 'translate(0, 0)',
					ease: Linear.easeNone,
				});
			}
		});
	} else if (windowW < 600) {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 500) {
				var scale_tween = TweenMax.to('#about-img', 1, {
					transform: 'translate(21px,-42px)',
					ease: Linear.easeNone,
				});
				var scale_tween = TweenMax.to('#about-img-top', 1, {
					transform: 'translate(-21px,-42px)',
					ease: Linear.easeNone,
				});

			} else if ($(window).scrollTop() > 2000) {
				var scale_tween = TweenMax.to('#about-img', 1, {
					transform: 'translate(0, 0)',
					ease: Linear.easeNone,
				});
				var scale_tween = TweenMax.to('#about-img-top', 1, {
					transform: 'translate(0, 0)',
					ease: Linear.easeNone,
				});
			}
		});
	}

	if (windowW < 1000) {
		$('.map-tab').on('click', function () {
			$(this).toggleClass('tab-toggle').siblings('.map-tab').removeClass('tab-toggle');
		});
	}

	$('.all-spec1').on('click', function (e) {
		e.preventDefault();
		$('.ts1').toggleClass('table__active');
		$('.tu1').toggleClass('table__active');
	});

	$(".tab__link").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr("href");
		$(this).addClass("active").siblings(".tab__link").removeClass("active");
		$(id).addClass("active").siblings(".adds__tab").removeClass("active");
	});


	$('.open-popup').magnificPopup({
		type: 'inline',
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function
		}
	});

	$('.tab__block').on('click', function () {
		$(this).toggleClass('active').siblings('.tab__block').removeClass('active');
	});

	$(window).scroll(function () {
		var sect = $('.scene__container');
		var block = parseInt(sect.offset().top) - 200;
		var block2 = parseInt(sect.offset().top) + 300;
		if (block < $(window).scrollTop()) {
			var tops = parseInt($(window).scrollTop() - sect.offset().top);
			tops += 320;
			if (tops < sect.height() - $(".scene__name").height()) {
				$(".scene__name").css("top", tops);
			}
		}
		if (block2 < $(window).scrollTop()) {
			$('.scene-title1').removeClass('active');
			$('.scene-title2').addClass('active');
		} else {
			$('.scene-title1').addClass('active');
			$('.scene-title2').removeClass('active');
		}
	});

	var hr = window.location.pathname;
	var ars = hr.split('/');
	ars.shift();

	if (ars[0] == 'ru') {
		$('.lang-ru').addClass('active').siblings('.lang').removeClass('active');
	}

	if (ars[0] == 'ru') {
		$("#form").validate({
			messages: {
				username: {
					required: "Введите Имя"
				},
				teleph: {
					required: "Введите телефон"
				},
				teleph1: {
					required: "Введите телефон"
				},
				teleph2: {
					required: "Введите телефон"
				},
				teleph3: {
					required: "Введите телефон"
				},
				teleph4: {
					required: "Введите телефон"
				},
			},
			submitHandler: function (form) {
				var msg = $(form).find('input, textarea');
				$.ajax({
					type: 'POST',
					url: '/mail.php',
					data: msg,
					success: function (data) {
						if (data == '1') {
							form.reset();
							document.location.href = "http://moratop.bogemia.com/ru/dyakuyemo/";
						} else {
							alert("error");
						}
						console.log(data);
					},
					error: function (xhr, str) {
						alert(xhr.responseCode);
					}
				});
			}

		});
		$.validator.messages.required = 'Заполните поле';
	} else {
		$("#form").validate({
			messages: {
				username: {
					required: "Введіть Ім'я"
				},
				teleph: {
					required: "Введіть телефон"
				},
				teleph1: {
					required: "Введіть телефон"
				},
				teleph2: {
					required: "Введіть телефон"
				},
				teleph3: {
					required: "Введіть телефон"
				},
				teleph4: {
					required: "Введіть телефон"
				},
			},
			submitHandler: function (form) {
				var msg = $(form).find('input, textarea');
				$.ajax({
					type: 'POST',
					url: '/mail.php',
					data: msg,
					success: function (data) {
						if (data == '1') {
							form.reset();
							document.location.href = "http://moratop.bogemia.com/dyakuyemo/";
						} else {
							alert("error");
						}
						console.log(data);
					},
					error: function (xhr, str) {
						alert(xhr.responseCode);
					}
				});
			}

		});
	}

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



	$("#teleph").mask("+380 (99) 99-99-999");

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy"
	});

	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene, {
		relativeInput: true,
		clipRelativeInput: true,
		hoverOnly: true,
		scalarY: 25,
		scalarX: 25,
	});

	var windowW = $(window).width();

	if ($(window).width() > 1250) {
		$(window).scroll(function () {
			var sect = $('.comfort__container');
			var block = parseInt(sect.offset().top) - 200;
			var block2 = parseInt(sect.offset().top) + 300;
			if (block < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops += 150;
				if (tops < sect.height() - $(".comfort__name").height()) {
					$(".comfort__name").css("top", tops);
				}
			}
		});
	}

	if (windowW > 1400) {
		$(window).scroll(function () {
			var sect = $('.c-slider');
			var slider = parseInt(sect.offset().top) - 200;
			if (slider < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops -= 0;
				if (tops < sect.height() - $(".slider__line").height()) {
					$(".slider__line").css("left", -tops);
				}
			}
		});
	} else {
		$(window).scroll(function () {
			var sect = $('.c-slider');
			var slider = parseInt(sect.offset().top) - 700;
			if (slider < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops -= 0;
				if (tops < sect.height() - $(".slider__line").height()) {
					$(".slider__line").css("left", -tops);
				}
			}
		});
	}

	$(window).scroll(function () {
		var sect = $('.boilers__docs');
		var slider = parseInt(sect.offset().top) - 700;
		if (slider < $(window).scrollTop()) {
			var tops = parseInt($(window).scrollTop() - sect.offset().top);
			tops -= 0;
			if (tops < sect.height() - $(".bdocs__line").height()) {
				$(".bdocs__line").css("left", -tops);
			}
		}
	});

	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop(),
			elementOffset = $('.comfort__delivery').offset().top,
			distance = (elementOffset - scrollTop);
		if (distance < 300) {
			$('.truck').addClass('truck-active');
		}
	});

	var windowWidth = $(window).width();

	if (windowWidth >= 900) {
		setTimeout(function () {
			var doc = document.querySelector('link[id="map"]').import;
			var text = doc.querySelector('.map-container');
			document.querySelector('.contact-container').insertAdjacentHTML('afterbegin', text);
			$(".open-tab").on("click", function (e) {
				e.preventDefault();
				var id = $(this).attr("href");
				$(this).addClass("open-tab-active").siblings(".open-tab").removeClass("open-tab-active");
				$(id).addClass("tab-active").siblings(".map-tab").removeClass("tab-active");
			});
		}, 1000)
	}

	$('.to__top').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

});
