cms.addEntity('testimonials', 'testimonials', {
	text: {
		type: String,
		label: "Text",
		autoform: {
			type: 'textarea',
		}
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