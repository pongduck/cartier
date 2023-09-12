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
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    loop:true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable : true,
  },
});