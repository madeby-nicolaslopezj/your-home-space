orion.addEntity('products', {
	title: {
		type: String,
		label: "Título"
	},
	price: {
		type: String,
		label: "Precio",
	},
	image: {
		type: orion.attributes.image,
		label: "Imagen"
	},
	doubleSpace: {
		type: Boolean,
		label: "Usa doble espacio",
		optional: true,
	},
	position: {
    type: Number,
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
	sidebarName: 'Productos',
	pluralName: 'Productos',
	singularName: 'Producto',
	defaultIndexTableFields: [
		{ key: 'title', label: 'Título' },
		orion.adminIndexAttributeViews.image('image', 'Image'),
    { key: 'position', label: 'Posición' },
    { key: 'category', label: 'Categoría' }
	]
});
