// (function ($) {


// })(jQuery);

  // Portfolio section Start
  // Collect from https://codepen.io/desandro/pen/RPKgEN
  // var $grid = $('.grid').masonry({
  //   itemSelector: '.grid-item',
  //   percentPosition: true,
  //   columnWidth: '.grid-sizer'
  // });
  // layout Masonry after each image loads
  // $grid.imagesLoaded().progress(function () {
  //   $grid.masonry();
  // });
  // Portfolio section End


  // Hero Swiper Slider Start
  var mySwiper = new Swiper("#heroBG", {
    speed: 500,
    direction: "horizontal",
    autoplay: {
      delay: 5000
    },
    loop: true
  });
  // Hero Swiper Slider End


  // Tesimonial Swiper Slider Start
  var mySwiper = new Swiper(".testimonial-slider", {
    speed: 500,
    direction: "horizontal",
    pagination: {
      el: '.swiper-pagination',
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 10000
    },
    loop: true
  });
  // Tesimonial Swiper Slider End


  // goTop Scroll Event start
  window.onscroll = () => {
    let goTop = document.getElementById('goTop');
    document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? goTop.style.display = "block" : goTop.style.display = "none";
    
  }
  // Cross Browser Suport
  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 10, function(){
          window.location.hash = hash;
        });
      } // End if
    });
  });
  // goTop Scroll Event End