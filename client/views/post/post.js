Template.blogShow.helpers({
	url: function() {
		return  Router.url('post', Router.current().params);
	},
	location: function () {

		console.log('http://www.facebook.com/plugins/like.php?href=' + Router.url('post', Router.current().params) + '&width&layout=button_count&action=like&show_faces=false&share=true&height=20&appId=601797256593917')
		return 'http://www.facebook.com/plugins/like.php?href=' + Router.url('post', Router.current().params) + '&width&layout=button_count&action=like&show_faces=false&share=true&height=20&appId=601797256593917';
	}
});

Template.blogShow.rendered = function () {
	$('html, body').animate({
        scrollTop: 0
    }, 0);
};