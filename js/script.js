

$(document).ready(function(){
  /*Скрипт появления всплывающего окна */
	$('.popup-btn').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});
	$('.popup-close').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});
    /*Слайдер с отзывами*/

    $('.slider').slick({
/*      prevArrow'<button type="button" class="slider-btn slider-prev-btn"><img src="img/feedback-slider/arrow-prew." alt=""</button>',
      nextArrow'<button type="button" class="slider-btn slider-next-btn"><img src="img/feedback-slider/arrow-next." alt=""</button>'
*/    });


    /*Слайдер с преимуществами*/
  $('.features-slider').slick({
    infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="next arrow"></button>',
        nextArrow: '<button class="prev arrow"></button>',
  
        slidesToScroll: 2 
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevtArrow: '<button class="next arrow"></button>',
        nextArrow: '<button class="prev arrow"></button>'
      }
    }
    
  ] 
  });
});

/*$(document).ready(function(){
  $('.feedback-slider').slick();
});*/