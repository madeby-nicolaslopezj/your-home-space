orion.dictionary.addDefinition('siteName', 'basic', {
	type: String,
	label: "Site Name",
	max: 20,
	optional: true,
});

orion.dictionary.addDefinition('siteLogo', 'basic', {
	type: orion.attributes.image,
	label: "Site Logo",
	optional: true,
});

orion.dictionary.addDefinition('basicTitleFontSize', 'basic', {
	type: String,
	label: "Titles Font Size",
	max: 20,
	optional: true,
	autoform: {
		placeholder: '40px'
	}
});

orion.dictionary.addDefinition('basicTitleFontWeight', 'basic', {
	type: String,
	label: "Titles Font Weight",
	max: 20,
	optional: true,
	autoform: {
		type: 'select',
		options: [{value: '100', label: 'light'}, {value: '400', label: 'normal'}]
	}
});