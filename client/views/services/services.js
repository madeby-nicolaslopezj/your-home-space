Template.services.helpers({
    services: function () {
        all = orion.entities.services.collection.find({}).fetch();
        chunks = [];
        size = 3
        while (all.length > 3) {
            chunks.push({ row: all.slice(0, 3)});
            all = all.slice(3);
        }
        chunks.push({row: all});
        return chunks;
    }
});

Template.servicesItem.events({
    'click .service-circle': function () {
        Session.set('activeService', this);

        $('html, body').animate({
            scrollTop: $(".servicesFragment").offset().top - 100
        }, 500);
    }
});