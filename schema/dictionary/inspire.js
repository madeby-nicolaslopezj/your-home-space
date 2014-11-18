orion.dictionary.addDefinition('inspireTitle', 'inspire', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('inspireSubtitle', 'inspire', {
	type: String,
	label: "Sub-Title",
	optional: true,
	autoform: {
		type: 'textarea'
	}
});

orion.dictionary.addDefinition('inspireBackgroundColor', 'inspire', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('inspireTitleColor', 'inspire', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('inspireSubtitleColor', 'inspire', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('inspireImage', 'inspire', {
	type: orion.attributes.image,
	label: "Image",
	optional: true,
});