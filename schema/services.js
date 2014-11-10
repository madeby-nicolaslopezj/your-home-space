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
	}
}, {
	sidebarName: 'Services',
	pluralName: 'Services',
	singularName: 'Service',
	defaultIndexTableFields: [
		cms.imageIndexTableAttribute('image', 'Image'),
	]
});