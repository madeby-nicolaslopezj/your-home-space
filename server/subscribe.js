Meteor.methods({
	subscribe: function(email) {
		console.log("Subscribing: " + email)

		this.unblock();

		message = {
			from: contactFormConfig.settings.emailFrom,
			to: contactFormConfig.settings.fullName + ' <' + contactFormConfig.settings.emailTo + '>',
			subject: 'New subscription',
			text: email
		};
		
		Email.send(message);
	}
});