(function($) {
	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width, // 600px
		imgsLen = imgs.length, // 4
		current = 1,
		totalImgsWidth = imgsLen * imgWidth; // 2400

	$('button').hover(
		function(){
			$(this).addClass('hover');
			console.log(this);
		},
		function(){
			$(this).removeClass('hover');
		}
	);


	$('#slider-nav').show().find('button').on('click', function(){
		var direction = $(this).data('dir'),
			loc = imgWidth;

		// adding class for clicked type


		//update current value
		(direction === 'next') ? ++current : --current;

		if (current === 0) { // if first image
			current = imgsLen;
			loc = totalImgsWidth - imgWidth; // 3400-1800
			direction = 'next';
		}else if (current -1 === imgsLen) { // Are we at end? Should we reset?
			current = 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);
	});

	function transition(container, loc, direction){
		var unit; // -= +=

		if (direction && loc !== 0) {
			unit = (direction === 'next') ? '-=' : '+=';
		}

		container.animate({
			'margin-left': unit ? (unit+loc) : loc
		});
	};
})(jQuery);