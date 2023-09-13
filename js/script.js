// banner swiper
var swiper = new Swiper(".mySwiper-banner", {
  direction:'vertical',
  delay:3500,
  autoplay:true,
  loop:true,
});


// ring swpier
var swiper = new Swiper(".mySwiper-ring", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
    loop:true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable : true,
  },
});

// service swiper
function simpleParallax() {
  //스크롤된 거리
  var scrolled = $(window).scrollTop() + 1;
  
  //백그라운드 스크롤 속도 변경 시 0.3 을 수정
  $('.scroll').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
  simpleParallax();
});
