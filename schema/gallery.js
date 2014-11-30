orion.addEntity('gallery', {
	title: {
		type: String,
		label: "Title",
		max: 10
	},
	subtitle: {
		type: String,
		label: "Sub-Title",
		max: 10
	},
	image: {
		type: orion.attributes.image,
		label: "Image"
	},
	detailText: {
		type: orion.attributes.summernote,
		label: "Detail Text",
		optional: true,
	},
	detailImages: {
		type: [orion.attributes.image],
		label: "Detail Images",
		optional: true,
	}
}, {
	sidebarName: 'Gallery',
	pluralName: 'Gallery',
	singularName: 'Image',
	defaultIndexTableFields: [
		{ key: 'title', label: 'Title' },
		orion.adminIndexAttributeViews.image('image', 'Image'),
	]
});