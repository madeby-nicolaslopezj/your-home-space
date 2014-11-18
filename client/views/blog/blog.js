Template.blog.helpers({
    posts: function () {
        all = orion.entities.posts.collection.find({}).fetch();
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