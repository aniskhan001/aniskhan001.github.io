(function(){
	var link = $('link'),
		kiss = $('.kiss');
	$('.buttons').children().on('click', function(){
		var $this = $(this),
			stylesheet = $this.data('file');
		
		link.attr('href', stylesheet +'.css');
		$this
			.siblings('button')
				.removeAttr('disabled')
				.end()
				.attr('disabled', 'disabled');
		$('.description').text('You are now watching the '+ stylesheet + ' theme');
	});

	$('.chumma').on('click', function() {
		kiss.css('display', 'block');
		kiss.delay(999).fadeOut();
	});
})();