$(document).ready(function() {
	
	// set mobile status
	var mobile = 1;
	function detectMobile() {
		if ($('.check-device').css('fontSize') == '1px') {
			mobile = 1; // phone
		} else if ($('.check-device').css('fontSize') == '2px') {
			mobile = 2; // tablet
		} else {
			mobile = 0; // desktop
		}
	}
	detectMobile();
	
	// Slick Slider
	$('.slick').slick({
		dots: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '',
		nextArrow: '',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});
	
});