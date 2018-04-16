var Page = {};

(function($){

Page.init = function(){
	Library.active($('#nav-01'));
	$('#CorporateIndex .facility .thums li a').prepend('<img src="/corporate/images/index/photo_bg_on.png" class="ico">');

	/*
	Common.showMap('MapTokyo',{'lat':'35.658065','lng':'139.755091','icon':'/corporate/images/index/access_img_map.png'});
	Common.showMap('MapKansai',{'lat':'34.692127','lng':'135.501887','icon':'/corporate/images/index/access_img_map.png'});
	*/	
	Common.showMap('MapTokyo',{'lat':'35.658065','lng':'139.755191','icon':'/corporate/images/index/access_img_map2.png'});
	Common.showMap('MapOsaka', { 'lat': '34.693832', 'lng': '135.498652', 'icon': '/corporate/images/index/access_img_map2.png' });
	Common.showMap('MapFukuoka',{'lat':'33.591488','lng':'130.402465','icon':'/corporate/images/index/access_img_map2.png'});

	$("#CorporateIndex .facility ul li a").fancybox({
		'titlePosition'		: 'inside',
		'overlayOpacity'		: 0.7,
		'overlayColor'		:'#000',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return (currentIndex + 1) + '.　' + title;
			//return '<span id="fancybox-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	});
}

/* DOM READY */
$(function(){
	Page.init();
});


}(jQuery));
