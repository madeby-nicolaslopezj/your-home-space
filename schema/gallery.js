orion.addEntity('gallery', {
	title: {
		type: String,
		label: "Title",
	},
	subtitle: {
		type: String,
		label: "Sub-Title",
	},
	image: {
		type: orion.attributes.image,
		label: "Image"
	},
	detailText: {
		type: String,
		label: "Detail Text",
		autoform: {
			type: 'textarea',
		},
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