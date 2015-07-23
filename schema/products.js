orion.addEntity('products', {
	title: {
		type: String
	},
	price: {
		type: String
	},
	image: {
		type: orion.attributes.image
	},
	doubleSpace: {
		type: Boolean,
		optional: true,
	},
	position: {
    type: Number
  },
  category: {
    type: Number,
    allowedValues: [1, 2, 3],
    autoform: {
      noselect: true
    }
  },
	url: {
		type: String,
		label: 'URL'
	}
}, {
	sidebarName: 'Products',
	pluralName: 'Products',
	singularName: 'Product',
	defaultIndexTableFields: [
		{ key: 'title', label: 'Title' },
		orion.adminIndexAttributeViews.image('image', 'Image'),
    { key: 'position', label: 'Position' },
    { key: 'category', label: 'Category' }
	]
});
