cms.dictionary.addDefinition('aboutTitle', 'about', {
	type: String,
	label: "Title",
	optional: true,
});

cms.dictionary.addDefinition('aboutSubtitle', 'about', {
	type: String,
	label: "Sub-Title",
	optional: true,
});

cms.dictionary.addDefinition('aboutText', 'about', {
	type: String,
	label: "Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

cms.dictionary.addDefinition('aboutBackgroundColor', 'about', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('aboutTitleColor', 'about', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('aboutSubtitleColor', 'about', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('aboutTextColor', 'about', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('aboutImageMain', 'about', {
	type: cms.attributes.image,
	label: "Main Image",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage1', 'about', {
	type: cms.attributes.image,
	label: "Image Small 1",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage1Text', 'about', {
	type: String,
	label: "Image Small 1 Detail Text",
	autoform: {
		type: 'textarea',
		rows: 10,
	},
	optional: true,
});

cms.dictionary.addDefinition('aboutImage1Images', 'about', {
	type: [cms.attributes.image],
	label: "Image Small 1 Detail Images",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage2', 'about', {
	type: cms.attributes.image,
	label: "Image Small 2",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage2Text', 'about', {
	type: String,
	label: "Image Small 2 Detail Text",
	autoform: {
		type: 'textarea',
		rows: 10,
	},
	optional: true,
});

cms.dictionary.addDefinition('aboutImage2Images', 'about', {
	type: [cms.attributes.image],
	label: "Image Small 2 Detail Images",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage3', 'about', {
	type: cms.attributes.image,
	label: "Image Small 3",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage3Text', 'about', {
	type: String,
	label: "Image Small 3 Detail Text",
	autoform: {
		type: 'textarea',
		rows: 10,
	},
	optional: true,
});

cms.dictionary.addDefinition('aboutImage3Images', 'about', {
	type: [cms.attributes.image],
	label: "Image Small 3 Detail Images",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage4', 'about', {
	type: cms.attributes.image,
	label: "Image Small 4",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage4Text', 'about', {
	type: String,
	label: "Image Small 4 Detail Text",
	autoform: {
		type: 'textarea',
		rows: 10,
	},
	optional: true,
});

cms.dictionary.addDefinition('aboutImage4Images', 'about', {
	type: [cms.attributes.image],
	label: "Image Small 4 Detail Images",
	optional: true,
});