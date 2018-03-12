$(document).ready(function(){
	// Efecto del menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top' : '-200px'
		});

		$(this).animate({
			'top' : '0'
		} , 1500 + (index * 500) );

	});

	// Efecto header
	if ( $(window).width() > 800 ) {
		$('header .textos').css({
			opacity : 0,
			marginTop : 0
		});

		$('header .textos').animate({
			opacity : 1,
			marginTop : '-52px'
		}, 1500);

	}

	// Link scroll menu
	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate ({
			scrollTop: acercaDe -150
		}), 500;
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate ({
			scrollTop: menu - 25
		}), 500;
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate ({
			scrollTop: galeria - 50
		}), 500;
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate ({
			scrollTop: ubicacion
		}), 500;
	});


	// Efecto Parallax
	$(window).scroll(function(){
		var windowWidth =  $(window).width();
		if (windowWidth > 800) {
			var scroll = $(window).scrollTop();
			$('header .textos').css({
				'transform' : 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform' : 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});


	$(window).resize(function(){
		var windowWidth = $(window).width();
		if (windowWidth < 800) {
			$('.acerca-de article').css({
				'transform' : 'translate(0px, 0px)'
			});
		}
	});




});