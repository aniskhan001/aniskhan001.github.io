$(document).ready(function($) {
  $('.goto').click(function(e){
     e.preventDefault();
     console.log('hi');
     scrollToElement( $(this).attr('href'), 1500 );
  });

  var scrollToElement = function(el, ms){
      var speed = (ms) ? ms : 600;
      $('html,body').animate({
          scrollTop: $(el).offset().top - 60
      }, speed);
  }
});