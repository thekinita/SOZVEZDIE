$('[review-slider]').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
});

$('[slider-forMap]').slick({
slidesToShow: 1,
slidesToScroll: 1,
adaptiveHeight: true,
arrows: false,
fade: false,
asNavFor: '[map-slider]',
});

$('[map-slider]').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  mobileFirst: true,
  draggable: false,
  swipe: false,
  asNavFor: '[slider-forMap]',
});

$('[slider-for]').slick({
slidesToShow: 1,
slidesToScroll: 1,
adaptiveHeight: true,
arrows: false,
fade: true,
asNavFor: '[region-slider]',
});

$('[region-slider]').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: true,
  dots: true,
  adaptiveHeight: true,
  mobileFirst: true,
  prevArrow: '<button type="button" class="slick-arrow_region slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-arrow_region slick-next">Next</button>',
  asNavFor: '[slider-for]',
});
