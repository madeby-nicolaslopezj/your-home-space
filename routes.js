Router.configure({
    trackPageView: true
});

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

/*
	this.route('posts', {
		path: '/posts',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'),
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
*/
	this.route('postsMonth', {
		path: '/posts/archive/:year/:month',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'),
			orion.subs.subscribe('entity', 'posts')];
		},
		data: function() {
			return {
				year: this.params.year,
				month: this.params.month
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
		onBeforeAction: function() {
			if (Meteor.isClient) {
				this.next();
				setTimeout(function() {
					$(".share-buttons > span").html("").attr('st_processed', null);
				    $.ajax({ url: 'http://w.sharethis.com/button/buttons.js', dataType: 'script', cache: true, success: function() {
				    	stLight.options({publisher: "75bb8172-f3e5-4e81-8add-42aed1809721", doNotHash: true, doNotCopy: false, hashAddressBar: false});
			    		stButtons.locateElements();
				    }});

				     (function() {
	                    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	                    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	                })();
				}, 300);
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
					'image': post.image ? post.image.link : null
				}
			});
		}
	});


});