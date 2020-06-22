$(document).ready(function(){

    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
         $(".header-area").removeClass("scroll-header");
        }else{
         $(".header-area").addClass("scroll-header");
        }
   });
   
   //pop-up js
   $('.popup').magnificPopup({
    type: 'image', /*for video use iframe for image use image*/
    // other options
    gallery:{enabled:true}
  });


});