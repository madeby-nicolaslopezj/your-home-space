Template.site.rendered = function () {
	if(window.location.hash) {

		if (document.readyState === "complete") {
			$('html, body').animate({
		        scrollTop: $(window.location.hash).offset().top
		    }, 1000);
		} else {
			$(window).load(function() {
				$('html, body').animate({
			        scrollTop: $(window.location.hash).offset().top
			    }, 1000);
			});
		}
	}
};