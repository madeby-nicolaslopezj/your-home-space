cms.dictionary.addDefinition('testimonialsTitle', 'testimonials', {
	type: String,
	label: "Title",
	optional: true,
});

cms.dictionary.addDefinition('testimonialsSubtitle', 'testimonials', {
	type: String,
	label: "Sub-Title",
	optional: true,
});

cms.dictionary.addDefinition('testimonialsBackgroundColor', 'testimonials', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('testimonialsTitleColor', 'testimonials', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('testimonialsSubtitleColor', 'testimonials', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('testimonialsTextColor', 'testimonials', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('testimonialsIndicatorsColor', 'testimonials', {
	type: String,
	label: "Carousel Indicators Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});