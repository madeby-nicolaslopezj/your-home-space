Template.home.helpers({
    homeImages: function () {
        return cms.dictionary.get('homeImages').map(function(document, index){
			document.index = index;
			return document;
		});
    },
    isCero: function(index) {
    	return index == 0;
    }
});