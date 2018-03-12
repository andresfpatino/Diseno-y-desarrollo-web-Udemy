
$(window).scroll(function() {
    if ($(this).scrollTop() >= 119) {
	    $('header nav.menu').addClass('stickytop');
    }
    else {
        $('header nav.menu').removeClass('stickytop');
    }
});
