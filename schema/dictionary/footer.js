cms.dictionary.addDefinition('siteLogoFooter', 'footer', {
	type: cms.attributes.image,
	label: "Logo Footer",
	optional: true,
});

cms.dictionary.addDefinition('footerText', 'footer', {
	type: String,
	label: "Text",
	optional: true,
});

cms.dictionary.addDefinition('footerImage1', 'footer', {
	type: cms.attributes.image,
	label: "Image 1",
	optional: true,
});

cms.dictionary.addDefinition('footerImage2', 'footer', {
	type: cms.attributes.image,
	label: "Image 2",
	optional: true,
});

cms.dictionary.addDefinition('footerBackgroundColor', 'footer', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('footerTextColor', 'footer', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});