const swiperTest = new Swiper('.swiper-rew', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arrow-slider-next',
    prevEl: '.arrow-slider-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
 // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 640px
    622: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const CloseMenuButton = document.querySelector('.navbar');

menuButton.addEventListener("click", (event) => {
  menu.classList.toggle("is-open");
});
CloseMenuButton.addEventListener("click", (event) => {
  menu.classList.toggle("is-open");
});