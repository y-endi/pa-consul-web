var Page = {};

(function($){

Page.init = function(){
	var $target = $('#PhotoSlide');
	Library.flatHeight($target.find('.inner .list li'));
	$target.find('.inner ').height($target.find('.inner .list li').height());
	Library.slider($target, {timer: 5000});
}

/* DOM READY */
$(function(){
	Page.init();
});


}(jQuery));
