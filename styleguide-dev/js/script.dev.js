import 'lazysizes';

// get breakpoint status
var curBreakpoint = function() {
	var el = document.querySelector('.check-device'),
		fontsize = window.getComputedStyle(el, null).getPropertyValue('font-size'),
		status = 2;	// desktop
	if ( fontsize == '20px' ) {
		status = 0; // phone
	} else if ( fontsize == '30px' ) {
		status = 1; // tablet
	}
	return status;
};

// accessible toggle
var toggleBtn = document.querySelectorAll( '.button-aria-expanded-toogle' );
if ( toggleBtn ) {
	Array.prototype.forEach.call( toggleBtn, function( btn, i ) {
		var btnSlave = btn.getAttribute( 'aria-controls' ),
			btnElSlave = document.querySelector( '#' + btnSlave );	
		btn.addEventListener( 'click', function() {
			var open = JSON.parse(
				this.getAttribute( 'aria-expanded' )
			);
			
			Array.prototype.forEach.call( document.querySelectorAll( '[aria-controls="' + btnSlave + '"]' ), function( btn, i ) {
				btn.setAttribute( 'aria-expanded', !open );
			} );
			btnElSlave.hidden = !btnElSlave.hidden;			
		} );
	} );
}

// esc keydown exit for overlays
document.addEventListener( 'keydown', function( e ) {
    if ( e.key == 'Escape' ) {
	    Array.prototype.forEach.call( document.querySelectorAll( '[aria-controls]' ), function( btn, i ) {
			var btnSlave = btn.getAttribute( 'aria-controls' ),
				btnElSlave = document.querySelector( '#' + btnSlave );
			btn.setAttribute( 'aria-expanded' , false );
			btnElSlave.hidden = true;
			document.body.setAttribute( preventScrollingName, true );
		} );
    }
});

// prevent scrolling on body
var preventScrollingBtn = document.querySelectorAll( '.button-prevent-body-scrolling' ),
	preventScrollingName = 'data-scrolling';
if ( preventScrollingBtn ) {
	Array.prototype.forEach.call( preventScrollingBtn, function( btn, i ) {
		btn.onclick = function() {
			var bodyScrollState = JSON.parse(
					document.body.getAttribute( preventScrollingName )
				);
			document.body.setAttribute( preventScrollingName, !bodyScrollState );
		}
	});
}