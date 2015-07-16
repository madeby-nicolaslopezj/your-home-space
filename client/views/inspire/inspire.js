var getIdenfierByIndex = function(index) {
  if (index == 2) {
    return orion.dictionary.get('inspireCategory2Url', '2');
  }
  if (index == 3) {
    return orion.dictionary.get('inspireCategory3Url', '3');
  }
  return orion.dictionary.get('inspireCategory1Url', '1');
}

var getIndexByIdentifier = function(identifier) {
  if (orion.dictionary.get('inspireCategory2Url', '2') == identifier) {
    return 2;
  }
  if (orion.dictionary.get('inspireCategory3Url', '3') == identifier) {
    return 3;
  }
  return 1;
}

Template.registerHelper('pathForInspireCategory', function(index) {
  return Router.path('inspireme.category', { category: getIdenfierByIndex(index) });
});

Template.inspireme.helpers({
  leftText: function() {
    return orion.dictionary.get('inspireLeftText', '').split('  ');
  }
})

Template.inspiremeCategory.helpers({
  isLinkActive: function(index) {
    var urlCategory = Router.current().params.category;
    var identifier = getIdenfierByIndex(index);
    return identifier == urlCategory && 'active';
  },
  rows: function() {
    var size = getIndexByIdentifier(Router.current().params.category) == 2 ? 4 : 3;
    var chunks = [];
    orion.entities.products.collection.find({ category: getIndexByIdentifier(Router.current().params.category) }, { sort: { position: 1 } }).forEach(function(product) {
      var last = chunks[chunks.length-1];

      if (!last) {
        last = [];
        chunks.push(last);
      }

      var spaces = _.reduce(last, function(memo, item) {
        return item.doubleSpace ? memo + 2 : memo + 1;
      }, 0);

      if ((spaces + (product.doubleSpace ? 2 : 1)) <= size) {
        last.push(product)
      } else {
        chunks.push([product]);
      }
    });

    return chunks;
  },
  getRow: function() {
    if (getIndexByIdentifier(Router.current().params.category) == 2) {
      return this.doubleSpace ? 'col-sm-6' : 'col-sm-3';
    } else {
      return this.doubleSpace ? 'col-sm-8' : 'col-sm-4';
    }
  }
})
