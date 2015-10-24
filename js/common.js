
$(function() {

	document.getElementById('svg-icons').innerHTML = SVG_ICONS;

	animateNavigation ();
	goToElement ();
	setMenuActive ();
	validateForm ();

	$('.js-slider').bxSlider({
		mode: 'fade',
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		auto: true,
		pause: 5000,
		speed: 1000,
		autoHover: true

	});

	// инициализация плагина для адаптивных таблиц
	$('.table_responsive').cardtable();

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



function validateForm () {
	
	var inputForValidate = $(".js-feedback__input");
	var errorState = 'tooltip_showed';
	var submitButton = $('.js-feedback__submit');
	var emptyState = 'is-empty';
	var hiddenState = 'is-hidden';
	var message = $(".js-feedback__message");


	inputForValidate.on('keyup', function() {
		var self = $(this);
		var error = self.parent();

		if ( self.val() === '' ) {

			self.addClass(emptyState);
		} else {

			self.removeClass(emptyState);
			error.removeClass(errorState);
		}
		
	});


	submitButton.on('click', function(event) {
		var self = $(this);

		inputForValidate.each(function() {
			var self = $(this);
			var error = self.parent();

			if ( self.hasClass(emptyState) ) {

				event.preventDefault();
				error.addClass(errorState);
				self.focus();
				event.preventDefault();
			} 

		});

		if ( !inputForValidate.hasClass(emptyState) ) {

			event.preventDefault();
			self.addClass(hiddenState);
			message.removeClass(hiddenState);
		} 
		
		
		
	});

} // validateForm