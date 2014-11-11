cms.addEntity('services', 'services', {
	image: {
		type: cms.imageAttribute,
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
		type: String,
		label: "Detail Text",
		autoform: {
			type: 'textarea',
			rows: 10,
		}
	},
	detailImages: {
		type: [cms.imageAttribute],
		label: "Detail Images"
	}
}, {
	sidebarName: 'Services',
	pluralName: 'Services',
	singularName: 'Service',
	defaultIndexTableFields: [
		cms.imageIndexTableAttribute('image', 'Image'),
	]
});