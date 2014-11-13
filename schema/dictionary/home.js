cms.dictionary.addDefinition('homeTitle', 'home', {
	type: String,
	label: "Title",
	optional: true,
});

cms.dictionary.addDefinition('homeSubtitle', 'home', {
	type: String,
	label: "Sub-Title",
	optional: true,
});

cms.dictionary.addDefinition('homeBackgroundColor', 'home', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('homeTitleColor', 'home', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('homeSubtitleColor', 'home', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});


cms.dictionary.addDefinition('homeImages', 'home', {
	type: [cms.attributes.image],
	label: "Images",
	optional: true,
});