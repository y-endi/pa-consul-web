var Page = {};

(function($){

Page.init = function(){
	//Library.active($('#nav-03'));
	Library.flatHeight($('#CorporateSocial .detail section .txt'), 3);
}

/* DOM READY */
$(function(){
	Page.init();
});


}(jQuery));
