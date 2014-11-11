Template.aboutFragment.helpers({
	aboutActiveText: function () {
		return Session.get('aboutActiveText');
	},
	aboutActiveImages: function () {
        return Session.get('aboutActiveImages').map(function(document, index){
			document.index = index;
			return document;
		});
    },
    isCero: function(index) {
    	return index == 0;
    }
});

Template.aboutFragment.rendered = function () {
	$('.carousel').carousel({
		interval: 4000
	})
};

Template.aboutFragment.events({
	'click .close-button': function () {
		Session.set('aboutActiveText', null);
		Session.set('aboutActiveImages', null);
	}
});