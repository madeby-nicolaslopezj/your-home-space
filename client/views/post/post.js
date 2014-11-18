Template.post.rendered = function () {
	$('html, body').animate({
        scrollTop: 0
    }, 1000);

    $.ajax({ url: 'http://platform.twitter.com/widgets.js', dataType: 'script', cache:true});
};

Template.postItem.helpers({
	location: function () {

		console.log('http://www.facebook.com/plugins/like.php?href=' + Router.url('post', Router.current().params) + '&width&layout=button_count&action=like&show_faces=false&share=true&height=20&appId=601797256593917')
		return 'http://www.facebook.com/plugins/like.php?href=' + Router.url('post', Router.current().params) + '&width&layout=button_count&action=like&show_faces=false&share=true&height=20&appId=601797256593917';
	}
});