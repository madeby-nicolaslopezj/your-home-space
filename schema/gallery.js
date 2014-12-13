orion.addEntity('gallery', {
	title: {
		type: String,
		label: "Title",
		max: 60
	},
	subtitle: {
		type: String,
		label: "Sub-Title",
		max: 60,
		optional: true,
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