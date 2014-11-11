cms.dictionary.addDefinition('headerHelpText', 'header', {
	type: String,
	label: "Help Text",
	optional: true,
});

cms.dictionary.addDefinition('headerBackgroundColor', 'header', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('headerTextColor', 'header', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('headerAlternativeColor', 'header', {
	type: String,
	label: "Alternative Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});