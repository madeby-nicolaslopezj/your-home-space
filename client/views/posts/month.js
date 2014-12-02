Template.postsMonth.helpers({
    date: function() {
        var month = parseInt(this.month) - 1;
        return moment([this.year, month]).format("MMMM YYYY");
    },
	posts: function () {
        var min = getTimeMin(this.month, this.year);
        var max = getTimeMax(this.month, this.year);
        var all = orion.entities.posts.collection.find({createdAt: {$gte: min, $lt: max}}, {sort: {createdAt:-1}}).fetch();
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

function getTimeMin(month, year) {
    year = parseInt(year);
    month = parseInt(month);
    return new Date(year, month - 1, 1);
}

function getTimeMax(month, year) {
    year = parseInt(year);
    month = parseInt(month);
    return new Date(year, month - 1, 31);
}