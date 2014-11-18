Template.galleryFragment.helpers({
	galleryItem: function () {
		return Session.get('activeGalleryItem');
	},
	galleryImages: function () {
        return Session.get('activeGalleryItem').detailImages.map(function(document, index){
			document.index = index;
			return document;
		});
    },
    isCero: function(index) {
    	return index == 0;
    }
});

Template.galleryFragment.rendered = function () {
	$('.carousel').carousel({
		interval: 4000
	})
};

Template.galleryFragment.events({
	'click .close-button': function () {
		Session.set('activeGalleryItem', null);
	}
});