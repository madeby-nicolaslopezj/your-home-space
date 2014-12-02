Template.postsSidebar.helpers({
	recent: function () {
		return orion.entities.posts.collection.find({}, {sort: {createdAt:-1}, limit:6});
	},
	months: function() {
		var now = moment();
		var count = 0;
		var months = [];
		while (count < 12) {
			var min = new Date(parseInt(now.format("YYYY")), parseInt(now.format("MM")) -1, 1);
			var max = new Date(parseInt(now.format("YYYY")), parseInt(now.format("MM")) -1, 31);
	        var total = orion.entities.posts.collection.find({createdAt: {$gte: min, $lt: max}}, {sort: {createdAt:-1}}).count();
			var month = {
				date: now.format("MMMM YYYY"),
				count: total,
				year: now.format('YYYY'),
				month: now.format('MM'),
			}
			if (total > 0) {
				months.push(month);
			}
			now.subtract(1, 'months')
			count++;
		}

		return months;
	}
});

Template.postsSidebar.rendered = function () {
	$.ajax({ url: 'http://assets.pinterest.com/js/pinit.js', dataType: 'script', cache:true});
	$.ajax({ url: 'http://assets.pinterest.com/js/pinit_main.js', dataType: 'script', cache:true});
};