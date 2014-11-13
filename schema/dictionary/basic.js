cms.dictionary.addDefinition('siteName', 'basic', {
	type: String,
	label: "Site Name",
	max: 20,
	optional: true,
});

cms.dictionary.addDefinition('siteLogo', 'basic', {
	type: cms.attributes.image,
	label: "Site Logo",
	optional: true,
});