Template.blogIndex.helpers({
    posts: function () {
        all = orion.entities.posts.collection.find({}, {sort: {createdAt:-1}, limit:6}).fetch();
        chunks = [];
        size = 2
        while (all.length > size) {
            chunks.push({ row: all.slice(0, size)});
            all = all.slice(size);
        }
        chunks.push({row: all});
        return chunks;
    }
});

Template.registerHelper('getDate', function(date) {
    return moment(date).format('MMMM Do YYYY');
});