Template.servicesFragment.helpers({
	service: function () {
		return Session.get('activeService');
	},
	serviceImages: function () {
        return Session.get('activeService').detailImages.map(function(document, index){
			document.index = index;
			return document;
		});
    },
    isCero: function(index) {
    	return index == 0;
    },
    needsCarousel: function() {
    	return Session.get('activeService').detailImages.length > 1;
    }
});

Template.servicesFragment.rendered = function () {
	$('.carousel').carousel({
		interval: 4000
	})
};

Template.servicesFragment.events({
	'click .close-button': function () {
		Session.set('activeService', null);
	}
});