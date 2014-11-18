orion.dictionary.addDefinition('pricingTitle', 'pricing', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('pricingSubtitle', 'pricing', {
	type: String,
	label: "Sub-Title",
	optional: true,
});

orion.dictionary.addDefinition('pricingBackgroundColor', 'pricing', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('pricingTitleColor', 'pricing', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('pricingSubtitleColor', 'pricing', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('pricingTextColor', 'pricing', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('pricingItem1Image', 'pricing', {
	type: orion.attributes.image,
	label: "Item 1 Image",
	optional: true,
});

orion.dictionary.addDefinition('pricingItem1Text', 'pricing', {
	type: String,
	label: "Item 1 Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

orion.dictionary.addDefinition('pricingItem2Image', 'pricing', {
	type: orion.attributes.image,
	label: "Item 2 Image",
	optional: true,
});

orion.dictionary.addDefinition('pricingItem2Text', 'pricing', {
	type: String,
	label: "Item 2 Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

orion.dictionary.addDefinition('pricingItem3Image', 'pricing', {
	type: orion.attributes.image,
	label: "Item 3 Image",
	optional: true,
});

orion.dictionary.addDefinition('pricingItem3Text', 'pricing', {
	type: String,
	label: "Item 3 Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});
