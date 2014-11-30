orion.addEntity('services', {
	image: {
		type: orion.attributes.image,
		label: "Image"
	},
	text: {
		type: String,
		label: "Text",
		autoform: {
			type: 'textarea',
		}
	},
	detailText: {
		type: orion.attributes.summernote,
		label: "Detail Text",
	},
	detailImages: {
		type: [orion.attributes.image],
		label: "Detail Images"
	}
}, {
	sidebarName: 'Services',
	pluralName: 'Services',
	singularName: 'Service',
	defaultIndexTableFields: [
		orion.adminIndexAttributeViews.image('image', 'Image'),
	]
});