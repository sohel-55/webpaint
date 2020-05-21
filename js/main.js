// =========== Carousel slider ================

$('.slider_active').owlCarousel({
   loop: true,
   autoplay: true,
   responsiveClass: true,
   smartSpeed: 1000,
   autoplayTimeout: 3000,
   margin: 10,
   dots: false,
   nav: false,
   navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      },
      1200: {
         items: 1
      },
   }
});

// ============ Sticky menu bar ===========  

$(window).on('scroll', function () {
   var scroll = $(window).scrollTop();
   if (scroll < 10) {
      $("#header_sticky").removeClass("sticky");
   } else {
      $("#header_sticky").addClass("sticky");
   }
});


// -============= vedio popup  ==================

$(document).ready(function () {

   $(".video_play_btn").magnificPopup({

      type: "video",

   });


});





//  $(".class") .click(function(){

//      $(".class") .hide(timeset set)

//      });