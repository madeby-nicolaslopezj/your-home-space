orion.dictionary.addDefinition('galleryTitle', 'gallery', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('gallerySubtitleD', 'gallery', {
	type: orion.attributes.summernote,
	label: "Sub-Title",
	optional: true,
});

orion.dictionary.addDefinition('galleryBackgroundColor', 'gallery', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('galleryTitleColor', 'gallery', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('gallerySubtitleColor', 'gallery', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});