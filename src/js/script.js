$(document).ready(function() {
   $('.testimonials__slider').slick({
      arrows:false,
      dots:true,
      initialSlide: 1
   });
});

// $(document).ready(function(){
//    if ($(window).width() <= '768'){
//       $('.testimonials__slider').slick({
//          arrows: false,
//          dots: true, 
//          // autoplay:true
//          initialSlide: 1,
//          vertical: true
//          // touchThreshold:15,
//          // touchMove: false, 
//          // centerMode:true
//       });
//    }
// })