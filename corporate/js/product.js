var Page = {};

(function($){

Page.init = function(){
	Library.active($('#nav-03'));
	//Library.flatHeight($('#CorporateProduct .info section'), 2);
	 $('#nav-03').removeClass('rover');
}

/* DOM READY */
$(function(){
	Page.init();
});


}(jQuery));
