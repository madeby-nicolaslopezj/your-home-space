Template.about.events({
    'click .secondary-images img': function (evt) {
    	var index = $(evt.target).attr('data-index');
    	var dict = cms.dictionary.collection.findOne();
    	Session.set('aboutActiveText', dict['aboutImage' + index + 'Text']);
		Session.set('aboutActiveImages', dict['aboutImage' + index + 'Images']);

		$('html, body').animate({
	    	scrollTop: $(".aboutFragment").offset().top - 100
	    }, 500);
    }
});