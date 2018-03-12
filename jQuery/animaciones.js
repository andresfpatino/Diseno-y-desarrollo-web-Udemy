$(document).ready(function(){

	// $(selector).animate({parametros}, velocidad, callback);
	
	/*
		$('#boton').on('click', function(){
			$('#caja').animate({
				width: '+=50px',
				opacity: '0.2',
				marginLeft: '+=20px'
			}, 300, function(){
				console.log('fin de la animación');
			});
		});
	*/

	$('#boton').on('click', function(){
		$('#caja').animate({
			marginLeft: '+=50px'
		},3000);
		$('#caja').animate({
			marginLeft: '-=50px'
		},3000);
	});
	
	$('#boton').on('click', function(){
		$('#caja').toggleClass('animacion');
	});

});