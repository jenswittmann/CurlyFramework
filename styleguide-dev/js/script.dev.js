import 'lazysizes';

// set mobile status based on jquery
/*var mobile = (function(){		
	if ($('.check-device').css('fontSize') == '20px') {
		mobile = 1; // phone
	} else if ($('.check-device').css('fontSize') == '30px') {
		mobile = 2; // tablet
	} else {
		mobile = 0; // desktop
	}
	return mobile;
}());*/

// prevent scrolling on body
var preventScrollingBtn = document.querySelectorAll( '.button-prevent-body-scrolling' ),
	preventScrollingName = 'data-scrolling';
if ( preventScrollingBtn != null ) {
	Array.prototype.forEach.call( preventScrollingBtn, function( btn, i ){
		btn.onclick = function() {
			var bodyScrollState = JSON.parse(
					document.body.getAttribute( preventScrollingName )
				);
			document.body.setAttribute( preventScrollingName, !bodyScrollState );
		}
	});
}