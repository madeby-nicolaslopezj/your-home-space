cms.dictionary.addDefinition('seoTitle', 'seo', {
	type: String,
	label: "Title of the page",
	optional: true,
});

cms.dictionary.addDefinition('seoDescription', 'seo', {
	type: String,
	label: "Description",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

cms.dictionary.addDefinition('seoImage', 'seo', {
	type: cms.imageAttribute,
	label: "Image",
	optional: true,
});

cms.dictionary.addDefinition('seoFavIcon', 'seo', {
	type: cms.imageAttribute,
	label: "Fav Icon",
	optional: true,
});