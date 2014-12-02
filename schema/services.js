orion.addEntity('services', {
	image: {
		type: orion.attributes.image,
		label: "Image",
		optional: true,
	},
	text: {
		type: orion.attributes.summernote,
		label: "Text",
		optional: true,
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
	sidebarName: 'Services',
	pluralName: 'Services',
	singularName: 'Service',
	defaultIndexTableFields: [
		orion.adminIndexAttributeViews.image('image', 'Image'),
	]
});