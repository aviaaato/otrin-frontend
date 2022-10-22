import $ from "jquery";

(function () {

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
      $('#search-bar').removeClass("col-lg-12");
      $("#search-bar").addClass("col-lg-10 fixed-top mx-auto margin-to-res bg-light bg-opacity-50 pt-3 rounded-3");
      $("#search-form").addClass("border border-1 border-info");
      $('#check').addClass("text-dark");
      $('#check').removeClass("text-white");
    } else {
      $("header").removeClass("background-header");
      $('#search-bar').removeClass("col-lg-10 fixed-top mx-auto margin-to-res bg-light bg-opacity-25");
      $("#search-form").removeClass("border border-1 border-info");
      $("#search-bar").addClass("col-lg-12");
      $('#check').addClass("text-white");
      $('#check').removeClass("text-dark");
    }
  });
	
	// Page loading animation
	 $(window).on('load', function() {
        window.setTimeout(()=>{
          $('#js-preloader').addClass('loaded');
        }, 1000);
    });

})(window.jQuery);