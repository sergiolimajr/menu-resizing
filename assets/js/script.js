$(document).on('scroll', function() {
	if($(document).scrollTop() > 100) {
		$('header').removeClass('grande').addClass('pequeno');
	}
	else {
		$('header').removeClass('pequeno').addClass('grande');
	}
});