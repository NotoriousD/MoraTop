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
	})

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
			var line = $('.slider__line');
			var slider = parseInt(sect.offset().top) - 200;
			if (slider < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops -= 0;
				if (tops < sect.height() - $(".slider__line").height()) {
					if (line.css('left') == -200) {
						$(".slider__line").css("left", -200);
					} else {
						$(".slider__line").css("left", -tops);
					}
				}
			}
		});
		$(window).scroll(function () {
			var sect = $('.c-slider2');
			var slider = parseInt(sect.offset().top) - 200;
			if (slider < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops -= 0;
				if (tops < sect.height() - $(".slider__line2").height()) {
					$(".slider__line2").css("left", -tops);
				}
			}
		});
	} else {
		$(window).scroll(function () {
			var sect = $('.c-slider');
			var slider = parseInt(sect.offset().top) - 700;
			var left = $('.slider__line').offset().left;
			console.log(left);
			if (slider < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops -= 0;
				if (tops < sect.height() - $(".slider__line").height()) {
					if ($('.slider__line').offset().left == -220) {
						$(".slider__line").css("left", -220);
					} else {
						$(".slider__line").css("left", -tops);
					}
				}
			}
		});
		$(window).scroll(function () {
			var sect = $('.c-slider2');
			var slider = parseInt(sect.offset().top) - 700;
			if (slider < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops -= 0;
				if (tops < sect.height() - $(".slider__line2").height()) {
					$(".slider__line2").css("left", -tops);
				}
			}
		});
	}

	$(window).scroll(function () {
		var sect = $('.comfort__docs');
		var slider = parseInt(sect.offset().top) - 700;
		if (slider < $(window).scrollTop()) {
			var tops = parseInt($(window).scrollTop() - sect.offset().top);
			tops -= 0;
			if (tops < sect.height() - $(".docs__line").height()) {
				$(".docs__line").css("left", -tops);
			}
		}
	});



	$(window).scroll(function () {
		if (windowW > 1200) {
			var sect = $('.boilers__docs');
			var slider = parseInt(sect.offset().top) - 700;
			if (slider < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops -= 0;
				if (tops < sect.height() - $(".bdocs__line").height()) {
					$(".bdocs__line").css("left", -tops);
				}
			}
		} else if (windowW < 1200) {
			var sect = $('.boilers__docs');
			var slider = parseInt(sect.offset().top) - 900;
			if (slider < $(window).scrollTop()) {
				var tops = parseInt($(window).scrollTop() - sect.offset().top);
				tops -= 200;
				if (tops < sect.height() - $(".bdocs__line").height()) {
					$(".bdocs__line").css("left", tops);
				}
			}
		} else if (windowW < 800) {
			return 0;
		}
	});

	$('.all-spec').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.table__start').toggleClass('table__active');
		$('.table__upgrage').toggleClass('table__active');
	});

	$(".tab__link").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr("href");
		$(this).addClass("active").siblings(".tab__link").removeClass("active");
		$(id).addClass("active").siblings(".adds__tab").removeClass("active");
	});

	$(".open-tab").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr("href");
		$(this).addClass("open-tab-active").siblings(".open-tab").removeClass("open-tab-active");
		$(id).addClass("tab-active").siblings(".map-tab").removeClass("tab-active");
	});

	$('.open-popup').magnificPopup({
		type: 'inline',
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function
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
		console.log(distance);
	});

	var hr = window.location.pathname;
	console.log(hr);
	var ars = hr.split('/');
	ars.shift();
	console.log(ars);

	if(ars[0] == 'ru'){
		$('.lang-ru').addClass('active').siblings('.lang').removeClass('active');
	}

	if(ars[0] == 'ru'){
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
		$("#form1").validate({
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
		$("#form2").validate({
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
	}else{
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
		$("#form1").validate({
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
		$("#form2").validate({
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

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".toggle-mnu"); // тут указываем ID элемента
		if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(this).removeClass('is-active');
			$('.main-humb').removeClass('is-active');
			$('.toggle-mnu').removeClass("active");
		}
	});

	var wh  = $(window).height();

	if(wh <= 768){
		$('.toggle-mnu__top').addClass('lang-13d');
		$('.toggle-mnu__nav').addClass('nav-13d');
	}

});
