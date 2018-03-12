$(document).ready(function() {
  // animation link menu
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

 	 // Menu fixed
  	posicionarMenu();
	$(window).scroll(function() {    
	    posicionarMenu();
	});
	function posicionarMenu() {
	    var altura_del_menu = $('.menu').outerHeight(true);
	    if ($(window).scrollTop() >= altura_del_menu){
	        $('.menu').addClass('fixed');
	    } else {
	        $('.menu').removeClass('fixed');
	    }
	}


});
