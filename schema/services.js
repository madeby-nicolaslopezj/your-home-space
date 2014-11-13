cms.addEntity('services', {
	image: {
		type: cms.attributes.image,
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
		type: [cms.attributes.image],
		label: "Detail Images"
	}
}, {
	sidebarName: 'Services',
	pluralName: 'Services',
	singularName: 'Service',
	defaultIndexTableFields: [
		cms.attributesIndexTable.image('image', 'Image'),
	]
});