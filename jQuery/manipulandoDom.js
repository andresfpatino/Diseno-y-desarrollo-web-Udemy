$(document).ready(function() {

	// $('#titulo').text('Encabezado modificado');

	$('#titulo').html('<u>Encabezado modificado</u>');

	var nombre = $('#nombre');
	nombre.on('change', function(){
		$('#titulo').text(nombre.val());
	});

	// $('#enlace').text('https://andresf1395.github.io');
	// $('#enlace').attr('href', 'https://andresf1395.github.io');
	
	$('#enlace').attr({
		'class': 'azul',
		'target' : '_blank'
	});

});

