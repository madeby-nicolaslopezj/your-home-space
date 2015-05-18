sitemaps.add('/sitemap.xml', function() {
  
  var basicRoutes = ['home', 'services', 'about', 'gallery', 'testimonials', 'pricing', 'inspireme', 'blog.index', 'contact'];
  
  var items = [];

  _.each(basicRoutes, function(routeName){
    items.push({
      page: Router.path(routeName),
      lastmod: new Date(),
      changefreq: 'weekly',
    })
  });

  var posts = orion.entities.posts.collection.find().forEach(function (post) {
    var item = {
      page: Router.path('blog.show', post),
      lastmod: post.updatedAt || post.createdAt,
      changefreq: 'weekly'
    };

    if (post.image && post.image.link) {
      item.images = [{
        loc: post.image.link,
        caption: post.preview,
        title: post.title
      }]
    }

    items.push(item);
  });

  return items;
});