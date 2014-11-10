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

cms.dictionary.addDefinition('aboutImageMain', 'about', {
	type: cms.imageAttribute,
	label: "Main Image",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage1', 'about', {
	type: cms.imageAttribute,
	label: "Image Small 1",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage2', 'about', {
	type: cms.imageAttribute,
	label: "Image Small 2",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage3', 'about', {
	type: cms.imageAttribute,
	label: "Image Small 3",
	optional: true,
});

cms.dictionary.addDefinition('aboutImage4', 'about', {
	type: cms.imageAttribute,
	label: "Image Small 4",
	optional: true,
});