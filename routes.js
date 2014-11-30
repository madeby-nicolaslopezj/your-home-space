Router.map(function() {

	this.route('site', {
		path: '/',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'), 
			orion.subs.subscribe('entity', 'gallery'), 
			orion.subs.subscribe('entity', 'services'), 
			orion.subs.subscribe('entity', 'testimonials'),
			orion.subs.subscribe('entity', 'posts')];
		},
		onAfterAction: function() {
			var dict;
			if (!Meteor.isClient) {
				return;
			}
			dict = orion.dictionary.collection.findOne();
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

	this.route('posts', {
		path: '/posts',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'),
			orion.subs.subscribe('entity', 'posts')];
		},
		data: function() {
			return {
				posts: orion.entities.posts.collection.find({}, {sort: {createdAt:-1}})
			}
		},
		onAfterAction: function() {
			var dict;
			if (!Meteor.isClient) {
				return;
			}
			dict = orion.dictionary.collection.findOne();
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

	this.route('post', {
		path: '/posts/:_id',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'),
			orion.subs.subscribe('entity', 'posts')];
		},
		data: function() {
			return {
				post: orion.entities.posts.collection.findOne({_id: this.params._id})
			}
		},
		onAfterAction: function() {
			if (!Meteor.isClient) {
				return;
			}
			var post = orion.entities.posts.collection.findOne({_id: this.params._id});
			var dict = dict = orion.dictionary.collection.findOne();
			SEO.set({
				title: post.title,
				link: {
					icon: dict.seoFavIcon.link,
				},
				meta: {
					'description': post.preview
				},
				og: {
					'title': post.title,
					'description': post.preview,
					'image': post.image.link
				}
			});
		}
	});


});