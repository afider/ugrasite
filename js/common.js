
$(function() {

	document.getElementById('svg-icons').innerHTML = SVG_ICONS;

	animateNavigation ();
	goToElement ();
	setMenuActive ();

	$('.js-slider').bxSlider({
		mode: 'fade',
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		auto: false,
		pause: 5000,
		speed: 1000,
		autoHover: true

	});

});



function animateNavigation () {
	
	var animationAllow = 'is-animate';
	var openState = 'is-open';
	var nav = $('.js-nav');
	var navControl = $('.js-nav__control');
	var navPhone = $('.js-nav__phone');

	navControl.on('click', function(e) {

		e.preventDefault();
		
		navControl.toggleClass(openState);
		navPhone.toggleClass(openState);
		nav.toggleClass(openState);
		$('body').toggleClass(openState);

		// for not alowing animation during resizing the window
		setTimeout(function() {

			navControl.toggleClass(animationAllow);
			nav.toggleClass(animationAllow);
		}, 300);

		
	});

} // animateNavigation



function goToElement () {

	var animationAllow = 'is-animate';
	var openState = 'is-open';
	var nav = $('.js-nav');
	var navControl = $('.js-nav__control');
	var navPhone = $('.js-nav__phone');


	$(".js-goto").click(function(e) {

		nav.removeClass(animationAllow + ' ' + openState);
		navControl.removeClass(animationAllow + ' ' + openState);
		navPhone.removeClass(openState);
		$('body').removeClass(openState);

		var self = $(this),
			targetClass = self.data('goto');
		    target = $(targetClass);

		var speed = 1000;

		 e.preventDefault();


	    $('html, body').animate({
	        scrollTop: target.offset().top
	        
	    }, speed, 'easeInOutCubic');
	});

} // goToElement


function setMenuActive () {

	var menuItems = $('.main-nav__i');
	var activeState = 'is-active';
	

	menuItems.on('click', function(event) {
		event.preventDefault();
		
		menuItems.removeClass( activeState );
		var self = $(this);

		self.addClass( activeState );
	});
	

} // setMenuActive