$(document).ready(function(){
	var boton = $('#boton');

	// Con un callback o funcion anonima
	/*
		boton.click(function(){ 
		});
	 */

	// Evento con una funcion
	/*	
		function saludo(){
			alert('saludo');
		}
		boton.click(saludo);
	*/
	
	// Evento con un fallBack
	/*
		boton.on('mouseenter', function(){
			$('body').css( {background: '#000'} );
		});

		boton.on('mouseleave', function(){
			$('body').css( {background: '#fff'} );
		});
	*/

	// Eliminando eventos
	/*
		boton.on('click', function(){
			alert('Saludos');
			console.log('Saludos');
		});

		$('#desactivar').on('click', function(){
			boton.off('click');
			console.log('Boton de ejecutar desactivado')
		});
	*/

	// Preveniendo el comportamiento de los enlaces
	$('a').on('click', function(e){
		e.preventDefault();
		// $('a').attr('href','https://www.google.com');
	});

});