Router.map(function() {

	this.route('site', {
		path: '/',
		loadingTemplate: 'adminLoading',
		fastRender: true,
		waitOn: function() {
			return [cms.subs.subscribe('dictionary'), cms.subs.subscribe('entity', 'gallery'), cms.subs.subscribe('entity', 'services'), cms.subs.subscribe('entity', 'testimonials')];
		},
		onAfterAction: function() {
			var dict;
			if (!Meteor.isClient) {
				return;
			}
			dict = cms.dictionary.collection.findOne();
			SEO.set({
				title: dict.seoTitle,
				link: {
					icon: dict.seoFavIcon.link,
				},
				meta: {
					'description': dict.seoDescription
				},
				og: {
					'title': dict.seoTitle,
					'description': dict.seoDescription,
					'image': dict.seoImage.link
				}
			});
		}
	});


});