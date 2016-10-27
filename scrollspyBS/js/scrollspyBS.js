(function($) {

	// jQuery plugin definition
	$.fn.scrollspyBS = function(params) {
	
	// merge default and user parameters
		params = $.extend( {headers: 'h2', offset_top: 190}, params);
	//Add BS column sizes
	
	console.log('yo');
	//"this" is the element were triggering the plug in;
	
	$('#scrollit').before('<div class="col-xs-3" id="myScollspy"></div>');
	$('div#myScollspy').append('<ul id="scrolllist" class="nav nav-tabs nav-stacked affix-top" data-spy="affix" data-offset-top="190" ></ul>');
	
	this.find('h2').each(function() {
		$('#scrolllist').append('<li><a href="#' + this.id + '" >' + this.id + '</a></li>');
	});
	$('ul.nav-tabs li:first-child').addClass('active');


	$('[data-spy="scroll"]').each(function() {
		var $spy = $(this).scrollspy('refresh');
		console.log($("ul.nav-tabs li").length);
	});

	$('body').scrollspy({
		target: '#myScrollspy'
	});

};
	
	return this;
})(jQuery);


