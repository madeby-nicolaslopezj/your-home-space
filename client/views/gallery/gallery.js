Template.gallery.helpers({
    images: function () {
        return cms.entities.gallery.collection.find({}).fetch();
    }
});