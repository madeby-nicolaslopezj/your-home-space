Router.configure({
  trackPageView: true
});

SiteController = RouteController.extend({
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'adminLoading',
  fastRender: true,
	waitOn: function() {
    	return orion.subs.subscribe('dictionary');
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

Router.route('/', {
	name: 'home',
	controller: 'SiteController'
});

Router.route('/services', {
	name: 'services',
	controller: 'SiteController',
	waitOn: function() {
    	return orion.subs.subscribe('entity', 'services');
    }
});

Router.route('/about-us', {
	name: 'about',
	controller: 'SiteController'
});

Router.route('/gallery', {
	name: 'gallery',
	controller: 'SiteController',
	waitOn: function() {
    	return orion.subs.subscribe('entity', 'gallery');
    }
});

Router.route('/testimonials', {
	name: 'testimonials',
	controller: 'SiteController',
	waitOn: function() {
    	return orion.subs.subscribe('entity', 'testimonials');
    }
});

Router.route('/pricing', {
	name: 'pricing',
	controller: 'SiteController'
});

Router.route('/inspire-me', {
	name: 'inspireme',
	controller: 'SiteController'
});

Router.route('/inspire-me/:category', {
	name: 'inspireme.category',
	controller: 'SiteController',
  waitOn: function() {
    return orion.subs.subscribe('productsByCategory', this.params.category);
  }
});

Router.route('/blog', {
	name: 'blog.index',
	controller: 'SiteController',
	waitOn: function() {
    	return orion.subs.subscribe('entity', 'posts');
    }
});

Router.route('/blog/:_id', {
	name: 'blog.show',
	controller: 'SiteController',
	waitOn: function() {
    	return orion.subs.subscribe('entity', 'posts');
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
		var dict = orion.dictionary.collection.findOne();
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

Router.route('/blog/archive/:year/:month', {
	name: 'blog.month',
	controller: 'SiteController',
	data: function() {
		return {
			year: this.params.year,
			month: this.params.month
		}
	},
	waitOn: function() {
    	return orion.subs.subscribe('entity', 'posts');
    }
});

Router.route('/contact', {
	name: 'contact',
	controller: 'SiteController'
});
