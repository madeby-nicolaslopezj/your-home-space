orion.dictionary.addDefinition('testimonialsTitle', 'testimonials', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('testimonialsSubtitleD', 'testimonials', {
	type: orion.attributes.summernote,
	label: "Sub-Title",
	optional: true,
});

orion.dictionary.addDefinition('testimonialsBackgroundColor', 'testimonials', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('testimonialsTitleColor', 'testimonials', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('testimonialsSubtitleColor', 'testimonials', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('testimonialsTextColor', 'testimonials', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('testimonialsIndicatorsColor', 'testimonials', {
	type: String,
	label: "Carousel Indicators Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});