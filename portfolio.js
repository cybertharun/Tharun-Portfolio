var typed=new Typed('.text1',{
    strings : ['Frontend Developer'],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  spaceBetween:20,
  breakpoints: {
    400:{
      slidesPerView: 1,
    },
    550:{
      slidesPerView: 2,
    },
    1000:{
      slidesPerView:3,
    },
  },
});