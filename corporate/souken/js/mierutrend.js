var Page = {};

(function($){

Page.init = function(){
	
	//archiveList
	Common.archiveList();
		
	//PhotoSlider
	var $target = $('#PhotoSlide');
	Library.flatHeight($target.find('.inner .list li'));
	var newArry =[];
	$target.find('.inner .list li').each(function(i) {
		newArry[i] = $(this).width();
	});
	var innerwidth = Math.max.apply(null, newArry);
	$target.find('.inner').width(innerwidth);
	$target.find('.inner .list li').width(innerwidth);
	$target.width(innerwidth);
	$target.find('.inner ').height($target.find('.inner .list li').height());
	Library.slider($target, {timer: 5000});
	
}

/* DOM READY */
$(function(){
	Page.init();
});


}(jQuery));
