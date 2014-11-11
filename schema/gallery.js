cms.addEntity('gallery', 'gallery', {
	image: {
		type: cms.imageAttribute,
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
		type: [cms.imageAttribute],
		label: "Detail Images"
	}
}, {
	sidebarName: 'Gallery',
	pluralName: 'Gallery',
	singularName: 'Image',
	defaultIndexTableFields: [
		cms.imageIndexTableAttribute('image', 'Image'),
	]
});