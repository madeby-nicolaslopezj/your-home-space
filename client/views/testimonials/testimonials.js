Template.testimonials.helpers({
    testimonials: function () {
        return orion.entities.testimonials.collection.find().map(function(document, index){
			document.index = index;
			return document;
		});
    },
    isCero: function(index) {
    	return index == 0;
    }
});

Template.testimonials.rendered = function () {
	$('#carousel-testimonials').carousel({
		interval: 8000
	})
};
