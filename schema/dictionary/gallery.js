cms.dictionary.addDefinition('galleryTitle', 'gallery', {
	type: String,
	label: "Title",
	optional: true,
});

cms.dictionary.addDefinition('gallerySubtitle', 'gallery', {
	type: String,
	label: "Sub-Title",
	optional: true,
});

cms.dictionary.addDefinition('galleryBackgroundColor', 'gallery', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('galleryTitleColor', 'gallery', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('gallerySubtitleColor', 'gallery', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});