cms.addEntity('gallery', 'gallery', {
	image: {
		type: cms.imageAttribute,
		label: "Image"
	},
}, {
	sidebarName: 'Gallery',
	pluralName: 'Gallery',
	singularName: 'Image',
	defaultIndexTableFields: [
		cms.imageIndexTableAttribute('image', 'Image'),
	]
});