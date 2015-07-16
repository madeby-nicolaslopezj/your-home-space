orion.dictionary.addDefinition('inspireVisible', 'inspire', {
	type: Boolean,
	label: "Link activo",
	optional: true
});

orion.dictionary.addDefinition('inspireHighlightColor', 'inspire', {
	type: String,
	label: "Color secundario",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('inspireLeftText', 'inspire', {
	type: String,
	label: "Texto lado izquiero",
	optional: true
});

orion.dictionary.addDefinition('inspireRightText', 'inspire', {
	type: orion.attributes.summernote,
	label: 'Inspire right text',
	optional: true
})

orion.dictionary.addDefinition('inspireShopNowLink', 'inspire', {
	type: String,
	label: "Url del boton Shop Now",
	optional: true
});

orion.dictionary.addDefinition('inspireInstructions', 'inspire', {
	type: String,
	label: "Instrucciones en la categoría",
	optional: true
});

orion.dictionary.addDefinition('inspireCategory1Text', 'inspire', {
	type: String,
	label: 'Nombre Categoría 1',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory1Url', 'inspire', {
	type: String,
	label: 'URL Categoría 1',
	regEx: /^[a-z0-9A-Z_-]+$/,
	optional: true
});

orion.dictionary.addDefinition('inspireCategory1Description', 'inspire', {
	type: String,
	label: 'Descripción Categoría 1',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory1Image', 'inspire', {
	type: orion.attributes.image,
	label: 'Imagen Categoría 1',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory2Text', 'inspire', {
	type: String,
	label: 'Nombre Categoría 2',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory2Url', 'inspire', {
	type: String,
	label: 'URL Categoría 2',
	regEx: /^[a-z0-9A-Z_-]+$/,
	optional: true
});

orion.dictionary.addDefinition('inspireCategory2Description', 'inspire', {
	type: String,
	label: 'Descripción Categoría 2',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory2Image', 'inspire', {
	type: orion.attributes.image,
	label: 'Imagen Categoría 2',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory3Text', 'inspire', {
	type: String,
	label: 'Nombre Categoría 3',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory3Url', 'inspire', {
	type: String,
	label: 'URL Categoría 3',
	regEx: /^[a-z0-9A-Z_-]+$/,
	optional: true
});

orion.dictionary.addDefinition('inspireCategory3Description', 'inspire', {
	type: String,
	label: 'Descripción Categoría 3',
	optional: true
})

orion.dictionary.addDefinition('inspireCategory3Image', 'inspire', {
	type: orion.attributes.image,
	label: 'Imagen Categoría 3',
	optional: true
})

orion.dictionary.addDefinition('inspireBottomText', 'inspire', {
	type: orion.attributes.summernote,
	label: 'Inspire bottom text',
	optional: true
})

orion.dictionary.addDefinition('inspireRolloverImageCategories', 'inspire', {
	type: orion.attributes.image,
	label: 'Rollover imagen categorías',
	optional: true
})

orion.dictionary.addDefinition('inspireRolloverImageSmall', 'inspire', {
	type: orion.attributes.image,
	label: 'Rollover imagen cuadrada',
	optional: true
})

orion.dictionary.addDefinition('inspireRolloverImageLarge', 'inspire', {
	type: orion.attributes.image,
	label: 'Rollover imagen rectangular',
	optional: true
})
