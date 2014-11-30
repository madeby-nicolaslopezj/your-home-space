orion.dictionary.addDefinition('aboutTitle', 'about', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('aboutSubtitle', 'about', {
	type: String,
	label: "Sub-Title",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

orion.dictionary.addDefinition('aboutText', 'about', {
	type: orion.attributes.summernote,
	label: "Text",
	optional: true,
});

orion.dictionary.addDefinition('aboutBackgroundColor', 'about', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('aboutTitleColor', 'about', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('aboutSubtitleColor', 'about', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('aboutTextColor', 'about', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('aboutImageMain', 'about', {
	type: orion.attributes.image,
	label: "Main Image",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage1', 'about', {
	type: orion.attributes.image,
	label: "Image Small 1",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage1Text', 'about', {
	type: orion.attributes.summernote,
	label: "Image Small 1 Detail Text",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage1Images', 'about', {
	type: [orion.attributes.image],
	label: "Image Small 1 Detail Images",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage2', 'about', {
	type: orion.attributes.image,
	label: "Image Small 2",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage2Text', 'about', {
	type: orion.attributes.summernote,
	label: "Image Small 2 Detail Text",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage2Images', 'about', {
	type: [orion.attributes.image],
	label: "Image Small 2 Detail Images",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage3', 'about', {
	type: orion.attributes.image,
	label: "Image Small 3",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage3Text', 'about', {
	type: orion.attributes.summernote,
	label: "Image Small 3 Detail Text",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage3Images', 'about', {
	type: [orion.attributes.image],
	label: "Image Small 3 Detail Images",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage4', 'about', {
	type: orion.attributes.image,
	label: "Image Small 4",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage4Text', 'about', {
	type: orion.attributes.summernote,
	label: "Image Small 4 Detail Text",
	optional: true,
});

orion.dictionary.addDefinition('aboutImage4Images', 'about', {
	type: [orion.attributes.image],
	label: "Image Small 4 Detail Images",
	optional: true,
});