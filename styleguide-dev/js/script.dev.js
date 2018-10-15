// set mobile status
var mobile = (function(){		
	if ($('.check-device').css('fontSize') == '20px') {
		mobile = 1; // phone
	} else if ($('.check-device').css('fontSize') == '30px') {
		mobile = 2; // tablet
	} else {
		mobile = 0; // desktop
	}
	return mobile;
}());

$(document).ready(function() {
	
	// mobile nav
	var nav = $('.head-nav');
	var btn = $('.head-nav-open');
	btn.on('click', function(e) {
		e.preventDefault();
		if (nav.hasClass('active')) {
			nav.removeClass('active');
		} else {
			nav.addClass('active');
		}
	});
	
	// slick slider
	$('.slick').slick({
		arrows: false,
		dots: true
	});	
		
	// modaal window
	$('.img-caption a').modaal({
		type: 'image'
	});					   
	
	// scrollto
	$('.scrollto').on('click', function(e) {
		e.preventDefault();
		var offset = 20;
		if (mobile == 0) {
			offset = 100;
		}
		var anchor = $(this).data('scrollto');
		$('html,body').animate({
			scrollTop: $(anchor).offset().top - offset
		}, 500, function() {
			window.location.hash = anchor;
		});
	});
		
});