var Page = {};

(function($){

Page.init = function(){
	Page.CategoryIcon();
	Library.flatHeight($('#CorporateSouken .column2 dl'), 2);
	Library.flatHeight($('#CorporateSouken .column3 dl'), 3);
	Library.flatHeight($('#CorporateSouken .latest .link-list ul'), 2);
}
Page.CategoryIcon = function(options){
	var c = $.extend({
		IconSrc_date  : '/corporate/souken/images/index/ico_date.png',
		IconSrc_trend : '/corporate/souken/images/index/ico_trend.png',
		$target : $('#CorporateSouken .latest .pickup')
	}, options);
	c.$target.find('.date dt').append($('<img src="'+c.IconSrc_date+'" class="ico">'));
	c.$target.find('.trend dt').append($('<img src="'+c.IconSrc_trend+'" class="ico">'));
};

/* DOM READY */
$(function(){
	Page.init();
});


}(jQuery));
