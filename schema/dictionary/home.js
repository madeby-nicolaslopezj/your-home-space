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

cms.dictionary.addDefinition('homeImage', 'home', {
	type: cms.imageAttribute,
	label: "Image",
	optional: true,
});