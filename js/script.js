$(document).ready(function(){
     $('#team_slider').owlCarousel({
          loop:true,
          margin:35,
          nav:true,
          center: true,
          dots: true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:3
              }
          }
     })
     $('#customer_slider').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          center: true,
          navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
          animateOut:'animate__fadeOutLeft',
          animateIn:'animate__fadeInRight',
          autoplayHoverPause:true,
          autoplay: true,
          autoplayTimeout:2000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:1
              }
          }
     })
});