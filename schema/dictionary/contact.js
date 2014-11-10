cms.dictionary.addDefinition('contactTitle', 'contact', {
	type: String,
	label: "Title",
	optional: true,
});

cms.dictionary.addDefinition('contactSubtitle', 'contact', {
	type: String,
	label: "Sub-Title",
	optional: true,
});

cms.dictionary.addDefinition('contactText', 'contact', {
	type: String,
	label: "Right Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});