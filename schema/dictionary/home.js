orion.dictionary.addDefinition('homeTitle', 'home', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('homeSubtitleD', 'home', {
	type: orion.attributes.summernote,
	label: "Sub-Title",
	optional: true,
});

orion.dictionary.addDefinition('homeBackgroundColor', 'home', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('homeTitleColor', 'home', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('homeSubtitleColor', 'home', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});


orion.dictionary.addDefinition('homeImages', 'home', {
	type: [orion.attributes.image],
	label: "Images",
	optional: true,
});