cms.dictionary.addDefinition('siteName', 'basic', {
	type: String,
	label: "Site Name",
	max: 20,
	optional: true,
});

cms.dictionary.addDefinition('siteLogo', 'basic', {
	type: cms.imageAttribute,
	label: "Site Logo",
	optional: true,
});

cms.dictionary.addDefinition('siteLogoFooter', 'basic', {
	type: cms.imageAttribute,
	label: "Logo Footer",
	optional: true,
});