cms.dictionary.addDefinition('servicesTitle', 'services', {
	type: String,
	label: "Title",
	optional: true,
});

cms.dictionary.addDefinition('servicesSubtitle', 'services', {
	type: String,
	label: "Sub-Title",
	optional: true,
});

cms.dictionary.addDefinition('servicesBackgroundColor', 'services', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('servicesTitleColor', 'services', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('servicesSubtitleColor', 'services', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('servicesTextColor', 'services', {
	type: String,
	label: "Texts Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});