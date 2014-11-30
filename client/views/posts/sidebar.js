Template.postsSidebar.helpers({
	recent: function () {
		return orion.entities.posts.collection.find({}, {sort: {createdAt:-1}, limit:6});
	},
	months: function() {
		var now = moment();
		var count = 0;
		var months = [];
		while (count < 12) {
			months.push(now.format("MMMM YYYY"));
			now.subtract(1, 'months')
			count++;
		}

		return months;
	}
});

Template.postsSidebar.rendered = function () {
	var Pinterest = {
	    load: function(callback) {
	        $.getScript('//assets.pinterest.com/js/pinit.js', callback)
	    },

	    // Get the Pinterest instance
	    get: function() {
	      for (var i in window) {
	         if (i.indexOf('PIN_') == 0 && typeof window[i] == 'object') {
	            return window[n]
	         }
	      }
	    },

	    // Render Pinterest buttons
	    render: function(el) {
	        this.get().f.render.buttonPin(el);
	    }
	}
	Pinterest.load(function(callback) {
	    Pinterest.render($('.pinterest a')[0]);
	});
};