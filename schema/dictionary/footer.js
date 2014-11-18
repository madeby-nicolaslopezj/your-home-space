orion.dictionary.addDefinition('siteLogoFooter', 'footer', {
	type: orion.attributes.image,
	label: "Logo Footer",
	optional: true,
});

orion.dictionary.addDefinition('footerText', 'footer', {
	type: String,
	label: "Text",
	optional: true,
});

orion.dictionary.addDefinition('footerImage1', 'footer', {
	type: orion.attributes.image,
	label: "Image 1",
	optional: true,
});

orion.dictionary.addDefinition('footerImage2', 'footer', {
	type: orion.attributes.image,
	label: "Image 2",
	optional: true,
});

orion.dictionary.addDefinition('footerBackgroundColor', 'footer', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('footerTextColor', 'footer', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});