Template.header.rendered = function () {
	$('body').scrollspy({ target: '.navbar-list' })
	$(window).on('activate.bs.scrollspy', function (e) {
	    history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
	});
};