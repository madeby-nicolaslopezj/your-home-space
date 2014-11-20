orion.dictionary.addDefinition('blogTitle', 'blog', {
	type: String,
	label: "Title",
	optional: true,
});

orion.dictionary.addDefinition('blogSubtitle', 'blog', {
	type: String,
	label: "Sub-Title",
	optional: true,
	autoform: {
		type: 'textarea'
	}
});

orion.dictionary.addDefinition('blogViewAllText', 'blog', {
	type: String,
	label: "View All Button Text",
	optional: true,
});

orion.dictionary.addDefinition('blogBackgroundColor', 'blog', {
	type: String,
	label: "Background Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('blogTitleColor', 'blog', {
	type: String,
	label: "Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});

orion.dictionary.addDefinition('blogSubtitleColor', 'blog', {
	type: String,
	label: "Sub-Title Text Color",
	optional: true,
	autoform: {
		type: 'color',
	}
});