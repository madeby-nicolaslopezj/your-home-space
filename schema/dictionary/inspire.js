orion.dictionary.addDefinition('inspireVisible', 'inspire', {
	type: Boolean,
	label: "Link Active",
	optional: true
});

orion.dictionary.addDefinition('inspireHighlightColor', 'inspire', {
	type: String,
	label: "Secondary Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('inspireLeftText', 'inspire', {
	type: String,
	label: "Left text",
	optional: true
});

orion.dictionary.addDefinition('inspireRightText', 'inspire', {
	type: orion.attributes.summernote,
	label: 'Right text',
	optional: true
})

orion.dictionary.addDefinition('inspireShopNowLink', 'inspire', {
	type: String,
	label: "Url Shop Now Button",
	optional: true
});

orion.dictionary.addDefinition('inspireInstructions', 'inspire', {
	type: String,
	label: "In-category instructions",
	optional: true
});

orion.dictionary.addDefinition('inspireCategory1Text', 'inspire', {
	type: String,
	label: 'Category 1 name',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory1Url', 'inspire', {
	type: String,
	label: 'Category 1 URL',
	regEx: /^[a-z0-9A-Z_-]+$/,
	optional: true
});

orion.dictionary.addDefinition('inspireCategory1Description', 'inspire', {
	type: String,
	label: 'Category 1 description',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory1Image', 'inspire', {
	type: orion.attributes.image,
	label: 'Category 1 image',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory2Text', 'inspire', {
	type: String,
	label: 'Category 2 name',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory2Url', 'inspire', {
	type: String,
	label: 'Category 2 URL',
	regEx: /^[a-z0-9A-Z_-]+$/,
	optional: true
});

orion.dictionary.addDefinition('inspireCategory2Description', 'inspire', {
	type: String,
	label: 'Category 2 description',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory2Image', 'inspire', {
	type: orion.attributes.image,
	label: 'Category 2 image',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory3Text', 'inspire', {
	type: String,
	label: 'Category 3 name',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory3Url', 'inspire', {
	type: String,
	label: 'Category 3 URL',
	regEx: /^[a-z0-9A-Z_-]+$/,
	optional: true
});

orion.dictionary.addDefinition('inspireCategory3Description', 'inspire', {
	type: String,
	label: 'Category 3 description',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory3Image', 'inspire', {
	type: orion.attributes.image,
	label: 'Category 3 image',
	optional: true
})

orion.dictionary.addDefinition('inspireBottomText', 'inspire', {
	type: orion.attributes.summernote,
	label: 'Inspire bottom text',
	optional: true
})

orion.dictionary.addDefinition('inspireRolloverImageCategories', 'inspire', {
	type: orion.attributes.image,
	label: 'Rollover category images',
	optional: true
})

orion.dictionary.addDefinition('inspireRolloverImageSmall', 'inspire', {
	type: orion.attributes.image,
	label: 'Rollover images single space',
	optional: true
})

orion.dictionary.addDefinition('inspireRolloverImageLarge', 'inspire', {
	type: orion.attributes.image,
	label: 'Rollover images double space',
	optional: true
})
