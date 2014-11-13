cms.addEntity('gallery', {
	image: {
		type: cms.attributes.image,
		label: "Image"
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
	sidebarName: 'Gallery',
	pluralName: 'Gallery',
	singularName: 'Image',
	defaultIndexTableFields: [
		cms.attributesIndexTable.image('image', 'Image'),
	]
});