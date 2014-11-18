Template.subscribe.events({
	'click .btn': function (event, template) {
		var email = template.find('input').value;
		Meteor.call('subscribe', email, function() {
			$(template.find("p")).addClass('ready')
		});
	}
});