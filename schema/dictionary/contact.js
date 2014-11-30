orion.dictionary.addDefinition('contactTitle', 'contact', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('contactSubtitle', 'contact', {
	type: String,
	label: "Sub-Title",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

orion.dictionary.addDefinition('contactText', 'contact', {
	type: String,
	label: "Right Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

orion.dictionary.addDefinition('contactBackgroundColor', 'contact', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('contactTextColor', 'contact', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});