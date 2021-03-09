// Inicializa Swiper.js
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Mousewheel]);

const pagination_icons = [
  '<i class="fas fa-user"></i>',
  '<i class="fas fa-graduation-cap"></i>',
  '<i class="fas fa-briefcase"></i>'
];

const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet--active',
    renderBullet: function (index, className) {
      return '<span class="' + className + '"tabindex="0" role="button">' + pagination_icons[index] + '</span>';
    },
  },
  mousewheel: true,
  breakpoints: {
    640: {
      slidesPerView: 3,
      direction: 'horizontal'
    }
  }
});

//swiper.on