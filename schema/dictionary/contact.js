orion.dictionary.addDefinition('contactTitle', 'contact', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('contactSubtitleD', 'contact', {
	type: orion.attributes.summernote,
	label: "Sub-Title",
	optional: true,
});

orion.dictionary.addDefinition('contactTextD', 'contact', {
	type: orion.attributes.summernote,
	label: "Right Text",
	optional: true,
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