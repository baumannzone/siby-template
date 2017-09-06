const App = {
  init() {
    console.log( 'Loading..' );
    App.swiperCards();
  },

  // Init swiper slider
  swiperCards() {
    const mySwiper = new Swiper( '.section-7 .swiper-container', {
      // Optional parameters
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      spaceBetween: 30,
      slidesPerView: 2,
      loop: true,
    } );
  },
};

App.init();
