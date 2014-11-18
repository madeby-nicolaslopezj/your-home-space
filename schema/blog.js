orion.addEntity('posts', {
	title: {
		type: String,
		label: "Title",
	},
	preview: {
		type: String,
		label: "Preview",
		autoform: {
			type: 'textarea',
		},
	},
	image: {
		type: orion.attributes.image,
		label: "Image",
		optional: true
	},
	body: {
		type: orion.attributes.summernote,
		label: "Body",
		optional: true,
	},
}, {
	sidebarName: 'Blog',
	pluralName: 'Posts',
	singularName: 'Post',
	defaultIndexTableFields: [
		{ key: 'title', label: 'Title' },
		orion.adminIndexAttributeViews.image('image', 'Image'),
	]
});