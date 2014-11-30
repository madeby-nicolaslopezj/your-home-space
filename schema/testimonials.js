orion.addEntity('testimonials', {
	text: {
		type: orion.attributes.summernote,
		label: "Text",
	},
	author: {
		type: String,
		label: "Author",
	},
}, {
	sidebarName: 'Testimonials',
	pluralName: 'Testimonials',
	singularName: 'Testimonial',
	defaultIndexTableFields: [
		{key:'author', label: 'Author'},
	]
});