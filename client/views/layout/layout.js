Template.site.rendered = function () {
	if(window.location.hash) {
		$('body').imagesLoaded( function() {
			$('html, body').animate({
		        scrollTop: $(window.location.hash).offset().top
		    }, 1000);
		});
	}
};