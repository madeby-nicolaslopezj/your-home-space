var getIndexByIdentifier = function(identifier) {
  if (orion.dictionary.get('inspireCategory2Url', '2') == identifier) {
    return 2;
  }
  if (orion.dictionary.get('inspireCategory3Url', '3') == identifier) {
    return 3;
  }
  return 1;
}

Meteor.publish('productsByCategory', function(category) {
  check(category, String);
  return orion.entities.products.collection.find({ category: getIndexByIdentifier(category) });
})
