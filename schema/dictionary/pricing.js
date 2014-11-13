cms.dictionary.addDefinition('pricingTitle', 'pricing', {
	type: String,
	label: "Title",
	optional: true,
});

cms.dictionary.addDefinition('pricingSubtitle', 'pricing', {
	type: String,
	label: "Sub-Title",
	optional: true,
});

cms.dictionary.addDefinition('pricingBackgroundColor', 'pricing', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('pricingTitleColor', 'pricing', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('pricingSubtitleColor', 'pricing', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('pricingTextColor', 'pricing', {
	type: String,
	label: "Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

cms.dictionary.addDefinition('pricingItem1Image', 'pricing', {
	type: cms.attributes.image,
	label: "Item 1 Image",
	optional: true,
});

cms.dictionary.addDefinition('pricingItem1Text', 'pricing', {
	type: String,
	label: "Item 1 Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

cms.dictionary.addDefinition('pricingItem2Image', 'pricing', {
	type: cms.attributes.image,
	label: "Item 2 Image",
	optional: true,
});

cms.dictionary.addDefinition('pricingItem2Text', 'pricing', {
	type: String,
	label: "Item 2 Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

cms.dictionary.addDefinition('pricingItem3Image', 'pricing', {
	type: cms.attributes.image,
	label: "Item 3 Image",
	optional: true,
});

cms.dictionary.addDefinition('pricingItem3Text', 'pricing', {
	type: String,
	label: "Item 3 Text",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});
