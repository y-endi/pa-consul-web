var Page = {};

(function($){

Page.init = function(){
	
	//archiveList(
	Common.archiveList();

	//calendar
	$('#CorporateEvent .calendar .reserve dl').each(function(){
		//$(this).offset({top:-$(this).height()-9});
		$(this).css('top',-$(this).height()-9+'px');
	});
	$('#CorporateEvent .calendar .reserve').wrapInner('<span></span>');
	$('#CorporateEvent .calendar .reserve span').hover(function(){
		$(this).find('dl:not(:animated)').animate({height: "show"}, 400 , "easeInOutCubic");
	},function(){
		$(this).find('dl').animate({height: "hide"}, 400 , "easeInOutCubic");
	});
	//PhotoSlider
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
