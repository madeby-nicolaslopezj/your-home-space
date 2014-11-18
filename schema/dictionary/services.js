orion.dictionary.addDefinition('servicesTitle', 'services', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('servicesSubtitle', 'services', {
	type: String,
	label: "Sub-Title",
	optional: true,
	autoform: {
		type: 'textarea'
	}
});

orion.dictionary.addDefinition('servicesBackgroundColor', 'services', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('servicesTitleColor', 'services', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('servicesSubtitleColor', 'services', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('servicesTextColor', 'services', {
	type: String,
	label: "Texts Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});