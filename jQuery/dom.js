$(document).ready(function(){
	// Parent
	$('#tercera').parent().css({
		background: '#1b3d82'
	});

	// Parents
	$('#tercera').parents();

	// Children
	// $('#padre').children('#tercera').fadeOut(500);

	// Find
	// $('#contenedor').find('div.caja').slideUp();

	// Siblings
	// $('#tercera').siblings().fadeOut(1500);
	
	// Next - Prev
	$('#tercera').prev().css({
		background: '#000'
	});

	$('#tercera').next().css({
		background: '#cecece'
	});

	$('#tercera').prevAll().css({
		color: '#4cf30e'
	});

	$('#tercera').nextAll().css({
		color: '#f6c905'
	});


});