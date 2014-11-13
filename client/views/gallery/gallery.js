Template.gallery.helpers({
    images: function () {
        return cms.entities.gallery.collection.find({}).fetch();
    }
});

Template.gallery.events({
    'click .gallery .item': function () {
        Session.set('activeGalleryItem', this);
        $('html, body').animate({
	    	scrollTop: $(".galleryFragment").offset().top - 100
	    }, 500);
    }
});