
$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 4000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Python Enthusiast.","Student.","Junior Analyst."],
    typeSpeed: 65,
    loop: true,
    startDelay: 1200,
    showCursor: false,
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      items: 4,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
              items:4
         }
      }
  });



   var skillsTopOffSet = $(".skillsSection").offset().top;

   $(window).scroll(function() {

     if(window.pageYOffset > skillsTopOffSet - $(window).height() + 300) {

       $('.chart').easyPieChart({
           easing: 'easeInOut',
           barColor: '#fff',
           trackColor: false,
           scaleColor: false,
           lineWidth: 4,
           size:152,
           onStep: function(from, to, percent) {
             $(this.el).find('.percent').text(Math.round(percent));
           }
        });
      }
   });

   $("[data-fancybox]").fancybox();

   $(".items").isotope({
     filter:'*'
     animationOptions: {
       durations: 1500,
       easing: 'linear',
       queue: false
     }
   });
});
