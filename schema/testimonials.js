orion.addEntity('testimonials', {
	text: {
		type: orion.attributes.summernote,
		label: "Text",
		optional: true,
	},
	author: {
		type: String,
		label: "Author",
		optional: true,
	},
}, {
	sidebarName: 'Testimonials',
	pluralName: 'Testimonials',
	singularName: 'Testimonial',
	defaultIndexTableFields: [
		{key:'author', label: 'Author'},
	]
});